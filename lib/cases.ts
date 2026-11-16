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
  /** Arabic copy for the /ar site. */
  ar: { niche: string; story: string; stack?: string };
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

export const CASES: Case[] = [
  {
    niche: "Floral boutique, Dubai",
    brand: "Pompon",
    emphasis: "Pompon",
    story:
      "Online flower shop for a Dubai boutique. English, Arabic and Russian catalog, sizes per bouquet, Stripe checkout and an order desk for the team.",
    stack: "Next.js, Supabase, Stripe",
    ar: {
      niche: "متجر زهور، دبي",
      story:
        "متجر إلكتروني لمتجر زهور في دبي. كتالوج بالإنجليزية والعربية والروسية، ومقاسات لكل باقة، ودفع عبر Stripe، ولوحة طلبات للفريق.",
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
    ar: {
      niche: "دار عطور، دبي",
      story:
        "متجر إلكتروني لدار عطور في دبي: كريمات للجسم وعود للمنزل. فيديو في الواجهة، بالإنجليزية والعربية والروسية مع دعم كامل للكتابة من اليمين إلى اليسار، ودفع عبر Stripe أو عند الاستلام، ولوحة إدارة للمالكة.",
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
    ar: {
      niche: "نظام ERP سحابي",
      story:
        "نظام ERP لشركات الخدمات: المهام وتتبع الوقت والفواتير وإدارة العملاء في قاعدة بيانات واحدة، فتعرف كل مهمة عميلها وساعاتها وتكلفتها.",
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
    ar: {
      niche: "عيادة طبية",
      story:
        "موقع أعمال لجرّاحة تجميل. طباعة هادئة، وتصوير أحادي اللون، والثقة قبل الحركة.",
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
    ar: {
      niche: "مقاولات، السعودية",
      story:
        "صفحة هبوط ثنائية اللغة (الإنجليزية والعربية) لشركة مقاولات سعودية. معرض لأبرز المشاريع، وتصنيف للخدمات مكتوب لعملاء الشركات الكبرى.",
    },
    href: "https://www.tawabekalistithmar.com/",
    shot: "/img/work/tawabek.jpg",
    plate: "plate-sand",
    featured: true,
  },
  {
    niche: "Cultural space",
    brand: "Zerno",
    story:
      "A museum, restaurant and master-class venue in one. Long-form bread-and-history hero, three halls, a single ticket flow.",
    stack: "Next.js, Vercel",
    ar: {
      niche: "مساحة ثقافية",
      story:
        "متحف ومطعم وورش عمل تحت سقف واحد. واجهة طويلة عن تاريخ الخبز، وثلاث قاعات، ومسار واحد لشراء التذاكر.",
    },
    href: "https://zerno-sigma.vercel.app/",
    shot: "/img/work/zerno.jpg",
    plate: "plate-amber",
    featured: true,
  },
  {
    niche: "Real estate, UAE",
    brand: "Soléva",
    story:
      "Sales landing for beachfront residences on Al Marjan Island, Ras Al Khaimah. Unit types with starting prices, the payment plan, and every enquiry routed to WhatsApp or a price request.",
    stack: "Next.js, Vercel",
    ar: {
      niche: "عقارات، الإمارات",
      story:
        "صفحة مبيعات لمشروع سكني على الشاطئ في جزيرة المرجان برأس الخيمة. أنواع الوحدات بأسعار تبدأ من، وخطة الدفع، وكل استفسار يصل إلى واتساب أو كطلب سعر.",
    },
    href: "https://www.solevaresidence.com/",
    shot: "/img/work/soleva.jpg",
    plate: "plate-sand",
  },
  {
    niche: "Marketing agency, KSA",
    brand: "OGP Digital",
    story:
      "Arabic-first site for a Riyadh performance-marketing agency, with an English version. Services, method and results, a live growth calculator, and leads straight into WhatsApp.",
    stack: "Next.js, AR/EN",
    ar: {
      niche: "وكالة تسويق، السعودية",
      story:
        "موقع عربي أولًا لوكالة تسويق أداء في الرياض، مع نسخة إنجليزية. الخدمات والمنهجية والنتائج، وحاسبة نمو تفاعلية، والطلبات تصل مباشرة إلى واتساب.",
    },
    href: "https://www.ogpdigital.com/",
    shot: "/img/work/ogp-digital.jpg",
    plate: "plate-moss",
  },
  {
    niche: "DJ portfolio",
    brand: "DJ Tallamie",
    emphasis: "Tallamie",
    story:
      "Personal brand for an international DJ. Booking form, set archive with waveform players, press kit.",
    stack: "Next.js, Vercel, custom domain",
    ar: {
      niche: "موقع منسّق موسيقي",
      story:
        "هوية شخصية لمنسّق موسيقي عالمي. نموذج حجز، وأرشيف للعروض مع مشغّلات موجية، وملف صحفي.",
      stack: "Next.js, Vercel, نطاق خاص",
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
    ar: {
      niche: "خدمة تصميم",
      story:
        "تصميم الشعار كمنتج: موجز، وتوليد بالذكاء الاصطناعي، وتحسين على يد مصمم، والتسليم خلال 48 ساعة. الأسعار ظاهرة من البداية.",
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
    ar: {
      niche: "استشارات استراتيجية",
      story:
        "موقع مؤسسي متعدد الصفحات لشركة استشارات استراتيجية. تصنيف للخدمات، وفريق الشركاء، ودراسات حالة عند الطلب.",
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
    ar: {
      niche: "مصنع مشروبات",
      story:
        "موقع لمصنع مع كتالوج ثنائي اللغة، وبوابة للموزعين، وتوجيه الطلبات إلى فريق المبيعات الوطني.",
      stack: "Next.js, Vercel, نطاق خاص",
    },
    href: "https://era-zavod.ru/",
    shot: "/img/work/era.jpg",
    plate: "plate-moss",
  },
];
