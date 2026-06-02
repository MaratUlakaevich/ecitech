import type { FC } from "react";

/**
 * Service Ladder — Section 03.
 *
 * The studio's structural moat: Sites → Automation → Integration as a
 * single product trajectory. Three editorial rows + an entry-tier
 * tripwire ("AI Readiness Audit") featured at top. Each row is a
 * horizontal composition: roman numeral, big serif tier name, body
 * copy, included list, "Read more" link.
 *
 * Pricing is intentionally NOT shown on the marketing surface
 * (per the project pricing-hidden decision). Only "Engagements start
 * at $10k / 70k ₽" lives in FAQ.
 */

type Tier = {
  number: string;
  slug: string;
  title: string;
  highlight: string;
  body: string;
  meta: string[];
  href: string;
};

const AUDIT: Tier = {
  number: "00",
  slug: "audit",
  title: "AI Readiness Audit",
  highlight: "audit",
  body:
    "Five days. One senior engineer. Three pilots scoped with honest ROI math. Delivered as a fifteen-page report your partners can actually read.",
  meta: ["5 DAYS", "FIXED FEE", "NO OBLIGATION TO CONTINUE"],
  href: "#begin",
};

const TIERS: Tier[] = [
  {
    number: "01",
    slug: "sites",
    title: "Sites",
    highlight: "Sites",
    body:
      "Custom Next.js websites for businesses that have outgrown templates. From a single landing to a multilingual catalog — engineered to last beyond the launch sprint.",
    meta: ["2–10 WEEKS", "NEXT.JS · VERCEL", "EN · RU · AR"],
    href: "/services/sites",
  },
  {
    number: "02",
    slug: "automation",
    title: "Automation",
    highlight: "Automation",
    body:
      "Once the site is live, the operations layer: Telegram routing, amoCRM and Bitrix24 integration, WhatsApp Business, SEO retainers, content ops. The quiet machinery behind a calm Monday.",
    meta: ["4–8 WEEKS", "TELEGRAM · CRM · WHATSAPP", "RETAINER OPTION"],
    href: "/services/automation",
  },
  {
    number: "03",
    slug: "integration",
    title: "Integration",
    highlight: "Integration",
    body:
      "AI agents, RAG knowledge systems, custom CRM workflows, personal cabinets. The intelligence layer that turns one site into a working system — and one team's hours back into the team.",
    meta: ["6–16 WEEKS", "AGENTS · RAG · CUSTOM", "BILINGUAL DELIVERY"],
    href: "/services/integration",
  },
];

const TierRow: FC<{ tier: Tier; featured?: boolean }> = ({ tier, featured }) => (
  <a
    href={tier.href}
    className={`group block hairline-bottom py-12 lg:py-16 px-4 lg:px-10 -mx-4 lg:-mx-10 transition-colors hover:bg-paper-100 ${
      featured ? "hairline-top" : ""
    }`}
  >
    <div className="grid lg:grid-cols-[80px_240px_1fr_160px] gap-8 lg:gap-10 items-start lg:items-center">
      <div className="mono-eyebrow text-copper-500">
        {tier.number}
        <br />
        <span className="text-ink-500 normal-case !tracking-[0.2em]">{tier.slug}</span>
      </div>
      <div>
        <h3 className="display text-[32px] sm:text-[38px] lg:text-[44px] text-ink-900 leading-[1]">
          {featured ? (
            <>
              AI Readiness<br />Audit
            </>
          ) : (
            tier.title
          )}
        </h3>
      </div>
      <div>
        <p className="text-[15.5px] leading-[1.65] text-ink-700 max-w-measure">
          {tier.body}
        </p>
        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 mono-eyebrow !text-[10px] text-ink-500">
          {tier.meta.map((m, i) => (
            <span key={m} className="flex items-center gap-3">
              <span>{m}</span>
              {i < tier.meta.length - 1 && <span className="opacity-40">·</span>}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center lg:justify-end gap-3 text-ink-700 transition-colors group-hover:text-copper-500">
        <span className="smallcaps">
          {featured ? "Begin here" : "Read more"}
        </span>
        <span className="w-7 h-px bg-current transition-all duration-300 group-hover:w-12"></span>
      </div>
    </div>
  </a>
);

const ServiceLadder: FC = () => {
  return (
    <section
      id="practice"
      className="relative z-10 max-w-[1480px] mx-auto px-8 lg:px-14 py-24 lg:py-32"
    >
      {/* Header */}
      <div className="grid lg:grid-cols-[1fr_600px] gap-14 mb-20 items-end">
        <div>
          <div className="mono-eyebrow mb-6">03 — Practice</div>
          <h2 className="display text-[44px] sm:text-[60px] lg:text-[80px] text-ink-900 leading-[0.95]">
            One trajectory.<br />
            <span className="display-italic text-copper-500">Three layers</span>.
          </h2>
        </div>
        <p className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 max-w-reading">
          Most studios stop at the site. We start there, then earn the right to automate it, then earn the right to make it intelligent. Each tier is fixed-scope and ships on its own; the ladder is optional, not pushed.
        </p>
      </div>

      {/* Tripwire row — featured */}
      <TierRow tier={AUDIT} featured />

      {/* Three core tiers */}
      {TIERS.map((tier) => (
        <TierRow key={tier.slug} tier={tier} />
      ))}

      {/* Footer affordance */}
      <div className="mt-16 lg:mt-20 hairline-top pt-10 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
        <p className="text-[16px] leading-[1.65] text-ink-700 max-w-reading">
          Not sure which tier fits? <span className="text-ink-900">Begin with the audit.</span> Five days, fixed fee, walk away with a plan whether or not you continue.
        </p>
        <a href="#begin" className="link-editorial whitespace-nowrap">
          Book the audit &rarr;
        </a>
      </div>
    </section>
  );
};

export default ServiceLadder;
