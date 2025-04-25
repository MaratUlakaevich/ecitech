
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ECITech — Your Technology Partner",
  description:
    "Learn more about ECITech — who we are, our values, and how we turn ideas into powerful digital solutions for modern businesses.",
  keywords: [
    "about ECITech",
    "software development company",
    "software engineers team",
    "ECITech team",
    "development agency",
    "IT experts",
    "software development values",
    "our mission",
  ],
  
  openGraph: {
    title: "About ECITech",
    description: "We're more than developers — we're your long-term tech partner.",
    url: "https://ecitech.online/about",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "About ECITech",
      },
    ],
  },
  twitter: {
    title: "About ECITech",
    description: "Meet your dedicated software development team.",
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
