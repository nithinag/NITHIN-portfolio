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
      className="relative w-full bg-[#080909] text-[#F2F0EA] border-b border-[#1b2226] select-none scroll-mt-14 md:scroll-mt-16 overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* 1. TOP HEADER ROW */}
      {/* ========================================================================= */}
      <div className="w-full border-b border-[#1b2226] px-4 sm:px-8 md:px-12 lg:px-16 py-3.5 flex items-center justify-between font-mono-code text-[11px] sm:text-xs">
        {/* Left: 02 / ABOUT */}
        <div className="flex items-center gap-2 px-3 py-1 border border-[#1b2226] bg-[#0c0e0e] text-[#F2F0EA] clip-chamfer-btn">
          <span className="font-bold text-[var(--accent-theme)]">02</span>
          <span className="text-[#445258]">/</span>
          <span className="tracking-widest font-semibold uppercase">ABOUT</span>
        </div>

        {/* Right: [PEOPLE × TECHNOLOGY × IMPACT] */}
        <div className="tracking-[0.2em] text-[#6b7c85] text-[10px] sm:text-[11px] uppercase font-medium">
          [PEOPLE × TECHNOLOGY × IMPACT]
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN ABOUT 3-ZONE EDITORIAL GRID */}
      {/* ========================================================================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[600px] xl:min-h-[660px]">
        {/* ======================================================================= */}
        {/* ZONE 1: LEFT (~50% - lg:col-span-6) */}
        {/* ======================================================================= */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-[#1b2226] p-6 sm:p-10 md:p-12 xl:p-14 flex flex-col justify-between space-y-8">
          <div className="space-y-5">
            {/* Top Label */}
            <div className="font-mono-code text-[11px] sm:text-xs font-semibold text-[var(--accent-theme)] tracking-[0.25em] uppercase">
              PASSION DRIVEN
            </div>

            {/* Enormous Display Typography matching reference exactly */}
            <div className="space-y-0 leading-[0.88] tracking-[-0.04em] font-sans">
              <div
                className="text-[clamp(2.6rem,5.2vw,5.2rem)] font-black uppercase text-transparent"
                style={{ WebkitTextStroke: "1.5px #F2F0EA" }}
              >
                DRIVEN BY
              </div>
              <div className="text-[clamp(2.6rem,5.2vw,5.2rem)] font-black uppercase text-[var(--accent-theme)] transition-colors duration-300">
                TECHNOLOGY
              </div>
              <div className="text-[clamp(2.6rem,5.2vw,5.2rem)] font-black uppercase text-[var(--accent-theme)] transition-colors duration-300">
                AND BUSINESS.
              </div>
            </div>

            {/* Personal Statement */}
            <p className="font-mono-code text-xs sm:text-[13px] text-[#8e9fa8] leading-relaxed max-w-lg pt-2 font-light">
              I’m deeply passionate about leveraging technology <br className="hidden sm:inline" />
              to solve real-world problems and building products <br className="hidden sm:inline" />
              that create meaningful business impact.
            </p>
          </div>

          {/* Bottom Left Statement Box */}
          <div className="pt-6 border-t border-[#1b2226]">
            <div className="flex items-center border border-[#1b2226] bg-[#0b0e0f] w-full max-w-md">
              {/* Left Arrow Sub-Box */}
              <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center border-r border-[#1b2226] text-[var(--accent-theme)] shrink-0">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Right Text */}
              <div className="px-4 sm:px-6 py-2 font-mono-code text-[10px] sm:text-[11px] text-[#F2F0EA] tracking-widest font-semibold uppercase leading-tight space-y-0.5">
                <p>EXPLORING IDEAS.</p>
                <p>BUILDING SOLUTIONS.</p>
                <p className="text-[var(--accent-theme)]">CREATING IMPACT.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* ZONE 2: CENTER (~26% - lg:col-span-3) — PRECISION VENN DIAGRAM */}
        {/* ======================================================================= */}
        <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[#1b2226] p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden bg-[#080909]">
          <div className="w-full max-w-[320px] aspect-square relative flex items-center justify-center my-auto">
            {/* SVG Venn Diagram with Exact Overlap and Connecting Lines */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full text-[#304047]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Dotted pattern for center lens */}
                <pattern id="lensDots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="4" cy="4" r="1" fill="#C3FFFC" opacity="0.65" />
                </pattern>
                {/* Left circle clip */}
                <clipPath id="leftCircleClip">
                  <circle cx="150" cy="200" r="125" />
                </clipPath>
              </defs>

              {/* Left Circle Outline */}
              <circle
                cx="150"
                cy="200"
                r="125"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-colors duration-300 ${
                  activeDomain === "tech" ? "stroke-[var(--accent-theme)]" : "stroke-[#304047]"
                }`}
              />

              {/* Right Circle Outline */}
              <circle
                cx="250"
                cy="200"
                r="125"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-colors duration-300 ${
                  activeDomain === "biz" ? "stroke-[var(--accent-theme)]" : "stroke-[#304047]"
                }`}
              />

              {/* Overlap Lens Fill */}
              <g clipPath="url(#leftCircleClip)">
                <circle
                  cx="250"
                  cy="200"
                  r="125"
                  fill="url(#lensDots)"
                  className={`transition-opacity duration-300 ${
                    activeDomain === "overlap" ? "opacity-100" : "opacity-75"
                  }`}
                />
              </g>

              {/* Left Connecting Line to Subtags */}
              <line x1="120" y1="200" x2="160" y2="200" stroke="#223036" strokeWidth="1" />
              {/* Right Connecting Line to Subtags */}
              <line x1="240" y1="200" x2="280" y2="200" stroke="#223036" strokeWidth="1" />
            </svg>

            {/* Overlay HTML Typography for Crisp Rendering */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-auto">
              {/* Left Circle Content: TECHNOLOGY */}
              <div
                onMouseEnter={() => {
                  setActiveDomain("tech");
                  playSound("hover");
                }}
                onMouseLeave={() => setActiveDomain(null)}
                className="w-1/3 flex flex-col items-center justify-center text-center pl-2 sm:pl-3 cursor-pointer select-none space-y-1 z-10"
              >
                <div className="font-mono-code text-[11px] sm:text-xs font-black tracking-wider uppercase text-[#F2F0EA]">
                  TECHNOLOGY
                </div>
                <div className="font-mono-code text-[8px] sm:text-[9px] text-[#6b7c85] uppercase tracking-widest leading-tight space-y-0.5">
                  <p>INNOVATION</p>
                  <p>AUTOMATION</p>
                  <p>SCALABILITY</p>
                </div>
              </div>

              {/* Center Overlap Content: IDEAS TO IMPACT */}
              <div
                onMouseEnter={() => {
                  setActiveDomain("overlap");
                  playSound("hover");
                }}
                onMouseLeave={() => setActiveDomain(null)}
                className="w-1/3 flex flex-col items-center justify-center text-center cursor-pointer select-none space-y-1 z-20"
              >
                <div className="font-mono-code text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#F2F0EA] leading-tight space-y-0.5">
                  <p>IDEAS</p>
                  <p className="text-[#6b7c85] text-[9px]">TO</p>
                  <p className="text-[var(--accent-theme)]">IMPACT</p>
                </div>
                <div className="w-1.5 h-1.5 bg-[var(--accent-theme)] shadow-[0_0_8px_var(--accent-glow)] mt-1" />
              </div>

              {/* Right Circle Content: BUSINESS */}
              <div
                onMouseEnter={() => {
                  setActiveDomain("biz");
                  playSound("hover");
                }}
                onMouseLeave={() => setActiveDomain(null)}
                className="w-1/3 flex flex-col items-center justify-center text-center pr-2 sm:pr-3 cursor-pointer select-none space-y-1 z-10"
              >
                <div className="font-mono-code text-[11px] sm:text-xs font-black tracking-wider uppercase text-[#F2F0EA]">
                  BUSINESS
                </div>
                <div className="font-mono-code text-[8px] sm:text-[9px] text-[#6b7c85] uppercase tracking-widest leading-tight space-y-0.5">
                  <p>STRATEGY</p>
                  <p>GROWTH</p>
                  <p>REAL IMPACT</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* ZONE 3: RIGHT (~24% - lg:col-span-3) — PORTRAIT & QUOTE */}
        {/* ======================================================================= */}
        <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#080909]">
          {/* Top: 02 & Sub-Navigation */}
          <div className="flex items-start gap-4">
            <span className="font-mono-code text-3xl font-black text-[#F2F0EA] leading-none">
              02
            </span>
            <div className="font-mono-code text-[10px] sm:text-[11px] space-y-1 uppercase tracking-widest">
              <div className="flex items-center gap-1.5 text-[var(--accent-theme)] font-bold">
                <span className="w-1 h-1 bg-[var(--accent-theme)] rounded-full" />
                <span>ABOUT</span>
              </div>
              <a href="#experience" className="block text-[#55656d] hover:text-[#F2F0EA] transition-colors">
                EXPERIENCE
              </a>
              <a href="#projects" className="block text-[#55656d] hover:text-[#F2F0EA] transition-colors">
                PROJECTS
              </a>
              <a href="#contact" className="block text-[#55656d] hover:text-[#F2F0EA] transition-colors">
                CONTACT
              </a>
            </div>
          </div>

          {/* Portrait & Editorial Quote Board */}
          <div className="relative w-full aspect-[4/5] max-w-[260px] mx-auto border border-[#1b2226] bg-[#050505] overflow-hidden group">
            {/* Black & White High Contrast Portrait */}
            <img
              src="/images/portrait.jpg"
              alt="Nithin Nagabushanam"
              className="w-full h-full object-cover grayscale contrast-125 brightness-95 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
            />

            {/* Handwritten / Editorial Quote Overlay (Right side of portrait) */}
            <div className="absolute top-2.5 right-2.5 bg-[#080909]/90 border border-[#2a353a] p-2.5 font-mono-code text-[9px] sm:text-[10px] text-[#F2F0EA] tracking-widest leading-tight uppercase backdrop-blur-sm">
              <span className="text-[#6b7c85] font-serif text-xs leading-none block">“</span>
              <p className="font-bold">BUILD</p>
              <p className="font-bold">LEARN</p>
              <p className="font-bold">IMPROVE</p>
              <p className="font-bold">REPEAT</p>
              <span className="text-[#6b7c85] font-serif text-xs leading-none block text-right">”</span>
            </div>
          </div>

          {/* Bottom Right Statement */}
          <div className="space-y-1.5 pt-1">
            <div className="w-1.5 h-1.5 bg-[var(--accent-theme)]" />
            <div className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8e9fa8] leading-relaxed">
              <p className="text-[#F2F0EA] font-semibold">TECHNOLOGY</p>
              <p>CREATES POSSIBILITIES.</p>
              <p className="text-[#F2F0EA] font-semibold pt-1">BUSINESS TURNS THEM</p>
              <p className="text-[var(--accent-theme)]">INTO REAL-WORLD IMPACT.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
