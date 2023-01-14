import Track from '../api/Track';
import useSWR from 'swr'
import { paginate } from '../../lib/paginate';
import { Pagination} from '@nextui-org/react';
import { useState } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Tracks(prop) {
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const { data } = useSWR('/api/top-track', fetcher);
    if (!data) {
        return (
            <div className='rounded-sm font-normal tracking-wide text-slate-800/70 dark:text-slate-300/80 text-[16px] py-1 flex justify-center bg-slate-300 dark:bg-slate-800/80 mt-8 mb-6'>
                Loading Data...
            </div>
        );
    }
    const tracks = paginate(data.tracks, currentPage, 5); 
    

    return (
        <>
        <div className='pt-4'>
        {tracks.map((track, index) => (
            <Track ranking={index + 1} key={track.songUrl} currPage={currentPage} {...track} />
        ))}
        </div>
        <div className="justify-center flex">
            <Pagination className="[&>button]:bg-white dark:[&>button]:bg-[#0E1116] [&>button>span]:text-slate-800 dark:[&>button>span]:text-slate-400  dark:[&>button:hover]:bg-black [&>button:hover]:bg-slate-400/30 [&>p]:bg-white dark:[&>p]:bg-black" total={2} animated={false} initialPage={1} onChange={handlePageChange} css={{$$paginationTextColor : '#FFFFFF', 'font-family': 'Outfit', $$paginationColor:'#0E1116', $$paginationScaleTransform: 1}}/>
        </div>
        </>
    );
}