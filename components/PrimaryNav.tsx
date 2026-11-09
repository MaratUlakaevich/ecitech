"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FC } from "react";
import { book } from "@/lib/site";
import { href, localeFromPath } from "@/lib/i18n";

const LINKS = {
  en: [
    { href: "/portfolio", label: "Work" },
    { href: "/services", label: "Practice" },
    { href: "/industries", label: "Industries" },
    { href: "/journal", label: "Journal" },
    { href: "/about", label: "Studio" },
  ],
  ru: [
    { href: "/portfolio", label: "Работы" },
    { href: "/services", label: "Услуги" },
    { href: "/industries", label: "Отрасли" },
    { href: "/journal", label: "Журнал" },
    { href: "/about", label: "Студия" },
  ],
};

const MENU = {
  en: { open: "Menu", close: "Close", aria: "Primary" },
  ru: { open: "Меню", close: "Закрыть", aria: "Основная навигация" },
};

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

/**
 * Primary navigation — desktop row (lg+) and a disclosure menu below
 * lg. Client-side only for the active-page state and the menu toggle.
 */
const PrimaryNav: FC = () => {
  const pathname = usePathname() ?? "/";
  const locale = localeFromPath(pathname);
  const links = LINKS[locale].map((l) => ({ ...l, href: href(locale, l.href) }));
  const m = MENU[locale];
  const b = book(locale);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav className="hidden lg:flex items-center gap-10" aria-label={m.aria}>
        {links.map((l) => {
          const active = isActive(pathname, l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={`text-[14.5px] transition-colors hover:text-copper-ink ${
                active ? "text-ink-900 underline decoration-copper-500 underline-offset-[6px]" : "text-ink-800"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-2">
        <Link
          href={b.href}
          className="hidden md:inline-flex items-center gap-3 min-h-11 text-[14.5px] text-ink-900 group"
        >
          <span>{b.label}</span>
          <span className="w-12 h-px bg-ink-900 origin-left scale-x-[0.66] transition-[transform,background-color] duration-200 ease-out group-hover:scale-x-100 group-hover:bg-copper-ink"></span>
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="lg:hidden inline-flex items-center gap-3 min-h-11 px-3 -mr-3 text-[14.5px] text-ink-900"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? m.close : m.open}</span>
          <span aria-hidden="true" className="relative w-5 h-3">
            <span
              className={`absolute left-0 right-0 h-px bg-current transition-transform duration-200 ease-out ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute left-0 right-0 h-px bg-current transition-transform duration-200 ease-out ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            ></span>
          </span>
        </button>
      </div>

      {/* Scrim: separates the panel from the page and closes on tap */}
      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="lg:hidden absolute left-0 right-0 top-full h-[100dvh] z-20 bg-ink-900/25"
        />
      )}

      <div
        id="mobile-nav"
        hidden={!open}
        className="lg:hidden absolute left-0 right-0 top-full z-30 bg-paper-50 hairline-bottom shadow-[0_24px_48px_-24px_rgba(7,7,10,0.18)]"
      >
        <nav aria-label={m.aria} className="max-w-[1480px] mx-auto px-5 sm:px-8 pb-8">
          <ul className="divide-y divide-[var(--rule)] hairline-top">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center min-h-14 display text-[28px] ${
                      active ? "text-copper-ink" : "text-ink-900"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href={b.href} className="btn-primary mt-6 w-full justify-between">
            <span>{b.label}</span>
            <span className="arrow" aria-hidden="true"></span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default PrimaryNav;
