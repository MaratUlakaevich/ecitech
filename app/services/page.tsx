import Head from "next/head"
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>ECITech</title>
        <meta name="description" content="" />
        <link rel="icon" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <header className="lg:mx-8 pt-10 flex">
          <Navbar></Navbar>
        </header>

      </main>
    </>
  );
}