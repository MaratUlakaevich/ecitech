import type { Metadata } from "next";
import AboutContent from "../../../components/pages/AboutContent";

export const metadata: Metadata = {
  title: "Студия ECITech",
  description:
    "ECITech — независимая цифровая студия Марата Улакаева. Сайты, автоматизация и ИИ-интеграция для среднего бизнеса.",
  alternates: { canonical: "https://ecitech.online/ru/about" },
  openGraph: {
    title: "Студия — ECITech",
    description: "ECITech — независимая цифровая студия Марата Улакаева. Сайты, автоматизация и ИИ-интеграция для среднего бизнеса.",
    url: "https://ecitech.online/ru/about",
    locale: "ru_RU",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "Студия — ECITech",
    description: "ECITech — независимая цифровая студия Марата Улакаева. Сайты, автоматизация и ИИ-интеграция для среднего бизнеса.",
    images: ["/img/og/default.png"],
  },
};

export default function RuAboutPage() {
  return <AboutContent locale="ru" />;
}
