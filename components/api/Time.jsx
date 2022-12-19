import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Time() {
    const { data } = useSWR('/api/get-time', fetcher); 
    if (!data) {
        return (
            <>
                <div className='mx-auto'>
                <p className='text-yellow-500 tracking-wide font-medium'>CURRENT TIME</p>
                <div className='flex gap-x-2'>
                <p className='font-light text-[15px] text-slate-400 tracking-wide'>----</p>
                <p className='font-light text-[15px] text-slate-500'>GMT+7</p>
                </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className='mx-auto'>
            <p className='text-yellow-500 tracking-wide font-medium'>CURRENT TIME</p>
            <div className='flex gap-x-2'>
            <p className='font-light text-[15px] text-slate-400 tracking-wide'>{data.data}</p>
            <p className='font-light text-[15px] text-slate-500'>GMT+7</p>
            </div>
            </div>
        </>

    );
}