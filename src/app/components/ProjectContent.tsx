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
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [isInstagram, setIsInstagram] = useState(false); // Stan dla przeglądarki Instagram
  const logoRef = useRef<HTMLDivElement | null>(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    const atBottom = scrollPosition >= documentHeight - (isMobile ? 100 : 10);
    setIsAtBottom(atBottom);

    if (!isMobile && logoRef.current) {
      const logoPosition = logoRef.current.getBoundingClientRect().top + window.scrollY;
      setIsLogoVisible(window.scrollY <= logoPosition);
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
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Wykrywanie przeglądarki Instagram
    const userAgent = navigator.userAgent || navigator.vendor;
    setIsInstagram(/Instagram/.test(userAgent));

    return () => {
      window.removeEventListener("resize", handleResize);
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
                index !== 0 ? "py-8" : "mb-8"
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

      <div
        ref={logoRef}
        className={`relative flex items-center justify-center bg-white pb-20 transition-opacity duration-300 ease-in-out ${
          isLogoVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={logo}
          alt="Logo"
          className="w-28 h-28 sm:w-40 sm:h-40 lg:w-40 lg:h-40"
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 mix-blend-difference shadow-md text-center transition-opacity duration-300 ease-in-out">
        <div className="absolute inset-0 opacity-90 -z-10"></div>
        {activeProject !== null && !isAtBottom ? (
          <h2
            className={`relative text-lg sm:text-2xl ${
              isInstagram ? "mb-[7px]" : "mb-1"
            } font-customMedium mix-blend-difference text-black dark:text-white opacity-100 transition-opacity duration-300`}
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