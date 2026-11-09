import type { Metadata } from "next";
import IndustriesContent from "../../../components/pages/IndustriesContent";

export const metadata: Metadata = {
  title: "Отрасли: где работает ECITech",
  description:
    "Сайты и ИИ-интеграция для медицины, недвижимости и строительства, гостеприимства, ритейла, B2B и личных брендов.",
  alternates: { canonical: "https://ecitech.online/ru/industries" },
  openGraph: {
    title: "Отрасли — ECITech",
    description: "Сайты и ИИ-интеграция для медицины, недвижимости и строительства, гостеприимства, ритейла, B2B и личных брендов.",
    url: "https://ecitech.online/ru/industries",
    locale: "ru_RU",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "Отрасли — ECITech",
    description: "Сайты и ИИ-интеграция для медицины, недвижимости и строительства, гостеприимства, ритейла, B2B и личных брендов.",
    images: ["/img/og/default.png"],
  },
};

export default function RuIndustriesPage() {
  return <IndustriesContent locale="ru" />;
}
