"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath, type Locale } from "@/lib/i18n";
import { CONSENT_VERSION } from "@/lib/legal";
import { typoString } from "@/lib/typo";

/**
 * Consent-gated analytics, one tracker per locale:
 *   EN pages: Google Tag Manager (GA4), operator = the Saudi company.
 *   RU pages: Yandex Metrica only, operator = the Russian sole trader.
 *     No Google scripts ever load on /ru, so no data of Russian visitors
 *     goes abroad from the site itself.
 * Nothing loads until the visitor presses Accept. Consent is stored per
 * locale because each locale has a different operator and document.
 *
 * Also guards the root <html lang>: the root layout is not re-rendered on
 * client-side navigation, so crossing between EN and RU does a full load.
 */

const GTM_ID = "GTM-KMRP9WR8";
const OPEN_EVENT = "ecitech:cookie-settings";

type Choice = "granted" | "denied";

const COPY = {
  en: {
    text: "We use Google Analytics cookies to see how the site is used. They load only if you accept.",
    more: "Cookies Policy",
    moreHref: "/cookies-policy",
    accept: "Accept",
    decline: "Decline",
    label: "Cookie consent",
  },
  ru: {
    text: typoString(
      "Мы используем cookies и Яндекс Метрику, чтобы понимать, как посетители пользуются сайтом. Метрика включится, только если вы согласитесь.",
    ),
    more: "Согласие на обработку cookies",
    moreHref: "/ru/cookies-policy",
    accept: "Принять",
    decline: "Отказаться",
    label: "Согласие на cookies",
  },
} as const;

const key = (l: Locale) => `ecitech-consent-${l}`;

function readChoice(l: Locale): Choice | null {
  try {
    const raw = localStorage.getItem(key(l));
    if (!raw) return null;
    const v = JSON.parse(raw) as { v?: string; choice?: Choice };
    return v.v === CONSENT_VERSION && (v.choice === "granted" || v.choice === "denied") ? v.choice : null;
  } catch {
    return null;
  }
}

function writeChoice(l: Locale, choice: Choice) {
  try {
    localStorage.setItem(key(l), JSON.stringify({ v: CONSENT_VERSION, choice, at: new Date().toISOString() }));
  } catch {
    /* storage blocked: the banner simply shows again next visit */
  }
}

declare global {
  interface Window {
    ym?: ((...args: unknown[]) => void) & { a?: unknown[]; l?: number };
  }
}

function loadGtm() {
  if (document.getElementById("gtm-js")) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.id = "gtm-js";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

function loadMetrica(id: number) {
  if (document.getElementById("ym-js")) return;
  const ym = function (...args: unknown[]) {
    (ym.a = ym.a || []).push(args);
  } as NonNullable<Window["ym"]>;
  ym.l = Date.now();
  window.ym = ym;
  const s = document.createElement("script");
  s.id = "ym-js";
  s.async = true;
  s.src = "https://mc.yandex.ru/metrika/tag.js";
  document.head.appendChild(s);
  window.ym(id, "init", {
    defer: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: false,
  });
}

export default function SiteScripts({ ymId }: { ymId?: string }) {
  const pathname = usePathname() ?? "/";
  const locale = localeFromPath(pathname);
  const metricaId = ymId && /^\d+$/.test(ymId) ? Number(ymId) : null;
  /** RU without a Metrica counter sets no cookies at all, so it needs no banner. */
  const hasTracker = locale === "en" || metricaId !== null;

  const [open, setOpen] = useState(false);
  const loaded = useRef(false);
  const lastHit = useRef<string | null>(null);

  const start = useCallback(() => {
    if (loaded.current) return;
    loaded.current = true;
    if (locale === "en") loadGtm();
    else if (metricaId !== null) loadMetrica(metricaId);
  }, [locale, metricaId]);

  // Full reload when the visitor crosses between locales (fonts, lang, tracker).
  useEffect(() => {
    if (document.documentElement.lang !== locale) window.location.reload();
  }, [locale]);

  // Initial consent state.
  useEffect(() => {
    if (!hasTracker) return;
    const c = readChoice(locale);
    if (c === "granted") start();
    else if (c === null) setOpen(true);
  }, [hasTracker, locale, start]);

  // Metrica page hits on client-side navigation (GTM handles its own history events).
  useEffect(() => {
    if (locale !== "ru" || metricaId === null || !loaded.current) return;
    if (lastHit.current === null) {
      lastHit.current = pathname;
      return;
    }
    if (lastHit.current !== pathname) {
      lastHit.current = pathname;
      window.ym?.(metricaId, "hit", window.location.href);
    }
  }, [pathname, locale, metricaId]);

  // "Cookie settings" link in the footer reopens the banner.
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  if (!hasTracker || !open) return null;

  const t = COPY[locale];
  const decide = (choice: Choice) => {
    writeChoice(locale, choice);
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
