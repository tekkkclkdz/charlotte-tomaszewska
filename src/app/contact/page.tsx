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
      <ContactBioBar intro={1} underline={2}/>

      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        {/* Container for the text */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-light">charlotte.tomaszewska@gmail.com</h1>
          <Link href="https://www.instagram.com/charlottetomas/" className="text-white text-2xl py-12 font-light hover:underline">
            @charlottetomas
          </Link>
          <h1 className="text-2xl font-light">+48 692 209 198</h1>
          <h1 className="text-2xl font-light">+33 749 483 878</h1>
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