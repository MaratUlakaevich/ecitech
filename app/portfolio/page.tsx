import type { Metadata } from "next";
import Link from "next/link";
import MastheadHeader from "../../components/MastheadHeader";
import EditorialFooter from "../../components/EditorialFooter";
import FinalCTA from "../../components/FinalCTA";
import BreadcrumbsLd from "../../components/seo/BreadcrumbsLd";

export const metadata: Metadata = {
  title: "Work — Selected projects · ECITech",
  description:
    "Nine production projects: floral boutique, medical practice, cultural space, DJ portfolio, construction firm, design service, beverage producer, strategy consulting, and our own studio site.",
  keywords: [
    "ECITech portfolio",
    "Next.js projects",
    "boutique studio work",
    "studio portfolio",
    "construction website",
  ],
  openGraph: {
    title: "Work — ECITech",
    description: "Nine production projects across very different worlds.",
    url: "https://ecitech.online/portfolio",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "ECITech selected work",
      },
    ],
  },
  twitter: {
    title: "Work — ECITech",
    description: "Nine production projects. Different worlds, one studio.",
    images: ["/img/og/default.png"],
  },
};

type Case = {
  number: string;
  niche: string;
  brand: string;
  emphasis?: string;
  story: string;
  stack: string;
  href: string;
  plate: string;
};

const CASES: Case[] = [
  {
    number: "I",
    niche: "Floral boutique",
    brand: "Pompon",
    emphasis: "Pompon",
    story:
      "Catalog-led B2C site for a floral boutique. Bilingual product taxonomy, instant Telegram order routing, calm typographic restraint.",
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
      "Museum × restaurant × master-class venue. Long-form bread-and-history hero, three programmatic halls, a single ticket flow.",
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
      "Custom-domain personal brand for an international DJ. Booking form, set archive with wave-form players, premium press kit.",
    stack: "Next.js · Vercel · custom domain",
    href: "https://www.tallamie.com/",
    plate: "plate-violet",
  },
  {
    number: "V",
    niche: "Construction firm",
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
  {
    number: "VII",
    niche: "Strategy consulting",
    brand: "GBS",
    story:
      "Multi-page corporate site for a strategy advisory firm. Service taxonomy, leadership grid, gated case studies.",
    stack: "Next.js · Vercel",
    href: "https://gbs-beta.vercel.app/",
    plate: "plate-slate",
  },
  {
    number: "VIII",
    niche: "Beverage producer",
    brand: "ERA",
    emphasis: "ERA",
    story:
      "Manufacturer site with bilingual catalog, distributor portal, contact routing into national sales.",
    stack: "Next.js · Vercel · custom domain",
    href: "https://era-zavod.ru/",
    plate: "plate-moss",
  },
  {
    number: "IX",
    niche: "AI workflow studio (this site)",
    brand: "ECITech",
    story:
      "Our own studio site — the editorial system you are reading, ahead of the rest of the network.",
    stack: "Next.js · Vercel · in-house",
    href: "https://ecitech.online/",
    plate: "plate-paper",
  },
];

const plateStyles: Record<string, React.CSSProperties> = {
  "plate-rose":   { background: "linear-gradient(135deg, #F5E0D9 0%, #D89B89 50%, #5B2E26 100%)" },
  "plate-bone":   { background: "linear-gradient(135deg, #E8E4DC 0%, #B5B1A8 50%, #2E2C28 100%)" },
  "plate-amber":  { background: "linear-gradient(135deg, #E4C892 0%, #A47935 50%, #2E1F0C 100%)" },
  "plate-violet": { background: "linear-gradient(135deg, #D8CCE5 0%, #7E68A6 50%, #2A1F44 100%)" },
  "plate-sand":   { background: "linear-gradient(135deg, #ECDEC1 0%, #B7986A 50%, #4A3618 100%)" },
  "plate-walnut": { background: "linear-gradient(135deg, #E8DAC8 0%, #A07A57 50%, #3C281B 100%)" },
  "plate-slate":  { background: "linear-gradient(135deg, #DCE0E6 0%, #7E8BA1 50%, #1F2A3E 100%)" },
  "plate-moss":   { background: "linear-gradient(135deg, #DDE2C8 0%, #88996B 50%, #2E3722 100%)" },
  "plate-paper":  { background: "linear-gradient(135deg, #FAFAF8 0%, #C4C0B5 50%, #07070A 100%)" },
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: "Home", url: "/" },
          { name: "Work", url: "/portfolio" },
        ]}
      />

      <MastheadHeader />

      <main className="relative">
        {/* Page hero */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="mono-eyebrow mb-8">Selected work · Nine projects</div>
          <h1 className="display text-[48px] sm:text-[68px] lg:text-[96px] text-ink-900 leading-[0.98] max-w-hero">
            Different worlds.<br />
            <span className="display-italic text-copper-500">One studio.</span>
          </h1>
          <p className="mt-12 max-w-reading text-[19px] lg:text-[21px] leading-[1.6] text-ink-700">
            A floral boutique. A plastic surgeon. A construction firm. A DJ on tour. A cultural venue. A producer of mineral water. A strategy advisory. A design service. Below are the nine projects we currently put our name on.
          </p>
        </section>

        {/* Grid */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 pb-24 lg:pb-32">
          <ol className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <li key={c.brand} className="group">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hairline border bg-paper-50 transition-colors hover:bg-paper-100"
                >
                  <div
                    className="aspect-[4/3] relative overflow-hidden"
                    style={plateStyles[c.plate]}
                    aria-hidden="true"
                  >
                    <div className="absolute top-5 left-5 mono-eyebrow !text-paper-50 opacity-80">
                      PLATE {c.number} · {c.niche.toUpperCase()}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="display text-[42px] sm:text-[48px] lg:text-[54px] text-paper-50 leading-[0.94]">
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

          <div className="mt-20 hairline-top pt-10 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
            <p className="display text-[26px] lg:text-[32px] text-ink-900 leading-[1.1] max-w-[640px]">
              A tenth project is the one we&apos;d <span className="display-italic text-copper-500">build with you.</span>
            </p>
            <Link href="/contact" className="link-editorial whitespace-nowrap">
              Talk to the studio &rarr;
            </Link>
          </div>
        </section>
      </main>

      <FinalCTA />
      <EditorialFooter />
    </>
  );
}
