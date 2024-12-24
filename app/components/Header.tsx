'use client'
import React, {useRef, useEffect, ReactElement} from 'react';
import Navbar from './UI/Navbar';


function Header():ReactElement {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-10 lg:mx-[-10px] pt-10 pb-5  flex transition-transform duration-200 ease-linear`}
    >
      <Navbar />
    </header>
  );
}

export default Header;

