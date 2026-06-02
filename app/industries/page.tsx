import Image from "next/image";
import Header from "../../components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import IndustryCard from "../../components/industries/IndustryCard";
import BreadcrumbsLd from "../../components/seo/BreadcrumbsLd";
import { industries } from "../config/industries";
import { styles } from "../constants/styles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | ECITech",
  description:
    "We create industry-specific software for fintech, logistics, healthcare, education, and other growing sectors.",
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
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "Industries We Serve - ECITech",
      },
    ],
  },
  twitter: {
    title: "Industries We Serve | ECITech",
    description:
      "Explore how ECITech helps fintech, logistics, healthcare and more with custom software solutions.",
    images: ["/img/og/default.png"],
  },
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
        ]}
      />
      <Header />
      <main className="max-w-[1200px] mx-auto lg:px-4">
        <div className="absolute overflow-hidden lg:overflow-visible w-screen lg:max-w-[1128px] pointer-events-none">
          <Image
            src="/img/3d.svg"
            width={2000}
            height={2000}
            // SVG — unoptimized intentional
            unoptimized
            loading="lazy"
            alt=""
            aria-hidden="true"
            className="relative rotate-[150deg] max-w-[900px] left-[4%] md:max-w-[1200px] md:left-[0%] lg:left-[-3%] lg:max-w-[1600px]
                       -z-10 opacity-60 md:-top-4 lg:-top-4"
          />
        </div>

        <section className={`${styles.section}`}>
          <h1
            className={`${styles.lgh1} text-4xl md:text-5xl font-bold text-white leading-tight`}
          >
            Industries we serve
          </h1>
          <p
            className={`${styles.lgp} mt-6 text-base md:text-lg text-gray-300 max-w-2xl`}
          >
            We focus on sectors where software has to be fast, compliant, and
            measurably better than what came before. Pick an industry to see how
            we approach it and the kinds of products we build.
          </p>
        </section>

        <section className={`${styles.section}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </section>
      </main>

      <div className="px-8 lg:px-0 mt-20 mb-20">
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}
