"use client";

import { useState } from "react";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { ArrowRight } from "lucide-react";
import { usePortfolio } from "@/context/ThemeContext";

export default function AboutMe() {
  const { playSound } = usePortfolio();
  const [activeDomain, setActiveDomain] = useState<"tech" | "biz" | "overlap" | null>(null);

  return (
    <section
      id="about"
      className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between bg-[#080909] text-[#F2F0EA] border-b border-[#1b2226] select-none scroll-mt-14 md:scroll-mt-16 overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* 1. GIANT MARQUEE HEADER (ABOUT ME BAR) */}
      {/* ========================================================================= */}
      <GiantSectionBanner
        number="02"
        category="PROFILE, SKILLS & EDUCATION"
        word1="ABOUT"
        word2="ME"
      />

      {/* ========================================================================= */}
      {/* 2. SUB-HEADER STRIP */}
      {/* ========================================================================= */}
      <div className="w-full border-b border-[#1b2226] px-4 sm:px-8 md:px-12 lg:px-16 py-2.5 sm:py-3 flex items-center justify-between font-mono-code text-[10px] sm:text-xs bg-[#080909] shrink-0">
        {/* Left: 02 / ABOUT */}
        <div className="flex items-center gap-2 px-2.5 py-0.5 border border-[#1b2226] bg-[#0c0e0e] text-[#F2F0EA] clip-chamfer-btn">
          <span className="font-bold text-[var(--accent-theme)]">02</span>
          <span className="text-[#445258]">/</span>
          <span className="tracking-widest font-semibold uppercase">ABOUT</span>
        </div>

        {/* Right: [PEOPLE × TECHNOLOGY × IMPACT] */}
        <div className="tracking-[0.2em] text-[#6b7c85] text-[9px] sm:text-[11px] uppercase font-medium">
          [PEOPLE × TECHNOLOGY × IMPACT]
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN EDITORIAL GRID (PORTRAIT REMOVED, VENN DIAGRAM EXPANDED) */}
      {/* ========================================================================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-0">
        {/* ======================================================================= */}
        {/* LEFT COLUMN: 50% (lg:col-span-6) — TYPOGRAPHY & MANIFESTO */}
        {/* ======================================================================= */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-[#1b2226] p-5 sm:p-8 md:p-10 xl:p-12 flex flex-col justify-between space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-5">
            {/* Top Label */}
            <div className="font-mono-code text-[10px] sm:text-xs font-semibold text-[var(--accent-theme)] tracking-[0.25em] uppercase">
              PASSION DRIVEN
            </div>

            {/* Enormous Display Typography */}
            <div className="space-y-0 leading-[0.88] tracking-[-0.04em] font-sans">
              <div
                className="text-[clamp(2.4rem,4.8vw,5.0rem)] font-black uppercase text-transparent"
                style={{ WebkitTextStroke: "1.5px #F2F0EA" }}
              >
                DRIVEN BY
              </div>
              <div className="text-[clamp(2.4rem,4.8vw,5.0rem)] font-black uppercase text-[var(--accent-theme)] transition-colors duration-300">
                TECHNOLOGY
              </div>
              <div className="text-[clamp(2.4rem,4.8vw,5.0rem)] font-black uppercase text-[var(--accent-theme)] transition-colors duration-300">
                AND BUSINESS.
              </div>
            </div>

            {/* Personal Statement */}
            <p className="font-mono-code text-xs sm:text-[13px] md:text-sm text-[#8e9fa8] leading-relaxed max-w-lg pt-1 font-light">
              I’m deeply passionate about leveraging technology <br className="hidden sm:inline" />
              to solve real-world problems and building products <br className="hidden sm:inline" />
              that create meaningful business impact.
            </p>
          </div>

          {/* Bottom Left Statement Box */}
          <div className="pt-3 sm:pt-4 border-t border-[#1b2226]">
            <div className="flex items-center border border-[#1b2226] bg-[#0b0e0f] w-full max-w-md">
              {/* Left Arrow Sub-Box */}
              <div className="w-11 sm:w-14 h-11 sm:h-14 flex items-center justify-center border-r border-[#1b2226] text-[var(--accent-theme)] shrink-0">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Right Text */}
              <div className="px-3 sm:px-5 py-1.5 font-mono-code text-[9px] sm:text-[11px] text-[#F2F0EA] tracking-widest font-semibold uppercase leading-tight space-y-0.5">
                <p>EXPLORING IDEAS.</p>
                <p>BUILDING SOLUTIONS.</p>
                <p className="text-[var(--accent-theme)]">CREATING IMPACT.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* RIGHT COLUMN: 50% (lg:col-span-6) — LARGE EXPANDED VENN DIAGRAM */}
        {/* ======================================================================= */}
        <div className="lg:col-span-6 p-5 sm:p-8 md:p-10 xl:p-12 flex flex-col justify-between items-center relative overflow-hidden bg-[#080909]">
          {/* Top subtle category indicator */}
          <div className="w-full flex items-center justify-end font-mono-code text-[10px] text-[#6b7c85] uppercase tracking-widest">
            <span>[SYS.INTERSECTION // 2026]</span>
          </div>

          {/* Large Expanded Venn Diagram */}
          <div className="w-full max-w-[480px] aspect-[1.3/1] relative flex items-center justify-center my-auto py-4">
            {/* SVG Venn Diagram */}
            <svg
              viewBox="0 0 500 360"
              className="w-full h-full text-[#304047]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="lensDotsLarge" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="5" cy="5" r="1.2" fill="#C3FFFC" opacity="0.65" />
                </pattern>
                <clipPath id="leftCircleClipLarge">
                  <circle cx="190" cy="180" r="150" />
                </clipPath>
              </defs>

              {/* Left Circle Outline */}
              <circle
                cx="190"
                cy="180"
                r="150"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-colors duration-300 ${
                  activeDomain === "tech" ? "stroke-[var(--accent-theme)]" : "stroke-[#304047]"
                }`}
              />

              {/* Right Circle Outline */}
              <circle
                cx="310"
                cy="180"
                r="150"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-colors duration-300 ${
                  activeDomain === "biz" ? "stroke-[var(--accent-theme)]" : "stroke-[#304047]"
                }`}
              />

              {/* Overlap Lens Fill */}
              <g clipPath="url(#leftCircleClipLarge)">
                <circle
                  cx="310"
                  cy="180"
                  r="150"
                  fill="url(#lensDotsLarge)"
                  className={`transition-opacity duration-300 ${
                    activeDomain === "overlap" ? "opacity-100" : "opacity-75"
                  }`}
                />
              </g>

              {/* Left & Right Connecting Lines */}
              <line x1="130" y1="180" x2="180" y2="180" stroke="#223036" strokeWidth="1" />
              <line x1="320" y1="180" x2="370" y2="180" stroke="#223036" strokeWidth="1" />
            </svg>

            {/* Typography Overlay for Venn Diagram */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-auto px-4">
              {/* Left Domain: TECHNOLOGY */}
              <div
                onMouseEnter={() => {
                  setActiveDomain("tech");
                  playSound("hover");
                }}
                onMouseLeave={() => setActiveDomain(null)}
                className="w-1/3 flex flex-col items-center justify-center text-center cursor-pointer select-none space-y-1.5 z-10"
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
                <div className="font-mono-code text-xs sm:text-sm font-black uppercase tracking-widest text-[#F2F0EA] leading-tight space-y-0.5">
                  <p>IDEAS</p>
                  <p className="text-[#6b7c85] text-[10px]">TO</p>
                  <p className="text-[var(--accent-theme)]">IMPACT</p>
                </div>
                <div className="w-2 h-2 bg-[var(--accent-theme)] shadow-[0_0_10px_var(--accent-glow)] mt-1.5" />
              </div>

              {/* Right Domain: BUSINESS */}
              <div
                onMouseEnter={() => {
                  setActiveDomain("biz");
                  playSound("hover");
                }}
                onMouseLeave={() => setActiveDomain(null)}
                className="w-1/3 flex flex-col items-center justify-center text-center cursor-pointer select-none space-y-1.5 z-10"
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

          {/* Bottom Statement (Aligned with bottom left) */}
          <div className="w-full flex items-center justify-between border-t border-[#1b2226] pt-3 sm:pt-5 font-mono-code text-[9px] sm:text-[11px] text-[#8e9fa8] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--accent-theme)] inline-block" />
              <span className="text-[#F2F0EA] font-semibold">TECHNOLOGY CREATES POSSIBILITIES.</span>
            </div>
            <div className="text-[var(--accent-theme)] font-semibold hidden sm:block">
              BUSINESS TURNS THEM INTO IMPACT.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
