import React from 'react';
import Head from 'next/head';
import NavBar from './components/NavBar';
import BottomTitles from './components/BottomTittles';
import ProjectContent from './components/ProjectContent';
import ContactBioBar from './components/ContactBioBar'; // Import komponentu ContactBioBar
import MovingContent from './components/MovingContent'



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