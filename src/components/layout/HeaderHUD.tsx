"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { usePortfolio } from "@/context/ThemeContext";
import FullscreenMenu from "./FullscreenMenu";
import { Menu } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function HeaderHUD() {
  const { playSound, activeSection } = usePortfolio();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    playSound("click");
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/90 backdrop-blur-md border-b border-[#1f1f1f]/80 select-none">
        <div className="portfolio-container flex items-center justify-between h-14 md:h-16">
          {/* Left Brand / Monogram */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={() => playSound("click")}
              className="flex items-center gap-2.5 group"
              data-cursor="HOME"
            >
              <div className="w-7 h-7 bg-[#0c0c0c] border border-[#262626] flex items-center justify-center font-mono-code text-[12px] font-black text-[#F5F5F5] group-hover:text-[var(--accent-theme)] group-hover:border-[var(--accent-theme)] transition-colors clip-chamfer-btn">
                N
              </div>
              <span className="font-mono-code text-xs md:text-sm font-bold tracking-widest text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors">
                {portfolioData.personal.shortName}.PORTFOLIO/2026
              </span>
            </a>
          </div>

          {/* Center Navigation Links (Exact Blueprint Architecture) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 font-mono-code text-xs font-semibold tracking-wider">
            {navItems.map((item) => {
              const isActive = activeSection.includes(item.label);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  onMouseEnter={() => playSound("hover")}
                  className={`transition-colors uppercase tracking-widest ${
                    isActive
                      ? "text-[var(--accent-theme)] font-bold"
                      : "text-[#8B8B8B] hover:text-[#F5F5F5]"
                  }`}
                  data-cursor="NAV"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Chamfered Get in Touch Button (Desktop) & Menu (Mobile) */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => playSound("click")}
              className="hidden sm:flex items-center justify-center font-mono-code text-xs font-black tracking-widest px-5 py-2 uppercase bg-[var(--accent-theme)] text-[#050505] hover:opacity-90 transition-all clip-chamfer-btn shadow-[0_0_15px_var(--accent-glow)]"
              data-cursor="CONTACT"
            >
              GET IN TOUCH
            </a>

            {/* Mobile Menu Trigger (Exact Blueprint) */}
            <button
              onClick={() => {
                playSound("click");
                setMenuOpen(true);
              }}
              className="lg:hidden flex items-center gap-2 font-mono-code text-xs font-bold tracking-widest px-3 py-1.5 bg-[#0c0c0c] border border-[#262626] hover:border-[var(--accent-theme)] text-[#F5F5F5] hover:text-[var(--accent-theme)] clip-chamfer-btn transition-colors"
              data-cursor="MENU"
            >
              <span>MENU</span>
              <Menu className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
