import React from 'react';
import Image from 'next/image';
import bio from "./../../../public/StillProjects/biography_charlotte_con.webp";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-light text-1xl bg-white text-black">
      {/* Container for the text */}
      <div className="h-1/4 flex items-center justify-center">
        <p className="text-center">
          Working in the fashion and film industry, for over a decade, I have learned that the image or the outfit may tell you a certain story.
          <br />
          I believe that while selling clothes, we can make people dialogue with each other. Especially nowadays, when it is so needful…
        </p>
      </div>
      
      {/* Image component */}
      <div className="flex justify-center h-1/2">
        <Image 
          src={bio} 
          alt="Biography of Charlotte" 
          className="object-contain"
          layout="intrinsic" // or "responsive" depending on your layout preference
        />
      </div>
    </div>
  );
};

export default Page;