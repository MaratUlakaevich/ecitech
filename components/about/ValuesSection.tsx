import React, { FC } from "react";
import { values } from "../../app/config/team";
import { styles } from "../../app/constants/styles";

const ValuesSection: FC = () => {
  return (
    <div>
      <h2 className={`${styles.lgh2} text-3xl md:text-4xl font-bold text-white`}>
        How we work
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {values.map((value) => (
          <div
            key={value.title}
            className="bg-gray-800 rounded-3xl p-6 ring-1 ring-slate-700"
          >
            <div className="text-xl font-bold text-white">{value.title}</div>
            <p className="mt-2 text-gray-400">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
