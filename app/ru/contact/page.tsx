import type { Metadata } from "next";
import ContactContent from "../../../components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Контакты ECITech: запишитесь на звонок",
  description:
    "Запишитесь на 30-минутный звонок или напишите нам. Отвечаем в течение 15 минут, ТЗ и цена — в течение недели.",
  alternates: { canonical: "https://ecitech.online/ru/contact" },
  openGraph: {
    title: "Контакты — ECITech",
    description: "Запишитесь на 30-минутный звонок или напишите нам. Отвечаем в течение 15 минут, ТЗ и цена — в течение недели.",
    url: "https://ecitech.online/ru/contact",
    locale: "ru_RU",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "Контакты — ECITech",
    description: "Запишитесь на 30-минутный звонок или напишите нам. Отвечаем в течение 15 минут, ТЗ и цена — в течение недели.",
    images: ["/img/og/default.png"],
  },
};

export default function RuContactPage() {
  return <ContactContent locale="ru" />;
}
