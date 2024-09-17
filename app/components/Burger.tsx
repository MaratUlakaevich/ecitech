'use client'

import Link from "next/link";
import { useState } from "react";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const liStyle = "mx-8 text-white-500 font-medium text-xl ";
  const burger = "block w-10 h-1 bg-white rounded duration-300 ease-in-out"

  return (
    <>
    <button name="burger" type="button" aria-label="Menu button" className="lg:hidden flex mr-8 lg:mr-0" onClick={toggleMenu}>
      <div className="relative w-10">
        <span className={`${burger} transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`${burger} my-1 transition-opacity ${isOpen ? "opacity-0" : "" }`}></span>
        <span className={`${burger} transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </div>
    </button>

    <nav
        style={{height: isOpen ? "calc(100dvh - 5.5rem)" : "0"}}
        className={`lg:hidden transition-all duration-500 ease-in-out shadow-md w-full absolute top-12 left-0 z-10 overflow-hidden`}
      >
      <div className="h-full overflow-y-scroll bg-[#0a0a0a]">
      <ul className="flex flex-col space-y-10 py-10 ">
        <li className={liStyle}>
          <Link href="/services">
            Services
          </Link>
        </li>
        <li className={liStyle}>
          <Link href="/industries">
            Industries
          </Link>
        </li>
        <li className={liStyle}>
          <Link href="/expertise">
            Expertise
          </Link>
        </li>
        <li className={liStyle}>
          <Link href="/company">
            Company
          </Link>
        </li>
        <li className={liStyle}>
          <Link href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className={liStyle}>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        
      </ul>

      <div className="absolute bottom-0 left-0 bg-black w-full h-20 flex justify-center">
        <Link href="/contact" className={`${liStyle} block text-white font-extrabold rounded-full bg-indigo-600 my-auto px-10 py-3`}>
          Contact us
        </Link>
      </div>
      </div>
    </nav>
  </>
  )
}