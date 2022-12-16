
import Link from 'next/link.js';
import { useState , useEffect} from 'react';
import NowPlaying from './api/NowPlaying.jsx';
import Status from './api/Status.jsx';


function getTime(){
    const str = new Date().toLocaleTimeString('en-US', 
    { timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute:'2-digit',
        hour12: false
    });
    return str
}


const Footer = () =>{
    const [time, setTime] = useState(getTime());
    useEffect(() => {
        const interval = setInterval(() => setTime(getTime()), 30000);
        return () => {
          clearInterval(interval);
        };
      }, []);
    return(
        <div>
            <div className="pt-[5em] pb-[4em]">
            <div className="max-w-[550px] mx-auto pt-10">
                <div className="mx-6">
                    <div className="font-outfit tracking-wide flex items-center gap-x-2 text-base border-t border-t-slate-700/30 pt-6">
                        <NowPlaying/>
                    </div>
                    <div className='grid grid-cols-2 pb-6 pt-6 mt-6 mb-6 border-y border-y-slate-700 font-outfit'>
                        <div className='mx-auto'>
                        <p className='text-yellow-500 tracking-wide'>My Current Time</p>
                        <div className='flex gap-x-2'>
                        <p className='font-light text-slate-400 tracking-wide'>{time}</p>
                        <p className='font-light text-slate-500'>GMT+7</p>
                        </div>
                        </div>
                        <Status/>
                    </div>
                    <div className='w-full grid grid-cols-3 gap-x-4'>
                        <div className='flex flex-col space-y-4 text-slate-500 font-outfit font-light tracking-wide'>
                        <Link href="/">Home</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Works</Link>
                        </div>
                        <div className='flex flex-col space-y-4 text-slate-500 font-outfit font-light tracking-wide'>
                        <Link href="https://github.com/daffpy" 
                        target="_blank"
                        rel="noopener noreferrer">Github</Link>
                        <Link href='https://twitter.com/daffxcx'
                        target="_blank"
                        rel="noopener noreferrer">Twitter</Link>
                        </div>
                        <div className='flex flex-col space-y-4 text-slate-500 font-outfit font-light tracking-wide'>
                        <Link href="https://discordapp.com/users/820569882860716072"
                        target="_blank"
                        rel="noopener noreferrer">Discord</Link>
                        <Link href="/blog">Blog</Link>
                        </div>


                    </div>

                </div>
            </div>
            </div>
        </div>

    )
}

export default Footer;