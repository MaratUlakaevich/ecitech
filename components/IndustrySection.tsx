import React, { FC } from "react";
import { styles } from "../app/constants/styles";
import Card from "./UI/Card";

const IndustrySection: FC = () => {
  return (
    <>
      <h2 className={`${styles.lgh2} mt-10 text-3xl font-bold`}>
        Industries we build for.
      </h2>
      <h3 className="mt-4 mb-10 lg:text-xl md:text-base text-sm text-gray-300 lg:w-[50rem]">
        Our team has delivered production software across AI, enterprise
        automation, fintech, e-commerce, real estate, and education &mdash;
        for clients from BCG and Juniper Networks to fast-growing startups.
      </h3>
      <div className="flex lg:flex-row flex-col justify-between">
        <Card
          title="AI & Automation"
          list={[
            "LLM platforms, AI dashboards",
            "RPA & process automation",
            "Cloud cost optimization",
          ]}
        />
        <Card
          title="Enterprise"
          list={[
            "Internal tools & workflow engines",
            "Digital sales management",
            "Data pipelines & dashboards",
          ]}
        />
        <Card
          title="Fintech & Blockchain"
          list={[
            "Tokenized investment platforms",
            "Payment infrastructure",
            "DeFi & Web3 applications",
          ]}
        />
      </div>

      <h3 className="mt-6 mb-10 text-2xl lg:text-3xl font-bold">
        We also build for these domains
      </h3>

      <div className="flex lg:flex-row flex-col">
        <Card
          title="E-commerce & Retail"
          list={[
            "Mobile apps with premium design, real-time logistics, admin dashboards",
          ]}
        />
        <Card
          title="Real Estate & PropTech"
          list={[
            "Digital management, CAD integration, building plan processing at scale",
          ]}
        />
        <Card
          title="EdTech"
          list={[
            "Learning platforms, career hubs, community ecosystems with gamification",
          ]}
        />
      </div>
    </>
  );
};

export default IndustrySection;
