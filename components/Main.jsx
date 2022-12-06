import React from "react";
import Link from "next/link";
import Home from "../pages/blog/index";
import ArrIcon from "../public/assets/icons/rBtnIcon";

const MainPage = () => {
    return(
        <div className="max-w-[550px] mx-auto mt-10">
            <div className="mx-6">
                <div className="mt-[110px] text-[44px] font-outfit font-bold tracking-wide text-left">
                    Hi, my name is <span className="">Daffa</span>.
                </div>
                <div className="font-space text-[16px] text-left">
                    <div className="text-[#cbd5e0]">
                            I am a hobbyist developer and a pixel artist. This is my personal website showcasing stuff about me and my latest ventures.

                    </div>
                    <Link className="" href="/about">
                    <button className="items-center group flex rounded-full hover:rounded-l-lg bg-white px-5 pt-2 pb-2 mt-[45px] text-[16px] text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                        More about me
                        <ArrIcon className='stroke-[1.5px] stroke-[#1d1d1e] ml-3 ease-in duration-200 group-hover:scale-x-[1.5] group-hover:ml-4' />
                    </button>
                    </Link>

                </div>
                {/*
                <div className="grid grid-rows-3 grid-flow-col gap-x-5 font-space text-left border px-6 py-3 rounded-md">
                        <div className="grid row-span-3 place-content-center text-[18px] font-bold">
                            #1
                        </div>
                        <div className="grid col-span-2 text-[14px] text-white font-bold">
                            VtuberWiki
                        </div>
                        <div className="grid text-[12px] row-span-2 col-span-2 text-[#cbd5e0]">
                            a python package functioning as a wrapper for VirtualYoutuber Fandom API
                        </div>


                </div>
                */}
            </div>
        </div>
    )
}
export default MainPage