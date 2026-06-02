import type { FC } from "react";

/**
 * Section 06 — Begin.
 *
 * Tonal close-out: site body is Paper (white + black + hot orange);
 * this final section inverts into Copper warm aesthetic (warm dark
 * navy ink #1A1D2E background + cream text + warm copper accent).
 *
 * Editorial logic: cool informative body → warm hospitable closing.
 * Magazine convention: last page printed on warm stock.
 */
const FinalCTA: FC = () => {
  return (
    <section
      id="begin"
      className="relative z-10"
      style={{ backgroundColor: "var(--ink-warm)", color: "var(--cream)" }}
    >
      <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-28 lg:py-40">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-end">
          {/* Left — final statement */}
          <div>
            <div
              className="mono-eyebrow mb-8"
              style={{ color: "var(--copper-warm)" }}
            >
              06 — Begin
            </div>
            <h2
              className="display text-[48px] sm:text-[72px] lg:text-[104px] leading-[0.95] mb-12 lg:mb-16"
              style={{ color: "var(--cream)" }}
            >
              Five days.<br />
              One senior engineer.<br />
              <span
                className="display-italic"
                style={{ color: "var(--copper-warm)" }}
              >
                A real plan.
              </span>
            </h2>

            <a
              href="mailto:hello@ecitech.online?subject=ECITech%20%E2%80%94%2030-minute%20introduction"
              className="btn-primary-warm"
            >
              <span>Book a 30-minute introduction</span>
              <span className="arrow" aria-hidden="true"></span>
            </a>
          </div>

          {/* Right — "What happens in the first call" */}
          <aside
            className="border-t pt-10"
            style={{ borderColor: "rgba(245, 239, 227, 0.3)" }}
          >
            <div
              className="mono-eyebrow mb-7"
              style={{ color: "rgba(245, 239, 227, 0.65)" }}
            >
              What happens in the first call
            </div>
            <ol className="space-y-5 text-[15px] leading-[1.6]">
              <li className="flex gap-4">
                <span
                  className="mono-eyebrow pt-1"
                  style={{ color: "var(--copper-warm)" }}
                >
                  I
                </span>
                <span style={{ color: "rgba(245, 239, 227, 0.88)" }}>
                  You describe the part of the business that quietly costs the most.
                </span>
              </li>
              <li className="flex gap-4">
                <span
                  className="mono-eyebrow pt-1"
                  style={{ color: "var(--copper-warm)" }}
                >
                  II
                </span>
                <span style={{ color: "rgba(245, 239, 227, 0.88)" }}>
                  We say honestly whether AI is the right tool &mdash; or whether you need something simpler.
                </span>
              </li>
              <li className="flex gap-4">
                <span
                  className="mono-eyebrow pt-1"
                  style={{ color: "var(--copper-warm)" }}
                >
                  III
                </span>
                <span style={{ color: "rgba(245, 239, 227, 0.88)" }}>
                  If it&apos;s a fit, we scope a five-day audit on the spot. If not, we point you elsewhere.
                </span>
              </li>
              <li className="flex gap-4">
                <span
                  className="mono-eyebrow pt-1"
                  style={{ color: "var(--copper-warm)" }}
                >
                  IV
                </span>
                <span style={{ color: "rgba(245, 239, 227, 0.88)" }}>
                  No decks. No sales theatre. Engagements start at $10k / 70k&thinsp;₽.
                </span>
              </li>
            </ol>
          </aside>
        </div>
      </div>

      {/* Scoped warm-button styles (variant of .btn-primary inverted into Copper close) */}
      <style>{`
        .btn-primary-warm {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: var(--cream);
          color: var(--ink-warm);
          padding: 20px 28px;
          font-weight: 500;
          font-size: 15px;
          letter-spacing: -0.005em;
          transition: transform 250ms ease, background 250ms ease, color 250ms ease;
          position: relative;
          overflow: hidden;
          border: none;
          cursor: pointer;
        }
        .btn-primary-warm::after {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--copper-warm);
          transform: translateY(101%);
          transition: transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
          z-index: 0;
        }
        .btn-primary-warm > * { position: relative; z-index: 1; }
        .btn-primary-warm:hover {
          color: var(--cream);
        }
        .btn-primary-warm:hover::after { transform: translateY(0); }
        .btn-primary-warm .arrow {
          width: 18px;
          height: 1px;
          background: currentColor;
          position: relative;
          flex-shrink: 0;
        }
        .btn-primary-warm .arrow::after {
          content: "";
          position: absolute;
          right: 0;
          top: -3px;
          width: 7px;
          height: 7px;
          border-top: 1px solid currentColor;
          border-right: 1px solid currentColor;
          transform: rotate(45deg);
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
