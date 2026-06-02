import React, { FC } from "react";
import Image from "next/image";
import { styles } from "../app/constants/styles";
import { testimonials } from "../app/config/testimonials";

const Testimonials: FC = () => {
  return (
    <section className={`${styles.section}`}>
      <div className="max-w-[1128px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What clients say
          </h2>
          <p className="text-gray-300 text-lg max-w-[560px]">
            Real feedback from founders and engineering leaders we have shipped
            alongside.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.slug}
              className="bg-gray-800 rounded-2xl p-6 lg:p-8 flex flex-col justify-between"
            >
              <blockquote className="text-lg lg:text-xl text-white leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <footer className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={`${t.authorName} avatar`}
                    fill
                    sizes="48px"
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold">
                    {t.authorName}
                  </span>
                  <span className="text-sm text-gray-400">
                    {t.authorRole} at {t.company}
                  </span>
                </div>
                {t.industry ? (
                  <span className="ml-auto text-xs uppercase tracking-wider text-blue-400 bg-blue-950/60 rounded-full px-3 py-1">
                    {t.industry}
                  </span>
                ) : null}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
