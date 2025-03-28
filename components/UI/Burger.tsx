"use client";

import Link from "next/link";
import React, { FC } from "react";

type BurgerProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const Burger: FC<BurgerProps> = ({ isMenuOpen, toggleMenu }: BurgerProps) => {
  const liStyle = "mx-8 text-white-500 font-medium text-xl md:text-3xl";
  const burger = "block w-10 h-1 bg-white rounded duration-300 ease-in-out";

  return (
    <>
      <button
        name="burger"
        type="button"
        aria-label="Menu button"
        className="lg:hidden flex mr-8 lg:mr-0"
        onClick={toggleMenu}
      >
        <div className="relative w-10">
          <span
            className={`${burger} transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`${burger} my-1 transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`${burger} transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>

      <nav
        style={{ height: isMenuOpen ? "calc(100dvh - 48px)" : "0" }}
        className={`lg:hidden transition-all duration-500 ease-in-out w-full absolute top-12 left-0 z-10 overflow-hidden`}
      >
        <div className="h-full overflow-y-scroll bg-[#0a0a0a]">
          <ul className="flex flex-col space-y-10 py-10 ">
            <li className={liStyle}>
              <Link href="/services">Services</Link>
            </li>
            <li className={liStyle}>
              <Link href="/industries">Industries</Link>
            </li>
            <li className={liStyle}>
              <Link href="/company">Company</Link>
            </li>
            <li className={liStyle}>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className={liStyle}>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>

          <div className="absolute bottom-4 left-0 bg-[#0a0a0a] w-full h-32 flex justify-center">
            <Link
              href="/contact"
              className={`${liStyle} md:text-xl block text-white font-extrabold rounded-full bg-indigo-600 my-auto px-10 py-3`}
            >
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Burger;
