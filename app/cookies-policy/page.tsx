import type { Metadata } from "next";
import MastheadHeader from "../../components/MastheadHeader";
import EditorialFooter from "../../components/EditorialFooter";
import Link from "next/link";
import PoliciesButtons from "../../components/PoliciesButtons";

export const metadata: Metadata = {
  title: "Cookies Policy — ECITech",
  description:
    "Learn about the cookies policy of ECITech and how we use cookies on our website.",
};

export default function CookiesPolicy() {
  return (
    <>
      <MastheadHeader />
      <main id="main" className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-12 lg:py-20">
        <div className="gap-8">
          <PoliciesButtons />
          {/* Основной контент */}
          <div className="max-w-reading">
            <h1 className="display text-[40px] md:text-[64px] leading-[1] mb-8 text-ink-900">
              Cookies Policy
            </h1>

            <section id="introduction" className="mb-8">
              <h2 className="display text-[26px] md:text-[30px] leading-[1.15] text-ink-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-ink-700 leading-[1.65] mb-2">
                1.1 Era Cloud of Information Technologies&apos;s website uses
                cookies.
              </p>
              <p className="text-ink-700 leading-[1.65]">
                1.2 Analytics and advertising cookies are set only after you press
                &ldquo;Accept&rdquo; in the cookie banner. If you press
                &ldquo;Decline&rdquo;, no analytics or advertising scripts load and the site
                works in full. You can change or withdraw your choice at any
                time with &ldquo;Cookie settings&rdquo; at the bottom of every
                page. The site also keeps a record of your choice in your
                browser&apos;s local storage, which contains no personal data.
              </p>
            </section>

            <section id="about-cookies" className="mb-8">
              <h2 className="display text-[26px] md:text-[30px] leading-[1.15] text-ink-900 mb-4">
                2. About Cookies
              </h2>
              <p className="text-ink-700 leading-[1.65] mb-2">
                2.1 A cookie is a file containing an identifier (a string of
                letters and numbers) sent by a web server to a web browser and
                stored by the browser. The identifier is then sent back to the
                server each time the browser requests a page.
              </p>
              <p className="text-ink-700 leading-[1.65] mb-2">
                2.2 Cookies may be either &quot;persistent&quot; or &quot;session&quot; cookies. A
                persistent cookie will be stored by a browser and remain valid
                until its expiry date (unless deleted earlier), while a session
                cookie expires at the end of the session when the browser is
                closed.
              </p>
              <p className="text-ink-700 leading-[1.65] mb-2">
                2.3 Cookies do not typically contain any information that
                personally identifies you, although personal information we
                store may be linked to cookie data.
              </p>
              <p className="text-ink-700 leading-[1.65]">
                2.4 Cookies can be used by web servers to identify and track
                users as they navigate through different pages and recognize
                returning visitors.
              </p>
            </section>

            <section id="our-cookies" className="mb-8">
              <h2 className="display text-[26px] md:text-[30px] leading-[1.15] text-ink-900 mb-4">
                3. Our Cookies
              </h2>
              <p className="text-ink-700 leading-[1.65] mb-2">
                3.1 We use both session and persistent cookies on our website.
              </p>
              <p className="text-ink-700 leading-[1.65]">
                3.2 For example, we use the cookie named 
                <strong> jv_client_id</strong> to recognize a computer when a
                user visits our website, track navigation, and improve
                usability.
              </p>
            </section>

            <section id="analytics-cookies" className="mb-8">
              <h2 className="display text-[26px] md:text-[30px] leading-[1.15] text-ink-900 mb-4">
                4. Analytics and Advertising Cookies
              </h2>
              <p className="text-ink-700 leading-[1.65] mb-2">
                4.1 With your consent we use Google Analytics to see how the
                website is used, and Google Ads to measure whether our ads lead
                to enquiries and to show our ads to people who visited the site.
                Both are loaded through Google Tag Manager, only after you press
                &ldquo;Accept&rdquo;.
              </p>
              <p className="text-ink-700 leading-[1.65] mb-2">
                4.2 These services collect pages viewed, the referring page,
                approximate location from your IP address, device and browser
                data, and actions such as sending the contact form, booking a
                call or clicking our email or Telegram link.
              </p>
              <p className="text-ink-700 leading-[1.65] mb-2">
                4.3 The cookies used include: <strong>_ga</strong> and{" "}
                <strong>_ga_*</strong> (Google Analytics, up to 2 years),{" "}
                <strong>_gcl_au</strong> and <strong>_gcl_aw</strong> (Google
                Ads, up to 90 days).
              </p>
              <p className="text-ink-700 leading-[1.65] mb-2">
                4.4 Analytics data is kept for 14 months. We do not sell it and
                do not use it to make automated decisions about you.
              </p>
              <p className="text-ink-700 leading-[1.65]">
                4.5 Google&apos;s privacy policy is available at:{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  className="text-ink-900 underline underline-offset-4 hover:text-copper-ink"
                >
                  https://policies.google.com/privacy
                </Link>
                . How Google uses data from sites that use its services:{" "}
                <Link
                  href="https://policies.google.com/technologies/partner-sites"
                  className="text-ink-900 underline underline-offset-4 hover:text-copper-ink"
                >
                  policies.google.com/technologies/partner-sites
                </Link>
                .
              </p>
            </section>

            <section id="blocking-cookies" className="mb-8">
              <h2 className="display text-[26px] md:text-[30px] leading-[1.15] text-ink-900 mb-4">
                5. Blocking Cookies
              </h2>
              <p className="text-ink-700 leading-[1.65] mb-2">
                5.1 Most browsers allow you to refuse cookies. For example:
              </p>
              <p>
                (a) In Internet Explorer (v11), block cookies via &quot;Tools&quot; →
                &quot;Internet Options&quot; → &quot;Privacy&quot; → &quot;Advanced&quot;.
              </p>
              <p>
                (b) In Firefox (v44), block all cookies by selecting &quot;Use custom
                settings for history&quot; in &quot;Tools&quot; → &quot;Options&quot; → &quot;Privacy&quot;, and
                unchecking &quot;Accept cookies from sites&quot;.
              </p>
              <p>
                (c) In Chrome (v48), block cookies by accessing the &quot;Customize
                and control&quot; menu, then &quot;Settings&quot; → &quot;Show advanced settings&quot; →
                &quot;Content settings&quot;, and selecting &quot;Block sites from setting any
                data&quot; under &quot;Cookies&quot;.
              </p>

              <p className="text-ink-700 leading-[1.65] mb-2">
                5.2 We will ask for your consent to use cookies when you first
                visit our website.
              </p>
              <p className="text-ink-700 leading-[1.65]">
                5.3 Blocking cookies may restrict some features of our website.
              </p>
            </section>

            <section id="deleting-cookies" className="mb-8">
              <h2 className="display text-[26px] md:text-[30px] leading-[1.15] text-ink-900 mb-4">
                6. Deleting Cookies
              </h2>
              <p className="text-ink-700 leading-[1.65] mb-2">
                6.1 You can delete cookies stored on your computer. For example:
              </p>
              <p>
                (a) In Internet Explorer (v11), you must manually delete cookie
                files. Instructions are available at{" "}
                <Link
                  href="http://windows.microsoft.com/en-gb/internet-explorer/delete-manage-cookies#ie=ie-11"
                  className="text-ink-900 underline underline-offset-4 hover:text-copper-ink"
                >
                  Microsoft’s website
                </Link>
                .
              </p>
              <p>
                (b) In Firefox (v44), delete cookies by selecting &quot;Use custom
                settings for history&quot; in &quot;Tools&quot; → &quot;Options&quot; → &quot;Privacy&quot;,
                clicking &quot;Show Cookies&quot;, and then &quot;Remove All Cookies&quot;.
              </p>
              <p>
                (c) In Chrome (v48), delete cookies by accessing the &quot;Customize
                and control&quot; menu, then &quot;Settings&quot; → &quot;Show advanced settings&quot; →
                &quot;Clear browsing data&quot;, selecting &quot;Cookies and other site data&quot;,
                and clicking &quot;Clear browsing data&quot;.
              </p>

              <p className="text-ink-700 leading-[1.65]">
                6.2 Please note that deleting cookies may negatively impact the
                usability of many websites.
              </p>
            </section>

            <section id="our-details" className="mb-8">
              <h2 className="display text-[26px] md:text-[30px] leading-[1.15] text-ink-900 mb-4">
                7. Our Details
              </h2>
              <p className="text-ink-700 leading-[1.65] mb-2">
                You can contact us using the following methods:
              </p>
              <ul className="list-disc list-inside text-ink-700 leading-[1.65]">
                <li>Using our website contact form.</li>
                <li>
                  By telephone, on the contact number published on our website
                  from 10 AM to 8 PM.
                </li>
                <li>
                  By email, using the email address provided on our website.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <EditorialFooter />
    </>
  );
}
