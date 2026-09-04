"use client";

import { portfolioData } from "@/data/portfolioData";
import HalftonePortrait from "./HalftonePortrait";
import InteractiveHalftoneGrid from "./InteractiveHalftoneGrid";
import { usePortfolio } from "@/context/ThemeContext";

export default function Hero() {
  const { playSound } = usePortfolio();

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[560px] bg-[#050505] text-[#e2e8f0] overflow-hidden select-none border-b border-[#1f1f1f]"
    >
      {/* 1. Interactive 26px Halftone Grid (Screens over entire canvas) */}
      <InteractiveHalftoneGrid cell={26} decay={0.94} />

      {/* 2. 45-Degree Rotated Halftone Portrait Shader (Right Side) */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] z-0 flex items-center justify-end overflow-hidden opacity-90 sm:opacity-95 pointer-events-none">
        <HalftonePortrait src="/images/portrait.jpg" pitch={7} />
      </div>

      {/* 3. Rigid Inset Frame matching Blueprint (Top 56-64px, Bottom 40-44px) */}
      <div className="absolute top-14 sm:top-16 bottom-10 sm:bottom-11 left-0 right-0 z-20 flex flex-col justify-between py-3 sm:py-6 px-5 sm:px-10 md:px-16 xl:px-20 max-w-[1536px] mx-auto pointer-events-auto">
        {/* Top Role & Subtitle */}
        <div className="w-full max-w-xl shrink-0 pt-1">
          <h2 className="text-[18px] sm:text-[24px] md:text-[28px] font-bold tracking-tight text-[var(--accent-theme)] uppercase font-sans leading-none">
            AI ENGINEER
          </h2>
          <p className="font-mono-code text-[10px] sm:text-[12px] text-[#8B8B8B] tracking-[0.18em] uppercase mt-1.5 sm:mt-2 font-semibold">
            PRODUCT BUILDER • ENTREPRENEUR
          </p>
        </div>

        {/* Giant Main Name Display */}
        <div className="w-full max-w-3xl shrink-0 my-auto py-1 sm:py-2 space-y-0">
          <div className="text-[clamp(2.8rem,7.5vw,7.2rem)] font-black tracking-[-0.04em] uppercase leading-[0.85] text-[#f1f5f9] font-sans">
            NITHIN
          </div>
          <div className="text-[clamp(1.8rem,4.6vw,4.6rem)] font-black tracking-[-0.04em] uppercase leading-[0.85] text-[var(--accent-theme)] font-sans transition-colors duration-300">
            NAGABUSHANAM.
          </div>
        </div>

        {/* Bottom Hero Narrative & Meta Strip */}
        <div className="w-full shrink-0 border-t border-[#262626]/90 pt-2.5 sm:pt-3 pb-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 font-mono-code text-[10px] sm:text-[12px] text-[#8b8b8b] uppercase tracking-wider font-medium">
            {/* Left Narrative */}
            <div className="md:col-span-7 space-y-0.5 text-[#e2e8f0] font-bold">
              <p>BUILDING INTELLIGENT SYSTEMS,</p>
              <p>AI-POWERED PRODUCTS AND</p>
              <p className="text-[var(--accent-theme)]">REAL-WORLD BUSINESS SOLUTIONS.</p>
            </div>

            {/* Right Geolocation & Discipline */}
            <div className="md:col-span-5 flex flex-col md:items-end justify-between space-y-0.5 text-[#8b8b8b]">
              <p>BASED IN CHENNAI, INDIA</p>
              <p>OPEN TO GLOBAL OPPORTUNITIES</p>
              <p className="text-[#525252] hidden sm:block">GENERATIVE AI • FULL-STACK • PRODUCT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
