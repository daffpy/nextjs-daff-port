
import Link from 'next/link.js';
import dynamic from 'next/dynamic'
import NowPlaying from './api/NowPlaying.jsx';
import Status from './api/Status.jsx';
//import Time from './api/Time.jsx';

const Timer = dynamic(() => import('./NewTime.jsx'), {
    ssr: false
})

const Footer = () =>{
    return(
        <div>
            <div className="pt-[5em] pb-[4em]">
            <div className="max-w-[550px] mx-auto pt-10">
                <div className="mx-6">
                    <div className="font-outfit tracking-wide flex items-center gap-x-2 text-base border-t border-t-slate-700/30 pt-6">
                        <NowPlaying/>
                    </div>
                    <div className='grid grid-cols-2 pb-6 pt-6 mt-6 mb-6 border-y border-y-slate-700 font-outfit'>
                        <Timer/>
                        <Status/>
                    </div>
                    <div className='w-full grid grid-cols-3 gap-x-4'>
                        <div className='flex flex-col space-y-4 text-slate-500 font-outfit font-light tracking-wide'>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        {/*<Link href="/works">Works</Link>*/}
                        </div>
                        <div className='flex flex-col space-y-4 text-slate-500 font-outfit font-light tracking-wide'>
                        <a 
                        href="https://github.com/daffpy" 
                        target="_blank"
                        rel="noreferrer noopener">Github</a>
                        <a 
                        href='https://twitter.com/daffxcx'
                        target="_blank"
                        rel="noreferrer noopener">Twitter</a>
                        <a
                        href="https://discordapp.com/users/820569882860716072"
                        target="_blank"
                        rel="noreferrer noopener">Discord</a>
                        </div>
                        <div className='flex flex-col space-y-4 text-slate-500 font-outfit font-light tracking-wide'>
                        <Link href="/blog">Blog</Link>
                        <Link href="/blog">Projects</Link>
                        {/*<Link href="/guestbook">Guestbook</Link>*/}
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Footer;