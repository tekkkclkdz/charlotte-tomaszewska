"use client";
import React, { useState, useEffect } from "react";

const ContactBioBar = ({ intro, underline }: { intro: number, underline: number }) => {
  const [showBar, setShowBar] = useState(intro === 1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight / 2;

      setShowBar(scrollPosition >= threshold || intro === 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [intro]);

  // Zmienna do kontrolowania klasy dla podkreślenia
  const bioClass = underline === 1 ? "underline" : "";
  const contactClass = underline === 2 ? "underline" : "";

  return (
    <div
      className={`fixed inset-0 z-10 flex justify-between mix-blend-difference items-center transition-opacity duration-200 pointer-events-none ${
        showBar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        style={{
          position: "fixed",
          top: "50vh",
          left: "0%",
        }}
        className="text-white pointer-events-auto"
      >
        <a 
          href="/biography" 
          className={`px-2 text-2xl font-light sm:text-3xl mix-blend-difference hover:underline ${bioClass}`}
        >
          bio
        </a>
      </div>
      <div
        style={{
          position: "fixed",
          top: "50vh",
          right: "0%",
        }}
        className="text-white pointer-events-auto"
      >
        <a 
          href="/contact" 
          className={`px-2 text-2xl sm:text-3xl font-light hover:underline ${contactClass}`}
        >
          contact
        </a>
      </div>
    </div>
  );
};

export default ContactBioBar;