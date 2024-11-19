import React from 'react';
import Image from 'next/image';
import bio from "./../../../public/StillProjects/biography_charlotte_con.webp";
import NavBar from '../components/NavBar2';
import ContactBioBar from '../components/ContactBioBar';
import logo from "./../../../public/logo_top2.png";

const Page = () => {
  return (
    <div className='bg-black'>
      <NavBar stillOrMoving={2} intro={1} />
      <ContactBioBar intro={1} underline={1} />

      <div className="flex flex-col items-center justify-center  bg-black text-white h-[calc(100svh)]">
        {/* Container for the text */}
        <div className="flex flex-col items-center justify-center text-center h-full mt-8 sm:mt-40">
          <p className="text-sm sm:text-2xl font-light">
            Working in the fashion and film industry, for over a <br />
            decade, I have learned that the image or the outfit <br />
            may tell you a certain story. I believe that while selling <br />
            clothes, we can make people dialogue with each <br />
            other. Especially nowadays, when it is so needful…
          </p>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <Image src={logo} alt="logo" className='w-1/4 sm:w-[12%]' />
        </div>
      </div>
    </div>
  );
};

export default Page;