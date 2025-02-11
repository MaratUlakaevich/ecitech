import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import PoliciesButtons from "../components/PoliciesButtons";

export default function CookiesPolicy() {
  return (
    <>
      <Head>
        <title>Cookies Policy - ECITech</title>
        <meta
          name="description"
          content="Learn about the cookies policy of ECITech and how we use cookies on our website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto p-8 my-10">
        <div className="gap-8">
          <PoliciesButtons />
          {/* Основной контент */}
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-100">
              Cookies Policy
            </h1>

            <section id="introduction" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-200 mb-2">
                1.1 Era Cloud of Information Technologies&apos;s website uses cookies.
              </p>
              <p className="text-gray-200">
                1.2 We will ask you to consent to our use of cookies in accordance
                with the terms of this policy when you first visit our website.
              </p>
            </section>

            <section id="about-cookies" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                2. About Cookies
              </h2>
              <p className="text-gray-200 mb-2">
                2.1 A cookie is a file containing an identifier (a string of letters
                and numbers) sent by a web server to a web browser and stored by the
                browser. The identifier is then sent back to the server each time the
                browser requests a page.
              </p>
              <p className="text-gray-200 mb-2">
                2.2 Cookies may be either "persistent" or "session" cookies. A
                persistent cookie will be stored by a browser and remain valid until
                its expiry date (unless deleted earlier), while a session cookie
                expires at the end of the session when the browser is closed.
              </p>
              <p className="text-gray-200 mb-2">
                2.3 Cookies do not typically contain any information that personally
                identifies you, although personal information we store may be linked to
                cookie data.
              </p>
              <p className="text-gray-200">
                2.4 Cookies can be used by web servers to identify and track users as
                they navigate through different pages and recognize returning visitors.
              </p>
            </section>

            <section id="our-cookies" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                3. Our Cookies
              </h2>
              <p className="text-gray-200 mb-2">
                3.1 We use both session and persistent cookies on our website.
              </p>
              <p className="text-gray-200">
                3.2 For example, we use the cookie named <strong>jv_client_id</strong>{" "}
                to recognize a computer when a user visits our website, track navigation,
                and improve usability.
              </p>
            </section>

            <section id="analytics-cookies" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                4. Analytics Cookies
              </h2>
              <p className="text-gray-200 mb-2">
                4.1 We use Google Analytics to analyze how our website is used.
              </p>
              <p className="text-gray-200 mb-2">
                4.2 Our analytics service provider generates statistical and other
                information about website use via cookies.
              </p>
              <p className="text-gray-200 mb-2">
                4.3 The analytics cookies used include: <strong>_ga</strong>.
              </p>
              <p className="text-gray-200 mb-2">
                4.4 The generated data is used to create reports on website usage.
              </p>
              <p className="text-gray-200">
                4.5 Google&apos;s privacy policy is available at:{" "}
                <Link
                  href="http://www.google.com/policies/privacy/"
                  className="text-blue-600 hover:underline"
                >
                  http://www.google.com/policies/privacy/
                </Link>
              </p>
            </section>

            <section id="blocking-cookies" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                5. Blocking Cookies
              </h2>
              <p className="text-gray-200 mb-2">
                5.1 Most browsers allow you to refuse cookies. For example:
              </p>
              <p>
                (a) In Internet Explorer (v11), block cookies via "Tools" → "Internet Options" →
                "Privacy" → "Advanced".
              </p>
              <p>
                (b) In Firefox (v44), block all cookies by selecting "Use custom settings for
                history" in "Tools" → "Options" → "Privacy", and unchecking "Accept cookies from
                sites".
              </p>
              <p>
                (c) In Chrome (v48), block cookies by accessing the "Customize and control" menu,
                then "Settings" → "Show advanced settings" → "Content settings", and selecting
                "Block sites from setting any data" under "Cookies".
              </p>
              
              <p className="text-gray-200 mb-2">
                5.2 We will ask for your consent to use cookies when you first visit our website.
              </p>
              <p className="text-gray-200">
                5.3 Blocking cookies may restrict some features of our website.
              </p>
            </section>

            <section id="deleting-cookies" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                6. Deleting Cookies
              </h2>
              <p className="text-gray-200 mb-2">
                6.1 You can delete cookies stored on your computer. For example:
              </p>
              <p>
                (a) In Internet Explorer (v11), you must manually delete cookie files.
                Instructions are available at{" "}
                <Link
                  href="http://windows.microsoft.com/en-gb/internet-explorer/delete-manage-cookies#ie=ie-11"
                  className="text-blue-600 hover:underline"
                >
                  Microsoft’s website
                </Link>.
              </p>
              <p>
                (b) In Firefox (v44), delete cookies by selecting "Use custom settings for
                history" in "Tools" → "Options" → "Privacy", clicking "Show Cookies", and then
                "Remove All Cookies".
              </p>
              <p>
                (c) In Chrome (v48), delete cookies by accessing the "Customize and control" menu,
                then "Settings" → "Show advanced settings" → "Clear browsing data", selecting
                "Cookies and other site data", and clicking "Clear browsing data".
              </p>
              
              <p className="text-gray-200">
                6.2 Please note that deleting cookies may negatively impact the usability of many
                websites.
              </p>
            </section>

            <section id="our-details" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                7. Our Details
              </h2>
              <p className="text-gray-200 mb-2">
                You can contact us using the following methods:
              </p>
              <ul className="list-disc list-inside text-gray-200">
                <li>Using our website contact form.</li>
                <li>
                  By telephone, on the contact number published on our website from 10 AM to 8
                  PM.
                </li>
                <li>By email, using the email address provided on our website.</li>
              </ul>
            </section>
          </div>

          
        </div>
      </main>
      <Footer />
    </>
  );
}
