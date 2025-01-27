"use client";

import React, { useLayoutEffect, useState } from "react";
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
  const [scrollEnabled, setScrollEnabled] = useState(false);

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

  useLayoutEffect(() => {
    const isScrollEnabled = sessionStorage.getItem("scrollEnabled") === "true";

    if (!isScrollEnabled && stillOrMoving === 0 && intro === 0) {
      // Zablokuj przewijanie
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    }

    // Jeśli stillOrMoving === 1, ustaw scroll na samej górze
    if (stillOrMoving === 1) {
      window.scrollTo(0, 0);
    }
    // Jeśli scrollEnabled jest true, przewiń do pierwszego projektu
    else if (isScrollEnabled) {
      jumpToFirstProjectImmediate();
    }
  }, [stillOrMoving, intro]);

  const jumpToFirstProjectImmediate = () => {
    const firstProject = document.getElementById("project1");
    if (firstProject) {
      const isMobile = window.innerWidth <= 768;
      const projectHeight = firstProject.offsetHeight;
      const windowHeight = window.innerHeight;
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;

      const projectOffset = firstProject.offsetTop;
      const adjustedPosition = isMobile
        ? projectOffset - windowHeight / 2 + projectHeight / 2 + navbarHeight
        : projectOffset;

      // Natychmiastowe ustawienie pozycji scrolla
      window.scrollTo(0, adjustedPosition);
    }
  };

  const handleLogoClick = () => {
    // Odblokuj przewijanie
    document.body.style.overflow = "";
    document.body.style.height = "";
    document.documentElement.style.overflow = "";
    document.documentElement.style.height = "";

    // Zapisz w sessionStorage, że przewijanie jest włączone
    sessionStorage.setItem("scrollEnabled", "true");
    setScrollEnabled(true);

    // Przewiń do pierwszego projektu natychmiast
    jumpToFirstProjectImmediate();
  };

  return (
    <>
      {intro === 0 && (
        <div className="w-full bg-white fixed top-0 left-0 h-[calc(100svh)] z-0" />
      )}

      {intro === 0 && stillOrMoving === 0 && (
        <div
          className={`relative top-0 w-full h-[calc(100svh)] flex flex-col items-center justify-center bg-white text-black z-10`}
        >
          <div
            className="flex items-center justify-center"
            onClick={handleLogoClick}
          >
            <Image
              src={logo2}
              alt="Logo"
              className="transition-opacity duration-[2s] w-[60%] sm:w-[28%] mb-32 logo cursor-pointer"
            />
          </div>
        </div>
      )}

      <div
        className={`sticky top-0 z-50 py-2 sm:ml-[2.63rem] ml-[2rem] w-auto bg-transparent mix-blend-difference text-lg sm:text-2xl transition-opacity duration-300 ${
          intro === 1 ? "opacity-100" : ""
        }`}
        suppressHydrationWarning={true}
      >
        <div className="flex items-center justify-center text-white">
          <div className="sticky flex items-center gap-2 text-lg sm:text-lg md:text-lg lg:text-2xl">
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