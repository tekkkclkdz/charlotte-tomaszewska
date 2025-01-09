"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from "./../../../public/char 05 black.jpg"
import Link from 'next/link';

const NavBar = ({ stillOrMoving, intro }:{
  stillOrMoving: number;
  intro: number;
}) => {
  const stillStyle = stillOrMoving === 0 ? 'underline font-customMedium' : 'font-customMedium hover:underline';
  const movingStyle = stillOrMoving === 1 ? 'underline font-customMedium' : 'font-customMedium hover:underline';

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 500;

      setShowText(scrollPosition < threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {intro !== 1 && (
        <div className={`relative top-0 w-full h-[calc(100svh)] flex flex-col items-center justify-center bg-white text-black transition-opacity duration-300 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          {/* Centered logo */}
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo"
              className="transition-opacity opacity-0 duration-[2s] sm:w-1/2 mb-40"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
          </div>
        </div>
      )}

      {/* Still | Moving section */}
      <div className={`py-2 w-full mix-blend-difference text-lg sm:text-2xl sm:ml-[1.3rem] bg-transparent transition-opacity duration-300 ${intro === 1 ? 'absolute top-0' : 'sticky top-0'}`} suppressHydrationWarning={true}>
        <div className="flex items-center justify-center text-white ">
          <Link href="/" passHref>
            <h1 className={stillStyle}>still</h1>
          </Link>
          <span className="mx-2">|</span>
          <Link href="/moving" passHref>
            <h2 className={movingStyle}>moving</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;