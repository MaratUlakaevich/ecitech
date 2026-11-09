import type { FC } from "react";
import Link from "next/link";
import { book, CONTACT_EMAIL } from "@/lib/site";
import { href, type Locale } from "@/lib/i18n";

/**
 * Editorial footer — masthead reprise.
 *
 * Returns to Paper aesthetic after the Section 06 Copper warm close.
 * Four-column layout: studio mark + description, Practice, Studio,
 * Contact. Bottom copy line with legal + social. All links are
 * absolute so they work from every page.
 */
const linkClass =
  "inline-flex items-center min-h-11 lg:min-h-9 hover:text-copper-ink transition-colors";

const COPY = {
  en: {
    practice: [
      { href: "/services#audit", label: "AI Readiness Audit" },
      { href: "/services#sites", label: "Sites" },
      { href: "/services#automation", label: "Automation" },
      { href: "/services#integration", label: "Integration" },
    ],
    studio: [
      { href: "/portfolio", label: "Work" },
      { href: "/industries", label: "Industries" },
      { href: "/about", label: "About" },
      { href: "/journal", label: "Journal" },
    ],
    blurb:
      "An independent digital studio for mid-market teams. Based in Riyadh, working with clients across the Gulf and beyond.",
    practiceH: "Practice",
    studioH: "Studio",
    contactH: "Contact",
    copy: "\u00a9 2026 ECITech. Riyadh, Saudi Arabia.",
    privacy: "Privacy",
    terms: "Terms",
  },
  ru: {
    practice: [
      { href: "/services#audit", label: "Аудит готовности к ИИ" },
      { href: "/services#sites", label: "Сайты" },
      { href: "/services#automation", label: "Автоматизация" },
      { href: "/services#integration", label: "Интеграция" },
    ],
    studio: [
      { href: "/portfolio", label: "Работы" },
      { href: "/industries", label: "Отрасли" },
      { href: "/about", label: "О студии" },
      { href: "/journal", label: "Журнал (EN)" },
    ],
    blurb:
      "Независимая digital-студия для компаний среднего бизнеса. Базируемся в Эр-Рияде, работаем с клиентами в России, странах Залива и не только.",
    practiceH: "Услуги",
    studioH: "Студия",
    contactH: "Контакты",
    copy: "\u00a9 2026 ECITech. Эр-Рияд, Саудовская Аравия.",
    privacy: "Конфиденциальность",
    terms: "Условия",
  },
};

const EditorialFooter: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = COPY[locale];
  const b = book(locale);
  return (
    <footer className="relative z-10 bg-paper-soft hairline-top">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 pt-16 lg:pt-20 pb-10">
        {/* Masthead reprise */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-12 mb-14 lg:mb-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="display text-4xl tracking-tight text-ink-900">
                ECITech
              </span>
              <span className="seal" aria-hidden="true"></span>
            </div>
            <p className="text-[15px] leading-[1.65] text-ink-700 max-w-md">
              {t.blurb}
            </p>
          </div>

          <nav aria-label={t.practiceH}>
            <h2 className="mono-eyebrow mb-3">{t.practiceH}</h2>
            <ul className="text-[15px] text-ink-700">
              {t.practice.map((l) => (
                <li key={l.href}>
                  <Link href={href(locale, l.href)} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.studioH}>
            <h2 className="mono-eyebrow mb-3">{t.studioH}</h2>
            <ul className="text-[15px] text-ink-700">
              {t.studio.map((l) => (
                <li key={l.href}>
                  <Link href={href(locale, l.href)} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mono-eyebrow mb-3">{t.contactH}</h2>
            <ul className="text-[15px] text-ink-700">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link href={b.href} className={linkClass}>
                  {b.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyline */}
        <div className="hairline-top pt-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-4 text-[13.5px] text-ink-500">
          <p className="py-2">{t.copy}</p>
          <ul className="flex flex-wrap items-center gap-x-6">
            <li>
              <Link href="/privacy-policy" className={linkClass}>
                {t.privacy}
              </Link>
            </li>
            <li>
              <Link href="/terms" className={linkClass}>
                {t.terms}
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/ecitech"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/rss" className={linkClass}>
                RSS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default EditorialFooter;
