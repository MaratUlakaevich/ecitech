"use client";

import React from "react";
import ServiceCard from "./UI/ServiceCard";
import { servicesData } from "@/app/config/mockData";
import { styles } from "../constants/styles";


export default function ServicesHero() {
  return (
    <section className={`${styles.section}`}>
      <div className="flex flex-col lg:flex-row justify-between lg:space-x-10 lg:items-center px-6 mb-10">
        <h2 className="text-3xl font-bold lg:w-[30rem] mb-10 lg:mb-0">Custom Software Solutions we offer</h2>
        <div className="text-xl lg:w-[40rem]">Our team supports you at every stage of the software development life-cycle: from product discovery to deployment and post-release support</div>
      </div>
      <div className="flex flex-col gap-8">
      
        {servicesData.map((service, idx) => (
          <ServiceCard key={idx} idx={idx} {...service} />
        ))}
      </div>
    </section>
  );
}
