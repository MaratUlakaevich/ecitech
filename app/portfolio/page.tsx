import type { Metadata } from "next";
import PortfolioContent from "../../components/pages/PortfolioContent";

export const metadata: Metadata = {
  title: "Work: selected projects by ECITech",
  description:
    "Twelve production projects: floral boutique, perfume house, B2B ERP, medical practice, cultural space, DJ portfolio, construction firm, beachfront residences, marketing agency, design service, beverage producer, and strategy consulting.",
  keywords: [
    "ECITech portfolio",
    "Next.js projects",
    "boutique studio work",
    "studio portfolio",
    "construction website",
  ],
  openGraph: {
    title: "Work — ECITech",
    description: "Twelve production projects across very different worlds.",
    url: "https://ecitech.online/portfolio",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "ECITech selected work",
      },
    ],
  },
  twitter: {
    title: "Work — ECITech",
    description: "Twelve production projects built by our team.",
    images: ["/img/og/default.png"],
  },
};

export default function PortfolioPage() {
  return <PortfolioContent locale="en" />;
}
