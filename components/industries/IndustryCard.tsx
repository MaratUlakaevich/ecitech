import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Industry } from "../../app/config/industries";

type Props = {
  industry: Industry;
};

const IndustryCard: FC<Props> = ({ industry }) => {
  return (
    <section
      id={industry.slug}
      className="bg-gray-800 rounded-3xl p-6 md:p-8 ring-1 ring-slate-700 scroll-mt-24"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-900 ring-1 ring-slate-700 flex items-center justify-center">
          {/* TODO (PM): swap placeholder icon once industry iconography is ready */}
          <Image
            src={industry.icon}
            alt=""
            width={28}
            height={28}
            unoptimized
            aria-hidden="true"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {industry.name}
          </h2>
          <p className="mt-2 text-gray-300 max-w-2xl">{industry.valueProp}</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm uppercase tracking-wide text-blue-400">
          What we build
        </div>
        <ul className="mt-3 space-y-2">
          {industry.whatWeBuild.map((item) => (
            <li key={item} className="text-gray-300">
              &#8226;&#160;{item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Link
          href={`/portfolio?industry=${industry.slug}`}
          className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-700 rounded-full hover:bg-blue-800 transition duration-300"
        >
          See {industry.name} cases
        </Link>
      </div>
    </section>
  );
};

export default IndustryCard;
