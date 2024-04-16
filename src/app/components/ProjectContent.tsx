"use client"
import React, { useEffect } from 'react';
import { Element } from 'react-scroll'; // Poprawiono import

const ProjectContent = ({ projects }) => {
  useEffect(() => {
    // Dodatkowe efekty uboczne związane z ProjectContent
  }, [projects]);

  return (
    <>
      {projects.map((project) => (
        <Element key={project.id} name={`project${project.id}`}> {/* Poprawiono Element */}
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