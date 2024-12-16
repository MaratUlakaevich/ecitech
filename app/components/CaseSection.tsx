import React from "react";
import CaseCard from "./CaseCard";

const cases = [
  {
    image: "/img/case1.jpg",
    title: "AI-Powered Analytics",
    description: "A powerful analytics platform leveraging AI to uncover business insights.",
    link: "/portfolio/ai-powered-analytics",
  },
  {
    image: "/img/case2.jpg",
    title: "Ecosystem Integration",
    description: "A comprehensive ecosystem for seamless integration of services.",
    link: "/portfolio/ecosystem-integration",
  },
  {
    image: "/img/case3.jpg",
    title: "Blockchain Wallet",
    description: "A secure blockchain wallet with real-time transactions and analytics.",
    link: "/portfolio/blockchain-wallet",
  },
];

const CaseSection: React.FC = () => {
  return (
    <section className="px-6 lg:px-16 py-12">
      <h2 className="text-2xl lg:text-4xl font-bold text-white text-center mb-8">
        Case Studies
      </h2>
      <div className="space-y-6">
        {cases.map((caseData, index) => (
          <CaseCard
            key={index}
            image={caseData.image}
            title={caseData.title}
            description={caseData.description}
            link={caseData.link}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseSection;
