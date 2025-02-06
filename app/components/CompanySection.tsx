import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const CompanySection: FC = () => {
  return (
    
      <div className="max-w-[1128px] mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Текстовая часть */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-white mb-4">About Our Company</h2>
          <p className="text-gray-300 mb-6">
            We are a cutting-edge technology company committed to delivering innovative solutions and unparalleled service.
            Our team leverages modern technologies to empower businesses and shape the future.
          </p>
          <Link 
            href="/company" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-full transition-colors"
          >
            More about company &rarr;
          </Link>
        </div>
        {/* Фотографии */}
        <div className="md:w-1/2 flex-col md:flex-row gap-4 hidden md:flex">
          <div className="w-[250px] md:w-[280px] lg:w-[320px] transform rotate-[-5deg] relative top-6 left-160 shadow-lg">
            <Image 
              src="/img/company/team-1.webp"
              alt="Company Photo 1"
              width={500}
              height={300}
              unoptimized
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-[250px] md:w-[280px] lg:w-[320px] transform rotate-[8deg] shadow-xl relative left-190 top-6">
            <Image 
              src="/img/company/team-2.webp"
              alt="Company Photo 2"
              width={500}
              height={300}
              unoptimized
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
  );
};

export default CompanySection;
