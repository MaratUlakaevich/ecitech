import type { FC } from "react";
import { PLATES, type Case } from "@/lib/cases";
import type { Locale } from "@/lib/i18n";

/**
 * One portfolio case as a typographic plate + story + stack. Shared by
 * the home "Selected work" grid and /portfolio.
 */
const T = {
  en: { opens: ". Opens the live site in a new tab.", self: "You are here", live: "View live" },
  ru: { opens: ". Откроется в новой вкладке.", self: "Вы здесь", live: "Открыть сайт" },
};

const CaseCard: FC<{ c: Case; locale?: Locale }> = ({ c, locale = "en" }) => {
  const isSelf = c.href.startsWith("https://ecitech.online");
  const t = T[locale];
  const niche = locale === "ru" ? c.ru.niche : c.niche;
  const story = locale === "ru" ? c.ru.story : c.story;
  const stack = locale === "ru" ? c.ru.stack ?? c.stack : c.stack;
  return (
    <a
      href={c.href}
      {...(isSelf ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="group block h-full hairline border bg-paper-50 transition-colors hover:bg-paper-100"
    >
      <h3 className="sr-only">
        {c.brand}, {niche}
        {isSelf ? "" : t.opens}
      </h3>

      {/* Plate (photo-position placeholder, tuned per brand) */}
      <div
        className="aspect-[4/3] relative overflow-hidden"
        style={{ background: PLATES[c.plate] }}
        aria-hidden="true"
      >
        <div className="absolute top-5 left-5 mono-eyebrow text-ink-900/75">
          {niche}
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="display text-[42px] sm:text-[48px] lg:text-[54px] text-paper-50 leading-[1.02] pb-1">
            {c.emphasis ? (
              <>
                <span className="display-italic text-paper-100/95">
                  {c.brand.replace(c.emphasis, "")}
                </span>
                {c.emphasis}
              </>
            ) : (
              c.brand
            )}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-7 lg:p-9">
        <p className="text-[15px] leading-[1.6] text-ink-700 mb-6 md:min-h-[7em]">
          {story}
        </p>

        <div className="hairline-top pt-5 flex items-center justify-between gap-4">
          <div className="text-[13.5px] text-ink-500">{stack}</div>
          <span
            className="text-[14px] text-ink-800 whitespace-nowrap transition-colors group-hover:text-copper-ink"
            aria-hidden="true"
          >
            {isSelf ? t.self : t.live}
          </span>
        </div>
      </div>
    </a>
  );
};

export default CaseCard;
