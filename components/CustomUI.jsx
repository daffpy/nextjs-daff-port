import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {AiOutlineExclamationCircle, AiOutlineInfoCircle} from "react-icons/ai"
import {AiOutlineSwap} from 'react-icons/ai'
import { TwitterLike,TwitterRetweet } from "../public/assets/icons/myIcon";
import {FaAward} from 'react-icons/fa'


function WhatsappContainer({block, children}) {
    return (
        <div className="max-w-[800px] mx-auto py-10">
            <div className="max-w-[800px] min-h-[300px] bg-repeat wa-bg bg-black dark:bg-dark-wa-bg rounded-xl p-4">
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
                                <p className="w-full h-full pt-4 pb-6 px-4 text-xl text-white">
                                    {(data.name)[0]}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3 justify-self-start self-end pt-3 px-2 text-[#F5BDBA] font-bold">{data.name}</div>
                        <div className="row-span-1 col-span-3 justify-self-start px-2 text-xl font-bold self-start text-white">$500.00</div>
                    </div>
                    <div className="px-5 pt-3 text-white">
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
                <p className="text-[24px] md:text-[32px] font-outfit font-normal text-black dark:text-white tracking-wider leading-relaxed">{data.msg}</p>
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
        <div className={"max-w-[800px] mx-auto" + (data.warning ? " bg-rose-600 dark:bg-rose-800/50" : " bg-slate-600 dark:bg-slate-700/50")}>
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
                <p className="pl-12 pr-5 pt-2 text-base text-slate-100 dark:text-slate-300 tracking-wide font-light">
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
                    <Link href={"/blog/" + data.before.slug} className='border px-6 py-5 w-full border-slate-700/70'>
                    <p className='font-medium text-[17px] md:text-[18px] tracking-wide text-slate-800/90 dark:text-slate-200 leading-normal'>
                        Previous Blog
                    </p>
                    <p className={'text-[15px] md:text-[16px] font-normal tracking-[0.045em] leading-relaxed mt-1  text-slate-800/80 dark:text-slate-400'}>
                        {data.before.title}
                    </p>
                    </Link>
                ):(
                    <div className='border px-6 py-5 w-full border-slate-700/70'>
                    <p className='font-medium text-[17px] md:text-[18px] tracking-wide text-slate-600/80 dark:text-slate-400 leading-normal'>
                        Previous Blog
                    </p>
                    <p className={'text-[15px] md:text-[16px] font-light tracking-[0.045em] leading-relaxed mt-1  text-slate-600/80 dark:text-slate-400 italic'}>
                        {"Wow, you've read my first ever blog! Welcome to the jungle!"}
                    </p>
                    </div>
                )}
                {data.after != false ?(
                    <Link href={"/blog/" + data.after.slug} className='border px-6 py-5 w-full border-slate-700/70'>
                    <p className='font-medium text-[17px] md:text-[18px] tracking-wide text-slate-800/90 dark:text-slate-200 leading-normal'>
                        Next Blog
                    </p>
                    <p className={'text-[15px] md:text-[16px] font-normal tracking-[0.045em] leading-relaxed mt-1  text-slate-800/80 dark:text-slate-400'}>
                        {data.after.title}
                    </p>
                    </Link>
                ):(
                    <div className='border px-6 py-5 w-full border-slate-700/70'>
                    <p className='font-medium text-[17px] md:text-[18px] tracking-wide text-slate-600/80 dark:text-slate-400 leading-normal'>
                        Next Blog
                    </p>
                    <p className={'text-[15px] md:text-[16px] font-light tracking-[0.045em] leading-relaxed mt-1  text-slate-600/80 dark:text-slate-400 italic'}>
                        {"There is no more blog for now, Thanks for reading :)"}
                    </p>
                    </div>
                )}

            </div>
    )
}
function AccordionWrapper({category, children}){
    return(
        <div>
            <div className="pt-1 text-[16px] dark:text-slate-200">
            {category}
            </div>
            <ul className="list-disc pl-4 pb-2">
                <li>
                    <div className="flex flex-wrap gap-x-2">
                    {children}</div>
                </li>
            </ul>
        </div>
    )

}

function AccordionSvg(data){
    return(
        <>
        <svg fill={data.fill} className={data.className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d={data.path}/></svg>
        </>

    )
}

function AccordionManager(data) {
    let noAnnoy = data.icon.hex.replace(/FFFFFF|0E1128|7D929E|EAEAEA/g,'currentColor')
    if(noAnnoy !== 'currentColor'){
        noAnnoy = `#${noAnnoy}`
    }
    return(
        <>
        <div className="flex items-center gap-x-1">
                    <AccordionSvg path={data.icon.path} className="w-4 h-4" fill={noAnnoy}/>
                    <div className="text-base font-light dark:text-slate-300/80 text-slate-800/80 tracking-wide">
                        {data.desc}</div>
        </div>
        </>
    )
}

const Accordion = (props) =>{

    const [expanded, setExpanded] = useState(false);

    return (
    <div className="py-2">
    <div onClick={() => setExpanded(!expanded)} className="text-gray-light cursor-pointer font-outfit text-base">
        <div className="flex flex-row items-center text-[17px] bg-slate-300/80 rounded-t-lg dark:bg-slate-800/60 py-1 duration-500 ease-in-out">
            <p className={`pl-3 flex-auto text-slate-800/90 dark:text-slate-200 text-[15px]`}>{props.title}</p>
        </div>
        <div className={`pl-3 transition-max-height duration-500 ease-in-out overflow-hidden rounded-b-md bg-zinc-100 dark:bg-slate-800/20 ${expanded ? "" : "max-h-0"}`}>
            <div className="py-1">
            {props.category.map((data,index)=> (
                <AccordionWrapper key={index} category={data}>
                    {props.icon[index].map((data, index) => (
                        <AccordionManager key={index} icon={data} desc={data.title}/>

                    ))}
                </AccordionWrapper>
            ))}
            </div>
        </div>
    </div>
    </div>)
}

const ProjectHighlight = (data) =>{
    const handlerAcc = {'Selen Tatsuki':'1413318241804439552', 'Kureiji Ollie':'1328277233492844544', 'Moona Hoshinova':'1234753886520393729', 'Kson':'733990222787018753', 'Rosemi Lovelock':'1413326894435602434', 'Petra Gurin':'1413339084076978179'}
    const [currTwt,setTwt] = useState([])
    const [currI, setI] = useState(1)
    const [currP, setP] = useState({
        n:'cat.gif',
        t: 'Booba Catgirl NFT (real)',
        d : 'A CATGIRL.',
        tid: '',
        rt:'-'
    })
    const plist = [ { n:'cat.gif', t: 'Booba Catgirl NFT (real)', d : 'A CATGIRL.', tid: '', rt: '-' }, { n:'model1_4.webp', t: 'Kson', tid: '1482499515936817152', rt: 'Kson' }, { n:'moona-1.webp', t: '800k Moona', tid: '1425270064631083014', rt: 'Moona Hoshinova' }, { n:'bae-1.webp', t: 'Hakos Baelz', tid: '1431124096239157248', rt: '-' }, { n:'olliet.webp', t: 'Teacher Ollie', tid: '1413288774193205249', rt: 'Kureiji Ollie' }, { n:'ollie1.webp', t: 'Bday Ollie 🎉', tid: '1415205004537827331', rt: 'Kureiji Ollie' }, { n:'petra.webp', t: 'Flying Petra', tid: '1419277733373247488', rt: 'Petra Gurin' }, { n:'rosemi.webp', t: 'Rosemi 🌺', tid: '1421423772146364419', rt: 'Rosemi Lovelock' }, { n:'obsydia.webp', t: 'Selen and the gang', tid: '1420686344288817154', rt: 'Selen Tatsuki' }, ]
    function returnProject(){
        const selectedData = plist[(currI% plist.length)]
        let filteredData = []
        selectedData.tid !== '' ? (filteredData = data.tweets.data.filter(data => data.id === selectedData.tid)):('')
        return [
            selectedData, filteredData
            
            ]
    }
    return(
        <div className="pt-8 border-t border-t-slate-600">
            <div className="flex justify-between pr-4 pb-2" >
            <div className="flex items-center gap-x-2 font-light text-sm">
                <FaAward className={`${currP.rt !== '-' ? "fill-yellow-500 dark:fill-yellow-400":'fill-slate-500 dark:fill-slate-300'} w-4 h-4`}/>
                <p>Retweeted by <a className={currP.rt !== '-' ? ('underline underline-offset-2'):('pointer-events-none')} href={currP.rt !== '-' ? (`https://twitter.com/intent/user?user_id=${handlerAcc[currP.rt]}`):''}
                target="_blank"
                rel="noreferrer noopener">{currP.rt}</a></p>
            </div>
            <button onClick={() => {setP(returnProject()[0]), setI(currI + 1), setTwt(returnProject()[1])}}>
            <AiOutlineSwap className="w-7 h-7 bg-slate-300/50 dark:bg-slate-600/50 p-1 rounded-md"/>
            </button>
            </div>
            <div className="px-2">
                <div className="w-full">
                    <div className="grid grid-rows-3 grid-cols-3 space-x-4 sm:space-x-2 md:space-x-0 max-h-[140px]">
                        <Image className="rounded-md row-span-3 col-span-1 self-center" src={`/assets/img/${currP.n}`} width={140} height={140} alt=""></Image>
                        <div className="row-span-2 col-span-2 overflow-hidden pt-1">
                            <div className="">
                                {currP.t}
                            </div>
                            <div className="text-[15px] font-light font-outfit dark:text-slate-400">
                                    <div className="">
                                    {currTwt.length > 0 ? (currTwt[0].text.replace(/(?:https):\/\/[\n\S]+/g, '')):currP.d}
                                    </div>
                                </div>
                        </div>
                        <div className="row-span-1 col-span-2 self-end pb-2 tracking-wide">
                            <div className="flex text-[14px] font-light gap-x-5">
                                <div className="flex items-center gap-x-2">
                                    <TwitterLike className="fill-rose-500 w-4 h-4"/>
                                    {currTwt.length > 0 ? (currTwt[0].public_metrics.like_count):"---"}
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <TwitterRetweet className="fill-green-600 dark:fill-green-500 w-4 h-4"/>
                                    {currTwt.length > 0 ? (currTwt[0].public_metrics.retweet_count):"---"}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/*<div className="pl-4 flex flex-row gap-x-4">
                <Image className="rounded-md" src={`/assets/img/${currP.n}`} width={140} height={140} alt=""></Image>
                <div className="text-[18px] font-medium leading-relaxed tracking-wide">
                    <div className="flex flex-col min-w-0">
                        <div className="h-20">
                            <div className="">
                                {currP.t}
                            </div>
                                <div className="text-[15px] font-light dark:text-slate-300/80">
                                    <div className="">
                                    {currTwt.length > 0 ? (currTwt[0].text):currP.d}
                                    </div>
                                </div>
                        </div>
                        <div>
                        <div className="flex text-[14px] font-light gap-x-4">
                            <div className="flex items-center gap-x-2">
                                <TwitterLike className="fill-rose-500 w-4 h-4"/>
                                {currTwt.length > 0 ? (currTwt[0].public_metrics.like_count):"---"}
                            </div>
                            <div className="flex items-center gap-x-2">
                                <TwitterRetweet className="fill-green-600 dark:fill-green-500 w-4 h-4"/>
                                {currTwt.length > 0 ? (currTwt[0].public_metrics.retweet_count):"---"}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>*/}

        </div>
    )
}
export {WhatsappContainer, Whatsapp, Superchat, HugeQuote, BImage, AlertSign, PaginationBlog, Accordion, ProjectHighlight}