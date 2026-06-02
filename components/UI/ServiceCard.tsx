import React, { FC } from "react";
import Image from "next/image";

type Service = {
  idx: number;
  title: string;
  description: string;
  icon: string;
  keywords: string[];
  metric?: string;
};

const ServiceCard: FC<Service> = (service: Service) => {
  return (
    <div
      key={service.idx}
      className="flex flex-col lg:flex-row lg:space-x-10 items-start
                 rounded-[3rem] text-white shadow-md
                 transition-transform
                 hover:-translate-y-1 bg-gray-800/70 p-8 lg:p-10"
    >
      {/* Service icon */}
      <Image
        width={459}
        height={340}
        // SVG — unoptimized intentional
        unoptimized
        loading="lazy"
        src={service.icon}
        alt={service.title}
        className="mb-10 lg:mb-0"
      />
      <div>
        {/* Benefit-led title */}
        <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>

        {/* Supporting description */}
        <p className="text-lg text-gray-300 mb-4">{service.description}</p>

        {/* Metric / timeline line */}
        {service.metric && (
          <p className="text-sm font-semibold text-blue-400 mb-6 lg:mb-10">
            {service.metric}
          </p>
        )}

        {/* Keyword chips */}
        <div className="flex flex-col lg:flex-row text-white-400 mt-2">
          {service.keywords.map((keyword, idx) => (
            <p key={idx} className="lg:mr-4 mb-2 lg:mb-0 font-bold">
              {keyword}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
