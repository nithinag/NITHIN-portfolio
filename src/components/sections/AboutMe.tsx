"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AboutMe() {
  const [hoveredZone, setHoveredZone] = useState<"tech" | "biz" | "overlap" | null>(null);

  return (
    <section id="about" className="w-full bg-[#080909] text-[#F2F0EA] border-b border-[#1b2226] select-none">
      {/* ========================================================================= */}
      {/* 1. TOP HEADER ROW */}
      {/* ========================================================================= */}
      <div className="w-full border-b border-[#1b2226] px-4 sm:px-8 md:px-12 lg:px-16 py-3 flex items-center justify-between font-mono-code text-[11px] sm:text-xs">
        {/* Left: 02 / ABOUT */}
        <div className="flex items-center gap-2 px-3 py-1 border border-[#1b2226] bg-[#0c0e0e] text-[#F2F0EA]">
          <span className="font-bold text-[#C3FFFC]">02</span>
          <span className="text-[#445258]">/</span>
          <span className="tracking-widest font-semibold">ABOUT</span>
        </div>

        {/* Right: [PEOPLE × TECHNOLOGY × IMPACT] */}
        <div className="tracking-[0.2em] text-[#6b7c85] text-[10px] sm:text-[11px] uppercase">
          [PEOPLE × TECHNOLOGY × IMPACT]
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN ABOUT 3-ZONE EDITORIAL GRID */}
      {/* ========================================================================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[640px] xl:min-h-[720px]">
        {/* ======================================================================= */}
        {/* ZONE 1: LEFT (~52% - lg:col-span-6 xl:col-span-6) */}
        {/* ======================================================================= */}
        <div className="lg:col-span-6 xl:col-span-6 border-b lg:border-b-0 lg:border-r border-[#1b2226] p-6 sm:p-10 md:p-12 xl:p-16 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            {/* Top Label */}
            <div className="font-mono-code text-[11px] sm:text-xs font-semibold text-[#C3FFFC] tracking-[0.25em] uppercase">
              PASSION DRIVEN
            </div>

            {/* Enormous Display Typography */}
            <div className="space-y-0 leading-[0.88] tracking-[-0.04em]">
              <div
                className="text-[clamp(2.8rem,5.5vw,5.6rem)] font-black uppercase text-transparent"
                style={{ WebkitTextStroke: "1.5px #F2F0EA" }}
              >
                DRIVEN BY
              </div>
              <div className="text-[clamp(2.8rem,5.5vw,5.6rem)] font-black uppercase text-[#C3FFFC]">
                TECHNOLOGY
              </div>
              <div className="text-[clamp(2.8rem,5.5vw,5.6rem)] font-black uppercase text-[#C3FFFC]">
                AND BUSINESS.
              </div>
            </div>

            {/* Personal Statement */}
            <p className="font-mono-code text-xs sm:text-sm md:text-[13px] text-[#8e9fa8] leading-relaxed max-w-lg pt-2 font-light">
              I’m deeply passionate about leveraging technology <br className="hidden sm:inline" />
              to solve real-world problems and building products <br className="hidden sm:inline" />
              that create meaningful business impact.
            </p>
          </div>

          {/* Bottom Left Statement Box */}
          <div className="pt-6 border-t border-[#1b2226]">
            <div className="flex items-center border border-[#1b2226] bg-[#0b0e0f] w-full max-w-md">
              {/* Left Arrow Sub-Box */}
              <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center border-r border-[#1b2226] text-[#C3FFFC] shrink-0">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Right Text */}
              <div className="px-4 sm:px-6 py-2 font-mono-code text-[10px] sm:text-[11px] text-[#F2F0EA] tracking-widest font-semibold uppercase leading-tight space-y-0.5">
                <p>EXPLORING IDEAS.</p>
                <p>BUILDING SOLUTIONS.</p>
                <p className="text-[#C3FFFC]">CREATING IMPACT.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* ZONE 2: CENTER (~26% - lg:col-span-3 xl:col-span-3) — VENN DIAGRAM */}
        {/* ======================================================================= */}
        <div className="lg:col-span-3 xl:col-span-3 border-b lg:border-b-0 lg:border-r border-[#1b2226] p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden bg-[#080909]">
          {/* Venn Diagram Container */}
          <div className="relative w-full max-w-[340px] aspect-[1.35/1] flex items-center justify-center my-auto">
            {/* Left Circle: TECHNOLOGY */}
            <div
              onMouseEnter={() => setHoveredZone("tech")}
              onMouseLeave={() => setHoveredZone(null)}
              className={`absolute left-0 w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-[#304047] transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                hoveredZone === "tech" ? "border-[#C3FFFC] bg-[#0e1619]/60 shadow-[0_0_25px_rgba(195,255,252,0.15)]" : "bg-transparent"
              }`}
            >
              <div className="pr-10 sm:pr-12 text-center space-y-1 select-none">
                <div className="font-mono-code text-[11px] sm:text-xs font-black tracking-wider uppercase text-[#F2F0EA]">
                  TECHNOLOGY
                </div>
                <div className="font-mono-code text-[8px] sm:text-[9px] text-[#6b7c85] uppercase tracking-widest leading-tight space-y-0.5 pt-1">
                  <p>INNOVATION</p>
                  <p>AUTOMATION</p>
                  <p>SCALABILITY</p>
                </div>
              </div>
            </div>

            {/* Right Circle: BUSINESS */}
            <div
              onMouseEnter={() => setHoveredZone("biz")}
              onMouseLeave={() => setHoveredZone(null)}
              className={`absolute right-0 w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-[#304047] transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                hoveredZone === "biz" ? "border-[#C3FFFC] bg-[#0e1619]/60 shadow-[0_0_25px_rgba(195,255,252,0.15)]" : "bg-transparent"
              }`}
            >
              <div className="pl-10 sm:pl-12 text-center space-y-1 select-none">
                <div className="font-mono-code text-[11px] sm:text-xs font-black tracking-wider uppercase text-[#F2F0EA]">
                  BUSINESS
                </div>
                <div className="font-mono-code text-[8px] sm:text-[9px] text-[#6b7c85] uppercase tracking-widest leading-tight space-y-0.5 pt-1">
                  <p>STRATEGY</p>
                  <p>GROWTH</p>
                  <p>REAL IMPACT</p>
                </div>
              </div>
            </div>

            {/* Center Overlap Lens: IDEAS TO IMPACT */}
            <div
              onMouseEnter={() => setHoveredZone("overlap")}
              onMouseLeave={() => setHoveredZone(null)}
              className={`relative z-10 w-24 h-36 sm:w-28 sm:h-44 rounded-[50%] flex flex-col items-center justify-center text-center p-2 cursor-pointer transition-all duration-300 ${
                hoveredZone === "overlap" ? "scale-105" : ""
              }`}
              style={{
                backgroundImage: "radial-gradient(#C3FFFC 1px, transparent 1px)",
                backgroundSize: "6px 6px",
                backgroundColor: "rgba(8, 10, 10, 0.85)",
              }}
            >
              <div className="font-mono-code text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#F2F0EA] leading-tight space-y-0.5">
                <p>IDEAS</p>
                <p className="text-[#6b7c85] text-[9px]">TO</p>
                <p className="text-[#C3FFFC]">IMPACT</p>
              </div>
              <div className="w-1.5 h-1.5 bg-[#C3FFFC] mt-2 shadow-[0_0_8px_#C3FFFC]" />
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* ZONE 3: RIGHT (~22% - lg:col-span-3 xl:col-span-3) — PORTRAIT & QUOTE */}
        {/* ======================================================================= */}
        <div className="lg:col-span-3 xl:col-span-3 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#080909]">
          {/* Top: 02 & Sub-Navigation */}
          <div className="flex items-start gap-4">
            <span className="font-mono-code text-3xl font-black text-[#F2F0EA] leading-none">
              02
            </span>
            <div className="font-mono-code text-[10px] sm:text-[11px] space-y-1 uppercase tracking-widest">
              <div className="flex items-center gap-1.5 text-[#C3FFFC] font-bold">
                <span className="w-1 h-1 bg-[#C3FFFC] rounded-full" />
                <span>ABOUT</span>
              </div>
              <div className="text-[#55656d]">EXPERIENCE</div>
              <div className="text-[#55656d]">PROJECTS</div>
              <div className="text-[#55656d]">CONTACT</div>
            </div>
          </div>

          {/* Portrait & Editorial Quote Board */}
          <div className="relative w-full aspect-[4/5] max-w-[280px] mx-auto border border-[#1b2226] bg-[#050505] overflow-hidden group">
            {/* Black & White High Contrast Portrait */}
            <img
              src="/images/portrait.jpg"
              alt="Nithin Nagabushanam"
              className="w-full h-full object-cover grayscale contrast-125 brightness-95 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
            />

            {/* Handwritten / Editorial Quote Overlay (Right side of portrait) */}
            <div className="absolute top-3 right-3 bg-[#080909]/90 border border-[#2a353a] p-3 font-mono-code text-[10px] sm:text-[11px] text-[#F2F0EA] tracking-widest leading-tight uppercase backdrop-blur-sm">
              <span className="text-[#6b7c85] font-serif text-sm leading-none block">“</span>
              <p className="font-bold">BUILD</p>
              <p className="font-bold">LEARN</p>
              <p className="font-bold">IMPROVE</p>
              <p className="font-bold">REPEAT</p>
              <span className="text-[#6b7c85] font-serif text-sm leading-none block text-right">”</span>
            </div>
          </div>

          {/* Bottom Right Statement */}
          <div className="space-y-2 pt-2">
            <div className="w-1.5 h-1.5 bg-[#C3FFFC]" />
            <div className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8e9fa8] leading-relaxed">
              <p className="text-[#F2F0EA] font-semibold">TECHNOLOGY</p>
              <p>CREATES POSSIBILITIES.</p>
              <p className="text-[#F2F0EA] font-semibold pt-1">BUSINESS TURNS THEM</p>
              <p className="text-[#C3FFFC]">INTO REAL-WORLD IMPACT.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
