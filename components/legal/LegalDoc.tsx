import type { ReactNode } from "react";
import MastheadHeader from "../MastheadHeader";
import EditorialFooter from "../EditorialFooter";
import PoliciesButtons from "../PoliciesButtons";
import type { Locale } from "@/lib/i18n";

/** A paragraph, or a bullet list when given an array of strings. */
export type Block = string | string[] | ReactNode;
export type Section = { id: string; title: string; body: Block[] };

/**
 * Shared layout for legal documents: tabs, title, effective date and
 * numbered sections, with a sticky table of contents on wide screens.
 */
export default function LegalDoc({
  locale,
  title,
  updated,
  intro,
  sections,
}: {
  locale: Locale;
  title: string;
  updated: string;
  intro?: Block;
  sections: Section[];
}) {
  const ru = locale === "ru";
  return (
    <>
      <MastheadHeader locale={locale} />
      <main id="main" className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-14 py-12 lg:py-20">
        <PoliciesButtons />
        <h1 className="display text-[36px] md:text-[56px] leading-[1.02] mb-5 text-ink-900 max-w-[980px] text-balance">
          {title}
        </h1>
        <p className="text-[14px] text-ink-500 mb-10">
          {ru ? "Редакция от " : "Effective "}
          {updated}
        </p>

        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20 items-start">
          <div className="max-w-reading">
            {intro && <div className="text-[17px] leading-[1.65] text-ink-800 mb-12">{render(intro)}</div>}
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="mb-12 scroll-mt-6">
                <h2 className="display text-[24px] md:text-[30px] leading-[1.15] text-ink-900 mb-4">
                  {i + 1}. {s.title}
                </h2>
                <div className="space-y-4 text-[16px] leading-[1.65] text-ink-700">
                  {s.body.map((b, j) => (
                    <div key={j}>{render(b)}</div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <nav aria-label={ru ? "Содержание" : "Contents"} className="hidden lg:block sticky top-8">
            <div className="mono-eyebrow mb-4">{ru ? "Содержание" : "Contents"}</div>
            <ol className="space-y-2 text-[14px] text-ink-500">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-ink-900 transition-colors">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </main>
      <EditorialFooter locale={locale} />
    </>
  );
}

function render(b: Block): ReactNode {
  if (Array.isArray(b) && b.every((x) => typeof x === "string")) {
    return (
      <ul className="space-y-2">
        {(b as string[]).map((li) => (
          <li key={li} className="flex gap-3">
            <span className="mt-[0.75em] w-3 h-px bg-copper-500 shrink-0" aria-hidden="true"></span>
            <span>{li}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (typeof b === "string") return <p>{b}</p>;
  return b;
}
