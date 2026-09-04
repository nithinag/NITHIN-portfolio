"use client";

import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { ArrowUpRight } from "lucide-react";

export default function CoreCompetencies() {
  return (
    <section id="competencies" className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      <GiantSectionBanner
        number="09"
        category="SPECIALIZATION & ARCHITECTURAL EXPERTISE"
        word1="CORE"
        word2="COMPETENCIES"
      />

      <div className="portfolio-container py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {portfolioData.coreCompetencies.map((comp, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[var(--accent-theme)] hover:bg-[#141414] transition-all group flex flex-col justify-between min-h-[150px] clip-chamfer"
              data-cursor="CAPABILITY"
            >
              <div className="flex items-center justify-between font-mono-code text-[10px] text-[#525252]">
                <span>0{idx + 1}</span>
                <span className="text-[#8B8B8B]">{comp.category}</span>
              </div>

              <div className="my-2">
                <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors leading-tight">
                  {comp.name}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#141414] font-mono-code text-[11px] text-[#8B8B8B]">
                <span>{comp.tag}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[var(--accent-theme)] transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
