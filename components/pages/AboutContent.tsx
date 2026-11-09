import Link from "next/link";
import MastheadHeader from "../MastheadHeader";
import EditorialFooter from "../EditorialFooter";
import FinalCTA from "../FinalCTA";
import BreadcrumbsLd from "../seo/BreadcrumbsLd";
import { book } from "@/lib/site";
import { contactEmail } from "@/lib/legal";
import { href, type Locale } from "@/lib/i18n";
import { typo } from "@/lib/typo";

const T = {
  en: {
    crumbs: ["Home", "Studio"],
    h1: ["An independent", "digital studio,", "intentionally small."],
    lead:
      "ECITech is an independent digital studio based in Riyadh. We build sites, workflow automation, and AI integration for mid-market businesses, with three to five projects in flight at a time, all run personally by the founder.",
    noteA: "I’ve been writing code for a decade.",
    noteB: "I want to write it for fewer, better clients.",
    p1: "Before ECITech I shipped systems inside BCG Gamma, Juniper Networks, Cisco, and Google. The work was big and the calendars were rigid. I wanted to bring that engineering discipline somewhere smaller: close to the people who run the business, where a week of focused work visibly moves things.",
    p2: "So ECITech is a studio of one, plus a trusted network. Designers, copywriters, and devops engineers join when the scope needs them. Every project gets the founder, and I answer for each one personally.",
    p3: "We don’t take every project. We choose work where the trajectory is clear: from a site, to the systems that run it, to the agents that scale it.",
    sign: "Marat Ulakaev, founder",
    rosterH: "Who works on your project",
    roster: [
      { role: "Founder, principal engineer", name: "Marat Ulakaev", note: "Ex-BCG Gamma, Juniper, Cisco, Google" },
      { role: "Design (network)", name: "Activated per project", note: "Editorial, brand, product UI" },
      { role: "Copy (network)", name: "Activated per project", note: "English and Arabic, long-form and technical" },
      { role: "DevOps (network)", name: "Activated per project", note: "Vercel, Hetzner, Postgres" },
    ],
    studio: "Studio",
    studioV: "Riyadh, Saudi Arabia",
    email: "Email",
    valuesA: "Four ",
    valuesB: "principles.",
    valuesLead:
      "Not a manifesto. The four rules we actually live by when scoping a project, choosing a stack, and saying no.",
    values: [
      { title: "Founder-led", body: "Every project is run by the person who pitched it. No account managers, no junior handoffs, no sales floor." },
      { title: "Intentionally small", body: "Three to five projects in flight at any time. We turn work down when the calendar is honest." },
      { title: "Honest scope", body: "Fixed fees, written scope, weekly demos. If AI is not the right tool, we say so and point you elsewhere." },
      { title: "Multilingual delivery", body: "English, Arabic and Russian, with right-to-left layouts built in from the start, not bolted on after launch." },
    ],
    closing: "We’d rather end a call honestly than oversell a project.",
  },
  ru: {
    crumbs: ["Главная", "Студия"],
    h1: ["Независимая", "digital-студия,", "намеренно небольшая."],
    lead:
      "ECITech — независимая digital-студия из Эр-Рияда. Мы делаем сайты, автоматизацию процессов и ИИ-интеграции для компаний среднего бизнеса. Одновременно ведём от трёх до пяти проектов, и каждый — лично основатель.",
    noteA: "Я пишу код уже десять лет.",
    noteB: "Хочу писать его для меньшего числа клиентов — но лучших.",
    p1: "До ECITech я строил системы в BCG Gamma, Juniper Networks, Cisco и Google. Проекты были большими, а графики — жёсткими. Мне хотелось перенести эту инженерную дисциплину туда, где масштаб меньше: ближе к людям, которые управляют бизнесом, где неделя сфокусированной работы заметно двигает дело.",
    p2: "Поэтому ECITech — студия из одного человека плюс проверенная сеть. Дизайнеры, копирайтеры и devops-инженеры подключаются, когда этого требует задача. Каждый проект ведёт основатель, и за каждый я отвечаю лично.",
    p3: "Мы берём не каждый проект. Выбираем те, где путь ясен: от сайта — к системам, которые его обслуживают, — к агентам, которые помогают расти.",
    sign: "Марат Улакаев, основатель",
    rosterH: "Кто работает над вашим проектом",
    roster: [
      { role: "Основатель, ведущий инженер", name: "Марат Улакаев", note: "Ex-BCG Gamma, Juniper, Cisco, Google" },
      { role: "Дизайн (сеть)", name: "Подключается под проект", note: "Редакционный дизайн, бренд, продуктовый UI" },
      { role: "Тексты (сеть)", name: "Подключается под проект", note: "Русский, английский, арабский; лонгриды и техтексты" },
      { role: "DevOps (сеть)", name: "Подключается под проект", note: "Vercel, Hetzner, Postgres" },
    ],
    studio: "Студия",
    studioV: "Эр-Рияд, Саудовская Аравия",
    email: "Почта",
    valuesA: "Четыре ",
    valuesB: "принципа.",
    valuesLead:
      "Не манифест. Четыре правила, по которым мы на самом деле работаем, когда оцениваем проект, выбираем стек и говорим «нет».",
    values: [
      { title: "Ведёт основатель", body: "Каждый проект ведёт тот же человек, который его обсуждал с вами. Без аккаунт-менеджеров, без передачи джунам, без отдела продаж." },
      { title: "Намеренно небольшие", body: "Одновременно от трёх до пяти проектов. Мы отказываемся от работы, когда честно смотрим в календарь." },
      { title: "Честный объём", body: "Фиксированная цена, письменное ТЗ, демо каждую неделю. Если ИИ здесь не нужен, мы так и скажем и подскажем, куда обратиться." },
      { title: "Мультиязычность", body: "Русский, английский и арабский — с RTL-вёрсткой, заложенной с самого начала, а не прикрученной после запуска." },
    ],
    closing: "Лучше честно закончить звонок, чем продать лишнее.",
  },
};

T.ru = typo(T.ru);

export default function AboutContent({ locale }: { locale: Locale }) {
  const t = T[locale];
  const b = book(locale);
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: t.crumbs[0], url: href(locale, "/") },
          { name: t.crumbs[1], url: href(locale, "/about") },
        ]}
      />

      <MastheadHeader locale={locale} />

      <main id="main" className="relative">
        {/* Hero */}
        <section className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 pt-12 pb-16 lg:pt-20 lg:pb-28">
          <h1 className="display text-[40px] sm:text-[68px] lg:text-[96px] text-ink-900 leading-[0.98] max-w-hero">
            {t.h1[0]}<br />
            {t.h1[1]}<br />
            <span className="display-italic text-copper-500">{t.h1[2]}</span>
          </h1>
          <p className="mt-10 max-w-reading text-[19px] lg:text-[21px] leading-[1.6] text-ink-700 dropcap">
            {t.lead}
          </p>
        </section>

        {/* Founder note */}
        <section className="hairline-top hairline-bottom bg-paper-soft">
          <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-16 lg:py-28 grid lg:grid-cols-[1fr_600px] gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="display text-[36px] sm:text-[48px] lg:text-[64px] text-ink-900 leading-[1.02] mb-10">
                {t.noteA}<br />
                <span className="display-italic text-copper-500">{t.noteB}</span>
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.65] text-ink-700 max-w-reading">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <p className="text-ink-900">{t.p3}</p>
              </div>
              <p className="mt-10 text-[14px] text-ink-500 flex items-center gap-3">
                <span className="w-4 h-px bg-ink-400" aria-hidden="true"></span>
                <span>{t.sign}</span>
              </p>
            </div>

            {/* Roster column */}
            <aside className="lg:pl-10 lg:border-l hairline-strong">
              <h3 className="display text-[24px] text-ink-900 leading-[1.1] mb-8">{t.rosterH}</h3>
              <ul className="space-y-7">
                {t.roster.map((r) => (
                  <li key={r.role}>
                    <div className="text-[13.5px] text-ink-500 mb-1">{r.role}</div>
                    <div className="text-[18px] text-ink-900 leading-[1.3]">{r.name}</div>
                    <div className="text-[14px] text-ink-700 mt-1">{r.note}</div>
                  </li>
                ))}
              </ul>
              <div className="brass-rule mt-10 mb-6"></div>
              <dl className="space-y-5 text-[15px] text-ink-700">
                <div>
                  <dt className="mono-eyebrow mb-1">{t.studio}</dt>
                  <dd className="text-ink-800">{t.studioV}</dd>
                </div>
                <div>
                  <dt className="mono-eyebrow mb-1">{t.email}</dt>
                  <dd>
                    <a
                      href={`mailto:${contactEmail(locale)}`}
                      className="inline-flex items-center min-h-11 text-ink-800 hover:text-copper-ink transition-colors"
                    >
                      {contactEmail(locale)}
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-16 lg:py-32">
          <div className="grid lg:grid-cols-[1fr_600px] gap-8 lg:gap-14 mb-14 lg:mb-16 items-end">
            <h2 className="display text-[40px] sm:text-[56px] lg:text-[72px] text-ink-900 leading-[0.98]">
              {t.valuesA}<span className="display-italic text-copper-500">{t.valuesB}</span>
            </h2>
            <p className="text-[17px] leading-[1.65] text-ink-700 max-w-reading">{t.valuesLead}</p>
          </div>

          <ul className="grid md:grid-cols-2 hairline-top">
            {t.values.map((v) => (
              <li key={v.title} className="hairline-bottom py-8 lg:py-10 md:pr-12 md:odd:border-r md:odd:border-[var(--rule)] md:even:pl-12">
                <h3 className="display text-[28px] lg:text-[32px] text-ink-900 mb-3 leading-[1.1]">
                  {v.title}
                </h3>
                <p className="text-[16px] leading-[1.65] text-ink-700 max-w-measure">{v.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16 hairline-top pt-10 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
            <p className="display text-[26px] lg:text-[32px] text-ink-900 leading-[1.1] max-w-[640px]">
              {t.closing}
            </p>
            <Link href={b.href} className="link-editorial whitespace-nowrap self-start lg:self-auto">
              {b.label}
            </Link>
          </div>
        </section>
      </main>

      <FinalCTA locale={locale} />
      <EditorialFooter locale={locale} />
    </>
  );
}
