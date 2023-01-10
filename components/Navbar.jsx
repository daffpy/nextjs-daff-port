import React,{useState, useEffect} from "react";
import Link from "next/link";
import MyIcon from '../public/assets/icons/myIcon.jsx'
import {AiOutlineMenu} from "react-icons/ai"
import { useRouter } from "next/router";
import ThemeToggler from "./Theme.jsx";


const Navbar = () => {
    const router = useRouter()
    const currentPath = router.pathname
    const [nav,setNav] = useState(false)
    const [scrollDir, setScrollDir] = useState("top");

    useEffect(() => {
        const threshold = 120;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - lastScrollY) < threshold) {
            ticking = false;
            return;
        }
        const curr = window.pageYOffset;
        if(curr <= threshold){
            setScrollDir('top')
        }else if(curr > threshold){
            setScrollDir(scrollY > lastScrollY ? "down" : "up");
        }

        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
        };

        const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollDir);
            ticking = true;
        }
        };

        window.addEventListener("scroll", onScroll);

        //console.log(scrollY, scrollDir);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    const handleNav = () => {
        setNav(!nav)
    }
    return(
        <div>
            <div className={"max-w-[750px] backdrop-blur-[4px] z-[1] ease-in-out fixed duration-200 md:w-[750px] top-0 inset-x-0 mx-auto font-[STUSSY]" +
                            /*(scrollDir == 'top' ? '' : '') +*/
                            (scrollDir == 'down' ? ' translate-y-[-100%]' : '') + 
                            (scrollDir == 'up' ? ' translate-y-[0%] pt-0': '')}>   
                <div className={"ml-2 sm:ml-3 md:ml-0 flex justify-between items-center bg-white/50 pb-1 dark:bg-[#0E1116]/50"
                                + ((scrollDir == 'top' ? ' pt-5' : ''))}>
                    {currentPath === '/' ? (
                        <div className="flex mt-1">
                        <div className="ml-2 md:ml-0">
                            <MyIcon className="dark:fill-white fill-black ease-in-out duration-200" width='48' height='48'/>
                        </div>
                        <div className="text-xl mt-2.5 underline">
                            dXcx
                        </div>
                        </div>
                    ):(
                        <Link href='/'>
                        <div className="flex mt-1">
                        <div className="ml-2 md:ml-0">
                            <MyIcon className="dark:fill-white fill-black ease-in-out duration-200" width='48' height='48'/>
                        </div>
                        <div className="text-xl mt-2.5 underline">
                            dXcx
                        </div>
                        </div>
                        </Link>

                    )}
                    <div className={"mr-4 md:mr-4 lg:mr-0 mt-2 text-slate-100"}>
                        <ThemeToggler/>
                    </div>
                </div>
            </div>
            <div className={nav ? "md:hidden fixed right-0 top-0 w-[65%] sm:w-[50%] md:w-[45%] h-screen bg-black p-10 ease-in duration-300 opacity-[.9] font-[STUSSY] z-[2]" : 'fixed right-[-100%] duration-400'}>
                <button onClick={handleNav} className="group border px-4 py-1 rounded-tl-[90%] rounded-tr-[50%] rounded-br-[75%] rounded-bl-[50%] hover:animate-pulse">
                    <div className=" text-[24px]">
                        x
                    </div>
                </button>
                <div className="mt-[100px] text-center">
                    <ul className="py-6">
                            {currentPath === '/guestbook' ?(
                                <span>
                                    <div className=" before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#e60067] relative inline-block">
                                    <li className="text-lg relative text-white">Guestbook</li></div>
                                </span>

                            ):(
                                <Link href='/guestbook'>
                                    <div className="group text-center inline-block  text-lg">
                                    <li className="group-hover:bg-[length:100%_100%] p-2 marker marker--mark">Guestbook</li></div>
                                </Link>
                            )}
                    </ul>
                    <ul className="py-6">
                            {currentPath === '/blog' ?(
                                <div className=" before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#e60067] relative inline-block">
                                    <li className="text-lg relative text-white">Blog</li></div>

                            ):(
                                <Link href='/blog'>
                                    <div className="group text-center inline-block  text-lg">
                                    <li className="group-hover:bg-[length:100%_100%] p-2 marker marker--mark">Blog</li></div>
                                </Link>
                            )}
                    </ul>
                </div>
                <div className="text-[#cbd5e0] absolute bottom-20">
                    @DAFfXcx
                </div>
            </div>
        </div>

    )
}
export default Navbar