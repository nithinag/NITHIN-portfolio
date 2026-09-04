"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const percentage = Math.round((scrollTop / docHeight) * 100);
        setScrollPercentage(Math.min(100, Math.max(0, percentage)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatted = scrollPercentage < 10 ? `00${scrollPercentage}` : scrollPercentage < 100 ? `0${scrollPercentage}` : `${scrollPercentage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 font-mono-code text-[11px] text-[#8B8B8B] tracking-widest pointer-events-none bg-[#050505]/80 px-3 py-1.5 border border-[#1f1f1f] backdrop-blur-md">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C3FFFC] animate-pulse" />
      <span>SCROLL [{formatted}%]</span>
    </div>
  );
}
