import type { Metadata } from "next";
import Link from "next/link";
import MastheadHeader from "../../components/MastheadHeader";
import EditorialFooter from "../../components/EditorialFooter";
import FinalCTA from "../../components/FinalCTA";
import BreadcrumbsLd from "../../components/seo/BreadcrumbsLd";

export const metadata: Metadata = {
  title: "Studio — ECITech",
  description:
    "ECITech is an independent digital studio founded by Marat Ulakaev. Sites, automation, and AI integration for the mid-market.",
  keywords: [
    "about ECITech",
    "Marat Ulakaev",
    "boutique digital studio",
    "founder-led studio",
    "Next.js developer founder",
  ],
  openGraph: {
    title: "Studio — ECITech",
    description:
      "Founded by an engineer who shipped systems for BCG Gamma, Juniper, Cisco, and Google. Intentionally small.",
    url: "https://ecitech.online/about",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "ECITech — the studio",
      },
    ],
  },
  twitter: {
    title: "Studio — ECITech",
    description: "Independent digital studio. Founded 2024.",
    images: ["/img/og/default.png"],
  },
};

const VALUES = [
  {
    n: "I",
    title: "Founder-led",
    body:
      "Every project is run by the person who pitched it. No account managers, no junior handoffs, no sales floor.",
  },
  {
    n: "II",
    title: "Intentionally small",
    body:
      "Three to five projects in flight at any time. We turn work down when the calendar is honest.",
  },
  {
    n: "III",
    title: "Honest scope",
    body:
      "Fixed fees, written scope, weekly demos. If AI is not the right tool, we say so — and point you elsewhere.",
  },
  {
    n: "IV",
    title: "Bilingual delivery",
    body:
      "English, Russian, Arabic. We build the same quality for every client, regardless of language or sector.",
  },
];

const ROSTER = [
  { role: "Founder · Principal engineer", name: "Marat Ulakaev", note: "Ex-BCG Gamma, Juniper, Cisco, Google" },
  { role: "Design (network)", name: "Activated per project", note: "Editorial, brand, product UI" },
  { role: "Copy (network)", name: "Activated per project", note: "RU / EN long-form, technical" },
  { role: "DevOps (network)", name: "Activated per project", note: "Vercel · Hetzner · Postgres" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: "Home", url: "/" },
          { name: "Studio", url: "/about" },
        ]}
      />

      <MastheadHeader />

      <main className="relative">
        {/* Hero */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 pt-16 pb-20 lg:pt-24 lg:pb-32">
          <div className="mono-eyebrow mb-8">Studio · Founded 2024</div>
          <h1 className="display text-[48px] sm:text-[68px] lg:text-[96px] text-ink-900 leading-[0.98] max-w-hero">
            An independent<br />
            digital studio,<br />
            <span className="display-italic text-copper-500">intentionally small.</span>
          </h1>
          <p className="mt-12 max-w-reading text-[19px] lg:text-[21px] leading-[1.6] text-ink-700 dropcap">
            ECITech is an independent digital studio. We build sites, workflow automation, and AI integration for mid-market businesses &mdash; about three to five projects in flight at a time, all run personally by the founder.
          </p>
        </section>

        {/* Founder note */}
        <section className="hairline-top hairline-bottom bg-paper-soft">
          <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-20 lg:py-28 grid lg:grid-cols-[1fr_600px] gap-12 lg:gap-20 items-start">
            <div>
              <div className="mono-eyebrow mb-6">A note from the founder</div>
              <h2 className="display text-[36px] sm:text-[48px] lg:text-[64px] text-ink-900 leading-[1.02] mb-10">
                I&apos;ve been writing code for a decade.<br />
                <span className="display-italic text-copper-500">I want to write it for fewer, better clients.</span>
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.65] text-ink-700 max-w-reading">
                <p>
                  Before ECITech I shipped systems inside BCG Gamma, Juniper Networks, Cisco, and Google. The work was big and the calendars were rigid. I wanted to bring that engineering discipline somewhere smaller — close to actual operators, where a single weekend of work still moves the business on Monday.
                </p>
                <p>
                  So ECITech is a studio of one, plus a trusted network. Designers, copywriters, devops engineers — activated when the scope asks for them, not held on payroll because they fit a slide. Every project gets the founder, and every founder is mine to disappoint.
                </p>
                <p className="text-ink-900">
                  We don&apos;t take every project. We choose work where the trajectory is clear: from a site, to the systems that run it, to the agents that scale it.
                </p>
              </div>
              <div className="mt-10 mono-eyebrow text-ink-500 flex items-center gap-3">
                <span className="w-4 h-px bg-ink-400"></span>
                <span>Marat Ulakaev · Founder</span>
              </div>
            </div>

            {/* Roster column */}
            <aside className="lg:pl-10 lg:border-l hairline-strong">
              <div className="mono-eyebrow mb-8">The studio</div>
              <ul className="space-y-7">
                {ROSTER.map((r) => (
                  <li key={r.role}>
                    <div className="mono-eyebrow !text-[10px] !normal-case !tracking-[0.1em] text-ink-500 mb-1">
                      {r.role}
                    </div>
                    <div className="text-[18px] text-ink-900 leading-[1.3]">{r.name}</div>
                    <div className="text-[14px] text-ink-700 mt-1">{r.note}</div>
                  </li>
                ))}
              </ul>
              <div className="brass-rule mt-10 mb-6"></div>
              <div className="space-y-5 text-[14px] text-ink-700">
                <div>
                  <div className="mono-eyebrow !text-[10px] mb-1">Correspondence</div>
                  <a
                    href="mailto:hello@ecitech.online"
                    className="text-ink-800 hover:text-copper-500 transition-colors"
                  >
                    hello@ecitech.online
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 py-20 lg:py-32">
          <div className="grid lg:grid-cols-[1fr_600px] gap-14 mb-16 items-end">
            <div>
              <div className="mono-eyebrow mb-6">How we work</div>
              <h2 className="display text-[40px] sm:text-[56px] lg:text-[72px] text-ink-900 leading-[0.98]">
                Four <span className="display-italic text-copper-500">principles.</span>
              </h2>
            </div>
            <p className="text-[17px] leading-[1.65] text-ink-700 max-w-reading">
              Not a manifesto. The four rules we actually live by when scoping a project, choosing a stack, and saying no.
            </p>
          </div>

          <ol className="grid gap-6 lg:gap-8 md:grid-cols-2">
            {VALUES.map((v) => (
              <li key={v.title} className="hairline border bg-paper-50 p-8 lg:p-10">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="numeral text-[44px] text-copper-500">{v.n}</span>
                  <span className="mono-eyebrow !text-[10px]">PRINCIPLE</span>
                </div>
                <h3 className="display text-[26px] text-ink-900 mb-3 leading-[1.1]">
                  {v.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-ink-700">{v.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 hairline-top pt-10 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
            <p className="display text-[26px] lg:text-[32px] text-ink-900 leading-[1.1] max-w-[640px]">
              We&apos;d rather end a call honestly than start one with theatre.
            </p>
            <Link href="/contact" className="link-editorial whitespace-nowrap">
              Begin a project &rarr;
            </Link>
          </div>
        </section>
      </main>

      <FinalCTA />
      <EditorialFooter />
    </>
  );
}
