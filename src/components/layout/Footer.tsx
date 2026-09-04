"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { usePortfolio } from "@/context/ThemeContext";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { playSound, theme } = usePortfolio();
  const [scrollProgress, setScrollProgress] = useState("0.00");
  const [currentTime, setCurrentTime] = useState("");

  const scrollToTop = () => {
    playSound("click");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight).toFixed(2);
        setScrollProgress(progress);
      }
    };

    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="w-full bg-[#050505] border-t border-[#1a1a1a] text-[#F5F5F5] pt-12 md:pt-16 pb-28 sm:pb-32 md:pb-36">
      <div className="portfolio-container">
        <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6 sm:p-10 clip-chamfer-lg space-y-8">
          {/* Header row with monogram & branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#141414] border border-[#2e2e2e] flex items-center justify-center font-black text-sm text-[var(--accent-theme)] clip-chamfer">
                N
              </div>
              <span className="font-mono-code text-xs font-bold tracking-widest text-[#F5F5F5]">
                NITHIN.PORTFOLIO/2026
              </span>
            </div>

            <div className="font-mono-code text-xs text-[#8B8B8B] space-y-1">
              <p>AI ENGINEER • PRODUCT BUILDER • ENTREPRENEUR</p>
              <p>CHENNAI, INDIA</p>
            </div>
          </div>

          {/* Links & Back to top bar */}
          <div className="flex flex-wrap items-center justify-between border-t border-b border-[#1a1a1a] py-4 font-mono-code text-xs gap-4">
            <div className="flex items-center gap-6 sm:gap-8">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                onClick={() => playSound("click")}
                className="text-[#8B8B8B] hover:text-[var(--accent-theme)] transition-colors uppercase font-bold"
              >
                EMAIL
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound("click")}
                className="text-[#8B8B8B] hover:text-[var(--accent-theme)] transition-colors uppercase font-bold"
              >
                LINKEDIN
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound("click")}
                className="text-[#8B8B8B] hover:text-[var(--accent-theme)] transition-colors uppercase font-bold"
              >
                GITHUB
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#8B8B8B] hover:text-[var(--accent-theme)] transition-colors uppercase font-bold"
              data-cursor="TOP"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Telemetry bottom bar */}
          <div className="flex flex-wrap items-center justify-between font-mono-code text-[11px] text-[#525252] gap-2">
            <div className="flex items-center gap-4">
              <span>SCRL {scrollProgress}</span>
              <span>CRSR 0.00</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span>THEME</span>
                <span className="w-2.5 h-2.5 inline-block" style={{ backgroundColor: theme.hex }} />
                <span>{theme.hex}</span>
              </span>
              <span>{currentTime}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
