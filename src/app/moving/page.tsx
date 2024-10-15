"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from './../components/NavBar';
import BottomTitles from './../components/BottomTittles';
import ProjectContent from './../components/ProjectContent';
import Image from 'next/image';
import DJ1 from './../../../public/still/DOCUMENT_JOURNAL/jpeg-optimizer_01.jpg'
import DJ2 from './../../../public/still/DOCUMENT_JOURNAL/jpeg-optimizer_03.jpg'
import HUM from './../../../public/moving/HUMAN-ezgif.com-optimize.gif'
import CIH from './../../../public/moving/CICHOengnew-ezgif.com-optimize.gif'
import ADID from "./../../../public/moving/adidas_-_members_week2160p-ezgif.com-optimize.gif"
import TMB from "./../../../public/moving/1586_Tmobile_TNK_Nawijka_30s_sub_eng_BIG-ezgif.com-optimize.gif"
import ContactBioBar from '../components/ContactBioBar';

const projects = [
    {
        id: 1,
        title: 'CICHO',
        content: (
            <div className="absolute top-0 items-center justify-center">
                <Image src={CIH} alt="gifcih" className='sm:mb-32 mb-4 w-screen'/>
            </div>
        ),
    }, {
        id: 3,
        title: "ADIDAS MEMBERS WEEK",
        content: (
            <div className='flex items-center justify-center'>
                <Image src={ADID} alt="adid" className='sm:py-40 mt-72 py-2 w-screen'/>
            </div>
        ),
    }, {
        id: 2,
        title: 'HUMAN',
        content: (
            <div className="flex items-center justify-center h-40">
                <div className="grid grid-cols-2 mt-80 sm:py-20">
                    <Image src={HUM} alt="gif1" className="py-2 px-2" />
                    <Image src={HUM} alt="gif2" className="py-2 px-2" />
                    <Image src={HUM} alt="gif3" className="py-2 px-2" />
                    <Image src={HUM} alt="gif4" className="py-2 px-2" />
                </div>
            </div>
        ),
    }, {
        id: 4,
        title: "TMOBILE",
        content: (
            <div className='flex items-center justify-center'>
                <Image src={TMB} alt="tmb" className='w-90%'/>
            </div>
        )
    }
];

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
            // Smoothly fade out the popup
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
            {/* Ekran startowy tylko na urządzeniach mobilnych */}
            <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50 transition-opacity duration-300 ${showRotateScreen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}>
                <p className="text-4xl text-black font-light">rotate your phone</p>
            </div>
            <NavBar stillOrMoving={1} intro={1} />
            <ProjectContent projects={projects} />
            <BottomTitles projects={projects} moving={1}/>
            <ContactBioBar intro={1}/>
        </div>
    );
};

export default Page;