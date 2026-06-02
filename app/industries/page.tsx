import type { Metadata } from "next";
import Link from "next/link";
import MastheadHeader from "../../components/MastheadHeader";
import EditorialFooter from "../../components/EditorialFooter";
import FinalCTA from "../../components/FinalCTA";
import BreadcrumbsLd from "../../components/seo/BreadcrumbsLd";

export const metadata: Metadata = {
  title: "Industries — Where ECITech works",
  description:
    "ECITech delivers boutique sites and AI integration for healthcare, real estate, construction, hospitality, retail, and cultural institutions.",
  keywords: [
    "industries served",
    "healthcare digital studio",
    "real estate AI agency",
    "construction website agency",
    "hospitality AI integration",
    "boutique digital studio",
  ],
  openGraph: {
    title: "Industries — ECITech",
    description:
      "Boutique sites and AI integration for healthcare, real estate, construction, hospitality, retail, and cultural institutions.",
    url: "https://ecitech.online/industries",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "Industries — ECITech",
      },
    ],
  },
  twitter: {
    title: "Industries — ECITech",
    description: "Six sectors we know well.",
    images: ["/img/og/default.png"],
  },
};

const INDUSTRIES = [
  {
    n: "I",
    slug: "healthcare",
    title: "Healthcare practice",
    sub: "Clinics, surgeons, fertility, aesthetic",
    body:
      "Editorial sites for owner-operated medical practices. Quiet typographic restraint, structured trust signals, multilingual intake. Live: Aida Isaeva.",
  },
  {
    n: "II",
    slug: "real-estate-construction",
    title: "Real estate & construction",
    sub: "Brokerages, developers, contracting firms",
    body:
      "Bilingual EN/AR landings calibrated for Vision 2030 procurement, multi-page corporate sites with featured-project galleries. Live: Investment Floors.",
  },
  {
    n: "III",
    slug: "hospitality-cultural",
    title: "Hospitality & cultural",
    sub: "Restaurants, hotels, museums, venues",
    body:
      "Long-form editorial homes for places that already have a story. Single-ticket flows, RU/EN copy, event programming. Live: Zerno cultural space.",
  },
  {
    n: "IV",
    slug: "retail-d2c",
    title: "Retail & D2C",
    sub: "Catalog brands, boutiques, premium producers",
    body:
      "Catalog-led commerce with Telegram order routing and amoCRM follow-up. Bilingual where the audience is mixed. Live: Pompon floral boutique; ERA beverage producer.",
  },
  {
    n: "V",
    slug: "professional-services",
    title: "Professional services",
    sub: "Consulting, design, advisory, agencies",
    body:
      "Corporate sites with service taxonomies, leadership grids, gated case studies. Productised offers when the firm has a wedge. Live: GBS strategy advisory; 48/лого design service.",
  },
  {
    n: "VI",
    slug: "culture-personal",
    title: "Culture & personal brand",
    sub: "DJs, performers, founders, public figures",
    body:
      "Custom-domain personal sites with press kits, booking flows, set archives, and a single, beautifully wired contact form. Live: DJ Tallamie.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
        ]}
      />

      <MastheadHeader />

      <main className="relative">
        {/* Page hero */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="mono-eyebrow mb-8">Industries · Six sectors we know well</div>
          <h1 className="display text-[48px] sm:text-[68px] lg:text-[96px] text-ink-900 leading-[0.98] max-w-hero">
            Where we&apos;ve<br />
            <span className="display-italic text-copper-500">already shipped.</span>
          </h1>
          <p className="mt-12 max-w-reading text-[19px] lg:text-[21px] leading-[1.6] text-ink-700">
            We don&apos;t pretend to know every industry. The six below are the ones where we&apos;ve already shipped — and where the operations layer behind the site is the part that quietly costs the most.
          </p>
        </section>

        {/* Industries grid */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 pb-24 lg:pb-32">
          <ol className="grid gap-6 lg:gap-8 md:grid-cols-2">
            {INDUSTRIES.map((ind) => (
              <li key={ind.slug} className="hairline border bg-paper-50 p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="numeral text-[44px] text-copper-500 leading-none">{ind.n}</span>
                  <span className="mono-eyebrow !text-[10px]">SECTOR</span>
                </div>
                <h3 className="display text-[28px] sm:text-[32px] text-ink-900 mb-2 leading-[1.05]">
                  {ind.title}
                </h3>
                <p className="mono-eyebrow !normal-case !text-[12.5px] !tracking-[0.04em] text-brass-500 italic mb-6">
                  — {ind.sub}
                </p>
                <p className="text-[15px] leading-[1.65] text-ink-700">{ind.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-20 hairline-top pt-10 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
            <p className="display text-[26px] lg:text-[32px] text-ink-900 leading-[1.1] max-w-[640px]">
              Your industry isn&apos;t here? <span className="display-italic text-copper-500">Tell us anyway.</span>
            </p>
            <Link href="/contact" className="link-editorial whitespace-nowrap">
              Begin a conversation &rarr;
            </Link>
          </div>
        </section>
      </main>

      <FinalCTA />
      <EditorialFooter />
    </>
  );
}
