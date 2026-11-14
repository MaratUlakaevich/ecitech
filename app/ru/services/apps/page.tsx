import type { Metadata } from "next";
import AppsContent from "../../../../components/pages/AppsContent";

const description =
  "Разработка веб-приложений и мобильных приложений для iOS и Android: личные кабинеты, внутренние системы, сервисы по подписке. Веб — от 300 000 ₽, мобильные — от 500 000 ₽.";

export const metadata: Metadata = {
  title: "Разработка веб- и мобильных приложений — ECITech",
  description,
  alternates: {
    canonical: "https://ecitech.online/ru/services/apps",
    languages: { en: "https://ecitech.online/services/apps", ru: "https://ecitech.online/ru/services/apps" },
  },
  openGraph: {
    title: "Веб- и мобильные приложения — ECITech",
    description,
    url: "https://ecitech.online/ru/services/apps",
    locale: "ru_RU",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "Веб- и мобильные приложения — ECITech",
    description,
    images: ["/img/og/default.png"],
  },
};

export default function RuAppsPage() {
  return <AppsContent locale="ru" />;
}
