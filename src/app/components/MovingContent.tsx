"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../../public/logo_top.png";
import CustomCursor from './CustomCursor2';

type Project = {
  id: number;
  title: string;
  content: JSX.Element;
  contentPC?: JSX.Element; // New field for desktop content
  credits: string | JSX.Element;
};

type ProjectsArray = Project[];

const MovingContent = ({ projects }: { projects: ProjectsArray }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [loadedProjects, setLoadedProjects] = useState<Set<number>>(new Set());
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent)); // Detect mobile

    observer.current = new IntersectionObserver(
      (entries) => {
        setLoadedProjects((prevLoaded) => {
          const newLoaded = new Set(prevLoaded);
          entries.forEach((entry) => {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && entry.isIntersecting) newLoaded.add(projects[index].id);
            else if (isMobile && index !== -1 && !entry.isIntersecting)
              newLoaded.delete(projects[index].id);
          });
          return newLoaded;
        });
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    projectRefs.current.forEach((el) => el && observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, [projects]);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let newActiveProject: number | null = null;

    projectRefs.current.forEach((project, index) => {
      if (project) {
        const { offsetTop, offsetHeight } = project;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          newActiveProject = projects[index].id;
        }
      }
    });

    setActiveProject((prev) => (prev !== newActiveProject ? newActiveProject : prev));

    if (bottomRef.current) {
      const rect = bottomRef.current.getBoundingClientRect();
      setIsBottomVisible(rect.top < window.innerHeight);
    }
  }, [projects]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavigation = () => {
    sessionStorage.setItem("scrollPosition", String(window.scrollY));
  };

  return (
    <div>
      <CustomCursor />
      {projects.map((project, index) => (
        <Element key={project.id} name={`project${project.id}`}>
          <Link href={`/pages/moving/${project.id}`} passHref>
            <div
              ref={(el) => (projectRefs.current[index] = el)}
              onClick={handleNavigation}
              className="relative flex items-center py-4 justify-center bg-white text-black font-customMedium cursor-pointer z-0 mb-8"
              id={`project${project.id}`}
            >
              {loadedProjects.has(project.id) ? (
                <div className="text-center">
                  {isMobile ? project.content : project.contentPC || project.content}
                </div>
              ) : (
                <div className="text-center text-gray-400 h-screen">Loading...</div>
              )}
            </div>
          </Link>
        </Element>
      ))}

      <div
        ref={bottomRef}
        className="relative flex items-center justify-center bg-white mb-16 sm:mb-16"
      >
        <Image src={logo} alt="Logo" className="w-28 h-28 sm:w-40 sm:h-40 lg:w-40 lg:h-40" />
      </div>

      <div className="fixed bottom-0 left-0 right-0 mix-blend-difference shadow-md text-center transition-opacity duration-300 ease-in-out">
        {activeProject !== null && !isBottomVisible ? (
          <h2 className="relative text-lg sm:text-2xl mb-0 sm:mb-2 font-customMedium mix-blend-difference text-black dark:text-white opacity-100 transition-opacity duration-300">
            {projects.find((p) => p.id === activeProject)?.title}
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

export default MovingContent;