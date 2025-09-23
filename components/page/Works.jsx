import Link from "next/link";
import ArrIcon from "../../public/assets/icons/rBtnIcon";
import { BsPalette, BsCodeSquare } from "react-icons/bs";
import Footer from "../Footer";

const WorkPage = () => {
    return(
        <div className="max-w-[550px] mx-auto mt-[160px]">
            <div className="mx-6">
                <div className="mt-[110px] text-left">
                    <div className="group/cont">
                    <div className="font-outfit font-light tracking-wider text-[22px]">
                        <p><a className="marker marker--text group-hover/cont:bg-[length:100%_100%]">Wanted to know more about <span className="font-bold">my coding projects </span>?</a></p>
                    </div>
                    <Link href="/works/code">
                    <button className=" group/btn font-outfit font-light tracking-wide flex rounded-full hover:rounded-l-lg dark:bg-white bg-slate-900/90 px-5 pt-2 pb-2 mt-[40px] text-[14px] text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                        <BsCodeSquare className=" text-white dark:text-[#1d1d1e] mt-[3.5px] mr-2"/>
                        <p className="text-white dark:text-[#1d1d1e]">More about my coding projects</p>
                        <ArrIcon className='stroke-[1.5px] stroke-white dark:stroke-[#1d1d1e] mt-[2px] ml-3 ease-in duration-200 group-hover/btn:scale-x-[1.5] group-hover/btn:ml-4' />
                    </button>
                    </Link>
                    </div>
                    <div className="group/cont">
                    <div className="font-outfit tracking-wider font-light text-[22px] mt-[90px] group">
                        <p><a className="marker marker--text group-hover/cont:bg-[length:100%_100%]">.. or simply view my amazing <span className="font-bold">artworks</span> ?</a></p>
                    </div>
                    <Link href="/works/art">
                    <button className="group/btn font-outfit font-light tracking-wide flex rounded-full hover:rounded-l-lg dark:bg-white bg-slate-900/90 px-5 pt-2 pb-2 mt-[40px] text-[14px] text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                        <BsPalette className=" text-white dark:text-[#1d1d1e] mt-[3px] mr-2"/>
                        <p className="text-white dark:text-[#1d1d1e]">More about my artworks</p>
                        <ArrIcon className='stroke-[1.5px] stroke-white dark:stroke-[#1d1d1e] mt-[2px] ml-3 ease-in duration-200 group-hover/btn:scale-x-[1.5] group-hover/btn:ml-4' />
                    </button>
                    </Link>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CodePage = () => {

    return(
        <div className="max-w-[550px] mx-auto mt-10">
            <div className="mx-6">
                <div className="mt-[110px] text-[44px] font-outfit text-left">
                    <div className="font-bold">
                        My Projects
                    </div>
                    <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] text-slate-600 dark:text-[#cbd5e0]">
                        <p>
                            Here is a few things/projects that i've worked on during my programming journey:
                        </p>
                        <br/>
                        <p>
                            You can find a detailed summary of the projects' <Link className="italic hover:underline text-[#e60067]" href="/portfolio.pdf">portfolio here</Link>.
                        </p>
                        <br/>
                        <p>
                            And my <Link className="italic hover:underline text-[#e60067]" href="/portfolio.pdf">resume</Link> too if you ever need it.
                        </p>
                    </div>
                    <div>
                    <div className="group">
                        <div className="inline-block mt-[65px] text-[30px] italic font-space font-bold text-left marker marker--text group-hover:bg-[length:100%_100%]">
                            Tycha <span className="not-italic">- Discord Bot</span>
                        </div>
                        <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] text-slate-600 dark:text-[#cbd5e0]">
                            <p>
                                <a className="marker marker--ul group-hover:bg-[length:100%_100%]">
                                    Tycha is my first ever published programming project, it is a multipurpose discord bot. I created Tycha because i felt like back then, there isn't a lot of specific types of bot, therefore i dicded to create one for me & my friends' server
                                </a>
                            </p>
                            <p className="mt-[10px]">
                                Tycha could help moderate a discord server and boost engangement at the same time by providing playful and useful feature that has never been added to other bots before, making it grew faster on the bot listing service, namely Top.gg.
                            </p>
                            <p className="mt-[10px] italic">
                                Note: although the bot is verified by Discord, i chose to discontinue this project as Discord bot development no longer interest me due to the repeated issue of the discord-py wrapper library.
                            </p>
                        </div>
                        <Link href="https://github.com/daffpy/tycha" target="_blank" rel="noreferrer noopener">
                            <button className=" group/btn font-space flex rounded-full hover:rounded-l-lg dark:bg-white bg-slate-900/90 px-5 pt-2 pb-2 mt-[40px] text-[14px] text-white dark:text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                                    Repository
                                <ArrIcon className='stroke-[1.5px] stroke-white dark:stroke-[#1d1d1e] mt-[2px] ml-3 ease-in duration-200 group-hover/btn:scale-x-[1.5] group-hover/btn:ml-4' />
                            </button>
                        </Link>
                    </div>    
                    <div className="group">
                        <div className="inline-block mt-[65px] text-[30px] italic font-space font-bold text-left marker marker--text group-hover:bg-[length:100%_100%]">
                            vtuberwiki-py
                        </div>
                        <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] text-slate-600 dark:text-[#cbd5e0]">
                            <p>
                                <a className="marker marker--ul group-hover:bg-[length:100%_100%]">
                                    I was a huge fan of Vtubers (Virtual Youtubers) and wanted to share their stories and information with other people using Fandom API, but it was very undermaintained therefore i decided to make a wrapper for their API.
                                </a>
                            </p>
                            <p className="mt-[10px]">
                                VtuberWiki-Py is an Fandom API Wrapper built on Python, exclusively made for Vtuber (Virtual Youtuber) Wiki Fandom. This allows the user to extract the Fandom’s page content smoothly, as raw Fandom API are known to be very unstable and may yield inconsistent API responses format due to it being rarely maintained.
                            </p>
                            <p className="mt-[10px]">
                                This is very useful for Discord bot developers or just developers in general that needs a library to grab information about a certain vtuber asynchronously or synchronously.
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <Link href="https://github.com/daffpy/vtuberwiki-py" target="_blank" rel="noreferrer noopener">
                            <button className=" group/btn font-space flex rounded-full hover:rounded-l-lg dark:bg-white bg-slate-900/90 px-5 pt-2 pb-2 mt-[40px] text-[14px] text-white dark:text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                                    Repository
                                <ArrIcon className='stroke-[1.5px] stroke-white dark:stroke-[#1d1d1e] mt-[2px] ml-3 ease-in duration-200 group-hover/btn:scale-x-[1.5] group-hover/btn:ml-4' />
                            </button>
                        </Link>
                        <Link href="https://daffa.gitbook.io/vwiki-docs/" target="_blank" rel="noreferrer noopener">
                            <button className=" group/btn font-space flex rounded-full hover:rounded-l-lg dark:bg-white bg-slate-900/90 px-5 pt-2 pb-2 mt-[40px] text-[14px] text-white dark:text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                                    Documentation
                                <ArrIcon className='stroke-[1.5px] stroke-white dark:stroke-[#1d1d1e] mt-[2px] ml-3 ease-in duration-200 group-hover/btn:scale-x-[1.5] group-hover/btn:ml-4' />
                            </button>
                        </Link>

                        </div>
                        
                    </div>
                    <div className="group">
                        <div className="inline-block mt-[65px] text-[30px] italic font-space font-bold text-left marker marker--text group-hover:bg-[length:100%_100%]">
                            VtuberBot <span className="not-italic">- Discord Bot</span>
                        </div>
                        <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] text-slate-600 dark:text-[#cbd5e0]">
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
                            satriadaffa.com
                        </div>
                        <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] text-slate-600 dark:text-[#cbd5e0]">
                            <p>
                                <a className="marker marker--ul group-hover:bg-[length:100%_100%]">
                                    It's this website! a redesign of my old portfolio website, <span className="italic font-bold">daffak.xyz</span> 
                                </a>
                            </p>
                            <p className="mt-[10px]">
                                as an expressive person, i love to share my journey to the world, especially sharing stories within a personal blogs, which is why i felt like a personal website would be a perfect and interesting project to try on, as this project was my first dive into React and dynamic sites.
                            </p>
                            <p className="mt-[10px]">
                                This website is consisted of blogs, personal info, and a bit of my personal music taste
                            </p>
                        </div>
                        <Link className="pointer-events-none" href="" target="_blank" rel="noreferrer noopener">
                            <button className=" opacity-70 hover:opacity-100 group/btn font-space flex rounded-full hover:rounded-l-lg dark:bg-white bg-slate-900/90 px-5 pt-2 pb-2 mt-[40px] text-[14px] text-white dark:text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                                    It's this site! not allowing recursion :P
                               
                            </button>
                        </Link>
                    </div>
                    <div className="group">
                        <div className="inline-block mt-[65px] text-[30px] italic font-space font-bold text-left marker marker--text group-hover:bg-[length:100%_100%]">
                            D'AUTOM8N
                        </div>
                        <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] text-slate-600 dark:text-[#cbd5e0]">
                            <p>
                                <a className="marker marker--ul group-hover:bg-[length:100%_100%]">
                                    botting on a hyped product drop has been an ongoing issue for me and many other customer due to the unfairness nature of botting, and some companies don't even bother to combat the bots allowing all this mess to happen.
                                </a>
                            </p>
                            <p className="mt-[10px]">
                                <span className="italic">So how would this product fix the problem?</span> D'AUTOM8N allows user to navigate quickly to the purchase section of the item before it is even displayed on the site, hence giving the user the same chance as the bot. The site will be updated very frequently to keep the item relevance.
                            </p>
                            <p className="mt-[10px] italic">
                                Note: currently it only serves drops from Tokopedia 
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <Link href="https://github.com/daffpy/aero-tokped" target="_blank" rel="noreferrer noopener">
                            <button className=" group/btn font-space flex rounded-full hover:rounded-l-lg dark:bg-white bg-slate-900/90 px-5 pt-2 pb-2 mt-[40px] text-[14px] text-white dark:text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                                    Repository
                                <ArrIcon className='stroke-[1.5px] stroke-white dark:stroke-[#1d1d1e] mt-[2px] ml-3 ease-in duration-200 group-hover/btn:scale-x-[1.5] group-hover/btn:ml-4' />
                            </button>
                        </Link>
                        </div>
            
                    </div>
                    <div className="group">
                        <div className="inline-block mt-[65px] text-[30px] italic font-space font-bold text-left marker marker--text group-hover:bg-[length:100%_100%]">
                            Circle
                        </div>
                        <div className="font-outfit font-light tracking-wide text-[14px] md:text-[15px] text-slate-600 dark:text-[#cbd5e0]">
                            <p>
                                <a className="marker marker--ul group-hover:bg-[length:100%_100%]">
                                    ever felt like being shy asking someone to be ur friends in real life? don't worry, thats the reason me and my college team developed Circle.
                                </a>
                            </p>
                            <p className="mt-[10px]">
                                Circle is a group matching platform for student of Binus University using tinder-like feature to help users find the ideal friend group based on their interest and campus location. The platform gave a safe way for shy people to make friends, as it is exclusively for verified student of Binus University.
                            </p>
                            <p className="mt-[10px]">
                                On Circle, students can find groups based on the preferred interests and even create new groups for a more broader communities. Students could also view the students in that group, making sure that the members in it fit with you and your personality.
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <Link href="https://github.com/daffpy/circle" target="_blank" rel="noreferrer noopener">
                            <button className=" group/btn font-space flex rounded-full hover:rounded-l-lg dark:bg-white bg-slate-900/90 px-5 pt-2 pb-2 mt-[40px] text-[14px] text-white dark:text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                                    Repository
                                <ArrIcon className='stroke-[1.5px] stroke-white dark:stroke-[#1d1d1e] mt-[2px] ml-3 ease-in duration-200 group-hover/btn:scale-x-[1.5] group-hover/btn:ml-4' />
                            </button>
                        </Link>
                        <Link href="https://circle-if73.vercel.app/" target="_blank" rel="noreferrer noopener">
                            <button className=" group/btn font-space flex rounded-full hover:rounded-l-lg dark:bg-white bg-slate-900/90 px-5 pt-2 pb-2 mt-[40px] text-[14px] text-white dark:text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                                    Website
                                <ArrIcon className='stroke-[1.5px] stroke-white dark:stroke-[#1d1d1e] mt-[2px] ml-3 ease-in duration-200 group-hover/btn:scale-x-[1.5] group-hover/btn:ml-4' />
                            </button>
                        </Link>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export {WorkPage, CodePage}