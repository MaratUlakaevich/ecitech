import React, { FC } from "react";
import { locations } from "../../app/config/team";
import { styles } from "../../app/constants/styles";

const LocationsSection: FC = () => {
  return (
    <div>
      <h2 className={`${styles.lgh2} text-3xl md:text-4xl font-bold text-white`}>
        Where we work from
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations.map((office) => (
          <div
            key={office.slug}
            className="bg-gray-800 rounded-3xl p-6 ring-1 ring-slate-700"
          >
            <div className="text-sm uppercase tracking-wide text-blue-400">
              {office.country}
            </div>
            <div className="mt-1 text-2xl font-bold text-white">
              {office.city}
            </div>
            <div className="mt-2 text-gray-400">{office.address}</div>
            <div className="mt-4 space-y-1">
              <a
                href={`tel:${office.phone.replace(/\s+/g, "")}`}
                className="block text-gray-300 hover:text-white transition"
              >
                {office.phone}
              </a>
              <a
                href={`mailto:${office.email}`}
                className="block text-blue-400 hover:text-blue-300 transition"
              >
                {office.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsSection;
