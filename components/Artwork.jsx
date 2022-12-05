import React, {useReducer} from "react";
import Image from "next/image";
import OlliePicGif from "../public/assets/img/ollie1.gif"
import OlliePic from "../public/assets/img/ollie1-static.png"
import {FaTwitter, FaDiscord} from "react-icons/fa"


const ArtPage = () => {
    const initialState = {}
    const data = ["moona", "cat", "bae", "kson", "ollie1",'moona2','ollie2']
    data.forEach(key => initialState[key] = false);
    /*
    const initialState = {moona: false,
                            cat: false,
                            bae: false,
                            kson: false,
                            ollie1: false};
                            */
    function reducer(state, action){
        switch(action.anim){
            case 'bae':
                return {bae : !state.bae};
            case 'moona':
                return {moona : !state.moona};
            case 'moona2':
                return {moona2 : !state.moona2};
            case 'cat':
                return {cat : !state.cat};
            case 'kson':
                return {kson : !state.kson};
            case 'ollie1':
                return {ollie1 : !state.ollie1};
            case 'ollie2':
                return {ollie2 : !state.ollie2};

        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div className="max-w-[550px] mx-auto mt-10">
            <div className="mx-6">
                <div className="mt-[110px] text-[44px] font-htiny text-left">
                    <div className="underline">
                        Artworks
                    </div>
                    <div className="font-space text-[14px] text-[#cbd5e0]">
                        <p>
                            Here is a collection from some of my finest artworks! i hope this will give you a rough idea of my pixel art style.
                        </p>
                        <p className="mt-[20px]">
                            I love making pixel art and animations and i will keep making them, maybe this will give a fellow artists a reference. Any suggestion or tips is appreciated.
                        </p>
                        <p className="mt-[20px]">
                        Okay enough talking, please enjoy your visit here!
                        </p>
                        <p className="mt-[40px] italic">
                        Tip: you can enlarge & view the animation if you click/hover on the image
                        </p>
                    </div>
                    <div className="mt-[50px]">
                    <div className="grid grid-cols-2 justify-items-center">
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'bae'})} onMouseOut={() => dispatch({anim: 'bae'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.bae ?'/assets/img/bae-1.gif':'/assets/img/bae-1-static.png'} width={180} height={180} alt='baelz'/>
                        </div>
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'kson'})} onMouseOut={() => dispatch({anim: 'kson'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.kson ?'/assets/img/model1_4.gif':'/assets/img/model1_4-static.png'} width={180} height={180} alt='kson'/>
                        </div>
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'cat'})} onMouseOut={() => dispatch({anim: 'cat'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.cat ?'/assets/img/cat.gif':'/assets/img/cat-static.png'} width={180} height={180} alt='nft cat'/>
                        </div>
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'moona'})} onMouseOut={() => dispatch({anim: 'moona'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.moona ?'/assets/img/moona-1.gif':'/assets/img/moona-1-static.png'} width={180} height={180} alt='moona'/>
                        </div>
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'ollie2'})} onMouseOut={() => dispatch({anim: 'ollie2'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.ollie2 ?'/assets/img/olliet-3-4-3.gif':'/assets/img/olliet-3-4-3-static.png'} width={180} height={180} alt='ollie teacher'/>
                        </div>
                        <div className="group">
                            <Image onMouseOver={() => dispatch({anim: 'moona2'})} onMouseOut={() => dispatch({anim: 'moona2'})} className="rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.moona2 ?'/assets/img/MoonaRun3.gif':'/assets/img/MoonaRun3-static.png'} width={180} height={180} alt='moona'/>
                        </div>
                        <div className="group col-span-2">
                            <Image onMouseOver={() => dispatch({anim: 'ollie1'})} onMouseOut={() => dispatch({anim: 'ollie1'})} className="w-[250px] h-auto rounded-lg scale-[0.75] group-hover:scale-[1] ease-in-out duration-300" src={state.ollie1 ? OlliePicGif:OlliePic} alt='ollie'/>
                        </div>
                    </div>
                    </div>
                    <div className="pt-20 underline">
                        Contact

                    </div>
                    <div className="font-space text-[14px] text-[#cbd5e0]">
                        <p>
                            Interested in my artworks and wanted to do an art commission? or simply wanted to ask couple of things about my art?
                        </p>
                        <p className="mt-[20px] border-b inline-block border-slate-500 pb-5">
                            You can contact me using the platform below:
                        </p>
                        <div className="text-[14px] mt-[20px] mb-1 group text-white">
                            <div className="inline-block">
                            <a href="https://twitter.com/daffxcx" target="_blank" rel="noreferrer noopener">
                            <p className=" flex items-center font-bold marker marker--mark hover:bg-[length:100%_100%]">
                                <FaTwitter className="mr-2"/>Twitter - @daffxcx
                            </p>
                            </a></div>
                        </div>
                        <div className="text-[14px] mt-2 group text-white text-md">
                            <div className="inline-block">
                            <a href="https://discordapp.com/users/820569882860716072" target="_blank" rel="noreferrer noopener">
                            <p className=" flex items-center font-bold marker marker--mark hover:bg-[length:100%_100%]">
                                <FaDiscord className=" mr-2"/>Discord - daff#1913
                            </p>
                            </a></div>
                        </div>
                    </div>

                    <div id='footer' className="pb-[150px]">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ArtPage