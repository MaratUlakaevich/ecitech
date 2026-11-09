"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/i18n";

const POLICIES = {
  en: [
    { href: "/terms", label: "Terms" },
    { href: "/cookies-policy", label: "Cookies" },
    { href: "/privacy-policy", label: "Privacy" },
  ],
  ru: [
    { href: "/ru/privacy-policy", label: "Политика обработки персональных данных" },
    { href: "/ru/cookies-policy", label: "Согласие на cookies" },
  ],
};

/**
 * Tabs between the three legal pages. The active page gets an ink
 * underline and aria-current; the row wraps on narrow screens.
 */
export default function PoliciesButtons() {
  const pathname = usePathname() ?? "/";
  const ru = localeFromPath(pathname) === "ru";

  return (
    <nav aria-label={ru ? "Документы" : "Legal"} className="mb-10 lg:mb-14 hairline-bottom">
      <ul className="flex flex-wrap gap-x-6 sm:gap-x-8">
        {POLICIES[ru ? "ru" : "en"].map((p) => {
          const active = pathname === p.href;
          return (
            <li key={p.href}>
              <Link
                href={p.href}
                aria-current={active ? "page" : undefined}
                className={`relative inline-flex items-center min-h-11 text-[15px] transition-colors ${
                  active ? "text-ink-900" : "text-ink-500 hover:text-ink-900"
                }`}
              >
                {p.label}
                {active && (
                  <span aria-hidden="true" className="absolute left-0 right-0 -bottom-px h-[2px] bg-ink-900" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
