'use client';

import { useEffect } from 'react';
import { pushEvent } from '@/lib/analytics/gtm';

/**
 * Listens for Cal.com `bookingSuccessful` postMessage events
 * (either `{ type: 'cal:booking_successful' }` or `{ event: 'bookingSuccessful' }`)
 * and fires a `meeting_booked` GTM event.
 *
 * Mount on the /contact page (or wherever the Cal.com embed lives).
 */
export default function MeetingBookedTracker() {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      const data = e.data as
        | { type?: string; event?: string }
        | null
        | undefined;
      if (!data || typeof data !== 'object') return;

      if (
        data.type === 'cal:booking_successful' ||
        data.event === 'bookingSuccessful'
      ) {
        pushEvent({ event: 'meeting_booked', source: 'calcom' });
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return null;
}
