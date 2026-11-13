import { CONTACT_EMAIL } from "./site";

/**
 * Who is the personal-data operator on each locale of the site.
 *
 * RU (/ru/*): a Russian sole trader or self-employed person (152-FZ).
 * EN (everything else): the ECITech company registered in Saudi Arabia (PDPL).
 *
 * Values in [square brackets] are placeholders that MUST be replaced with
 * real details before the site goes to production. `isFilled()` lets the
 * build or a page warn when they are still there.
 */

export type RuOperatorKind = "ip" | "npd";

export const RU_OPERATOR = {
  /** "ip" = индивидуальный предприниматель, "npd" = самозанятый (плательщик НПД). */
  kind: "ip" as RuOperatorKind,
  /** Full name, e.g. "Улакаев Марат ...". */
  name: "Улакаев Марат Улакаевич",
  inn: "057120272272",
  /** ОГРНИП, only for kind "ip". */
  ogrnip: "325508100630127",
  /** Postal address for written requests (optional: requests also go by email). Leave "" to hide. */
  address: "",
  /** Russian-hosted inbox (Mail.ru, VK) — 152-FZ localisation for RU correspondence. */
  email: "ulakaev05@mail.ru",
};

export const SA_OPERATOR = {
  legalName: "[ECITech legal name as in the Commercial Registration]",
  cr: "[CR number]",
  address: "Riyadh, Kingdom of Saudi Arabia",
  email: CONTACT_EMAIL,
};

/** Date the current versions of the documents took effect. */
export const LEGAL_UPDATED = { ru: "12 ноября 2026 г.", en: "13 November 2026" };

/**
 * Bump a locale's value when its consent wording or set of trackers changes:
 * stored consent on that locale is then asked again.
 */
export const CONSENT_VERSION = { ru: "2026-11-12", en: "2026-11-13" } as const;

export const isFilled = (v: string) => !v.startsWith("[");

export const ruOperatorTitle = () =>
  RU_OPERATOR.kind === "ip"
    ? `Индивидуальный предприниматель ${RU_OPERATOR.name}`
    : `${RU_OPERATOR.name}, плательщик налога на профессиональный доход`;

export const ruOperatorIds = () =>
  RU_OPERATOR.kind === "ip"
    ? `ИНН ${RU_OPERATOR.inn}, ОГРНИП ${RU_OPERATOR.ogrnip}`
    : `ИНН ${RU_OPERATOR.inn}`;

/**
 * Inbox shown on each locale. RU correspondence must land in a mailbox hosted
 * in Russia (152-FZ localisation), so RU_OPERATOR.email should be a Russian
 * mail service (Yandex 360, Mail.ru), not the Namecheap Private Email inbox.
 */
export const contactEmail = (locale: "en" | "ru") => (locale === "ru" ? RU_OPERATOR.email : CONTACT_EMAIL);
