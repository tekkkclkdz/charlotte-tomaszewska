import React from 'react';
import Image from 'next/image';
import bio from "./../../../public/StillProjects/biography_charlotte_con.webp";
import NavBar from '../components/NavBar2';
import ContactBioBar from '../components/ContactBioBar';
import logo from "./../../../public/logo_top2.png";

const Page = () => {
  return (
    <>
      <div className="bg-black h-[100dvh] overflow-hidden flex flex-col justify-between">
        <NavBar stillOrMoving={2} intro={1} />
        <ContactBioBar intro={1} underline={1} />

        {/* Główna zawartość */}
        <div className="flex-grow flex flex-col items-center justify-center text-center text-white">
          <p className="text-base md:text-1xl lg:text-2xl font-customThin px-12 sm:w-[70%] w-[80%] sm:text-justify md:text-center">
            Hey Love, 
            <span className="inline sm:inline"><br /></span>
            One sentence about me? 
            <span className=""><br /></span>

            A Montreal-born, Warsaw-raised, Paris-based stylist – available to travel worldwide – 
            <span className="hidden md:hidden sm:inline lg:inline"><br /></span> 
            {` `}with a love and appreciation for bold fashion and personal cinematic voices. 
            <span className=""><br /></span>

            But is it even possible to capture the essence of a person in just one sentence? 
            <span className=""><br /></span>

            For more sentences feel free to reach out.
          </p>
        </div>

        {/* Logo */}
        <div className="absolute bottom-3 left-0 right-0 w-full flex items-center justify-center">
          <Image src={logo} alt="logo" className="w-[30%] sm:w-[15%] md:w-[8%] lg:w-[15%]" />
        </div>
      </div>
    </>
  );
};

export default Page;