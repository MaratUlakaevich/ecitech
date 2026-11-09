/**
 * Russian typesetting for UI copy: glue short words to the next word,
 * keep the em dash on the line of the word before it, and stop line
 * breaks inside short hyphenated words ("ИИ-агенты", "30-минутный").
 * Applied once to each Russian copy object via `typo()`.
 */
const NBSP = " ";
const NB_HYPHEN = "‑";

// One- to three-letter prepositions, conjunctions and particles.
const SHORT = /(^|[\s(«"])([А-Яа-яЁё]{1,2}|без|для|над|под|при|про|что|как|или|его|все|наш|наши|это|так|чем|уже|ещё)\s+/g;

export function typoString(s: string): string {
  let out = s;
  // Run twice so chains like "и в" both get glued.
  out = out.replace(SHORT, `$1$2${NBSP}`).replace(SHORT, `$1$2${NBSP}`);
  // Dash stays with the preceding word.
  out = out.replace(/ (—|–)/g, `${NBSP}$1`);
  // Numbers glue to their units / currency: "5 дней", "70 000 ₽".
  out = out.replace(/(\d) (?=\d{3}\b)/g, `$1${NBSP}`);
  out = out.replace(/(\d) (?=[А-Яа-яЁё₽$%])/g, `$1${NBSP}`);
  out = out.replace(/(\$|от|до|№|ст\.|ч\.|п\.) (?=\d)/g, `$1${NBSP}`);
  // Short hyphenated words never break at the hyphen.
  out = out.replace(/(^|[\s(«])([A-Za-zА-Яа-яЁё0-9]{1,4})-(?=[A-Za-zА-Яа-яЁё])/g, `$1$2${NB_HYPHEN}`);
  return out;
}

type Deep<T> = T;

/** Deep-map every string in a copy object through typoString. */
export function typo<T>(value: T): Deep<T> {
  if (typeof value === "string") return typoString(value) as T;
  if (Array.isArray(value)) return value.map((v) => typo(v)) as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      // Never rewrite link targets or slugs.
      out[k] = k === "href" || k === "slug" ? v : typo(v);
    }
    return out as T;
  }
  return value;
}
