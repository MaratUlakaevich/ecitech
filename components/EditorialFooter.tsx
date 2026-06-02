import type { FC } from "react";

/**
 * Editorial footer — masthead reprise.
 *
 * Returns to Paper aesthetic after the Section 06 Copper warm close.
 * Four-column layout: studio mark + description, Practice, Industries,
 * Correspondence. Bottom copy line with social.
 */
const EditorialFooter: FC = () => {
  return (
    <footer className="relative z-10 bg-paper-soft hairline-top">
      <div className="max-w-[1480px] mx-auto px-8 lg:px-14 pt-20 pb-10">
        {/* Masthead reprise */}
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-20">
          <div>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="display text-4xl tracking-tight text-ink-900">
                ECITech
              </span>
              <span className="seal" aria-hidden="true"></span>
            </div>
            <p className="text-[15px] leading-[1.65] text-ink-700 max-w-md">
              An independent digital studio for the mid-market.
              <br />
              Quiet, small, meticulous.
            </p>
          </div>

          <div>
            <div className="mono-eyebrow mb-5">Practice</div>
            <ul className="space-y-3 text-[14.5px] text-ink-700">
              <li>
                <a href="#begin" className="hover:text-copper-500 transition-colors">
                  AI Readiness Audit
                </a>
              </li>
              <li>
                <a href="/services/sites" className="hover:text-copper-500 transition-colors">
                  Sites
                </a>
              </li>
              <li>
                <a href="/services/automation" className="hover:text-copper-500 transition-colors">
                  Automation
                </a>
              </li>
              <li>
                <a href="/services/integration" className="hover:text-copper-500 transition-colors">
                  Integration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mono-eyebrow mb-5">The studio</div>
            <ul className="space-y-3 text-[14.5px] text-ink-700">
              <li>
                <a href="#work" className="hover:text-copper-500 transition-colors">
                  Selected work
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-copper-500 transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-copper-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/journal" className="hover:text-copper-500 transition-colors">
                  Journal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mono-eyebrow mb-5">Correspondence</div>
            <ul className="space-y-3 text-[14.5px] text-ink-700">
              <li>
                <a
                  href="mailto:hello@ecitech.online"
                  className="hover:text-copper-500 transition-colors"
                >
                  hello@ecitech.online
                </a>
              </li>
              <li className="pt-3 mono-eyebrow !text-[10px]">
                MON–THU · 09 — 18
              </li>
            </ul>
          </div>
        </div>

        {/* Copyline */}
        <div className="hairline-top pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mono-eyebrow text-ink-500">
          <div>© 2026 ECITech · Volume 02 · Printed digitally</div>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-copper-500 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-copper-500 transition-colors">
              Terms
            </a>
            <a
              href="https://www.linkedin.com/company/ecitech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-copper-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/rss"
              className="hover:text-copper-500 transition-colors"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EditorialFooter;
