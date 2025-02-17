"use client";

import React from "react";
import Image from "next/image";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive websites and web applications using the latest technologies.",
    icon: "/img/services/web-dev.svg", 
  },
  {
    title: "Mobile Apps",
    description:
      "Developing cross-platform mobile solutions for iOS and Android devices.",
    icon: "/img/services/mobile-dev.svg",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive user interfaces and delightful user experiences.",
    icon: "/img/services/ui-ux.svg",
  },
];

export default function ServicesHero() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold w-[30rem]">Custom Software Solutions we offer</h2>
        <div className="text-xl w-[40rem]">Our team supports you at every stage of the software development life-cycle: from product discovery to deployment and post-release support</div>
      </div>
      <div className="flex flex-col gap-8">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className=" rounded-xl p-6 text-white shadow-md 
                       flex flex-col items-start transition-transform 
                       hover:-translate-y-1"
          >
            {/* Иконка услуги */}
            <Image
              width={24}
              height={24}
              unoptimized
              loading="lazy"
              src={service.icon}
              alt={service.title}
              className="w-12 h-12 mb-4 bg-gray-800"
            />
            {/* Заголовок услуги */}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            {/* Описание услуги */}
            <p className="text-sm text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
