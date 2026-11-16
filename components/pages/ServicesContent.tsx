import Link from "next/link";
import MastheadHeader from "../MastheadHeader";
import EditorialFooter from "../EditorialFooter";
import FinalCTA from "../FinalCTA";
import BreadcrumbsLd from "../seo/BreadcrumbsLd";
import { book } from "@/lib/site";
import { href, type Locale } from "@/lib/i18n";

type Layer = {
  slug: string;
  title: string;
  lead: string;
  deliverables: string[];
  duration: string;
};

const T = {
  en: {
    crumbs: ["Home", "Practice"],
    h1a: "One trajectory.",
    h1b: "Three layers.",
    lead:
      "Most studios stop at the site. We start there, then automate the operations behind it, then add the AI layer where it pays for itself. Each layer ships on its own with a fixed scope. Moving up is optional.",
    auditLink: "How the audit works",
    auditTitle: ["AI Readiness", "Audit"],
    auditBody:
      "Five days with one senior engineer. You get three pilots scoped with expected ROI, in a fifteen-page report written for the people who sign off. Fixed fee of $3,000, no obligation to continue.",
    timeline: "Typical timeline",
    priceA: "Engagements start at ",
    priceB: "$10,000",
    priceBody:
      "We price per project, not per hour. Every engagement begins with the fixed-fee audit ($3,000), and you keep the plan whether or not you continue. Bilingual English and Arabic delivery is included where the scope needs it.",
    tiers: [] as { name: string; what: string; price: string; time: string }[],
    extras: "",
    appsEyebrow: "Also",
    appsTitle: "Web and mobile apps",
    appsBody: "Client portals, internal systems and apps for iOS and Android, built as separate projects.",
    appsLink: "How we build apps",
    layers: [
      {
        slug: "sites",
        title: "Sites",
        lead:
          "Custom Next.js websites for businesses that have outgrown templates. From a single landing to a multilingual catalog.",
        deliverables: [
          "Editorial design, bespoke per brand",
          "Next.js on Vercel, with a 100/100 Lighthouse target",
          "English, Arabic and Russian structure, RTL-ready",
          "On-page SEO, sitemap, structured data",
          "GA4, Tag Manager and Search Console setup",
        ],
        duration: "2–10 weeks",
      },
      {
        slug: "automation",
        title: "Automation",
        lead:
          "Once the site is live, the operations layer. WhatsApp Business routing, CRM integration, ops automation.",
        deliverables: [
          "WhatsApp Business cloud API + lead routing to your team",
          "HubSpot or Zoho CRM setup + integration",
          "Portal leads (Bayut, Property Finder) into one inbox",
          "n8n / Make pipelines for repeating tasks",
          "SEO retainer and content operations",
        ],
        duration: "4–8 weeks",
      },
      {
        slug: "integration",
        title: "Integration",
        lead:
          "The intelligence layer. AI agents, RAG knowledge systems, custom CRM workflows, personal cabinets.",
        deliverables: [
          "RAG knowledge systems on private corpora",
          "Conversational agents (Claude, GPT, voice)",
          "Custom CRM extensions, account dashboards",
          "Embedding pipelines + governance",
          "Bilingual delivery in English and Arabic",
        ],
        duration: "6–16 weeks",
      },
    ] as Layer[],
  },
  ar: {
    crumbs: ["الرئيسية", "الخدمات"],
    h1a: "مسار واحد.",
    h1b: "ثلاث طبقات.",
    lead:
      "تتوقف معظم الاستوديوهات عند الموقع. نحن نبدأ منه، ثم نؤتمت العمليات التي خلفه، ثم نضيف طبقة الذكاء الاصطناعي حيث تغطي تكلفتها. كل طبقة تُطلق وحدها بنطاق ثابت، والانتقال إلى الطبقة التالية اختياري.",
    auditLink: "كيف يتم التقييم",
    auditTitle: ["تقييم الجاهزية", "للذكاء الاصطناعي"],
    auditBody:
      "خمسة أيام مع مهندس خبير واحد. تحصلون على ثلاثة مشاريع تجريبية محددة النطاق مع العائد المتوقع، في تقرير من خمس عشرة صفحة مكتوب لأصحاب القرار. بسعر ثابت قدره 3,000 دولار، ودون التزام بالمتابعة.",
    timeline: "المدة المعتادة",
    priceA: "تبدأ المشاريع من ",
    priceB: "10,000 دولار",
    priceBody:
      "نسعّر لكل مشروع، لا بالساعة. يبدأ كل مشروع بتقييم بسعر ثابت (3,000 دولار)، والخطة تبقى لكم سواء أكملتم معنا أم لا. التسليم باللغتين العربية والإنجليزية مشمول عندما يتطلب النطاق ذلك.",
    tiers: [] as { name: string; what: string; price: string; time: string }[],
    extras: "",
    appsEyebrow: "أيضًا",
    appsTitle: "تطبيقات الويب والجوال",
    appsBody: "بوابات العملاء والأنظمة الداخلية وتطبيقات iOS وAndroid، تُبنى كمشاريع مستقلة.",
    appsLink: "كيف نبني التطبيقات",
    layers: [
      {
        slug: "sites",
        title: "المواقع",
        lead:
          "مواقع مخصصة بتقنية Next.js للشركات التي تجاوزت القوالب الجاهزة. من صفحة هبوط واحدة إلى كتالوج متعدد اللغات.",
        deliverables: [
          "تصميم تحريري مخصص لكل علامة تجارية",
          "Next.js على Vercel، بهدف 100/100 في Lighthouse",
          "بنية بالعربية والإنجليزية والروسية، جاهزة للكتابة من اليمين إلى اليسار",
          "تحسين الصفحات لمحركات البحث، وخريطة الموقع، والبيانات المنظمة",
          "إعداد GA4 وTag Manager وSearch Console",
        ],
        duration: "2–10 أسابيع",
      },
      {
        slug: "automation",
        title: "الأتمتة",
        lead:
          "بعد إطلاق الموقع تأتي الطبقة التشغيلية: توجيه المحادثات عبر واتساب للأعمال، والربط مع نظام إدارة العملاء، وأتمتة العمليات.",
        deliverables: [
          "واجهة WhatsApp Business السحابية مع توجيه العملاء المحتملين إلى فريقكم",
          "إعداد HubSpot أو Zoho CRM وربطهما",
          "عملاء البوابات العقارية (Bayut وProperty Finder) في صندوق وارد واحد",
          "مسارات n8n / Make للمهام المتكررة",
          "تحسين محركات البحث بالاشتراك الشهري وإدارة المحتوى",
        ],
        duration: "4–8 أسابيع",
      },
      {
        slug: "integration",
        title: "التكامل",
        lead:
          "طبقة الذكاء. وكلاء ذكاء اصطناعي، وأنظمة معرفة تعتمد على RAG، وسير عمل مخصص لإدارة العملاء، وبوابات خاصة للعملاء.",
        deliverables: [
          "أنظمة معرفة RAG مبنية على مستنداتكم الخاصة",
          "وكلاء محادثة (Claude، GPT، صوتي)",
          "إضافات مخصصة لنظام إدارة العملاء، ولوحات حسابات",
          "مسارات التضمين الدلالي مع حوكمة الوصول",
          "تسليم باللغتين العربية والإنجليزية",
        ],
        duration: "6–16 أسبوعًا",
      },
    ] as Layer[],
  },
};

export default function ServicesContent({ locale }: { locale: Locale }) {
  const t = T[locale];
  const b = book(locale);
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: t.crumbs[0], url: href(locale, "/") },
          { name: t.crumbs[1], url: href(locale, "/services") },
        ]}
      />

      <MastheadHeader locale={locale} />

      <main id="main" className="relative">
        {/* Page hero */}
        <section className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 pt-12 pb-16 lg:pt-20 lg:pb-28">
          <h1 className="display text-[44px] sm:text-[68px] lg:text-[96px] text-ink-900 leading-[0.98] max-w-hero">
            {t.h1a}<br />
            <span className="display-italic text-copper-500">{t.h1b}</span>
          </h1>
          <p className="mt-10 max-w-reading text-[19px] lg:text-[21px] leading-[1.6] text-ink-700">
            {t.lead}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6">
            <Link href={b.href} className="btn-primary">
              <span>{b.label}</span>
              <span className="arrow" aria-hidden="true"></span>
            </Link>
            <Link href="#audit" className="link-editorial">
              {t.auditLink}
            </Link>
          </div>
        </section>

        {/* Audit tripwire */}
        <section id="audit" className="hairline-top hairline-bottom bg-paper-soft scroll-mt-6">
          <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20 grid lg:grid-cols-[280px_1fr_220px] gap-6 lg:gap-12 items-start lg:items-center">
            <h2 className="display text-[32px] sm:text-[40px] lg:text-[44px] text-ink-900 leading-[1.02]">
              {t.auditTitle[0]}<br className="hidden lg:block" /> {t.auditTitle[1]}
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink-700 max-w-measure">
              {t.auditBody}
            </p>
            <Link
              href={b.href}
              className="group inline-flex items-center gap-3 min-h-11 text-ink-900 hover:text-copper-ink transition-colors"
            >
              <span className="smallcaps whitespace-nowrap">{b.label}</span>
              <span className="w-12 h-px bg-current origin-left rtl:origin-right scale-x-[0.6] transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
            </Link>
          </div>
        </section>

        {/* Three layers — long form */}
        <section className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-16 lg:py-28 space-y-16 lg:space-y-28">
          {t.layers.map((layer) => (
            <article
              key={layer.slug}
              id={layer.slug}
              className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-16 scroll-mt-6"
            >
              <div className="lg:pt-5">
                <div className="mono-eyebrow mb-1">{t.timeline}</div>
                <div className="text-[15px] text-ink-800">{layer.duration}</div>
              </div>

              <div>
                <h2 className="display text-[40px] sm:text-[60px] lg:text-[72px] text-ink-900 leading-[0.98] mb-6">
                  {layer.title}
                </h2>
                <p className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 max-w-reading mb-10">
                  {layer.lead}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
                  {layer.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-[15px] leading-[1.55] text-ink-800">
                      <span className="mt-[0.7em] w-3 h-px bg-copper-500 shrink-0" aria-hidden="true"></span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* Apps: a separate practice with its own page */}
        <section id="apps" className="hairline-top scroll-mt-6">
          <Link
            href={href(locale, "/services/apps")}
            className="group block max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20 grid lg:grid-cols-[200px_1fr_auto] gap-4 lg:gap-16 lg:items-center"
          >
            <div className="mono-eyebrow">{t.appsEyebrow}</div>
            <div>
              <h2 className="display text-[36px] sm:text-[48px] lg:text-[56px] text-ink-900 leading-[1] group-hover:text-copper-ink transition-colors">
                {t.appsTitle}
              </h2>
              <p className="mt-4 max-w-reading text-[16px] leading-[1.65] text-ink-700">{t.appsBody}</p>
            </div>
            <span className="inline-flex items-center gap-3 min-h-11 text-ink-900 group-hover:text-copper-ink transition-colors">
              <span className="smallcaps whitespace-nowrap">{t.appsLink}</span>
              <span className="w-12 h-px bg-current origin-left rtl:origin-right scale-x-[0.6] transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
            </span>
          </Link>
        </section>

        {/* Pricing note */}
        <section className="hairline-top bg-paper-soft">
          <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20">
            <h2 className="display text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-ink-900 max-w-[920px]">
              {t.priceA}<span className="display-italic text-copper-500">{t.priceB}</span>.
            </h2>
            <p className="mt-6 max-w-reading text-[16px] leading-[1.65] text-ink-700">
              {t.priceBody}
            </p>
            {t.tiers.length > 0 && (
              <ul className="mt-12 hairline-top">
                {t.tiers.map((tier) => (
                  <li
                    key={tier.name}
                    className="hairline-bottom py-6 grid gap-2 md:grid-cols-[200px_1fr_220px_140px] md:gap-8 md:items-baseline"
                  >
                    <span className="display text-[26px] text-ink-900 leading-[1.1]">{tier.name}</span>
                    <span className="text-[15px] leading-[1.55] text-ink-700">{tier.what}</span>
                    <span className="text-[17px] text-ink-900 tabular-nums">{tier.price}</span>
                    <span className="text-[14px] text-ink-500">{tier.time}</span>
                  </li>
                ))}
              </ul>
            )}
            {t.extras && (
              <p className="mt-8 max-w-reading text-[15px] leading-[1.65] text-ink-700">{t.extras}</p>
            )}
          </div>
        </section>
      </main>

      <FinalCTA locale={locale} />
      <EditorialFooter locale={locale} />
    </>
  );
}
