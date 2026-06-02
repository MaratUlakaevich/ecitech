"use client";

import React from "react";
import ServiceCard from "./UI/ServiceCard";
import { servicesData } from "@/app/config/mockData";
import { styles } from "../app/constants/styles";


export default function ServicesHero() {
  return (
    <section className={`${styles.section}`}>
      <div className="flex flex-col lg:flex-row justify-between lg:space-x-10 lg:items-center px-6 mb-10">
        <h2 className="text-3xl font-bold lg:w-[30rem] mb-10 lg:mb-0">Services built around business outcomes.</h2>
        <div className="text-xl lg:w-[40rem]">Pick a sprint, a scope, or a full-cycle engagement. The same senior team designs, builds, and supports your product &mdash; from discovery through post-launch iterations.</div>
      </div>
      <div className="flex flex-col gap-8">
      
        {servicesData.map((service, idx) => (
          <ServiceCard key={idx} idx={idx} {...service} />
        ))}
      </div>
    </section>
  );
}
