import Link from "next/link";
import type { FC } from "react";

/**
 * Editorial masthead — shared site header.
 *
 * Two stacked rows:
 *  - Ticker (VOLUME 02 · MOSCOW + RIYADH · EST. 2024)
 *  - Primary masthead (ECITech wordmark + nav + Begin link)
 *
 * Used by every page that isn't the marketing home (the home page
 * inlines its own copy of this masthead at the top of HeroSection so
 * the workflow background can render flush above the fold).
 */
const MastheadHeader: FC = () => {
  return (
    <header className="relative z-10">
      {/* Ticker bar */}
      <div className="hairline-bottom">
        <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6 font-mono text-[10.5px] tracking-[0.2em] text-ink-500">
            <span>VOLUME 02</span>
            <span className="opacity-40">·</span>
            <span>MOSCOW + RIYADH</span>
            <span className="opacity-40">·</span>
            <span className="hidden md:inline">EST. 2024</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[10.5px] tracking-[0.2em] text-ink-500">
            <span className="text-brass-500 tracking-[0.15em]">٢٠٢٦ ربيع</span>
            <span className="opacity-40 hidden md:inline">·</span>
            <span className="hidden md:inline">INDEPENDENT DIGITAL STUDIO</span>
          </div>
        </div>
      </div>

      {/* Primary masthead */}
      <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-8 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3" aria-label="ECITech home">
          <span className="display text-3xl tracking-tight text-ink-900">ECITech</span>
          <span className="seal" aria-hidden="true"></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
          <Link href="/portfolio" className="text-[14.5px] text-ink-800 hover:text-copper-500 transition-colors">
            Work
          </Link>
          <Link href="/services" className="text-[14.5px] text-ink-800 hover:text-copper-500 transition-colors">
            Practice
          </Link>
          <Link href="/industries" className="text-[14.5px] text-ink-800 hover:text-copper-500 transition-colors">
            Industries
          </Link>
          <Link href="/blog" className="text-[14.5px] text-ink-800 hover:text-copper-500 transition-colors">
            Journal
          </Link>
          <Link href="/about" className="text-[14.5px] text-ink-800 hover:text-copper-500 transition-colors">
            Studio
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-3 text-[14.5px] text-ink-900 group"
        >
          <span className="smallcaps">Begin</span>
          <span className="w-8 h-px bg-ink-900 transition-all duration-300 group-hover:bg-copper-500 group-hover:w-12"></span>
        </Link>
      </div>
    </header>
  );
};

export default MastheadHeader;
