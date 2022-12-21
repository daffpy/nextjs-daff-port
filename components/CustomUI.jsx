import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineExclamationCircle, AiOutlineInfoCircle} from "react-icons/ai"


function WhatsappContainer({block, children}) {
    return (
        <div className="max-w-[800px] mx-auto py-10">
            <div className="max-w-[800px] min-h-[300px] bg-repeat wa-bg rounded-xl p-4">
                {children}
                <div className={"p-3 mx-auto max-w-[350px]" + (!block ? " hidden":'')}>
                    <div className="bg-[#252D32] min-h-[40px] py-2 rounded-xl mt-10 mb-3">
                        <p className="text-center text-gray-400 md:text-sm font-sans leading-5  text-[12px] tracking-normal font-normal break-words">
                            You blocked this contact. Tap to unblock
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
function WAManager(data) {
    return(
        <div className={"py-2 flex" + (data.me ? " justify-end" : '')}>
            <div className={data.me ? 'hidden': "chatTriangle"}></div>
                <div className={data.me ? "WAContMe": 'WACont'}>
                    <p className="WAText">
                        {data.msg}
                    </p>
                    <p className="WATime">
                        {data.time}
                    </p>
                </div>
            <div className={data.me ? 'chatTriangleMe scale-x-[-1]': "hidden"}></div>
        </div>
    )
}

const Whatsapp = (data) => {
    return(
        <>
        {data.messages.map((msg, index) => (
            <WAManager key={index} msg={msg} me={data.me} time={data.time}/>

        ))}
        </>
    )
}
const Superchat = (data) => {
    return(
            <div className="max-w-[500px] mx-auto mt-10 mb-10">
                <div className="grid grid-rows-2 max-w-[600px] min-h-[200px] bg-[#E52117] rounded-lg font-outfit">
                    <div className="bg-[#D10100] rounded-tr-lg rounded-tl-lg grid grid-cols-4 content-center items-center grid-rows-2 justify-items-center">
                        <div className="row-span-2 pl-4 pr-2 text-center">
                            <div className="bg-purple-700 w-[60px] h-[60px] rounded-full">
                                <p className="w-full h-full pt-4 pb-6 px-4 text-xl">
                                    {(data.name)[0]}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3 justify-self-start self-end pt-3 px-2 text-[#F5BDBA] font-bold">{data.name}</div>
                        <div className="row-span-1 col-span-3 justify-self-start px-2 text-xl font-bold self-start">$500.00</div>
                    </div>
                    <div className="px-5 pt-3">
                        {data.msg}
                    </div>
                </div>
            </div>
    )
}
const HugeQuote = (data) =>{
    return(
        <div className="max-w-[650px] mx-auto py-8 text-center">
            <div className="py-5">
            <div className="relative py-6">
                <div className="py-1 md:py-3 after:absolute after:border-t after:border-t-slate-600 after:h-[1px] after:w-[7%] after:m-auto after:top-0 after:left-0 after:right-0"></div>
                <p className="text-[24px] md:text-[32px] font-outfit font-normal text-white tracking-wider leading-relaxed">{data.msg}</p>
                <div className="py-1 md:py-3 after:absolute after:border-b after:border-b-slate-600 after:h-[1px] after:w-[7%] after:m-auto after:bottom-0 after:left-0 after:right-0"></div>
            </div>
            </div>
        </div>
    )
}
const BImage = (data) => {

    return (
        <div>
            <Image src={`/posts/${data.slug}/${data.img}`} 
            width={data.width}
            height={data.height}
            className={data.className}
            style={data.style ? data.style : {width: "auto", height: "auto"}}
            alt={data.alt}/>
            {data.description? 
            <p className="text-center pt-3 italic text-cyan-600 text-[16px] md:text-[18px]">{data.description}</p>:''}
        </div>
    );
}
const AlertSign = (data) =>{
    return(
        <div className={data.warning ? "bg-rose-800/40 my-10":"bg-slate-700/40 my-10"}>
        <div className={"max-w-[800px] mx-auto" + (data.warning ? " bg-rose-800/50" : " bg-slate-700/50")}>
            <div className="text-white pt-6 pb-8 px-2 font-outfit">
                <div className="flex px-5 items-center gap-x-2">
                    {data.warning ? (
                        <>
                        <AiOutlineExclamationCircle/>
                        <p className="font-bold text-base tracking-wider">
                            Warning
                        </p>
                        </>
                    ):(
                        <>
                        <AiOutlineInfoCircle/>
                        <p className="font-bold text-base tracking-wider">
                            Note
                        </p>
                        </>
                    )
                    }
                </div>
                <p className="pl-12 pr-5 pt-2 text-base text-slate-300 tracking-wide font-light">
                    {data.msg}
                </p>
            </div>
            </div>
         </div>

    )
}
const PaginationBlog = (data) =>{

    return(
            <div className='py-12 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8'>
                {data.before != false ?(
                    <Link href={"/blog/" + data.before.slug} className='border p-6 w-full border-slate-700/40'>
                    <p className='font-medium text-[17px] md:text-[19px] tracking-wide text-slate-200'>
                        Previous Blog
                    </p>
                    <p className={'text-[15px] md:text-[17px] font-normal tracking-[0.045em] leading-relaxed pt-1  text-slate-400'}>
                        {data.before.title}
                    </p>
                    </Link>
                ):(
                    <div className='border p-6 w-full border-slate-700/40'>
                    <p className='font-medium text-[17px] md:text-[19px] tracking-wide text-slate-400'>
                        Previous Blog
                    </p>
                    <p className={'text-[15px] md:text-[17px] font-light tracking-[0.045em] leading-relaxed pt-1  text-slate-400 italic'}>
                        {"Wow, you've read my first ever blog! Welcome to the jungle!"}
                    </p>
                    </div>
                )}
                {data.after != false ?(
                    <Link href={"/blog/" + data.after.slug} className='border p-6 w-full border-slate-700/40'>
                    <p className='font-medium text-[17px] md:text-[19px] tracking-wide text-slate-200'>
                        Next Blog
                    </p>
                    <p className={'text-[15px] md:text-[17px] font-normal tracking-[0.045em] leading-relaxed pt-1  text-slate-400'}>
                        {data.after.title}
                    </p>
                    </Link>
                ):(
                    <div className='border p-6 w-full border-slate-700/40'>
                    <p className='font-medium text-[17px] md:text-[19px] tracking-wide text-slate-400 '>
                        Next Blog
                    </p>
                    <p className={'text-[15px] md:text-[17px] font-light tracking-[0.045em] leading-relaxed pt-1  text-slate-400 italic'}>
                        {"There is no more blog for now, Thanks for reading :)"}
                    </p>
                    </div>
                )}

            </div>
    )
}
export {WhatsappContainer, Whatsapp, Superchat, HugeQuote, BImage, AlertSign, PaginationBlog}