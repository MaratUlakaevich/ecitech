'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Burger from './Burger'
import logo from '../../public/img/logo.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen])

  const liStyle =
    'text-white-500 duration-300 font-medium text-lg tracking-wide hover:bg-grey-400'

  return (
    <div
      className={`fixed top-0 z-10 flex justify-between items-center w-full transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      } bg-black-500`}
    >
      <Link href="/" className="ml-8 lg:ml-0">
        <Image src={logo} alt="ECITech Logo" className="w-40 lg:w-44" />
      </Link>
      <nav className="lg:flex hidden items-center py-4 lg:bg-transparent">

        <ul className="flex space-x-2 items-center lg:bg-transparent">
          <li className={liStyle}>
            <Link href="/services">
              <button className="p-1 px-3 rounded-full bg-black-500 hover:bg-blue-800 duration-300 active:bg-blue-700">Services</button>
            </Link>
          </li>
          <li className={liStyle}>
            <Link href="/industries">
              <button className="p-1 px-3 rounded-full bg-black-500 hover:bg-blue-800 duration-300 active:bg-blue-700">Industries</button>
            </Link>
          </li>
          <li className={liStyle}>
            <Link href="/expertise">
              <button className="p-1 px-3 rounded-full bg-black-500 hover:bg-blue-800 duration-300 active:bg-blue-700">Expertise</button>
            </Link>
          </li>
          <li className={liStyle}>
            <Link href="/company">
              <button className="p-1 px-3 rounded-full bg-black-500 hover:bg-blue-800 duration-300 active:bg-blue-700">Company</button>
            </Link>
          </li>
          <li className={liStyle}>
            <Link href="/portfolio">
              <button className="p-1 px-3 rounded-full bg-black-500 hover:bg-blue-800 duration-300 active:bg-blue-700">Portfolio</button>
            </Link>
          </li>
          <li className={liStyle}>
            <Link href="/blog">
              <button className="p-1 px-3 rounded-full bg-black-500 hover:bg-blue-800 duration-300 active:bg-blue-700">Blog</button>
            </Link>
          </li>
          <li className={`${liStyle} text-white bg-blue-700 hover:bg-blue-800 duration-300 font-medium rounded-full text-xl px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
      <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
