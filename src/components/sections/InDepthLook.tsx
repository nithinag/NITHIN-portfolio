"use client";

import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { GitBranch, Layers, ShieldCheck, Zap } from "lucide-react";

export default function InDepthLook() {
  const { caseStudy } = portfolioData;

  const pillarIcons = [
    <GitBranch key="1" className="w-5 h-5 text-[var(--accent-theme)]" />,
    <Layers key="2" className="w-5 h-5 text-[var(--accent-theme)]" />,
    <ShieldCheck key="3" className="w-5 h-5 text-[var(--accent-theme)]" />,
    <Zap key="4" className="w-5 h-5 text-[var(--accent-theme)]" />,
  ];

  return (
    <section id="case-study" className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      <GiantSectionBanner
        number="07"
        category="SYSTEM ARCHITECTURE & DEEP DIVE"
        word1="IN DEPTH"
        word2="LOOK"
      />

      <div className="portfolio-container py-16 md:py-24">
        <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6 sm:p-8 md:p-12 clip-chamfer-lg shadow-2xl">
          <div className="max-w-3xl mb-12">
            <span className="font-mono-code text-xs text-[var(--accent-theme)] uppercase tracking-wider block mb-2 font-bold">
              {caseStudy.subtitle}
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F5F5F5] mb-4">
              {caseStudy.title}
            </h3>
            <p className="text-base sm:text-lg text-[#8B8B8B] leading-relaxed font-light">
              {caseStudy.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {caseStudy.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#050505] border border-[#1f1f1f] hover:border-[var(--accent-theme)] transition-colors flex flex-col justify-between clip-chamfer"
              >
                <div>
                  <div className="mb-4">{pillarIcons[idx]}</div>
                  <h4 className="font-mono-code text-xs font-bold uppercase text-[#F5F5F5] mb-2 tracking-wider">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#8B8B8B] leading-relaxed font-light">
                    {pillar.detail}
                  </p>
                </div>
                <div className="mt-6 font-mono-code text-[10px] text-[#525252]">
                  STAGE // 0{idx + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[#1a1a1a] pt-8 items-center">
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {caseStudy.impactMetrics.map((m, i) => (
                <div key={i} className="p-4 bg-[#050505] border border-[#1f1f1f] clip-chamfer">
                  <div className="font-mono-code text-2xl sm:text-3xl font-black text-[var(--accent-theme)]">
                    {m.value}
                  </div>
                  <div className="font-mono-code text-[11px] text-[#8B8B8B] uppercase mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 flex flex-wrap gap-1.5 justify-end">
              {caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-code text-xs px-2.5 py-1 bg-[#141414] border border-[#262626] text-[#F5F5F5]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
