"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import { alternatePath, localeFromPath, type Locale } from "@/lib/i18n";

const LABELS: Record<Locale, { short: string; name: string }> = {
  en: { short: "EN", name: "English" },
  ru: { short: "RU", name: "Русский" },
};

/** EN · RU toggle in the masthead ticker. Keeps the visitor on the same page. */
const LangSwitch: FC = () => {
  const pathname = usePathname() ?? "/";
  const current = localeFromPath(pathname);

  return (
    <nav aria-label={current === "ru" ? "Язык" : "Language"} className="flex items-center gap-1">
      {(["en", "ru"] as Locale[]).map((loc, i) => (
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
              className="inline-flex items-center justify-center min-h-11 min-w-11 -my-3 hover:text-copper-ink transition-colors"
            >
              {LABELS[loc].short}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
};

export default LangSwitch;
