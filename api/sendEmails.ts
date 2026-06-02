/**
 * Contact-form submission handler (Vercel serverless function).
 *
 * Pipeline:
 *   1. Parse multipart/form-data with formidable (keeps file-upload support).
 *   2. Validate with the shared Zod schema from lib/forms/contactSchema.
 *   3. Rate-limit by client IP (Upstash, 5 req/h per IP) — fail-open if
 *      Upstash is not configured.
 *   4. Verify the Cloudflare Turnstile token — skipped in dev when no
 *      TURNSTILE_SECRET_KEY is present.
 *   5. Send email via Resend (retry once on transient failure).
 *   6. Best-effort CRM: createLead() in Notion, sendLeadAlert() to
 *      Telegram. Both non-throwing per Stream B/D contracts — wrapped in
 *      try/catch as defence-in-depth. Their failure does NOT fail the
 *      request.
 *
 * Responses:
 *   200 { ok: true, notionId?, notionUrl? }
 *   400 { error: 'invalid-input', issues }          — Zod failure
 *   403 { error: 'turnstile-failed' }                — bot protection
 *   405 { error: 'method-not-allowed' }              — non-POST
 *   429 { error: 'rate-limited', reset }             — too many requests
 *   500 { error: 'form-parse-error' | 'internal' }   — unexpected
 *   502 { error: 'email-send-failed' }               — Resend exhausted retries
 *   503 { error: 'email-not-configured' }            — RESEND_API_KEY missing
 */

import { VercelRequest, VercelResponse } from '@vercel/node';
import formidable from 'formidable';
import fs from 'fs';
import { Resend } from 'resend';

import {
  contactSchema,
  contactSchemaDev,
  type ContactInput,
  type Industry,
} from '@/lib/forms/contactSchema';
import { verifyTurnstileToken } from '@/lib/security/turnstile';
import { limitContactForm } from '@/lib/security/rateLimit';
import { createLead } from '@/lib/notion/leads';
import { sendLeadAlert } from '@/lib/alerts/telegram';

export const config = {
  api: {
    bodyParser: false,
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function firstString(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const header = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  if (header) {
    const first = header.split(',')[0]?.trim();
    if (first) return first;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const remote = (req as any).socket?.remoteAddress as string | undefined;
  return remote || 'unknown';
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseForm(
  req: VercelRequest,
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: false,
      maxFileSize: 10 * 1024 * 1024, // 10 MB
    });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
}

type EmailTemplate = {
  subject: string;
  html: string;
  text: string;
};

function buildEmail(data: ContactInput): EmailTemplate {
  const subject = `New lead — ${data.fullName}${data.company ? ` (${data.company})` : ''}`;

  const row = (label: string, value: string | undefined | null) => {
    if (!value) return '';
    return `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #2d3748;color:#a0aec0;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #2d3748;color:#e2e8f0;">${escapeHtml(value)}</td>
      </tr>`;
  };

  const html = `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="max-width:640px;margin:0 auto;background:#1a202c;border-radius:12px;padding:24px;color:#e2e8f0;">
      <h1 style="margin:0 0 16px 0;font-size:20px;color:#ffffff;">${escapeHtml(subject)}</h1>
      <table role="presentation" style="width:100%;border-collapse:collapse;font-size:14px;">
        ${row('Name', data.fullName)}
        ${row('Email', data.email)}
        ${row('Company', data.company || undefined)}
        ${row('Phone', data.phone || undefined)}
        ${row('Industry', data.industry)}
        ${row('NDA', data.nda ? 'Yes' : 'No')}
      </table>
      <h2 style="margin:24px 0 8px 0;font-size:16px;color:#ffffff;">Message</h2>
      <div style="white-space:pre-wrap;line-height:1.5;color:#e2e8f0;background:#2d3748;padding:12px;border-radius:8px;">${escapeHtml(data.message)}</div>
      <p style="margin:24px 0 0 0;font-size:12px;color:#718096;">
        ECITech website lead. Reply directly to this email to contact the lead — Reply-To is set.
      </p>
    </div>
  </body>
</html>`;

  const textLines = [
    subject,
    '',
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
  ];
  if (data.company) textLines.push(`Company: ${data.company}`);
  if (data.phone) textLines.push(`Phone: ${data.phone}`);
  if (data.industry) textLines.push(`Industry: ${data.industry}`);
  textLines.push(`NDA: ${data.nda ? 'Yes' : 'No'}`);
  textLines.push('', 'Message:', data.message, '');
  textLines.push(
    'ECITech website lead. Reply directly to this email to contact the lead.',
  );

  return { subject, html, text: textLines.join('\n') };
}

type Attachment = {
  filename: string;
  content: Buffer;
};

async function sendWithRetry(
  resend: Resend,
  payload: Parameters<Resend['emails']['send']>[0],
): Promise<{ ok: true } | { ok: false; status: number; message: string }> {
  const attempt = async () => {
    try {
      const res = await resend.emails.send(payload);
      if (res.error) {
        const status =
          typeof (res.error as { statusCode?: number }).statusCode === 'number'
            ? (res.error as { statusCode?: number }).statusCode!
            : 500;
        return {
          ok: false as const,
          status,
          message: res.error.message ?? 'resend-error',
        };
      }
      return { ok: true as const };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'unknown-resend-error';
      return { ok: false as const, status: 500, message };
    }
  };

  const first = await attempt();
  if (first.ok) return first;

  // Retry once on transient failures (5xx or network). Bail on 4xx.
  if (first.status >= 500) {
    // eslint-disable-next-line no-console
    console.warn(
      `[sendEmails] Resend transient error (${first.status}): ${first.message} — retrying once`,
    );
    const second = await attempt();
    return second;
  }

  return first;
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method-not-allowed' });
    return;
  }

  let parsed: { fields: formidable.Fields; files: formidable.Files };
  try {
    parsed = await parseForm(req);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'form-parse-error';
    // eslint-disable-next-line no-console
    console.error('[sendEmails] form parse error:', message);
    res.status(500).json({ error: 'form-parse-error' });
    return;
  }

  const { fields, files } = parsed;

  // Build the raw object for Zod. FormData stringifies everything.
  const raw = {
    fullName: firstString(fields.fullName) ?? '',
    email: firstString(fields.email) ?? '',
    company: firstString(fields.company) ?? '',
    phone: firstString(fields.phone) ?? '',
    message: firstString(fields.message) ?? firstString(fields.about) ?? '',
    industry: firstString(fields.industry) as Industry | undefined,
    nda: firstString(fields.nda) === 'true',
    turnstileToken: firstString(fields.turnstileToken) ?? '',
  };

  const hasTurnstileSecret = Boolean(process.env.TURNSTILE_SECRET_KEY);
  const schema = hasTurnstileSecret ? contactSchema : contactSchemaDev;
  const parseResult = schema.safeParse(raw);

  if (!parseResult.success) {
    res.status(400).json({
      error: 'invalid-input',
      issues: parseResult.error.issues.map((i) => ({
        path: i.path.join('.'),
        message: i.message,
      })),
    });
    return;
  }

  // Narrow to the common fields we consume below. `turnstileToken`
  // diverges between prod/dev schemas but is already consumed for
  // verification before any downstream use of `data`.
  const data = parseResult.data as ContactInput;

  // Rate limit (per-IP). Fail-open on infra errors.
  const ip = getClientIp(req);
  const rl = await limitContactForm(ip);
  if (!rl.success) {
    res
      .status(429)
      .json({ error: 'rate-limited', reset: rl.reset, limit: rl.limit });
    return;
  }

  // Turnstile verification.
  const turnstileOk = await verifyTurnstileToken(data.turnstileToken, ip);
  if (!turnstileOk) {
    res.status(403).json({ error: 'turnstile-failed' });
    return;
  }

  // Resend setup
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.LEAD_NOTIFICATION_EMAIL;
  const ccEmail = process.env.LEAD_NOTIFICATION_CC;

  if (!apiKey || !fromEmail || !toEmail) {
    // eslint-disable-next-line no-console
    console.error(
      '[sendEmails] RESEND_API_KEY / RESEND_FROM_EMAIL / LEAD_NOTIFICATION_EMAIL missing',
    );
    res.status(503).json({ error: 'email-not-configured' });
    return;
  }

  // Optional file attachment
  const attachments: Attachment[] = [];
  const projectFile = files.projectFile;
  if (projectFile) {
    const fileData = Array.isArray(projectFile) ? projectFile[0] : projectFile;
    if (fileData?.filepath) {
      try {
        const buffer = fs.readFileSync(fileData.filepath);
        attachments.push({
          filename: fileData.originalFilename || 'attachment',
          content: buffer,
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn(
          '[sendEmails] attachment read failed, continuing without it:',
          err instanceof Error ? err.message : 'unknown',
        );
      }
    }
  }

  const template = buildEmail(data);
  const resend = new Resend(apiKey);

  const sendResult = await sendWithRetry(resend, {
    from: fromEmail,
    to: [toEmail],
    cc: ccEmail ? [ccEmail] : undefined,
    replyTo: data.email,
    subject: template.subject,
    html: template.html,
    text: template.text,
    attachments: attachments.length
      ? attachments.map((a) => ({ filename: a.filename, content: a.content }))
      : undefined,
  });

  if (!sendResult.ok) {
    // eslint-disable-next-line no-console
    console.error(
      `[sendEmails] Resend send failed (${sendResult.status}): ${sendResult.message}`,
    );
    res.status(502).json({ error: 'email-send-failed' });
    return;
  }

  // ----- Best-effort CRM + alerting -----
  // Both helpers are non-throwing per Stream B/D contracts. Defence-in-depth
  // try/catch so an unexpected throw never breaks the happy path.
  let notionUrl: string | undefined;
  let notionId: string | undefined;
  try {
    const notionResult = await createLead({
      fullName: data.fullName,
      email: data.email,
      company: data.company || undefined,
      phone: data.phone || undefined,
      message: data.message,
      industry: data.industry,
      nda: data.nda,
      source: 'website-form',
      // TODO(file-attachment-storage): upload the form file to S3/Notion
      //   and pass the resulting URL here. Email already carries the
      //   attachment; Notion currently does not.
      attachmentUrl: undefined,
    });
    if ('id' in notionResult) {
      notionId = notionResult.id;
      notionUrl = notionResult.url;
    } else {
      // eslint-disable-next-line no-console
      console.warn('[sendEmails] Notion createLead error:', notionResult.error);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      '[sendEmails] Notion createLead threw unexpectedly:',
      err instanceof Error ? err.message : err,
    );
  }

  try {
    const alertResult = await sendLeadAlert({
      fullName: data.fullName,
      email: data.email,
      company: data.company || undefined,
      phone: data.phone || undefined,
      message: data.message,
      source: 'website-form',
      notionUrl,
    });
    if (!alertResult.ok) {
      // eslint-disable-next-line no-console
      console.warn('[sendEmails] Telegram alert error:', alertResult.error);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      '[sendEmails] Telegram sendLeadAlert threw unexpectedly:',
      err instanceof Error ? err.message : err,
    );
  }

  res.status(200).json({ ok: true, notionId, notionUrl });
}
