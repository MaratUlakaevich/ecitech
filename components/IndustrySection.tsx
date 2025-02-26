import React, { FC } from "react";
import { styles } from "../app/constants/styles";
import Card from "./UI/Card";

const IndustrySection: FC = () => {
  return (
    <>
      <h1 className={`${styles.lgh2} mt-10 text-3xl font-bold`}>
        Core industry expertise
      </h1>
      <h3 className="mt-4 mb-10 lg:text-xl md:text-base text-sm">
        Decade of experience accumulated in sophisticated web platforms, mobile
        applications, and complex systems in line with the latest industry
        trends.
      </h3>
      <div className="flex lg:flex-row flex-col justify-between">
        <Card
          title="Finance"
          list={[
            "FinTech, Blockchain",
            "Banking, Investment",
            "Blockchain in Finance",
          ]}
        />
        <Card
          title="EdTech"
          list={["Education Software", "EdTech Platform", "Digitalization"]}
        />
        <Card
          title="Healthcare"
          list={[
            "EHR, EMR, Patient Portal",
            "Telemedecine",
            "Mental Health Tech",
          ]}
        />
      </div>

      <h3 className="mt-6 mb-10 text-2xl lg:text-3xl font-bold">
        We also have customers in these domains
      </h3>

      <div className="flex lg:flex-row flex-col">
        <Card
          title="Travel"
          list={[
            "Booking platforms, HMS, and TMS software for hospitality and tourism",
          ]}
        />
        <Card
          title="Social"
          list={[
            "Innovative platforms designed for your business goals and model",
          ]}
        />
        <Card
          title="Retail"
          list={[
            "CRM, POS, RMS, and similar software for stores and retail chains",
          ]}
        />
      </div>
    </>
  );
};

export default IndustrySection;
