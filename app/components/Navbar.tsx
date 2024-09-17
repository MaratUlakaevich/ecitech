import Link from "next/link";
import Image from "next/image";
import Burger from "./Burger";

export default function Navbar() {
  

  const liStyle = "text-white-500 hover:text-gray-400 duration-300 font-medium text-xl tracking-wide";

  return (
    <div className="relative flex justify-between items-center w-full">
      <Link href="/" className="ml-8 lg:ml-0">
        <Image src="/img/Logo.png" alt="ECITech Logo" width={170} height={44}></Image>
      </Link>
      <nav className="lg:flex hidden items-center py-4">

        <ul className="flex space-x-5 items-center">
          <li className={liStyle}>
            <Link href="/services">Services</Link>
          </li>
          <li className={liStyle}>
            <Link href="/industries">Industries</Link>
          </li>
          <li className={liStyle}>
            <Link href="/expertise">Expertise</Link>
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
          <li className={`${liStyle} border-2 border-blue-400 rounded-full px-5 py-2 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-200`}>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
      <Burger/>
    </div>
  );
}