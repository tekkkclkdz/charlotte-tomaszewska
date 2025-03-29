import Image from "next/image";

import random from "./../../public/2_0013-min.webp"

import logo from "./../../public/char 05 black.jpg"

import ADIDAS from "./../../public/Gify-High/ADIDAS-high.gif";
import BARBARKA from "./../../public/Gify-High/BARBARKA  - Maria Peszek ft Oskar83-high (1).gif";
import BASS from "./../../public/Gify-High/BASS ASTRAL X IGO Bikini-high.gif";
import BRODKA from "./../../public/Gify-High/BRODKA & IGO - Myślę sobie że...-high.gif";
import CAP from "./../../public/Gify-High/CAP 74024 'Dark Eros'-high.gif";
import CICHO from "./../../public/Gify-High/CICHO (QUIET)-high.gif";
import HANIA from "./../../public/Gify-High/HANIA RANI & DOBRAWA CZOCHER - MALASANA-high.gif";
import HOME from "./../../public/Gify-High/HOME-high.gif";
import IM from "./../../public/Gify-High/I.M. - HERE WITHIN-high.gif";
import IFOLOR from "./../../public/Gify-High/IFOLOR - Kindergarten-high.gif";
import KUKON from "./../../public/Gify-High/KUKON & DARIA ZAWIALOW - Batman-high.gif";
import MAVERICK from "./../../public/Gify-High/MAVERICK SABRE - You Don't Even Need It-high.gif";
import REEBOK from "./../../public/Gify-High/REEBOKReedefine-high.gif";
import REVS from "./../../public/Gify-High/REVS - Vatos Lanos-high (3).gif";
import STONE from "./../../public/Gify-High/STONE - Queen-high (1).gif";
import SUPERPOWERS from "./../../public/Gify-High/SUPERPOWERS-high.gif";
import SZCZYL from "./../../public/Gify-High//SZCZYL feat. TYMEK - ANASTAZJA-high.gif";
import TMOBILE from "./../../public/Gify-High/TMOBILE - Kukon x Hodak-high.gif";
import TYMBARK from "./../../public/Gify-High/TYMBARK-high.gif";
import WINDOWSEN from "./../../public/Gify-High/WINDOWSEN-high.gif";
import IKEA from "./../../public/Gify-High/ikea_-_malm_positive_impact (1080p)-high.gif";


import BIKINI from "./../../public/GIFY_nowe/BASS ASTRAL X IGO Bikini-high (1).gif";
import MALASANA from "./../../public/GIFY_nowe/HANIA RANI & DOBRAWA CZOCHER - MALASANA-high (2).gif";
import BATMAN from "./../../public/GIFY_nowe/KUKON & DARIA ZAWIALOW - Batman-high (4).gif";
import AVEMARIA from "./../../public/GIFY_nowe/MARIA PESZEK - Ave Maria-high (1).gif";
import MAVERICK2 from "./../../public/GIFY_nowe/MAVERICK SABRE - You Don't Even Need It-high (3).gif";
import MEMYSLEF from "./../../public/GIFY_nowe/ME MYSELF & TOUCH-high (3).gif";
import REEBOK2 from "./../../public/GIFY_nowe/REEBOK #Reedefine-low.gif";
import REVS2 from "./../../public/GIFY_nowe/REVS - Vatos Lanos-high.gif";
import HIPHOPKRYTA from "./../../public/GIFY_nowe/SZCZYL - Hiphopkryta-high.gif";
import WIELKIEMIASTA from "./../../public/GIFY_nowe/SZCZYL - Wielkie Miasta-high.gif";


import MALASANA2 from "./../../public/GIFY_nowe/nowe/hania_rani_&_dobrawa_czocher_-_malasana (1080p)_3.gif"
import MEMYSELF2 from "./../../public/GIFY_nowe/nowe/ME_MYSELF_TOUCH_60s_16x09_2-0-stereo_-23LKFS_25fps_50mbps_2024_10_16_v01.gif"
import WIELKIEMIASTA2 from "./../../public/GIFY_nowe/nowe/Wielkie_miasta_Szczyl_422HQ_1800x1080_24fps_zplansza_sn_2.gif"

import Reebok3 from "./../../public/REEBOKReedefine-high.gif"

import STONE2 from "./../../public/STONE - Queen-high (5).gif"

import YES from "./../../public/YES-ezgif.com-optimize.gif"

import CICHO2 from "./../../public/CICHO_QUIET_2-ezgif.com-optimize.gif"
import Link from "next/link";






export const projects = [
    {
        id: 1, title: 'BRODKA X IGO', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
             
                <Image src={BRODKA} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
            
                    
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/932867048',
        credits: `directed by grajper, styled by charlotte tomaszewska`
    },
    {
        id: 2, title: 'ADIDAS', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={ADIDAS} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/887736596',
        credits: `directed by giada bossi, styled by charlotte tomaszewska`,
    },
    {
        id: 3, title: '(.) & (.)', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={MEMYSELF2} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1025377298',
        credits: 'directed by tala dolgowska, styled by charlotte tomaszewska'
    },
    {
        id: 4, title: 'STONE', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={STONE2} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/990654176',
        credits: `directed by grajper, styled by charlotte tomaszewska`
    },
    {
        id: 5, title: 'MARIA PESZEK X OSKAR83', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={BARBARKA} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/610083622',
        credits: `directed by grajper, styled by charlotte tomaszewska`
    },
    {
        id: 6, title: 'MESKIE GRANIE', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={SUPERPOWERS} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/828107491',
        credits: `directed by grajper, styled by charlotte tomaszewska`
    },
    {
        id: 7, title: 'CAP 74024', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={CAP} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/450786928',
        credits: (<div>directed by grajper <br></br> creative concept, art direction & styling by charlotte tomaszewska</div>)
    },
    {
        id: 8, title: 'HOME', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={HOME} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/669378253',
        credits: `directed by grajper, styled by charlotte tomaszewska
        `
    },
    {
        id: 9, title: 'YES', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={YES} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/647758815',
        credits: `directed by grajper, styled by charlotte tomaszewska
        `
    },
    {
        id: 10, title: 'WINDOWSEN', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={WINDOWSEN} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1016725466',
        credits: `directed by grajper, art direction by grajper & charlotte tomaszewska`
    },
    {
        id: 11, title: 'CICHO', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={CICHO} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/887730475',
        credits: `directed by marcin pucyk, styled by charlotte tomaszewska`
    },
    {
        id: 12, title: 'MARIA PESZEK', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={AVEMARIA} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1028099351',
        credits: 'directed by grajper, styled by charlotte tomaszewska'
    },
    {
        id: 13, title: 'I.M.', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={IM} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1015786082',
        credits: `directed by marta mach, styled by charlotte tomaszewska`
    },
    {
        id: 14, title: 'SZCZYL', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={SZCZYL} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1028107804',
        credits: 'directed by andrzej stepouois, styled by charlotte tomaszewska'
    },
    {
        id: 15, title: 'IKEA', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={IKEA} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1023738021',
        credits: 'directed by grajper, styled by charlotte tomaszewska'
    },
    // {
    //     id: 15, title: 'TMOBILE - KUKON X HODAK', content: (
    //         <div className="flex justify-center w-screen">
    //             <Image
    //                 src={TMOBILE}
    //                 className="w-full sm:w-12/12 h-auto object-cover object-center"
    //                 alt="pic1"
    //                 loading="lazy"
    //             />
    //         </div>
    //     ), videoUrl: 'https://player.vimeo.com/video/690571350',
    //     credits: `
    //     Directed by: Piotrek Matejkowski  
    //     DOP: Kajetan Plis  

    //     Production House: Papaya  
    //     Producer: Michał Wojciechowski  
    //     Production Manager: Ania Schiller  
    //     1st AD: Michał Guga  

    //     Stylist: Charlotte Tomaszewska  
    //     Stylist Assistants: Maria Konieczna, Martyna Oryszak
    //     `
    // },
    {
        id: 16, title: 'HANIA RANI X DOBRAWA CHOCHER', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={MALASANA2} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/647779892',
        credits: `directed by mateusz miszczynski, styled by charlotte tomaszewska`
    },
    {
        id: 17, title: 'BASS ASTRAL X IGO', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={BIKINI} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/408375473',
        credits: `directed by grajper, styled by charlotte tomaszewska`
    },
    {
        id: 18, title: 'TYMBARK', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={TYMBARK} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/633844080',
        credits: `directed by grajper, styled by charlotte tomaszewska`
    },
    {
        id: 19, title: 'KUKON X DARIA ZAWIALOW', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={KUKON} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1024318254',
        credits: 'directed by nikodem marek, styled by charlotte tomaszewska'
    },
    {
        id: 20, title: 'IFOLOR', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={IFOLOR} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/776615290',
        credits: `directed by grajper, styled by charlotte tomaszewska`
    },

    {
        id: 21, title: 'MAVERICK SABRE', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={MAVERICK2} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1023220757',
        credits: `directed by grajper, fans styled by charlotte tomaszewska`
    },
    {
        id: 22, title: 'REEBOK', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                <Image src={REEBOK2} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/408333769',
        credits: `directed by tatiana & karol, styled by charlotte tomaszewska`
    },
    {
        id: 23, title: 'SZCZYL', content: (
            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
                <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                
                <Image src={HIPHOPKRYTA} alt="ll" className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto" />
            
                
                </div>
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1026792192',
        credits: 'directed by grajper, styled by charlotte tomaszewska'
    },
    // {
    //     id: 19, title: 'KUKON X DARIA ZAWIALOW', content: (
    //         <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
    //             <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
    //             <video
    //                     src="/videos/BATMAN.webm"
    //                     className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto"
    //                     autoPlay
    //                     loop
    //                     muted
    //                     playsInline
    //                     preload="metadata"
    //                 >
    //                     Twoja przeglądarka nie obsługuje tego wideo.
    //                 </video>
    //             </div>
    //         </div>
    //     ), videoUrl: 'https://player.vimeo.com/video/1024318254',
    //     credits: 'directed by nikodem marek, styled by charlotte tomaszewska'
    // },
    // {
    //     id: 20, title: 'IFOLOR', content: (
    //         <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
    //             <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
    //             <video
    //                     src="/videos/IFOLOR.webm"
    //                     className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto"
    //                     autoPlay
    //                     loop
    //                     muted
    //                     playsInline
    //                     preload="metadata"
    //                 >
    //                     Twoja przeglądarka nie obsługuje tego wideo.
    //                 </video>
    //             </div>
    //         </div>
    //     ), videoUrl: 'https://player.vimeo.com/video/776615290',
    //     credits: `directed by grajper, styled by charlotte tomaszewska`
    // },

    // {
    //     id: 21, title: 'MAVERICK SABRE', content: (
    //         <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
    //             <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
    //             <video
    //                     src="/videos/MAVERICK.webm"
    //                     className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto"
    //                     autoPlay
    //                     loop
    //                     muted
    //                     playsInline
    //                     preload="metadata"
    //                 >
    //                     Twoja przeglądarka nie obsługuje tego wideo.
    //                 </video>
    //             </div>
    //         </div>
    //     ), videoUrl: 'https://player.vimeo.com/video/1023220757',
    //     credits: `directed by grajper, fans styled by charlotte tomaszewska`
    // },
    // {
    //     id: 22, title: 'REEBOK', content: (
    //         <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
    //             <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
    //             <video
    //                     src="/videos/REEBOK.webm"
    //                     className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto"
    //                     autoPlay
    //                     loop
    //                     muted
    //                     playsInline
    //                     preload="metadata"
    //                 >
    //                     Twoja przeglądarka nie obsługuje tego wideo.
    //                 </video>
    //             </div>
    //         </div>
    //     ), videoUrl: 'https://player.vimeo.com/video/408333769',
    //     credits: `directed by tatiana & karol, styled by charlotte tomaszewska`
    // },
    // {
    //     id: 23, title: 'SZCZYL', content: (
    //         <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
    //             <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
                
    //             <video
    //                     src="/videos/HIPHOPKRYTA.webm"
    //                     className="w-full h-auto max-w-full object-cover object-center cursor-custom sm:h-full sm:w-auto"
    //                     autoPlay
    //                     loop
    //                     muted
    //                     playsInline
    //                     preload="metadata"
    //                 >
    //                     Twoja przeglądarka nie obsługuje tego wideo.
    //                 </video>
            
                
    //             </div>
    //         </div>
    //     ), videoUrl: 'https://player.vimeo.com/video/1026792192',
    //     credits: 'directed by grajper, styled by charlotte tomaszewska'
    // },
    // {
    //     id: 24, title: 'REVS - VATOS LANOS', content: (
    //         <div className="flex justify-center w-screen">
    //             <Image
    //                 src={REVS2}
    //                 className="w-full sm:w-12/12 h-auto object-cover object-center"
    //                 alt="pic1"
    //                 loading="lazy"
    //             />
    //         </div>
    //     ), videoUrl: 'https://player.vimeo.com/video/408333976',
    //     credits: `
    //     Published @ REVS Magazine

    //     Directing & Photography: Tatiana & Karol

    //     Creative Direction: Charlotte Tomaszewska

    //     Styling: Charlotte Tomaszewska

    //     Starring: Angie, Luiza, Hipek, Natalia
    //     `
    // },
];




// CAŁY KOD JAKI DZIALAL WCZESNIEJ Z GIFAMI I POPRAWNYMI IMPORTAMI 
// import Image from "next/image";

// import random from "./../../public/2_0013-min.webp"

// import logo from "./../../public/char 05 black.jpg"

// import ADIDAS from "./../../public/Gify-High/ADIDAS-high.gif";
// import BARBARKA from "./../../public/Gify-High/BARBARKA  - Maria Peszek ft Oskar83-high (1).gif";
// import BASS from "./../../public/Gify-High/BASS ASTRAL X IGO Bikini-high.gif";
// import BRODKA from "./../../public/Gify-High/BRODKA & IGO - Myślę sobie że...-high.gif";
// import CAP from "./../../public/Gify-High/CAP 74024 'Dark Eros'-high.gif";
// import CICHO from "./../../public/Gify-High/CICHO (QUIET)-high.gif";
// import HANIA from "./../../public/Gify-High/HANIA RANI & DOBRAWA CZOCHER - MALASANA-high.gif";
// import HOME from "./../../public/Gify-High/HOME-high.gif";
// import IM from "./../../public/Gify-High/I.M. - HERE WITHIN-high.gif";
// import IFOLOR from "./../../public/Gify-High/IFOLOR - Kindergarten-high.gif";
// import KUKON from "./../../public/Gify-High/KUKON & DARIA ZAWIALOW - Batman-high.gif";
// import MAVERICK from "./../../public/Gify-High/MAVERICK SABRE - You Don't Even Need It-high.gif";
// import REEBOK from "./../../public/Gify-High/REEBOKReedefine-high.gif";
// import REVS from "./../../public/Gify-High/REVS - Vatos Lanos-high (3).gif";
// import STONE from "./../../public/Gify-High/STONE - Queen-high (1).gif";
// import SUPERPOWERS from "./../../public/Gify-High/SUPERPOWERS-high.gif";
// import SZCZYL from "./../../public/Gify-High//SZCZYL feat. TYMEK - ANASTAZJA-high.gif";
// import TMOBILE from "./../../public/Gify-High/TMOBILE - Kukon x Hodak-high.gif";
// import TYMBARK from "./../../public/Gify-High/TYMBARK-high.gif";
// import WINDOWSEN from "./../../public/Gify-High/WINDOWSEN-high.gif";
// import IKEA from "./../../public/Gify-High/ikea_-_malm_positive_impact (1080p)-high.gif";


// import BIKINI from "./../../public/GIFY_nowe/BASS ASTRAL X IGO Bikini-high (1).gif";
// import MALASANA from "./../../public/GIFY_nowe/HANIA RANI & DOBRAWA CZOCHER - MALASANA-high (2).gif";
// import BATMAN from "./../../public/GIFY_nowe/KUKON & DARIA ZAWIALOW - Batman-high (4).gif";
// import AVEMARIA from "./../../public/GIFY_nowe/MARIA PESZEK - Ave Maria-high (1).gif";
// import MAVERICK2 from "./../../public/GIFY_nowe/MAVERICK SABRE - You Don't Even Need It-high (3).gif";
// import MEMYSLEF from "./../../public/GIFY_nowe/ME MYSELF & TOUCH-high (3).gif";
// import REEBOK2 from "./../../public/GIFY_nowe/REEBOK #Reedefine-low.gif";
// import REVS2 from "./../../public/GIFY_nowe/REVS - Vatos Lanos-high.gif";
// import HIPHOPKRYTA from "./../../public/GIFY_nowe/SZCZYL - Hiphopkryta-high.gif";
// import WIELKIEMIASTA from "./../../public/GIFY_nowe/SZCZYL - Wielkie Miasta-high.gif";


// import MALASANA2 from "./../../public/GIFY_nowe/nowe/hania_rani_&_dobrawa_czocher_-_malasana (1080p)_3.gif"
// import MEMYSELF2 from "./../../public/GIFY_nowe/nowe/ME_MYSELF_TOUCH_60s_16x09_2-0-stereo_-23LKFS_25fps_50mbps_2024_10_16_v01.gif"
// import WIELKIEMIASTA2 from "./../../public/GIFY_nowe/nowe/Wielkie_miasta_Szczyl_422HQ_1800x1080_24fps_zplansza_sn_2.gif"

// import Reebok3 from "./../../public/REEBOKReedefine-high.gif"

// import STONE2 from "./../../public/STONE - Queen-high (5).gif"

// import YES from "./../../public/YES-ezgif.com-optimize.gif"

// import CICHO2 from "./../../public/CICHO_QUIET_2-ezgif.com-optimize.gif"






// export const projects = [
//     {
//         id: 1, title: 'BRODKA X IGO', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={BRODKA}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         priority
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/932867048',
//         credits: `directed by grajper, styled by charlotte tomaszewska`
//     },
//     {
//         id: 2, title: 'ADIDAS', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={ADIDAS}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         priority
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/887736596',
//         credits: `directed by giada bossi, styled by charlotte tomaszewska`,
//     },
//     {
//         id: 3, title: '(.) & (.)', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={MEMYSELF2}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/1025377298',
//         credits: 'directed by tala dolgowska, styled by charlotte tomaszewska'
//     },
//     {
//         id: 4, title: 'STONE', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={STONE2}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/990654176',
//         credits: `directed by grajper, styled by charlotte tomaszewska`
//     },
//     {
//         id: 5, title: 'MARIA PSZEK X OSKAR83', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={BARBARKA}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/610083622',
//         credits: `directed by grajper, styled by charlotte tomaszewska`
//     },
//     {
//         id: 6, title: 'MESKIE GRANIE', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={SUPERPOWERS}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/828107491',
//         credits: `directed by grajper, styled by charlotte tomaszewska`
//     },
//     {
//         id: 7, title: 'CAP 74024', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={CAP}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/450786928',
//         credits: (<div>directed by grajper <br></br> creative concept, art direction & styling by charlotte tomaszewska</div>)
//     },
//     {
//         id: 8, title: 'HOME', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={HOME}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/669378253',
//         credits: `directed by grajper, styled by charlotte tomaszewska
//         `
//     },
//     {
//         id: 9, title: 'YES', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={YES}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/647758815',
//         credits: `directed by grajper, styled by charlotte tomaszewska
//         `
//     },
//     {
//         id: 10, title: 'WINDOWSEN', content: (
//            <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={WINDOWSEN}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/1016725466',
//         credits: `directed by grajper, art direction by grajper & charlotte tomaszewska`
//     },
//     {
//         id: 11, title: 'CICHO', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={CICHO2}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/887730475',
//         credits: `directed by marcin pucyk, styled by charlotte tomaszewska`
//     },
//     {
//         id: 12, title: 'MARIA PESZEK', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={AVEMARIA}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/1028099351',
//         credits: 'directed by grajper, styled by charlotte tomaszewska'
//     },
//     {
//         id: 13, title: 'I.M.', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={IM}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/1015786082',
//         credits: `directed by marta mach, styled by charlotte tomaszewska`
//     },
//     {
//         id: 14, title: 'SZCZYL', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={WIELKIEMIASTA2}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/1028107804',
//         credits: 'directed by andrzej stepouois, styled by charlotte tomaszewska'
//     },
//     {
//         id: 15, title: 'IKEA', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={IKEA}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/1023738021',
//         credits: 'directed by grajper, styled by charlotte tomaszewska'
//     },
//     // {
//     //     id: 15, title: 'TMOBILE - KUKON X HODAK', content: (
//     //         <div className="flex justify-center w-screen">
//     //             <Image
//     //                 src={TMOBILE}
//     //                 className="w-full sm:w-12/12 h-auto object-cover object-center"
//     //                 alt="pic1"
//     //                 loading="lazy"
//     //             />
//     //         </div>
//     //     ), videoUrl: 'https://player.vimeo.com/video/690571350',
//     //     credits: `
//     //     Directed by: Piotrek Matejkowski  
//     //     DOP: Kajetan Plis  

//     //     Production House: Papaya  
//     //     Producer: Michał Wojciechowski  
//     //     Production Manager: Ania Schiller  
//     //     1st AD: Michał Guga  

//     //     Stylist: Charlotte Tomaszewska  
//     //     Stylist Assistants: Maria Konieczna, Martyna Oryszak
//     //     `
//     // },
//     {
//         id: 16, title: 'HANIA RANI X DOBRAWA CHOCHER', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={MALASANA2}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/647779892',
//         credits: `directed by mateusz miszczynski, styled by charlotte tomaszewska`
//     },
//     {
//         id: 17, title: 'BASS ASTRAL X IGO', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={BIKINI}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/408375473',
//         credits: `directed by grajper, styled by charlotte tomaszewska`
//     },
//     {
//         id: 18, title: 'TYMBARK', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={TYMBARK}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/633844080',
//         credits: `directed by grajper, styled by charlotte tomaszewska`
//     },
//     {
//         id: 19, title: 'KUKON X DARIA ZAWIALOW', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={BATMAN}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/1024318254',
//         credits: 'directed by nikodem marek, styled by charlotte tomaszewska'
//     },
//     {
//         id: 20, title: 'IFOLOR', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={IFOLOR}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/776615290',
//         credits: `directed by grajper, styled by charlotte tomaszewska`
//     },

//     {
//         id: 21, title: 'MAVERICK SABRE', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={MAVERICK2}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/1023220757',
//         credits: `directed by grajper, fans styled by charlotte tomaszewska`
//     },
//     {
//         id: 22, title: 'REEBOK', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//             <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                 <Image
//                     src={Reebok3}
//                     className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                     alt="pic1"
//                     loading="lazy"
//                 />
//             </div>
//         </div>
//         ), videoUrl: 'https://player.vimeo.com/video/408333769',
//         credits: `directed by tatiana & karol, styled by charlotte tomaszewska`
//     },
//     {
//         id: 23, title: 'SZCZYL', content: (
//             <div className="flex justify-center items-center w-screen h-auto sm:h-screen">
//                 <div className="w-full sm:w-[100%] h-full flex justify-center items-center">
//                     <Image
//                         src={HIPHOPKRYTA}
//                         className="w-full h-auto max-w-full object-cover object-center cursor-pointer sm:h-full sm:w-auto"
//                         alt="pic1"
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//         ), videoUrl: 'https://player.vimeo.com/video/1026792192',
//         credits: 'directed by grajper, styled by charlotte tomaszewska'
//     },
//     // {
//     //     id: 24, title: 'REVS - VATOS LANOS', content: (
//     //         <div className="flex justify-center w-screen">
//     //             <Image
//     //                 src={REVS2}
//     //                 className="w-full sm:w-12/12 h-auto object-cover object-center"
//     //                 alt="pic1"
//     //                 loading="lazy"
//     //             />
//     //         </div>
//     //     ), videoUrl: 'https://player.vimeo.com/video/408333976',
//     //     credits: `
//     //     Published @ REVS Magazine

//     //     Directing & Photography: Tatiana & Karol

//     //     Creative Direction: Charlotte Tomaszewska

//     //     Styling: Charlotte Tomaszewska

//     //     Starring: Angie, Luiza, Hipek, Natalia
//     //     `
//     // },
// ];



