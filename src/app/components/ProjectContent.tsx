"use client";

import React, { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import Image from "next/image";
import logo from "./../../../public/logo_top.png"; // Zdjęcie do wyświetlenia pod projektami

type Project = {
  id: number;
  title: string;
  content: JSX.Element;
};

type ProjectsArray = Project[];

const ProjectContent = ({ projects }: { projects: ProjectsArray }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isBottomVisible, setIsBottomVisible] = useState(false); // Kontroluje widoczność tytułu ostatniego projektu
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of the viewport
    let currentActiveProject: number | null = null;

    projectRefs.current.forEach((project, index) => {
      if (project) {
        const projectTop = project.offsetTop;
        const projectHeight = project.offsetHeight;

        if (scrollPosition >= projectTop && scrollPosition < projectTop + projectHeight) {
          currentActiveProject = projects[index].id; // Set active project based on scroll position
        }
      }
    });

    setActiveProject(currentActiveProject);

    // Sprawdzamy, czy jesteśmy na dole strony
    if (bottomRef.current) {
      const rect = bottomRef.current.getBoundingClientRect();
      setIsBottomVisible(rect.top < window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [projects]);

  return (
    <div>
      {Array.isArray(projects) && projects.length > 0 ? (
        projects.map((project, index) => (
          <Element key={project.id} name={`project${project.id}`}>
            <div
              ref={(el) => (projectRefs.current[index] = el)}
              className="relative flex items-center py-8 justify-center bg-white text-black font-light z-0"
              id={`project${project.id}`}
            >
              <div className="text-center">
                <div>{project.content}</div>
              </div>
            </div>
          </Element>
        ))
      ) : (
        <div>No projects available</div>
      )}

      {/* Obrazek pod ostatnim projektem */}
      <div
  ref={bottomRef}
  className="relative flex items-center justify-center bg-white mb-16 sm:mb-16"
>
  <Image
    src={logo}
    alt="Logo"
    className="w-28 h-28 sm:w-40 sm:h-40 lg:w-72 lg:h-72" // Zmienione klasy rozmiarów
  />
</div>

      {/* Tytuł aktywnego projektu */}
      <div className="fixed bottom-0 left-0 right-0 mix-blend-difference shadow-md text-center transition-opacity duration-300 ease-in-out">
        <div className="absolute inset-0 opacity-90 -z-10"></div>
        {activeProject !== null && !isBottomVisible ? (
          <h2 className="relative text-lg sm:text-2xl mb-0 sm:mb-2 font-light mix-blend-difference text-black dark:text-white opacity-100 transition-opacity duration-300">
            {projects.find((p) => p.id === activeProject)?.title}
          </h2>
        ) : (
          <h2 className="relative text-5xl font-semibold text-black dark:text-white opacity-0">
            &nbsp;
          </h2>
        )}
      </div>
    </div>
  );
};

export default ProjectContent;