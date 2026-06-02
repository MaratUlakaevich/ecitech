import React, { FC } from "react";
import { team } from "../../app/config/team";
import { styles } from "../../app/constants/styles";

const TeamGrid: FC = () => {
  return (
    <div>
      <h2 className={`${styles.lgh2} text-3xl md:text-4xl font-bold text-white`}>
        The team behind the work
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl">
        Senior engineers, designers, and delivery leads who have shipped
        production software across fintech, medtech, and enterprise.
      </p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {team.map((member) => (
          <div
            key={member.slug}
            className="bg-gray-800 rounded-3xl overflow-hidden ring-1 ring-slate-700"
          >
            <div
              className="w-full aspect-square bg-gray-700"
              style={{
                backgroundImage: `url(${member.photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label={`${member.name}, ${member.role}`}
            />
            <div className="p-4">
              <div className="text-white font-semibold">{member.name}</div>
              <div className="text-sm text-gray-400">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
