import React, { FC } from "react";
import { styles } from "../app/constants/styles";

type Badge = {
  label: string;
  sublabel?: string;
  category: "client" | "expertise" | "rating";
};

const badges: Badge[] = [
  {
    label: "BCG Gamma",
    sublabel: "AI & Analytics",
    category: "client",
  },
  {
    label: "Juniper Networks",
    sublabel: "Enterprise Automation",
    category: "client",
  },
  {
    label: "Cisco",
    sublabel: "Network Infrastructure",
    category: "client",
  },
  {
    label: "Automation Anywhere",
    sublabel: "RPA & Process Automation",
    category: "client",
  },
  {
    label: "Google",
    sublabel: "Cloud & AI",
    category: "client",
  },
  {
    label: "AI / LLM",
    sublabel: "Enterprise platforms",
    category: "expertise",
  },
  {
    label: "Blockchain",
    sublabel: "Tokenization & DeFi",
    category: "expertise",
  },
  {
    label: "Cloud & DevOps",
    sublabel: "AWS, cost optimization",
    category: "expertise",
  },
  {
    label: "Full-cycle",
    sublabel: "Design to deployment",
    category: "expertise",
  },
  {
    label: "6 Industries",
    sublabel: "FinTech to Automotive",
    category: "expertise",
  },
];

const AchievementsSection: FC = () => {
  return (
    <>
      <h2
        className={`${styles.lgh2} mx-auto text-4xl font-bold text-white mb-4`}
      >
        Delivered for industry leaders.
      </h2>
      <p
        className={`${styles.lgp} text-lg text-gray-300 mb-10 lg:w-[50rem]`}
      >
        Our team has built production software for global enterprises across AI,
        automation, blockchain, and cloud infrastructure.
      </p>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex lg:grid lg:grid-cols-5 gap-4 lg:gap-6 min-w-max lg:min-w-0 pb-2 lg:pb-0">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center justify-center text-center bg-gray-800 ring-1 ring-slate-700 rounded-2xl px-5 py-6 w-40 lg:w-auto shrink-0 hover:bg-gray-800/80 transition-colors"
            >
              <span className="text-xl font-bold text-white tracking-tight">
                {badge.label}
              </span>
              {badge.sublabel && (
                <span className="mt-1 text-xs text-gray-400 leading-snug">
                  {badge.sublabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AchievementsSection;
