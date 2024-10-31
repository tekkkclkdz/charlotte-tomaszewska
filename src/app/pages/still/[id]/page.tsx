"use client";
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Masonry from 'react-masonry-css';

import { useRef } from 'react';

import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { stillProjects } from "./../../../stillProjects";

type Params = {
  id: string; // lub number, jeśli id jest liczbą
};

type ImageType = {
  src: string; // Ścieżka do obrazka
};

type ProjectType = {
  id: number; // Zakładam, że id jest liczbą
  title: string; // Tytuł projektu
  content: JSX.Element; // Element JSX jako zawartość
  additionalImages?: StaticImageData; // Tablica obrazków
};




export default function ProjectDetail({ params }: { params: Params }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const breakpointCols = isMobile ? 1 : 2;

  const lightboxRef = useRef<LightGallery | null>(null);
  const { id } = params;

  const project = stillProjects.find((project) => project.id === parseInt(id, 10));

  // Sprawdzanie, czy plik jest GIF-em
  const isGif = (pic: ImageType) => {
    return pic.src.endsWith('.gif');
  };

  if (!project) {
    return <div>Projekt nie został znaleziony.</div>; // Możesz zwrócić coś innego w razie braku projektu
  }



  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <div className="absolute w-full h-full left-0 top-0" suppressHydrationWarning={true}>
        <Masonry className="flex gap-2 bg-white" breakpointCols={breakpointCols}>
          {project.additionalImages?.map((pics, idx) => (
            <Image
              key={pics.src}
              src={pics}
              alt="placeholder"
              loading="lazy"
              className="static transition duration-150 hover:opacity-75 cursor-pointer my-2"
              placeholder={!isGif(pics) ? "blur" : undefined} // Only set placeholder if not GIF
              onClick={() => {
                lightboxRef.current?.openGallery(idx);
              }}
            />
          ))}
        </Masonry>

        <LightGalleryComponent
          onInit={(ref) => {
            if (ref) {
              lightboxRef.current = ref.instance;
            }
          }}
          speed={500}
          plugins={[]}
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