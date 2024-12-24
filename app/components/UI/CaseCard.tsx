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

    <div className="flex flex-col lg:flex-row items-center outline-none ring-1 ring-slate-500 bg-gradient-to-r from-slate-600 to-slate-950  rounded-3xl shadow-md overflow-hidden max-h-fit lg:max-h-[30.25rem]">
      <div className="flex hidden px-2 md:flex w-full lg:w-1/2 relative md:h-[32rem] lg:h-[24rem]">
        <ErrorBoundary fallback={<div>Error loading image</div>}>
          
          <Image
            src={image}
            alt={title}
            width={512}
            height={325}
            unoptimized
            className="rounded-l-lg object-contain w-full h-full"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </ErrorBoundary>
      </div>
      <div className="w-full lg:w-1/2 p-6 text-left">
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
