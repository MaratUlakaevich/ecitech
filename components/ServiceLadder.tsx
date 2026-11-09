import type { FC } from "react";

/**
 * Service Ladder — Section 03.
 *
 * The studio's structural moat: Sites → Automation → Integration as a
 * single product trajectory. Three editorial rows + an entry-tier
 * tripwire ("AI Readiness Audit") featured at top. Each row is a
 * horizontal composition: roman numeral, big serif tier name, body
 * copy, included list, "Read more" link.
 *
 * Pricing is intentionally NOT shown here (per the project
 * pricing-hidden decision). "Engagements start at $10k" lives in the
 * closing section and on /services.
 */
import { book } from "@/lib/site";
import { href, type Locale } from "@/lib/i18n";
import { typo } from "@/lib/typo";

type Tier = {
  slug: string;
  title: string;
  body: string;
  meta: string[];
};

const COPY = {
  en: {
    audit: {
      slug: "audit",
      title: "AI Readiness Audit",
      body:
        "Five days with one senior engineer. You get three pilots scoped with expected ROI, in a fifteen-page report written for the people who sign off.",
      meta: ["5 days", "Fixed fee", "No obligation to continue"],
    },
    auditTitle: ["AI Readiness", "Audit"],
    tiers: [
      {
        slug: "sites",
        title: "Sites",
        body:
          "Custom Next.js websites for businesses that have outgrown templates. From a single landing page to a multilingual catalog, built to last beyond the launch.",
        meta: ["2–10 weeks", "Next.js on Vercel", "English, Arabic, Russian"],
      },
      {
        slug: "automation",
        title: "Automation",
        body:
          "Once the site is live, the operations layer: WhatsApp Business routing, HubSpot and Zoho CRM integration, portal lead intake, SEO retainers.",
        meta: ["4–8 weeks", "WhatsApp, CRM, portals", "Retainer option"],
      },
      {
        slug: "integration",
        title: "Integration",
        body:
          "AI agents, RAG knowledge systems, custom CRM workflows, client portals. The layer that turns a site into a working system and gives your team its hours back.",
        meta: ["6–16 weeks", "Agents, RAG, custom builds", "Bilingual delivery"],
      },
    ] as Tier[],
    entry: "Entry point, before the layers",
    auditCta: "How the audit works",
    tierCta: "See what's included",
    h2a: "One trajectory.",
    h2b: "Three layers",
    lead:
      "Most studios stop at the site. We start there, then earn the right to automate it, then earn the right to make it intelligent. Each tier is fixed-scope and ships on its own; the ladder is optional, not pushed.",
    footA: "Not sure which layer fits? ",
    footB: "Start with the audit.",
    footC: " Five days, fixed fee, and you keep the plan whether or not you continue.",
  },
  ru: {
    audit: {
      slug: "audit",
      title: "Аудит готовности к ИИ",
      body:
        "Пять дней работы с одним senior-инженером. На выходе — три пилота с расчётом ожидаемого ROI в отчёте на пятнадцать страниц, написанном для тех, кто принимает решение.",
      meta: ["5 дней", "Фиксированная цена", "Без обязательств продолжать"],
    },
    auditTitle: ["Аудит готовности", "к ИИ"],
    tiers: [
      {
        slug: "sites",
        title: "Сайты",
        body:
          "Сайты на Next.js для компаний, которые выросли из шаблонов. От одного лендинга до многоязычного каталога — сделано так, чтобы работать долго после запуска.",
        meta: ["2–10 недель", "Next.js на Vercel", "Русский, английский, арабский"],
      },
      {
        slug: "automation",
        title: "Автоматизация",
        body:
          "Когда сайт запущен — операционный слой: маршрутизация заявок в WhatsApp и Telegram, интеграция с amoCRM, Bitrix24, HubSpot и Zoho, сбор лидов с площадок, SEO-сопровождение.",
        meta: ["4–8 недель", "Мессенджеры, CRM, площадки", "Можно на абонементе"],
      },
      {
        slug: "integration",
        title: "Интеграция",
        body:
          "ИИ-агенты, базы знаний на RAG, кастомные CRM-процессы, личные кабинеты клиентов. Слой, который превращает сайт в рабочую систему и возвращает команде часы.",
        meta: ["6–16 недель", "Агенты, RAG, разработка", "Мультиязычная поставка"],
      },
    ] as Tier[],
    entry: "Точка входа, до трёх слоёв",
    auditCta: "Как устроен аудит",
    tierCta: "Что входит",
    h2a: "Один путь.",
    h2b: "Три слоя",
    lead:
      "Большинство студий останавливаются на сайте. Мы с него начинаем, затем автоматизируем процессы за ним, а потом добавляем интеллект. Каждый слой — фиксированный объём и запускается сам по себе; переходить на следующий необязательно.",
    footA: "Не уверены, какой слой нужен? ",
    footB: "Начните с аудита.",
    footC: " Пять дней, фиксированная цена, и план остаётся у вас, даже если дальше вы не пойдёте.",
  },
};

COPY.ru = typo(COPY.ru);

const TierRow: FC<{
  tier: Tier;
  locale: Locale;
  cta: string;
  featuredTitle?: string[];
  entryLabel?: string;
}> = ({ tier, locale, cta, featuredTitle, entryLabel }) => (
  <a
    href={href(locale, `/services#${tier.slug}`)}
    className={`group relative isolate block hairline-bottom py-10 lg:py-14 before:absolute before:inset-y-0 before:-inset-x-4 lg:before:-inset-x-10 before:-z-10 before:transition-colors hover:before:bg-paper-100 ${
      featuredTitle ? "hairline-top" : ""
    }`}
  >
    {/* Hairlines stay on the page gutter; only the hover wash bleeds. */}
    <div className="grid lg:grid-cols-[340px_1fr_180px] gap-5 lg:gap-12 items-start lg:items-center">
      <h3 className="display text-[32px] sm:text-[38px] lg:text-[42px] text-ink-900 leading-[1.02] text-balance">
        {entryLabel && <span className="block mono-eyebrow mb-3">{entryLabel}</span>}
        {featuredTitle ? (
          <>
            {featuredTitle[0]}<br className="hidden lg:block" /> {featuredTitle[1]}
          </>
        ) : (
          tier.title
        )}
      </h3>
      <div>
        <p className="text-[16px] leading-[1.65] text-ink-700 max-w-measure">
          {tier.body}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[13.5px] text-ink-500">
          {tier.meta.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center lg:justify-end gap-3 text-ink-700 transition-colors group-hover:text-copper-ink">
        <span className="smallcaps whitespace-nowrap">{cta}</span>
        <span className="w-12 h-px bg-current origin-left scale-x-[0.6] transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
      </div>
    </div>
  </a>
);

const ServiceLadder: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = COPY[locale];
  const b = book(locale);
  return (
    <section
      id="practice"
      className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-20 lg:py-32"
    >
      {/* Header */}
      <div className="grid lg:grid-cols-[1fr_600px] gap-8 lg:gap-14 mb-14 lg:mb-20 items-end">
        <h2 className="display text-[40px] sm:text-[60px] lg:text-[80px] text-ink-900 leading-[0.95]">
          {t.h2a}<br />
          <span className="display-italic text-copper-500">{t.h2b}</span>.
        </h2>
        <p className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 max-w-reading">
          {t.lead}
        </p>
      </div>

      {/* Tripwire row — featured */}
      <TierRow tier={t.audit} locale={locale} cta={t.auditCta} featuredTitle={t.auditTitle} entryLabel={t.entry} />

      {/* Three core tiers */}
      {t.tiers.map((tier) => (
        <TierRow key={tier.slug} tier={tier} locale={locale} cta={t.tierCta} />
      ))}

      {/* Footer affordance */}
      <div className="mt-14 lg:mt-20 hairline-top pt-10 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
        <p className="text-[16px] leading-[1.65] text-ink-700 max-w-reading">
          {t.footA}<span className="text-ink-900">{t.footB}</span>{t.footC}
        </p>
        <a href={b.href} className="link-editorial whitespace-nowrap self-start lg:self-auto">
          {b.label}
        </a>
      </div>
    </section>
  );
};

export default ServiceLadder;
