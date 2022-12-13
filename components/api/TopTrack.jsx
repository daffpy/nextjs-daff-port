import Track from '../api/Track';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Tracks() {
    const { data } = useSWR('/api/top-track', fetcher); 

    if (!data) {
        return null;
    }

    return (
        <>
        {data.tracks.map((track, index) => (
            <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
        </>
    );
}