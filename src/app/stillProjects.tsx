import Image from 'next/image';
import Link from 'next/link';

import DJ1 from './../../public/still/DOCUMENT_JOURNAL/jpeg-optimizer_01.jpg';
import DJ2 from './../../public/still/DOCUMENT_JOURNAL/jpeg-optimizer_02.jpg';
import DJ3 from './../../public/still/DOCUMENT_JOURNAL/jpeg-optimizer_03.jpg'
import NO1 from './../../public/still/newonce/jpeg-optimizer_1_done.jpg';
import NO2 from './../../public/still/newonce/jpeg-optimizer_2_done.jpg';
import NO3 from './../../public/still/newonce/jpeg-optimizer_3_done.jpg';
import NO4 from './../../public/still/newonce/jpeg-optimizer_4_done.jpg';
import NO5 from './../../public/still/newonce/jpeg-optimizer_5_done.jpg';
import NO6 from './../../public/still/newonce/jpeg-optimizer_6_done.jpg';
import NO7 from './../../public/still/newonce/IMG_20230627_134348_00_079copy_1_1_1-ezgif.com-video-to-gif-converter.gif';
import NO8 from './../../public/still/newonce/IMG_20230627_182850_00_152_1_12-ezgif.com-video-to-gif-converter.gif';
import NO9 from './../../public/still/newonce/IMG_20230627_182850_00_152_22-ezgif.com-video-to-gif-converter.gif';

import GRAJP from './../../public/MIKOLAJZUREKunnamed-6.jpg'

import MS1 from './../../public/still/kevin_drelon/jpeg-optimizer_Moon Shadow0268 1.jpg';
import MS2 from './../../public/still/kevin_drelon/jpeg-optimizer_Moon Shadow0299.jpg';
import MS3 from './../../public/still/kevin_drelon/jpeg-optimizer_Moon Shadow0396.jpg';
import EN1 from './../../public/still/ENORA/jpeg-optimizer__P3A9212.jpg'
import EN2 from './../../public/still/ENORA/jpeg-optimizer__P3A9242.jpg';
import EN3 from './../../public/still/ENORA/jpeg-optimizer__P3A9446.jpg';
import JAN1 from './../../public/still/JAN_F_CHODOROWICZ/02.jpg';
import JAN2 from './../../public/still/JAN_F_CHODOROWICZ/07.jpg';
import JAN3 from './../../public/still/JAN_F_CHODOROWICZ/08.jpg';

import JAN9 from './../../public/still/JAN_F_CHODOROWICZ/09.jpg';
import RES1 from './../../public/still/rest_is_rust/jpeg-optimizer_01-kopia 2.jpg';
import RES2 from './../../public/still/rest_is_rust/jpeg-optimizer_8b.jpg';

import JAN from './../../public/01.jpg';
import AVE1 from './../../public/2_0013-min.webp';
import LE3 from './../../public/3.jpeg';
import LE8 from './../../public/8.jpeg';
import PAR11 from './../../public/11-ParisianThaw-print-_1_-copy-min.webp';
import PAR12 from './../../public/12-ParisianThaw-print-_6_-min.webp';
import PAR13 from './../../public/13 ParisianThaw print (7)-min.webp';
import DUB from './../../public/230106_CHT_0403.webp';
import AVE2 from './../../public/Alberto303_0824_120-_2_-min.webp';
import ANA from './../../public/ANASTAZJA (1).webp';
import cha from './../../public/char 05 black.jpg';
import chaHand from './../../public/charlotte_handwritting.png';
import MAT from './../../public/MATIGRZELAK_ARCHIVESFUTURES (4)-min.webp';
import MAT17 from './../../public/MATIGRZELAK_ARCHIVESFUTURES (17)-min.webp';
import MATmi from './../../public/MATIGRZELAK_ARCHIVESFUTURES-min.webp';
import Moo1 from './../../public/Moon Shadow0351 2-min.webp';
import Moo2 from './../../public/Moon Shadow0553 2-min.webp';
import nex from './../../public/next.svg';
import PLA from './../../public/PLANETA (4)-min.webp';
import PLA11 from './../../public/PLANETA (11)-min.webp';

import JAN22 from "./../../public/portfolio_charlotte_tomaszewska_compressed.jpg"

import kmagobl4 from "./../../public/kmab-obl(need compressed)/04.jpg"
import kmagobl08 from "./../../public/kmab-obl(need compressed)/08 2.jpg"
import kmagobl02 from "./../../public/kmab-obl(need compressed)/022.jpg"

import WAW1 from "./../../public/warszawa_w_budowie_01 copyasasa-min.jpg"
import WAW2 from "./../../public/warszawa_w_budowie_02 copyasasas-min.jpg"
import WAW3 from "./../../public/warszawa_w_budowie_08 copydsdsds-min.jpg"

import SZ1 from "./../../public/SZCZYL 2023 fot Tatiana + Karol  dodatkowe8 copy-min.jpg"
import SZ2 from "./../../public/SZCZYL 2023 fot Tatiana + Karol 18.jpg"

import NEWWAW from "./../../public/warszawa01-min.jpg"

import REST1 from "./../../public/restisrust/jpeg-optimizer_01.jpeg"
import REST2 from "./../../public/restisrust/jpeg-optimizer_2b.jpeg"
import REST3 from "./../../public/restisrust/jpeg-optimizer_8b.jpeg"

import LEB1 from "./../../public/LEBRAND/3.jpeg"
import LEB2 from "./../../public/LEBRAND/8.jpeg"


export const projects = [
  {
    id: 1, title: 'KMAG OBLIVIUM', content: (
        <div className="flex">
          <div className="w-screen sm:w-1/2  sm:py-6">
            <a href='lol'>
              <Image src={kmagobl02} className="w-100%" alt="pic1" loading="lazy"/>
            </a>
          </div>
          <div className="sm:flex hidden w-1/2 px-8 sm:py-6">
          <Image src={kmagobl4} className="w-full" alt="pic2" loading="lazy"/>
        </div>
      </div>
      
    ),
  },
  { id: 2, title: 'LOVE MAGAZINE', content: (
    <div>
    <div className="w-screen">
      <Image src={JAN} className="w-full" alt="pic1" loading="lazy"/>
    </div>
  </div>
)},
{ id: 3, title: 'DOCUMENT JOURNAL', content: (
  <div className="flex flex-wrap lg:flex-nowrap">
<div className="w-1/3 px-8 hidden sm:block">
  <Image src={DJ1} className="w-full" alt="pic1" loading="lazy"/>
</div>
<div className="w-1/3 px-8 hidden sm:block">
  <Image src={DJ2} className="w-full" alt="pic2" loading="lazy"/>
</div>
<div className="w-full lg:w-1/3 sm:px-8 sm:hidden lg:block">
  <Image src={DJ3} className="w-full" alt="pic3" loading="lazy"/>
</div>
</div>
), },
{
  id: 4, title: 'LEBRAND', content: (
      <div className="flex">
        <div className="w-screen sm:w-1/2 ml-40 sm:px-0 sm:py-6">
          <a href='lol'>
            <Image src={LEB1} className="w-100%" alt="pic1" loading="lazy"/>
          </a>
        </div>
        <div className="sm:flex hidden w-100% sm:py-6">
        <Image src={LEB2} className="w-full" alt="pic2" loading="lazy"/>
      </div>
    </div>
    
  ),
},
    { id: 5, title: 'ARCHIVES FUTURE', content: (
      <div className="flex">
            <div className="w-screen sm:w-1/2  sm:py-6">
              <a href='lol'>
                <Image src={MAT} className="w-100%" alt="pic1" loading="lazy"/>
              </a>
            </div>
            <div className="sm:flex hidden w-1/2 px-8 sm:py-6">
            <Image src={MAT17} className="w-full" alt="pic2" loading="lazy"/>
          </div>
        </div>
    ), },
    { id: 6, title: '303AVENUE', content: (
      <div className="flex">
            <div className="w-screen sm:w-1/2  sm:py-6">
              <a href='lol'>
                <Image src={AVE1} className="w-100%" alt="pic1" loading="lazy"/>
              </a>
            </div>
            <div className="sm:flex hidden w-1/2 px-8 sm:py-6">
            <Image src={AVE2} className="w-full" alt="pic2" loading="lazy"/>
          </div>
        </div>
    ), },
    { id: 7, title: 'NEWONCE', content: (
  <div>
    <div className="w-screen">
      <Image src={NO7} className="w-full" alt="pic1" loading="lazy"/>
    </div>
    <div className="sm:grid grid-rows-3 justify-center lg:hidden">
      <div className="w-screen hidden"> {/* This div is hidden to avoid duplicating NO1 */}
        <Image src={NO7} className="w-full" alt="pic1" loading="lazy"/>
      </div>
      <div className="w-screen">
        <Image src={NO8} className="w-full" alt="pic2" loading="lazy"/>
      </div>
      <div className="w-screen">
        <Image src={NO9} className="w-full" alt="pic3" loading="lazy"/>
      </div>
    </div>
  </div>
      
    ), },
    { id: 8, title: 'MOON SHADOW', content: (
      <div className="flex flex-wrap lg:flex-nowrap">
    <div className="w-1/3 px-8 hidden sm:block">
      <Image src={MS1} className="w-full" alt="pic1" loading="lazy"/>
    </div>
    <div className="w-1/3 px-8 hidden sm:block">
      <Image src={MS2} className="w-full" alt="pic2" loading="lazy"/>
    </div>
    <div className="w-full lg:w-1/3 sm:px-8 sm:hidden lg:block">
      <Image src={MS3} className="w-full" alt="pic3" loading="lazy"/>
    </div>
  </div>
    ), },
    { id: 9, title: 'JAN_F_CHODOROWICZ 2', content: (
      <div>
      <div className="w-screen">
        <Image src={JAN22} className="w-full" alt="pic1" loading="lazy"/>
      </div>
    </div>
  )},
    { id: 10, title: 'ENORA', content: (
      <div className="flex flex-wrap lg:flex-nowrap">
  <div className="w-1/3 px-8 hidden sm:block">
    <Image src={EN1} className="w-full" alt="pic1" loading="lazy"/>
  </div>
  <div className="w-1/3 px-8 hidden sm:block">
    <Image src={EN2} className="w-full" alt="pic2" loading="lazy"/>
  </div>
  <div className="w-full lg:w-1/3 sm:px-8 sm:hidden lg:block">
    <Image src={EN3} className="w-full" alt="pic3" loading="lazy"/>
  </div>
</div>
    )},
    {
      id: 11, title: 'CAP PLANETA', content: (
          <div className="flex">
            <div className="w-screen sm:w-1/2  sm:py-6">
              <a href='lol'>
                <Image src={PLA} className="w-100%" alt="pic1" loading="lazy"/>
              </a>
            </div>
            <div className="sm:flex hidden w-1/2 px-8 sm:py-6">
            <Image src={PLA11} className="w-full" alt="pic2" loading="lazy"/>
          </div>
        </div>
        
      ),
    },
    { id: 12, title: 'JAN_F_CHODOROWICZ', content: (
        <div>
        <div className="w-screen">
          <Image src={JAN1} className="w-full" alt="pic1" loading="lazy"/>
        </div>
        <div className="sm:grid grid-rows-3 justify-center lg:hidden">
          <div className="w-screen hidden"> {/* This div is hidden to avoid duplicating NO1 */}
            <Image src={JAN1} className="w-full" alt="pic1" loading="lazy"/>
          </div>
          <div className="w-screen">
            <Image src={JAN2} className="w-full" alt="pic2" loading="lazy"/>
          </div>
          <div className="w-screen">
            <Image src={JAN3} className="w-full" alt="pic3" loading="lazy"/>
          </div>
        </div>
      </div>
    )},
    { id: 13, title: 'DOUBLEDARE', content: (
      <div>
      <div className="w-screen">
        <Image src={DUB} className="w-full" alt="pic1" loading="lazy"/>
      </div>
    </div>
  )},
  { id: 14, title: 'ALSO JOURNAL PARISIAN THAW', content: (
    <div className="flex flex-wrap lg:flex-nowrap">
  <div className="w-1/3 px-8 hidden sm:block">
    <Image src={PAR11} className="w-full" alt="pic1" loading="lazy"/>
  </div>
  <div className="w-1/3 px-8 hidden sm:block">
    <Image src={PAR12} className="w-full" alt="pic2" loading="lazy"/>
  </div>
  <div className="w-full lg:w-1/3 sm:px-8 sm:hidden lg:block">
    <Image src={PAR13} className="w-full" alt="pic3" loading="lazy" />
  </div>
</div>
  ), },
  { id: 15, title: 'ANASTAZJA', content: (
    <div>
    <div className="w-screen">
      <Image src={ANA} className="w-full" alt="pic1" loading="lazy"/>
    </div>
  </div>
)},
{ id: 16, title: 'REST IS RUST', content: (
  <div className='flex flex-wrap'>
    <div className='w-full lg:w-1/2 sm:px-8 sm:hidden lg:block'>
      <Image src={REST2} className='w-full' alt='en1' loading="lazy"/>
    </div>
    <div className='hidden sm:block sm:w-1/2 sm:px-20'>
      <Image src={REST3} className='w-full' alt='en2' loading="lazy"/>
    </div>
</div>
)},
{ id: 17, title: 'GRAJPER', content: (
  <div>
  <div className="w-screen">
    <Image src={GRAJP} className="w-full" alt="pic1" loading="lazy"/>
  </div>
</div>
)},
    { id: 18, title: 'NEWONCE MAANAM', content: (
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 sm:px-8 sm:hidden lg:block'>
          <Image src={WAW1} className='w-full' alt='en1' loading="lazy"/>
        </div>
        <div className='hidden sm:block sm:w-1/2 sm:px-20'>
          <Image src={WAW2} className='w-full' alt='en2'loading="lazy" />
        </div>
  </div>
    )},
    { id: 19, title: 'SZCZYL X TATIANA I KAROL', content: (
      <div className='flex flex-wrap '>
        <div className='w-full sm:w-1/2 h-[calc(100svh)] sm:px-12'>
          <Image src={SZ1} className='w-full' alt='en1' loading="lazy"/>
        </div>
        <div className='hidden sm:block sm:w-1/2 px-12 sm:px-20'>
          <Image src={SZ2} className='w-full' alt='en2' loading="lazy"/>
          <div className='h-24 bg-white'></div>
        </div>
  </div>
    )},
    { id: 20, title: 'NEWONCE WARSZAWA TURCZI', content: (
      <div>
      <div className="w-screen">
        <Image src={NEWWAW} className="w-full" alt="pic1" loading="lazy"/>
      </div>
    </div>
  )},
  { id: 21, title: 'NEWONCE WARSZAWA TURCZI', content: (
    <div>
    <div className="w-screen h-1/4 bg-white">
      
    </div>
  </div>
)},
  
  ];

