import Link from "next/link";
import Image from "next/image";
import Burger from "./Burger";
import logo from "../../public/img/logo.png";

export default function Navbar() {
  

  const liStyle = "text-white-500 hover:text-gray-400 duration-300 font-medium text-lg tracking-wide";

  return (
    <div className="relative flex justify-between items-center w-full lg:bg-transparent">
      <Link href="/" className="ml-8 lg:ml-0">
        <Image src={logo} alt="ECITech Logo" className="w-40 lg:w-44"></Image>
      </Link>
      <nav className="lg:flex hidden items-center py-4 lg:bg-transparent">

        <ul className="flex space-x-5 items-center lg:bg-transparent">
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
          <li className={`${liStyle} text-white bg-blue-700 hover:bg-blue-800 duration-300 focus:outline-none font-medium rounded-full text-xl px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
      <Burger/>
    </div>
  );
}