import type { Metadata } from "next";
import MastheadHeader from "../../components/MastheadHeader";
import EditorialFooter from "../../components/EditorialFooter";
import ContactForm from "../../components/ContactForm";
import CalcomEmbed from "../../components/CalcomEmbed";
import MeetingBookedTracker from "../../components/MeetingBookedTracker";
import BreadcrumbsLd from "../../components/seo/BreadcrumbsLd";

export const metadata: Metadata = {
  title: "Begin — Contact ECITech",
  description:
    "Tell us about the project. We respond within one business day, scope on the call, and quote within a week.",
  keywords: [
    "contact ECITech",
    "begin a project",
    "AI workflow consultation",
    "boutique digital studio contact",
  ],
  openGraph: {
    title: "Begin — ECITech",
    description: "Tell us about the project. We respond within one business day.",
    url: "https://ecitech.online/contact",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "Begin a project with ECITech",
      },
    ],
  },
  twitter: {
    title: "Begin — ECITech",
    description: "Tell us about the project. Quick reply, honest scope.",
    images: ["/img/og/default.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: "Home", url: "/" },
          { name: "Begin", url: "/contact" },
        ]}
      />
      <MeetingBookedTracker />

      <MastheadHeader />

      <main className="relative">
        {/* Page hero */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="mono-eyebrow mb-8">Begin · One conversation</div>
          <h1 className="display text-[48px] sm:text-[68px] lg:text-[96px] text-ink-900 leading-[0.98] max-w-hero">
            Tell us what&apos;s<br />
            <span className="display-italic text-copper-500">quietly costing</span><br />
            you the most.
          </h1>
          <p className="mt-12 max-w-reading text-[19px] lg:text-[21px] leading-[1.6] text-ink-700">
            We respond within one business day. The first call is thirty minutes — long enough to know whether we&apos;re a fit. If we&apos;re not, we point you to someone who is.
          </p>
        </section>

        {/* Two columns — form + meta */}
        <section className="hairline-top bg-paper-soft">
          <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-16 lg:py-20 grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
            <div>
              <div className="mono-eyebrow mb-6">A. By message</div>
              <h2 className="display text-[30px] sm:text-[40px] lg:text-[48px] text-ink-900 leading-[1.05] mb-10">
                Write us a few lines.
              </h2>
              <ContactForm />
            </div>

            <aside className="lg:pl-10 lg:border-l hairline-strong">
              <div className="mono-eyebrow mb-6">B. Direct</div>
              <ul className="space-y-6 text-[15px] text-ink-700">
                <li>
                  <div className="mono-eyebrow !text-[10px] mb-1">Email</div>
                  <a
                    href="mailto:hello@ecitech.online"
                    className="text-ink-900 hover:text-copper-500 transition-colors text-[16px]"
                  >
                    hello@ecitech.online
                  </a>
                </li>
                <li>
                  <div className="mono-eyebrow !text-[10px] mb-1">Telegram</div>
                  <a
                    href="https://t.me/ecitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-900 hover:text-copper-500 transition-colors text-[16px]"
                  >
                    @ecitech
                  </a>
                </li>
                <li>
                  <div className="mono-eyebrow !text-[10px] mb-1">Working hours</div>
                  MON–THU · 09 — 18
                </li>
              </ul>

              <div className="brass-rule my-10"></div>

              <div className="mono-eyebrow mb-3 !text-[10px]">What happens next</div>
              <ol className="space-y-3 text-[14px] text-ink-700 leading-[1.55]">
                <li className="flex gap-3">
                  <span className="mono-eyebrow text-copper-500 pt-0.5">I</span>
                  Reply in under one business day.
                </li>
                <li className="flex gap-3">
                  <span className="mono-eyebrow text-copper-500 pt-0.5">II</span>
                  Thirty-minute call scoped to your problem.
                </li>
                <li className="flex gap-3">
                  <span className="mono-eyebrow text-copper-500 pt-0.5">III</span>
                  Written scope and fixed fee within a week.
                </li>
              </ol>
            </aside>
          </div>
        </section>

        {/* Or — book directly */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_600px] gap-12 mb-10 items-end">
            <div>
              <div className="mono-eyebrow mb-6">C. Or pick a time</div>
              <h2 className="display text-[30px] sm:text-[40px] lg:text-[48px] text-ink-900 leading-[1.05]">
                Book the introduction call directly.
              </h2>
            </div>
            <p className="text-[16px] leading-[1.65] text-ink-700 max-w-reading">
              Thirty minutes, no decks, no sales theatre. We&apos;ll talk about the problem and decide together whether the next step is a five-day audit or a polite goodbye.
            </p>
          </div>
          <div className="hairline border bg-paper-50 p-6 lg:p-10">
            <CalcomEmbed />
          </div>
        </section>
      </main>

      <EditorialFooter />
    </>
  );
}
