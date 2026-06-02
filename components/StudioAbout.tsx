import type { FC } from "react";

/**
 * Studio — Section 05.
 *
 * Founder-attributed studio narrative. Avoids "family-run" framing
 * (per project memory), uses "studio of one + network", names Marat,
 * and ties credibility to the ex-BCG/Juniper/Cisco/Google engineering
 * record. Editorial two-column layout with stat row anchor.
 */

const STATS = [
  { value: "9", suffix: "", label: "Live production projects" },
  { value: "5", suffix: "yrs", label: "Combined Next.js + AI delivery" },
  { value: "3", suffix: "", label: "Languages we ship in" },
  { value: "1", suffix: "", label: "Founder per project" },
];

const StudioAbout: FC = () => {
  return (
    <section
      id="studio"
      className="relative z-10 max-w-[1480px] mx-auto px-8 lg:px-14 py-24 lg:py-32"
    >
      <div className="grid lg:grid-cols-[1fr_600px] gap-14 lg:gap-20 items-start">
        {/* Left — story */}
        <div>
          <div className="mono-eyebrow mb-6">05 — The studio</div>
          <h2 className="display text-[44px] sm:text-[60px] lg:text-[80px] text-ink-900 leading-[0.95] mb-12">
            Founded in 2024.<br />
            <span className="display-italic text-copper-500">Intentionally small.</span>
          </h2>

          <div className="space-y-5 text-[17px] leading-[1.65] text-ink-700 max-w-reading">
            <p>
              ECITech is an independent digital studio, founded by Marat Ulakaev &mdash; an engineer with a decade in software and AI. Marat shipped systems for BCG&thinsp;Gamma, Juniper Networks, Cisco, and Google before opening the studio.
            </p>
            <p>
              We work as <span className="text-ink-900">a studio of one plus a network</span>: every project is led by the founder, supported by trusted specialists &mdash; designer, copywriter, devops &mdash; activated when the scope asks for them. We are not an agency. We do not run a sales floor.
            </p>
            <p>
              We don&apos;t take every project. We choose work where the trajectory is clear: from a site, to the systems that run it, to the agents that scale it. The work in the portfolio above is the proof.
            </p>
          </div>

          <div className="mt-10">
            <a href="#begin" className="link-editorial">
              Talk to the studio &rarr;
            </a>
          </div>
        </div>

        {/* Right — stats + meta column */}
        <aside className="lg:pl-10 lg:border-l hairline-strong lg:border-l-[var(--rule-strong)]">
          <div className="mono-eyebrow mb-8">In numbers</div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-14">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="numeral text-[64px] sm:text-[72px] text-ink-900">
                  {s.value}
                  {s.suffix && (
                    <span className="text-[26px] align-top ml-1">{s.suffix}</span>
                  )}
                </div>
                <div className="mono-eyebrow !text-[10.5px] !normal-case !tracking-[0.1em] text-ink-500 mt-1 max-w-[200px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Studio meta — correspondence + working hours */}
          <div className="hairline-top pt-8 space-y-6">
            <div>
              <div className="mono-eyebrow mb-2 !text-[10px]">Correspondence</div>
              <a
                href="mailto:hello@ecitech.online"
                className="text-[15px] text-ink-800 hover:text-copper-500 transition-colors"
              >
                hello@ecitech.online
              </a>
            </div>
            <div>
              <div className="mono-eyebrow mb-2 !text-[10px]">Working hours</div>
              <p className="text-[14px] text-ink-700">
                MON&ndash;THU · 09 &mdash; 18
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default StudioAbout;
