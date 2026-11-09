import Link from "next/link";
import type { FC } from "react";
import PrimaryNav from "./PrimaryNav";
import LangSwitch from "./LangSwitch";
import { href, type Locale } from "@/lib/i18n";
import { typo } from "@/lib/typo";

/**
 * Editorial masthead — shared site header (home included).
 *
 * Two stacked rows:
 *  - Ticker: what the studio is + where it is based (real info, not decoration)
 *  - Primary masthead: ECITech wordmark + nav + book-a-call link
 */
const T = {
  en: { skip: "Skip to content", a: "Independent digital studio, Riyadh", s: "Digital studio, Riyadh", b: "Saudi Arabia, UAE, the Gulf", home: "ECITech home" },
  ru: { skip: "Перейти к содержанию", a: "Независимая цифровая студия, Эр-Рияд", s: "Цифровая студия, Эр-Рияд", b: "Россия, Саудовская Аравия, ОАЭ", home: "ECITech, главная" },
};

T.ru = typo(T.ru);

const MastheadHeader: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = T[locale];
  return (
    <header className="relative z-20">
      {/* Skip link — first focusable element on every page */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink-900 focus:text-paper-50 focus:px-4 focus:py-3 focus:text-[14px]"
      >
        {t.skip}
      </a>

      {/* Ticker bar */}
      <div className="hairline-bottom">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-3 flex items-center justify-between gap-6 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-500">
          <span className="hidden sm:inline md:hidden lg:inline">{t.a}</span>
          <span className="sm:hidden md:inline lg:hidden">{t.s}</span>
          <span className="flex items-center gap-6">
            <span className="hidden md:inline">{t.b}</span>
            <LangSwitch />
          </span>
        </div>
      </div>

      {/* Primary masthead */}
      <div className="relative">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-6 lg:py-8 flex items-center justify-between">
          <Link href={href(locale, "/")} className="flex items-baseline gap-3 py-2" aria-label={t.home}>
            <span className="display text-3xl tracking-tight text-ink-900">ECITech</span>
            <span className="seal" aria-hidden="true"></span>
          </Link>

          <PrimaryNav />
        </div>
      </div>
    </header>
  );
};

export default MastheadHeader;
