"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import handWritting from './../../../public/charlotte_handwritting.png';
import Link from 'next/link';

const NavBar = ({ stillOrMoving, intro }) => {
  const stillStyle = stillOrMoving === 0 ? 'font-bold' : 'font-light';
  const movingStyle = stillOrMoving === 1 ? 'font-bold' : 'font-light';

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;

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
        <div className={`relative top-0 w-full h-3/4 h-[calc(100svh)] flex items-center justify-center text-center text-1xl text-8xl font-light bg-white text-black transition-opacity duration-300 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          {intro !== 1 && (
            <div className="absolute h-1/2 py-28"> 
              <Image src={handWritting} alt="hndwrt" 
                className='transition-opacity opacity-0 duration-[2s]'
                onLoadingComplete={(image) => image.classList.remove("opacity-0")}
              />
            </div>
          )}
        </div>
      )}
      <div className="sticky top-0 py-0 h-full w-full mix-blend-difference text-3xl bg-transparent text-white flex items-center justify-center transition-opacity duration-300 z-50" suppressHydrationWarning={true}>
        <div className="flex items-center justify-center">
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
