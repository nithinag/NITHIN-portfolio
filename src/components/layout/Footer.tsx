"use client";

import { usePortfolio } from "@/context/ThemeContext";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { playSound } = usePortfolio();

  const scrollToTop = () => {
    playSound("click");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050505] text-[#F5F5F5] select-none pb-14 md:pb-16 border-t border-[#1a1a1a]">
      {/* 1. MIDDLE SUB-ROW: COPYRIGHT & BACK TO TOP */}
      <div className="w-full">
        <div className="portfolio-container py-4 sm:py-5 flex items-center justify-between font-mono-code text-[11px] sm:text-xs text-[#8B8B8B]">
          <div className="uppercase tracking-wider text-[10px] sm:text-xs">
            © 2026 {portfolioData.personal.name}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 sm:gap-2 hover:text-[var(--accent-theme)] transition-colors uppercase tracking-widest text-[10px] sm:text-xs font-bold"
            data-cursor="TOP"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. FINAL MONOGRAM & RIGHTS RESERVED ROW */}
      <div className="w-full border-t border-[#1a1a1a] bg-[#050505]">
        <div className="portfolio-container py-6 sm:py-8 flex items-center justify-between">
          {/* Stylized Big Monogram Emblem */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
            <svg
              className="h-8 sm:h-10 w-auto text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors"
              viewBox="0 0 70 40"
              fill="currentColor"
            >
              {/* Bold stylized N glyph */}
              <path d="M0 40 V0 H10 L28 26 V0 H38 V40 H28 L10 14 V40 Z" />
              {/* Geometric cyan accent dot */}
              <rect x="44" y="24" width="14" height="16" fill="var(--accent-theme)" />
            </svg>
          </div>

          {/* Rights Reserved */}
          <div className="font-mono-code text-[10px] sm:text-[11px] text-[#525252] tracking-wider uppercase text-right">
            © 2026 {portfolioData.personal.name}. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
