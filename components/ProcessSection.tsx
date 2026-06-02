import type { FC } from "react";

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

const STEPS: Step[] = [
  {
    number: "I",
    title: "Brief",
    body:
      "A 30-minute call. We figure out what's actually broken — and whether AI is the right tool. If not, we say so.",
  },
  {
    number: "II",
    title: "Sprint",
    body:
      "Fixed scope, fixed fee, weekly demos. Either Marat builds it himself, or with one specialist from the network when the project asks for it.",
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

const ProcessSection: FC = () => {
  return (
    <section
      id="process"
      className="relative z-10 bg-paper-deep hairline-top hairline-bottom"
    >
      <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_600px] gap-14 mb-16 lg:mb-20 items-end">
          <div>
            <div className="mono-eyebrow mb-6">04 — Process</div>
            <h2 className="display text-[44px] sm:text-[60px] lg:text-[80px] text-ink-900 leading-[0.95]">
              Four steps.<br />
              <span className="display-italic text-copper-500">No theatre.</span>
            </h2>
          </div>
          <p className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 max-w-reading">
            We don&apos;t run discovery workshops or pitch decks. We run engineering. Every engagement follows the same four beats, in the same order &mdash; only the scope inside each one changes.
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
              <div className="flex items-baseline justify-between mb-6">
                <span className="numeral text-[52px] text-copper-500">{step.number}</span>
                <span className="mono-eyebrow !text-[10px]">
                  {String(i + 1).padStart(2, "0")} / 04
                </span>
              </div>

              <h3 className="display text-[28px] text-ink-900 mb-4 leading-[1.05]">
                {step.title}
              </h3>

              <p className="text-[14.5px] leading-[1.6] text-ink-700">{step.body}</p>

              {/* Arrow connector — between items, hidden on last */}
              {i < STEPS.length - 1 && (
                <span
                  className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-ink-400"
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
        <div className="mt-20 lg:mt-24 grid lg:grid-cols-[180px_1fr] gap-10 lg:gap-14">
          <div className="mono-eyebrow text-ink-500">
            04.1 — On method
            <br />
            <span className="text-brass-500">A note from the studio</span>
          </div>
          <blockquote>
            <p className="display text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-ink-900">
              We don&apos;t try to <span className="display-italic text-copper-500">&ldquo;add AI&rdquo;</span> to your business. We try to make your Tuesday morning quieter &mdash; and your Friday ledger fuller.
            </p>
            <div className="brass-rule mt-10 mb-6 max-w-md"></div>
            <p className="text-[15.5px] leading-[1.7] text-ink-700 max-w-reading">
              Most agencies sell tools. We sell workflow design. The tools are commodity now; the judgement about which thirty per cent of a business to automate, and which seventy per cent to leave alone, is not.
            </p>
            <footer className="mt-6 mono-eyebrow flex items-center gap-3 text-ink-500">
              <span className="w-4 h-px bg-ink-400"></span>
              <span>The studio · Moscow · Riyadh · 2026</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
