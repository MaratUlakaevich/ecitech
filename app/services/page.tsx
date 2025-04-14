import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import ServicesHero from "../../components/ServicesHero";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import FaqSection from "../../components/FaqSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>ECITech</title>
        <meta name="description" content="" />
        <link rel="icon" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
