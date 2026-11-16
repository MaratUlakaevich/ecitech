"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import { alternatePath, localeFromPath, ruSitePath, type Locale } from "@/lib/i18n";

const LABELS: Record<Locale, { short: string; name: string }> = {
  en: { short: "EN", name: "English" },
  ar: { short: "AR", name: "العربية" },
};

const linkClass =
  "inline-flex items-center justify-center min-h-11 min-w-11 -my-3 hover:text-copper-ink transition-colors";

/**
 * EN · AR · RU in the masthead ticker. EN and AR keep the visitor on the
 * same page; RU is the separate Russian site on its own subdomain.
 */
const LangSwitch: FC = () => {
  const pathname = usePathname() ?? "/";
  const current = localeFromPath(pathname);

  return (
    <nav aria-label={current === "ar" ? "اللغة" : "Language"} className="flex items-center gap-1">
      {(["en", "ar"] as Locale[]).map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden="true">·</span>}
          {loc === current ? (
            <span aria-current="true" className="inline-flex items-center justify-center min-w-8 text-ink-900">
              {LABELS[loc].short}
            </span>
          ) : (
            <Link
              href={alternatePath(pathname, loc)}
              hrefLang={loc}
              lang={loc}
              aria-label={LABELS[loc].name}
              className={linkClass}
            >
              {LABELS[loc].short}
            </Link>
          )}
        </span>
      ))}
      <span aria-hidden="true">·</span>
      <a href={ruSitePath(pathname)} hrefLang="ru" lang="ru" aria-label="Русский" className={linkClass}>
        RU
      </a>
    </nav>
  );
};

export default LangSwitch;
