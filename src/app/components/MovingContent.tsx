"use client";

import React, { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../../public/logo_top.png"; // Ścieżka do obrazka

type Project = {
  id: number;
  title: string;
  content: JSX.Element;
  credits: string | JSX.Element;
};

type ProjectsArray = Project[];

const ProjectContent = ({ projects }: { projects: ProjectsArray }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [loadedProjects, setLoadedProjects] = useState<Set<number>>(new Set()); // Śledzenie załadowanych projektów
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ustawienie Intersection Observer dla projektów
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setLoadedProjects((prev) => new Set(prev).add(projects[index].id));
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "100px", // Wczytuj trochę wcześniej
        threshold: 0.1,
      }
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => {
      observer.disconnect();
    };
  }, [projects]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let currentActiveProject: number | null = null;

    projectRefs.current.forEach((project, index) => {
      if (project) {
        const projectTop = project.offsetTop;
        const projectHeight = project.offsetHeight;

        if (scrollPosition >= projectTop && scrollPosition < projectTop + projectHeight) {
          currentActiveProject = projects[index].id;
        }
      }
    });

    setActiveProject(currentActiveProject);

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
      {projects.map((project, index) => (
        <Element key={project.id} name={`project${project.id}`}>
          <Link href={`/pages/moving/${project.id}`} passHref>
            <div
              ref={(el) => (projectRefs.current[index] = el)}
              className="relative flex items-center py-4 justify-center bg-white text-black font-light cursor-pointer z-0 mb-8"
              id={`project${project.id}`}
            >
              {loadedProjects.has(project.id) ? (
                <div className="text-center">
                  <div>{project.content}</div>
                </div>
              ) : (
                <div className="text-center text-gray-400">Loading...</div>
              )}
            </div>
          </Link>
        </Element>
      ))}

      {/* Sekcja obrazka pod ostatnim projektem */}
      <div
        ref={bottomRef}
        className="relative flex items-center justify-center bg-white mb-16 sm:mb-16"
      >
        <Image
          src={logo}
          alt="Logo"
          className="w-28 h-28 sm:w-40 sm:h-40 lg:w-72 lg:h-72"
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