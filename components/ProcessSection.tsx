import type { FC } from "react";
import type { Locale } from "@/lib/i18n";
import { typo, typoString as ty } from "@/lib/typo";

/**
 * Process — Section 04.
 *
 * Four-step engagement: Brief → Sprint → Launch → Operate.
 * Editorial diagram on the left (numerals + hair-thin connectors),
 * narrative on the right. Pull-quote anchors the bottom.
 */

type Step = {
  number: string;
  title: string;
  body: string;
};

const STEPS_EN: Step[] = [
  {
    number: "I",
    title: "Brief",
    body:
      "A 30-minute call. We find out what is actually broken, and whether AI is the right tool. If it isn't, we say so.",
  },
  {
    number: "II",
    title: "Sprint",
    body:
      "Fixed scope, fixed fee, weekly demos. Marat builds it himself, or with one specialist from the network when the project needs it.",
  },
  {
    number: "III",
    title: "Launch",
    body:
      "Deploy on Vercel, hand over the keys, train the team that will live with the system after we leave.",
  },
  {
    number: "IV",
    title: "Operate",
    body:
      "Optional. A small monthly retainer for the people who'd rather not think about hosting, edits, and the next AI model release.",
  },
];

const STEPS_RU: Step[] = [
  {
    number: "I",
    title: "Бриф",
    body:
      "Звонок на 30 минут. Разбираемся, что на самом деле не работает и нужен ли здесь ИИ. Если не нужен — так и скажем.",
  },
  {
    number: "II",
    title: "Спринт",
    body:
      "Фиксированный объём, фиксированная цена, демо каждую неделю. Марат делает всё сам или с одним специалистом из сети, если проекту это нужно.",
  },
  {
    number: "III",
    title: "Запуск",
    body:
      "Деплой на Vercel, передача доступов, обучение команды, которая будет жить с системой после нас.",
  },
  {
    number: "IV",
    title: "Поддержка",
    body:
      "По желанию. Небольшой ежемесячный абонемент для тех, кто не хочет думать о хостинге, правках и выходе следующей ИИ-модели.",
  },
];

const ProcessSection: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const ru = locale === "ru";
  const STEPS = ru ? typo(STEPS_RU) : STEPS_EN;
  return (
    <section
      id="process"
      className="relative z-10 bg-paper-deep hairline-top hairline-bottom"
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-20 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_600px] gap-8 lg:gap-14 mb-14 lg:mb-20 items-end">
          <h2 className="display text-[40px] sm:text-[60px] lg:text-[80px] text-ink-900 leading-[0.95]">
            {ru ? "Четыре шага." : "Four steps."}<br />
            {ru ? ty("Всегда в одном порядке.") : "Same order every time."}
          </h2>
          <p className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 max-w-reading">
            {ru
              ? ty("Без долгих воркшопов и презентаций. Каждый проект проходит одни и те же четыре шага в одном порядке. Меняется только объём работы внутри каждого.")
              : "No discovery workshops, no pitch decks. Every engagement follows the same four steps in the same order. Only the scope inside each one changes."}
          </p>
        </div>

        {/* Steps */}
        <ol className="grid gap-4 lg:gap-6 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative hairline border bg-paper-50 p-8 lg:p-9"
            >
              {/* Step numeral */}
              <div className="mb-6">
                <span className="numeral text-[52px] text-copper-500">{step.number}</span>
              </div>

              <h3 className="display text-[28px] text-ink-900 mb-4 leading-[1.05]">
                {step.title}
              </h3>

              <p className="text-[14.5px] leading-[1.6] text-ink-700">{step.body}</p>

              {/* Arrow connector — between items, hidden on last */}
              {i < STEPS.length - 1 && (
                <span
                  className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-ink-500"
                  aria-hidden="true"
                >
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M0 5h12M9 1l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* Editorial pull-quote anchor */}
        <figure className="mt-20 lg:mt-24 max-w-[1040px]">
          <blockquote>
            <p className="display text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.12] text-ink-900">
              {ru ? (
                <>
                  Мы не <span className="display-italic text-copper-500">&laquo;внедряем ИИ&raquo;</span> в ваш бизнес. {ty("Мы снимаем с команды рутину, которая съедает её неделю.")}
                </>
              ) : (
                <>
                  We don&apos;t <span className="display-italic text-copper-500">&ldquo;add AI&rdquo;</span> to your business. We take the repetitive work off your team&apos;s week.
                </>
              )}
            </p>
          </blockquote>
          <div className="brass-rule mt-10 mb-6 max-w-md"></div>
          <p className="text-[16px] leading-[1.7] text-ink-700 max-w-reading">
            {ru
              ? ty("Инструменты сегодня доступны всем. Умение выбрать — нет: какие тридцать процентов бизнеса автоматизировать, а какие семьдесят оставить как есть.")
              : "The tools are a commodity now. The judgement is not: which thirty per cent of a business to automate, and which seventy per cent to leave alone."}
          </p>
          <figcaption className="mt-6 flex items-center gap-3 text-[14px] text-ink-500">
            <span className="w-4 h-px bg-ink-400" aria-hidden="true"></span>
            <span>{ru ? "Марат Улакаев, основатель" : "Marat Ulakaev, founder"}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ProcessSection;
