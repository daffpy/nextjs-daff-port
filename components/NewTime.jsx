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
        const interval = setInterval(() => setTime(getTime()), 20000);
        return () => {
          clearInterval(interval);
        };
      }, []);
    return(
        <>
            <div className="mx-auto bg-cover bg-center indo-bg ">
            <p className='text-yellow-500 tracking-wide font-medium px-1'>CURRENT TIME</p>
            <div className='flex gap-x-2'>
            <p className='font-light text-[15px] text-slate-400 tracking-wide pl-1'>{time}</p>
            <p className='font-light text-[15px] text-slate-500 pr-1'>GMT+7</p>
            </div>
            </div>
        </>
    )
}

export default Timer;