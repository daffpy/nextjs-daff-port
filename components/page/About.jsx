import React, {useState} from "react";
import Image from "next/image"
import Tracks from '../api/TopTrack.jsx'
//import profilePic from 'public/picture/profile2023_2.jpg'
import profilePic from "../../public/picture/profile.jpg"

import { Accordion } from "../CustomUI.jsx";
import { siHtml5, siCss3, siJavascript, siPython, siCplusplus,
     siLua, siAseprite, siAdobephotoshop, siKrita, siUnrealengine,
    siUnity, siBlender, siSketchfab,siTypescript,siVisualstudio,siVisualstudiocode,
    siLospec} from 'simple-icons';
import Link from "next/link";
   

const AboutPage = () => {
    return(
        <div className="max-w-[550px] mx-auto mt-[160px]">
            <div className="mx-6">
                <div className="mt-[110px] text-[44px] font-htiny text-left">
                    <Image src={profilePic} style={{'borderRadius':'50%'}} width={122} height={122} alt="pp" placeholder="blur" />
                    <div className="mt-4  font-outfit font-bold tracking-wide">
                        About me
                    </div>   
                    <div className="font-outfit font-light leading-relaxed text-[15px] md:text-[16px] text-slate-800/90 dark:text-slate-300">
                        <p>
                            Hi, I am Daffa — a <span className="font-mono tracking-normal text-[14px]">[computer science major]</span> freshman born, raised, and currently living in <span className="font-mono tracking-normal text-[14px]">[Jakarta, Indonesia]</span>. 
                            I am a self-taught developer and pixel artist with a huge admiration for unique ideas and designs.
                            </p><p className="mt-4">
                            I'm also very interested in learning anything new, so as a hobby besides coding, i usually write blogs and make a pixel art that is usually based around Vtubers (Virtual Youtubers) and its communities.
                        </p>
                    </div>
                    <div className="mt-[65px] text-[32px] text-left font-outfit font-bold tracking-wide">
                        Knowledgebase
                    </div>
                    <div >
                        <div className="text-slate-800/90 dark:text-slate-300 font-outfit font-light tracking-wide leading-relaxed text-[14px] md:text-[15px] mt-1 mb-8">
                            <p>
                                I love learning a broad range of topics, therefore it also increases my knowledgebases and capabilities when met with a new challenges in the future.
                            </p>
                            <p className="mt-4">
                                So, here is a highlight of some things that i've used on (or for) my projects: <Link className="italic hover:not-italic text-[#e60067] opacity-70 hover:opacity-100" href="/projects">[click here to view my projects]</Link>
                            </p>
                        </div>
                        <Accordion category={["Web Development","System Language", "Scripting Languages"]} title="Languages" icon={[[siHtml5, siCss3, siJavascript,siTypescript ],[siCplusplus],[siLua,siPython]]}/>
                        <Accordion category={["Pixel Art","Digital Art"]} title="Artistry" icon={[[siAseprite,siLospec],[siAdobephotoshop,siKrita]]}/>
                        <Accordion category={["Game Engine","3D Modelling", "Development Tools"]} title="Game Development" icon={[[siUnrealengine, siUnity],[siBlender,siSketchfab],[siVisualstudio,siVisualstudiocode]]}/>
                    </div>
                    <div className="mt-[45px] text-[32px] text-left font-outfit font-bold tracking-wide">
                        Music taste
                    </div>
                    <div>
                        <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] mt-1 text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                Wondering what kinds of music im into?
                            </p>
                            <p>
                                Here's a few of my favorite songs that i've played a lot this month:
                            </p>
                        </div>
                    </div>
                    <Tracks/>
                    <div className="justify-center flex">
                    {/*<Pagination className="[&>button]:bg-white dark:[&>button]:bg-[#0E1116] [&>button>span]:text-slate-800 dark:[&>button>span]:text-slate-400  dark:[&>button:hover]:bg-black [&>button:hover]:bg-slate-400/30 [&>p]:bg-white dark:[&>p]:bg-black" total={2} animated={false} initialPage={1} onChange={handlePageChange} css={{$$paginationTextColor : '#FFFFFF', 'font-family': 'Outfit', $$paginationColor:'#0E1116', $$paginationScaleTransform: 1}}/>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutPage
