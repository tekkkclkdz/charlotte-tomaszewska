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
  // Set the initial visibility of the component based on the moving prop
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // Immediately show the component if moving is 1
    if (moving === 1) {
      setShowComponent(true);
    }

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const triggerPoint = windowHeight * 0.25; // Adjust the trigger point as needed

      // Show component based on scroll position or if moving is 1
      setShowComponent(scrollPosition > triggerPoint || moving === 1);

      const totalHeight = document.documentElement.scrollHeight;
      const projectHeight = totalHeight / projects.length;
      const currentProject = Math.floor(scrollPosition / projectHeight) + 1;

      setActiveProject(currentProject);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projects, moving]); // Include moving in the dependencies array

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
            className={`bottom-0 text-2xl sm:text-6xl mix-blend-difference text-white left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-300 absolute ${activeProject === project.id ? 'opacity-100' : 'opacity-0'}`}
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