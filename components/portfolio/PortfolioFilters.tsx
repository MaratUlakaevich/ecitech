"use client";

import React, { FC, useMemo, useState } from "react";
import CaseCard from "../UI/CaseCard";
import {
  industryFilters,
  stackFilters,
  IndustrySlug,
  StackSlug,
  TaggedCase,
} from "../../app/config/portfolio-filters";

type Props = {
  cases: TaggedCase[];
  initialIndustry?: IndustrySlug | null;
};

const chipBase =
  "px-4 py-2 rounded-full text-sm font-medium transition duration-200 border";
const chipActive = "bg-blue-700 text-white border-blue-700";
const chipIdle =
  "bg-transparent text-gray-300 border-slate-600 hover:border-slate-400";

const PortfolioFilters: FC<Props> = ({ cases, initialIndustry = null }) => {
  const [industry, setIndustry] = useState<IndustrySlug | null>(initialIndustry);
  const [stack, setStack] = useState<StackSlug | null>(null);

  const filtered = useMemo(() => {
    return cases.filter((c) => {
      if (industry && c.industry !== industry) return false;
      if (stack && !c.stacks.includes(stack)) return false;
      return true;
    });
  }, [cases, industry, stack]);

  return (
    <div>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-400 mr-2">Industry:</span>
          <button
            type="button"
            onClick={() => setIndustry(null)}
            className={`${chipBase} ${industry === null ? chipActive : chipIdle}`}
          >
            All
          </button>
          {industryFilters.map((f) => (
            <button
              key={f.slug}
              type="button"
              onClick={() => setIndustry(industry === f.slug ? null : f.slug)}
              className={`${chipBase} ${
                industry === f.slug ? chipActive : chipIdle
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-400 mr-2">Stack:</span>
          <button
            type="button"
            onClick={() => setStack(null)}
            className={`${chipBase} ${stack === null ? chipActive : chipIdle}`}
          >
            All
          </button>
          {stackFilters.map((f) => (
            <button
              key={f.slug}
              type="button"
              onClick={() => setStack(stack === f.slug ? null : f.slug)}
              className={`${chipBase} ${
                stack === f.slug ? chipActive : chipIdle
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        {filtered.length === 0 ? (
          <div className="bg-gray-800 rounded-3xl p-10 text-center text-gray-400 ring-1 ring-slate-700">
            No cases match the selected filters yet. Try clearing a filter or
            {" "}
            <a href="/contact" className="text-blue-400 hover:text-blue-300">
              ask us about a similar project
            </a>
            .
          </div>
        ) : (
          <div className="space-y-6">
            {filtered.map((c) => (
              <CaseCard
                key={c.link}
                image={c.image}
                title={c.title}
                description={c.description}
                link={c.link}
                challenge={c.challenge}
                solution={c.solution}
                results={c.results}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioFilters;
