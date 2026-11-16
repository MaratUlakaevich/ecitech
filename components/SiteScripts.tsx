"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/i18n";
import { CONSENT_VERSION } from "@/lib/legal";
import { pushEvent, type ContactMethod } from "@/lib/analytics/gtm";

/**
 * Consent-gated analytics: Google Tag Manager (GA4 + Google Ads), operator =
 * the Saudi company. Nothing loads until the visitor presses Accept. English
 * and Arabic pages share one operator and one Cookies Policy, so they share
 * one consent record.
 *
 * Also guards the root <html lang/dir>: the root layout is not re-rendered on
 * client-side navigation, so crossing between EN and AR does a full load.
 */

const GTM_ID = "GTM-KMRP9WR8";
const OPEN_EVENT = "ecitech:cookie-settings";
const STORAGE_KEY = "ecitech-consent-en";

type Choice = "granted" | "denied";

const COPY = {
  en: {
    text: "We use cookies from Google Analytics, Google Ads and Apollo.io to see how the site is used, measure and show our ads, and learn which companies visit us. They load only if you accept.",
    more: "Cookies Policy",
    moreHref: "/cookies-policy",
    accept: "Accept",
    decline: "Decline",
    label: "Cookie consent",
  },
  ar: {
    text: "نستخدم ملفات تعريف الارتباط من Google Analytics وGoogle Ads وApollo.io لمعرفة كيفية استخدام الموقع، وقياس إعلاناتنا وعرضها، ومعرفة الشركات التي تزورنا. لا يتم تحميلها إلا إذا وافقت.",
    more: "سياسة ملفات تعريف الارتباط (بالإنجليزية)",
    moreHref: "/cookies-policy",
    accept: "موافق",
    decline: "رفض",
    label: "الموافقة على ملفات تعريف الارتباط",
  },
} as const;

function readChoice(): Choice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as { v?: string; choice?: Choice };
    return v.v === CONSENT_VERSION.en && (v.choice === "granted" || v.choice === "denied") ? v.choice : null;
  } catch {
    return null;
  }
}

function writeChoice(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: CONSENT_VERSION.en, choice, at: new Date().toISOString() }));
  } catch {
    /* storage blocked: the banner simply shows again next visit */
  }
}

/** Standard gtag(): GTM reads consent commands only as an `arguments` object. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(..._args: unknown[]) {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer!.push(arguments as unknown as Record<string, unknown>);
}

function loadGtm() {
  if (document.getElementById("gtm-js")) return;
  window.dataLayer = window.dataLayer || [];
  // Consent Mode v2. GTM loads only after the visitor pressed Accept, so the
  // default state it sees is "granted" for analytics and ads.
  gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.id = "gtm-js";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

function contactMethod(href: string): ContactMethod | null {
  if (/^mailto:/i.test(href)) return "email";
  if (/^tel:/i.test(href)) return "phone";
  if (/^https?:\/\/(t\.me|telegram\.me)\//i.test(href)) return "telegram";
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) return "whatsapp";
  return null;
}

export default function SiteScripts() {
  const pathname = usePathname() ?? "/";
  const locale = localeFromPath(pathname);

  const [open, setOpen] = useState(false);
  const loaded = useRef(false);

  const start = useCallback(() => {
    if (loaded.current) return;
    loaded.current = true;
    loadGtm();
  }, []);

  // Full reload when the visitor crosses between locales (fonts, lang, dir).
  useEffect(() => {
    if (document.documentElement.lang !== locale) window.location.reload();
  }, [locale]);

  // Initial consent state.
  useEffect(() => {
    const c = readChoice();
    if (c === "granted") start();
    else if (c === null) setOpen(true);
  }, [start]);

  // Contact clicks (Telegram, email, phone, WhatsApp).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!loaded.current) return;
      const a = (e.target as Element | null)?.closest?.("a[href]");
      const method = a ? contactMethod(a.getAttribute("href") ?? "") : null;
      if (!method) return;
      pushEvent({ event: "contact_click", method, location: window.location.pathname });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // "Cookie settings" link in the footer reopens the banner.
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  if (!open) return null;
  const t = COPY[locale];
  const decide = (choice: Choice) => {
    writeChoice(choice);
    setOpen(false);
    if (choice === "granted") start();
    // Withdrawing consent after the tracker loaded: reload so it is gone.
    else if (loaded.current) window.location.reload();
  };

  return (
    <div
      role="region"
      aria-label={t.label}
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-[880px] bg-paper-50 border hairline-strong shadow-[0_8px_30px_rgba(7,7,10,0.12)] p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="text-[14.5px] leading-[1.55] text-ink-700 flex-1">
          {t.text}{" "}
          <a href={t.moreHref} className="text-ink-900 underline underline-offset-4 hover:text-copper-ink">
            {t.more}
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => decide("denied")}
            className="min-h-11 px-5 border hairline-strong text-[14.5px] text-ink-900 hover:bg-paper-100 transition-colors"
          >
            {t.decline}
          </button>
          <button
            type="button"
            onClick={() => decide("granted")}
            className="min-h-11 px-5 bg-ink-900 text-paper-50 text-[14.5px] hover:bg-ink-800 transition-colors"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Button for the footer: reopens the consent banner so the visitor can change or withdraw consent. */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}
