"use client";

import { portfolioData } from "@/data/portfolioData";
import { usePortfolio } from "@/context/ThemeContext";

export default function MyToolkit() {
  const { playSound } = usePortfolio();

  return (
    <section id="toolkit" className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      <div className="portfolio-container py-12 md:py-16">
        <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6 sm:p-10 clip-chamfer-lg">
          <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4 mb-8">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F5F5F5]">
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
                className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#0e0e0e] px-3 -mx-3 transition-colors clip-chamfer"
              >
                {/* Category Name */}
                <div className="md:col-span-4 font-mono-code text-sm font-bold text-[#F5F5F5] uppercase tracking-wider">
                  {item.category}
                </div>

                {/* Skills List */}
                <div className="md:col-span-8 flex flex-wrap gap-2.5 sm:gap-4 font-mono-code text-xs">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      onClick={() => playSound("click")}
                      className="px-3 py-1 bg-[#141414] border border-[#242424] hover:border-[var(--accent-theme)] hover:text-[var(--accent-theme)] text-[#A0A0A0] transition-colors cursor-default clip-chamfer-btn"
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
