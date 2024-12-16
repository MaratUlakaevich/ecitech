import Head from "next/head"
import Navbar from "./components/Navbar";
import Image from "next/image";
import headImg from "../public/img/3d.svg";
import ScrollButton from "./components/ScrollButton";
import Slider from "./components/Slider";
import CaseSection from "./components/CaseSection";
import up from "../public/img/up.svg";


export default function Home() {
  const lgh1 = "lg:text-7xl lg:px-0 lg:mx-0 lg:w-[40rem] lg:leading-snug";
  const lgp = "lg:text-xl lg:px-0 lg:mx-0 lg:w-[40rem] lg:my-6";
  const lgh2 = "lg:text-4xl lg:px-0 lg:mx-0 lg:w-[40rem]";
  const section = "relative px-8 lg:px-0 bg-auto bg-no-repeat bg-center"

  const images = [
    "/img/peopleAI.svg",
    "/img/ecosyst.svg",
    "/img/wardiere.svg",
    "/img/uipath.svg",
    "/img/walletconnect.svg",
    "/img/salford.svg",
  ];

  return (
    <>
      <Head>
        <title>ECITech</title>
        <meta name="description" content="" />
        <link rel="icon" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <header className="lg:mx-8 pt-10 flex lg:bg-transparent">
          <Navbar></Navbar>
        </header>

        <div className="absolute overflow-hidden lg:overflow-visible w-screen lg:max-w-[1128px]">
          <Image src={headImg} 
                 alt="ECITech Main 3d img" 
                 className="relative rotate-[6deg] max-w-[600px] left-[4%] md:max-w-[800px] md:left-[20%] lg:max-w-full 
                            lg:w-fit -z-10 md:-top-9 lg:-top-20 g:left-40"></Image>
        </div>
        <section className={`${section}`}>
          <div className="m-auto mt-10 py-4 lg:mx-0 lg:mt-16 lg:p-0">
            <h1 className={`${lgh1} 
                            md:text-6xl 
                            md:leading-snug 
                            md:w-[40rem] 
                            text-3xl 
                            leading-tight 
                            font-bold 
                            text-left 
                            text-white-500 
                            my-4`}>Unlocking Your Tech Potential</h1>
            <p className={`${lgp} md:w-[44rem] text-lg font-medium text-left text-white-500 my-4`}>
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
          <Slider images={images}></Slider>
        </section>
        <section className={`${section}`}>
          <CaseSection></CaseSection>
        </section>
        <section className={`${section} h-[500px]`}>
          <h1 className={`${lgh2}
                            mt-10 
                            text-2xl
                            font-bold`}>Case Studies</h1>
        </section>
      </main>
      
      <ScrollButton></ScrollButton>
    </>
  );
}
