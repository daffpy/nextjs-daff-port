import React from "react";
import Link from "next/link";
import ArrIcon from "../public/assets/icons/rBtnIcon";
import { BsPalette, BsCodeSquare } from "react-icons/bs";

const WorkPage = () => {
    return(
        <div className="max-w-[550px] mx-auto mt-10">
            <div className="mx-6">
                <div className="mt-[110px] text-left">
                    <div className="group/cont">
                    <div className="font-space text-[22px]">
                        <p><a className="marker marker--text group-hover/cont:bg-[length:100%_100%]">Wanted to know more about <span className="font-bold">my coding projects </span>?</a></p>
                    </div>
                    <Link href="/about">
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
export default WorkPage