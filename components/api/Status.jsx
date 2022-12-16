import useSWR from 'swr'
;

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Status() {
    const { data } = useSWR('/api/pp-lanyard', fetcher); 
    if (!data) {
        return null;
    }
    let status = data.data.discord_status
    if(status === "idle"){
        status = 'online'
    }
    else if(status === "dnd"){
        status = 'busy'
    }
    return (
        <div className='mx-auto'>
            <p className='text-yellow-500 tracking-wide'>My Current Status</p>
            <p className='font-light text-slate-400 capitalize tracking-wide'>{status}</p>
        </div>
    );
}