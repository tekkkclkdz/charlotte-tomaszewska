"use client";

import React, { useEffect, useState } from 'react';
import { projects } from '../../../movingProjects';
import ContactBioBar from '@/app/components/ContactBioBar';
import NavBar from '@/app/components/NavBar2';
import Link from 'next/link';
import Image from 'next/image';
import logo from './../../../../../public/charlotte heart black.png';


// Define a type for the Project
interface Project {
  id: number;
  videoUrl?: string;
  credits: string;
}

const ProjectVideo = ({ videoUrl }: { videoUrl: string }) => (
  <div className="w-full flex justify-center items-center">
    <iframe
  src={videoUrl}
  className="w-full h-[calc(100vh-60px)] md:h-[87vh]"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
  loading="lazy"
  style={{
    aspectRatio: '16/9',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
  }}
></iframe>

  </div>
);

const ProjectPage = ({ params }: { params: { id: string } }) => {
  
  const [showRotateScreen, setShowRotateScreen] = useState(true);
  const [project, setProject] = useState<Project | null>(null);

  // Set the project based on params.id
  useEffect(() => {
    const selectedProject = projects.find(
      (proj) => proj.id === parseInt(params.id, 10)
    ) as Project; // Cast to Project type
    setProject(selectedProject || null);

    const handleOrientationChange = () => {
      setShowRotateScreen(window.innerWidth < window.innerHeight);
    };
    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, [params.id]);

  if (!project) return ;

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
  <div
    className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50 
      transition-opacity duration-300 ${showRotateScreen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}
  >
    <p className="text-4xl text-black font-light">rotate your phone</p>
  </div>
  <NavBar stillOrMoving={2} intro={1} />
  <ContactBioBar intro={1} underline={0} />
  <div className="bg-white h-14"></div>
  <div className="bg-white text-black min-h-screen mb-0 sm:mb-4 lg:mb-4">
    {project.videoUrl && <ProjectVideo videoUrl={project.videoUrl} />}
    <div className="bg-white" />
  </div>
  {project.credits && (
  <div
    className="z-40 text-center fixed bottom-0 left-1/2 transform mb-1 -translate-x-1/2 px-4 lg:px-0 
      text-2xl sm:text-lg py-2 lg:text-2xl font-light mix-blend-difference text-black dark:text-white 
      whitespace-nowrap overflow-hidden text-ellipsis font-customMedium"
  >
    {project.credits}
  </div>
)}
</div>
  );
};

export default ProjectPage;