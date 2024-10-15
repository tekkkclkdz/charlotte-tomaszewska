"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ContactBioBar = ({ intro }:{
    intro: number;
}) => {
  const [showBar, setShowBar] = useState(intro === 1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight / 2;

      setShowBar(scrollPosition >= threshold || intro === 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [intro]);

  return (
    <div className={`fixed   top-0 left-0 text-2xl sm:text-3xl w-full h-full z-40 flex mix-blend-difference justify-between items-center transition-opacity duration-200 ${showBar ? 'opacity-100' : 'opacity-0'}`}>
      <div className="sticky top-50vh transform -translate-y-50% ">
        <a href="/biography" className='px-2'>biography</a>
      </div>
      <div className="sticky top-50vh transform -translate-y-50% text-white">
        <a href="/contact" className="px-2">contact</a>
      </div>
    </div>
  );
};

export default ContactBioBar;
  