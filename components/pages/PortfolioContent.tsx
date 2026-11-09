import Link from "next/link";
import MastheadHeader from "../MastheadHeader";
import EditorialFooter from "../EditorialFooter";
import FinalCTA from "../FinalCTA";
import BreadcrumbsLd from "../seo/BreadcrumbsLd";
import CaseCard from "../CaseCard";
import { CASES } from "@/lib/cases";
import { book } from "@/lib/site";
import { href, type Locale } from "@/lib/i18n";

const T = {
  en: {
    crumbs: ["Home", "Work"],
    h1a: "Eleven projects.",
    h1b: "Very different",
    h1c: " markets.",
    lead:
      "Built by our team for a floral boutique, a perfume house, a B2B software product, a plastic surgeon, a Saudi construction firm, a touring DJ, a cultural venue, a mineral-water producer, a strategy advisory, and a design service.",
    all: "All projects",
    nextA: "A twelfth project is the one we’d ",
    nextB: "build with you.",
  },
  ru: {
    crumbs: ["Главная", "Работы"],
    h1a: "Одиннадцать проектов.",
    h1b: "Очень разные",
    h1c: " рынки.",
    lead:
      "Наша команда сделала их для цветочного бутика, парфюмерного дома, B2B-продукта, пластического хирурга, саудовской строительной компании, гастролирующего диджея, культурного пространства, производителя минеральной воды, консалтинговой компании и дизайн-сервиса.",
    all: "Все проекты",
    nextA: "Двенадцатый проект — тот, что мы ",
    nextB: "сделаем вместе с вами.",
  },
};

export default function PortfolioContent({ locale }: { locale: Locale }) {
  const t = T[locale];
  const b = book(locale);
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: t.crumbs[0], url: href(locale, "/") },
          { name: t.crumbs[1], url: href(locale, "/portfolio") },
        ]}
      />

      <MastheadHeader locale={locale} />

      <main id="main" className="relative">
        {/* Page hero */}
        <section className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 pt-12 pb-14 lg:pt-20 lg:pb-20">
          <h1 className="display text-[44px] sm:text-[68px] lg:text-[96px] text-ink-900 leading-[0.98] max-w-hero">
            {t.h1a}<br />
            <span className="display-italic text-copper-500">{t.h1b}</span>{t.h1c}
          </h1>
          <p className="mt-10 max-w-reading text-[19px] lg:text-[21px] leading-[1.6] text-ink-700">
            {t.lead}
          </p>
        </section>

        {/* Grid */}
        <section className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 pb-20 lg:pb-32">
          <h2 className="sr-only">{t.all}</h2>
          <ol className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <li key={c.brand}>
                <CaseCard c={c} locale={locale} />
              </li>
            ))}
          </ol>

          <div className="mt-20 hairline-top pt-10 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
            <p className="display text-[26px] lg:text-[32px] text-ink-900 leading-[1.1] max-w-[640px]">
              {t.nextA}<span className="display-italic text-copper-500">{t.nextB}</span>
            </p>
            <Link href={b.href} className="link-editorial whitespace-nowrap self-start lg:self-auto">
              {b.label}
            </Link>
          </div>
        </section>
      </main>

      <FinalCTA locale={locale} />
      <EditorialFooter locale={locale} />
    </>
  );
}
