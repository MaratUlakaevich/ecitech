import type { Metadata } from "next";
import PortfolioContent from "../../../components/pages/PortfolioContent";

export const metadata: Metadata = {
  title: "Работы ECITech: избранные проекты",
  description:
    "Двенадцать работающих проектов: цветочный бутик, парфюмерный дом, ERP-система, медицинская практика, культурное пространство, строительная компания, жилой комплекс, маркетинговое агентство, производитель напитков и другие.",
  alternates: { canonical: "https://ecitech.online/ru/portfolio" },
  openGraph: {
    title: "Работы — ECITech",
    description: "Двенадцать работающих проектов: цветочный бутик, парфюмерный дом, ERP-система, медицинская практика, культурное пространство, строительная компания, жилой комплекс, маркетинговое агентство, производитель напитков и другие.",
    url: "https://ecitech.online/ru/portfolio",
    locale: "ru_RU",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "Работы — ECITech",
    description: "Двенадцать работающих проектов: цветочный бутик, парфюмерный дом, ERP-система, медицинская практика, культурное пространство, строительная компания, жилой комплекс, маркетинговое агентство, производитель напитков и другие.",
    images: ["/img/og/default.png"],
  },
};

export default function RuPortfolioPage() {
  return <PortfolioContent locale="ru" />;
}
