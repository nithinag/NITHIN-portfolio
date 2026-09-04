"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import FullscreenMenu from "./FullscreenMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("12:00:00 IST");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const istTime = new Intl.DateTimeFormat("en-GB", options).format(now);
      setTime(`${istTime} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/90 backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="portfolio-container flex items-center justify-between h-14 md:h-16">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="font-mono-code text-xs md:text-sm font-bold tracking-widest text-[#F5F5F5] hover:text-[#C3FFFC] transition-colors"
              data-cursor="HOME"
            >
              {portfolioData.personal.shortName}. PORTFOLIO/2026
            </a>
          </div>

          {/* Center Info - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6 font-mono-code text-xs text-[#8B8B8B]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C3FFFC] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C3FFFC]"></span>
              </span>
              <span className="text-[#F5F5F5] uppercase tracking-wider">AVAILABLE FOR HIRE</span>
            </div>

            <div className="text-[#262626]">/</div>

            <div>
              <span>CHENNAI, IN </span>
              <span className="text-[#F5F5F5] font-semibold">{time || "12:00:00 IST"}</span>
            </div>
          </div>

          {/* Right Menu Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-2.5 font-mono-code text-xs tracking-widest text-[#F5F5F5] hover:text-[#050505] bg-[#0c0c0c] hover:bg-[#C3FFFC] transition-all px-3 py-1.5 border border-[#262626] hover:border-[#C3FFFC]"
              data-cursor="MENU"
            >
              <div className="flex flex-col gap-1 w-3.5">
                <span className="block h-[1.5px] w-full bg-current transition-transform duration-200" />
                <span className="block h-[1.5px] w-2/3 bg-current transition-transform duration-200 group-hover:w-full" />
              </div>
              <span className="font-bold">MENU</span>
            </button>
          </div>
        </div>
      </header>

      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
