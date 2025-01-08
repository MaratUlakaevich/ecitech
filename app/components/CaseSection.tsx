import React, { FC } from "react";
import CaseCard from "./UI/CaseCard";
import { cases } from "../config/caseData";
import { styles } from "../constants/styles";


const CaseSection: FC = () => {
  return (
    <>
      <h2 className={`${styles.lgh2} mx-auto text-4xl font-bold text-white mb-8`}>
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
