'use client'
import React, {useRef, useEffect, FC} from 'react';
import Navbar from './UI/Navbar';


const Header:FC = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const maxTranslateY = -150;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const headerElement = headerRef.current;

      if (!headerElement) return;

      const deltaY = currentScrollPos - prevScrollPos;
      const newTranslateY = Math.max(maxTranslateY, Math.min(0, parseFloat(headerElement.style.transform.split('(')[1] || '0') - deltaY));

      headerElement.style.transform = `translateY(${newTranslateY}px)`;
      headerElement.style.backgroundColor = currentScrollPos > 100 ? '#0a0a0a' : 'transparent';
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-10 lg:mx-[-60px] py-5 lg:px-14 flex transition-transform duration-200 ease-linear lg:-mx-20`}
    >
      <Navbar />
    </header>
  );
}

export default Header;

