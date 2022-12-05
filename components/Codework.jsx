import React from "react";
import Link from "next/link";
import ArrIcon from "../public/assets/icons/rBtnIcon";

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
export default CodePage