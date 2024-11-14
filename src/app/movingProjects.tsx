import Image from "next/image";

import random from "./../../public/2_0013-min.webp"

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


export const projects = [
    {
        id: 1, title: 'BRODKA & IGO', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={BRODKA}
                    className="w-full sm:w-10/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/932867048',
        credits: `
        Written and Directed by: Grajper
        DOP: Mikołaj Syguda
        Production House: Opus Film
        Producer: Michał Cichomski
        Producer: Marcin Pośpiech
        Production Coordinator: Małgorzata Bors
      
        Costumes:
        Costume Designer: Charlotte Tomaszewska
        1st Assistant: Natalia Osełka
        Assistants (Poland): Paulina Biernacka, Martyna Oryszak
      
        Editor: Kuba Tomaszewicz
        Colorist: Nadia Khairat Gómez
        Post-production House: RIOdePost
        Post-production Manager: Sylwia Desowska / Alicja Kozińska
        VFX Supervision: Szymon Kołdej
        Online: Szymon Kołdej, Michał Kałuża, Rafał Franczak, Pavel Karankevich, Kazimierz Liberski, Krzysiek Laskowski, Jacek Ostaszewski
      
        Service House: Color Field
        Producer: Alejandro Araya
        Line Producer: Louis Bronsard
        Production Manager: Dante Ruz
        1st AD: Flavio Levine
        2nd AD: Coke Ayala
      
        Focus Puller: Carlos Vidal
        2nd AC: Nicolás Vergara
        DIT: Cristián Robles
        Preview: Catalina Orellana
      
        Set Designer: Sebastian Torrico
        Costume Designer Assistants: Lourdes Ramirez, Josefa Nuñez, Catalina Andrade, Catalina Machuca
      
        Client: Żywiec (Anna Owczarska, Dorota Nowakowska)
        Coordination and Artistic Consultation of the Project: Agencja Live (Dorota Harasimowicz, Krzysztof Bąk)
        Management: Brodka (Kayax - Gabi Szuba), Igo (Iglo Records - Patryk Glinka)
        Creative and Strategic Supervision:
        2012 Agency: Barbara Niedziela, Maciej Marasek, Marcin Pucyk, Monika Domagała-Szmidt, Julia Chylińska
        Feeders Agency: Magda Kantorowicz, Adam Sierociński, Kuba Sagan, Bożedar Kaniewski, Adrianna Kosmala, Patryk Kordulski
      `
    },
    {
        id: 2, title: 'ADIDAS', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={ADIDAS}
                    className="w-full sm:w-10/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/887736596',
        credits: `Client: ADIDAS / STUDIO A
        Producer: Emily Scott
        Producer: Sophie van den Berg
        Project Manager: Geraldine van Oversteeg
        Creative Director: Helen King
        Creative Lead: Charlotte Newbold
        Creative Lead: Siddhartha Guha
        Art Director: Yasamin Shadanlou
        Writer: Clara Virieux
        Art Director: Luca Cioni
        
        Prod Co: Ocurens (UK)
        Director: Giada Bossi
        Executive Producer: Germain Robin
        Executive Producer: Emmanuelle Le Chat
        DOP: Jake Hunter
        Photographer: Anthony Blasko
        Photographer's Assistant: Greg Haerling
        Producer/PM: Georgia Stamp
        PC: Evgenia Avramidou
        PA: Bunmi Oyateru
        1st AD: Mathieu Perez
        Editor: Giada Bossi & Patrycia Piróg
        Writer: Caterina Crisci
        
        POST-PRODUCED by Monumental
        Head of Post-Production: Laïla Hamdaoui
        Post-Production Producer: Sindy Durand Paucsik
        Post-Production assistants: Maxime Veigneau & Martin Geley
        Sound Design & Music: Emilien Bernaux
        
        VFX by SQUARE VFX
        Head of VFX: Mathieu Jussreandot & Colin Journée
        VFX Production Manager: Julie Delepine
        Compositing: Adrien « Palmito » Renay, Romain Bedouet, Isabelle Tchoungang
        
        Colour: Absolute Post
        Colourist: Juliette Wileman
        Colour producer: Ollie Ireland
        
        Service Co: 247xRadioaktive
        Executive Producer: Monika Urbańska
        Producer: Maria Mazurczak
        Production Manager: Anita Kozłowska
        Production Coordinator: Konrad Beśka
        Production Coordinator: Paweł Młynarczyk
        Talent Coordinator: Anna Pastuszak
        Visiting Crew Chaperone: Zosia Tomasik
        Agency&Client Chaperone: Marta Kobielska
        Local AD: Michał Piłat
        Stills AD: Michał Przybysz
        Location Manager: Paweł Chrząste
        Set Manager: Adam Sławek
        Casting Director: Sylwia Błaszczyk
        Casting Director: Karolina Romuk Wodoracka
        
        CAMERA
        1st AC: Andrzej Hijewski
        2nd AC: Rafał Szajkowski
        VTR: Adrian Galus
        DIT: Michał Hermanowski
        
        STEADY
        Steadicam Operator: Adam Mendry
        Steadicam Assistant: Marcin Przywara
        
        GRIP
        Key Grip: Edwin Wolski
        Grip: Przemek Liberman
        Gaffer: Macie Maciejewski
        Best Boy: Kajetan Bogucki
        
        STILLS
        Digital Technician: Kuba Zawadzki
        Photo Assistant: Krzysztof Pierscieniewski
        
        ART DEPARTMENT
        Production Designer: Kasia Piel
        Production Designer: Ewelina Rostaniec
        Prop Master: Kuba Dabrowski
        Stage Hands: Maly
        
        WARDROBE & MAKE UP
        Stylist: Charlotte Tomaszewska
        Wardrobe Assistant: Natalia Osełka
        Wardrobe Assistant: Monika Górowska
        Wardrobe Assistant: Martyna Oryszak
        
        Make up Artist: Aleksandra Przyłuska
        Make Up Assistant: Marcelina Sroczyńska
        Make Up Assistant: Martyna Sikora
        
        Hair Artist: Hela Walczyńska
        Hair Artist Assistant: Kasia Kowalczyk
        `,
    },
    {
        id: 3, title: 'ME MYSELF & TOUCH', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={MEMYSLEF}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1025377298',
        credits: ''
    },
    {
        id: 4, title: 'STONE - QUEEN', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={STONE}
                    className="w-full sm:w-11/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/990654176',
        credits: `
        Director: Grajper @grajper
        
        Prod Co: Friend London  
        EP: Nicole Hartley  
        Producer: Wojciech Czarkowski  
        Director s Rep: Nicole Hartley  
        Music Video Rep: Lee Fairweather  
        Label: Polydor Records  
        Commissioner: Joanna Szyczewska  
        Production Manager: Henry Richmond  
        Production Researcher: Gina Crighton  
        
        DOP: Louis Evennou  
        1st AC: Michal Mroczek  
        2nd AC: Tom French  
        1st AD: Alfie Jackson  
        2nd AD: Polly Coombes  
        
        Runner: Lily Bloomfield  
        Runner: Amaiur López Martínez  
        
        Production Designer: Joe Munro  
        Art Assistant: Josh Hooper  
        
        Stylist: Charlotte Tomaszewska  
        Styling Assistant: Natalia Oselka  
        Special Thank You to @klasyk_store  
        
        Key HMUA: Lizzie Checkley  
        HMU Assistant: Inca Edghill  
        
        Editor: Kuba Tomaszewicz  
        VFX and Online: Miłosz Matuszewski  
        
        Filmout: Cinegrell Berlin  
        Colour Grade: Florian Martiny
        `
    },
    {
        id: 5, title: 'BARBARKA - MARIA PSZEK FT OSKAR83', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={BARBARKA}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/610083622',
        credits: `
        Script and Direction: Grajper
        DOP: Igor Połaniewicz
        Editor: Kuba Tomaszewicz
        Production Company: MOON Films
        Executive Producer: Kuba Ranik | Magda Betlejewska
        Producer: Piotr Fryta Kornobis
        Production Manager: Pola Łangowska
        Production Manager Assistant: Aleksandra Rudzka
        Costume Designer: Charlotte Tomaszewska
        Costume Designer Assistants: Maria Konieczna, Martyna Świderska
        Make up: Aleksandra Przyłuska, Anna Korzeb
        Set Design: Agata Witczak
        Set Design Assistants: Ola Kostulska, Kalina Gałecka
        Casting: Kasia Psoda, Julia Kamińska
      `
    },
    {
        id: 6, title: 'SUPERPOWERS', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={SUPERPOWERS}
                    className="w-full sm:w-10/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/828107491',
        credits: `
        Script & direction: Grajper
        
        Director of photography: Mikołaj Syguda
        
        Production Company: Opus Film
        
        Executive Producers: Jarek Parzyjagła, Michał Cichomski  
        Production Manager: Daniel Nowotczyński  
        Production Coordinators: Anka Bilicka, Małgorzata Bors  
        
        1st AD: Marek Cydorowicz  
        
        Stunt: MG Stunt Team  
        Stunt Coordinator: Jarek Golec  
        Stunt Riggers: Asia Różańska, Łukasz Czubak, Kamil Pardo, Filip Bucki, Michał Burdan, Damian Majewski, Artur Grabowiec  
        Cars on set & Rigging: Scorpioteam Norbert Możdżyński  
        
        Stylist: Charlotte Tomaszewska (Igo, Vito Bambino)  
        Wardrobe Stylist Assistants: Ula Żelaznowska, Natalia Osełka, Monika Górowska  
        Stylist: Kamila Picz (Mrozu)  
        
        Art Directors: Ładne Rzeczy - Katarzyna Pielużek, Ewelina Rosłaniec  
        Set Construction: Tomasz Trybulski  
        
        Makeup Artists: Agata Kozłowska, Oliwia Niespodziewana  
        Hair Stylist: Krystian Cezak  
        
        Camera Equipment: Panavision Polska  
        Steadicam Operator: Marek Zajączkowski  
        
        Postproduction: RIOdePost / Heaven Postproduction Studio  
        
        Editor: Kuba Tomaszewicz  
        Colorist: Piotr Sasim  
        
        Heaven Postproduction Studio
        `
    },
    {
        id: 7, title: 'HOME', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={HOME}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/669378253',
        credits: `
        Concept & direction: Grajper
        
        DOP: Mikołaj Syguda
        
        Choreography: Łukasz Przytarski
        
        Dancer: Paweł Kozłowski
        
        Production: Tomek Gaj/Workshop Films
        
        Music:
        Symphony No.3, Op.36, part II Lento e Largo Tranquillissimo
        Written by Henryk Mikołaj Górecki,
        Published by Boosey & Hawkes Music Publishers Ltd
        Performed by London Sinfonietta, conductor: David Zinman, soprano: Dawn Upshaw (Warner Music Poland)
        Music supervision: Big Sync Music | Piotr Ćwikliński, Christopher Sulenta
        
        Support during interviews: Karol Grygoruk
        
        Costume designer: Charlotte Tomaszewska
        Costume designer assist: Paulina Szczepańska
        
        Production Assistant: Jakub Korbecki
        
        Production assistant and bird wrangler: Zoja Lena Chudy
        
        Set design: Elwira Szyszka
        
        Make up: Marta Walendzik
        
        Steadicam: Adam Mendry
        Steadicam assist: Marcin Magiera
        
        Grip: Edwin Wolski, Marek Rumek, Jarek Rawa Rawecki
        
        Focus puller: Maciej "Horyzont" Barański
        
        2nd AC: Kuba Żukowski
        
        Color grading: Piotr Sasim
        
        Sound: Darek Podhajski
        
        Special thanks to: Kuba Tomaszewicz, Daria Siejak
        `
    },
    {
        id: 8, title: 'DARK EROS', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={CAP}
                    className="w-full sm:w-9/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/450786928',
        credits: `
        Direction & Editing: Grajper
        Concept: Charlotte Tomaszewska, Grajper
        Styling: Charlotte Tomaszewska, Planeta
        Music: Anton Tyshulskiy
        Vocal: Taras Gembik
      `
    },
    {
        id: 9, title: 'WINDOWSEN', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={WINDOWSEN}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1016725466',
        credits: `
        Director: Grajper @grajper  
        DOP: @salomerapinat, @grajper  
        
        Video Producer: @florenthaese  
        Line Producer: @tommybergez  
        
        Score: @rui_hooo, @r8ven.studio  
        Producer: @sad__asianmom, @jordandctagain  
        Assistant: Aleks Aleksic  
        Production Assistant: @ilyesselamig  
        
        Art Direction: @grajper, @charlottetomas  
        Sound Design: @laureenbolton  
        
        Colorist: @jadedebritolopesprestes  
        
        Production: @caviarparis
        `
    },
    {
        id: 10, title: 'CICHO', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={CICHO}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/887730475',
        credits: `
        
         Written and directed by Marcin Pucyk
        
        Production Company: GMC Michał Cichomski
        
       
        
        Director of photography: Maciej Ryter
        
        Casting Director: Halszka Kamińska
        
        Executive Producer: Michał Cichomski
        
        Production Coordinator: Anka Bilicka
        
        I AD: Bartek Kowalski
        
        Konrad Bayno
        
        Location Managers: Kaja dErceville, Vadim dErceville
        
        Set Manager: Katarzyna Frątczak
        
        SFX: Szopen Piotr Nowacki
        
        Stylist: Charlotte Tomaszewska
        
        Stylist assistant: Martyna Oryszak, Marta Piekut
        
        Art Directors: Ładne Rzeczy - Ewelina Rosłaniec
        
        Art. Director: Asst: Katarzyna Borejsza, Agata Radzikowska, Mateusz Lewandowski, Stefan Zańko
        
        Makeup Artists: Ela Jackowska, Patrycja Michera
        
        Stagehand Equipment: Koper Film
        
        Stagehands: Marcin Skajnowski, Marcin Buczyński
        
        Camera Equipment: Panavision Polska
        
        Focus Puller: Andrzej Hijewski
        
        Camera Assistant: Rafał Szajkowski
        
        Video Assistants: Roman Kepiński
        
        Lighting Equipment: Easy Film
        
        Gaffer: Maciej Chmielewski
        
        Sparks: Rafał Seraj
        
        Steadicam Operator: Marek Borniński
        
        Steadicam Operator Assist.: Darek Komosa
        
        Making of: Bart Staszewski
        
        Security: Krystian Holdat
        
        Medic: Marcin Szenk
        
        Genny: Safe-Trans Jacek Kucharski,
        
        Postproduction: RIOdePost
        
        Editor: Jarosław Kamiński
        
        Colorist: Szymon Obrostek
        
        RIOdePost
        
        Post Producer: Sylwia Desowska
        
        Online: Kazimierz Liberski, Pavel Karankevich
        
        Animation: Grzegorz Wnuk
        
        Typography: Bartek Włodarczyk
        
        Sound: Głośno
        
        Sound design: Błażej Kafarski
        
        Sound Postproducer: Anna Bieleńska
        
        Cast: Magdalena Karel, Karolina Węgrzyńska, Natalia Karpińska, Marina Polniuk, Kalina Kowalczuk, Maja Balcerzak, Katarzyna Szwarc, Olga Janczyszyn,
        
        Antoni Pogan, Ewa Sadowska, Agnieszka Paszek, Kamila Matyszczak
        
        Cast Final Scene:
        
        Wiktoria Jędroszkowiak, Anna Pięta, Dominika Lasota, Charlotte Tomaszewska, Magda Karel,
        
        Kamila Wykrota, Ewelina Kycia, Dominika Sokołowska, Zuzia Krzątała, Paulina Wasiluk, Dominika Duda, Natalia Ziętara, Julia Turewicz, Paulina Malczewska, Zulejka Nowicka, Susie Hammer, Agnieszka Młotek, Zosia Młotek, Anna Ryźlak, Matylda Zamilska, Ewa Abart, Zofia Wichrowska, Magdalena Micińska, Maja Włodarczyk, Julia Pyzińska, Hania Jadczyk, Natalia Woźniak, Marta Żuchowska, Martyna Gołębiewska, Areta Szpura, Wiktoria Żebrowska, Julia Mardeusz, Zuzanna Janusz, Róża Janusz, Dominika Łentka, Karolina Kałużyńska, Marta Krawczyńska, Julia Kwaśniewska, Dżemila Sulkiewicz-Nowicka, Katarzyna Ostanek, Natalia Anielska, Lucyna Sycz, Małgorzata Wódczak, Olga Pasternak, Zofia Sobczak, Natalia Osełka,
        
        Wiktoria Grelewicz, Zuzanna Kowalewska, Stanisława Marciniak, Zofia Wójcicka, Natalia Siwek, Arleta Bolda- Badocha, Ksenia Bartosiak, Joanna Juszczak, Monika Domagała Szmidt,
        
        Magdalena Staszak- Zajdel, Weronika Kuchta, Natalia Woźniak, Emilia Stasiak Witkowska, Nina Wąsik, Dorota Rak, Jadwiga Rak, Agata Kwiatkowska, Magdalena Zając, Natalia Zduń,
        
        Magdalena Wolska, Iwona Cybulska, Maja Januszko, Urszula Krowicka, Maria Koczorowska,
        
        Karolina Lidia Grabowska, Agata Różycka, Alina Gajewska, Karolina Kłaczyńska, Karolina Piłat,
        
        Katarzyna Kurpiewska, Anna Samczyk, Beata Maria Borys, Zofia Wichrowska, Ewa Marynowska, Berenika Zimnoch, Agata Goli, Emilia Wasielewska, Marta Piekut, Maja Balcerzak, Małgorzata Jaroń, Sylwia Domańska, Magdalena Flicińska, Milena Zielonka, Emilia Wasielewska, Hanna Zabielska, Zofia Załęska, Karolina Michnowicz, Dominika Kępka Navejar, Sabina Nasloch, Marika Rajs.
        
        

        WSCHÓD:
        
        Anna Pięta
        
        Dominika Lasota
        
        Wiktoria Jędroszkowiak
        
        Konrad Skotnicki
        `
    },
    {
        id: 11, title: 'WITHIN', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={IM}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1015786082',
        credits: `
        Director: Marta Mach @martamartamach | @matchandspark
        
        DoP: Barbara Kaniewska @_barbarakajakaniewska_
        
        Production: Shootme @shootmewarsaw
        
        Executive Producers: Michał Majewski, Marysia Surzycka, Alex Pak @aexnr
        
        Producer: Marianna Bociańska @m.onoo
        
        1st AC / Focus: Kajtek Zielinski @kajtekzielinski
        
        2nd AC / Loader: Kuba Kazmierczak
        
        Gaffer: Tony Bielecki @tonyrgbw
        
        Best boy: Mateusz Stępniewski
        
        Set Designer: Aleksandra Kostulska @aleksandrakostulska
        
        Stylist: Charlotte Tomas @charlottetomas
        
        Style Assistant: Nikita Zyk @nikita.zyk
        
        Makeup Artist: Ewelina Klećkowska @mua_ewelajna
        
        Hair Stylist: Delfina @delfiniunia
        
        Choreographer: Bartek Gąsior @bartlomiej.gasior | @ggmovement.directors
        
        Photographer: Yan Wasiuchnik @maanamman
        
        Liquid Content and support: Monika Łyko @monikalyko
        
        Post-production Producer: Alex Pak @aexnr
        
        Editor: Tomasz Bochniak
        
        Color: Jan Almashan @almashanjan | Miło @milo_postproduction
        
        Cleanup/compositing: @superzubel
        
        Animation: @karpmarie.arts
        
        3D: Aleksander Filipov @flatline.img
        `
    },
    {
        id: 12, title: 'SZCZYL - WIELKIE MIASTA', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={WIELKIEMIASTA}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1028107804',
        credits: ''
    },
    {
        id: 13, title: 'MARIA PESZEK - AVE MARIA', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={AVEMARIA}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1028099351',
        credits: ''
    },
    {
        id: 14, title: 'IKEA - POSITIVE IMPACT', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={IKEA}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1023738021',
        credits: ''
    },
    {
        id: 15, title: 'TMOBILE - KUKON X HODAK', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={TMOBILE}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/690571350',
        credits: `
        Directed by: Piotrek Matejkowski  
        DOP: Kajetan Plis  
        
        Production House: Papaya  
        Producer: Michał Wojciechowski  
        Production Manager: Ania Schiller  
        1st AD: Michał Guga  
        
        Stylist: Charlotte Tomaszewska  
        Stylist Assistants: Maria Konieczna, Martyna Oryszak
        `
    },
    {
        id: 16, title: 'HANIA RANI & DOBRAWA CZOCHER - MALASANA', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={MALASANA}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/647779892',
        credits: `
        Script and direction: Mateusz Miszczyński
        
        DOP: Jakub Stoszek
        
        Production Company: Papaya Films
        
        Executive Producer: Kacper Sawicki, Paweł Bondarowicz
        
        Producer: Ola Pudło
        
        Production Manager: Szymon Ziegler
        
        Production Coordinators: Franek Kostrzewa, Kuba Wellman
        
        Production Designer: Katarzyna Tomczyk
        
        II Production Designer: Katarzyna Jendrysik
        
        Costume Designer: Charlotte Tomaszewska
        
        Costume Designers assistants: Aleksandra Badurska
        
        Props Master: Michał Daszkiewicz
        
        Props Master Assistant: Janek Achonen
        
        Makeup Artist: Anna Korzeb
        
        Online: Televisor
        
        Titles: PWEE3000
        
        Colorist: Piotr Sasim
        `
    },
    {
        id: 17, title: 'BASS ASTRAL X IGO - BIKINI', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={BIKINI}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/408375473',
        credits: `
        Script & Directing: Grajper
        Directing of Photography: Piotr Uznanski
        Production: Graffiti Films
        Costume Designer: Charlotte Tomaszewska
      `
    },
    {
        id: 18, title: 'TYMBARK', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={TYMBARK}
                    className="w-full sm:w-9/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/633844080',
        credits: `
        Production Agency: East Eventz  
        Executive Producer: Michał Fałat  
        
        Creative Agency: Brainbox  
        
        Artists: Sanah, Artur Rojek, Vito Bambino, Kwiat Jabłoni  
        
        Text: Wojciech Młynarski  
        Composition: Andrzej Zieliński  
        
        Direction: Grajper  
        DOP: Mikołaj Syguda  
        
        Production Company: MOON Films  
        Executive Producers: Kuba Ranik & Magda Betlejewska  
        Producer: Siasia Seyfried  
        
        Set Design: Marta Zając | Najs Studio  
        Choreography: Weronika Pelczyńska  
        
        Costume Designer: Charlotte Tomaszewska  Artur Rojek, Vito Bambino  
        Costume Designer: Katarzyna Sokołowska  Sanah  
        
        Makeup: Aleksandra Lewandowska  
        
        Editors: Janek Wierzbicki | Miłosz Matuszewski
        `
    },
    {
        id: 19, title: 'KUKON & DARIA ZAWIALOW BATMAN', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={BATMAN}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1024318254',
        credits: ''
    },
    {
        id: 20, title: 'MAVERICK SABRE - YOU DONT EVEN NEED IT', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={MAVERICK2}
                    className="w-full sm:w-7/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1023220757',
        credits: `
        Script and Direction: Grajper @grajper
        
        Producer: Wojciech Czarkowski @voi.tek
        
        Prod Co: Friend London @friend_london
        
        EP: Nicole Hartley @nicolejhartley
        
        Label: FAMM @famm.music
        
        Commissioner: Ivor Lawson-Adamah @ivor_iii
        
        FAMM: Erin Corrian-Alexis @erincalexis
        
        FAMM: Daniela Navarro @danielanavarroaguirre
        
        FAMM BTS & Socials: Keisha Walters @keishawalterss
        
        Production Manager: Milo Beyts @milobeyts
        
        Production Coordinator: Gina Crighton @ginacrighton
        
        Production Assistant: Luigi Espindola @luigi.espindola
        
        DOP: Natasha Duursma @tasha_duursma
        
        1st AC: Oliver Bingham @oliver_bingham
        
        2nd AC: Scarlett Gardner @scarlettgardner_
        
        Lighting Asst: Leona Kramaric @leonanora
        
        1st AD: Elsa Grace @_elsa.grace_
        
        2nd AD: Oli Hill @oli_hill_
        
        3rd AD: Jessica Lee @jessicaolivialee
        
        Runner: Charlie Budden @charliebudden
        
        Production Designer: Sasha Hilton @sashahilton
        
        Prop Assistant: Christine Cave @christinecave
        
        Movement Director: Luki @lukisalukii
        
        HMUA: Raphael Arcadios @candy_puxe
        
        Stylist Maverick: Caprice Brown @lonelywolf_xx
        
        Stylist Fans: Charlotte Tomaszewska @charlottetomas
        
        Styling Asst: Kara Richardson @rarakichardson
        
        Styling Asst: Aya Abuelgasim
        
        Editor: Kuba Tomaszewicz @tomaschevich
        
        Colour Grade: John ORiordan @_johngrades_
        
        VFX: Jakob Thorhallsson @jakobthorhallsson
        
        VFX: Aurimas Kislius @cineauris @mily_matuszewski
        
        Online: Luka Kebo @luka_kebo
        `
    },
    {
        id: 21, title: 'SZCZYL - HIPHOPKRYTA', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={HIPHOPKRYTA}
                    className="w-full sm:w-9/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/1026792192',
        credits: ''
    },
    {
        id: 22, title: 'IFOLOR - KINDERGARTEN', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={IFOLOR}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/776615290',
        credits: `
        Agency: Jung von Matt LIMMAT
        
        Director: Krzysztof Grajper
        
        Production Company: Analog/Digital
        
        Producer: Barbara Dudek
        
        DOP: Patryk Kin
        
        Photographer: Alicja Lesiak
        
        Postproduction: Televisor
        
        Production Manager: Zdzich Heydel
        
        Production Coordinators: Aga Frankel + Aleksandra Dębek
        
        Set Manager: Michał Mańka
        
        1st AD: Bartosz Jarzębski "Dzida"
        
        Steadicam: Adam Mendry
        
        Gaffer: Mateusz Cichocki
        
        Costume designer: Charlotte Tomaszewska
        
        Costume designer assistants: Martyna Oryszak, Kasia Klimczyk, Weronika Sadowska
        
        Make-up: Aneta Kostrzewa
        
        Hair stylist: Łukasz Pycior
        
        Set design: Justyna Markowska
        `
    },
    {
        id: 23, title: 'REEBOK #REEDEFINE', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={REEBOK}
                    className="w-full sm:w-7/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/408333769',
        credits: `
        Starring: Joanna Jedrzejczyk, Ten Typ Mes, Rosalie, Holak, Kasia Bigos, Otsochodzi
        
        Directing & Photography: Tatiana & Karol
        
        Production: SHOOTME Visual Artists
        `
    },
    {
        id: 24, title: 'REVS - VATOS LANOS', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={REVS2}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/408333976',
        credits: `
        Published @ REVS Magazine
        
        Directing & Photography: Tatiana & Karol
        
        Creative Direction: Charlotte Tomaszewska
        
        Styling: Charlotte Tomaszewska
        
        Starring: Angie, Luiza, Hipek, Natalia
        `
    },
    {
        id: 25, title: 'ANASTAZJA', content: (
            <div className="flex justify-center w-screen">
                <Image
                    src={SZCZYL}
                    className="w-full sm:w-12/12 h-auto object-cover object-center"
                    alt="pic1"
                    loading="lazy"
                />
            </div>
        ), videoUrl: 'https://player.vimeo.com/video/549203871',
        credits: ''
    },
    {
        id: 26, title: 'ANASTAZJA', content: (
            <div className="w-screen h-1/4">

            </div>
        ), videoUrl: '',
        credits: ''
    },
];

