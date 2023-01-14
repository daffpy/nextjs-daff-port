import useSWR from 'swr'
import {BsSpotify} from 'react-icons/bs'
import Link from 'next/link';
import Image from 'next/image';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function NowPlaying() {
    const { data } = useSWR('/api/now-playing', fetcher);  

    if (!data) {
        return (
            <div className='flex font-light flex-col text-slate-400 gap-y-4 gap-x-4'>
                    <div className='items-start'>
                    <div className='flex items-center gap-x-2'>
                        <BsSpotify className='self-center text-[#3ab258] dark:text-[#1BD760]'/>
                        <p className="font-medium text-[17px] text-slate-900/90 dark:text-white">{"Not Playing"}</p>
                    </div>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <p className='italic'>beep.. boop.. loading data..</p>
                    </div>
                </div>
        );
    }

    return (
                <div className='flex font-light flex-col text-slate-600 gap-y-3 gap-x-4'>
                    <div className='items-start'>
                    <div className='flex items-center gap-x-2'>
                        <BsSpotify className='self-center text-[#3ab258] dark:text-[#1BD760]'/>
                        <p className="font-medium text-[17px] text-slate-900/90 dark:text-white">{data.isPlaying ? "Now Playing" : "Not Playing"}</p>
                    </div>
                    </div>
                    {data.isPlaying ? (
                        <Link 
                        href={data.songUrl} 
                        className='flex items-center gap-x-3' 
                        target="_blank"
                        rel="noreferrer noopener">
                        <div className='border-slate-800 border rounded-md dark:border-0'>
                            <Image src={data.albumImageUrl} height={100} width={100} className="rounded-[5px] w-10 sm:w-10 md:w-10" alt="" />
                        </div>
                        <div className='grid grid-rows-2 w-80 sm:w-96'>
                            <p className='truncate font-light text-slate-800 dark:text-white'>{data.title}</p>
                            <div className='flex gap-x-1'>
                                <p className='text-sm dark:text-slate-400'>{data.artist}</p>
                            </div>
                        </div>
                        </Link>

                    ):(
                        <div className='flex items-center gap-x-3'>
                            <p className='italic'>beep.. boop.. not playing anything right now..</p>
                        </div>
                    )}
                </div>
    );
}