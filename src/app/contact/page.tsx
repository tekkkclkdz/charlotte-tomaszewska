import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar2';
import ContactBioBar from '../components/ContactBioBar';
import logo from "./../../../public/logo_top.png";
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-black text-base md:text-1xl lg:text-2xl h-[100dvh] flex flex-col overflow-hidden">
      {/* Navigation Bar */}
      <NavBar stillOrMoving={2} intro={1} />

      {/* Contact Bio Bar */}
      <ContactBioBar intro={1} underline={2} />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center  sm:mt-0">
        <h1 className="font-customThin py-12 text-white">
          call me under +48 692 209 198
        </h1>

        {/* Email link */}
        <p className="font-customThin text-white">
          write me under{' '}
          <span className="block sm:inline">
            <Link
              href="mailto:charlotte.tomaszewska@gmail.com"
              className="hover:underline"
            >
              charlotte.tomaszewska@gmail.com
            </Link>
          </span>
        </p>

        {/* Instagram link */}
        <p className="font-customThin text-white py-12">
          watch me under{' '}
          <Link
            href="https://www.instagram.com/charlottetomas/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @charlottetomas
          </Link>
        </p>
      </div>

      {/* Sticky Logo */}
      <div className="absolute bottom-3 left-0 right-0 w-full flex items-center justify-center">
        <Image src={logo} alt="logo" className="w-[25%] sm:w-[8%] md:w-[8%] lg:w-[10%]" />
      </div>
    </div>
  );
};

export default Page;