import useSWR from 'swr';
import {GoPrimitiveDot} from "react-icons/go"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Status() {
    const { data } = useSWR('/api/pp-lanyard', fetcher); 
    let statusColor = ['text-gray-400','text-gray-500']
    if (!data) {
        return (
            <div className='mx-auto'>
            <p className='text-yellow-500 tracking-wide font-medium'>CURRENT STATUS</p>
            <div className='flex items-center gap-x-[5px]'>
                <div>
                <GoPrimitiveDot className={'animate-ping absolute ' + (statusColor[0])}/>
                <GoPrimitiveDot className={statusColor[1]}/>
                </div>
                <p className='font-light text-[15px] text-slate-400 capitalize tracking-wide'>Offline</p>
            </div>
        </div>
        );
    }
    let status = data.data.discord_status
    if(status === "idle" || status === "online"){
        status = 'online'
        statusColor = ['text-green-400','text-green-500']

    }
    else if(status === "dnd"){
        status = 'busy'
        statusColor = ['text-red-400','text-red-500']
    }
    return (
        <div className='mx-auto'>
            <p className='text-yellow-500 tracking-wide font-medium'>CURRENT STATUS</p>
            <div className='flex items-center gap-x-[5px]'>
                <div>
                <GoPrimitiveDot className={'animate-ping absolute ' + (statusColor[0])}/>
                <GoPrimitiveDot className={statusColor[1]}/>
                </div>
                <p className='font-light text-[15px] text-slate-400 capitalize tracking-wide'>{status}</p>
            </div>
        </div>
    );
}