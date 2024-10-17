"use client"
import React, { useState, useEffect } from 'react';
import NavBar from './../components/NavBar';
import BottomTitles from './../components/BottomTittles';
import ProjectContent from './../components/ProjectContent';
import ContactBioBar from '../components/ContactBioBar';

const projects = [
    {
        id: 1,
        title: 'BRODKA & IGO',
        videoUrl: 'https://player.vimeo.com/video/932867048?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 2,
        title: 'ADIDAS',
        videoUrl: 'https://player.vimeo.com/video/887736596?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 3,
        title: 'JESTEM KOBIETA',
        videoUrl: 'https://player.vimeo.com/video/647758815?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 4,
        title: 'STONE - QUEEN',
        videoUrl: 'https://player.vimeo.com/video/990654176?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 5,
        title: 'BARBARKA - MARIA PESZEK FT OSKAR83',
        videoUrl: 'https://player.vimeo.com/video/610083622?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 6,
        title: 'SUPERPOWERS',
        videoUrl: 'https://player.vimeo.com/video/828107491?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 7,
        title: 'DARK EROS',
        videoUrl: 'https://player.vimeo.com/video/450786928?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 8,
        title: 'HOME',
        videoUrl: 'https://player.vimeo.com/video/669378253?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 9,
        title: 'WINDOWSEN',
        videoUrl: 'https://player.vimeo.com/video/1016725466?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 10,
        title: 'JESTEM KOBIETA',
        videoUrl: 'https://player.vimeo.com/video/887736596?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 11,
        title: 'JESTEM KOBIETA',
        videoUrl: 'https://player.vimeo.com/video/887736596?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 12,
        title: 'JESTEM KOBIETA',
        videoUrl: 'https://player.vimeo.com/video/887736596?background=1&autoplay=1&loop=1&muted=1',
    },
    {
        id: 13,
        title: 'JESTEM KOBIETA',
        videoUrl: 'https://player.vimeo.com/video/887736596?background=1&autoplay=1&loop=1&muted=1',
    },
];

const ProjectVideo = ({ videoUrl }: { videoUrl: string }) => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <iframe
                src={videoUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
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
            <div>
                {projects.map((project) => (
                    <div key={project.id} className="mb-8">
                        <h2 className="text-center text-2xl mb-4">{project.title}</h2>
                        <ProjectVideo videoUrl={project.videoUrl} />
                    </div>
                ))}
            </div>

            <BottomTitles projects={projects} moving={1}/>
            <ContactBioBar intro={1}/>
        </div>
    );
};

export default Page;
