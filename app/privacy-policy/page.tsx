import type { Metadata } from "next";
import LegalDoc, { type Section } from "@/components/legal/LegalDoc";
import { isFilled, LEGAL_UPDATED, SA_OPERATOR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — ECITech",
  description:
    "How ECITech collects, uses and protects personal data on ecitech.online: what we collect, why, who processes it, how long we keep it and your rights.",
  alternates: { canonical: "https://ecitech.online/privacy-policy" },
};

const SECTIONS: Section[] = [
  {
    id: "who",
    title: "Who we are",
    body: [
      isFilled(SA_OPERATOR.cr)
        ? `The controller of your personal data on ecitech.online is ${SA_OPERATOR.legalName}, Commercial Registration No. ${SA_OPERATOR.cr}, ${SA_OPERATOR.address} ("ECITech", "we").`
        : `The controller of your personal data on ecitech.online is ECITech, a company registered in ${SA_OPERATOR.address} ("ECITech", "we").`,
      `Questions and requests about your data: ${SA_OPERATOR.email}.`,
      "This policy covers the English pages of the site. The Russian pages (ecitech.online/ru) have their own policy and a different operator, under Russian law.",
    ],
  },
  {
    id: "collect",
    title: "What we collect and why",
    body: [
      "When you send the contact form:",
      [
        "Your name, email, and optionally company, phone, industry and project description, plus any brief or document you attach and whether you asked for an NDA.",
        "Purpose: to reply, scope the project and prepare a proposal or contract.",
        "Legal basis: your consent, given with the checkbox on the form, and steps taken at your request before entering into a contract.",
      ],
      "When you book a call through the calendar: your name, email, the time you choose and any notes you add, to hold the meeting. The booking is handled by Cal.com.",
      "When you write to us by email or Telegram: the details you choose to share, for the same purposes as the form.",
      "When you accept analytics cookies: pages viewed, referrer, approximate location from IP address, device and browser data, collected by Google Analytics through Google Tag Manager, to understand how the site is used. Nothing loads until you press Accept in the cookie banner.",
      "To keep the site running and secure: a Cloudflare Turnstile check on the form to block spam, and anonymous performance measurements (Vercel Speed Insights) that do not use cookies or identify you.",
      "We do not collect sensitive data, we do not sell personal data, and we do not use it for automated decisions about you.",
    ],
  },
  {
    id: "processors",
    title: "Who processes data for us",
    body: [
      "We use these service providers. Each processes data only on our instructions and for the purposes above:",
      [
        "Vercel Inc. (USA): hosting of the site and the form handler.",
        "Resend (USA): delivery of form submissions to our inbox.",
        "Notion Labs (USA): our lead and project tracker.",
        "Telegram: internal notifications to our team about new requests.",
        "Cal.com (USA/EU): call scheduling.",
        "Cloudflare (USA): spam protection on the form.",
        "Google (USA/EU): analytics, only with your consent.",
        "Our email provider, for correspondence.",
      ],
      "Some of these providers store data outside the Kingdom of Saudi Arabia. We transfer data abroad only as far as needed for the purposes above and in line with the Saudi Personal Data Protection Law (PDPL) and its transfer regulations, and, for visitors in the EU/EEA or UK, with the GDPR, relying on the providers' standard contractual clauses or adequacy decisions.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: [
      [
        "Enquiries that do not lead to a project: up to 24 months after our last exchange, then deleted.",
        "Client correspondence and contract records: for the life of the engagement and then as long as tax and accounting law requires.",
        "Analytics data: 14 months in Google Analytics.",
      ],
    ],
  },
  {
    id: "rights",
    title: "Your rights",
    body: [
      [
        "Be informed about how your data is processed (this policy).",
        "Access your data and get a copy of it.",
        "Ask us to correct, complete or update it.",
        "Ask us to delete it when we no longer need it.",
        "Withdraw consent at any time, for cookies via \"Cookie settings\" at the bottom of every page, and otherwise by email. Withdrawal does not affect processing done before it.",
        "Object to processing or ask us to restrict it, if you are in the EU/EEA or UK.",
        "Complain to the Saudi Data & AI Authority (SDAIA), or to your local data-protection authority.",
      ],
      `Write to ${SA_OPERATOR.email}. We answer within 30 days.`,
    ],
  },
  {
    id: "security",
    title: "Security",
    body: [
      "Access to personal data is limited to the people who work on your request. Accounts use unique passwords and two-factor authentication, data travels over encrypted connections, and we review our providers' security. If a breach affects your data, we will notify you and the competent authority as the law requires.",
    ],
  },
  {
    id: "children",
    title: "Children",
    body: ["The site is meant for businesses and is not directed at anyone under 18. We do not knowingly collect children's data."],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We update this policy when our practices or the law change. The effective date at the top shows the current version. If a change affects processing based on your consent, we will ask for it again.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalDoc
      locale="en"
      title="Privacy Policy"
      updated={LEGAL_UPDATED.en}
      intro="We collect only what we need to answer you and run the site, and we tell you exactly what that is below."
      sections={SECTIONS}
    />
  );
}
