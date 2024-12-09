import React from 'react';
import Image from 'next/image';
import bio from "./../../../public/StillProjects/biography_charlotte_con.webp";
import NavBar from '../components/NavBar2';
import ContactBioBar from '../components/ContactBioBar';
import logo from "./../../../public/logo_top.png";
import Link from 'next/link';

const Page = () => {
  return (
    <div className='bg-black'>
      <NavBar stillOrMoving={2} intro={1} />
      <ContactBioBar intro={1} underline={2} />

      <div className="flex flex-col items-center justify-center text-center bg-black w-full h-screen">
  <h1 className="text-2xl font-light py-12">call me under +48 692 209 198</h1>
  
  {/* Email link */}
  <p className="text-2xl font-light text-white">
    write me under{' '}
    <Link
      href="mailto:charlotte.tomaszewska@gmail.com"
      className="hover:underline"
    >
      charlotte.tomaszewska@gmail.com
    </Link>
  </p>
  
  {/* Instagram link */}
  <p className="text-2xl font-light text-white py-12">
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
        {/* Logo - positioned at the bottom */}
        <div className="absolute bottom-0 mb-2 flex items-center justify-center w-full">
          <Image src={logo} alt="logo" className="w-[12%]" />
        </div>
      </div>
  
  );
};

export default Page;