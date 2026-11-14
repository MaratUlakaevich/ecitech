/**
 * Contact-form submission handler (Next.js route handler, POST /api/sendEmails).
 *
 * Pipeline:
 *   1. Parse multipart/form-data with Request.formData() (keeps file-upload support).
 *   2. Validate with the shared Zod schema from lib/forms/contactSchema.
 *   3. Rate-limit by client IP (Upstash, 5 req/h per IP) — fail-open if
 *      Upstash is not configured.
 *   4. Verify the Cloudflare Turnstile token — skipped in dev when no
 *      TURNSTILE_SECRET_KEY is present.
 *   5. Deliver to every configured channel: email via Resend (retry once
 *      on transient failure), a lead in Notion, an alert in Telegram. Each
 *      channel is optional and non-throwing; the request succeeds when at
 *      least one of them took the lead.
 *
 * Responses:
 *   200 { ok: true, delivered, notionId?, notionUrl? }
 *   400 { error: 'invalid-input', issues }          — Zod failure
 *   400 { error: 'form-parse-error' }                — body is not form data
 *   403 { error: 'turnstile-failed' }                — bot protection
 *   405                                              — non-POST (Next.js)
 *   413 { error: 'file-too-large' }                  — attachment over 10 MB
 *   429 { error: 'rate-limited', reset }             — too many requests
 *   503 { error: 'not-delivered' }                   — no channel took the lead
 */

import { NextResponse } from 'next/server';
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

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function field(form: FormData, name: string): string | undefined {
  const v = form.get(name);
  return typeof v === 'string' ? v : undefined;
}

function getClientIp(req: Request): string {
  const header = req.headers.get('x-forwarded-for');
  const first = header?.split(',')[0]?.trim();
  return first || req.headers.get('x-real-ip') || 'unknown';
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

export async function POST(req: Request): Promise<Response> {
  let form: FormData;
  try {
    form = await req.formData();
  } catch (err) {
    const message = err instanceof Error ? err.message : 'form-parse-error';
    // eslint-disable-next-line no-console
    console.error('[sendEmails] form parse error:', message);
    return NextResponse.json({ error: 'form-parse-error' }, { status: 400 });
  }

  // Build the raw object for Zod. FormData stringifies everything.
  // Honeypot: the hidden "website" field is filled only by bots. Answer as if
  // the lead was taken, so the bot learns nothing, and deliver nothing.
  if (field(form, 'website')) {
    // eslint-disable-next-line no-console
    console.warn('[sendEmails] honeypot filled; dropping submission');
    return NextResponse.json({ ok: true, delivered: [] });
  }

  const raw = {
    fullName: field(form, 'fullName') ?? '',
    email: field(form, 'email') ?? '',
    company: field(form, 'company') ?? '',
    phone: field(form, 'phone') ?? '',
    message: field(form, 'message') ?? field(form, 'about') ?? '',
    industry: field(form, 'industry') as Industry | undefined,
    nda: field(form, 'nda') === 'true',
    turnstileToken: field(form, 'turnstileToken') ?? '',
  };

  const hasTurnstileSecret = Boolean(process.env.TURNSTILE_SECRET_KEY);
  const schema = hasTurnstileSecret ? contactSchema : contactSchemaDev;
  const parseResult = schema.safeParse(raw);

  if (!parseResult.success) {
    return NextResponse.json({
      error: 'invalid-input',
      issues: parseResult.error.issues.map((i) => ({
        path: i.path.join('.'),
        message: i.message,
      })),
    }, { status: 400 });
  }

  // Narrow to the common fields we consume below. `turnstileToken`
  // diverges between prod/dev schemas but is already consumed for
  // verification before any downstream use of `data`.
  const data = parseResult.data as ContactInput;

  // Rate limit (per-IP). Fail-open on infra errors.
  const ip = getClientIp(req);
  const rl = await limitContactForm(ip);
  if (!rl.success) {
    return NextResponse.json({ error: 'rate-limited', reset: rl.reset, limit: rl.limit }, { status: 429 });
  }

  // Turnstile verification.
  const turnstileOk = await verifyTurnstileToken(data.turnstileToken, ip);
  if (!turnstileOk) {
    return NextResponse.json({ error: 'turnstile-failed' }, { status: 403 });
  }

  // Delivery channels: email (Resend), Notion CRM, Telegram alert. Each is
  // optional; the lead counts as received when at least one channel took it.
  const delivered: string[] = [];

  // Optional file attachment
  const attachments: Attachment[] = [];
  const projectFile = form.get('projectFile');
  if (projectFile instanceof File && projectFile.size > 0) {
    if (projectFile.size > MAX_FILE_BYTES) {
      return NextResponse.json({ error: 'file-too-large' }, { status: 413 });
    }
    attachments.push({
      filename: projectFile.name || 'attachment',
      content: Buffer.from(await projectFile.arrayBuffer()),
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.LEAD_NOTIFICATION_EMAIL;
  const ccEmail = process.env.LEAD_NOTIFICATION_CC;

  if (apiKey && fromEmail && toEmail) {
    const template = buildEmail(data);
    const sendResult = await sendWithRetry(new Resend(apiKey), {
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
    if (sendResult.ok) delivered.push('email');
    else {
      // eslint-disable-next-line no-console
      console.error(
        `[sendEmails] Resend send failed (${sendResult.status}): ${sendResult.message}`,
      );
    }
  } else {
    // eslint-disable-next-line no-console
    console.warn('[sendEmails] Resend not configured; skipping email');
  }

  // ----- CRM + alerting -----
  // Both helpers are non-throwing. Defence-in-depth try/catch so an
  // unexpected throw never breaks the request.
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
      delivered.push('notion');
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
    if (alertResult.ok) delivered.push('telegram');
    else {
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

  if (delivered.length === 0) {
    // eslint-disable-next-line no-console
    console.error('[sendEmails] lead not delivered to any channel');
    return NextResponse.json({ error: 'not-delivered' }, { status: 503 });
  }

  return NextResponse.json({ ok: true, delivered, notionId, notionUrl });
}
