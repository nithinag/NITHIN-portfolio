"use client";

import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { ArrowRight } from "lucide-react";
import { usePortfolio } from "@/context/ThemeContext";

export default function WorkExperience() {
  const { playSound } = usePortfolio();

  return (
    <section id="experience" className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      <GiantSectionBanner
        number="03"
        category="EXPERIENCE SECTION"
        word1="WORK"
        word2="EXPERIENCE"
      />

      <div className="portfolio-container py-16 md:py-24 space-y-6">
        {portfolioData.experience.map((exp) => (
          <div
            key={exp.company}
            className="border border-[#1f1f1f] bg-[#0a0a0a] p-6 sm:p-8 md:p-10 hover:border-[var(--accent-theme)] transition-colors clip-chamfer-lg group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Left: Number & Role & Dates */}
              <div className="lg:col-span-4 flex items-start gap-4 sm:gap-6 border-b lg:border-b-0 lg:border-r border-[#1a1a1a] pb-6 lg:pb-0 lg:pr-6">
                <span className="font-mono-code text-2xl sm:text-3xl font-black text-[#525252] group-hover:text-[var(--accent-theme)] transition-colors">
                  {exp.number}
                </span>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors">
                    {exp.company}
                  </h3>
                  <div className="font-mono-code text-xs text-[#8B8B8B] font-bold">
                    {exp.role}
                  </div>
                  <div className="font-mono-code text-[11px] text-[#666] pt-1">
                    {exp.location}
                  </div>
                  <div className="font-mono-code text-[11px] text-[var(--accent-theme)] pt-0.5 font-bold">
                    {exp.period}
                  </div>
                </div>
              </div>

              {/* Center: Description & Tech Pills */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm sm:text-base text-[#B0B0B0] font-light leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      onClick={() => playSound("click")}
                      className="font-mono-code text-xs px-3 py-1 bg-[#141414] border border-[#242424] text-[#8B8B8B] group-hover:border-[var(--accent-theme)] group-hover:text-[var(--accent-theme)] transition-colors clip-chamfer-btn"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Arrow Action */}
              <div className="lg:col-span-1 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center text-[#8B8B8B] group-hover:text-[var(--accent-theme)] group-hover:border-[var(--accent-theme)] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
