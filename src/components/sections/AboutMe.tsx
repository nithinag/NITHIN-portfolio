"use client";

import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";

export default function AboutMe() {
  return (
    <section id="about" className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      <GiantSectionBanner
        number="02"
        category="PROFILE, SKILLS & EDUCATION"
        word1="ABOUT"
        word2="ME"
      />

      <div className="portfolio-container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Bio & Taglines */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-[#F5F5F5] leading-relaxed font-light">
              {portfolioData.personal.bioShort}
            </p>

            <div className="pt-4 border-t border-[#1a1a1a] space-y-2 font-mono-code text-xs text-[#8B8B8B] tracking-wider">
              {portfolioData.personal.focusTags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[var(--accent-theme)] font-bold">›</span>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Grid (5 stats aligned like blueprint) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Row 1: 3 cards */}
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
              {/* Row 2: 2 cards */}
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
      </div>
    </section>
  );
}
