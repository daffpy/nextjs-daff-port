import React, {useState} from "react";
import { Tooltip } from "@nextui-org/react";
import Tracks from "../api/TopTrack.jsx";
import Footer from "../Footer.jsx";
import Avatar from "../api/GetProfile.jsx";

import { Pagination} from '@nextui-org/react';


import { HTMLIcon, CSSIcon, SFIcon, 
    JSIcon, PYIcon, CPPIcon, 
    LuaIcon, AseIcon, PSIcon,
    LosIcon, KritaIcon, UnityIcon, 
    VSIcon, BlenderIcon, MixIcon,} from "../../public/assets/icons/aboutIcon";
   

const AboutPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return(
        <div className="max-w-[550px] mx-auto mt-[160px]">
            <div className="mx-6">
                <div className="mt-[110px] text-[44px] font-htiny text-left">
                    <Avatar/>
                    <div className="mt-8  font-outfit font-bold tracking-wide">
                        About me
                    </div>   
                    <div className="font-outfit font-light leading-relaxed text-[15px] md:text-[16px] text-slate-300">
                        <p>
                            Hi, I am Daffa - a 17 years old <a className="underline decoration-dashed font-normal decoration-sky-500 underline-offset-2">developer</a>, <a className="underline decoration-dashed font-normal decoration-indigo-500 underline-offset-2">pixel artist</a> and a <a className="underline  font-normal decoration-pink-500 underline-offset-2">senior highschooler</a> based in Jakarta, Indonesia.
                            I love to utilize my laptop for anything, from coding, gaming and chatting with my friends!
                            <br/> 
                            <br/> 
                            I'm also very interested in learning anything new, so as a hobby besides coding, i usually <a className="underline  font-normal decoration-pink-500 underline-offset-2">write blogs</a> and <a className="underline  font-normal decoration-pink-500 underline-offset-2">make a pixel art</a> that is usually based around <a className="underline decoration-dashed font-normal decoration-indigo-500 underline-offset-2">Vtubers</a> <a className="text-slate-400">(Virtual Youtubers)</a> and its communities.
                        </p>
                    </div>
                    <div className="mt-[65px] text-[32px] text-left underline decoration-dotted underline-offset-4 decoration-indigo-500 font-outfit font-bold tracking-wide">
                        Knowledgebase
                    </div>
                    <div >
                        <div className="font-outfit font-light tracking-wide leading-relaxed text-[14px] md:text-[15px] mt-2">
                            <p className="text-slate-300">
                                List of some things that i've used on (or for) my projects:
                            </p>
                            <p className="italic text-slate-400">
                                Tip: you can hover or click the image to find out what each icon means!
                            </p>
                        </div>
                        <div className="text-[18px] font-[STUSSY] tracking-wide font-bold mt-8">
                            languages
                        </div>
                        <div className="grid grid-cols-6 px-3 py-3 bg-[url(//s2.svgbox.net/pen-brushes.svg?ic=brush-10&color=E60067)] max-w-[300px]">
                            <Tooltip content="HTML" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <HTMLIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="CSS" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <CSSIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="JavaScript" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <JSIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="Python" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <PYIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="C++ (Competitive Programming)" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <CPPIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="Lua (Learning)" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <LuaIcon width={26}/>
                            </Tooltip>
                        </div>
                        <div className="text-[18px] font-[STUSSY] tracking-wide font-bold mt-6 c">
                            Art
                        </div>
                        <div className="max-w-[210px] grid grid-cols-4 px-3 py-3 bg-[url(//s2.svgbox.net/pen-brushes.svg?ic=brush-10&color=E60067)]">
                            <Tooltip placement="topStart" content="Aseprite (Pixel Art)" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <AseIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="Photoshop" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <PSIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="Krita" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <KritaIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="Lospec (Pallette)" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <LosIcon width={26}/>
                            </Tooltip>
                        </div>
                        <div className="text-[18px] font-[STUSSY] tracking-wide font-bold mt-6 ">
                            Game Development
                        </div>
                        <div className=" max-w-[260px] grid grid-cols-5 px-3 py-3 bg-[url(//s2.svgbox.net/pen-brushes.svg?ic=brush-10&color=E60067)]">
                            <Tooltip placement="topStart" content="Unity (2D & 3D)" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <UnityIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="Visual Studio" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <VSIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="Blender" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <BlenderIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="Sketchfab (3D Model)" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <SFIcon width={26}/>
                            </Tooltip>
                            <Tooltip content="Mixamo (Animation)" css={{$$tooltipTextColor : '#FFFFFF', 'font-family': 'Space Grotesk', $$tooltipColor:'black'}}>
                                <MixIcon width={26}/>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="mt-[65px] text-[32px] text-left underline decoration-dotted underline-offset-4 decoration-indigo-500 font-outfit font-bold tracking-wide">
                        Music taste
                    </div>
                    <div>
                        <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] mt-2 text-slate-300 leading-relaxed">
                            <p>
                                Wondering what kinds of music im into?
                            </p>
                            <p>
                                Here's a few of my favorite songs that i've played a lot this month:
                            </p>
                        </div>
                    </div>
                    <Tracks currentPage={currentPage} />
                    <div className="justify-center flex">
                    <Pagination className="[&>button]:bg-[#0E1116] [&>button>span]:text-slate-400  [&>button:hover]:bg-black [&>p]:bg-black" total={2} animated={false} initialPage={1} onChange={handlePageChange} css={{$$paginationTextColor : '#FFFFFF', 'font-family': 'Outfit', $$paginationColor:'#0E1116', $$paginationScaleTransform: 1}}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default AboutPage