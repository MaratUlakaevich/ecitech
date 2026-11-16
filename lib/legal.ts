import { CONTACT_EMAIL } from "./site";
import type { Locale } from "./i18n";

/**
 * Personal-data operator of ecitech.online (English and Arabic pages): the
 * ECITech company registered in Saudi Arabia (PDPL). The Russian site
 * (ru.ecitech.online) is a separate project with its own operator.
 *
 * Values in [square brackets] are placeholders that MUST be replaced with
 * real details. `isFilled()` lets a page fall back to generic wording.
 */
export const SA_OPERATOR = {
  legalName: "[ECITech legal name as in the Commercial Registration]",
  cr: "[CR number]",
  address: "Riyadh, Kingdom of Saudi Arabia",
  email: CONTACT_EMAIL,
};

/** Date the current versions of the documents took effect. */
export const LEGAL_UPDATED = { en: "13 November 2026" };

/**
 * Bump when the consent wording or the set of trackers changes: stored
 * consent is then asked again. English and Arabic pages share it.
 */
export const CONSENT_VERSION = { en: "2026-11-13" } as const;

export const isFilled = (v: string) => !v.startsWith("[");

/** Inbox shown on the site (same for English and Arabic). */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const contactEmail = (_locale: Locale) => CONTACT_EMAIL;
