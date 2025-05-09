"use client";

import { useState, useEffect, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Burger from "./Burger";
import logo from "../../public/img/Logo.png";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const liStyle =
    "text-white-500 duration-300 font-medium text-lg tracking-wide hover:bg-grey-400";

  return (
    <div
      className={`relative flex justify-between items-center w-[1150px] mx-auto lg:bg-transparent`}
    >
      <Link href="/" className="ml-8 lg:ml-0">
        <Image
          src={logo}
          alt="ECITech Logo"
          className="w-40 lg:w-44"
          unoptimized
        ></Image>
      </Link>
      <nav className="lg:flex hidden items-center py-4 lg:bg-transparent">
        <ul className="flex space-x-2 items-center lg:bg-transparent">
          <li className={liStyle}>
            <Link href="/services">
              <button className="p-1 px-3 rounded-full bg-black-500 hover:bg-blue-800 duration-300 active:bg-blue-700">
                Services
              </button>
            </Link>
          </li>
          <li className={liStyle}>
            <Link href="/industries">
              <button className="p-1 px-3 rounded-full bg-black-500 hover:bg-blue-800 duration-300 active:bg-blue-700">
                Industries
              </button>
            </Link>
          </li>
          
          <li className={liStyle}>
            <Link href="/about">
              <button className="p-1 px-3 rounded-full bg-black-500 hover:bg-blue-800 duration-300 active:bg-blue-700">
                Company
              </button>
            </Link>
          </li>
          <li className={liStyle}>
            <Link href="/portfolio">
              <button className="p-1 px-3 rounded-full bg-black-500 hover:bg-blue-800 duration-300 active:bg-blue-700">
                Portfolio
              </button>
            </Link>
          </li>
          <li className={liStyle}>
            <Link href="/blog">
              <button className="p-1 px-3 rounded-full bg-black-500 hover:bg-blue-800 duration-300 active:bg-blue-700">
                Blog
              </button>
            </Link>
          </li>
          
        </ul>
        <Link href="/contact" className={`${liStyle} ml-6 text-white bg-blue-700 hover:bg-blue-800 duration-300 font-medium rounded-full text-xl px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}>
          Contact us
        </Link>
      </nav>
      <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
