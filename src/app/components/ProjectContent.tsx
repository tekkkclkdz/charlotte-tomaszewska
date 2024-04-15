"use client"
import React, { useEffect } from 'react';
import { Element } from 'react-scroll';


const ProjectContent = ({ projects }) => {
  useEffect(() => {
    // Additional hooks and side effects related to ProjectContent
  }, [projects]);

  return (
    <>
      {projects.map((project) => (
        <Element key={project.id} suppressHydrationWarning={true} name={`project${project.id}`}>
          <div className="relativeflex items-center py-8 justify-center bg-white text-black font-light">
            <div className="text-center">
              <div>{project.content}</div>
            </div>
          </div>
        </Element>
      ))}
    </>
  );
};

export default ProjectContent;