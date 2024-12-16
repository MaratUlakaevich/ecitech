'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

type SlidingImagesProps = {
  images: string[];
};

export default function SlidingImages({ images }: SlidingImagesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden lg:w-[900px] md:w-[750px] h-[130px] mt-4 mx-auto">
      <div
        ref={scrollRef}
        className="flex scroll"
      >
        <div className="flex gap-4 w-[max-content] animate-infinite_scroll items-center space-x-8 align-center flex-nowrap">
          {images.concat(images).map((src, index) => (
            <div key={index} className="w-[100px] flex-shrink-0">
              <Image
                src={src}
                alt={`Sliding Image ${index}`}
                width={0} // Adjust width as necessary
                height={0} // Adjust height as necessary
                /*sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"*/
                className="h-auto w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
