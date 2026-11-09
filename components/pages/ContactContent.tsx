import MastheadHeader from "../MastheadHeader";
import EditorialFooter from "../EditorialFooter";
import ContactForm from "../ContactForm";
import CalcomEmbed from "../CalcomEmbed";
import MeetingBookedTracker from "../MeetingBookedTracker";
import BreadcrumbsLd from "../seo/BreadcrumbsLd";
import { CONTACT_EMAIL } from "@/lib/site";
import { href, type Locale } from "@/lib/i18n";

const T = {
  en: {
    crumbs: ["Home", "Contact"],
    h1a: "Tell us what’s",
    h1b: "costing you",
    h1c: " the most.",
    lead:
      "Pick a time for a thirty-minute call, or write a few lines below. Either way you hear back within one business day. If we’re not the right fit, we’ll say so and point you to someone who is.",
    bookH: "Book a 30-minute intro call.",
    bookP:
      "No deck, no pitch. We talk through the problem and decide together whether the next step is a five-day audit or a polite goodbye.",
    writeH: "Or write us a few lines.",
    direct: "Direct",
    email: "Email",
    studio: "Studio",
    studioV: "Riyadh, Saudi Arabia",
    nextH: "What happens next",
    next: [
      "A reply within one business day.",
      "A thirty-minute call scoped to your problem.",
      "A written scope and fixed fee within a week.",
    ],
  },
  ru: {
    crumbs: ["Главная", "Контакты"],
    h1a: "Расскажите, что",
    h1b: "обходится вам",
    h1c: " дороже всего.",
    lead:
      "Выберите время для тридцатиминутного звонка или напишите пару строк ниже. В любом случае ответим в течение одного рабочего дня. Если мы вам не подходим — скажем честно и посоветуем, к кому обратиться.",
    bookH: "Запишитесь на 30-минутный звонок.",
    bookP:
      "Без презентаций и продаж. Обсуждаем задачу и вместе решаем, будет ли следующим шагом пятидневный аудит или вежливое прощание.",
    writeH: "Или напишите нам пару строк.",
    direct: "Напрямую",
    email: "Почта",
    studio: "Студия",
    studioV: "Эр-Рияд, Саудовская Аравия",
    nextH: "Что дальше",
    next: [
      "Ответ в течение одного рабочего дня.",
      "Тридцатиминутный звонок по вашей задаче.",
      "Письменное ТЗ и фиксированная цена в течение недели.",
    ],
  },
};

export default function ContactContent({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: t.crumbs[0], url: href(locale, "/") },
          { name: t.crumbs[1], url: href(locale, "/contact") },
        ]}
      />
      <MeetingBookedTracker />

      <MastheadHeader locale={locale} />

      <main id="main" className="relative">
        {/* Page hero */}
        <section className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 pt-12 pb-12 lg:pt-20 lg:pb-16">
          <h1 className="display text-[44px] sm:text-[68px] lg:text-[96px] text-ink-900 leading-[0.98] max-w-hero text-balance">
            {t.h1a}<br />
            <span className="display-italic text-copper-500">{t.h1b}</span>{t.h1c}
          </h1>
          <p className="mt-10 max-w-reading text-[19px] lg:text-[21px] leading-[1.6] text-ink-700">
            {t.lead}
          </p>
        </section>

        {/* Book directly — the primary path */}
        <section id="book" className="hairline-top scroll-mt-6">
          <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20">
            <div className="grid lg:grid-cols-[1fr_600px] gap-6 lg:gap-12 mb-10 items-end">
              <h2 className="display text-[30px] sm:text-[40px] lg:text-[48px] text-ink-900 leading-[1.05]">
                {t.bookH}
              </h2>
              <p className="text-[16px] leading-[1.65] text-ink-700 max-w-reading">{t.bookP}</p>
            </div>
            <div className="hairline border bg-paper-50 p-2 sm:p-6 lg:p-10">
              <CalcomEmbed locale={locale} />
            </div>
          </div>
        </section>

        {/* Two columns — form + direct contact */}
        <section className="hairline-top bg-paper-soft">
          <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20 grid lg:grid-cols-[1fr_400px] gap-14 lg:gap-20 items-start">
            <div>
              <h2 className="display text-[30px] sm:text-[40px] lg:text-[48px] text-ink-900 leading-[1.05] mb-10">
                {t.writeH}
              </h2>
              <ContactForm locale={locale} />
            </div>

            <aside className="lg:pl-10 lg:border-l hairline-strong">
              <h2 className="display text-[24px] text-ink-900 leading-[1.1] mb-6">{t.direct}</h2>
              <ul className="space-y-6 text-[15px] text-ink-700">
                <li>
                  <div className="mono-eyebrow mb-1">{t.email}</div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center min-h-11 text-ink-900 hover:text-copper-ink transition-colors text-[16px]"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <div className="mono-eyebrow mb-1">Telegram</div>
                  <a
                    href="https://t.me/ecitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-11 text-ink-900 hover:text-copper-ink transition-colors text-[16px]"
                  >
                    @ecitech
                  </a>
                </li>
                <li>
                  <div className="mono-eyebrow mb-1">{t.studio}</div>
                  <p className="text-[16px] text-ink-900">{t.studioV}</p>
                </li>
              </ul>

              <div className="brass-rule my-10"></div>

              <h3 className="display text-[22px] text-ink-900 leading-[1.1] mb-4">{t.nextH}</h3>
              <ol className="space-y-3 text-[15px] text-ink-700 leading-[1.55]">
                {t.next.map((line, i) => (
                  <li key={line} className="flex gap-4">
                    <span className="numeral text-[22px] text-copper-ink w-5 shrink-0">{i + 1}</span>
                    {line}
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>
      </main>

      <EditorialFooter locale={locale} />
    </>
  );
}
