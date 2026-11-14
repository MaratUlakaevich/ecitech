import type { Metadata } from "next";
import ContactContent from "../../components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact ECITech: book an intro call",
  description:
    "Book a 30-minute intro call or write to the studio. We reply within 15 minutes, scope on the call, and quote within a week.",
  keywords: [
    "contact ECITech",
    "begin a project",
    "AI workflow consultation",
    "boutique digital studio contact",
  ],
  openGraph: {
    title: "Contact ECITech",
    description: "Book a 30-minute intro call. We reply within 15 minutes.",
    url: "https://ecitech.online/contact",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "Contact ECITech",
      },
    ],
  },
  twitter: {
    title: "Contact ECITech",
    description: "Book a 30-minute intro call. Reply within 15 minutes.",
    images: ["/img/og/default.png"],
  },
};

export default function ContactPage() {
  return <ContactContent locale="en" />;
}
