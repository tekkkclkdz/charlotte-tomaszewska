"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo2 from "./../../../public/logo_top2.png";
import Link from "next/link";

const NavBar = ({
  stillOrMoving,
  intro,
}: {
  stillOrMoving: number;
  intro: number;
}) => {
  const stillStyle = stillOrMoving === 0 
    ? "underline font-light" 
    : stillOrMoving === 2 
    ? "font-light"  // no bold when stillOrMoving is 2
    : "font-light hover:underline";

  const movingStyle = stillOrMoving === 1 
    ? "underline font-light" 
    : stillOrMoving === 2 
    ? "font-light"  // no bold when stillOrMoving is 2
    : "font-light hover:underline";

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 500;

      setShowText(scrollPosition < threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    // Scroll to the first project (next screen height)
    window.scrollTo({
      top: window.innerHeight * 1.09, // Scroll to the height of the screen
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <>
      {/* Layer with white background behind everything */}
      <div className="w-full bg-white fixed top-0 left-0 h-[calc(100svh)] z-0" />

      {intro !== 1 && (
        <div
          className={`relative top-0 w-full h-[calc(100svh)] flex flex-col items-center justify-center bg-white text-black transition-opacity duration-300 ${
            showText ? "opacity-100" : "opacity-0"
          } z-10`}
        >
          {/* Centered logo */}
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={handleLogoClick} // Add click handler
          >
            <Image
              src={logo2}
              alt="Logo"
              className="transition-opacity opacity-0 duration-[2s] w-[60%] sm:w-[37%] mb-40"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
          </div>
        </div>
      )}

      {/* Sticky "still | moving" text */}
      <div
  className="sticky top-0 z-50 py-2 ml-[1.6rem] w-full bg-transparent mix-blend-difference text-lg sm:text-3xl transition-opacity duration-300"
  suppressHydrationWarning={true}
>
  <div className="flex items-center justify-center text-white">
    <div className="flex items-center gap-2">
      <Link href="/" passHref>
        <h1 className={stillStyle}>still</h1>
      </Link>
      <span>|</span>
      <Link href="/moving" passHref>
        <h2 className={movingStyle}>moving</h2>
      </Link>
    </div>
  </div>
</div>
    </>
  );
};

export default NavBar;