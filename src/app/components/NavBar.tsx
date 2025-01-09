"use client";
import React, { useEffect, useState } from "react";
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
  const [logoClicked, setLogoClicked] = useState(false); // Kontrola koloru napisów

  const stillStyle =
    stillOrMoving === 0
      ? "underline font-customMedium"
      : stillOrMoving === 2
      ? "font-customMedium"
      : "font-customMedium hover:underline";

  const movingStyle =
    stillOrMoving === 1
      ? "underline font-customMedium"
      : stillOrMoving === 2
      ? "font-customMedium"
      : "font-customMedium hover:underline";

  useEffect(() => {
    if (stillOrMoving === 0 && intro === 0) {
      // Disable scrolling initially
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
    }

    return () => {
      // Cleanup: Ensure scrolling is enabled on component unmount
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    };
  }, [stillOrMoving, intro]);

  const handleLogoClick = () => {
    if (stillOrMoving === 0 && intro === 0) {
      // Unlock scrolling
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
  
      // Set logo as clicked
      setLogoClicked(true);
  
      // Get the first project element
      const firstProject = document.getElementById("project1");
      if (firstProject) {
        const isMobile = window.innerWidth <= 768; // Check for mobile screens
        const projectHeight = firstProject.offsetHeight; // Get the height of the project element
        const windowHeight = window.innerHeight; // Get the height of the browser window
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0; // Optional: Adjust if you have a navbar
  
        // Calculate the desired scroll position such that the center of the project is in the middle of the screen
        const projectOffset = firstProject.offsetTop; // The top position of the project element
        const adjustedPosition = isMobile
          ? projectOffset - windowHeight / 2 + projectHeight / 2 + navbarHeight // Center the project element vertically
          : projectOffset; // Align to top on desktop
  
        // Scroll to the adjusted position
        window.scrollTo({
          top: adjustedPosition,
          behavior: "smooth",
        });
      }
    }
  };
  

  return (
    <>
      {/* Layer with white background behind everything */}
      {intro === 0 && (
        <div className="w-full bg-white fixed top-0 left-0 h-[calc(100svh)] z-0" />
      )}

      {intro === 0 && stillOrMoving === 0 && (
        <div
          className={`relative top-0 w-full h-[calc(100svh)] flex flex-col items-center justify-center bg-white text-black z-10`}
        >
          {/* Centered logo */}
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={handleLogoClick} // Trigger both actions on click
          >
            <Image
              src={logo2}
              alt="Logo"
              className="transition-opacity duration-[2s] w-[60%] sm:w-[37%] mb-32 logo"
            />
          </div>
        </div>
      )}

      {/* Sticky "still | moving" text */}
      <div
  className={`sticky top-0 z-50 py-2 ml-[1.3rem] w-full bg-transparent mix-blend-difference text-lg sm:text-2xl transition-opacity duration-300 ${
    intro === 1 ? "opacity-100" : ""
  }`}
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