import type { FC } from "react";
import CaseCard from "./CaseCard";
import { CASES } from "@/lib/cases";
import type { Locale } from "@/lib/i18n";

/**
 * Selected Work — Section 02.
 *
 * Editorial portfolio grid of 6 cases built by the founder and partner
 * team. Each card is a typographic plate rather than a screenshot tile:
 * niche + name + 1-line story + stack. Plate gradients run light (top)
 * to dark (bottom) so the niche label reads in ink and the title in white.
 *
 * Click-through points to live URL on Vercel/custom domain.
 */

const T = {
  en: {
    h2a: "Six recent projects.",
    h2b: "Six different",
    h2c: " markets.",
    lead:
      "Built by our team for a floral boutique, a perfume house, a B2B software product, a plastic surgeon, a construction firm in Saudi Arabia, and a cultural venue.",
    bridgeA: "Each of these started as a site. ",
    bridgeB: "The next layer",
    bridgeC: " is the systems that run behind it.",
    more: "See the three layers",
  },
  ru: {
    h2a: "Шесть свежих проектов.",
    h2b: "Шесть разных",
    h2c: " рынков.",
    lead:
      "Наша команда сделала их для цветочного бутика, парфюмерного дома, B2B-продукта, пластического хирурга, строительной компании в Саудовской Аравии и культурного пространства.",
    bridgeA: "Каждый начинался с сайта. ",
    bridgeB: "Следующий слой",
    bridgeC: " — системы, которые работают за ним.",
    more: "Посмотреть три слоя",
  },
};

const SelectedWork: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = T[locale];
  return (
    <section
      id="work"
      className="relative z-10 hairline-top hairline-bottom bg-paper-soft"
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-20 lg:py-32">
        {/* Section header */}
        <div className="grid lg:grid-cols-[1fr_600px] gap-8 lg:gap-14 mb-14 lg:mb-20 items-end">
          <h2 className="display text-[40px] sm:text-[60px] lg:text-[80px] text-ink-900 leading-[0.95]">
            {t.h2a}<br />
            <span className="display-italic text-copper-500">{t.h2b}</span>{t.h2c}
          </h2>
          <p className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 max-w-reading">
            {t.lead}
          </p>
        </div>

        {/* Case grid */}
        <ol className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CASES.filter((c) => c.featured).map((c) => (
            <li key={c.brand}>
              <CaseCard c={c} locale={locale} />
            </li>
          ))}
        </ol>

        {/* Footer line — bridge to practice */}
        <div className="mt-16 lg:mt-24 hairline-top pt-10 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
          <p className="display text-[26px] lg:text-[34px] text-ink-900 leading-[1.15] max-w-[680px]">
            {t.bridgeA}<span className="display-italic text-copper-500">{t.bridgeB}</span>{t.bridgeC}
          </p>
          <a href="#practice" className="link-editorial whitespace-nowrap self-start lg:self-auto">
            {t.more}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
