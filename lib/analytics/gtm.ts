/**
 * GTM dataLayer event helper.
 *
 * GTM is loaded in `app/layout.tsx` with container id GTM-KMRP9WR8.
 * This module only pushes typed events to `window.dataLayer`.
 */

export type GtmEvent =
  | { event: 'cta_click'; cta_label: string; location: string }
  | { event: 'portfolio_view'; case_slug: string }
  | { event: 'blog_read_60s'; article_slug: string }
  | { event: 'meeting_booked'; source?: string }
  | { event: 'form_submit'; form_id: string }
  | { event: 'form_success'; form_id: string }
  | { event: 'form_error'; form_id: string; error_code?: string };

type DataLayer = Array<Record<string, unknown>>;

declare global {
  interface Window {
    dataLayer?: DataLayer;
  }
}

/**
 * Push a typed analytics event to the GTM dataLayer.
 * SSR-safe: no-op on the server. Never throws.
 */
export function pushEvent(payload: GtmEvent): void {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload as unknown as Record<string, unknown>);
  } catch {
    // Swallow — analytics must never break the UI.
  }
}
