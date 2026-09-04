"use client";

import { usePortfolio } from "@/context/ThemeContext";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { playSound } = usePortfolio();

  const scrollToTop = () => {
    playSound("click");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050505] text-[#F5F5F5] select-none pb-16 md:pb-20">
      {/* 1. SEND ACTION & DIRECT MAIL CLIENT STRIP (EXACT MAURICIO JUBA 1:1) */}
      <div className="portfolio-container py-12 md:py-16 space-y-4">
        <div>
          <a
            href={`mailto:${portfolioData.contact.email}?subject=Collaboration%20Inquiry%20-%20Nithin%20Nagabushanam`}
            onClick={() => playSound("click")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-theme)] text-[#050505] font-mono-code text-xs font-black tracking-widest uppercase hover:opacity-90 transition-all clip-chamfer-btn shadow-[0_0_20px_var(--accent-glow)] group"
            data-cursor="SEND"
          >
            <span>SEND</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <p className="font-mono-code text-[11px] sm:text-xs text-[#6b7c85] tracking-wider uppercase">
          OPENS YOUR MAIL CLIENT — OR WRITE DIRECT TO{" "}
          <a
            href={`mailto:${portfolioData.contact.email}`}
            onClick={() => playSound("click")}
            className="text-[#A0A0A0] hover:text-[var(--accent-theme)] transition-colors underline underline-offset-4"
          >
            {portfolioData.contact.email}
          </a>
        </p>
      </div>

      {/* 2. MIDDLE SUB-ROW: COPYRIGHT & BACK TO TOP */}
      <div className="w-full border-t border-[#1a1a1a]">
        <div className="portfolio-container py-6 flex items-center justify-between font-mono-code text-xs text-[#8B8B8B]">
          <div className="uppercase tracking-wider text-[11px] sm:text-xs">
            © 2026 {portfolioData.personal.name}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[var(--accent-theme)] transition-colors uppercase tracking-widest text-[11px] sm:text-xs font-bold"
            data-cursor="TOP"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. FINAL MONOGRAM & RIGHTS RESERVED ROW (EXACT MAURICIO JUBA 1:1) */}
      <div className="w-full border-t border-[#1a1a1a] bg-[#050505]">
        <div className="portfolio-container py-10 md:py-14 flex items-center justify-between">
          {/* Stylized Big Monogram Emblem */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
            <svg
              className="h-9 sm:h-11 w-auto text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors"
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
          <div className="font-mono-code text-[11px] sm:text-xs text-[#525252] tracking-wider uppercase text-right">
            © 2026 {portfolioData.personal.name}. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
