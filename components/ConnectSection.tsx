"use client";
import React from "react";

export default function ConnectWithTeam() {
  return (
    <section className="max-w-7xl mx-auto py-10 lg:px-20 px-4">
      {/* Заголовок и подзаголовок */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h2 className="text-4xl md:text-4xl font-bold mb-4 md:mb-0 md:w-[20rem] lg:w-fit">
          Connect with our Team
        </h2>
        <p className="text-gray-300 md:w-[25rem] lg:w-fit">
          Let&apos;s communicate! Don&apos;t hesitate to contact us with your projects,
          ideas, and questions.
        </p>
      </div>

      {/* Сетка карточек: 1 колонка на мобильном, 2 на планшете, 3 на десктопе */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Карточка 1 */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Have a great idea?</h3>
          <a
            href="mailto:ulakaev@ecitech.online"
            className="text-blue-500 text-lg font-medium"
          >
            ulakaev@ecitech.online
          </a>
          <p className="text-white">
            Tell us more about your business idea to get consulted
          </p>
        </div>

        {/* Карточка 2 */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Got questions to ask?</h3>
          <a
            href="mailto:ulakaev@ecitech.online"
            className="text-blue-500 text-lg font-medium"
          >
            info@ecitech.online
          </a>
          <p className="text-white">
            Discuss your project with us. We’re open to questions
          </p>
        </div>

        {/* Карточка 3 */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">We are hiring!</h3>
          <a
            href="mailto:ulakaev@ecitech.online"
            className="text-blue-500 text-lg font-medium"
          >
            ulakaev@ecitech.online
          </a>
          <p className="text-white">
            We do more for your career. <br />
            Come and join us.
          </p>
        </div>
      </div>
    </section>
  );
}
