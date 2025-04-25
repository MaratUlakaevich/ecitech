import Image from "next/image";
import Header from "../../components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | ECITech",
  description:
    "Discover the industries ECITech empowers through tailored web, mobile, and AI development — from fintech to healthcare and logistics.",
  keywords: [
    "industries we serve",
    "software development industries",
    "ECITech industries",
    "custom solutions",
    "fintech software",
    "healthcare development",
    "logistics platforms",
  ],
  openGraph: {
    title: "Industries We Serve | ECITech",
    description:
      "We build powerful digital solutions across multiple industries — fintech, healthcare, logistics, education and more.",
    url: "https://ecitech.online/industries",
    siteName: "ECITech",
    type: "website",
    images: [
      {
        url: "/img/og/default.png", // Замени на актуальный путь
        width: 1200,
        height: 630,
        alt: "Industries We Serve - ECITech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | ECITech",
    description:
      "Explore how ECITech helps fintech, logistics, healthcare and more with custom software solutions.",
    images: ["/img/og/default.png"],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto lg:px-4">
        <div className="absolute overflow-hidden lg:overflow-visible w-screen lg:max-w-[1128px]">
          <Image
            src="img/3d.svg"
            width={2000}
            height={2000}
            unoptimized
            loading="lazy"
            alt="ECITech Main 3d img"
            className="relative rotate-[150deg] max-w-[900px] left-[4%] md:max-w-[1200px] left-[0%] lg:left-[-3%] lg:max-w-[1600px]
                       -z-10 md:-top-4 lg:-top-4"
          ></Image>
        </div>
      </main>
      <div className="px-8 lg:px-0 mt-20 mb-20">
        <ContactForm />
      </div>

      
      <Footer />
    </>
  );
}
