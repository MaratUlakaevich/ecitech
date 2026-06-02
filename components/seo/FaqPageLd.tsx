import React from "react";
import JsonLd from "./JsonLd";
// NOTE: Stream G owns /app/config/faqs.ts. If that file does not exist at
// build time, this import will need to be reconciled by PM.
// Expected shape: export const faqs: { question: string; answer: string }[]
import { faqs } from "@/app/config/faqs";

type FaqPageLdProps = {
  /** Optionally override the faqs list (e.g. a page-specific subset). */
  items?: { question: string; answer: string }[];
};

export default function FaqPageLd({ items }: FaqPageLdProps) {
  const list = items ?? faqs;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return <JsonLd data={data} id="ld-faqpage" />;
}
