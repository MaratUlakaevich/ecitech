import React from "react";
import Image from "next/image";
import { z } from "zod";
import { ErrorBoundary } from "react-error-boundary";

const CaseCardSchema = z.object({
  image: z.string().url(),
  title: z.string().min(1),
  description: z.string().min(1),
  link: z.string().url()
});

type CaseCardProps = z.infer<typeof CaseCardSchema>;

const CaseCard: React.FC<CaseCardProps> = ({ image, title, description, link }) => {
  
  return (

    <div className="flex flex-col lg:flex-row items-center bg-[#292929] rounded-3xl shadow-md overflow-hidden">
      <div className="hidden md:block w-full md:w-1/3 relative h-64">
        <ErrorBoundary fallback={<div>Error loading image</div>}>
          
          <Image
            src={image}
            alt={title}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-l-lg"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </ErrorBoundary>
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
}
export default CaseCard;
