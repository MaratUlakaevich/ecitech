import type { Metadata } from "next";
import ServicesContent from "../../../components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Услуги ECITech: сайты, автоматизация и ИИ-интеграция",
  description:
    "Сайты, автоматизация процессов и ИИ-интеграция как единая лестница услуг. Один путь, три слоя, фиксированный объём на каждом.",
  alternates: { canonical: "https://ecitech.online/ru/services" },
  openGraph: {
    title: "Услуги — ECITech",
    description: "Сайты, автоматизация процессов и ИИ-интеграция как единая лестница услуг. Один путь, три слоя, фиксированный объём на каждом.",
    url: "https://ecitech.online/ru/services",
    locale: "ru_RU",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "Услуги — ECITech",
    description: "Сайты, автоматизация процессов и ИИ-интеграция как единая лестница услуг. Один путь, три слоя, фиксированный объём на каждом.",
    images: ["/img/og/default.png"],
  },
};

export default function RuServicesPage() {
  return <ServicesContent locale="ru" />;
}
