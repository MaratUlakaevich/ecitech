import React, { FC } from 'react';
import Image from 'next/image';

interface TechItemProps {
  src: string;
  name: string;
}

const TechItem: FC<TechItemProps> = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      
        <Image
          src={src}
          alt={name}
          width={80}
          height={80}
          className="object-contain"
          unoptimized
        />
      <span className="text-sm text-gray-400">{name}</span>
    </div>
  );
};

export default TechItem;
