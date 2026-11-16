import type { FC } from "react";
import Link from "next/link";
import { book } from "@/lib/site";
import { contactEmail } from "@/lib/legal";
import type { Locale } from "@/lib/i18n";
import { CASES } from "@/lib/cases";

/**
 * Studio — Section 05.
 *
 * Founder-attributed studio narrative. Avoids "family-run" framing
 * (per project memory), uses "studio of one + network", names Marat,
 * and ties credibility to the ex-BCG/Juniper/Cisco/Google engineering
 * record. Editorial two-column layout with stat row anchor.
 */

const LIVE = CASES.length;

const COPY = {
  en: {
    stats: [
      { value: "10", suffix: "yrs", label: "In software and AI engineering" },
      { value: String(LIVE), suffix: "", label: "Production projects live" },
      { value: "3", suffix: "", label: "Languages we ship in: English, Arabic (RTL included), Russian" },
    ],
    h2a: "Founded in 2024.",
    h2b: "Intentionally small.",
    p1: "ECITech is an independent digital studio based in Riyadh, founded by Marat Ulakaev, an engineer with a decade in software and AI. Marat shipped systems for BCG\u2009Gamma, Juniper Networks, Cisco, and Google before opening the studio.",
    p2a: "We work as ",
    p2b: "a studio of one plus a network",
    p2c: ". Every project is led by the founder and supported by trusted specialists (design, copy, devops) when the scope needs them. No account managers, no sales floor.",
    p3: "We don\u2019t take every project. We choose work where the path is clear: from a site, to the systems that run it, to the agents that scale it.",
    studio: "Studio",
    studioV: "Riyadh, Saudi Arabia",
    markets: "Markets",
    marketsV: "Saudi Arabia, UAE, the wider Gulf",
  },
  ar: {
    stats: [
      { value: "10", suffix: "سنوات", label: "في هندسة البرمجيات والذكاء الاصطناعي" },
      { value: String(LIVE), suffix: "", label: "مشاريع تعمل فعليًا" },
      { value: "3", suffix: "", label: "لغات نطلق بها: العربية (مع دعم الكتابة من اليمين إلى اليسار)، والإنجليزية، والروسية" },
    ],
    h2a: "تأسس عام 2024.",
    h2b: "صغير عن قصد.",
    p1: "ECITech استوديو رقمي مستقل مقره الرياض، أسسه مارات أولاكاييف، مهندس يمتلك عقدًا من الخبرة في البرمجيات والذكاء الاصطناعي. قبل تأسيس الاستوديو، بنى مارات أنظمة لـ BCG\u2009Gamma وJuniper Networks وCisco وGoogle.",
    p2a: "نعمل بصيغة ",
    p2b: "استوديو من شخص واحد مع شبكة من المتخصصين",
    p2c: ". يقود المؤسس كل مشروع بنفسه، وينضم إليه متخصصون موثوقون (التصميم، والمحتوى، والبنية التحتية) عندما يتطلب النطاق ذلك. لا مديري حسابات ولا فرق مبيعات.",
    p3: "لا نقبل كل مشروع. نختار الأعمال التي يكون فيها المسار واضحًا: من الموقع، إلى الأنظمة التي تديره، إلى الوكلاء الذين يوسّعونه.",
    studio: "الاستوديو",
    studioV: "الرياض، المملكة العربية السعودية",
    markets: "الأسواق",
    marketsV: "السعودية، والإمارات، ودول الخليج",
  },
};

const StudioAbout: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = COPY[locale];
  const b = book(locale);
  const STATS = t.stats;
  return (
    <section
      id="studio"
      className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-20 lg:py-32"
    >
      <div className="grid lg:grid-cols-[1fr_600px] gap-14 lg:gap-20 items-start">
        {/* Left — story */}
        <div>
          <h2 className="display text-[40px] sm:text-[60px] lg:text-[80px] text-ink-900 leading-[0.95] mb-10 lg:mb-12">
            {t.h2a}<br />
            {t.h2b}
          </h2>

          <div className="space-y-5 text-[17px] leading-[1.65] text-ink-700 max-w-reading">
            <p>{t.p1}</p>
            <p>
              {t.p2a}<span className="text-ink-900">{t.p2b}</span>{t.p2c}
            </p>
            <p>{t.p3}</p>
          </div>

          <div className="mt-10">
            <Link href={b.href} className="link-editorial">
              {b.label}
            </Link>
          </div>
        </div>

        {/* Right — stats + meta column */}
        <aside className="lg:ps-10 lg:border-s hairline-strong lg:border-s-[var(--rule-strong)]">
          <dl className="grid grid-cols-3 gap-x-6 sm:gap-x-8 mb-14">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end">
                <dt className="text-[13.5px] leading-[1.45] text-ink-500 mt-2 max-w-[160px]">
                  {s.label}
                </dt>
                <dd className="numeral text-[48px] sm:text-[64px] text-ink-900">
                  {s.value}
                  {s.suffix && (
                    <span className="text-[20px] sm:text-[24px] align-top ms-1">{s.suffix}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          {/* Studio meta — where, when, how to reach */}
          <dl className="hairline-top pt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <dt className="mono-eyebrow mb-2">{t.studio}</dt>
              <dd className="text-[15px] text-ink-800">{t.studioV}</dd>
            </div>
            <div>
              <dt className="mono-eyebrow mb-2">{t.markets}</dt>
              <dd className="text-[15px] text-ink-800">{t.marketsV}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="mono-eyebrow mb-2">{locale === "ar" ? "البريد الإلكتروني" : "Email"}</dt>
              <dd>
                <a
                  href={`mailto:${contactEmail(locale)}`}
                  className="inline-flex items-center min-h-11 text-[15px] text-ink-800 hover:text-copper-ink transition-colors"
                >
                  {contactEmail(locale)}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
};

export default StudioAbout;
