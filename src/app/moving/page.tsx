'use client';

import React, { useState, useEffect } from 'react';
import NavBar from './../components/NavBar';
import BottomTitles from './../components/BottomTittles';
import MovingContent from './../components/MovingContent';
import ContactBioBar from '../components/ContactBioBar';

import { projects } from './../../app/movingProjects';

const ProjectVideo = ({ videoUrl }: { videoUrl: string }) => {
    return (
        <div className="w-full flex justify-center items-center">
            <iframe
                src={videoUrl}
                className="w-full h-[calc(100vh-60px)] md:h-[80vh]" // Responsive height adjustments
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                loading="lazy"
                style={{ aspectRatio: '16/9' }} // Maintain aspect ratio
            ></iframe>
        </div>
    );
};

const Page = () => {
    const [showRotateScreen, setShowRotateScreen] = useState(true);

    useEffect(() => {
        const handleOrientationChange = () => {
            if (window.innerWidth > window.innerHeight) {
                setShowRotateScreen(false);
            } else {
                setShowRotateScreen(true);
            }
        };

        handleOrientationChange(); // Initial check

        const resizeListener = () => {
            if (!showRotateScreen && window.innerWidth < window.innerHeight) {
                setShowRotateScreen(true);
            }
        };

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, [showRotateScreen]);

    return (
     
             
       
             <div className='bg-white'>
                 <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50 transition-opacity duration-300 ${showRotateScreen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}>
                     <p className="text-4xl text-black font-light">rotate your phone</p>
                 </div>
                 <NavBar stillOrMoving={1} intro={1} />
                

                 {/* Render Vimeo videos */}
                 <MovingContent projects={projects} />
                 <ContactBioBar intro={1} underline={0}/>
                 
             </div>
    );
};

export default Page;