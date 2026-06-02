import React, { FC } from "react";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "10+", label: "enterprise clients" },
  { value: "9+", label: "years of team experience" },
  { value: "130M+", label: "tons CO\u2082 managed (BCG)" },
  { value: "75K+", label: "building plans processed" },
];

const StatsRow: FC = () => {
  return (
    <div className="max-w-[1128px] mx-auto">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s) => (
          <li
            key={s.label}
            className="bg-gray-800 rounded-2xl px-5 py-6 text-center border border-gray-700"
          >
            <div className="text-3xl md:text-4xl font-bold text-white leading-none">
              {s.value}
            </div>
            <div className="text-sm md:text-base text-gray-400 mt-2">
              {s.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsRow;
