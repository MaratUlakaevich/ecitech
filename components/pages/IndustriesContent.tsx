import Link from "next/link";
import MastheadHeader from "../MastheadHeader";
import EditorialFooter from "../EditorialFooter";
import FinalCTA from "../FinalCTA";
import BreadcrumbsLd from "../seo/BreadcrumbsLd";
import { book } from "@/lib/site";
import { href, type Locale } from "@/lib/i18n";

type Industry = { slug: string; title: string; sub: string; body: string; example: string };

const T = {
  en: {
    crumbs: ["Home", "Industries"],
    h1a: "Where we’ve",
    h1b: "already shipped.",
    lead:
      "We don’t pretend to know every industry. Our team has shipped in the six below, and in each one the operations behind the site are what cost the most.",
    ourWork: "Our work here: ",
    closeA: "Your industry isn’t here? ",
    closeB: "Tell us anyway.",
    items: [
      {
        slug: "healthcare",
        title: "Healthcare practice",
        sub: "Clinics, surgeons, fertility, aesthetic",
        body: "Editorial sites for owner-operated medical practices. Restrained typography, clear trust signals, multilingual intake.",
        example: "Aida Isaeva",
      },
      {
        slug: "real-estate-construction",
        title: "Real estate & construction",
        sub: "Brokerages, developers, contracting firms",
        body: "Bilingual EN/AR landing pages and multi-page corporate sites with featured-project galleries, written for enterprise buyers.",
        example: "Investment Floors",
      },
      {
        slug: "hospitality-cultural",
        title: "Hospitality & cultural",
        sub: "Restaurants, hotels, museums, venues",
        body: "Long-form editorial sites for places that already have a story. Single-ticket flows, English and Arabic copy, event programming.",
        example: "Zerno cultural space",
      },
      {
        slug: "retail-d2c",
        title: "Retail & D2C",
        sub: "Catalog brands, boutiques, premium producers",
        body: "Catalog-led commerce with online checkout, order routing to WhatsApp and an admin the owner can run alone. EN, AR and RU where the audience is mixed.",
        example: "Pompon floral boutique, Bait Al Choki perfume house, ERA beverage producer",
      },
      {
        slug: "professional-services",
        title: "Professional services & B2B",
        sub: "Consulting, design, agencies, SaaS",
        body: "Corporate sites with service taxonomies and gated case studies, productised offers, and the internal software that runs the firm.",
        example: "Relate Business ERP, GBS strategy advisory, 48/лого design service",
      },
      {
        slug: "culture-personal",
        title: "Culture & personal brand",
        sub: "DJs, performers, founders, public figures",
        body: "Custom-domain personal sites with press kits, booking flows, set archives, and a contact form wired straight to the inbox.",
        example: "DJ Tallamie",
      },
    ] as Industry[],
  },
  ru: {
    crumbs: ["Главная", "Отрасли"],
    h1a: "Где мы",
    h1b: "уже запускались.",
    lead:
      "Мы не делаем вид, что разбираемся во всех отраслях. Наша команда запускала проекты в шести, перечисленных ниже, и в каждой больше всего стоят процессы за сайтом.",
    ourWork: "Наши работы: ",
    closeA: "Вашей отрасли нет в списке? ",
    closeB: "Всё равно напишите.",
    items: [
      {
        slug: "healthcare",
        title: "Медицинские практики",
        sub: "Клиники, хирурги, репродуктология, эстетика",
        body: "Редакционные сайты для частных медицинских практик. Сдержанная типографика, понятные сигналы доверия, запись на нескольких языках.",
        example: "Аида Исаева",
      },
      {
        slug: "real-estate-construction",
        title: "Недвижимость и строительство",
        sub: "Агентства, девелоперы, подрядчики",
        body: "Двуязычные лендинги (EN/AR) и многостраничные корпоративные сайты с галереями объектов, написанные для корпоративных заказчиков.",
        example: "Investment Floors",
      },
      {
        slug: "hospitality-cultural",
        title: "Гостеприимство и культура",
        sub: "Рестораны, отели, музеи, площадки",
        body: "Лонгрид-сайты для мест, у которых уже есть история. Единый путь покупки билета, тексты на нескольких языках, афиша событий.",
        example: "культурное пространство «Зерно»",
      },
      {
        slug: "retail-d2c",
        title: "Ритейл и D2C",
        sub: "Каталожные бренды, бутики, премиальные производители",
        body: "Интернет-магазины с онлайн-оплатой, передачей заказов в WhatsApp и админкой, с которой владелец справится сам. EN, AR и RU, если аудитория смешанная.",
        example: "цветочный бутик Pompon, парфюмерный дом Bait Al Choki, производитель напитков ERA",
      },
      {
        slug: "professional-services",
        title: "Профессиональные услуги и B2B",
        sub: "Консалтинг, дизайн, агентства, SaaS",
        body: "Корпоративные сайты со структурой услуг и кейсами по запросу, продуктовые офферы и внутренний софт, на котором работает компания.",
        example: "ERP Relate Business, консалтинг GBS, дизайн-сервис 48/лого",
      },
      {
        slug: "culture-personal",
        title: "Культура и личный бренд",
        sub: "Диджеи, артисты, основатели, публичные люди",
        body: "Личные сайты на своём домене: пресс-кит, букинг, архив сетов и форма связи, которая приходит прямо на почту.",
        example: "DJ Tallamie",
      },
    ] as Industry[],
  },
};

export default function IndustriesContent({ locale }: { locale: Locale }) {
  const t = T[locale];
  const b = book(locale);
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: t.crumbs[0], url: href(locale, "/") },
          { name: t.crumbs[1], url: href(locale, "/industries") },
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
        </section>

        {/* Industries grid */}
        <section className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 pb-20 lg:pb-32">
          <ul className="grid gap-6 lg:gap-8 md:grid-cols-2">
            {t.items.map((ind) => (
              <li key={ind.slug} className="hairline border bg-paper-50 p-7 lg:p-10">
                <h2 className="display text-[28px] sm:text-[32px] text-ink-900 mb-2 leading-[1.05]">
                  {ind.title}
                </h2>
                <p className="text-[14.5px] italic text-brass-700 mb-6">{ind.sub}</p>
                <p className="text-[15.5px] leading-[1.65] text-ink-700">{ind.body}</p>
                <p className="mt-5 hairline-top pt-4 text-[13.5px] text-ink-500">
                  {t.ourWork}<span className="text-ink-800">{ind.example}</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-20 hairline-top pt-10 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
            <p className="display text-[26px] lg:text-[32px] text-ink-900 leading-[1.1] max-w-[640px]">
              {t.closeA}<span className="display-italic text-copper-500">{t.closeB}</span>
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
