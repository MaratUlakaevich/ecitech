import React, { FC } from "react";
import Image from "next/image";
import arrow from "../../public/img/card/arrow.svg";
import Link from "next/link";

type CardProps = {
  title: string;
  list: string[];
};

const Card: FC<CardProps> = ({ title, list }) => {
  return (
    <div className={`flex justify-center flex-1`}>
      <div className="w-full p-4">
        <div className="bg-gray-800 p-6 rounded-3xl relative">
          <h2 className="text-lg font-semibold mb-4">{title}</h2>
          {list.map((item, key) => (
            <p key={key} className="text-gray-300">
              &#8226;&#160;{item}
            </p>
          ))}
          <Link
            href={`/industries/${title}`}
            className="absolute top-2 right-6 mt-4 bg-blue-500 text-white py-2 px-2 rounded-md hover:bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            <Image src={arrow} alt="arrow" unoptimized />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
