"use client";

import React from "react";

type CalcomEmbedProps = {
  /** Overrides NEXT_PUBLIC_CALCOM_LINK at the call-site if provided. */
  link?: string;
  /** Iframe height in px. */
  height?: number;
  /** Visible heading / CTA text above the embed. */
  title?: string;
};

/**
 * Lightweight iframe-based Cal.com embed for the /contact page.
 * Avoids the heavier @calcom/embed-react dependency.
 */
export default function CalcomEmbed({
  link,
  height = 700,
  title = "Book a 30-min discovery call",
}: CalcomEmbedProps) {
  const calLink =
    link || process.env.NEXT_PUBLIC_CALCOM_LINK || "ecitech/30min";
  const src = `https://cal.com/${calLink}?embed=true`;

  return (
    <section
      aria-label={title}
      className="w-full max-w-[900px] mx-auto my-10 px-4"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        {title}
      </h2>
      <div className="w-full rounded-3xl overflow-hidden border border-black/5 bg-white">
        <iframe
          src={src}
          width="100%"
          height={height}
          frameBorder={0}
          title={title}
          loading="lazy"
          allow="camera; microphone; fullscreen; clipboard-write"
        />
      </div>
      <noscript>
        <p className="text-center mt-4">
          <a
            href={`https://cal.com/${calLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Book a discovery call
          </a>
        </p>
      </noscript>
    </section>
  );
}
