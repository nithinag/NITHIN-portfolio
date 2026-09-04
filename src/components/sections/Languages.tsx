"use client";

import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { Globe } from "lucide-react";

export default function Languages() {
  return (
    <section className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      <GiantSectionBanner
        number="11"
        category="LINGUISTIC & PROFESSIONAL FLUENCY"
        word1="GLOBAL"
        word2="LANGUAGES"
      />

      <div className="portfolio-container py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {portfolioData.languages.map((lang, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[var(--accent-theme)] transition-colors group flex flex-col justify-between clip-chamfer-lg shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-code text-xs text-[var(--accent-theme)]">0{idx + 1} // LANGUAGE</span>
                  <Globe className="w-4 h-4 text-[#8B8B8B] group-hover:text-[var(--accent-theme)] transition-colors" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#F5F5F5] mb-2">
                  {lang.name}
                </h3>
                <div className="font-mono-code text-xs text-[var(--accent-theme)] font-bold mb-3">
                  {lang.proficiency}
                </div>
                <p className="text-sm text-[#8B8B8B] font-light">
                  {lang.level}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#141414] font-mono-code text-[10px] text-[#525252]">
                STATUS: FLUENT COLLABORATION & CLIENT DISCUSSIONS
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
