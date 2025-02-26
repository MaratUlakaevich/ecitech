import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactFormFull";
import ConnectWithTeam from "../../components/ConnectSection";

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
      <main className="container mx-auto px-4">
        <ContactForm />

        <ConnectWithTeam />
      </main>
      <Footer/>
    </>
  );
}
