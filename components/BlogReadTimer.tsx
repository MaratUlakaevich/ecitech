'use client';

import { useEffect } from 'react';
import { pushEvent } from '@/lib/analytics/gtm';

/**
 * Fires a `blog_read_60s` GTM event 60 seconds after mount.
 * Mount once per blog article page.
 */
export default function BlogReadTimer({ slug }: { slug: string }) {
  useEffect(() => {
    const t = setTimeout(
      () => pushEvent({ event: 'blog_read_60s', article_slug: slug }),
      60_000,
    );
    return () => clearTimeout(t);
  }, [slug]);

  return null;
}
