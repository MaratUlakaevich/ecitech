'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const { locale, locales, asPath } = useRouter();

  return (
    <nav>
      {locales?.map((loc) => (
        <Link
          key={loc}
          href={asPath}
          locale={loc}
          replace
        >
          <a style={{ marginRight: 8, opacity: loc === locale ? 0.5 : 1 }}>
            {loc}
          </a>
        </Link>
      ))}
    </nav>
  );
}
