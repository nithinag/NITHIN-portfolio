"use client";

import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { usePortfolio } from "@/context/ThemeContext";
import { ArrowUpRight } from "lucide-react";

export default function LetsTalk() {
  const { playSound } = usePortfolio();

  return (
    <section id="contact" className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      <GiantSectionBanner
        number="05"
        category="OPEN TO OPPORTUNITIES"
        word1="LET'S"
        word2="TALK"
      />

      <div className="portfolio-container py-16 md:py-24">
        <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6 sm:p-10 md:p-12 clip-chamfer-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Pitch Statement */}
            <div className="lg:col-span-4">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F5F5F5] leading-snug">
                OPEN TO AI ENGINEERING, PRODUCT BUILDING, GENERATIVE AI, AND GLOBAL OPPORTUNITIES.
              </h3>
            </div>

            {/* Middle: Contact Coordinates */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-code text-xs">
              <div className="space-y-1">
                <span className="text-[#666] uppercase text-[10px] block">EMAIL</span>
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  onClick={() => playSound("click")}
                  className="text-[#F5F5F5] hover:text-[var(--accent-theme)] transition-colors block font-bold truncate"
                >
                  {portfolioData.contact.email}
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-[#666] uppercase text-[10px] block">LINKEDIN</span>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound("click")}
                  className="text-[#F5F5F5] hover:text-[var(--accent-theme)] transition-colors block font-bold"
                >
                  NITHIN NAGABUSHANAM
                </a>
              </div>

              <div className="space-y-1 sm:col-span-2">
                <span className="text-[#666] uppercase text-[10px] block">GITHUB</span>
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound("click")}
                  className="text-[#F5F5F5] hover:text-[var(--accent-theme)] transition-colors block font-bold"
                >
                  nithinag
                </a>
              </div>
            </div>

            {/* Right: GET IN TOUCH CTA */}
            <div className="lg:col-span-3 flex lg:justify-end">
              <a
                href={`mailto:${portfolioData.contact.email}?subject=Collaboration%20Inquiry%20-%20Nithin%20Nagabushanam`}
                onClick={() => playSound("click")}
                className="inline-flex items-center justify-center font-mono-code text-xs font-black tracking-widest uppercase px-6 py-4 bg-[var(--accent-theme)] text-[#050505] hover:opacity-90 clip-chamfer-btn shadow-[0_0_20px_var(--accent-glow)] transition-all group"
                data-cursor="TOUCH"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
