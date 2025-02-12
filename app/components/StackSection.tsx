"use client";

import React, { FC, useState } from "react";
import { styles } from "../constants/styles";
import TechItem from "./UI/TechItem";

const StackSection: FC = () => {
  const [activeSection, setActiveSection] = useState<"web" | "mobile">("web");

  return (
    <div className="relative -mx-8 lg:-mx-12 p-10 bg-gray-800 lg:rounded-3xl">
      <div className="max-w-[1128px] mx-auto">
        <h2
          className={`${styles.lgh2} mx-auto text-4xl font-bold text-white mb-8`}
        >
          Technology Stack
        </h2>
        <p
          className={`${styles.lgp} lg:w-[50rem] text-gray-400 mb-12 lg:mb-20`}
        >
          The development team working on a project uses only modern and
          scalable technologies to implement mobile and web applications the way
          you mean it
        </p>

        <div className="flex lg:hidden mb-8">
          <button
            className={`flex-1 py-2 text-center text-2xl font-bold text-white border-b-2 ${
              activeSection === "web"
                ? "text-white border-white"
                : "text-gray-400 border-transparent"
            }`}
            onClick={() => setActiveSection("web")}
          >
            Web <span className="hidden md:block">Technologies</span>
          </button>
          <button
            className={`flex-1 py-2 text-center text-2xl font-bold text-white border-b-2 ${
              activeSection === "mobile"
                ? "text-white border-white"
                : "text-gray-400 border-transparent"
            }`}
            onClick={() => setActiveSection("mobile")}
          >
            Mobile <span className="hidden md:block">Technologies</span>
          </button>
        </div>

        <div className="flex lg:grid lg:grid-cols-2 gap-12 w-full">
          {/* Web Technologies */}
          <div
            className={`${activeSection === "web" ? "block" : "hidden lg:block"} w-full`}
          >
            <h3 className="hidden lg:block text-2xl font-bold text-white mb-8">
              Web Technologies
            </h3>

            <div className="flex lg:flex-row flex-col items-start lg:space-x-20 space-y-10 lg:space-y-0 w-full">
              <div className="w-full lg:w-fit">
                <h4 className="text-xl text-white mb-6">Backend</h4>
                <div className="lg:grid lg:grid-cols-2 flex gap-10 pb-4">
                  <div className="flex gap-10 lg:contents overflow-x-scroll scrollbar-hide">
                    <TechItem src="/img/tech/TS.svg" name="TypeScript" />
                    <TechItem src="/img/tech/Python.svg" name="Python" />
                    <TechItem src="/img/tech/Ruby.svg" name="Ruby" />
                    <TechItem src="/img/tech/Node.svg" name="Node.JS" />
                    <TechItem src="/img/tech/NET.svg" name=".NET" />
                    <TechItem src="/img/tech/Java.svg" name="Java" />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-fit">
                <h4 className="text-xl text-white mb-6">Frontend</h4>
                <div className="lg:grid lg:grid-cols-2 flex gap-10 pb-4">
                  <div className="flex gap-10 lg:contents overflow-x-scroll scrollbar-hide">
                    <TechItem src="/img/tech/React.svg" name="React" />
                    <TechItem src="/img/tech/Angular.svg" name="Angular" />
                    <TechItem src="/img/tech/Vue.svg" name="Vue" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Technologies */}
          <div
            className={`${activeSection === "mobile" ? "block" : "hidden lg:block"} w-full`}
          >
            <h3 className="hidden lg:block text-2xl font-bold text-white mb-8">
              Mobile Technologies
            </h3>

            <div className="lg:grid lg:grid-cols-2 flex justify-between md:flex-row sm:flex-col gap-8">
              <div>
                <h4 className="text-xl text-white mb-6">iOS</h4>
                <div className="flex gap-8">
                  <TechItem src="/img/tech/Swift.svg" name="Swift" />
                </div>
              </div>

              <div>
                <h4 className="text-xl text-white mb-6">Cross Platform</h4>
                <div className="flex gap-8">
                  <TechItem src="/img/tech/Flutter.svg" name="Flutter" />
                  <TechItem
                    src="/img/tech/ReactNative.svg"
                    name="React Native"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xl text-white mb-6">Android</h4>
                <div className="flex gap-8">
                  <TechItem src="/img/tech/Kotlin.svg" name="Kotlin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackSection;
