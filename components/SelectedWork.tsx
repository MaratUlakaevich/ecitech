import type { FC } from "react";

/**
 * Selected Work — Section 02.
 *
 * Editorial portfolio grid of 6 production-ready cases. Each card is a
 * typographic plate rather than a screenshot tile: niche + name + 1-line
 * story + stack. The plate backgrounds are CSS-only gradients tuned per
 * project (no image dependencies, no broken Vercel preview links).
 *
 * Click-through points to live URL on Vercel/custom domain.
 */

type Case = {
  number: string;
  niche: string;
  brand: string;
  story: string;
  stack: string;
  href: string;
  plate: string;       // gradient identifier
  emphasis?: string;   // optional italic word in brand
};

const CASES: Case[] = [
  {
    number: "I",
    niche: "Floral boutique",
    brand: "Pompon",
    emphasis: "Pompon",
    story:
      "Catalog-led B2C site for a floral boutique. Bilingual EN/RU, product taxonomy, instant Telegram order routing.",
    stack: "Next.js · Strapi · Vercel",
    href: "https://v0-flower-shop-website-opal.vercel.app/",
    plate: "plate-rose",
  },
  {
    number: "II",
    niche: "Medical practice",
    brand: "Aida Isaeva",
    story:
      "Editorial portfolio for a plastic surgeon. Quiet typographic restraint, monochrome photography, trust before motion.",
    stack: "Next.js · Vercel",
    href: "https://aida-isaeva.vercel.app/",
    plate: "plate-bone",
  },
  {
    number: "III",
    niche: "Cultural space",
    brand: "Zerno",
    story:
      "Museum × restaurant × master-class venue. Long-form bread-and-history hero, three programmatic halls, single ticket flow.",
    stack: "Next.js · Vercel",
    href: "https://zerno-sigma.vercel.app/",
    plate: "plate-amber",
  },
  {
    number: "IV",
    niche: "Premium DJ portfolio",
    brand: "DJ Tallamie",
    emphasis: "Tallamie",
    story:
      "Custom domain personal brand for an international DJ. Booking form, set archive with wave-form players, premium press kit.",
    stack: "Next.js · Vercel · custom domain",
    href: "https://www.tallamie.com/",
    plate: "plate-violet",
  },
  {
    number: "V",
    niche: "KSA construction",
    brand: "Investment Floors",
    story:
      "Bilingual EN + AR landing for a contracting firm. Featured project gallery, services taxonomy, calibrated for enterprise procurement.",
    stack: "Next.js · Vercel · EN/AR",
    href: "https://v0-saudi-construction-landing-page.vercel.app/",
    plate: "plate-sand",
  },
  {
    number: "VI",
    niche: "Design service",
    brand: "48/лого",
    emphasis: "48",
    story:
      "Productized logo design — brief, AI generation, designer polish, delivery in 48 hours. Editorial pricing transparency at the entry tier.",
    stack: "Next.js · Vercel",
    href: "https://logo48.vercel.app/",
    plate: "plate-walnut",
  },
];

const plateStyles: Record<string, React.CSSProperties> = {
  "plate-rose":   { background: "linear-gradient(135deg, #F5E0D9 0%, #D89B89 50%, #5B2E26 100%)" },
  "plate-bone":   { background: "linear-gradient(135deg, #E8E4DC 0%, #B5B1A8 50%, #2E2C28 100%)" },
  "plate-amber":  { background: "linear-gradient(135deg, #E4C892 0%, #A47935 50%, #2E1F0C 100%)" },
  "plate-violet": { background: "linear-gradient(135deg, #D8CCE5 0%, #7E68A6 50%, #2A1F44 100%)" },
  "plate-sand":   { background: "linear-gradient(135deg, #ECDEC1 0%, #B7986A 50%, #4A3618 100%)" },
  "plate-walnut": { background: "linear-gradient(135deg, #E8DAC8 0%, #A07A57 50%, #3C281B 100%)" },
};

const SelectedWork: FC = () => {
  return (
    <section
      id="work"
      className="relative z-10 hairline-top hairline-bottom bg-paper-soft"
    >
      <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-24 lg:py-32">
        {/* Section header */}
        <div className="grid lg:grid-cols-[1fr_600px] gap-14 mb-16 lg:mb-20 items-end">
          <div>
            <div className="mono-eyebrow mb-6">02 — Selected work</div>
            <h2 className="display text-[44px] sm:text-[60px] lg:text-[80px] text-ink-900 leading-[0.95]">
              Six recent projects.<br />
              <span className="display-italic text-copper-500">Different worlds,</span><br />
              one studio.
            </h2>
          </div>
          <p className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 max-w-reading">
            A floral boutique. A plastic surgeon. A construction firm. A cultural venue. A DJ on tour. The work below is the breadth, not the limit.
          </p>
        </div>

        {/* Case grid */}
        <ol className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <li key={c.brand} className="group">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block hairline border bg-paper-50 transition-colors hover:bg-paper-100"
              >
                {/* Plate (photo-position placeholder, tuned per brand) */}
                <div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={plateStyles[c.plate]}
                  aria-hidden="true"
                >
                  <div className="absolute top-5 left-5 mono-eyebrow !text-paper-50 opacity-80">
                    PLATE {c.number} · {c.niche.toUpperCase()}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="display text-[44px] sm:text-[52px] lg:text-[56px] text-paper-50 leading-[0.92]">
                      {c.emphasis ? (
                        <>
                          <span className="display-italic text-paper-100/95">
                            {c.brand.replace(c.emphasis, "")}
                          </span>
                          {c.emphasis}
                        </>
                      ) : (
                        c.brand
                      )}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-8 lg:p-9">
                  <p className="text-[15px] leading-[1.6] text-ink-700 mb-6 min-h-[7em]">
                    {c.story}
                  </p>

                  <div className="hairline-top pt-5 flex items-center justify-between">
                    <div className="mono-eyebrow !text-[10px]">{c.stack}</div>
                    <span className="text-[13.5px] text-ink-800 transition-colors group-hover:text-copper-500">
                      View live &rarr;
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>

        {/* Footer line — bridge to practice */}
        <div className="mt-20 lg:mt-24 hairline-top pt-10 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
          <p className="display text-[28px] lg:text-[34px] text-ink-900 leading-[1.1] max-w-[640px]">
            Six different markets. <span className="display-italic text-copper-500">One studio</span>, three product layers.
          </p>
          <a href="#practice" className="link-editorial whitespace-nowrap">
            See how we work &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
