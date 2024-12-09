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
        <div className="flex flex-col items-center justify-center text-center h-full ">
          <p className="text-xs md:text-1xl lg:text-2xl font-light px-12">
            Hey Love, <br/>
            One sentence about me? <br/>

            A Montreal-born, Warsaw-raised, Paris-based stylist – available to travel worldwide – <br/> with a love and appreciation for bold fashion and personal cinematic voices. <br/>

            But is it even possible to capture the essence of a person in just one sentence? <br/>


            For more sentences feel free to reach out.
          </p>
        </div>

        {/* Logo */}
        <div className="fixed bottom-0 w-full flex items-center justify-center">
        <Image src={logo} alt="logo" className="w-[30%] sm:w-[15%] md:w-[8%] lg:w-[20%]" />
      </div>
      </div>
    </div>
  );
};

export default Page;