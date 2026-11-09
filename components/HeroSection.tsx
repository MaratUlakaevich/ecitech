import type { FC } from "react";
import Link from "next/link";
import HeroWorkflowBg from "./HeroWorkflowBg";
import { book } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

/**
 * Hero section — home page, directly under the shared MastheadHeader.
 *
 *  - Text column on the left; workflow SVG in the right 40% (lg+)
 *  - Display H1 (Fraunces, fluid up to 112px) with italic copper accent.
 *    Not animated: it is the LCP element.
 *  - Subtitle, then the primary CTA inside the first viewport
 */
const HeroSection: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const b = book(locale);
  return (
    <section className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 pt-10 lg:pt-16 pb-24 lg:pb-32 overflow-hidden">
      {/* Workflow SVG floats behind content */}
      <HeroWorkflowBg />

      {/* Content column — relative + z-index above workflow */}
      <div className="hero-content relative max-w-hero" style={{ zIndex: 1 }}>
        <h1 className="display text-[clamp(2.75rem,8.6vw,7rem)] text-ink-900 mb-10 lg:mb-12 text-balance">
          {locale === "ru" ? (
            <>
              Сайты, автоматизация<br />
              и <span className="display-italic text-copper-500">ИИ-агенты</span>,<br />
              которые ими управляют.
            </>
          ) : (
            <>
              Sites, automation,<br />
              and the <span className="display-italic text-copper-500">agents</span><br />
              that run them.
            </>
          )}
        </h1>

        <p className="reveal reveal-1 max-w-[34rem] text-[19px] lg:text-[21px] leading-[1.55] text-ink-700 mb-10">
          {locale === "ru"
            ? "Сайты, автоматизация процессов и ИИ-агенты для компаний среднего бизнеса. Делают инженеры, которые работали на BCG Gamma, Juniper, Cisco и Google."
            : "Websites, workflow automation, and AI agents for mid-market teams. Built by engineers who shipped for BCG Gamma, Juniper, Cisco, and Google."}
        </p>

        <div className="reveal reveal-2 flex flex-wrap items-center gap-x-10 gap-y-6">
          <Link href={b.href} className="btn-primary">
            <span>{b.label}</span>
            <span className="arrow" aria-hidden="true"></span>
          </Link>
          <Link href="#work" className="link-editorial">
            {locale === "ru" ? "Смотреть работы" : "See the work"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
