"use client";

import React, { FC } from "react";
import Image from "next/image";
import { z } from "zod";
import { ErrorBoundary } from "react-error-boundary";
import { pushEvent } from "@/lib/analytics/gtm";

const CaseCardSchema = z.object({
  image: z.string().url(),
  title: z.string().min(1),
  description: z.string().min(1),
  link: z.string().url(),
  slug: z.string().min(1).optional(),
  challenge: z.string().min(1),
  solution: z.string().min(1),
  results: z.array(z.string().min(1)).min(1),
});

type CaseCardProps = z.infer<typeof CaseCardSchema>;

/**
 * Derive a stable slug from the outbound link if a slug prop isn't provided.
 * Falls back to the title (kebab-case) if URL parsing fails.
 */
function deriveSlug(link: string, title: string): string {
  try {
    const url = new URL(link);
    const last = url.pathname.split("/").filter(Boolean).pop();
    if (last) return last;
    return url.hostname;
  } catch {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
}

const CaseCard: FC<CaseCardProps> = ({
  image,
  title,
  link,
  slug,
  challenge,
  solution,
  results,
}) => {
  const caseSlug = slug ?? deriveSlug(link, title);

  const handleView = () => {
    pushEvent({ event: "portfolio_view", case_slug: caseSlug });
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch outline-none ring-1 ring-slate-500 bg-gradient-to-r from-slate-600 to-slate-950 rounded-3xl shadow-md overflow-hidden">
      <div className="hidden md:flex px-2 w-full lg:w-1/2 relative md:h-[32rem] lg:h-auto lg:min-h-[26rem]">
        <ErrorBoundary fallback={<div>Error loading image</div>}>
          <Image
            src={image}
            alt={title}
            width={512}
            height={325}
            className="rounded-l-lg object-contain w-full h-full"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </ErrorBoundary>
      </div>
      <div className="w-full lg:w-1/2 p-6 lg:p-8 text-left flex flex-col justify-between">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-5">
            {title}
          </h3>

          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              Challenge
            </p>
            <p className="text-sm lg:text-base text-gray-300">{challenge}</p>
          </div>

          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              Solution
            </p>
            <p className="text-sm lg:text-base text-gray-300">{solution}</p>
          </div>

          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Results
            </p>
            <ul className="space-y-1">
              {results.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm lg:text-base text-white font-medium flex items-start"
                >
                  <span className="text-blue-400 mr-2">&#9656;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleView}
          onAuxClick={handleView}
          className="inline-block self-start px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Read the full case study
        </a>
      </div>
    </div>
  );
};

export default CaseCard;
