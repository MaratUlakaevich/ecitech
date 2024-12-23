'use client'

import Head from "next/head"
import Navbar from "./components/Navbar";
import Image from "next/image";
import headImg from "../public/img/3d.svg";
import ScrollButton from "./components/ScrollButton";
import Slider from "./components/Slider";
import CaseSection from "./components/CaseSection";
import { styles } from "./constants/styles";
import { useEffect, useRef } from 'react';
import { clientImages } from "./config/images";
import up from "../public/img/up.svg";
// make in opposit appear when scrolling up and hide when scrolling down. AI!
export default function Home() {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const maxTranslateY = -120;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const headerElement = headerRef.current;

      if (!headerElement) return;

      const deltaY = currentScrollPos - prevScrollPos;
      const newTranslateY = Math.max(maxTranslateY, Math.min(0, parseFloat(headerElement.style.transform.split('(')[1] || '0') + deltaY));

      headerElement.style.transform = `translateY(${newTranslateY}px)`;
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <header
          ref={headerRef}
          className="sticky top-0 z-10 lg:mx-8 pt-10 flex lg:bg-transparent transition-transform duration-200 ease-in-out"
        >
          <Navbar />
        </header>

        <div className="absolute overflow-hidden lg:overflow-visible w-screen lg:max-w-[1128px]">
          <Image src={headImg} 
                 priority={true}
                 loading="eager"
                 alt="ECITech Main 3d img" 
                 className="relative rotate-[6deg] max-w-[600px] left-[4%] md:max-w-[800px] md:left-[20%] lg:max-w-full 
                            lg:w-fit -z-10 md:-top-9 lg:-top-20 g:left-40"></Image>
        </div>
        <section className={`${styles.section}`}>
          <div className="m-auto mt-10 py-4 lg:mx-0 lg:mt-16 lg:p-0">
            <h1 className={`${styles.lgh1} 
                            md:text-6xl 
                            md:leading-snug 
                            md:w-[40rem] 
                            text-3xl 
                            leading-tight 
                            font-bold 
                            text-left 
                            text-white-500 
                            my-4`}>Unlocking Your Tech Potential</h1>
            <p className={`${styles.lgp} md:w-[44rem] text-lg font-medium text-left text-white-500 my-4`}>
              We create solutions that solve business problems, meet requirements, respond to market needs, and transform internal operations.
            </p>
          </div>
          <button className={`flex m-auto lg:mx-0 lg:mt-10 md:items-left md:m-0 text-white bg-blue-700 
                              hover:bg-blue-800 duration-300 focus:outline-none font-medium rounded-full 
                              text-xl px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}>
            Connect with us
          </button>
          <div className=" mx-8 mt-10 lg:mx-0 lg:mt-10">
            <h4 className="text-slate-400">Our Clients</h4>
            <h3>We've Worked with</h3>
          </div>
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
