"use client";

import React from "react";
import parse from "html-react-parser";
import { styles } from "../app/constants/styles";
import FaqItem from "./FaqItem";
import { faqs } from "../app/config/faqs";

export default function FaqSection() {
  return (
    <section className={`${styles.section}`}>
      <div className="max-w-[1128px] mx-auto">
        {/* Section heading */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 lg:gap-32 mb-10">
          <h2 className="flex-initial text-3xl md:text-4xl font-bold text-white">
            Questions you may have
          </h2>
          <p className="flex-1 text-gray-300 text-lg">
            Pricing, IP, timelines, SLA, scaling, support, and compliance — the
            answers clients ask us most often before kicking off.
          </p>
        </div>

        {/* Grid: 1 column on mobile, 2 columns on desktop */}
        <div className="flex flex-wrap -mx-3">
          {faqs.map((item, idx) => (
            <div key={idx} className="w-full lg:w-1/2 px-3 mb-6">
              <FaqItem
                question={item.question}
                answer={
                  item.answerHtml ? parse(item.answerHtml) : item.answer
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
