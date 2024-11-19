'use client';

import { useEffect, useState, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Masonry from 'react-masonry-css';

import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { stillProjects } from './../../../stillProjects';
import NavBar from '@/app/components/NavBar2'; // Importing NavBar

import logo from './../../../../../public/charlotte heart black.png';
import Link from 'next/link';

import ContactBioBar from '@/app/components/ContactBioBar';

type Params = {
  id: string;
};

type ImageType = {
  src: string;
  width: number;
  height: number;
};

type ProjectType = {
  id: number;
  title: string;
  content: JSX.Element;
  additionalImages?: ImageType[];
  credits?: string; // Optional field for credits
};

export default function ProjectDetail({ params }: { params: Params }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const lightboxRef = useRef<LightGallery | null>(null);
  const { id } = params;

  const project = stillProjects.find((project) => project.id === parseInt(id, 10));

  const isGif = (pic: ImageType) => pic.src.endsWith('.gif');

  const isHorizontal = (pic: ImageType) => pic.width > pic.height;

  if (!project) {
    return <div>Projekt nie został znaleziony.</div>;
  }

  const additionalImages: ImageType[] = (project.additionalImages || []).filter(
    (pic): pic is ImageType => !!pic && 'src' in pic && 'width' in pic && 'height' in pic
  );

  return (
    <div className="text-center bg-white">
      <div className="sticky top-0 mix-blend-difference z-50 h-8 mb-5">
        <NavBar stillOrMoving={0} intro={1} />
        <ContactBioBar intro={1} underline={0}/>
      </div>

      <div className="w-full h-full left-0 top-0 border-none shadow-none" suppressHydrationWarning={true}>
        <div className={`grid gap-2 bg-white sm:grid-cols-2 sm:w-9/12 grid-cols-1 mx-auto`}>
          {additionalImages.map((pics, idx) => (
            <div
              key={pics.src}
              className={isHorizontal(pics) ? 'col-span-2 px-2 sm:px-0' : 'col-span-1'}
            >
              <Image
                src={pics.src}
                alt="placeholder"
                loading="lazy"
                className="transition duration-150 hover:opacity-75 cursor-pointer border-none w-full"
                width={pics.width}
                height={pics.height}
                onClick={() => {
                  lightboxRef.current?.openGallery(idx);
                }}
              />
            </div>
          ))}
        </div>

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
      </div>

      <div className="flex justify-center">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={140} height={140} />
        </Link>
      </div>
      <div className='h-20 bg-white'/>

     

      {/* Display credits at the bottom */}
      {project.credits && (
        <div className="z-50 fixed bottom-0 left-0 w-full sm:px-0 px-4 text-2xl sm:text-4xl mb-0 sm:mb-2 font-light mix-blend-difference text-black dark:text-white">
          {project.credits}
        </div>
      )}
    </div>
  );
}