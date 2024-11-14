"use client"
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

import { stillProjects } from "./../../../stillProjects";

import NavBar from '@/app/components/NavBar'; // Importing NavBar

import logo from "./../../../../../public/charlotte heart black.png";
import Link from 'next/link';

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
};

export default function ProjectDetail({ params }: { params: Params }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const lightboxRef = useRef<LightGallery | null>(null);
  const { id } = params;

  const project = stillProjects.find((project) => project.id === parseInt(id, 10));

  const isGif = (pic: ImageType) => pic.src.endsWith('.gif');
  
  // Function to determine if the image is horizontal
  const isHorizontal = (pic: ImageType) => pic.width > pic.height;

  if (!project) {
    return <div>Projekt nie został znaleziony.</div>;
  }

  return (
    <div className="p-4 text-center bg-white">
  {/* Container for Navbar and Logo */}
  <div className="sticky top-0 mix-blend-difference z-50 ">
    <NavBar stillOrMoving={0} intro={1} />
  </div>
  <div className="flex justify-center">
    <Link href={"/"}>
      <Image src={logo} alt="logo" width={120} height={120} />
    </Link>
  </div>
  {/* Project Content */}
  <div className="w-full h-full left-0 top-0 border-none shadow-none" suppressHydrationWarning={true}>
    {/* Grid container with conditional width using sm: classes */}
    <div className={`grid gap-2 bg-white sm:grid-cols-2 sm:w-9/12 grid-cols-1 mx-auto`}>
      {project.additionalImages?.map((pics, idx) => (
        <div
          key={pics.src}
          className={isHorizontal(pics) ? 'col-span-2' : 'col-span-1'}
        >
          <Image
            src={pics.src}
            alt="placeholder"
            loading="lazy"
            className="transition duration-150 hover:opacity-75 cursor-pointer my-2 border-none w-full"
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
      plugins={[lgZoom, lgThumbnail]}
      dynamic
      download={false}
      dynamicEl={project.additionalImages?.map((allImg) => ({
        src: allImg.src,
      }))}
    />
  </div>
</div>
  );
}