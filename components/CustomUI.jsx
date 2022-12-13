import React from "react";
import Image from "next/image";

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
        /*
            <div className="max-w-[800px] mx-auto mt-10">
                <div className="max-w-[800px] min-h-[300px] bg-repeat wa-bg rounded-xl border p-4">
                    <div className="py-2 flex">
                        <div className="chatTriangle"></div>
                        <div className="WACont">
                            <p className="WAText">
                                Hey beautiful
                            </p>
                            <p className="WATime">
                                2:34 AM
                            </p>
                        </div>
                    </div>
                    <div className="py-2 flex justify-end">
                        <div className="WAContMe">
                        <p className="WAText">
                            Hi, how did you get my number?
                        </p>
                        <p className="WATime">
                            2:59 AM
                        </p>
                        </div>
                        <div className="chatTriangleMe scale-x-[-1]"></div>
                    </div>
                    <div className="py-2 flex">
                        <div className="chatTriangle "></div>
                        <div className="WACont">
                            <p className="WAText">
                                show Bob and vegana please
                            </p>
                            <p className="WATime">
                                3:00 AM
                            </p>
                        </div>
                    </div>
                    <div className="py-2 flex">
                        <div className="chatTriangle"></div>
                        <div className="WACont">

                            <p className="WAText">
                                im nice guy and virgin
                            </p>
                            <p className="WATime">
                                3:01 AM
                            </p>
                        </div>
                    </div>
                    <div className="py-2 flex">
                        <div className="chatTriangle"></div>
                        <div className="WACont">

                            <p className="WAText">
                                RESPOND ME DUMB B**CH
                            </p>
                            <p className="WATime">
                                11:35 PM
                            </p>
                        </div>
                    </div>
                <div className="p-3 mx-auto max-w-[350px]">
                    <div className="bg-[#252D32] min-h-[40px] text-[14px] py-2 rounded-xl mt-6 mb-3">
                        <p className="text-center text-gray-400">
                            You blocked this contact. Tap to unblock
                        </p>
                    </div>
                </div>

            </div>
        </div>
        */
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
                <p className="text-[24px] md:text-[32px] font-outfit font-medium text-white tracking-wider leading-relaxed">{data.msg}</p>
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
export {WhatsappContainer, Whatsapp, Superchat, HugeQuote, BImage}