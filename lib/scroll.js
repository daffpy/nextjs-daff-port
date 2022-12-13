import React, { useState, useEffect } from "react";

export default function ScrollDir() {
  const [scrollDir, setScrollDir] = useState(false);

  useEffect(() => {
        const threshold = 25;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - lastScrollY) < threshold) {
            ticking = false;
            return;
        }
        setScrollDir(scrollY > lastScrollY ? false : true);
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
        };

        const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollDir);
            ticking = true;
        }
        };

        window.addEventListener("scroll", onScroll);

        console.log(scrollDir);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);
}