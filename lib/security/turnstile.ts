/**
 * Cloudflare Turnstile server-side token verification.
 *
 * Contract:
 *   - Returns `true` when the token is valid for the configured secret.
 *   - Returns `false` when Turnstile rejects the token.
 *   - If `TURNSTILE_SECRET_KEY` is missing (dev mode), logs a warning
 *     and returns `true` so local development does not require a
 *     Turnstile account. Production must set the secret.
 *   - Never throws. Network / Cloudflare failures resolve to `false`.
 */

const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

type TurnstileResponse = {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
};

export async function verifyTurnstileToken(
  token: string | undefined,
  ip: string | undefined,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    // eslint-disable-next-line no-console
    console.warn(
      '[turnstile] TURNSTILE_SECRET_KEY missing — skipping verification (dev mode)',
    );
    return true;
  }

  if (!token) {
    return false;
  }

  const body = new URLSearchParams();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
      signal: controller.signal,
    });

    if (!res.ok) {
      // eslint-disable-next-line no-console
      console.error(
        `[turnstile] verification HTTP ${res.status} — treating as invalid`,
      );
      return false;
    }

    const data = (await res.json()) as TurnstileResponse;
    if (!data.success) {
      // eslint-disable-next-line no-console
      console.warn(
        '[turnstile] token rejected:',
        data['error-codes']?.join(', ') ?? 'unknown',
      );
    }
    return Boolean(data.success);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'unknown-turnstile-error';
    // eslint-disable-next-line no-console
    console.error('[turnstile] verification failed:', message);
    return false;
  } finally {
    clearTimeout(timeout);
  }
}
