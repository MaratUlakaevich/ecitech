import React, { FC } from "react";
import CaseCard from "./UI/CaseCard";
import { cases } from "../app/config/mockData";
import { styles } from "../app/constants/styles";

const CaseSection: FC = () => {
  return (
    <>
      <h2
        className={`${styles.lgh2} mx-auto text-4xl font-bold text-white mb-4`}
      >
        Selected projects.
      </h2>
      <p
        className={`${styles.lgp} text-lg text-gray-300 mb-10 lg:mb-12 lg:w-[50rem]`}
      >
        From AI dashboards for BCG to blockchain platforms and enterprise
        automation &mdash; here are some of the products our team has designed,
        built, and shipped.
      </p>
      <div className="space-y-6">
        {cases.map((caseData, index) => (
          <CaseCard
            key={index}
            image={caseData.image}
            title={caseData.title}
            description={caseData.description}
            link={caseData.link}
            challenge={caseData.challenge}
            solution={caseData.solution}
            results={caseData.results}
          />
        ))}
      </div>
    </>
  );
};

export default CaseSection;
