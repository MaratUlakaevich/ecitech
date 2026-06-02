import type { FC } from "react";
import Link from "next/link";
import HeroWorkflowBg from "./HeroWorkflowBg";

/**
 * Hero section — Phase 1 production.
 *
 * Editorial composition:
 *  - Masthead ticker bar (VOLUME 02 · STUDIO · MOSCOW + RIYADH · ٢٠٢٦)
 *  - Primary masthead with ECITech wordmark + nav + begin link
 *  - Single-column hero (no sidebar) with workflow SVG floating behind
 *  - Display H1 (Fraunces, up to 128px on desktop) with italic copper accent
 *  - Dropcap-led subtitle (Instrument Sans, 19–21px)
 *  - Primary CTA (audit booking) + secondary editorial link
 *  - Scroll indicator (bottom-left)
 */
const HeroSection: FC = () => {
  return (
    <header className="relative z-10">
      {/* ------- Masthead ticker bar ------- */}
      <div className="hairline-bottom">
        <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6 font-mono text-[10.5px] tracking-[0.2em] text-ink-500">
            <span>VOLUME 02</span>
            <span className="opacity-40">·</span>
            <span>SPRING 2026</span>
            <span className="opacity-40">·</span>
            <span className="hidden md:inline">EST. 2024</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[10.5px] tracking-[0.2em] text-ink-500">
            <span className="hidden md:inline">INDEPENDENT DIGITAL STUDIO</span>
          </div>
        </div>
      </div>

      {/* ------- Primary masthead ------- */}
      <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-8 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3" aria-label="ECITech home">
          <span className="display text-3xl tracking-tight text-ink-900">ECITech</span>
          <span className="seal" aria-hidden="true"></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
          <Link href="/portfolio"  className="text-[14.5px] text-ink-800 hover:text-copper-500 transition-colors">Work</Link>
          <Link href="/services"   className="text-[14.5px] text-ink-800 hover:text-copper-500 transition-colors">Practice</Link>
          <Link href="/industries" className="text-[14.5px] text-ink-800 hover:text-copper-500 transition-colors">Industries</Link>
          <Link href="/journal"    className="text-[14.5px] text-ink-800 hover:text-copper-500 transition-colors">Journal</Link>
          <Link href="/about"      className="text-[14.5px] text-ink-800 hover:text-copper-500 transition-colors">Studio</Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-3 text-[14.5px] text-ink-900 group"
        >
          <span className="smallcaps">Begin</span>
          <span className="w-8 h-px bg-ink-900 transition-all duration-300 group-hover:bg-copper-500 group-hover:w-12"></span>
        </Link>
      </div>

      {/* ------- Hero canvas ------- */}
      <section className="relative z-10 max-w-[1480px] mx-auto px-8 lg:px-14 pt-20 pb-32 lg:pb-40 overflow-hidden">
        {/* Workflow SVG floats behind content */}
        <HeroWorkflowBg />

        {/* Content column — relative + z-index above workflow */}
        <div className="hero-content relative max-w-hero" style={{ zIndex: 1 }}>
          <div className="reveal reveal-1 mono-eyebrow mb-12">
            <span>01</span>
            <span className="mx-2 opacity-40">—</span>
            <span>Independent digital studio</span>
          </div>

          <h1 className="reveal reveal-2 display text-[64px] sm:text-[88px] lg:text-[128px] text-ink-900 mb-14 lg:mb-20">
            Sites, automation,<br />
            and the <span className="display-italic text-copper-500">agents</span><br />
            that run them.
          </h1>

          <p className="reveal reveal-3 max-w-reading text-[19px] lg:text-[21px] leading-[1.55] text-ink-700 mb-12 dropcap">
            ECITech is an independent digital studio. We build websites, workflow automation, and AI integration for mid-market businesses. Our engineers shipped systems for BCG Gamma, Juniper Networks, Cisco, and Google &mdash; we now run those same engineering practices for boutique-scale teams.
          </p>

          <div className="reveal reveal-4 flex flex-wrap items-center gap-10">
            <Link href="/contact" className="btn-primary">
              <span>Book a 30-minute introduction</span>
              <span className="arrow" aria-hidden="true"></span>
            </Link>
            <Link href="/portfolio" className="link-editorial">
              View selected work &rarr;
            </Link>
          </div>
        </div>

        {/* Scroll indicator (bottom-left) */}
        <div className="reveal reveal-7 absolute left-8 lg:left-14 bottom-10 flex items-center gap-3 mono-eyebrow text-ink-400 z-[2]">
          <span className="scroll-ind inline-block w-px h-8 bg-ink-400"></span>
          <span>Continue reading</span>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
