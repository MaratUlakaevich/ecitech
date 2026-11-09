import Link from "next/link";
import MastheadHeader from "../MastheadHeader";
import EditorialFooter from "../EditorialFooter";
import FinalCTA from "../FinalCTA";
import BreadcrumbsLd from "../seo/BreadcrumbsLd";
import { book } from "@/lib/site";
import { href, type Locale } from "@/lib/i18n";

type Layer = {
  slug: string;
  title: string;
  lead: string;
  deliverables: string[];
  duration: string;
};

const T = {
  en: {
    crumbs: ["Home", "Practice"],
    h1a: "One trajectory.",
    h1b: "Three layers.",
    lead:
      "Most studios stop at the site. We start there, then automate the operations behind it, then add the AI layer where it pays for itself. Each layer ships on its own with a fixed scope. Moving up is optional.",
    auditLink: "How the audit works",
    auditTitle: ["AI Readiness", "Audit"],
    auditBody:
      "Five days with one senior engineer. You get three pilots scoped with expected ROI, in a fifteen-page report written for the people who sign off. Fixed fee of $3,000, no obligation to continue.",
    timeline: "Typical timeline",
    priceA: "Engagements start at ",
    priceB: "$10,000",
    priceBody:
      "We price per project, not per hour. Every engagement begins with the fixed-fee audit ($3,000), and you keep the plan whether or not you continue. Bilingual English and Arabic delivery is included where the scope needs it.",
    layers: [
      {
        slug: "sites",
        title: "Sites",
        lead:
          "Custom Next.js websites for businesses that have outgrown templates. From a single landing to a multilingual catalog.",
        deliverables: [
          "Editorial design, bespoke per brand",
          "Next.js on Vercel, with a 100/100 Lighthouse target",
          "English, Arabic and Russian structure, RTL-ready",
          "On-page SEO, sitemap, structured data",
          "GA4, Tag Manager and Search Console setup",
        ],
        duration: "2–10 weeks",
      },
      {
        slug: "automation",
        title: "Automation",
        lead:
          "Once the site is live, the operations layer. WhatsApp Business routing, CRM integration, ops automation.",
        deliverables: [
          "WhatsApp Business cloud API + lead routing to your team",
          "HubSpot or Zoho CRM setup + integration",
          "Portal leads (Bayut, Property Finder) into one inbox",
          "n8n / Make pipelines for repeating tasks",
          "SEO retainer and content operations",
        ],
        duration: "4–8 weeks",
      },
      {
        slug: "integration",
        title: "Integration",
        lead:
          "The intelligence layer. AI agents, RAG knowledge systems, custom CRM workflows, personal cabinets.",
        deliverables: [
          "RAG knowledge systems on private corpora",
          "Conversational agents (Claude, GPT, voice)",
          "Custom CRM extensions, account dashboards",
          "Embedding pipelines + governance",
          "Bilingual delivery in English and Arabic",
        ],
        duration: "6–16 weeks",
      },
    ] as Layer[],
  },
  ru: {
    crumbs: ["Главная", "Услуги"],
    h1a: "Один путь.",
    h1b: "Три слоя.",
    lead:
      "Большинство студий останавливаются на сайте. Мы с него начинаем, затем автоматизируем процессы за ним, а потом добавляем ИИ там, где он окупается. Каждый слой — фиксированный объём и запускается сам по себе. Переходить дальше необязательно.",
    auditLink: "Как устроен аудит",
    auditTitle: ["Аудит готовности", "к ИИ"],
    auditBody:
      "Пять дней работы с одним senior-инженером. На выходе — три пилота с расчётом ожидаемого ROI в отчёте на пятнадцать страниц, написанном для тех, кто принимает решение. Фиксированная цена $3 000, без обязательств продолжать.",
    timeline: "Обычный срок",
    priceA: "Проекты — от ",
    priceB: "$10 000",
    priceBody:
      "Мы считаем стоимость за проект, а не за час. Каждый проект начинается с аудита по фиксированной цене ($3 000), и план остаётся у вас, даже если дальше вы не пойдёте. Мультиязычная версия (русский, английский, арабский) входит в работу, если она нужна по задаче.",
    layers: [
      {
        slug: "sites",
        title: "Сайты",
        lead:
          "Сайты на Next.js для компаний, которые выросли из шаблонов. От одного лендинга до многоязычного каталога.",
        deliverables: [
          "Редакционный дизайн, уникальный под бренд",
          "Next.js на Vercel, цель — 100/100 в Lighthouse",
          "Структура на русском, английском и арабском, готовая к RTL",
          "SEO на страницах, sitemap, структурированные данные",
          "Настройка GA4, Яндекс Метрики, Tag Manager и Search Console",
        ],
        duration: "2–10 недель",
      },
      {
        slug: "automation",
        title: "Автоматизация",
        lead:
          "Когда сайт запущен — операционный слой. Заявки в мессенджеры, интеграция с CRM, автоматизация рутины.",
        deliverables: [
          "Telegram-боты и WhatsApp Business API с маршрутизацией заявок",
          "Настройка и интеграция amoCRM, Bitrix24, HubSpot или Zoho",
          "Лиды с площадок и маркетплейсов в одну воронку",
          "Пайплайны на n8n / Make для повторяющихся задач",
          "SEO-сопровождение и контент-процессы",
        ],
        duration: "4–8 недель",
      },
      {
        slug: "integration",
        title: "Интеграция",
        lead:
          "Интеллектуальный слой. ИИ-агенты, базы знаний на RAG, кастомные CRM-процессы, личные кабинеты.",
        deliverables: [
          "Базы знаний на RAG по вашим внутренним документам",
          "Диалоговые агенты (Claude, GPT, голос)",
          "Доработки CRM, дашборды и личные кабинеты",
          "Пайплайны эмбеддингов и контроль доступа к данным",
          "Мультиязычная поставка: русский, английский, арабский",
        ],
        duration: "6–16 недель",
      },
    ] as Layer[],
  },
};

export default function ServicesContent({ locale }: { locale: Locale }) {
  const t = T[locale];
  const b = book(locale);
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: t.crumbs[0], url: href(locale, "/") },
          { name: t.crumbs[1], url: href(locale, "/services") },
        ]}
      />

      <MastheadHeader locale={locale} />

      <main id="main" className="relative">
        {/* Page hero */}
        <section className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 pt-12 pb-16 lg:pt-20 lg:pb-28">
          <h1 className="display text-[44px] sm:text-[68px] lg:text-[96px] text-ink-900 leading-[0.98] max-w-hero">
            {t.h1a}<br />
            <span className="display-italic text-copper-500">{t.h1b}</span>
          </h1>
          <p className="mt-10 max-w-reading text-[19px] lg:text-[21px] leading-[1.6] text-ink-700">
            {t.lead}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6">
            <Link href={b.href} className="btn-primary">
              <span>{b.label}</span>
              <span className="arrow" aria-hidden="true"></span>
            </Link>
            <Link href="#audit" className="link-editorial">
              {t.auditLink}
            </Link>
          </div>
        </section>

        {/* Audit tripwire */}
        <section id="audit" className="hairline-top hairline-bottom bg-paper-soft scroll-mt-6">
          <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20 grid lg:grid-cols-[280px_1fr_220px] gap-6 lg:gap-12 items-start lg:items-center">
            <h2 className="display text-[32px] sm:text-[40px] lg:text-[44px] text-ink-900 leading-[1.02]">
              {t.auditTitle[0]}<br className="hidden lg:block" /> {t.auditTitle[1]}
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink-700 max-w-measure">
              {t.auditBody}
            </p>
            <Link
              href={b.href}
              className="group inline-flex items-center gap-3 min-h-11 text-ink-900 hover:text-copper-ink transition-colors"
            >
              <span className="smallcaps whitespace-nowrap">{b.label}</span>
              <span className="w-12 h-px bg-current origin-left scale-x-[0.6] transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
            </Link>
          </div>
        </section>

        {/* Three layers — long form */}
        <section className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-16 lg:py-28 space-y-16 lg:space-y-28">
          {t.layers.map((layer) => (
            <article
              key={layer.slug}
              id={layer.slug}
              className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-16 scroll-mt-6"
            >
              <div className="lg:pt-5">
                <div className="mono-eyebrow mb-1">{t.timeline}</div>
                <div className="text-[15px] text-ink-800">{layer.duration}</div>
              </div>

              <div>
                <h2 className="display text-[40px] sm:text-[60px] lg:text-[72px] text-ink-900 leading-[0.98] mb-6">
                  {layer.title}
                </h2>
                <p className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 max-w-reading mb-10">
                  {layer.lead}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
                  {layer.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-[15px] leading-[1.55] text-ink-800">
                      <span className="mt-[0.7em] w-3 h-px bg-copper-500 shrink-0" aria-hidden="true"></span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* Pricing note (the only place pricing is named on the site) */}
        <section className="hairline-top bg-paper-soft">
          <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20">
            <h2 className="display text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-ink-900 max-w-[920px]">
              {t.priceA}<span className="display-italic text-copper-500">{t.priceB}</span>.
            </h2>
            <p className="mt-6 max-w-reading text-[16px] leading-[1.65] text-ink-700">
              {t.priceBody}
            </p>
          </div>
        </section>
      </main>

      <FinalCTA locale={locale} />
      <EditorialFooter locale={locale} />
    </>
  );
}
