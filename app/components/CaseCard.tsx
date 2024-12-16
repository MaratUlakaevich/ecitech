import React from "react";
import Image from "next/image";

interface CaseCardProps {
  image: string; // URL изображения
  title: string; // Название проекта
  description: string; // Краткое описание
  link: string; // Ссылка на страницу проекта
}

const CaseCard: React.FC<CaseCardProps> = ({ image, title, description, link }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#292929] rounded-lg shadow-md overflow-hidden">
      <div className="hidden md:block w-1/3 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="w-full md:w-2/3 p-6 text-left">
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm lg:text-base text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Explore more
        </a>
      </div>
    </div>
  );
};

export default CaseCard;
