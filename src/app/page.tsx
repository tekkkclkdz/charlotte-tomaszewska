import React from 'react';
import Head from 'next/head';
import NavBar from './components/NavBar';
import BottomTitles from './components/BottomTittles';
import ProjectContent from './components/ProjectContent';
import ContactBioBar from './components/ContactBioBar'; // Import komponentu ContactBioBar
import MovingContent from './components/MovingContent'

import Image from 'next/image';
import Link from 'next/link';

import DJ1 from './../../public/still/DOCUMENT_JOURNAL/jpeg-optimizer_01.jpg'
import DJ2 from './../../public/still/DOCUMENT_JOURNAL/jpeg-optimizer_02.jpg'

import NO1 from './../../public/still/newonce/jpeg-optimizer_1_done.jpg'
import NO2 from './../../public/still/newonce/jpeg-optimizer_2_done.jpg'
import NO3 from './../../public/still/newonce/jpeg-optimizer_3_done.jpg'
import NO4 from './../../public/still/newonce/jpeg-optimizer_4_done.jpg'
import NO5 from './../../public/still/newonce/jpeg-optimizer_5_done.jpg'
import NO6 from './../../public/still/newonce/jpeg-optimizer_6_done.jpg'

import MS1 from './../../public/still/kevin_drelon/jpeg-optimizer_Moon Shadow0268 1.jpg'
import MS2 from './../../public/still/kevin_drelon/jpeg-optimizer_Moon Shadow0299.jpg'
import MS3 from './../../public/still/kevin_drelon/jpeg-optimizer_Moon Shadow0396.jpg'

import EN1 from './../../public/still/ENORA/jpeg-optimizer__P3A9212.jpg'
import EN2 from './../../public/still/ENORA/jpeg-optimizer__P3A9242.jpg'
import EN3 from './../../public/still/ENORA/jpeg-optimizer__P3A9446.jpg'

import JAN1 from './../../public/still/JAN_F_CHODOROWICZ/05.jpg'

import RES1 from "./../../public/still/rest_is_rust/jpeg-optimizer_01-kopia 2.jpg"
import RES2 from "./../../public/still/rest_is_rust/jpeg-optimizer_8b.jpg"

import logo from "./../../public/2_0013-min.webp"

import  { stillProjects }  from "./stillProjects"
import Footer from './components/Footer';





const Page = () => {
  return (
    <div className='bg-black'>
      <div className='bg-white h-16 w-full'></div>
      <NavBar stillOrMoving={0} intro={0} />
      <ContactBioBar intro={0} underline={0}/> {/* Dodajemy komponent ContactBioBar */}
    
        <ProjectContent projects={stillProjects} /> 
   
    
      
      {/* <MovingContent projects={movingProjects} /> */}
      
      {/* <BottomTitles projects={projects} moving={0}/> */}
    
               
 
    </div>
  );
};

export default Page;