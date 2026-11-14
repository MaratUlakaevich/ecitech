import type { FC } from "react";
import Link from "next/link";
import { book } from "@/lib/site";
import { href, type Locale } from "@/lib/i18n";
import { typo } from "@/lib/typo";
import { contactEmail, RU_OPERATOR } from "@/lib/legal";
import CookieSettingsButton from "./CookieSettingsButton";

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
      { href: "/services/apps", label: "Web and mobile apps" },
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
    privacyHref: "/privacy-policy",
    cookies: "Cookies",
    cookiesHref: "/cookies-policy",
    cookieSettings: "Cookie settings",
    terms: "Terms",
  },
  ru: {
    practice: [
      { href: "/services#audit", label: "Аудит готовности к ИИ" },
      { href: "/services#sites", label: "Сайты" },
      { href: "/services#automation", label: "Автоматизация" },
      { href: "/services#integration", label: "Интеграция" },
      { href: "/services/apps", label: "Приложения" },
    ],
    studio: [
      { href: "/portfolio", label: "Работы" },
      { href: "/industries", label: "Отрасли" },
      { href: "/about", label: "О студии" },
      { href: "/journal", label: "Журнал (EN)" },
    ],
    blurb:
      "Независимая цифровая студия для компаний среднего бизнеса. Базируемся в Эр-Рияде, работаем с клиентами в России, странах Залива и не только.",
    practiceH: "Услуги",
    studioH: "Студия",
    contactH: "Контакты",
    copy: "\u00a9 2026 ECITech. Эр-Рияд, Саудовская Аравия.",
    privacy: "Персональные данные",
    privacyHref: "/ru/privacy-policy",
    cookies: "Cookies",
    cookiesHref: "/ru/cookies-policy",
    cookieSettings: "Настройки cookies",
    terms: "Условия",
  },
};

COPY.ru = typo(COPY.ru);

const EditorialFooter: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = COPY[locale];
  const hasMetrica = Boolean(process.env.NEXT_PUBLIC_YM_ID);
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
                <a href={`mailto:${contactEmail(locale)}`} className={linkClass}>
                  {contactEmail(locale)}
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
        <div className="hairline-top pt-4 flex flex-col lg:flex-row items-start justify-between gap-2 lg:gap-10 text-[13.5px] text-ink-500">
          <div className="py-2 space-y-1">
            <p>{t.copy}</p>
            {locale === "ru" && (
              <p className="flex flex-wrap gap-x-2">
                <span className="whitespace-nowrap">ИП {RU_OPERATOR.name}</span>
                <span aria-hidden="true" className="text-ink-300">·</span>
                <span className="whitespace-nowrap">ИНН {RU_OPERATOR.inn}</span>
                <span aria-hidden="true" className="text-ink-300">·</span>
                <span className="whitespace-nowrap">ОГРНИП {RU_OPERATOR.ogrnip}</span>
              </p>
            )}
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 lg:shrink-0 lg:justify-end">
            <li>
              <Link href={t.privacyHref} className={linkClass}>
                {t.privacy}
              </Link>
            </li>
            <li>
              <Link href={t.cookiesHref} className={linkClass}>
                {t.cookies}
              </Link>
            </li>
            {(locale === "en" || hasMetrica) && (
              <li>
                <CookieSettingsButton label={t.cookieSettings} className={linkClass} />
              </li>
            )}
            {locale === "en" && (
              <li>
                <Link href="/terms" className={linkClass}>
                  {t.terms}
                </Link>
              </li>
            )}
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
