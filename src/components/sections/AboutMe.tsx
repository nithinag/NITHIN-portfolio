"use client";

import { useState } from "react";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { portfolioData } from "@/data/portfolioData";
import { usePortfolio } from "@/context/ThemeContext";
import { ArrowRight } from "lucide-react";

export default function AboutMe() {
  const { playSound } = usePortfolio();
  const [activeDomain, setActiveDomain] = useState<"tech" | "biz" | "overlap" | null>(null);

  return (
    <section id="about" className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a] scroll-mt-14 md:scroll-mt-16 select-none">
      {/* ========================================================================= */}
      {/* 1. GIANT MARQUEE BANNER (EXACT REFERENCE IMAGE 2 & 3) */}
      {/* ========================================================================= */}
      <GiantSectionBanner
        number="02"
        category="PROFILE, SKILLS & EDUCATION"
        word1="ABOUT"
        word2="ME"
      />

      {/* ========================================================================= */}
      {/* 2. CORE PROFILE, METRICS & EDUCATION (EXACT REFERENCE IMAGE 3) */}
      {/* ========================================================================= */}
      <div className="portfolio-container py-12 md:py-16 border-b border-[#1a1a1a]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Bio & Education */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-[#F5F5F5] leading-relaxed font-light">
              {portfolioData.personal.bioShort}
            </p>

            {/* Bullet Focus Tags */}
            <div className="pt-2 space-y-2 font-mono-code text-xs text-[#8B8B8B] tracking-wider">
              {portfolioData.personal.focusTags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[var(--accent-theme)] font-bold">›</span>
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            {/* Education Summary Box */}
            <div className="p-5 sm:p-6 bg-[#0a0a0a] border border-[#1f1f1f] clip-chamfer space-y-2.5 font-mono-code text-xs mt-6">
              <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-2 text-[var(--accent-theme)] font-bold">
                <span>EDUCATION</span>
                <span className="text-[#8B8B8B] font-normal">17/09/2022 — 10/04/2026</span>
              </div>
              <div className="text-sm font-bold text-[#F5F5F5] uppercase">
                B.E. — COMPUTER SCIENCE AND ENGINEERING
              </div>
              <div className="text-[#8B8B8B] text-[11px]">
                Sathyabama Institute of Science and Technology • Chennai, India
              </div>
              <div className="pt-2 text-[10px] text-[#666] flex flex-wrap gap-1.5 uppercase">
                {["AI", "MACHINE LEARNING", "DBMS", "DSA", "OS", "NETWORKS", "SOFTWARE ENGG", "ENTREPRENEURSHIP"].map((s) => (
                  <span key={s} className="px-2 py-0.5 bg-[#141414] border border-[#222] text-[#8B8B8B]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: 5 Stat Cards Grid (Aligned to 3rd reference image) */}
          <div className="lg:col-span-6 space-y-3">
            {/* Top Row: 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {portfolioData.personal.stats.slice(0, 3).map((stat, i) => (
                <div
                  key={i}
                  className="p-5 bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[var(--accent-theme)] transition-colors group clip-chamfer"
                >
                  <div className="text-3xl sm:text-4xl font-black text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors font-mono-code tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono-code text-[10px] text-[#8B8B8B] uppercase tracking-wider mt-2 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portfolioData.personal.stats.slice(3, 5).map((stat, i) => (
                <div
                  key={i}
                  className="p-5 bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[var(--accent-theme)] transition-colors group clip-chamfer"
                >
                  <div className="text-3xl sm:text-4xl font-black text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors font-mono-code tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono-code text-[10px] text-[#8B8B8B] uppercase tracking-wider mt-2 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. DRIVEN BY TECHNOLOGY & BUSINESS + VENN DIAGRAM (EXPANDED TO FILL SPACE) */}
      {/* ========================================================================= */}
      <div className="w-full border-b border-[#1a1a1a]">
        {/* Subheader bar */}
        <div className="w-full border-b border-[#1a1a1a] px-4 sm:px-8 md:px-12 lg:px-16 py-3 flex items-center justify-between font-mono-code text-[11px] sm:text-xs bg-[#080909]">
          <div className="flex items-center gap-2 text-[#8B8B8B]">
            <span className="font-bold text-[var(--accent-theme)]">//</span>
            <span className="tracking-widest font-semibold uppercase text-[#F5F5F5]">CORE PHILOSOPHY</span>
          </div>
          <div className="tracking-[0.2em] text-[#6b7c85] text-[10px] sm:text-[11px] uppercase font-medium">
            [PEOPLE × TECHNOLOGY × IMPACT]
          </div>
        </div>

        {/* 2-Column Layout: Typography on Left, Venn Diagram Covering Full Right Space */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[520px] xl:min-h-[580px]">
          {/* Left Column: Typography & Statement */}
          <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-[#1a1a1a] p-6 sm:p-10 md:p-12 xl:p-14 flex flex-col justify-between space-y-8 bg-[#080909]">
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

              <p className="font-mono-code text-xs sm:text-[13px] text-[#8e9fa8] leading-relaxed max-w-lg pt-2 font-light">
                I’m deeply passionate about leveraging technology to solve real-world problems and building products that create meaningful business impact.
              </p>
            </div>

            {/* Bottom Left Statement Box */}
            <div className="pt-4 border-t border-[#1a1a1a]">
              <div className="flex items-center border border-[#1a1a1a] bg-[#0b0e0f] w-full max-w-md">
                <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center border-r border-[#1a1a1a] text-[var(--accent-theme)] shrink-0">
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

          {/* Right Column: Full-Width Spacious Interactive Venn Diagram (Covering the entire right half) */}
          <div className="lg:col-span-6 p-6 sm:p-10 md:p-12 flex flex-col items-center justify-between relative overflow-hidden bg-[#080909]">
            <div className="w-full max-w-[480px] aspect-[1.4/1] relative flex items-center justify-center my-auto">
              {/* SVG Venn Diagram */}
              <svg
                viewBox="0 0 500 360"
                className="w-full h-full text-[#304047]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="lensDotsExpanded" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle cx="4" cy="4" r="1.2" fill="#C3FFFC" opacity="0.65" />
                  </pattern>
                  <clipPath id="leftCircleClipExp">
                    <circle cx="185" cy="180" r="140" />
                  </clipPath>
                </defs>

                {/* Left Circle Outline */}
                <circle
                  cx="185"
                  cy="180"
                  r="140"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`transition-colors duration-300 ${
                    activeDomain === "tech" ? "stroke-[var(--accent-theme)]" : "stroke-[#304047]"
                  }`}
                />

                {/* Right Circle Outline */}
                <circle
                  cx="315"
                  cy="180"
                  r="140"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`transition-colors duration-300 ${
                    activeDomain === "biz" ? "stroke-[var(--accent-theme)]" : "stroke-[#304047]"
                  }`}
                />

                {/* Overlap Lens Fill */}
                <g clipPath="url(#leftCircleClipExp)">
                  <circle
                    cx="315"
                    cy="180"
                    r="140"
                    fill="url(#lensDotsExpanded)"
                    className={`transition-opacity duration-300 ${
                      activeDomain === "overlap" ? "opacity-100" : "opacity-80"
                    }`}
                  />
                </g>

                {/* Connecting Lines */}
                <line x1="150" y1="180" x2="195" y2="180" stroke="#223036" strokeWidth="1" />
                <line x1="305" y1="180" x2="350" y2="180" stroke="#223036" strokeWidth="1" />
              </svg>

              {/* Overlay HTML Typography */}
              <div className="absolute inset-0 flex items-center justify-between pointer-events-auto">
                {/* Left Circle: TECHNOLOGY */}
                <div
                  onMouseEnter={() => {
                    setActiveDomain("tech");
                    playSound("hover");
                  }}
                  onMouseLeave={() => setActiveDomain(null)}
                  className="w-1/3 flex flex-col items-center justify-center text-center pl-4 cursor-pointer select-none space-y-1 z-10"
                >
                  <div className="font-mono-code text-xs sm:text-sm font-black tracking-wider uppercase text-[#F2F0EA]">
                    TECHNOLOGY
                  </div>
                  <div className="font-mono-code text-[9px] sm:text-[10px] text-[#6b7c85] uppercase tracking-widest leading-tight space-y-0.5 pt-1">
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
                  <div className="w-2 h-2 bg-[var(--accent-theme)] shadow-[0_0_8px_var(--accent-glow)] mt-1.5" />
                </div>

                {/* Right Circle: BUSINESS */}
                <div
                  onMouseEnter={() => {
                    setActiveDomain("biz");
                    playSound("hover");
                  }}
                  onMouseLeave={() => setActiveDomain(null)}
                  className="w-1/3 flex flex-col items-center justify-center text-center pr-4 cursor-pointer select-none space-y-1 z-10"
                >
                  <div className="font-mono-code text-xs sm:text-sm font-black tracking-wider uppercase text-[#F2F0EA]">
                    BUSINESS
                  </div>
                  <div className="font-mono-code text-[9px] sm:text-[10px] text-[#6b7c85] uppercase tracking-widest leading-tight space-y-0.5 pt-1">
                    <p>STRATEGY</p>
                    <p>GROWTH</p>
                    <p>REAL IMPACT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Statement across the Venn Diagram Zone */}
            <div className="w-full pt-4 flex items-center justify-between border-t border-[#1a1a1a] font-mono-code text-[10px] sm:text-[11px] text-[#8e9fa8] uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--accent-theme)]" />
                <span>TECHNOLOGY CREATES POSSIBILITIES.</span>
              </div>
              <div className="text-[var(--accent-theme)] font-semibold hidden sm:block">
                BUSINESS TURNS THEM INTO IMPACT.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. MY TOOLKIT TABLE (EXACT REFERENCE IMAGE 3) */}
      {/* ========================================================================= */}
      <div className="portfolio-container py-12 md:py-16">
        <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6 sm:p-10 clip-chamfer-lg">
          <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4 mb-6">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F5F5F5]">
              MY TOOLKIT
            </h3>
            <span className="font-mono-code text-xs text-[var(--accent-theme)] uppercase tracking-wider">
              [SYSTEM CAPABILITIES]
            </span>
          </div>

          <div className="divide-y divide-[#1a1a1a]">
            {portfolioData.blueprintToolkit.map((item) => (
              <div
                key={item.category}
                className="py-3.5 sm:py-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center hover:bg-[#0e0e0e] px-2 transition-colors clip-chamfer"
              >
                {/* Category Name */}
                <div className="md:col-span-4 font-mono-code text-xs sm:text-sm font-bold text-[#F5F5F5] uppercase tracking-wider">
                  {item.category}
                </div>

                {/* Skills List */}
                <div className="md:col-span-8 flex flex-wrap gap-2 font-mono-code text-[11px] sm:text-xs">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      onClick={() => playSound("click")}
                      className="px-2.5 py-1 bg-[#141414] border border-[#242424] hover:border-[var(--accent-theme)] hover:text-[var(--accent-theme)] text-[#A0A0A0] transition-colors cursor-default clip-chamfer-btn uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
