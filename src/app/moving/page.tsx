"use client"
import Head from 'next/head';
import NavBar from './../components/NavBar';
import BottomTitles from './../components/BottomTittles';
import ProjectContent from './../components/ProjectContent';

import Image from 'next/image';

import DJ1 from './../../../public/still/DOCUMENT_JOURNAL/jpeg-optimizer_01.jpg'
import DJ2 from './../../../public/still/DOCUMENT_JOURNAL/jpeg-optimizer_03.jpg'

import HUM from './../../../public/moving/HUMAN-ezgif.com-optimize.gif'

import CIH from './../../../public/moving/CICHOengnew-ezgif.com-optimize.gif'

import ADID from "./../../../public/moving/adidas_-_members_week2160p-ezgif.com-optimize.gif"

import TMB from "./../../../public/moving/1586_Tmobile_TNK_Nawijka_30s_sub_eng_BIG-ezgif.com-optimize.gif"
import ContactBioBar from '../components/ContactBioBar';

const projects = [
    {
        id: 1,
        title: 'CICHO',
        content: (
            <div className="flex items-center justify-center">
                <Image src={CIH} alt="gifcih" className='sm:mb-32 mb-4 w-screen'/>
            </div>
        ),
    }, {
        id: 2,
        title: 'HUMAN',
        content: (
            <div className="flex items-center justify-center h-40">
                <div className="grid grid-cols-2 mt-80 sm:py-20">
                    <Image src={HUM} alt="gif1" className="py-2 px-2" />
                    <Image src={HUM} alt="gif2" className="py-2 px-2" />
                    <Image src={HUM} alt="gif3" className="py-2 px-2" />
                    <Image src={HUM} alt="gif4" className="py-2 px-2" />
                </div>
            </div>
        ),

    }, {
        id: 3,
        title: "ADIDAS MEMBERS WEEK",
        content: (
            <div className='flex items-center justify-center'>
                <Image src={ADID} alt="adid" className='sm:py-40 mt-72 py-2 w-screen'/>
            </div>
        ),


    }, {
        id: 4,
        title: "TMOBILE",
        content: (
            <div className='flex items-center justify-center'>
                <Image src={TMB} alt="tmb" className='w-90%'/>
            </div>
        )
    }



];




const Page = () => {
    return (
        <div className='bg-white'>

            <NavBar stillOrMoving={1} intro={1} />
            <ProjectContent projects={projects} />
            <BottomTitles projects={projects} moving={1}/>
            <ContactBioBar intro={1}/>

        </div>
    );
};

export default Page;
