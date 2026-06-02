import type { Metadata } from "next";
import Link from "next/link";
import MastheadHeader from "../../components/MastheadHeader";
import EditorialFooter from "../../components/EditorialFooter";
import FinalCTA from "../../components/FinalCTA";
import BreadcrumbsLd from "../../components/seo/BreadcrumbsLd";

export const metadata: Metadata = {
  title: "Practice — Sites · Automation · AI Integration",
  description:
    "ECITech ships sites, workflow automation, and AI integration as a single product ladder. One trajectory, three layers, fixed scope at each tier.",
  keywords: [
    "Next.js development",
    "AI workflow automation",
    "amoCRM integration",
    "Bitrix24 integration",
    "Telegram bot",
    "WhatsApp Business automation",
    "RAG system",
    "AI agent",
    "AI readiness audit",
  ],
  openGraph: {
    title: "Practice — ECITech",
    description:
      "Sites → Automation → Integration. One trajectory, three layers.",
    url: "https://ecitech.online/services",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "ECITech practice — service ladder",
      },
    ],
  },
  twitter: {
    title: "Practice — ECITech",
    description: "Sites · Automation · AI Integration. Fixed scope at each tier.",
    images: ["/img/og/default.png"],
  },
};

const LAYERS = [
  {
    n: "01",
    slug: "sites",
    title: "Sites",
    lead:
      "Custom Next.js websites for businesses that have outgrown templates. From a single landing to a multilingual catalog.",
    deliverables: [
      "Editorial design, bespoke per brand",
      "Next.js + Vercel · 100/100 Lighthouse target",
      "RU · EN · AR copy and structure",
      "On-page SEO, sitemap, structured data",
      "Yandex.Metrica + GA4 instrumentation",
    ],
    duration: "2–10 weeks",
    sub: "Old fashioned care, modern stack.",
  },
  {
    n: "02",
    slug: "automation",
    title: "Automation",
    lead:
      "Once the site is live, the operations layer. Telegram routing, CRM integration, WhatsApp Business, ops automation.",
    deliverables: [
      "Telegram bot + lead routing to operators",
      "amoCRM or Bitrix24 setup + integration",
      "WhatsApp Business cloud API onboarding",
      "n8n / Make pipelines for repeating tasks",
      "SEO retainer · content ops",
    ],
    duration: "4–8 weeks",
    sub: "The quiet machinery behind a calm Monday.",
  },
  {
    n: "03",
    slug: "integration",
    title: "Integration",
    lead:
      "The intelligence layer. AI agents, RAG knowledge systems, custom CRM workflows, personal cabinets.",
    deliverables: [
      "RAG knowledge systems on private corpora",
      "Conversational agents (Claude, GPT, voice)",
      "Custom CRM extensions, account dashboards",
      "Embedding pipelines + governance",
      "Bilingual delivery (RU · EN · AR)",
    ],
    duration: "6–16 weeks",
    sub: "Where a team's hours return to the team.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: "Home", url: "/" },
          { name: "Practice", url: "/services" },
        ]}
      />

      <MastheadHeader />

      <main className="relative">
        {/* Page hero */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 pt-16 pb-20 lg:pt-24 lg:pb-32">
          <div className="mono-eyebrow mb-8">Practice · Three layers, one trajectory</div>
          <h1 className="display text-[48px] sm:text-[68px] lg:text-[96px] text-ink-900 leading-[0.98] max-w-hero">
            One trajectory.<br />
            <span className="display-italic text-copper-500">Three layers.</span>
          </h1>
          <p className="mt-12 max-w-reading text-[19px] lg:text-[21px] leading-[1.6] text-ink-700">
            Most studios stop at the site. We start there, then earn the right to automate it, then earn the right to make it intelligent. Each tier ships on its own with a fixed scope; the ladder is optional, not pushed.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link href="/contact" className="btn-primary">
              <span>Book a 30-minute introduction</span>
              <span className="arrow" aria-hidden="true"></span>
            </Link>
            <Link href="#audit" className="link-editorial">
              Begin with the audit &rarr;
            </Link>
          </div>
        </section>

        {/* Audit tripwire */}
        <section id="audit" className="hairline-top hairline-bottom bg-paper-soft">
          <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-16 lg:py-20 grid lg:grid-cols-[180px_240px_1fr_180px] gap-8 lg:gap-12 items-start lg:items-center">
            <div className="mono-eyebrow text-copper-500">
              00<br />
              <span className="text-ink-500 normal-case !tracking-[0.2em]">audit</span>
            </div>
            <h2 className="display text-[32px] sm:text-[40px] lg:text-[44px] text-ink-900 leading-[1.02]">
              AI Readiness<br />Audit
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink-700 max-w-measure">
              Five days, one senior engineer, three pilots scoped with honest ROI math. Delivered as a fifteen-page report your partners can actually read. No obligation to continue afterwards.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-ink-900 hover:text-copper-500 transition-colors"
            >
              <span className="smallcaps">Book the audit</span>
              <span className="w-7 h-px bg-current"></span>
            </Link>
          </div>
        </section>

        {/* Three layers — long form */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 py-20 lg:py-28 space-y-20 lg:space-y-28">
          {LAYERS.map((layer) => (
            <article key={layer.slug} className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
              <div>
                <div className="mono-eyebrow text-copper-500 mb-3">
                  {layer.n}
                  <br />
                  <span className="text-ink-500 normal-case !tracking-[0.2em]">
                    {layer.slug}
                  </span>
                </div>
                <div className="mono-eyebrow !text-[10px] text-ink-500">{layer.duration}</div>
              </div>

              <div>
                <h3 className="display text-[44px] sm:text-[60px] lg:text-[72px] text-ink-900 leading-[0.98] mb-5">
                  {layer.title}
                </h3>
                <p className="mono-eyebrow !normal-case !text-[14px] !tracking-[0.04em] text-brass-500 italic mb-8">
                  — {layer.sub}
                </p>
                <p className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 max-w-reading mb-10">
                  {layer.lead}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
                  {layer.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-[15px] leading-[1.55] text-ink-800">
                      <span className="text-copper-500 select-none pt-1">·</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* Pricing note (the only place pricing is named on the site) */}
        <section className="hairline-top bg-paper-soft">
          <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-16 lg:py-20">
            <div className="mono-eyebrow mb-6">A short note on cost</div>
            <p className="display text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-ink-900 max-w-[920px]">
              Engagements start at <span className="display-italic text-copper-500">$10,000</span> or <span className="display-italic text-copper-500">₽700,000</span>.
            </p>
            <p className="mt-6 max-w-reading text-[16px] leading-[1.65] text-ink-700">
              We price per project, not per hour. Every engagement begins with a fixed-fee audit ($3,000 / ₽250,000), and you walk away with a plan whether or not you continue. Bilingual delivery (RU · EN · AR) is included where the scope asks for it.
            </p>
          </div>
        </section>
      </main>

      <FinalCTA />
      <EditorialFooter />
    </>
  );
}
