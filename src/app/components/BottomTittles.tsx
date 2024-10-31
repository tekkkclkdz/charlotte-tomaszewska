'use client'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

type Project = {
  id: number;
  title: string;
  content: JSX.Element;
}

type ProjectsArray = Project[];

const BottomTitles = ({ projects, moving }: {
  projects: ProjectsArray;
  moving: number;
}) => {
  const [activeProject, setActiveProject] = useState(1);
  const [showComponent, setShowComponent] = useState(false);
  const [holdFirstProject, setHoldFirstProject] = useState(false);

  useEffect(() => {
    if (moving === 1) {
      setShowComponent(true);
      setHoldFirstProject(true); // Hold the first project longer
    }

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const triggerPoint = windowHeight * 0.5; // Trigger point for visibility

      // Show the component based on scroll position or moving state
      setShowComponent(scrollPosition > triggerPoint || moving === 1);

      // Calculate the height for each project
      const totalHeight = document.documentElement.scrollHeight - windowHeight; // Adjust for viewport height
      const projectHeight = totalHeight / projects.length;

      // Calculate the current project index based on scroll position
      const currentProject = Math.floor(scrollPosition / projectHeight) + 1;

      // Ensure we only change to the next project if it's centered in the viewport
      if (currentProject > 0 && currentProject <= projects.length) {
        const projectStartPosition = (currentProject - 1) * projectHeight;
        const projectEndPosition = projectStartPosition + projectHeight;

        // Check if the current project is within the middle of the viewport
        if (scrollPosition >= projectStartPosition + projectHeight * 0.2 && scrollPosition < projectEndPosition - projectHeight * 0.2) {
          setActiveProject(currentProject);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projects, moving]);

  return (
    <div className={`fixed bottom-0 mix-blend-difference left-1/2 transform -translate-x-1/2 text-center font-light transition-opacity duration-300 ${showComponent ? 'opacity-100' : 'opacity-0'}`} suppressHydrationWarning={true}>
      {projects.map((project) => (
        <Link
          key={project.id}
          activeClass=""
          to={`project${project.id}`}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          suppressHydrationWarning={true}
        >
          <span
            className={`bottom-0 text-2xl sm:text-6xl py-1 sm:py-2 mix-blend-difference text-white left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-300 absolute ${activeProject === project.id ? 'opacity-100' : 'opacity-0'}`}
            style={{ whiteSpace: 'nowrap' }}
          >
            {project.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default BottomTitles;
