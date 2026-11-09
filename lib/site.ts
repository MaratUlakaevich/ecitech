import type { Locale } from "./i18n";

/**
 * Site-wide copy constants shared by server and client components.
 * One label per intent: every "book a call" CTA uses BOOK_LABEL.
 */
export const BOOK_HREF = "/contact#book";
export const BOOK_LABEL = "Book an intro call";
export const CONTACT_EMAIL = "hello@ecitech.online";

const BOOK = {
  en: { href: BOOK_HREF, label: BOOK_LABEL },
  ru: { href: "/ru/contact#book", label: "Обсудить проект" },
} as const;

export const book = (locale: Locale) => BOOK[locale];
