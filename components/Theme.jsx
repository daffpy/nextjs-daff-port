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
            onClick={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
        >
            <div className="ease-in-out duration-20">
                {resolvedTheme === "dark" ? <WiDaySunny className="w-8 h-8 bg-black bg-slate-100/10 rounded-md"/> : <WiHorizonAlt className="w-8 h-8 fill-black bg-slate-400/20 rounded-md" />}
            </div>
        </button>
    );
}
