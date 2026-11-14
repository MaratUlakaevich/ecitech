import Link from "next/link";
import MastheadHeader from "../MastheadHeader";
import EditorialFooter from "../EditorialFooter";
import FinalCTA from "../FinalCTA";
import BreadcrumbsLd from "../seo/BreadcrumbsLd";
import { book } from "@/lib/site";
import { href, type Locale } from "@/lib/i18n";
import { typo } from "@/lib/typo";

type Kind = {
  slug: string;
  title: string;
  lead: string;
  deliverables: string[];
  duration: string;
  price: string;
};

const T = {
  en: {
    crumbs: ["Home", "Practice", "Apps"],
    h1a: "Web and mobile apps",
    h1b: "people keep using.",
    lead:
      "Client portals, internal systems and mobile apps for iOS and Android. We scope a first working version that solves one real job, ship it, and grow it from what users actually do.",
    timeline: "Typical timeline",
    from: "From",
    kinds: [
      {
        slug: "web",
        title: "Web apps",
        lead:
          "Browser-based products for your clients or your team: accounts, dashboards, booking and ordering flows, back-office tools.",
        deliverables: [
          "Client portals and personal accounts",
          "Internal systems that replace spreadsheets",
          "Subscription products with billing",
          "Dashboards over your CRM and operations data",
          "Roles, permissions and an audit trail",
          "English, Arabic and Russian, RTL-ready",
        ],
        duration: "8–16 weeks",
        price: "$10,000",
      },
      {
        slug: "mobile",
        title: "Mobile apps",
        lead:
          "Apps for iOS and Android, from the first screen to publication in the App Store and Google Play.",
        deliverables: [
          "iOS and Android apps",
          "Push notifications, offline mode, payments",
          "Sign-in, profiles and in-app chat",
          "An admin panel to manage content and users",
          "App Store and Google Play publication",
          "Crash and usage analytics from day one",
        ],
        duration: "10–20 weeks",
        price: "$10,000",
      },
    ] as Kind[],
    stepsH: "How a project runs",
    steps: [
      ["Scope", "One or two workshops. We agree on the first version, the screens it needs and a fixed price."],
      ["Design", "A clickable prototype you can test with real users before any code is written."],
      ["Build", "Two-week cycles with a working demo at the end of each, on a staging link you can open."],
      ["Launch", "Release to production and the stores, with analytics, monitoring and a handover."],
      ["Grow", "Support and new features on a monthly plan, driven by what users do in the app."],
    ],
    priceA: "Engagements start at ",
    priceB: "$10,000",
    priceBody:
      "We price per project, not per hour, and name the exact amount before work starts. The price covers design, development, testing and launch.",
    tiers: [] as { name: string; what: string; price: string; time: string }[],
    back: "All services",
  },
  ru: {
    crumbs: ["Главная", "Услуги", "Приложения"],
    h1a: "Веб- и мобильные приложения,",
    h1b: "которыми пользуются.",
    lead:
      "Личные кабинеты, внутренние системы компаний и мобильные приложения для iOS и Android. Сначала делаем первую рабочую версию, которая решает одну настоящую задачу, запускаем её и развиваем по тому, как ею пользуются люди.",
    timeline: "Обычный срок",
    from: "От",
    kinds: [
      {
        slug: "web",
        title: "Веб-приложения",
        lead:
          "Сервисы в браузере для ваших клиентов или сотрудников: личные кабинеты, дашборды, запись и заказы, рабочие инструменты для офиса.",
        deliverables: [
          "Личные кабинеты клиентов и партнёров",
          "Внутренние системы вместо таблиц и чатов",
          "Сервисы по подписке с приёмом оплаты",
          "Дашборды по данным CRM и учёта",
          "Роли, права доступа и журнал действий",
          "Интерфейс на русском, английском и арабском",
        ],
        duration: "8–16 недель",
        price: "300 000 ₽",
      },
      {
        slug: "mobile",
        title: "Мобильные приложения",
        lead:
          "Приложения для iOS и Android: от первого экрана до публикации в App Store, Google Play и RuStore.",
        deliverables: [
          "Приложения для iOS и Android",
          "Пуш-уведомления, офлайн-режим, оплата",
          "Вход, профили, чат внутри приложения",
          "Панель управления контентом и пользователями",
          "Публикация в App Store, Google Play и RuStore",
          "Аналитика и отчёты о сбоях с первого дня",
        ],
        duration: "10–20 недель",
        price: "500 000 ₽",
      },
    ] as Kind[],
    stepsH: "Как идёт проект",
    steps: [
      ["Объём", "Одна-две рабочие встречи. Договариваемся о первой версии, нужных экранах и фиксированной цене."],
      ["Дизайн", "Кликабельный прототип, который можно показать пользователям до того, как написана первая строка кода."],
      ["Разработка", "Двухнедельные этапы, в конце каждого — рабочая версия по ссылке, которую вы открываете сами."],
      ["Запуск", "Выкладка на сервер и в магазины приложений, аналитика, мониторинг и передача доступов."],
      ["Развитие", "Поддержка и новые функции по ежемесячному плану — по тому, как приложением пользуются."],
    ],
    priceA: "Приложения — от ",
    priceB: "300 000 ₽",
    priceBody:
      "Мы считаем стоимость за проект, а не за час, и называем точную сумму до начала работы. В цену входят дизайн, разработка, тестирование и запуск.",
    tiers: [
      { name: "Веб-приложение", what: "Личный кабинет, внутренняя система, сервис по подписке", price: "от 300 000 ₽", time: "8–16 недель" },
      { name: "Мобильное", what: "Приложение для iOS и Android с панелью управления", price: "от 500 000 ₽", time: "10–20 недель" },
    ],
    back: "Все услуги",
  },
};

T.ru = typo(T.ru);

export default function AppsContent({ locale }: { locale: Locale }) {
  const t = T[locale];
  const b = book(locale);
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: t.crumbs[0], url: href(locale, "/") },
          { name: t.crumbs[1], url: href(locale, "/services") },
          { name: t.crumbs[2], url: href(locale, "/services/apps") },
        ]}
      />

      <MastheadHeader locale={locale} />

      <main id="main" className="relative">
        {/* Page hero */}
        <section className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 pt-12 pb-16 lg:pt-20 lg:pb-28">
          <Link href={href(locale, "/services")} className="mono-eyebrow inline-flex items-center min-h-11 hover:text-copper-ink">
            ← {t.back}
          </Link>
          <h1 className="mt-4 display text-[44px] sm:text-[68px] lg:text-[96px] text-ink-900 leading-[0.98] max-w-hero text-balance">
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
          </div>
        </section>

        {/* Web apps / Mobile apps */}
        <section className="hairline-top max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-16 lg:py-28 space-y-16 lg:space-y-28">
          {t.kinds.map((kind) => (
            <article
              key={kind.slug}
              id={kind.slug}
              className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-16 scroll-mt-6"
            >
              <div className="lg:pt-5 flex lg:block gap-10">
                <div>
                  <div className="mono-eyebrow mb-1">{t.timeline}</div>
                  <div className="text-[15px] text-ink-800">{kind.duration}</div>
                </div>
                <div className="lg:mt-6">
                  <div className="mono-eyebrow mb-1">{t.from}</div>
                  <div className="text-[15px] text-ink-800 tabular-nums">{kind.price}</div>
                </div>
              </div>

              <div>
                <h2 className="display text-[40px] sm:text-[60px] lg:text-[72px] text-ink-900 leading-[0.98] mb-6">
                  {kind.title}
                </h2>
                <p className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 max-w-reading mb-10">
                  {kind.lead}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
                  {kind.deliverables.map((d) => (
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

        {/* Process */}
        <section className="hairline-top bg-paper-soft">
          <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20">
            <h2 className="display text-[30px] sm:text-[40px] lg:text-[48px] text-ink-900 leading-[1.05] mb-10">
              {t.stepsH}
            </h2>
            <ol className="hairline-top">
              {t.steps.map(([name, body], i) => (
                <li
                  key={name}
                  className="hairline-bottom py-6 grid gap-2 md:grid-cols-[60px_200px_1fr] md:gap-8 md:items-baseline"
                >
                  <span className="numeral text-[26px] text-copper-ink">{i + 1}</span>
                  <span className="display text-[24px] text-ink-900 leading-[1.1]">{name}</span>
                  <span className="text-[15px] leading-[1.6] text-ink-700 max-w-reading">{body}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section className="hairline-top">
          <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20">
            <h2 className="display text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-ink-900 max-w-[920px]">
              {t.priceA}<span className="display-italic text-copper-500">{t.priceB}</span>.
            </h2>
            <p className="mt-6 max-w-reading text-[16px] leading-[1.65] text-ink-700">
              {t.priceBody}
            </p>
            {t.tiers.length > 0 && (
              <ul className="mt-12 hairline-top">
                {t.tiers.map((tier) => (
                  <li
                    key={tier.name}
                    className="hairline-bottom py-6 grid gap-2 md:grid-cols-[240px_1fr_200px_140px] md:gap-8 md:items-baseline"
                  >
                    <span className="display text-[26px] text-ink-900 leading-[1.1]">{tier.name}</span>
                    <span className="text-[15px] leading-[1.55] text-ink-700">{tier.what}</span>
                    <span className="text-[17px] text-ink-900 tabular-nums">{tier.price}</span>
                    <span className="text-[14px] text-ink-500">{tier.time}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>

      <FinalCTA locale={locale} />
      <EditorialFooter locale={locale} />
    </>
  );
}
