import React, { FC } from "react";
import { styles } from "../app/constants/styles";
import CTAButton from "./UI/CTAButton";

const HeroSection: FC = () => {
  return (
    <div className="lg:px-10">
      <div className="m-auto mt-10 py-4 lg:mx-0 lg:mt-16 lg:p-0">
        <h1
          className={`${styles.lgh1} 
                            md:text-6xl 
                            md:leading-snug 
                            md:w-[40rem] 
                            lg:w-[50rem]
                            text-3xl 
                            leading-tight 
                            font-bold 
                            text-left 
                            text-white-500 
                            my-4`}
        >
          We create solutions that solve business problems
        </h1>
        <p
          className={`${styles.lgp} md:w-[44rem] text-lg font-medium text-left text-white-500 my-4`}
        >
          We&apos;re a full-cycle web and mobile application development company that creates software solutions tailored to the demands of businesses
        </p>
      </div>
      <CTAButton />
      <div className=" mx-8 mt-10 lg:mx-0 lg:mt-10">
        <h4 className="text-slate-400">Our Clients</h4>
        <h3>We&apos;ve Worked with</h3>
      </div>
    </div>
  );
};

export default HeroSection;
