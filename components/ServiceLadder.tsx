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
 * Pricing is intentionally NOT shown here (per the project
 * pricing-hidden decision). "Engagements start at $10k" lives in the
 * closing section and on /services.
 */
import { book } from "@/lib/site";
import { href, type Locale } from "@/lib/i18n";

type Tier = {
  slug: string;
  title: string;
  body: string;
  meta: string[];
};

const COPY = {
  en: {
    audit: {
      slug: "audit",
      title: "AI Readiness Audit",
      body:
        "Five days with one senior engineer. You get three pilots scoped with expected ROI, in a fifteen-page report written for the people who sign off.",
      meta: ["5 days", "Fixed fee", "No obligation to continue"],
    },
    auditTitle: ["AI Readiness", "Audit"],
    tiers: [
      {
        slug: "sites",
        title: "Sites",
        body:
          "Custom Next.js websites for businesses that have outgrown templates. From a single landing page to a multilingual catalog, built to last beyond the launch.",
        meta: ["2–10 weeks", "Next.js on Vercel", "English, Arabic, Russian"],
      },
      {
        slug: "automation",
        title: "Automation",
        body:
          "Once the site is live, the operations layer: WhatsApp Business routing, HubSpot and Zoho CRM integration, portal lead intake, SEO retainers.",
        meta: ["4–8 weeks", "WhatsApp, CRM, portals", "Retainer option"],
      },
      {
        slug: "integration",
        title: "Integration",
        body:
          "AI agents, RAG knowledge systems, custom CRM workflows, client portals. The layer that turns a site into a working system and gives your team its hours back.",
        meta: ["6–16 weeks", "Agents, RAG, custom builds", "Bilingual delivery"],
      },
    ] as Tier[],
    apps: {
      slug: "apps",
      title: "Web and mobile apps",
      body:
        "Client portals, internal systems and apps for iOS and Android, run as a separate project. We ship a first working version that solves one real job, then grow it from what users actually do.",
      meta: ["8–20 weeks", "Web, iOS, Android", "Fixed price per project"],
    },
    appsLabel: "Alongside the layers",
    appsCta: "See apps",
    entry: "Entry point, before the layers",
    auditCta: "How the audit works",
    tierCta: "See what's included",
    h2a: "One trajectory.",
    h2b: "Three layers",
    lead:
      "Most studios stop at the site. We start there, then earn the right to automate it, then earn the right to make it intelligent. Each tier is fixed-scope and ships on its own; the ladder is optional, not pushed.",
    footA: "Not sure which layer fits? ",
    footB: "Start with the audit.",
    footC: " Five days, fixed fee, and you keep the plan whether or not you continue.",
  },
  ar: {
    audit: {
      slug: "audit",
      title: "تقييم الجاهزية للذكاء الاصطناعي",
      body:
        "خمسة أيام مع مهندس خبير واحد. تحصلون على ثلاثة مشاريع تجريبية محددة النطاق مع العائد المتوقع، في تقرير من خمس عشرة صفحة مكتوب لأصحاب القرار.",
      meta: ["5 أيام", "سعر ثابت", "دون التزام بالمتابعة"],
    },
    auditTitle: ["تقييم الجاهزية", "للذكاء الاصطناعي"],
    tiers: [
      {
        slug: "sites",
        title: "المواقع",
        body:
          "مواقع مخصصة بتقنية Next.js للشركات التي تجاوزت القوالب الجاهزة. من صفحة هبوط واحدة إلى كتالوج متعدد اللغات، مبنية لتدوم طويلًا بعد الإطلاق.",
        meta: ["2–10 أسابيع", "Next.js على Vercel", "العربية والإنجليزية والروسية"],
      },
      {
        slug: "automation",
        title: "الأتمتة",
        body:
          "بعد إطلاق الموقع تأتي الطبقة التشغيلية: توجيه المحادثات عبر واتساب للأعمال، والربط مع HubSpot وZoho CRM، واستقبال العملاء المحتملين من البوابات العقارية، وخدمات تحسين محركات البحث الشهرية.",
        meta: ["4–8 أسابيع", "واتساب، CRM، البوابات", "خيار الاشتراك الشهري"],
      },
      {
        slug: "integration",
        title: "التكامل",
        body:
          "وكلاء ذكاء اصطناعي، وأنظمة معرفة تعتمد على RAG، وسير عمل مخصص لإدارة العملاء، وبوابات للعملاء. الطبقة التي تحوّل الموقع إلى نظام يعمل وتعيد لفريقكم ساعاته.",
        meta: ["6–16 أسبوعًا", "وكلاء، RAG، تطوير مخصص", "تسليم بلغتين"],
      },
    ] as Tier[],
    apps: {
      slug: "apps",
      title: "تطبيقات الويب والجوال",
      body:
        "بوابات العملاء والأنظمة الداخلية وتطبيقات iOS وAndroid، كمشروع مستقل. نطلق نسخة أولى عاملة تحل مهمة حقيقية واحدة، ثم نطوّرها بناءً على ما يفعله المستخدمون فعلًا.",
      meta: ["8–20 أسبوعًا", "ويب، iOS، Android", "سعر ثابت لكل مشروع"],
    },
    appsLabel: "إلى جانب الطبقات",
    appsCta: "اطّلع على التطبيقات",
    entry: "نقطة البداية، قبل الطبقات",
    auditCta: "كيف يتم التقييم",
    tierCta: "ماذا يشمل",
    h2a: "مسار واحد.",
    h2b: "ثلاث طبقات",
    lead:
      "تتوقف معظم الاستوديوهات عند الموقع. نحن نبدأ منه، ثم نكسب الثقة لأتمتته، ثم لجعله ذكيًا. كل طبقة بنطاق ثابت وتُطلق وحدها؛ والانتقال إلى الطبقة التالية اختياري ولا نضغط عليكم فيه.",
    footA: "لستم متأكدين أي طبقة تناسبكم؟ ",
    footB: "ابدأوا بالتقييم.",
    footC: " خمسة أيام، بسعر ثابت، والخطة تبقى لكم سواء أكملتم معنا أم لا.",
  },
};

const TierRow: FC<{
  tier: Tier;
  locale: Locale;
  cta: string;
  featuredTitle?: string[];
  entryLabel?: string;
  path?: string;
}> = ({ tier, locale, cta, featuredTitle, entryLabel, path }) => (
  <a
    href={href(locale, path ?? `/services#${tier.slug}`)}
    className={`group relative isolate block hairline-bottom py-10 lg:py-14 before:absolute before:inset-y-0 before:-inset-x-4 lg:before:-inset-x-10 before:-z-10 before:transition-colors hover:before:bg-paper-100 ${
      featuredTitle ? "hairline-top" : ""
    }`}
  >
    {/* Hairlines stay on the page gutter; only the hover wash bleeds. */}
    <div className="grid lg:grid-cols-[340px_1fr_180px] gap-5 lg:gap-12 items-start lg:items-center">
      <h3 className="display text-[32px] sm:text-[38px] lg:text-[42px] text-ink-900 leading-[1.02] text-balance">
        {entryLabel && <span className="block mono-eyebrow mb-3">{entryLabel}</span>}
        {featuredTitle ? (
          <>
            {featuredTitle[0]}<br className="hidden lg:block" /> {featuredTitle[1]}
          </>
        ) : (
          tier.title
        )}
      </h3>
      <div>
        <p className="text-[16px] leading-[1.65] text-ink-700 max-w-measure">
          {tier.body}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[13.5px] text-ink-500">
          {tier.meta.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center lg:justify-end gap-3 text-ink-700 transition-colors group-hover:text-copper-ink">
        <span className="smallcaps whitespace-nowrap">{cta}</span>
        <span className="w-12 h-px bg-current origin-left rtl:origin-right scale-x-[0.6] transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
      </div>
    </div>
  </a>
);

const ServiceLadder: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = COPY[locale];
  const b = book(locale);
  return (
    <section
      id="practice"
      className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-20 lg:py-32"
    >
      {/* Header */}
      <div className="grid lg:grid-cols-[1fr_600px] gap-8 lg:gap-14 mb-14 lg:mb-20 items-end">
        <h2 className="display text-[40px] sm:text-[60px] lg:text-[80px] text-ink-900 leading-[0.95]">
          {t.h2a}<br />
          <span className="display-italic text-copper-500">{t.h2b}</span>.
        </h2>
        <p className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 max-w-reading">
          {t.lead}
        </p>
      </div>

      {/* Tripwire row — featured */}
      <TierRow tier={t.audit} locale={locale} cta={t.auditCta} featuredTitle={t.auditTitle} entryLabel={t.entry} />

      {/* Three core tiers */}
      {t.tiers.map((tier) => (
        <TierRow key={tier.slug} tier={tier} locale={locale} cta={t.tierCta} />
      ))}

      {/* Apps — a separate service, outside the three-layer ladder */}
      <TierRow tier={t.apps} locale={locale} cta={t.appsCta} entryLabel={t.appsLabel} path="/services/apps" />

      {/* Footer affordance */}
      <div className="mt-14 lg:mt-20 hairline-top pt-10 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
        <p className="text-[16px] leading-[1.65] text-ink-700 max-w-reading">
          {t.footA}<span className="text-ink-900">{t.footB}</span>{t.footC}
        </p>
        <a href={b.href} className="link-editorial whitespace-nowrap self-start lg:self-auto">
          {b.label}
        </a>
      </div>
    </section>
  );
};

export default ServiceLadder;
