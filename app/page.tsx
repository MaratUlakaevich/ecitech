//analize the code. AI!

import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import headImg from "../public/img/3d.svg";
import ScrollButton from "../components/ui/ScrollButton";
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

export default function Home() {
  return (
    <>
      <Head>

        <title>ECITech</title>
        <link rel="icon" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="ECITech - Unlocking Your Tech Potential"
        />
        <meta property="og:title" content="ECITech" />
        
        <meta
          property="og:description"
          content="We create solutions that solve business problems..."
        />
      </Head>

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
