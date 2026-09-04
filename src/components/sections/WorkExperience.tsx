"use client";

import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { ArrowRight } from "lucide-react";
import { usePortfolio } from "@/context/ThemeContext";

export default function WorkExperience() {
  const { playSound } = usePortfolio();

  return (
    <section id="experience" className="w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a] scroll-mt-14 md:scroll-mt-16 overflow-hidden">
      <GiantSectionBanner
        number="03"
        category="EXPERIENCE SECTION"
        word1="WORK"
        word2="EXPERIENCE"
      />

      <div className="portfolio-container py-6 sm:py-8 md:py-10 flex-1 flex flex-col justify-center gap-3.5 sm:gap-5">
        {portfolioData.experience.map((exp) => (
          <div
            key={exp.company}
            className="border border-[#1f1f1f] bg-[#0a0a0a] p-4 sm:p-6 md:p-8 hover:border-[var(--accent-theme)] transition-colors clip-chamfer-lg group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-center">
              {/* Left: Number & Role & Dates */}
              <div className="lg:col-span-4 flex items-start gap-3 sm:gap-5 border-b lg:border-b-0 lg:border-r border-[#1a1a1a] pb-4 lg:pb-0 lg:pr-5">
                <span className="font-mono-code text-xl sm:text-2xl md:text-3xl font-black text-[#525252] group-hover:text-[var(--accent-theme)] transition-colors">
                  {exp.number}
                </span>

                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors">
                    {exp.company}
                  </h3>
                  <div className="font-mono-code text-[11px] sm:text-xs text-[#8B8B8B] font-bold">
                    {exp.role}
                  </div>
                  <div className="font-mono-code text-[10px] sm:text-[11px] text-[#666] pt-0.5">
                    {exp.location}
                  </div>
                  <div className="font-mono-code text-[10px] sm:text-[11px] text-[var(--accent-theme)] pt-0.5 font-bold">
                    {exp.period}
                  </div>
                </div>
              </div>

              {/* Center: Description & Tech Pills */}
              <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5">
                <p className="text-xs sm:text-sm md:text-[15px] text-[#B0B0B0] font-light leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      onClick={() => playSound("click")}
                      className="font-mono-code text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 bg-[#141414] border border-[#242424] text-[#8B8B8B] group-hover:border-[var(--accent-theme)] group-hover:text-[var(--accent-theme)] transition-colors clip-chamfer-btn"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Arrow Action */}
              <div className="lg:col-span-1 hidden lg:flex justify-end">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#262626] flex items-center justify-center text-[#8B8B8B] group-hover:text-[var(--accent-theme)] group-hover:border-[var(--accent-theme)] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
