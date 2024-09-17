import Head from "next/head"
import Navbar from "./components/Navbar";
import Image from "next/image";
import headImg from "../public/img/3d.svg";


export default function Home() {
  const lgh1 = "lg:text-7xl lg:px-0 lg:mx-0 lg:w-[40rem] lg:leading-snug";
  const lgp = "lg:text-xl lg:px-0 lg:mx-0 lg:w-[40rem] lg:my-6";
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
          <Image src={headImg} alt="ECITech Main 3d img" className="relative rotate-[6deg] max-w-[600px] left-[6%] md:max-w-[800px] md:left-[5%] lg:max-w-full lg:w-fit -z-10 md:-top-9 lg:-top-20 lg:left-40"></Image>
        </div>
        <section className="relative px-8 bg-auto bg-no-repeat bg-center">
          <div className="m-auto mt-10 py-4 lg:mx-0 lg:mt-24 lg:p-0">
            <h1 className={`${lgh1} md:text-6xl md:leading-snug md:w-[40rem] text-3xl leading-tight font-bold text-left text-white-500 my-4`}>Unlocking Your Tech Potential</h1>
            <p className={`${lgp} md:w-[44rem] text-lg font-medium text-left text-white-500 my-4`}>We create solutions that solve business problems, meet requirements, respond to market needs, and transform internal operations.</p>
          </div>
          <button className={`flex m-auto lg:mx-0 lg:mt-20 md:items-left md:m-0 text-white bg-blue-700 hover:bg-blue-800 duration-300 focus:outline-none font-medium rounded-full text-xl px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}>Connect with us</button>
        </section>
      </main>
    </>
  );
}
