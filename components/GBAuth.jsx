import { useSession, signIn, signOut } from "next-auth/react"
import {useRef, useState, Suspense} from "react";
import useSWR,{ useSWRConfig} from 'swr';
import { format } from 'date-fns';
import { FormSuccess, FormError, LoadingIcon } from "./Form";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then(res => res.json())


function GuestbookEntry({entry, user}){
    const { mutate } = useSWRConfig();
    const deleteEntry = async (e) => {
        e.preventDefault();

        await fetch(`/api/guestbook/${entry.id}`, {
            method: 'DELETE'
        });

        mutate('/api/guestbook');
    };
    return(
        <div className="py-4 border-b-slate-500/60 border-b ">
            <div className="text-left text-sm">
                <div className="text-slate-200 text-base sm:text-[17px] font-light tracking-[0.03em] leading-relaxed">
                    {entry.body}
                </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-2 items-end mt-2">
                            <div className=" text-slate-400/80 text-sm sm:text-[15px] tracking-wide font-light">
                                {entry.created_by}<a className="text-slate-400/50">#{entry.discord_discriminator}</a><br/><a className="text-slate-500/50 text-[10px] sm:text-xs">({entry.discord_id})</a>
                            </div>
                            <div className="text-slate-500/50">—</div>
                            <div className=" text-slate-400/60 tracking-wide font-light text-[13px]">
                                {format(new Date(entry.created_at), "MMM d',' yyyy 'at' h:mm bb")}
                            </div>
                        </div>
                        {user && entry.discord_id === user.discord_id && (
                            <div className="pr-10">
                                <button
                                className="text-[13px] sm:text-sm hover:underline tracking-wide font-semibold text-rose-500 "
                                onClick={deleteEntry}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default function Guestbook({fallbackData}) {
    const { mutate } = useSWRConfig()
    const [count, setCount] = useState(0);
    const [form, setForm] = useState({state: 'Idle', message: ''});
    const { data: session } = useSession()
    const inputEl = useRef(null);
    const { data: entries } = useSWR('/api/guestbook', fetcher, {
        fallbackData
    });
    const leaveEntry = async (e) => {
        e.preventDefault();
        setForm({ state: 'Loading'});
    
        const res = await fetch('/api/guestbook', {
          body: JSON.stringify({
            body: inputEl.current.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        });
        const { error } = await res.json();
        if (error) {
            setForm({
                state: 'Error',
                message: error
            });
            inputEl.current.value = '';
            setCount(0);
            return;
        }
        inputEl.current.value = '';
        setCount(0);
        mutate('/api/guestbook');
        setForm({ state: 'Success', message: 'Thanks for signing the guestbook!'});
      };
    return (
        <div className="max-w-[550px] mt-12 font-outfit">
            <div className="">
            <div className="text-center sm:pb-6">
                <div className="bg-slate-800/50 py-6 px-6">
                <div className="text-xl sm:text-2xl p-1 tracking-wide font-semibold">Sign the Guestbook</div>
                <div className="tracking-wide text-[15px] sm:text-base text-slate-400 mx-auto">Wanna say something nice ( or mean 😡 ) about the site?</div>
                <div className="tracking-wide text-[15px] sm:text-base text-slate-400 mx-auto">
                {!session &&(
                    <>
                    <div className="justify-center flex mt-2">
                        <Link className="border mt-6 border-slate-400 py-[6px] px-12 rounded-xl cursor-pointer duration-100 bg-black/50" 
                            onClick={(e) => {
                                e.preventDefault();
                                signIn('discord');
                            }}
                            href="/api/auth/signin/github"
                            ><p className="text-slate-200 tracking-wider text-sm sm:text-base font-medium">Login</p></Link>
                    </div>
                    <div className="mt-5 text-sm text-slate-500 text-left">*Your information is only used to display your username and authorization purposes of this website <a className="text-slate-400/70 italic">(https://daffxcx.com)</a>.</div>
                    </>
                )}
                </div>
                </div>
            {session?.user &&(
                <div className="tracking-wide text-[15px] sm:text-base text-slate-400 mx-auto">
                <div className="mt-10">
                <form className="pb-12 pt-6" onSubmit={leaveEntry}>
                    <div className="pb-4 sm:pb-5 text-sm flex justify-between items-center">
                        <div className="items-center flex gap-x-1">
                            <img src={session.user.image} className="w-5 h-5 rounded-full" />
                            <a className="tracking-wide font-normal text-slate-300 w-48 sm:w-54 text-left">
                                <div className="truncate">{session.user.name}<a className="text-slate-400/70">#{session.user.discord_discriminator}</a></div>
                            </a>
                        </div>
                        <div className="text-slate-300">
                            <a className="cursor-pointer hover:underline" onClick={() => signOut()}>Sign Out</a>
                        </div>
                    </div>
                    
                    <input className="focus:ring-slate-400 focus:border-slate-300 w-full rounded-md pl-2 sm:text-[15px] p-[6px] text-sm tracking-wide text-slate-300" placeholder="Your message" required
                        onChange={e => setCount(e.target.value.length)}
                        ref={inputEl}
                        maxLength="250"
                        disabled={form.state == 'Loading'}>
                    </input>
                    <div className="justify-between flex items-center">
                        <div className="text-xs sm:text-sm pl-1 sm:pl-2">
                            <a className="text-slate-300">{count}</a>/250
                        </div>
                    <button
                        className=" border-slate-400/40 border py-1 justify-center mt-4 font-normal rounded-lg w-24 h-8 sm:text-[15px] text-sm text-slate-300"
                        type="submit"
                        disabled={form.state == 'Loading'}
                        >
                        <div className={"flex items-center justify-center"}>
                            <div>
                            {form.state == 'Loading' ? <LoadingIcon className="animate-spin text-slate-300" width={15} height={15}/> : 'Submit'}
                            </div>
                        </div>
                    </button>
                    </div>
                    {form.state == 'Success' && (<FormSuccess message={form.message}/>)}
                    {form.state == 'Error' && (<FormError message={form.message}/>)}
                </form>
                </div>
                </div>
            )}
                <Suspense fallback={null}>
                    <div className="mt-10">
                    {entries?.map((entry) => (
                        <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
                    ))}
                    </div>
                </Suspense>
            </div>
            </div>
        </div>
    )
}