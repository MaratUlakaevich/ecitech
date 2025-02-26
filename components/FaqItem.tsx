"use client";

import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string | JSX.Element | JSX.Element[];
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-800 rounded-xl p-4 transition-all">
      {/* Заголовок: вопрос + иконка (+/–) */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-start text-left space-x-4 w-full"
      >
        {/* Иконка плюс/минус через псевдоэлементы (вертикальная + горизонтальная линии) */}
        <span
          className={`
            relative block w-4 h-4 flex-shrink-0
            /* Горизонтальная черта */
            after:content-[''] after:absolute after:left-1/2 after:top-1/2 
            after:block after:h-[2px] after:w-full after:bg-blue-600
            after:-translate-x-1/2 after:-translate-y-1/2
            after:transition-transform after:duration-300

            /* Вертикальная черта */
            before:content-[''] before:absolute before:left-1/2 before:top-1/2
            before:block before:w-[2px] before:h-full before:bg-blue-600
            before:-translate-x-1/2 before:-translate-y-1/2
            before:transition-transform before:duration-300

            ${
              open 
                ? "before:rotate-90" /* Поворот вертикальной линии => получается минус */
                : ""
            }
          `}
        />
        <span className="text-sm lg:text-lg text-white-100 font-medium">
          {question}
        </span>
      </button>

      {/* Ответ (раскрытие по высоте) */}
      <div
        className={`
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-96 mt-3" : "max-h-0 mt-0"}
        `}
      >
        <div className="text-sm lg:text-base text-white ml-10 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
