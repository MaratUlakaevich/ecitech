import React, { FC } from "react";
import { styles } from "../constants/styles";

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
          The solutions, that meet requirements,
          respond to market needs, and transform internal operations.
        </p>
      </div>
      <button
        className={`flex m-auto lg:mx-0 lg:mt-10 md:items-left md:m-0 text-white bg-blue-700 
                              hover:bg-blue-800 duration-300 focus:outline-none font-medium rounded-full 
                              text-xl px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}
      >
        Learn more
      </button>
      <div className=" mx-8 mt-10 lg:mx-0 lg:mt-10">
        <h4 className="text-slate-400">Our Clients</h4>
        <h3>We&apos;ve Worked with</h3>
      </div>
    </div>
  );
};

export default HeroSection;
