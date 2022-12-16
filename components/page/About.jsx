import React from "react";
import { Tooltip } from "@nextui-org/react";
import Tracks from "../api/TopTrack.jsx";
import Footer from "../Footer.jsx";
import Avatar from "../api/GetProfile.jsx";
import { HTMLIcon, CSSIcon, SFIcon, 
    JSIcon, PYIcon, CPPIcon, 
    LuaIcon, AseIcon, PSIcon,
    LosIcon, KritaIcon, UnityIcon, 
    VSIcon, BlenderIcon, MixIcon,} from "../../public/assets/icons/aboutIcon";

const AboutPage = () => {
    return(
        <div className="max-w-[550px] mx-auto mt-[160px]">
            <div className="mx-6">
                <div className="mt-[110px] text-[44px] font-htiny text-left">
                    <Avatar/>
                    <div className="mt-8  font-outfit font-bold tracking-wide">
                        About me
                    </div>   
                    <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] text-[#cbd5e0]">
                        <p>
                            Hi, I am Daffa - another 17 y.o boy from Indonesia, who is also a very passionate pixel artist and programmer.
                        </p>
                        <p className="mt-[20px]">
                            I'm very interested in game development, machine learning and competitive programming. I also love doing pixel art that are mainly based on Vtubers.
                        </p>
                    </div>
                    <div className="mt-[65px] text-[32px] text-left underline underline-offset-4 font-outfit font-bold tracking-wide">
                        Knowledgebase
                    </div>
                    <div >
                        <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] text-[#cbd5e0]">
                            <p>
                                List of some things that i've used on (or for) my projects:
                            </p>
                            <p className="italic">
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
                    <div className="mt-[65px] text-[32px] text-left underline underline-offset-4 font-outfit font-bold tracking-wide">
                        Music taste
                    </div>
                    <div>
                        <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] text-[#cbd5e0]">
                            <p>
                                Wondering what kinds of music im into?
                            </p>
                            <p>
                                Here's a few of my favorite songs that i've played a lot this month:
                            </p>
                        </div>
                    </div>
                    <Tracks />

                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default AboutPage