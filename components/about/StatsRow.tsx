import React, { FC } from "react";
import { stats } from "../../app/config/team";

const StatsRow: FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-gray-800 rounded-3xl p-6 text-center ring-1 ring-slate-700"
        >
          <div className="text-3xl md:text-4xl font-bold text-white">
            {stat.value}
          </div>
          <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
