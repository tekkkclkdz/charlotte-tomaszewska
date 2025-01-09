'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringCustom, setIsHoveringCustom] = useState(false);
  const pathname = usePathname(); // Tracks page changes

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.cursor-custom')) {
        setIsHoveringCustom(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.cursor-custom')) {
        setIsHoveringCustom(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    setIsHoveringCustom(false); // Reset custom cursor hover state
  }, [pathname]); // Trigger when the page route changes

  return (
    <div
      className={`custom-cursor ${isHoveringCustom ? 'cursor-active' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {isHoveringCustom && (
        <div className="text-2xl font-customMedium">more..</div>
      )}
    </div>
  );
};

export default CustomCursor;