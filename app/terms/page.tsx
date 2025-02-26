import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import PoliciesButtons from "../../components/PoliciesButtons";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - ECITech</title>
        <meta
          name="description"
          content="Read about the terms and conditions of ECITech"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto p-8 my-10">
        <div className="gap-8">
          <PoliciesButtons />
          {/* Основной контент */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-gray-100">
              Terms & Conditions
            </h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-200 mb-2">
                1.1 These terms and conditions govern your use of this website;
                by using this website, you accept these terms and conditions in
                full. If you disagree with these terms and conditions or any
                part of these terms and conditions, you must not use this
                website.
              </p>
              <p className="text-gray-200 mb-2">
                1.2 You must be at least 18 years of age to use this website. By
                using this website and by agreeing to these terms and
                conditions, you warrant and represent that you are at least 18
                years of age.
              </p>
              <p className="text-gray-200 mb-2">
                1.3 This website uses cookies. By using this website and
                agreeing to these terms and conditions, you consent to our
                ECITech&apos;s use of cookies in accordance with the terms of
                ECITech&apos;s cookies policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                2. License to use website
              </h2>
              <p className="text-gray-200 mb-2">
                2.1 Unless otherwise stated, ECITech and/or its licensors own
                the intellectual property rights in the website and material on
                the website. Subject to the license below, all these
                intellectual property rights are reserved.
              </p>
              <p className="text-gray-200 mb-2">
                2.2 You may view, download for caching purposes only, and print
                pages from the website for your own personal use, subject to the
                restrictions set out below and elsewhere in these terms and
                conditions.
              </p>
              <p className="text-gray-200 mb-2">
                2.3 This website uses cookies. By using this website and
                agreeing to these terms and conditions, you consent to our
                ECITech&apos;s use of cookies in accordance with the terms of
                ECITech&apos;s cookies policy.
              </p>
              <p className="text-gray-200 mb-2">2.4 You must not:</p>
              <ul className="list-disc list-inside text-gray-200 mb-2">
                <li>
                  republish material from this website (including republication
                  on another website) without active, dofollow link on this web
                  page of ECITech&apos;s website
                </li>
                <li>
                  sell, rent or sub-license material from the website without
                  active, dofollow link on this web page of ECITech&apos;s website
                </li>
                <li>
                  show any material from the website in public without active,
                  dofollow link on this web page of ECITech&apos;s website
                </li>
                <li>
                  reproduce, duplicate, copy or otherwise exploit material on
                  this website for a commercial purpose without active, dofollow
                  link on this web page of ECITech&apos;s website
                </li>
              </ul>
              <p className="text-gray-200 mb-2">
                2.5 Where content is specifically made available for
                redistribution, it may only be redistributed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                3. Acceptable use
              </h2>
              <p className="text-gray-200 mb-2">
                3.1 You must not use this website in any way that causes, or may
                cause, damage to the website or impairment of the availability
                or accessibility of the website; or in any way which is
                unlawful, illegal, fraudulent or harmful, or in connection with
                any unlawful, illegal, fraudulent or harmful purpose or
                activity.
              </p>
              <p className="text-gray-200 mb-2">
                3.2 You must not use this website to copy, store, host,
                transmit, send, use, publish or distribute any material which
                consists of (or is linked to) any spyware, computer virus,
                Trojan horse, worm, keystroke logger, rootkit, or other
                malicious computer software.
              </p>
              <p className="text-gray-200">
                3.3 You must not conduct any systematic or automated data
                collection activities (including without limitation scraping,
                data mining, data extraction, and data harvesting) on or in
                relation to this website without ECITech&apos;s express written
                consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                4. Restricted access
              </h2>
              <p className="text-gray-200 mb-2">
                4.1 Access to certain areas of this website is restricted.
                ECITech reserves the right to restrict access to other areas of
                this website, or indeed this entire website, at ECITech&apos;s
                discretion.
              </p>
              <p className="text-gray-200">
                4.2 If ECITech provides you with a user ID and password to
                enable you to access restricted areas of this website or other
                content or services, you must ensure that the user ID and
                password are kept confidential.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                5. User content
              </h2>
              <p className="text-gray-200 mb-2">
                5.1 In these terms and conditions, “your user content” means
                material (including without limitation text, images, audio
                material, video material and audio-visual material) that you
                submit to this website, for whatever purpose.
              </p>
              <p className="text-gray-200 mb-2">
                5.2 You grant to ECITech a worldwide, irrevocable,
                non-exclusive, royalty-free license to use, reproduce, adapt,
                publish, translate and distribute your user content in any
                existing or future media. You also grant to ECITech the right to
                sub-license these rights, and the right to bring an action for
                infringement of these rights.
              </p>
              <p className="text-gray-200 mb-2">
                5.3 Your user content must not be illegal or unlawful, must not
                infringe any third-party&apos;s legal rights, and must not be capable
                of giving rise to legal action whether against you or ECITech or
                a third party(in each case under any applicable law).
              </p>
              <p className="text-gray-200 mb-2">
                5.4 You must not submit any user content to the website that is
                or has ever been the subject of any threatened or actual legal
                proceedings or other similar complaint.
              </p>
              <p className="text-gray-200">
                5.5 ECITech reserves the right to edit or remove any material
                submitted to this website, or stored on ECITech&apos;s servers, or
                hosted or published upon this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                6. No warranties
              </h2>
              <p className="text-gray-200 mb-2">
                6.1 This website is provided “as is” without any representations
                or warranties, express or implied. ECITech makes no
                representations or warranties in relation to this website or the
                information and materials provided on this website.
              </p>

              <p className="text-gray-200 mb-2">
                6.2 Without prejudice to the generality of the foregoing
                paragraph, ECITech does not warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-200 mb-2">
                <li>
                  this website will be constantly available, or available at
                  all; or
                </li>
                <li>
                  the information on this website is complete, true, accurate or
                  non-misleading.
                </li>
              </ul>
              <p className="text-gray-200">
                6.3 Nothing on this website constitutes, or is meant to
                constitute, advice of any kind.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                7. Limitations of liability
              </h2>
              <p className="text-gray-200 mb-2">
                7.1 ECITech will not be liable to you (whether under the law of
                contact, the law of torts or otherwise) in relation to the
                contents of, or use of, or otherwise in connection with, this
                website
              </p>
              <ul className="list-disc list-inside text-gray-200 mb-2">
                <li>for any indirect, special or consequential loss; or</li>
                <li>
                  for any business losses, loss of revenue, income, profits or
                  anticipated savings, loss of contracts or business
                  relationships, loss of reputation or goodwill, or loss or
                  corruption of information or data.
                </li>
              </ul>
              <p className="text-gray-200 mb-2">
                7.2 These limitations of liability apply even if ECITech has
                been expressly advised of the potential loss.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                8. Exceptions
              </h2>
              <p className="text-gray-200 mb-2">
                8.1 Nothing in this website disclaimer will exclude or limit any
                warranty implied by law that it would be unlawful to exclude or
                limit; and nothing in this website disclaimer will exclude or
                limit ECITech&apos;s liability in respect of any:
              </p>
              <p className="text-gray-200 mb-2">
                8.2 Without prejudice to the generality of the foregoing
                paragraph, ECITech does not warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-200 mb-2">
                <li>death or personal injury caused by ECITech&apos;s negligence</li>
                <li>
                  fraud or fraudulent misrepresentation on the part of ECITech;
                  or
                </li>
                <li>
                  matter which it would be illegal or unlawful for ECITech to
                  exclude or limit, or to attempt or purport to exclude or
                  limit, its liability
                </li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                9. Reasonableness
              </h2>
              <p className="text-gray-200 mb-2">
                9.1 By using this website, you agree that the exclusions and
                limitations of liability set out in this website disclaimer are
                reasonable.
              </p>
              <p className="text-gray-200 mb-2">
                9.2 If you do not think they are reasonable, you must not use
                this website.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                10. Unenforceable provisions
              </h2>
              <p className="text-gray-200 mb-2">
                10.1 You hereby indemnify ECITech and undertake to keep ECITech
                indemnified against any losses, damages, costs, liabilities and
                expenses (including without limitation legal expenses and any
                amounts paid by ECITech to a third-party in settlement of a
                claim or dispute on the advice of ECITech&apos;s legal advisers)
                incurred or suffered by ECITech arising out of any breach by you
                of any provision of these terms and conditions.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                11. Indemnity
              </h2>
              <p className="text-gray-200 mb-2">
                11.1 If any provision of this website disclaimer is, or is found
                to be, unenforceable under applicable law, that will not affect
                the enforceability of the other provisions of this website
                disclaimer.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                12. Breaches of these terms and conditions
              </h2>
              <p className="text-gray-200 mb-2">
                12.1 Without prejudice to ECITech&apos;s other rights under these
                terms and conditions, if you breach these terms and conditions
                in any way, ECITech may take such action as ECITech deems
                appropriate to deal with the breach, including suspending your
                access to the website, prohibiting you from accessing the
                website, blocking computers using your IP address from accessing
                the website, contacting your internet service provider to
                request that they block your access to the website and/ or
                bringing court proceedings against you.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                13. Variation
              </h2>
              <p className="text-gray-200 mb-2">
                13.1 ECITech may revise these terms and conditions from
                time-to-time. Revised terms and conditions will apply to the use
                of this website from the date of the publication of the revised
                terms and conditions on this website. Please check this page
                regularly to ensure you are familiar with the current version.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                14. Assignment
              </h2>
              <p className="text-gray-200 mb-2">
                14.1 ECITech may transfer, sub-contract, or otherwise deal with
                ECITech&apos;s rights and/or obligations under these terms and
                conditions without notifying you or obtaining your consent.
              </p>
              <p className="text-gray-200 mb-2">
                14.2 You may not transfer, sub-contract, or otherwise deal with
                your rights and/or obligations under these terms and conditions.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                15. Severability
              </h2>
              <p className="text-gray-200 mb-2">
                15.1 If a provision of these terms and conditions is determined
                by any court or other competent authority to be unlawful and/or
                unenforceable, the other provisions will continue in effect.
              </p>
              <p className="text-gray-200 mb-2">
                15.2 If any unlawful and/or unenforceable provision would be
                lawful or enforceable if part of it were deleted, that part will
                be deemed to be deleted, and the rest of the provision will
                continue in effect.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                16. Entire agreement
              </h2>
              <p className="text-gray-200 mb-2">
                16.1 These terms and conditions constitute the entire agreement
                between you and ECITech in relation to your use of this website,
                and supersede all previous agreements in respect of your use of
                this website
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                17. Law and jurisdiction
              </h2>
              <p className="text-gray-200 mb-2">
                17.1 These terms and conditions will be governed by and
                construed in accordance with the laws of Saudi Arabia, and any
                disputes relating to these terms and conditions will be subject
                to the exclusive jurisdiction of the courts of Saudi Arabia.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                ECITech&apos;s details
              </h2>
              <p className="text-gray-200 mb-2">
                The full name of ECITech is Era Cloud of Information
                Technologies Org.
              </p>
              <p className="text-gray-200">
                You can contact ECITech by email at{" "}
                <Link
                  href="mailto:ulakaev@ecitech.online"
                  className="underline text-blue-500"
                >
                  ulakaev@ecitech.online
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
