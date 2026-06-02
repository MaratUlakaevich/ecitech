import React, { FC } from "react";
import { styles } from "../../app/constants/styles";

const AboutHero: FC = () => {
  return (
    <div>
      <h1
        className={`${styles.lgh1} text-4xl md:text-5xl font-bold text-white leading-tight`}
      >
        Enterprise experience. Startup speed.
      </h1>
      <p
        className={`${styles.lgp} mt-6 text-base md:text-lg text-gray-300 max-w-2xl`}
      >
        ECITech is a founder-led software development team whose engineers have
        delivered production systems for BCG, Juniper Networks, Cisco, and
        Google. We build web, mobile, AI, and blockchain products &mdash; from
        discovery to deployment, with weekly demos and direct access to senior
        engineers.
      </p>
    </div>
  );
};

export default AboutHero;
