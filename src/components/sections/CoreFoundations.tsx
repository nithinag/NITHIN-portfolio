"use client";

import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";

export default function CoreFoundations() {
  return (
    <section className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      <GiantSectionBanner
        number="08"
        category="FIRST-PRINCIPLES BELIEFS"
        word1="CORE"
        word2="FOUNDATIONS"
      />

      <div className="portfolio-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.coreFoundations.map((foundation) => (
            <div
              key={foundation.number}
              className="p-8 sm:p-10 bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[var(--accent-theme)] transition-colors group flex flex-col justify-between clip-chamfer-lg shadow-2xl"
            >
              <div>
                <span className="font-mono-code text-xs text-[var(--accent-theme)] font-bold block mb-4">
                  {foundation.number} // PRINCIPLE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors mb-4">
                  {foundation.title}
                </h3>
                <p className="text-sm sm:text-base text-[#8B8B8B] font-light leading-relaxed">
                  {foundation.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#141414] font-mono-code text-[10px] text-[#525252]">
                STATUS: ENFORCED IN PRODUCTION WORKFLOWS
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
