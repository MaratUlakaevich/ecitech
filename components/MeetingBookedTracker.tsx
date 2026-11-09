'use client';

import { useEffect } from 'react';
import { pushEvent } from '@/lib/analytics/gtm';

const CAL_ORIGIN = /^https:\/\/([a-z0-9-]+\.)*cal\.(com|eu)$/i;
const BOOKED_TYPES = new Set(['bookingSuccessful', 'bookingSuccessfulV2']);

/**
 * Listens for the Cal.com embed's booking postMessage and fires a single
 * `meeting_booked` GTM event (the primary Google Ads conversion).
 *
 * The embed posts `{ originator: 'CAL', type: 'bookingSuccessful' | 'bookingSuccessfulV2', ... }`.
 * The legacy shapes (`type: 'cal:booking_successful'`, `event: 'bookingSuccessful'`)
 * are still accepted. Messages from other origins are ignored.
 *
 * Mount on the /contact page (or wherever the Cal.com embed lives).
 */
export default function MeetingBookedTracker() {
  useEffect(() => {
    let fired = false;
    const handler = (e: MessageEvent) => {
      if (fired || !CAL_ORIGIN.test(e.origin)) return;
      const data = e.data as
        | { originator?: string; type?: string; event?: string }
        | null
        | undefined;
      if (!data || typeof data !== 'object') return;

      const booked =
        (data.originator === 'CAL' && BOOKED_TYPES.has(data.type ?? '')) ||
        data.type === 'cal:booking_successful' ||
        data.event === 'bookingSuccessful';

      if (booked) {
        // V1 and V2 can both arrive for one booking; count it once.
        fired = true;
        pushEvent({ event: 'meeting_booked', source: 'calcom' });
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return null;
}
