import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {RiMoonFoggyLine,RiSunFoggyLine} from 'react-icons/ri'

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
            <div className="ease-in-out duration-200">
                {resolvedTheme === "dark" ? <RiSunFoggyLine className="w-7 h-7 top-1"/> : <RiMoonFoggyLine className="w-7 h-7 fill-black" />}
            </div>
        </button>
    );
}
