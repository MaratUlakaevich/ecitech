import type { FC } from "react";
import Link from "next/link";
import { book } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { typo } from "@/lib/typo";

/**
 * Section 06 — Begin.
 *
 * Tonal close-out: site body is Paper (white + black + hot orange);
 * this final section inverts into Copper warm aesthetic (warm dark
 * navy ink #1A1D2E background + cream text + warm copper accent).
 *
 * Editorial logic: cool informative body → warm hospitable closing.
 * Small copper text uses --copper-light (6.2:1 on navy); the large
 * italic keeps --copper-warm.
 */
const STEPS_EN = [
  "You describe the part of the business that costs you the most time or money.",
  "We tell you plainly whether AI is the right tool, or whether something simpler will do.",
  "If it's a fit, we scope a five-day audit on the call. If not, we point you elsewhere.",
  "No deck, no pitch. Engagements start at $10,000.",
];

const STEPS_RU = [
  "Вы рассказываете, какая часть бизнеса отнимает больше всего времени или денег.",
  "Мы прямо говорим, подходит ли здесь ИИ или хватит чего-то попроще.",
  "Если подходит — прямо на звонке определяем рамки пятидневного аудита. Если нет — подскажем, куда обратиться.",
  "Без презентаций и продаж. Сайты — от 70 000 ₽, автоматизация и ИИ — по объёму задачи.",
];

const FinalCTA: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const ru = locale === "ru";
  const STEPS = ru ? typo(STEPS_RU) : STEPS_EN;
  const b = book(locale);
  return (
    <section
      id="begin"
      className="relative z-10"
      style={{ backgroundColor: "var(--ink-warm)", color: "var(--cream)" }}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-24 lg:py-36">
        <div className="grid lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-end">
          {/* Left — final statement */}
          <div>
            <h2
              className="display text-[44px] sm:text-[72px] lg:text-[104px] leading-[0.95] mb-12 lg:mb-16"
              style={{ color: "var(--cream)" }}
            >
              {ru ? "Пять дней." : "Five days."}<br />
              {ru ? "Один старший инженер." : "One senior engineer."}<br />
              <span
                className="display-italic"
                style={{ color: "var(--copper-warm)" }}
              >
                {ru ? "Реальный план." : "A real plan."}
              </span>
            </h2>

            <Link href={b.href} className="btn-primary-warm">
              <span>{b.label}</span>
              <span className="arrow" aria-hidden="true"></span>
            </Link>
          </div>

          {/* Right — "What happens in the first call" */}
          <aside
            className="border-t pt-10"
            style={{ borderColor: "rgba(245, 239, 227, 0.3)" }}
          >
            <h3
              className="mono-eyebrow mb-7"
              style={{ color: "rgba(245, 239, 227, 0.72)" }}
            >
              {ru ? "Что происходит на первом звонке" : "What happens in the first call"}
            </h3>
            <ol className="space-y-5 text-[15px] leading-[1.6]">
              {STEPS.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span
                    className="numeral text-[22px] w-5 shrink-0"
                    style={{ color: "var(--copper-light)" }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ color: "rgba(245, 239, 227, 0.88)" }}>{step}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
