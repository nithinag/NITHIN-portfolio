"use client";

import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { usePortfolio } from "@/context/ThemeContext";

export default function AboutMe() {
  const { playSound } = usePortfolio();

  return (
    <section id="about" className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a] scroll-mt-14 md:scroll-mt-16 select-none">
      {/* 1. Giant Marquee Section Header: ABOUT ME ABOUT ME */}
      <GiantSectionBanner
        number="02"
        category="PROFILE, SKILLS & EDUCATION"
        word1="ABOUT"
        word2="ME"
      />

      {/* 2. Main Bio & Metrics Grid (Exact 3rd Image Reference) */}
      <div className="portfolio-container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Bio, Focus Areas & Education */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-[#F5F5F5] leading-relaxed font-light">
              {portfolioData.personal.bioShort}
            </p>

            {/* Focus Tags */}
            <div className="pt-2 space-y-2 font-mono-code text-xs text-[#8B8B8B] tracking-wider">
              {portfolioData.personal.focusTags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[var(--accent-theme)] font-bold">›</span>
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div className="p-6 bg-[#0a0a0a] border border-[#1f1f1f] clip-chamfer space-y-3 font-mono-code text-xs mt-4">
              <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-2 text-[var(--accent-theme)] font-bold">
                <span>EDUCATION</span>
                <span>17/09/2022 — 10/04/2026</span>
              </div>
              <div className="text-sm font-bold text-[#F5F5F5]">
                B.E. — COMPUTER SCIENCE AND ENGINEERING
              </div>
              <div className="text-[#8B8B8B]">
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

          {/* Right: 5 Metric Cards (Exact 3rd Image Reference) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Row 1: 3 cards (8.05 CGPA, 70%, 60%) */}
              {portfolioData.personal.stats.slice(0, 3).map((stat, i) => (
                <div
                  key={i}
                  className="p-5 bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[var(--accent-theme)] transition-colors group clip-chamfer"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors font-mono-code tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono-code text-[10px] text-[#8B8B8B] uppercase tracking-wider mt-2 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {/* Row 2: 2 cards (40%, 50%) */}
              {portfolioData.personal.stats.slice(3, 5).map((stat, i) => (
                <div
                  key={i}
                  className="p-5 bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[var(--accent-theme)] transition-colors group clip-chamfer"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors font-mono-code tracking-tight">
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

        {/* 3. MY TOOLKIT Section (Exact 3rd Image Reference) */}
        <div className="mt-12 border border-[#1f1f1f] bg-[#0a0a0a] p-6 sm:p-8 md:p-10 clip-chamfer-lg">
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
                className="py-3.5 sm:py-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center hover:bg-[#0e0e0e] px-2 -mx-2 transition-colors clip-chamfer"
              >
                {/* Category Name */}
                <div className="md:col-span-4 font-mono-code text-xs sm:text-sm font-bold text-[#F5F5F5] uppercase tracking-wider">
                  {item.category}
                </div>

                {/* Skills List */}
                <div className="md:col-span-8 flex flex-wrap gap-2 font-mono-code text-xs">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      onClick={() => playSound("click")}
                      className="px-2.5 py-1 bg-[#141414] border border-[#242424] hover:border-[var(--accent-theme)] hover:text-[var(--accent-theme)] text-[#A0A0A0] transition-colors cursor-default clip-chamfer-btn text-[11px]"
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
