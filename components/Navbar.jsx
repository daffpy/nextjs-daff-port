import React,{useState} from "react";
import Link from "next/link";
import MyIcon from '../public/assets/icons/myIcon.jsx'
import {AiOutlineMenu} from "react-icons/ai"
import { useRouter } from "next/router";


const Navbar = () => {
    const router = useRouter()
    const currentPath = router.pathname
    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return(
        <div>
            <div className={"max-w-[800px] md:w-[800px] fixed top-0 inset-x-0 mx-auto pt-5 pb-1 font-[STUSSY]" + (!nav ? " backdrop-blur-[4px] bg-[#0E1116]/50 z-[9999]": '')}>                
                <div className="pl-2 md:pl-4 flex justify-between items-center">
                    {currentPath === '/' ? (
                        <div className="flex mt-1">
                        <div className="ml-2 md:ml-0">
                            <MyIcon fill="#ffffff" width='48' height='48'/>
                        </div>
                        <div className="text-xl mt-2.5 underline">
                            dXcx
                        </div>
                        </div>
                    ):(
                        <Link href='/'>
                        <div className="flex mt-1">
                        <div className="ml-2 md:ml-0">
                            <MyIcon fill="#ffffff" width='48' height='48'/>
                        </div>
                        <div className="text-xl mt-2.5 underline">
                            dXcx
                        </div>
                        </div>
                        </Link>

                    )}
                    <div className={" hidden ml-20 pr-10 text-slate-100" + (currentPath != '/blog/[slug]' ? " md:flex":'')}>
                        <ul>
                            {currentPath === '/about' ?(
                                <span>
                                    <div className="mr-10 mt-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#e60067] relative inline-block">
                                    <li className="text-sm relative text-white">About</li></div>
                                </span>

                            ):(
                                <Link href='/about'>
                                    <li className="mr-10 text-sm hover:bg-[length:100%_100%] p-2 marker marker--mark ">About</li>
                                </Link>
                            )}
                        </ul>
                        <ul>
                            {currentPath === '/works' ?(
                                <span>
                                    <div className="mr-10 mt-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#e60067] relative inline-block">
                                    <li className="relative text-sm text-white">Works</li></div>
                                </span>

                            ):(
                                <Link href='/works'>
                                    <li className="mr-10 text-sm hover:bg-[length:100%_100%] p-2 marker marker--mark ">Works</li>
                                </Link>
                            )}
                        </ul>
                        <ul>
                            {currentPath === '/blog' ?(
                                <span>
                                    <div className="mr-10 mt-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#e60067] relative inline-block">
                                    <li className="relative text-sm text-white">Blog</li></div>
                                </span>

                            ):(
                                <Link href='/blog'>
                                    <li className="mr-10 text-sm hover:bg-[length:100%_100%] p-2 marker marker--mark ">Blog</li>
                                </Link>
                            )}
                        </ul>
                    </div>
                    {currentPath != '/blog/[slug]'?
                    (
                        <div onClick={handleNav} className={(!nav ? "md:hidden mr-5": 'hidden')}>
                            <AiOutlineMenu size={25}/>

                        </div>

                    ):('')}
                </div>
            </div>
            <div className={nav ? "md:hidden fixed right-0 top-0 w-[65%] sm:w-[50%] md:w-[45%] h-screen bg-black p-10 ease-in duration-300 opacity-[.9] font-[STUSSY] z-[2]" : 'fixed right-[-100%] duration-400'}>
                <button onClick={handleNav} className="group border px-4 py-1 rounded-tl-[90%] rounded-tr-[50%] rounded-br-[75%] rounded-bl-[50%] hover:animate-pulse">
                    <div className=" text-[24px] group-hover:line-through">
                        x
                    </div>
                </button>
                <div>
                    <ul>
                        {currentPath === '/about' ?(
                                <span>
                                    <li className="py-6 mt-[100px] text-center text-lg line-through text-white ">About</li>
                                </span>

                            ):(
                                <Link href='/about'>
                                    <li className="py-6 mt-[100px] text-center text-lg hover:line-through hover:text-white hover:animate-pulse">About</li>
                                </Link>
                            )}
                    </ul>
                    <ul>
                            {currentPath === '/works' ?(
                                <span>
                                    <li className="py-6  text-center text-lg line-through text-white">Works</li>
                                </span>

                            ):(
                                <Link href='/works'>
                                    <li className="py-6 text-center text-lg hover:line-through hover:text-white hover:animate-pulse">Works</li>
                                </Link>
                            )}
                    </ul>
                    <ul>
                            {currentPath === '/blog' ?(
                                <span>
                                    <li className="py-6  text-center text-lg line-through text-white">Blog</li>
                                </span>

                            ):(
                                <Link href='/blog'>
                                    <li className="py-6 text-center text-lg hover:line-through hover:text-white hover:animate-pulse">Blog</li>
                                </Link>
                            )}
                    </ul>
                </div>
                <div className="text-[#cbd5e0] absolute bottom-10">
                    @DAFfXcx
                </div>
            </div>
        </div>

    )
}
export default Navbar