"use client";
import React, { useEffect, useState } from "react";

const ContactBioBar = ({ intro, underline }: { intro: number; underline: number }) => {
  const [showBar, setShowBar] = useState(intro === 1); // Widoczność elementu
  const [viewportHeight, setViewportHeight] = useState<number>(0);

  useEffect(() => {
    // Funkcja aktualizująca wysokość widoku
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight / 2;

      // Pokazanie elementu, gdy intro = 1 lub przekroczony próg
      setShowBar(scrollPosition >= threshold || intro === 1);
    };

    updateViewportHeight(); // Ustaw wysokość na początku
    window.addEventListener("resize", updateViewportHeight); // Aktualizuj przy zmianie rozmiaru
    window.addEventListener("scroll", handleScroll); // Obsługa scrollowania

    return () => {
      window.removeEventListener("resize", updateViewportHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [intro]);

  // Zmienna do kontrolowania klasy dla podkreślenia
  const bioClass = underline === 1 ? "underline" : "";
  const contactClass = underline === 2 ? "underline" : "";

  return (
    <div
      className={`fixed inset-0 z-10 flex justify-between mix-blend-difference items-center pointer-events-none transition-opacity duration-200 ${
        showBar ? "opacity-100" : "opacity-0"
      }`}
      style={{
        height: viewportHeight, // Dynamiczna wysokość widoku
      }}
    >
      {/* Bio */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "0%",
        }}
        className="text-white pointer-events-auto"
      >
        <a
          href="/biography"
          className={`px-2 text-lg font-customMedium sm:text-2xl mix-blend-difference hover:underline ${bioClass}`}
        >
          bio
        </a>
      </div>

      {/* Contact */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "0%",
        }}
        className="text-white pointer-events-auto"
      >
        <a
          href="/contact"
          className={`px-2 text-lg sm:text-2xl font-customMedium hover:underline ${contactClass}`}
        >
          contact
        </a>
      </div>
    </div>
  );
};

export default ContactBioBar;