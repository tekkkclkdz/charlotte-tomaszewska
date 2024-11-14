"use client";

import React, { useEffect, useState } from 'react';
import { projects } from '../../../movingProjects';

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
      className="w-full h-[calc(100vh-60px)] md:h-[80vh]"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
      loading="lazy"
      style={{ aspectRatio: '16/9' }}
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

  if (!project) return <p>Loading project...</p>;

  // Split credits into lines
  const creditsLines: string[] = project.credits.split('\n').map(line => line.trim());
  const columns = 3;
  const baseLinesPerColumn = Math.floor(creditsLines.length / columns);
  const extraLines = creditsLines.length % columns;

  // Distribute lines across columns
  const columnContents = [
    creditsLines.slice(0, baseLinesPerColumn + (extraLines > 0 ? 1 : 0)),
    creditsLines.slice(baseLinesPerColumn + (extraLines > 0 ? 1 : 0), (baseLinesPerColumn * 2) + (extraLines > 1 ? 2 : 1)),
    creditsLines.slice((baseLinesPerColumn * 2) + (extraLines > 1 ? 2 : 1))
  ];

  return (
    <div className='bg-white min-h-screen'>
      <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50 transition-opacity duration-300 ${showRotateScreen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}>
        <p className="text-4xl text-black font-light">rotate your phone</p>
      </div>

      <div className="bg-white text-black min-h-screen">
        {project.videoUrl && <ProjectVideo videoUrl={project.videoUrl} />}
        <div className="p-4 w-full grid font-light grid-cols-1 md:grid-cols-3 gap-4">
          {columnContents.map((column, index) => (
            <div key={index} className="col-span-1">
              {column.map((line: string, lineIndex: number) => (
                <p key={lineIndex} className="text-sm">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;