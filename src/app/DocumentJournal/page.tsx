'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import NavBar from '@/app/components/NavBar2';
import logo from './../../../public/char 05 black.jpg';
import Link from 'next/link';
import ContactBioBar from '@/app/components/ContactBioBar';


import Ivan_pic from "./../../../public/Document_renamed/Ivan_pic.webp";
import IvanText1 from "./../../../public/Document_renamed/IvanText1.webp";
import IvanText2 from "./../../../public/Document_renamed/IvanText2.webp";
import IvanText3 from "./../../../public/Document_renamed/IvanText3.webp";

import MargaritaText1 from "./../../../public/Document_renamed/MargaritaText1.webp";
import MargaritaText2 from "./../../../public/Document_renamed/MargaritaText2.webp";
import MargaritaText3 from "./../../../public/Document_renamed/MargaritaText3.webp";
import Margarita_pic from "./../../../public/Document_renamed/Margarita_pic.webp";

import OlaText1 from "./../../../public/Ola_resized2/08 2 copy444_con.webp";
import OlaText2 from "./../../../public/Ola_resized2/08 2 copy793243_con.webp";
import OlaText3 from "./../../../public/Ola_resized2/08 2 copy7927392_con.webp";
import Ola_pic from "./../../../public/Ola_resized2/08 2_con.webp";

import StanislavText1 from "./../../../public/Document_renamed/StanislavText1.webp";
import StanislavText2 from "./../../../public/Document_renamed/StanislavText2.webp";
import StanislavText3 from "./../../../public/Document_renamed/StanislavText3.webp";
import Stanislav_pic from "./../../../public/Document_renamed/Stanislav_pic.webp";

import T1_pic from './../../../public/still/DOCUMENT_JOURNAL/jpeg-optimizer_01.jpg';
import T1 from "./../../../public/Document_renamed/T1.webp";
import T2 from "./../../../public/Document_renamed/T2.webp";
import T3 from "./../../../public/Document_renamed/T3.webp";

import TarasText1 from "./../../../public/Document_renamed/TarasText1.webp";
import TarasText2 from "./../../../public/Document_renamed/TarasText2.webp";
import Taras_pic from "./../../../public/Document_renamed/Taras_pic.webp";

import VladText1 from "./../../../public/Document_renamed/VladText1.webp";
import VladText2 from "./../../../public/Document_renamed/VladText2.webp";
import Vlad_pic from "./../../../public/Document_renamed/Vlad_pic.webp";

import YuriiText1 from "./../../../public/Document_renamed/YuriiText1.webp";
import YuriiText2 from "./../../../public/Document_renamed/YuriiText2.webp";
import Yurii_pic from "./../../../public/Document_renamed/Yurii_pic.webp";

import ZeniaText1 from "./../../../public/Document_renamed/ZeniaText1.webp";
import ZeniaText2 from "./../../../public/Document_renamed/ZeniaText2.webp";
import ZeniaText3 from "./../../../public/Document_renamed/ZeniaText3.webp";
import Zenia_pic from "./../../../public/Document_renamed/Zenia_pic.webp";

import ZoiText1 from "./../../../public/Document_renamed/ZoiText1.webp";
import ZoiText2 from "./../../../public/Document_renamed/ZoiText2.webp";
import ZoiText3 from "./../../../public/Document_renamed/ZoiText3.webp";
import Zoi_pic from "./../../../public/Document_renamed/Zoi_pic.webp";

import CustomCursor from '../components/CustomCursor';


const people = [
  {
    name: "T1",
    pic: T1_pic,
    texts: [T1, T2, T3],
  },
  {
    name: "Stanislav",
    pic: Stanislav_pic,
    texts: [StanislavText1, StanislavText2, StanislavText3],
  },
  {
    name: "Taras",
    pic: Taras_pic,
    texts: [TarasText1, TarasText2],
  },
  {
    name: "Zenia",
    pic: Zenia_pic,
    texts: [ZeniaText1, ZeniaText2, ZeniaText3],
  },
  {
    name: "Zoi",
    pic: Zoi_pic,
    texts: [ZoiText1, ZoiText2, ZoiText3],
  },
  {
    name: "Yurii",
    pic: Yurii_pic,
    texts: [YuriiText1, YuriiText2],
  },
  {
    name: "Ola",
    pic: Ola_pic,
    texts: [OlaText2, OlaText1, OlaText3],
  },
  {
    name: "Vlad",
    pic: Vlad_pic,
    texts: [VladText1, VladText2],
  },
  {
    name: "Margarita",
    pic: Margarita_pic,
    texts: [MargaritaText1, MargaritaText2, MargaritaText3],
  },
];

const ivan = {
  pic: Ivan_pic,
  texts: [IvanText1, IvanText2, IvanText3],
};


export default function ProjectDetail() {
  const [currentIndexes, setCurrentIndexes] = useState<number[]>(
    people.map(() => 0) // Initialize index for each person
  );

  const [ivanTextIndex, setIvanTextIndex] = useState<number>(0); // Track Ivan's text index

  const handleImageClick = (index: number) => {
    setCurrentIndexes((prev) =>
      prev.map((current, i) => (i === index ? (current + 1) % people[index].texts.length : current))
    );
  };

  const handleIvanTextClick = () => {
    setIvanTextIndex((prev) => (prev + 1) % ivan.texts.length);
  };

  return (
    <div className="text-center bg-white">
      <div className="hidden sm:block">
        <CustomCursor />
      </div>
      <div className="sticky top-0 mix-blend-difference z-50 h-8 mb-5">
        <NavBar stillOrMoving={2} intro={1} />
        <ContactBioBar intro={1} underline={0} />
      </div>

      <div className="block sm:hidden text-lg font-customThin text-black mb-4 px-4">
        <p>click on the text to read more</p>
      </div>

      <div className="w-full h-full left-0 top-0 border-none shadow-none">
        {/* Grid dla całej strony */}
        <div className="grid grid-cols-2 sm:grid-cols-2  gap-1 sm:gap-4 mx-auto sm:w-9/12">
          {/* Kolumna zdjęć */}
          <div className="sm:space-y-4 space-y-1">
            {people.map((person, index) => (
              <div key={index}>
                <Image
                  src={person.pic}
                  alt={`${person.name} Picture`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Kolumna tekstów */}
          <div className="sm:space-y-4 space-y-1">
            {people.map((person, index) => (
              <div
                key={index}
                className="relative group cursor-custom"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={person.texts[currentIndexes[index]]}
                  alt={`${person.name} Text ${currentIndexes[index] + 1}`}
                  className="w-full h-auto "
                />
                {/* Overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black bg-opacity-80">
                  <span className="text-white text-lg">click to read more...</span>
                </div> */}
              </div>
            ))}
          </div>

          {/* Ivan - pełna szerokość */}
          <div className="col-span-2">
  <Image 
    src={ivan.pic} 
    alt="Ivan Picture" 
    className="w-full h-auto" 
  />
</div>
<div
  className="col-span-2 relative group cursor-custom"
  onClick={handleIvanTextClick}
>
  <div className="w-full h-auto overflow-hidden sm:h-screen">
    <Image
      src={ivan.texts[ivanTextIndex]}
      alt={`Ivan Text ${ivanTextIndex + 1}`}
      className="w-full h-full sm:object-cover object-contain transition-opacity duration-300"
    />
  </div>
</div>
  {/* Overlay */}
  <div className="absolute inset-0 flex items-center justify-center">
    {/* Overlay content can go here if needed */}
  </div>

        </div>
      </div>

     
  <div className="z-50 fixed bottom-0 left-1/2 transform -translate-x-1/2 sm:w-9/12  w-full sm:px-0 px-4 text-sm sm:text-2xl mb-0 sm:mb-2 font-light mix-blend-difference text-black dark:text-white">
  photographed by maksym rudnik, creative concept & art direction charlotte tomaszewska
  </div>


      {/* Logo bezpośrednio pod ostatnim zdjęciem */}
      <div className="flex justify-center">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={140} height={140} className='mb-2'/>
        </Link>
      </div>
    </div>
  );
}