'use client';

import React, { useState, useEffect } from 'react';
import NavBar from './../components/NavBar';
import MovingContent from './../components/MovingContent';
import ContactBioBar from '../components/ContactBioBar';
import { projects } from './../../app/movingProjects';

const Page = () => {
    
  const [showRotateScreen, setShowRotateScreen] = useState(false);

  useEffect(() => {
    const updateOrientation = () => {
      if (window.innerWidth > window.innerHeight) {
        setShowRotateScreen(false);
        document.documentElement.classList.remove('overflow-hidden'); // Włącz scrollowanie
      } else {
        setShowRotateScreen(true);
        document.documentElement.classList.add('overflow-hidden'); // Wyłącz scrollowanie
      }
    };

    // Początkowa detekcja
    updateOrientation();

    // Nasłuchiwanie zmiany orientacji
    window.addEventListener('orientationchange', updateOrientation);

    // Fallback dla resize w razie braku orientationchange
    window.addEventListener('resize', updateOrientation);

    return () => {
      window.removeEventListener('orientationchange', updateOrientation);
      window.removeEventListener('resize', updateOrientation);
    };
  }, []);

  return (
    
     <div className="bg-white">
       {/* Komunikat "Rotate your phone" */}
       <div
         className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50 transition-opacity duration-300 ${
           showRotateScreen ? 'opacity-100' : 'opacity-0 pointer-events-none'
         } md:hidden`}
       >
         <p className="text-4xl text-black font-customMedium">rotate your phone</p>
       </div>

       {/* Główna zawartość */}
       <NavBar stillOrMoving={1} intro={1} />
       <MovingContent projects={projects} />
       <ContactBioBar intro={1} underline={0} />
     </div>
  );
};

export default Page;