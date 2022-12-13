import React,{useReducer} from "react";
import Link from "next/link";
import Image from "next/image";
import OlliePicGif from "../public/assets/img/ollie1.gif"
import OlliePic from "../public/assets/img/ollie1-static.png"
import {FaTwitter, FaDiscord} from "react-icons/fa"
import ArrIcon from "../public/assets/icons/rBtnIcon";
import { BsPalette, BsCodeSquare } from "react-icons/bs";

const WorkPage = () => {
    return(
        <div className="max-w-[550px] mx-auto mt-[160px]">
            <div className="mx-6">
                <div className="mt-[110px] text-left">
                    <div className="group/cont">
                    <div className="font-space text-[22px]">
                        <p><a className="marker marker--text group-hover/cont:bg-[length:100%_100%]">Wanted to know more about <span className="font-bold">my coding projects </span>?</a></p>
                    </div>
                    <Link href="/works/code">
                    <button className=" group/btn font-space flex rounded-full hover:rounded-l-lg bg-white px-5 pt-2 pb-2 mt-[40px] text-[14px] text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                        <BsCodeSquare className=" stroke-[#1d1d1e] mt-[3.5px] mr-2"/>
                        More about my coding projects
                        <ArrIcon className='stroke-[1.5px] stroke-[#1d1d1e] mt-[2px] ml-3 ease-in duration-200 group-hover/btn:scale-x-[1.5] group-hover/btn:ml-4' />
                    </button>
                    </Link>
                    </div>
                    <div className="group/cont">
                    <div className="font-space text-[22px] mt-[90px] group">
                        <p><a className="marker marker--text group-hover/cont:bg-[length:100%_100%]">.. or simply view my amazing <span className="font-bold">artworks</span> ?</a></p>
                    </div>
                    <Link href="/works/art">
                    <button className="group/btn font-space flex rounded-full hover:rounded-l-lg bg-white px-5 pt-2 pb-2 mt-[40px] text-[14px] text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                        <BsPalette className=" stroke-[#1d1d1e] mt-[3px] mr-2"/>
                        More about my artworks
                        <ArrIcon className='stroke-[1.5px] stroke-[#1d1d1e] mt-[2px] ml-3 ease-in duration-200 group-hover/btn:scale-x-[1.5] group-hover/btn:ml-4' />
                    </button>
                    </Link>
                    </div>
                    <div>
                    </div>



                    <div id="footer" className="pb-[150px]"></div>
                </div>
            </div>
        </div>
    )
}

const CodePage = () => {

    return(
        <div className="max-w-[550px] mx-auto mt-10">
            <div className="mx-6">
                <div className="mt-[110px] text-[44px] font-htiny text-left">
                    <div className="underline">
                        My Projects
                    </div>
                    <div className="font-space text-[14px] text-[#cbd5e0]">
                        <p>
                            Here is a few things/projects that i've worked on during my programming journey:
                        </p>
                    </div>
                    <div className="group">
                        <div className="inline-block mt-[65px] text-[30px] italic font-space font-bold text-left marker marker--text group-hover:bg-[length:100%_100%]">
                            vtuberwiki-py
                        </div>
                        <div className=" font-space text-[14px] text-[#cbd5e0]">
                            <p>
                                <a className="marker marker--ul group-hover:bg-[length:100%_100%]">
                                    A wrapper for VirtualYoutuber Fandom API built in Python.  in Python. in Python. in Python.
                                </a>
                            </p>
                            <p className="mt-[10px]">
                                This package allows you to access Fandom API or scrape a Fandom page either asychronously or sychronously.
                            </p>
                            <p className="mt-[10px]">
                                This is very useful for Discord bot developers that needs a package to grabs information about a certain vtuber.
                            </p>
                        </div>
                        <Link href="https://github.com/daffpy/vtuberwiki-py" target="_blank" rel="noreferrer noopener">
                            <button className=" group/btn font-space flex rounded-full hover:rounded-l-lg bg-white px-5 pt-2 pb-2 mt-[40px] text-[14px] text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                                    View Repository
                                <ArrIcon className='stroke-[1.5px] stroke-[#1d1d1e] mt-[2px] ml-3 ease-in duration-200 group-hover/btn:scale-x-[1.5] group-hover/btn:ml-4' />
                            </button>
                        </Link>
                    </div>
                    <div className="group">
                        <div className="inline-block mt-[65px] text-[30px] italic font-space font-bold text-left marker marker--text group-hover:bg-[length:100%_100%]">
                            Tycha <span className="not-italic">- Discord Bot</span>
                        </div>
                        <div className=" font-space text-[14px] text-[#cbd5e0]">
                            <p>
                                <a className="marker marker--ul group-hover:bg-[length:100%_100%]">
                                    Tycha is a Discord bot which its sole purpose is to fulfill your randomness needs.
                                </a>
                            </p>
                            <p className="mt-[10px]">
                            Most of its features are totally based on randomness and chances, which uses a lot of randomness-based api endpoints and packages to perform.
                            </p>
                            <p className="mt-[10px] italic">
                                Note: although the bot is verified by Discord, i chose to discontinue this project as Discord bot development no longer interest me.
                            </p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="inline-block mt-[65px] text-[30px] italic font-space font-bold text-left marker marker--text group-hover:bg-[length:100%_100%]">
                            VtuberBot <span className="not-italic">- Discord Bot</span>
                        </div>
                        <div className=" font-space text-[14px] text-[#cbd5e0]">
                            <p>
                                <a className="marker marker--ul group-hover:bg-[length:100%_100%]">
                                    A bot fully featured based around Vtubers. 
                                </a>
                            </p>
                            <p className="mt-[10px]">
                                VtuberBot uses a private VtuberWiki API that uses vtuberwiki-py for its backend, resulting in a fully featured bot with high flexibility.
                            </p>
                            <p className="mt-[10px] italic">
                                Note: although 90% of its features have already been implemented, this bot/project will remain private for now.
                            </p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="inline-block mt-[65px] text-[30px] italic font-space font-bold text-left marker marker--text group-hover:bg-[length:100%_100%]">
                            daffxcx.art
                        </div>
                        <div className=" font-space text-[14px] text-[#cbd5e0]">
                            <p>
                                <a className="marker marker--ul group-hover:bg-[length:100%_100%]">
                                    Yet another redesign of my old portfolio website, <span className="italic font-bold">daffak.xyz</span> 
                                </a>
                            </p>
                            <p className="mt-[10px]">
                                The purpose of this redesign is to learn more about JavaScript framework as my old portfolio website was made in Bootstrap and it gave me a headache since it has a <span className="italic">very</span> bad readibility.
                            </p>
                            <p className="mt-[10px] italic">
                                Note: This is my first time using Next.JS and TailwindCSS and i can't wait to learn more about other framework.
                            </p>
                        </div>
                    </div>


                    <div id='footer' className="pb-[150px]">

                    </div>
                </div>
            </div>
        </div>
    )
}
const ArtPage = () => {
    const initialState = {}
    const data = ["moona", "cat", "bae", "kson", "ollie1",'moona2','ollie2']
    data.forEach(key => initialState[key] = false);
    function reducer(state, action){
        switch(action.anim){
            case 'bae':
                return {bae : !state.bae};
            case 'moona':
                return {moona : !state.moona};
            case 'moona2':
                return {moona2 : !state.moona2};
            case 'cat':
                return {cat : !state.cat};
            case 'kson':
                return {kson : !state.kson};
            case 'ollie1':
                return {ollie1 : !state.ollie1};
            case 'ollie2':
                return {ollie2 : !state.ollie2};

        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div className="max-w-[550px] mx-auto mt-10">
            <div className="mx-6">
                <div className="mt-[110px] text-[44px] font-outfit text-left">
                    <div className="font-bold">
                        Artworks
                    </div>
                    <div className="font-space text-[14px] text-[#cbd5e0]">
                        <p>
                            Here is a collection from some of my finest artworks! i hope this will give you a rough idea of my pixel art style.
                        </p>
                        <p className="mt-[20px]">
                            I love making pixel art and animations and i will keep making them, maybe this will give a fellow artists a reference. Any suggestion or tips is appreciated.
                        </p>
                        <p className="mt-[20px]">
                        Okay enough talking, please enjoy your visit here!
                        </p>
                        <p className="mt-[40px] italic">
                        Tip: you can enlarge & view the animation if you click/hover on the image
                        </p>
                    </div>
                    <div className="mt-[50px]">
                    <div className="grid grid-cols-2 justify-items-center">
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'bae'})} onMouseOut={() => dispatch({anim: 'bae'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.bae ?'/assets/img/bae-1.gif':'/assets/img/bae-1-static.png'} width={180} height={180} alt='baelz'/>
                        </div>
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'kson'})} onMouseOut={() => dispatch({anim: 'kson'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.kson ?'/assets/img/model1_4.gif':'/assets/img/model1_4-static.png'} width={180} height={180} alt='kson'/>
                        </div>
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'cat'})} onMouseOut={() => dispatch({anim: 'cat'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.cat ?'/assets/img/cat.gif':'/assets/img/cat-static.png'} width={180} height={180} alt='nft cat'/>
                        </div>
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'moona'})} onMouseOut={() => dispatch({anim: 'moona'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.moona ?'/assets/img/moona-1.gif':'/assets/img/moona-1-static.png'} width={180} height={180} alt='moona'/>
                        </div>
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'ollie2'})} onMouseOut={() => dispatch({anim: 'ollie2'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.ollie2 ?'/assets/img/olliet-3-4-3.gif':'/assets/img/olliet-3-4-3-static.png'} width={180} height={180} alt='ollie teacher'/>
                        </div>
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'moona2'})} onMouseOut={() => dispatch({anim: 'moona2'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.moona2 ?'/assets/img/MoonaRun3.gif':'/assets/img/MoonaRun3-static.png'} width={180} height={180} alt='moona'/>
                        </div>
                        <div className="group col-span-2">
                            <Image onMouseOver={() => dispatch({anim: 'ollie1'})} onMouseOut={() => dispatch({anim: 'ollie1'})} className="w-[250px] h-auto rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.ollie1 ? OlliePicGif:OlliePic} alt='ollie'/>
                        </div>
                    </div>
                    </div>
                    <div className="font-bold pt-20">
                        Contact

                    </div>
                    <div className="font-space text-[14px] text-[#cbd5e0]">
                        <p>
                            Interested in my artworks and wanted to do an art commission? or simply wanted to ask couple of things about my art?
                        </p>
                        <p className="mt-[20px] border-b inline-block border-slate-500 pb-5">
                            You can contact me using the platform below:
                        </p>
                        <div className="text-[14px] mt-[20px] mb-1 group text-white">
                            <div className="inline-block">
                            <a href="https://twitter.com/daffxcx" target="_blank" rel="noreferrer noopener">
                            <p className=" flex items-center font-bold marker marker--mark hover:bg-[length:100%_100%]">
                                <FaTwitter className="mr-2"/>Twitter - @daffxcx
                            </p>
                            </a></div>
                        </div>
                        <div className="text-[14px] mt-2 group text-white text-md">
                            <div className="inline-block">
                            <a href="https://discordapp.com/users/820569882860716072" target="_blank" rel="noreferrer noopener">
                            <p className=" flex items-center font-bold marker marker--mark hover:bg-[length:100%_100%]">
                                <FaDiscord className=" mr-2"/>Discord - daff#1913
                            </p>
                            </a></div>
                        </div>
                    </div>

                    <div id='footer' className="pb-[150px]">

                    </div>
                </div>
            </div>
        </div>
    )
}
export {WorkPage, CodePage, ArtPage}