import { useState , useEffect} from 'react';

function getTime(){
    const str = new Date().toLocaleTimeString('en-US', 
    { timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute:'2-digit',
        hour12: false
    });
    return str
}

const Timer = () =>{
    const [time, setTime] = useState(getTime());
    useEffect(() => {
        const interval = setInterval(() => setTime(getTime()), 10000);
        return () => {
          clearInterval(interval);
        };
      }, []);
    return(
        <>
            <div className='mx-auto'>
            <p className='text-yellow-500 tracking-wide font-medium'>CURRENT TIME</p>
            <div className='flex gap-x-2'>
            <p className='font-light text-[15px] text-slate-400 tracking-wide'>{time}</p>
            <p className='font-light text-[15px] text-slate-500'>GMT+7</p>
            </div>
            </div>
        </>
    )
}

export default Timer;