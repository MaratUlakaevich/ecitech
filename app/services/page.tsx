import Image from "next/image";
import Header from "../../components/Header";
import ServicesHero from "../../components/ServicesHero";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import FaqSection from "../../components/FaqSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Mobile Development Services — ECITech",
  description:
    "Explore our services — full-cycle web, mobile, DevOps, and UI/UX design tailored to help your business grow and scale.",
  keywords: [
    "custom software services",
    "web app development",
    "mobile app development",
    "DevOps services",
    "UI UX design",
    "software architecture",
    "cross-platform development",
    "backend development",
    "frontend development",
    "ECITech services",
  ],
  
  openGraph: {
    title: "Custom Software Development Services",
    description: "From idea to deployment — we craft software that scales.",
    url: "https://ecitech.online/services",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "Our Services",
      },
    ],
  },
  twitter: {
    title: "Software Development Services by ECITech",
    description: "We design, build, and maintain digital products that deliver results.",
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
        <ServicesHero />
        <FaqSection />
      </main>
      <div className="px-8 lg:px-0 mt-20 mb-20">
        <ContactForm />
      </div>

      
      <Footer />
    </>
  );
}
