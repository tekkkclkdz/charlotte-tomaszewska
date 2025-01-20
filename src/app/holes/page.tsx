'use client';

import { useEffect, useState, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useMediaQuery } from 'react-responsive';
import LightGalleryComponent from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { stillProjects } from './../stillProjects';
import NavBar from '@/app/components/NavBar2'; // Importing NavBar
import logo from './../../../public/charlotte heart black.png';
import Link from 'next/link';
import ContactBioBar from '@/app/components/ContactBioBar';
import { LightGallery } from 'lightgallery/lightgallery';

type ImageType = {
    src: string;
    width: number;
    height: number;
};

export default function ProjectDetail() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const lightboxRef = useRef<LightGallery | null>(null);

    const [isInstagram, setIsInstagram] = useState(false);

    // Wykrywanie aplikacji Instagram
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;
        setIsInstagram(/Instagram/.test(userAgent));
    }, []);

    // Always use the 7th element (index 6) of stillProjects
    const project = stillProjects[6];

    if (!project) {
        return <div>Projekt nie został znaleziony.</div>;
    }

    const isHorizontal = (pic: ImageType) => pic.width > pic.height;

    const additionalImages: ImageType[] = (project.additionalImages || [])
        .filter((pic): pic is StaticImageData => !!pic) // Usuwa undefined
        .map((pic) => ({
            src: typeof pic === 'object' && 'src' in pic ? pic.src : '',
            width: pic?.width || 0,
            height: pic?.height || 0,
        }))
        .filter((img): img is ImageType => img.src !== '');

    return (
        <div className="text-center bg-white">
            <div className="sticky top-0 mix-blend-difference z-50 h-8 mb-5">
                <NavBar stillOrMoving={2} intro={1} />
                <ContactBioBar intro={1} underline={0} />
            </div>

            <div
                className="w-full h-full left-0 top-0 border-none shadow-none"
                suppressHydrationWarning={true}
            >
                <div className={`grid gap-2 bg-white sm:grid-cols-3 sm:w-9/12 grid-cols-1 mx-auto`}>
                    {additionalImages.map((pics, idx) => (
                        <div
                            key={pics.src}
                            className={isHorizontal(pics) ? 'col-span-2 px-2 sm:px-0' : 'col-span-1'}
                        >
                            <Image
                                src={pics.src}
                                alt="placeholder"
                                loading="lazy"
                                className={`transition duration-150 ${
                                    isMobile ? '' : 'hover:opacity-75 cursor-pointer'
                                } border-none w-full`}
                                width={pics.width}
                                height={pics.height}
                                onClick={() => {
                                    if (!isMobile) {
                                        lightboxRef.current?.openGallery(idx);
                                    }
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Render LightGalleryComponent only on desktops */}
                {!isMobile && (
                    <LightGalleryComponent
                        onInit={(ref) => {
                            if (ref) {
                                lightboxRef.current = ref.instance;
                            }
                        }}
                        speed={500}
                        dynamic
                        download={false}
                        dynamicEl={additionalImages.map((allImg) => ({
                            src: allImg.src,
                        }))}
                    />
                )}
            </div>

            {/* Kredyty z dynamicznym marginesem */}
            {project.credits && (
                <div className={`z-50 fixed bottom-0 left-1/2 transform -translate-x-1/2 sm:w-9/12  w-full sm:px-0 px-4 text-sm sm:text-2xl mb-0 sm:mb-2 font-customMedium mix-blend-difference text-black dark:text-white ${isInstagram ? 'mb-[9px]' : 'mb-0'}`}>
                    {project.credits}
                </div>
            )}

            {/* Logo bezpośrednio pod ostatnim zdjęciem */}
            <div className="flex justify-center">
                <Link href={'/'}>
                    <Image src={logo} alt="logo" width={140} height={140} className="mb-2" />
                </Link>
            </div>
        </div>
    );
}
