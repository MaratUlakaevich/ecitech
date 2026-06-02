/**
 * Telegram lead-alert helper.
 * Used by server-side form handlers (e.g. api/sendEmails.ts — Stream A).
 */

export type LeadAlert = {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  source?: string;
  notionUrl?: string;
};

export type LeadAlertResult = { ok: true } | { ok: false; error: string };

/**
 * Minimal HTML escape for Telegram `parse_mode: 'HTML'`.
 * Telegram only requires <, >, & escaped inside text nodes.
 */
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatMessage(lead: LeadAlert): string {
  const lines: string[] = ['<b>New lead</b>'];
  lines.push(`<b>Name:</b> ${escapeHtml(lead.fullName)}`);
  lines.push(`<b>Email:</b> ${escapeHtml(lead.email)}`);
  if (lead.company) lines.push(`<b>Company:</b> ${escapeHtml(lead.company)}`);
  if (lead.phone) lines.push(`<b>Phone:</b> ${escapeHtml(lead.phone)}`);
  if (lead.source) lines.push(`<b>Source:</b> ${escapeHtml(lead.source)}`);
  lines.push('');
  lines.push('<b>Message:</b>');
  lines.push(escapeHtml(lead.message));
  if (lead.notionUrl) {
    lines.push('');
    lines.push(`<b>Notion:</b> ${escapeHtml(lead.notionUrl)}`);
  }
  return lines.join('\n');
}

/**
 * Send a lead alert to Telegram.
 * - Reads TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID from env.
 * - Returns an ok/error result; never throws.
 * - 5-second timeout via AbortController.
 */
export async function sendLeadAlert(
  lead: LeadAlert,
): Promise<LeadAlertResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    // eslint-disable-next-line no-console
    console.warn(
      '[telegram] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID missing; skipping lead alert',
    );
    return { ok: false, error: 'telegram-not-configured' };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: formatMessage(lead),
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
        signal: controller.signal,
      },
    );

    if (!res.ok) {
      let errorText = `status ${res.status}`;
      try {
        errorText = await res.text();
      } catch {
        // ignore
      }
      return { ok: false, error: errorText };
    }

    return { ok: true };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'unknown-telegram-error';
    return { ok: false, error: message };
  } finally {
    clearTimeout(timeout);
  }
}
