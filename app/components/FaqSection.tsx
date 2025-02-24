"use client";

import React from "react";
import { styles } from "../constants/styles";
import parse from "html-react-parser";
import FaqItem from "./FaqItem";

/**
 * Массив с вопросами и ответами
 */
const faqData = [
  {
    question: "What are the key considerations before choosing offshore software development services?",
    answer: parse(`There are three key aspects: <br><br>
                    <ul>
                      <li>
                        <strong>Decide on what services you need. </strong>Are you going to build a mobile or web app, need custom UI design, QA testing, or all together?
                      </li>
                      <br>
                      <li>
                        <strong>Look for a vendor. </strong>Check their <a target="_blank" rel="noreferrer" href="/portfolio/">portfolio</a>, tech stack, social profiles, and reviews from previous clients.
                      </li>
                      <br>
                      <li>
                        <strong>Consider communication. </strong>At Cleveroad, we use the same tools as our clients do to make the communication process more convenient for them.
                      </li>
                    </ul>
                  `),
  },
  {
    question: "What are the key focus areas of offshore software development services?",
    answer:
      "Offshore development services are usually focused on web development, web app development, mobile app development, UI/UX design services, quality assurance services, IT consulting, support.",
  },
  {
    question: "How do software development services help to grow your business?",
    answer:
      parse(`If you're building a software product for your customers, it's a great way to attract and engage people. And engaged customers buy 90% more often.
             <br><br>
             If we're talking about internal business software, it'll help you manage all the departments in a company, keep track of internal processes, make reports, and many more.`),
  },
  {
    question: "Why are offshore software development services becoming popular?",
    answer:
      "Because it's cheaper than hiring an in-house team, but the quality is still high, especially if you're outsourcing to Eastern or Western Europe. Offshore companies offer a bigger pool of talents and technologies, and there are no additional costs you have to bear like taxes, hardware, office rent, and so on.",
  },
  {
    question: "What are the pros of offshore software development services?",
    answer: parse(`Here are the core benefits of offshore development: <br><br>
                  <ul>
                    <li>
                      <strong>Cost-effective. </strong>You don't have to pay for office rent, taxes, hardware, and other expenses.
                    </li>
                    <br>
                    <li>
                      <strong>No training costs. </strong>You don't waste time and money on training employees – it's the job of your offshore partner.
                    </li>
                    <br>
                    <li>
                      <strong>Skillset. </strong>Most offshore companies are focused on certain industries or technologies, so it'll be easy to find engineers with specific skills.
                    </li>
                  </ul>
                `),
  },
  {
    question: "What will be the custom software development service?",
    answer: parse(`At Cleveroad, custom software development services include: <br><br>
                    <ul>
                      <li>
                        mobile app development (iOS, Android)
                      </li>
                      <li>
                        web development
                      </li>
                      <li>
                        UI/UX design services
                      </li>
                      <li>
                        QA testing services
                      </li>
                    </ul>
                  `),
  },
];

export default function FaqSection() {
  // Храним состояние (раскрыт/не раскрыт) для каждого вопроса
  

  return (
    <section className={`${styles.section}`}>
      {/* Заголовок секции */}
      <div className="flex flex-col md:flex-row items-center space-x-10 lg:space-x-32 mb-8">
        <h2 className="flex-initial text-3xl md:text-4xl font-bold mb-4 md:mb-0">
          Questions you may have
        </h2>
        <p className="flex-1 text-white-600 text-lg">
          Learn more about our software development services and expertise we offer
        </p>
      </div>

      {/* Сетка: на мобильных 1 колонка, на десктопе 2 колонки */}
      <div className="flex flex-wrap -mx-3">
        {faqData.map((item, idx) => (
          <div key={idx} className="w-full lg:w-1/2 px-3 mb-6">
            <FaqItem question={item.question} answer={item.answer} />
          </div>
        ))}
      </div>
    </section>
  );
}
