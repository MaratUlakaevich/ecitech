/**
 * Upstash Redis-backed rate limiter for the contact form.
 *
 * Contract:
 *   - `limitContactForm(ip)` returns `{ success, limit, remaining, reset }`.
 *   - 5 requests per hour per IP (sliding window).
 *   - If `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` are not
 *     configured, the limiter gracefully no-ops and returns
 *     `{ success: true }` so local development does not require Upstash.
 *   - Never throws; Upstash/network errors degrade to `{ success: true }`
 *     (fail-open) so legitimate users are not blocked by infra issues.
 *     Defence-in-depth: Turnstile + Zod still gate bad submissions.
 */

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export type RateLimitResult = {
  success: boolean;
  limit?: number;
  remaining?: number;
  reset?: number;
};

let cachedLimiter: Ratelimit | null = null;
let resolvedOnce = false;

function getLimiter(): Ratelimit | null {
  if (resolvedOnce) return cachedLimiter;
  resolvedOnce = true;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    // eslint-disable-next-line no-console
    console.warn(
      '[ratelimit] UPSTASH_REDIS_REST_URL/TOKEN missing — rate limiting disabled',
    );
    cachedLimiter = null;
    return null;
  }

  const redis = new Redis({ url, token });
  cachedLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '1 h'),
    analytics: true,
    prefix: 'ratelimit:contact-form',
  });
  return cachedLimiter;
}

export async function limitContactForm(ip: string): Promise<RateLimitResult> {
  const limiter = getLimiter();
  if (!limiter) {
    return { success: true };
  }

  try {
    const identifier = ip || 'unknown';
    const { success, limit, remaining, reset } = await limiter.limit(
      identifier,
    );
    return { success, limit, remaining, reset };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'unknown-ratelimit-error';
    // eslint-disable-next-line no-console
    console.error('[ratelimit] limiter failed (fail-open):', message);
    return { success: true };
  }
}
