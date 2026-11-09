import { typo } from "./typo";

/**
 * Portfolio cases — single source for the home "Selected work" grid
 * (featured only) and the /portfolio page (all). Work by the founder
 * and partner team; framed as "our team", not as studio clients.
 */
export type Case = {
  niche: string;
  brand: string;
  /** Optional part of the brand set upright; the rest renders italic. */
  emphasis?: string;
  story: string;
  stack: string;
  /** Russian copy for the /ru site. */
  ru: { niche: string; story: string; stack?: string };
  href: string;
  plate: keyof typeof PLATES;
  /** First-screen capture of the live site in /public/img/work (1440x1080). */
  shot?: string;
  featured?: boolean;
};

// Light at the top (ink niche label), dark across the bottom third
// (white display title). Every stop pair keeps both labels >= 4.5:1.
export const PLATES = {
  "plate-rose":   "linear-gradient(180deg, #F5E0D9 0%, #D89B89 42%, #5B2E26 100%)",
  "plate-bone":   "linear-gradient(180deg, #E8E4DC 0%, #B5B1A8 42%, #2E2C28 100%)",
  "plate-amber":  "linear-gradient(180deg, #E4C892 0%, #A47935 42%, #2E1F0C 100%)",
  "plate-night":  "linear-gradient(180deg, #DCDEE6 0%, #6B7186 42%, #1A1D2E 100%)",
  "plate-sand":   "linear-gradient(180deg, #ECDEC1 0%, #B7986A 42%, #4A3618 100%)",
  "plate-walnut": "linear-gradient(180deg, #E8DAC8 0%, #A07A57 42%, #3C281B 100%)",
  "plate-slate":  "linear-gradient(180deg, #DCE0E6 0%, #7E8BA1 42%, #1F2A3E 100%)",
  "plate-moss":   "linear-gradient(180deg, #DDE2C8 0%, #88996B 42%, #2E3722 100%)",
  "plate-paper":  "linear-gradient(180deg, #FAFAF8 0%, #C4C0B5 42%, #07070A 100%)",
  "plate-oud":    "linear-gradient(180deg, #EEDCCB 0%, #A8705A 42%, #3A1A17 100%)",
  "plate-ink":    "linear-gradient(180deg, #DEE3EA 0%, #6F8399 42%, #13202F 100%)",
} as const;

export const CASES: Case[] = ([
  {
    niche: "Floral boutique, Dubai",
    brand: "Pompon",
    emphasis: "Pompon",
    story:
      "Online flower shop for a Dubai boutique. English, Arabic and Russian catalog, sizes per bouquet, Stripe checkout and an order desk for the team.",
    stack: "Next.js, Supabase, Stripe",
    ru: {
      niche: "Цветочный бутик, Дубай",
      story:
        "Интернет-магазин цветочного бутика в Дубае. Каталог на английском, арабском и русском, размеры букетов, оплата через Stripe и панель заказов для команды.",
    },
    href: "https://www.pompon.ae/",
    shot: "/img/work/pompon.jpg",
    plate: "plate-rose",
    featured: true,
  },
  {
    niche: "Perfume house, Dubai",
    brand: "Bait Al Choki",
    emphasis: "Choki",
    story:
      "E-commerce for a Dubai perfume house: body creams and home oud. Film-led hero, EN/AR/RU with full RTL, Stripe or cash on delivery, an admin for the owner.",
    stack: "Next.js, Supabase, Stripe",
    ru: {
      niche: "Парфюмерный дом, Дубай",
      story:
        "Интернет-магазин парфюмерного дома из Дубая: кремы для тела и уд для дома. Видео в первом экране, EN/AR/RU с полным RTL, Stripe или оплата курьеру, админка для владелицы.",
    },
    href: "https://bait-al-choki.vercel.app/",
    shot: "/img/work/bait-al-choki.jpg",
    plate: "plate-oud",
    featured: true,
  },
  {
    niche: "B2B SaaS, ERP",
    brand: "Relate Business",
    emphasis: "Business",
    story:
      "ERP for service companies: tasks, time tracking, invoicing and CRM in one database, so every task knows its client, its hours and its cost.",
    stack: "Next.js, NestJS, Postgres",
    ru: {
      niche: "B2B SaaS, ERP",
      story:
        "ERP для сервисных компаний: задачи, учёт времени, счета и CRM в одной базе. Каждая задача знает своего клиента, свои часы и свою стоимость.",
    },
    href: "https://business.relate-verse.tech/",
    plate: "plate-ink",
    featured: true,
  },
  {
    niche: "Medical practice",
    brand: "Aida Isaeva",
    story:
      "Editorial portfolio for a plastic surgeon. Restrained typography, monochrome photography, trust before motion.",
    stack: "Next.js, Vercel",
    ru: {
      niche: "Медицинская практика",
      story:
        "Сайт-портфолио пластического хирурга. Сдержанная типографика, монохромная съёмка, сначала доверие, потом анимация.",
    },
    href: "https://aida-isaeva.vercel.app/",
    shot: "/img/work/aida-isaeva.jpg",
    plate: "plate-bone",
    featured: true,
  },
  {
    niche: "Construction, KSA",
    brand: "Investment Floors",
    story:
      "Bilingual EN + AR landing for a Saudi contracting firm. Featured project gallery and a services taxonomy written for enterprise buyers.",
    stack: "Next.js, Vercel, EN/AR",
    ru: {
      niche: "Строительство, КСА",
      story:
        "Двуязычный лендинг (EN + AR) для саудовской подрядной компании. Галерея ключевых объектов и структура услуг, написанная для корпоративных заказчиков.",
    },
    href: "https://v0-saudi-construction-landing-page.vercel.app/",
    shot: "/img/work/investment-floors.jpg",
    plate: "plate-sand",
    featured: true,
  },
  {
    niche: "Cultural space",
    brand: "Zerno",
    story:
      "A museum, restaurant and master-class venue in one. Long-form bread-and-history hero, three halls, a single ticket flow.",
    stack: "Next.js, Vercel",
    ru: {
      niche: "Культурное пространство",
      story:
        "Музей, ресторан и мастер-классы под одной крышей. Длинный первый экран об истории хлеба, три зала, единый путь покупки билета.",
    },
    href: "https://zerno-sigma.vercel.app/",
    shot: "/img/work/zerno.jpg",
    plate: "plate-amber",
    featured: true,
  },
  {
    niche: "DJ portfolio",
    brand: "DJ Tallamie",
    emphasis: "Tallamie",
    story:
      "Personal brand for an international DJ. Booking form, set archive with waveform players, press kit.",
    stack: "Next.js, Vercel, custom domain",
    ru: {
      niche: "Портфолио диджея",
      story:
        "Личный бренд международного диджея. Форма букинга, архив сетов с плеерами-волнами, пресс-кит.",
      stack: "Next.js, Vercel, свой домен",
    },
    href: "https://www.tallamie.com/",
    shot: "/img/work/tallamie.jpg",
    plate: "plate-night",
  },
  {
    niche: "Design service",
    brand: "48/лого",
    emphasis: "48",
    story:
      "Productized logo design: brief, AI generation, designer polish, delivery in 48 hours. Prices shown up front at the entry tier.",
    stack: "Next.js, Vercel",
    ru: {
      niche: "Дизайн-сервис",
      story:
        "Логотип как продукт: бриф, генерация с ИИ, доводка дизайнером, готово за 48 часов. Цены видны сразу, уже на входном тарифе.",
    },
    href: "https://logo48.vercel.app/",
    shot: "/img/work/logo48.jpg",
    plate: "plate-walnut",
  },
  {
    niche: "Strategy consulting",
    brand: "GBS",
    story:
      "Multi-page corporate site for a strategy advisory firm. Service taxonomy, leadership grid, gated case studies.",
    stack: "Next.js, Vercel",
    ru: {
      niche: "Стратегический консалтинг",
      story:
        "Многостраничный корпоративный сайт консалтинговой компании. Структура услуг, команда партнёров, кейсы по запросу.",
    },
    href: "https://gbs-beta.vercel.app/",
    shot: "/img/work/gbs.jpg",
    plate: "plate-slate",
  },
  {
    niche: "Beverage producer",
    brand: "ERA",
    emphasis: "ERA",
    story:
      "Manufacturer site with a bilingual catalog, distributor portal, and contact routing into national sales.",
    stack: "Next.js, Vercel, custom domain",
    ru: {
      niche: "Производитель напитков",
      story:
        "Сайт производителя с двуязычным каталогом, кабинетом дистрибьютора и маршрутизацией заявок в федеральные продажи.",
      stack: "Next.js, Vercel, свой домен",
    },
    href: "https://era-zavod.ru/",
    shot: "/img/work/era.jpg",
    plate: "plate-moss",
  },
] as Case[]).map((c) => ({ ...c, ru: typo(c.ru) }));
