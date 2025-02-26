import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import PoliciesButtons from "../../components/PoliciesButtons";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - ECITech</title>
        <meta
          name="description"
          content="Read the Privacy Policy of ECITech to learn how we handle your personal data."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto p-8 my-10">
        <PoliciesButtons />
        <h1 className="text-3xl md:text-6xl font-bold mb-6 text-gray-100">
          Privacy Policy
        </h1>
        <h2 className="text-base md:text-lg font-medium mb-8 w-full lg:w-[50rem]">
          We respect your personal data. That’s why we’ve created a
          straightforward Privacy Policy explaining what information we collect
          when you visit cleveroad.com or communicate with us by any means
          (including email, phone, messengers, and more). The Privacy Policy
          reveals how you control the collected information, how we use this
          data, and how to contact us. It also describes what measures we take
          to protect your data like the rules requested by General Data
          Protection Regulation (GDPR).
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Основное содержимое */}
          <div className="md:col-span-2">
            <section id="contact-details" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                Contact details
              </h2>
              <p className="text-gray-200">
                If you have any questions about the privacy policy, feel free to
                contact us. We’ll get back to you in 24 hours.
              </p>
              <br />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Offices
              </h3>
              <Link href="#" className="text-sm">
                +971 56 658 5789
              </Link>
              <p className="text-sm mb-2">Saudi Arabia, Ar-Riyadh</p>
              <Link href="tel:+7 909 997 16 33" className="text-sm mt-2">
                +7 909 997 16 33
              </Link>
              <p className="text-sm">Russia, Moscow</p>
              <h3 className="text-xl font-semibold text-gray-100 mb-2 mt-4">
                Emails
              </h3>

              <Link
                href="mailto:ulakaev@ecitech.online"
                className="text-sm text-white"
              >
                ulakaev@ecitech.online
              </Link>
            </section>
            <section id="who-are-we" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                Who are we?
              </h2>
              <p className="text-gray-200">
                Era Cloud of Information Technologies Org. is a Saudi-Arabia
                registered software development company with R&D offices in
                Russia.
              </p>
              <br />
              <p className="text-gray-200">Here’s how you can contact us:</p>
              <div className="mt-2">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Using the
                  <Link href="/contact"> contact form </Link>
                  on our website
                </p>
              </div>
              <div className="mt-2">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Calling the contact number published on our website from 9 AM
                  to 9 PM
                </p>
              </div>
              <div className="mt-2">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Writing to the email address published on our website
                </p>
              </div>
            </section>
            <section id="why-collect" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                Why do we collect personal information?
              </h2>
              <p className="text-gray-200">
                Era Cloud of Information Technologies collects personal
                information to enhance our services, deliver personalized
                experiences, and build strong client relationships. Whether you
                contact us, subscribe to our updates, or request additional
                information, your data helps us tailor our offerings to your
                needs.
              </p>
            </section>
            <section id="what-personal-information" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                What personal information do we collect?
              </h2>
              <p className="text-gray-200 mb-4">
                We may collect, store, and use the following personal
                information:
              </p>
              <div className="text-gray-200">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Information you provide on our website, such as your name,
                  email address, company name, job title, and country.
                </p>
              </div>
              <div className="text-gray-200">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Technical data such as IP address, geographical location,
                  browser type and version, operating system, referral source,
                  length of visit, page views, and navigation paths.
                </p>
              </div>
              <div className="text-gray-200">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Data you provide when subscribing to our email notifications
                  or newsletters.
                </p>
              </div>
              <div className="text-gray-200">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Information you provide when applying for a job or contacting
                  us for business inquiries.
                </p>
              </div>
            </section>
            <section id="how-use" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                How do we use the collected information?
              </h2>
              <p className="text-gray-200">We use your information to:</p>
              <div className="text-gray-200 mt-2">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Personalize our website and services for you.
                </p>
              </div>
              <div className="text-gray-200">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Administer our business operations.
                </p>
              </div>
              <div className="text-gray-200">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Send you transactional communications such as invoices or
                  payment reminders.
                </p>
              </div>
              <div className="text-gray-200">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Respond to your inquiries and provide customer support.
                </p>
              </div>
              <div className="text-gray-200">
                <p className="relative before:inherit before:bg-white before:rounded-xl before:h-[.5rem] before:left-0 before:top-[.5rem] before:min-w-[.5rem] before:absolute before:w-[.5rem] pl-4 ">
                  Send you newsletters and marketing communications (which you
                  can unsubscribe from at any time).
                </p>
              </div>
            </section>
            <section id="access-to-information" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                Who has access to your personal information?
              </h2>
              <p className="text-gray-200">
                Access to your personal data is limited to authorized employees,
                our trusted partners, and third-party vendors who assist us in
                delivering our services. We may also disclose your information
                if required by law or in connection with legal proceedings.
              </p>
            </section>
            <section id="storage" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                How do we store personal information?
              </h2>
              <p className="text-gray-200">
                We store your personal information securely on our servers using
                industry-standard security measures. We retain your data only as
                long as necessary for our business purposes or as required by
                law.
              </p>
            </section>
            <section id="security" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                Is your personal information secured?
              </h2>
              <p className="text-gray-200">
                We implement robust security protocols—including encryption,
                firewalls, and access controls—to protect your personal data
                from unauthorized access or disclosure.
              </p>
            </section>
            <section id="your-rights" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                What are your rights?
              </h2>
              <p className="text-gray-200">
                You have the right to access, update, or request the deletion of
                your personal data. You may also restrict or object to the
                processing of your information. To exercise these rights, please
                contact us.
              </p>
            </section>
            <section id="policy-updates" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                Do we update this Privacy Policy?
              </h2>
              <p className="text-gray-200">
                We periodically update our Privacy Policy to reflect changes in
                our practices or legal requirements. The updated policy will be
                posted on this page, and you may be notified of significant
                changes.
              </p>
            </section>
            <section id="cookies" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                What about cookies?
              </h2>
              <p className="text-gray-200 mb-4">
                Our website uses cookies to enhance your browsing experience,
                analyze site usage, and assist in our marketing efforts. You can
                manage your cookie preferences through your browser settings.
              </p>
              <Link href="/cookies-policy" className="text-sm underline">
                Read more
              </Link>
            </section>
            <Link
              href="/contact"
              className="text-base text-blue-500  hover:text-blue-700 font-bold"
            >
              Contact us
            </Link>
          </div>
          {/* Оглавление */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-4">
              <h3 className="text-xl font-semibold mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#contact-details"
                    className="text-blue-600 hover:underline"
                  >
                    Contact details
                  </a>
                </li>
                <li>
                  <a
                    href="#who-are-we"
                    className="text-blue-600 hover:underline"
                  >
                    Who are we?
                  </a>
                </li>
                <li>
                  <a
                    href="#why-do-we-collect"
                    className="text-blue-600 hover:underline"
                  >
                    Why do we collect personal information?
                  </a>
                </li>
                <li>
                  <a
                    href="#what-personal-information"
                    className="text-blue-600 hover:underline"
                  >
                    What personal information do we collect?
                  </a>
                </li>
                <li>
                  <a
                    href="#how-do-we-use"
                    className="text-blue-600 hover:underline"
                  >
                    How do we use the collected information?
                  </a>
                </li>
                <li>
                  <a
                    href="#who-has-access"
                    className="text-blue-600 hover:underline"
                  >
                    Who has access to your personal information?
                  </a>
                </li>
                <li>
                  <a
                    href="#how-do-we-store"
                    className="text-blue-600 hover:underline"
                  >
                    How do we store personal information?
                  </a>
                </li>
                <li>
                  <a
                    href="#is-secured"
                    className="text-blue-600 hover:underline"
                  >
                    Is your personal information secured?
                  </a>
                </li>
                <li>
                  <a
                    href="#what-are-your-rights"
                    className="text-blue-600 hover:underline"
                  >
                    What are your rights?
                  </a>
                </li>
                <li>
                  <a
                    href="#do-we-update"
                    className="text-blue-600 hover:underline"
                  >
                    Do we update this Privacy Policy?
                  </a>
                </li>
                <li>
                  <a
                    href="#what-about-cookies"
                    className="text-blue-600 hover:underline"
                  >
                    What about cookies?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
