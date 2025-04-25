import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactFormFull";
import ConnectWithTeam from "../../components/ConnectSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ECITech — Let’s Build Together",
  description:
    "Ready to build your next product? Contact ECITech to discuss your idea and get a free project consultation.",
  keywords: [
    "contact ECITech",
    "hire developers",
    "get a quote software",
    "software consultation",
    "request a proposal",
    "reach out ECITech",
    "software development contact",
  ],
  openGraph: {
    title: "Contact ECITech",
    description: "Have a project in mind? We're ready to help.",
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
    description: "Let’s turn your idea into a working product.",
    images: ["/img/og/default.png"],
  },
};


export default function Home() {
  return (
    <>

      <Header />
      <main className="container mx-auto px-4">
        <ContactForm />

        <ConnectWithTeam />
      </main>
      <Footer/>
    </>
  );
}
