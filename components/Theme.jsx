import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
//import {RiMoonFoggyLine,RiSunFoggyLine} from 'react-icons/ri'
import {WiDaySunny,WiHorizonAlt} from 'react-icons/wi'

export default function ThemeToggler() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) }, []);

    if (!mounted) return <></>;

    return (
        <button
        className="dark:bg-slate-100/10 bg-slate-400/20 hover:ring-2 w-9 h-9 flex items-center justify-center ring-gray-300 rounded-md transition-all"
            onClick={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
        >
            <div>
                {resolvedTheme === "dark" ? <WiDaySunny className="w-7 h-7"/> : <WiHorizonAlt className=" fill-black w-7 h-7" />}
            </div>
        </button>
    );
}
