"use client";

import React, { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import Image from "next/image";
import logo from "./../../../public/logo_top.png";
import CustomCursor from "./CustomCursor";

type Project = {
  id: number;
  title: string;
  content: JSX.Element;
};

type ProjectsArray = Project[];

const ProjectContent = ({ projects }: { projects: ProjectsArray }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);  // Stan, który będzie odpowiadał za ukrycie ostatniego tytułu
  const [isMobile, setIsMobile] = useState(false);  // Stan określający, czy użytkownik jest na urządzeniu mobilnym
  const [isLogoVisible, setIsLogoVisible] = useState(true); // Stan odpowiadający za widoczność logo
  const logoRef = useRef<HTMLDivElement | null>(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);  // Zmieniamy na true, jeśli szerokość ekranu to urządzenie mobilne
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    // Sprawdzanie, czy użytkownik zjechał na sam dół strony
    const atBottom = scrollPosition >= documentHeight - (isMobile ? 100 : 10); // Dla mobile zwiększamy próg
    setIsAtBottom(atBottom);

    // Jeśli nie jest to urządzenie mobilne, ukrywamy logo po przewinięciu strony
    if (!isMobile && logoRef.current) {
      const logoPosition = logoRef.current.getBoundingClientRect().top + window.scrollY;
      if (window.scrollY > logoPosition) {
        setIsLogoVisible(false);
      } else {
        setIsLogoVisible(true);
      }
    }

    let currentActiveProject: number | null = null;
    const windowMiddle = window.scrollY + window.innerHeight / 2;

    projects.forEach((project) => {
      const projectElement = document.getElementById(`project${project.id}`);
      if (projectElement) {
        const projectTop = projectElement.offsetTop;
        const projectHeight = projectElement.offsetHeight;

        if (windowMiddle >= projectTop && windowMiddle < projectTop + projectHeight) {
          currentActiveProject = project.id;
        }
      }
    });

    setActiveProject(currentActiveProject);
  };

  useEffect(() => {
    handleResize(); // Początkowa inicjalizacja stanu dla urządzeń mobilnych
    window.addEventListener("resize", handleResize); // Obsługa zmiany rozmiaru okna
    window.addEventListener("scroll", handleScroll); // Obsługa przewijania strony
    return () => {
      window.removeEventListener("resize", handleResize); // Usunięcie nasłuchiwaczy
      window.removeEventListener("scroll", handleScroll);
    };
  }, [projects]);

  return (
    <div className="bg-white">
      <CustomCursor />

      {Array.isArray(projects) && projects.length > 0 ? (
        projects.map((project, index) => (
          <Element key={project.id} name={`project${project.id}`}>
            <div
              className={`relative flex items-center justify-center bg-white text-black font-light z-0 ${
                index !== 0 ? "py-8" : "mb-8" /* No padding for the first project */
              }`}
              id={`project${project.id}`}
            >
              <div className="text-center group hover-trigger">
                <div>{project.content}</div>
              </div>
            </div>
          </Element>
        ))
      ) : (
        <div>No projects available</div>
      )}

      {/* Bottom logo */}
      <div
        ref={logoRef}
        className={`relative flex items-center justify-center bg-white pb-20 transition-opacity duration-300 ease-in-out ${isLogoVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <Image
          src={logo}
          alt="Logo"
          className="w-28 h-28 sm:w-40 sm:h-40 lg:w-40 lg:h-40"
        />
      </div>

      {/* Active project title display */}
      <div className="fixed bottom-0 left-0 right-0 mix-blend-difference shadow-md text-center transition-opacity duration-300 ease-in-out">
        <div className="absolute inset-0 opacity-90 -z-10"></div>
        {activeProject !== null && !isAtBottom ? (
          <h2
            className={`relative text-lg sm:text-2xl mb-[6px] sm:mb-2 font-customMedium mix-blend-difference text-black dark:text-white opacity-100 transition-opacity duration-300`}
          >
            {projects.find((p) => p.id === activeProject)?.title ||
              projects[projects.length - 1]?.title}
          </h2>
        ) : (
          <h2 className="relative text-5xl font-customMedium text-black dark:text-white opacity-0">
            &nbsp;
          </h2>
        )}
      </div>
    </div>
  );
};

export default ProjectContent;
