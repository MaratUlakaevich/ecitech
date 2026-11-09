import React from "react";
import type { Locale } from "@/lib/i18n";

type CalcomEmbedProps = {
  /** Overrides NEXT_PUBLIC_CALCOM_LINK at the call-site if provided. */
  link?: string;
  /** Accessible name for the embed (the visible heading lives on the page). */
  title?: string;
  locale?: Locale;
};

/**
 * Resolve the booking URL. NEXT_PUBLIC_CALCOM_LINK may be either a full
 * URL (e.g. https://cal.eu/marat-ulakaev/30min) or a cal.com path
 * (e.g. ecitech/30min). Full URLs are used as-is.
 */
export function resolveCalUrl(link?: string): string {
  const raw = (link || process.env.NEXT_PUBLIC_CALCOM_LINK || "ecitech/30min").trim();
  if (/^https?:\/\//i.test(raw)) return raw.replace(/\/+$/, "");
  return `https://cal.com/${raw.replace(/^\/+/, "")}`;
}

/**
 * Lightweight iframe-based Cal.com embed for the /contact page.
 * Avoids the heavier @calcom/embed-react dependency.
 */
export default function CalcomEmbed({
  link,
  title,
  locale = "en",
}: CalcomEmbedProps) {
  const ru = locale === "ru";
  const frameTitle = title ?? (ru ? "Запись на 30-минутный звонок" : "Book a 30-minute intro call");
  const url = resolveCalUrl(link);
  const src = `${url}${url.includes("?") ? "&" : "?"}embed=true`;

  const fallback = (
    <p className="mb-4 text-[14px] text-ink-500">
      {ru ? "Календарь не загружается?" : "Calendar not loading?"}{" "}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center min-h-11 text-ink-900 underline underline-offset-4 decoration-[var(--rule-strong)] hover:text-copper-ink"
      >
        {ru ? "Откройте в новой вкладке" : "Open it in a new tab"}
      </a>
    </p>
  );

  return (
    <div className="w-full">
      {fallback}
      {/* The loading note sits behind the iframe; Cal.com paints over it once ready. */}
      <div className="relative w-full bg-paper-50">
        <p
          aria-hidden="true"
          className="absolute inset-x-0 top-16 text-center text-[15px] text-ink-500"
        >
          {ru ? "Загружаем календарь\u2026" : "Loading the calendar\u2026"}
        </p>
        <iframe
          src={src}
          title={frameTitle}
          loading="lazy"
          className="relative block w-full h-[640px] md:h-[700px] border-0 bg-transparent"
          allow="camera; microphone; fullscreen; clipboard-write"
        />
      </div>
    </div>
  );
}
