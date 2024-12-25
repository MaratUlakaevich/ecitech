'use client'

import Head from "next/head"
import Header from "./components/Header";
import Image from "next/image";
import headImg from "../public/img/3d.svg";
import ScrollButton from "./components/UI/ScrollButton";
import Slider from "./components/Slider";
import HeroSection from "./components/HeroSection";
import CaseSection from "./components/CaseSection";
import { styles } from "./constants/styles";
import { clientImages } from "./config/images";

export default function Home() {

  return (
    <>
      <Head>
        <title>ECITech</title>
        <link rel="icon" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ECITech - Unlocking Your Tech Potential" />
        <meta property="og:title" content="ECITech" />
        <meta property="og:description" content="We create solutions that solve business problems..." />
      </Head>

      <main>
        <Header></Header>

        <div className="absolute overflow-hidden lg:overflow-visible w-screen lg:max-w-[1128px]">
          <Image src={headImg}
            priority={true}
            unoptimized
            loading="eager"
            alt="ECITech Main 3d img"
            className="relative rotate-[6deg] max-w-[600px] left-[4%] md:max-w-[800px] md:left-[20%] lg:max-w-full 
                            lg:w-fit -z-10 md:-top-9 lg:-top-20 g:left-40"></Image>
        </div>
        <section className={`${styles.section}`}>
          <HeroSection></HeroSection>
          <Slider images={clientImages}></Slider>
        </section>
        <section className={`${styles.section}`}>
          <CaseSection></CaseSection>
        </section>
        <section className={`${styles.section} h-[500px]`}>
          <h1 className={`${styles.lgh2} mt-10 text-2xl font-bold`}>Core industry expertise</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-3xl">
                <h2 className="text-lg font-semibold mb-2">Service Title</h2>
                <p className="text-gray-600">Service Description</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Learn More
                </button>
              </div>
            </div>
          </div>

        </section>
      </main>

      <ScrollButton></ScrollButton>
    </>
  );
}
