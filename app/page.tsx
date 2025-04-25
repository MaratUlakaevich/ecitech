import Header from "../components/Header";
import Image from "next/image";
import headImg from "../public/img/3d.svg";
import ScrollButton from "../components/UI/ScrollButton";
import Slider from "../components/Slider";
import HeroSection from "../components/HeroSection";
import CaseSection from "../components/CaseSection";
import IndustrySection from "../components/IndustrySection";
import { styles } from "./constants/styles";
import { clientImages } from "./config/images";
import StackSection from "../components/StackSection";
import Footer from "../components/Footer";
import CompanySection from "../components/CompanySection";
import ContactForm from "../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECITech — Programming The Future of Your Business",
  description:
    "We design and build custom web and mobile applications tailored to your business. From idea to scalable product — with strong UI, clean code, and full-cycle development.",
  keywords: [
    "ECITech",
    "custom software development",
    "web development",
    "mobile development",
    "AI development",
    "startup software",
    "DevOps services",
    "UI UX design",
    "outsourcing development",
    "software agency",
    "software engineers",
    "digital product development",
    "MVP development",
    "B2B software solutions",
  ],
  metadataBase: new URL("https://ecitech.online"),
  openGraph: {
    title: "ECITech — Programming The Future of Your Business",
    description:
      "Custom software development company. We build smart, scalable and user-friendly solutions for web and mobile.",
    url: "https://ecitech.online",
    siteName: "ECITech",
    images: [
      {
        url: "/img/og/default.png", // желательно заменить на баннер
        width: 1200,
        height: 630,
        alt: "ECITech OpenGraph Image",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECITech — Programming The Future of Your Business",
    description:
      "We help companies bring their digital ideas to life — from web/mobile apps to AI-powered platforms.",
    images: ["/img/og/default.png"],
    creator: "@ecitech", // если есть, можно добавить
  },
  icons: {
    icon: "/img/favicon.ico",
    apple: "/img/apple-touch-icon.png",
    shortcut: "/img/favicon.ico",
  },
};

export default function Home() {
  return (
    <>

      <Header />

      <main className="max-w-[1200px] mx-auto lg:px-4">
        <div className="absolute overflow-hidden lg:overflow-visible w-screen lg:max-w-[1128px]">
          <Image
            src={headImg}
            priority={true}
            unoptimized
            loading="eager"
            alt="ECITech Main 3d img"
            className="relative rotate-[6deg] max-w-[600px] left-[4%] md:max-w-[800px] md:left-[20%] lg:max-w-full 
                            lg:w-fit -z-10 md:-top-9 lg:-top-20 g:left-40"
          ></Image>
        </div>
        <section className={`${styles.section}`}>
          <HeroSection></HeroSection>
          <Slider images={clientImages}></Slider>
        </section>
        <section className={`${styles.section}`}>
          <CaseSection></CaseSection>
        </section>
        <section className={`${styles.section}`}>
          <IndustrySection></IndustrySection>
        </section>
        <section className={`${styles.section}`}>
          <StackSection />
        </section>
        <section className={`${styles.section}`}>
          <CompanySection />
        </section>
      </main>
      <div className="px-8 lg:px-0 mt-20 mb-20">
        <ContactForm />
      </div>

      <Footer />
      <ScrollButton />
    </>
  );
}
