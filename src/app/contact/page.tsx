import React from 'react';
import Image from 'next/image';
import bio from "./../../../public/StillProjects/biography_charlotte_con.webp";
import NavBar from '../components/NavBar2';
import ContactBioBar from '../components/ContactBioBar';
import logo from "./../../../public/logo_top.png";
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <NavBar stillOrMoving={2} intro={1} />
      <ContactBioBar intro={1} underline={2} />

      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        {/* Container for the text */}
        <div className="flex flex-col items-center justify-center text-center">

        <h1 className="text-2xl font-light py-12">call me under +48 692 209 198</h1>
          <Link
            href="mailto:charlotte.tomaszewska@gmail.com"
            className="text-white text-2xl font-light hover:underline"
          >
            write me under charlotte.tomaszewska@gmail.com
          </Link>
          <Link
            href="https://www.instagram.com/charlottetomas/"
            className="text-white text-2xl py-12 font-light hover:underline"
            target="_blank" // Otwórz w nowej karcie
            rel="noopener noreferrer" // Bezpieczny link
          >
            watch me under @charlottetomas
          </Link>
          
          
        </div>

        {/* Logo - positioned at the bottom */}
        <div className="absolute bottom-0 mb-2 flex items-center justify-center w-full">
          <Image src={logo} alt="logo" className="w-[12%]" />
        </div>
      </div>
    </div>
  );
};

export default Page;