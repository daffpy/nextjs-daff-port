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
            <div className="max-w-[700px] mx-auto mt-10 font-[STUSSY]">
                
                <div className="flex justify-between items-center w-full h-full">
                    {currentPath === '/' ? (
                        <div className="flex mt-1">
                        <div className="ml-5 md:ml-0">
                            <MyIcon fill="#ffffff" width='48' height='48'/>
                        </div>
                        <div className="text-xl mt-2.5 underline">
                            dXcx
                        </div>
                        </div>
                    ):(
                        <Link href='/'>
                        <div className="flex mt-1">
                        <div className="ml-5 md:ml-0">
                            <MyIcon fill="#ffffff" width='48' height='48'/>
                        </div>
                        <div className="text-xl mt-2.5 underline">
                            dXcx
                        </div>
                        </div>
                        </Link>

                    )}
                    <div className="hidden md:flex ml-20 text-[#b6b6b6]">
                        <ul>
                            {currentPath === '/about' ?(
                                <span>
                                    <li className="mr-10 text-sm line-through text-white">About</li>
                                </span>

                            ):(
                                <Link href='/about'>
                                    <li className="mr-10 text-sm hover:line-through hover:text-white">About</li>
                                </Link>
                            )}
                        </ul>
                        <ul>
                            {currentPath === '/works' ?(
                                <span>
                                    <li className="mr-10 text-sm line-through text-white">Works</li>
                                </span>

                            ):(
                                <Link href='/works'>
                                    <li className="mr-10 text-sm hover:line-through hover:text-white">Works</li>
                                </Link>
                            )}
                        </ul>
                        <ul>
                            {currentPath === '/blog' ?(
                                <span>
                                    <li className="mr-10 text-sm line-through text-white">Blog</li>
                                </span>

                            ):(
                                <Link href='/blog'>
                                    <li className=" text-sm hover:line-through hover:text-white ">Blog</li>
                                </Link>
                            )}
                        </ul>
                    </div>
                    <div onClick={handleNav} className={!nav ? "md:hidden mr-5": 'hidden'}>
                        <AiOutlineMenu size={25}/>

                    </div>
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
                        <Link href='/about'>
                            <li className="py-6 mt-[100px] text-center text-lg hover:line-through hover:text-white hover:bg-white-100 hover:animate-pulse">About</li>
                        </Link>
                    </ul>
                    <ul>
                        <Link href='/'>
                            <li className="py-6 text-lg hover:line-through text-center hover:text-white hover:bg-black hover:animate-pulse">Works</li>
                        </Link>
                    </ul>
                    <ul>
                        <div>
                            <Link href='/'>
                                <li className="group py-6 text-lg hover:line-through text-center hover:text-white hover:animate-pulse">
                                    Blog
                                </li>
                            </Link>
                        </div>
                    </ul>
                </div>
                <div className="text-[10px] italic mt-20 text-center tracking-wide">
                    "The closer you look, the less you will see"
                </div>
                <div className="text-[#cbd5e0] mt-20">
                    @DAFfXcx
                </div>
            </div>
        </div>

    )
}
export default Navbar