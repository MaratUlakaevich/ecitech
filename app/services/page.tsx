import Head from "next/head";
import Header from "../components/Header";
import ServicesHero from "../components/ServicesHero";

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
      <main>
        <ServicesHero />
      </main>
    </>
  );
}
