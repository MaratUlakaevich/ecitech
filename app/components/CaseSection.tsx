import React, { FC } from "react";
import CaseCard from "./UI/CaseCard";
import { cases } from "../config/caseData";


const CaseSection: FC = () => {
  return (
    <>
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
    </>
  );
};

export default CaseSection;
