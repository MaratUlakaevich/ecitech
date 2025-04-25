import Image from "next/image";
import Header from "../../components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — ECITech Portfolio",
  description:
    "Browse our portfolio of web and mobile solutions — real projects for real businesses across multiple industries.",
  keywords: [
    "ECITech portfolio",
    "case studies",
    "software project examples",
    "custom development projects",
    "web app examples",
    "mobile app portfolio",
    "startup case studies",
    "AI solution portfolio",
  ],  
  openGraph: {
    title: "Explore Our Software Projects",
    description: "Real case studies of how we helped businesses grow with technology.",
    url: "https://ecitech.online/portfolio",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "ECITech Portfolio",
      },
    ],
  },
  twitter: {
    title: "ECITech Portfolio",
    description: "From concept to launch — we deliver digital products that scale.",
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
