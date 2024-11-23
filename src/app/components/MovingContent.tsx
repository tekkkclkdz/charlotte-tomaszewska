"use client";

import React, { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  content: JSX.Element;
  credits: string;
};

type ProjectsArray = Project[];

const ProjectContent = ({ projects }: { projects: ProjectsArray }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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
              className="relative flex items-center py-4 justify-center bg-white text-black font-light cursor-pointer z-0 mb-8" // Add margin between projects
              id={`project${project.id}`}
            >
              <div className="text-center">
                <div>{project.content}</div>
              </div>
            </div>
          </Link>
        </Element>
      ))}
      <div className="fixed bottom-0 left-0 right-0 mix-blend-difference shadow-md text-center transition-opacity duration-300 ease-in-out">
        <div className="absolute inset-0 opacity-90 -z-10"></div>
        {activeProject !== null ? (
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