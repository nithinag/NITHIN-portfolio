"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { usePortfolio } from "@/context/ThemeContext";

export default function AboutMe() {
  const { playSound } = usePortfolio();
  const [activeDomain, setActiveDomain] = useState<"tech" | "biz" | "overlap" | null>(null);

  return (
    <section
      id="about"
      className="w-full bg-[#080909] text-[#F2F0EA] border-b border-[#1b2226] select-none scroll-mt-14 md:scroll-mt-16 overflow-hidden"
    >
      {/* 1. Header Bar */}
      <div className="w-full border-b border-[#1b2226] px-4 sm:px-8 md:px-12 lg:px-16 py-3.5 flex items-center justify-between font-mono-code text-[11px] sm:text-xs">
        <div className="flex items-center gap-2 px-3 py-1 border border-[#1b2226] bg-[#0c0e0e] text-[#F2F0EA] clip-chamfer-btn">
          <span className="font-bold text-[var(--accent-theme)]">02</span>
          <span className="text-[#445258]">/</span>
          <span className="tracking-widest font-semibold uppercase">ABOUT</span>
        </div>

        <div className="tracking-[0.2em] text-[#6b7c85] text-[10px] sm:text-[11px] uppercase font-medium">
          [PEOPLE × TECHNOLOGY × IMPACT]
        </div>
      </div>

      {/* 2. Main 2-Zone Grid (Left: Display Typography, Right: Expanded Venn Diagram) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[520px] xl:min-h-[580px]">
        {/* Left Column (50%): Typography & Statement */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-[#1b2226] p-6 sm:p-10 md:p-12 xl:p-14 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="font-mono-code text-[11px] sm:text-xs font-semibold text-[var(--accent-theme)] tracking-[0.25em] uppercase">
              PASSION DRIVEN
            </div>

            <div className="space-y-0 leading-[0.88] tracking-[-0.04em] font-sans">
              <div
                className="text-[clamp(2.4rem,4.8vw,4.8rem)] font-black uppercase text-transparent"
                style={{ WebkitTextStroke: "1.5px #F2F0EA" }}
              >
                DRIVEN BY
              </div>
              <div className="text-[clamp(2.4rem,4.8vw,4.8rem)] font-black uppercase text-[var(--accent-theme)] transition-colors duration-300">
                TECHNOLOGY
              </div>
              <div className="text-[clamp(2.4rem,4.8vw,4.8rem)] font-black uppercase text-[var(--accent-theme)] transition-colors duration-300">
                AND BUSINESS.
              </div>
            </div>

            <p className="font-mono-code text-xs sm:text-[13px] text-[#8e9fa8] leading-relaxed max-w-lg pt-1 font-light">
              I’m deeply passionate about leveraging technology <br className="hidden sm:inline" />
              to solve real-world problems and building products <br className="hidden sm:inline" />
              that create meaningful business impact.
            </p>
          </div>

          {/* Bottom Left Statement Box */}
          <div className="pt-4 border-t border-[#1b2226]">
            <div className="flex items-center border border-[#1b2226] bg-[#0b0e0f] w-full max-w-md">
              <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center border-r border-[#1b2226] text-[var(--accent-theme)] shrink-0">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="px-4 sm:px-6 py-2 font-mono-code text-[10px] sm:text-[11px] text-[#F2F0EA] tracking-widest font-semibold uppercase leading-tight space-y-0.5">
                <p>EXPLORING IDEAS.</p>
                <p>BUILDING SOLUTIONS.</p>
                <p className="text-[var(--accent-theme)]">CREATING IMPACT.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (50%): Fully Expanded Venn Diagram */}
        <div className="lg:col-span-6 p-6 sm:p-10 md:p-12 flex flex-col justify-between items-center bg-[#080909] relative">
          <div className="w-full max-w-[460px] aspect-[1.4/1] relative flex items-center justify-center my-auto">
            <svg
              viewBox="0 0 460 320"
              className="w-full h-full text-[#304047]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="techBizLens" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="4" cy="4" r="1.2" fill="#C3FFFC" opacity="0.65" />
                </pattern>
                <clipPath id="techCircleClip">
                  <circle cx="170" cy="160" r="130" />
                </clipPath>
              </defs>

              {/* Left Circle Outline */}
              <circle
                cx="170"
                cy="160"
                r="130"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-colors duration-300 ${
                  activeDomain === "tech" ? "stroke-[var(--accent-theme)]" : "stroke-[#304047]"
                }`}
              />

              {/* Right Circle Outline */}
              <circle
                cx="290"
                cy="160"
                r="130"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-colors duration-300 ${
                  activeDomain === "biz" ? "stroke-[var(--accent-theme)]" : "stroke-[#304047]"
                }`}
              />

              {/* Overlap Lens Fill */}
              <g clipPath="url(#techCircleClip)">
                <circle
                  cx="290"
                  cy="160"
                  r="130"
                  fill="url(#techBizLens)"
                  className={`transition-opacity duration-300 ${
                    activeDomain === "overlap" ? "opacity-100" : "opacity-75"
                  }`}
                />
              </g>

              {/* Connecting Lines */}
              <line x1="130" y1="160" x2="180" y2="160" stroke="#223036" strokeWidth="1" />
              <line x1="280" y1="160" x2="330" y2="160" stroke="#223036" strokeWidth="1" />
            </svg>

            {/* Typography Overlay */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-auto px-4 sm:px-8">
              {/* Left Domain: TECHNOLOGY */}
              <div
                onMouseEnter={() => {
                  setActiveDomain("tech");
                  playSound("hover");
                }}
                onMouseLeave={() => setActiveDomain(null)}
                className="w-1/3 flex flex-col items-center justify-center text-center cursor-pointer select-none space-y-1 z-10"
              >
                <div className="font-mono-code text-xs sm:text-sm font-black tracking-wider uppercase text-[#F2F0EA]">
                  TECHNOLOGY
                </div>
                <div className="font-mono-code text-[9px] sm:text-[10px] text-[#6b7c85] uppercase tracking-widest leading-tight space-y-0.5">
                  <p>INNOVATION</p>
                  <p>AUTOMATION</p>
                  <p>SCALABILITY</p>
                </div>
              </div>

              {/* Center Overlap: IDEAS TO IMPACT */}
              <div
                onMouseEnter={() => {
                  setActiveDomain("overlap");
                  playSound("hover");
                }}
                onMouseLeave={() => setActiveDomain(null)}
                className="w-1/3 flex flex-col items-center justify-center text-center cursor-pointer select-none space-y-1 z-20"
              >
                <div className="font-mono-code text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#F2F0EA] leading-tight space-y-0.5">
                  <p>IDEAS</p>
                  <p className="text-[#6b7c85] text-[9px]">TO</p>
                  <p className="text-[var(--accent-theme)]">IMPACT</p>
                </div>
                <div className="w-1.5 h-1.5 bg-[var(--accent-theme)] shadow-[0_0_8px_var(--accent-glow)] mt-1" />
              </div>

              {/* Right Domain: BUSINESS */}
              <div
                onMouseEnter={() => {
                  setActiveDomain("biz");
                  playSound("hover");
                }}
                onMouseLeave={() => setActiveDomain(null)}
                className="w-1/3 flex flex-col items-center justify-center text-center cursor-pointer select-none space-y-1 z-10"
              >
                <div className="font-mono-code text-xs sm:text-sm font-black tracking-wider uppercase text-[#F2F0EA]">
                  BUSINESS
                </div>
                <div className="font-mono-code text-[9px] sm:text-[10px] text-[#6b7c85] uppercase tracking-widest leading-tight space-y-0.5">
                  <p>STRATEGY</p>
                  <p>GROWTH</p>
                  <p>REAL IMPACT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right Metadata */}
          <div className="w-full flex items-center justify-between pt-4 border-t border-[#1b2226]/80 text-[10px] sm:text-[11px] font-mono-code text-[#8e9fa8]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--accent-theme)]" />
              <span>TECHNOLOGY CREATES POSSIBILITIES.</span>
            </div>
            <div className="text-[var(--accent-theme)] font-semibold uppercase">
              BUSINESS TURNS THEM INTO IMPACT.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
