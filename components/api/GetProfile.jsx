import Profile from '../api/Profile';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Avatar() {
    const { data } = useSWR('/api/pp-lanyard', fetcher); 

    if (!data) {
        return null;
    }

    return (
        <>
        {
            <Profile url={data.data.discord_user.avatar} />
        }
        </>
    );
}