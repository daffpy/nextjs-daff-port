import Track from '../api/Track';
import useSWR from 'swr'
import { paginate } from '../../lib/paginate';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Tracks(prop) {
    const { data } = useSWR('/api/top-track', fetcher);
    if (!data) {
        return null;
    }
    const tracks = paginate(data.tracks, prop.currentPage, 5); 

    return (
        <div className='pt-4'>
        {tracks.map((track, index) => (
            <Track ranking={index + 1} key={track.songUrl} currPage={prop.currentPage} {...track} />
        ))}
        </div>
    );
}