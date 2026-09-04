"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { X, ArrowUpRight } from "lucide-react";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { number: "01", name: "HOME", href: "#hero", subtitle: "HERO & SYSTEM INTRO" },
  { number: "02", name: "ABOUT", href: "#about", subtitle: "PROFILE, SKILLS & EDUCATION" },
  { number: "03", name: "EXPERIENCE", href: "#experience", subtitle: "TECTRA TECHNOLOGIES & 1LYMINERALS" },
  { number: "04", name: "PROJECTS", href: "#projects", subtitle: "AI & ENGINEERING PRODUCTION ARCHITECTURES" },
  { number: "05", name: "CONTACT", href: "#contact", subtitle: "EMAIL, LINKEDIN & GITHUB" },
];

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#050505] text-[#F5F5F5] p-6 md:p-12 lg:p-16 overflow-y-auto border-b border-[#1f1f1f]"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-6">
            <div className="font-mono-code text-xs tracking-widest text-[#8B8B8B]">
              <span className="text-[#C3FFFC]">00.</span> NAVIGATION INDEX
            </div>
            <button
              onClick={onClose}
              className="group flex items-center gap-2 font-mono-code text-xs uppercase tracking-widest text-[#F5F5F5] hover:text-[#C3FFFC] transition-colors py-2 px-3 border border-[#262626] hover:border-[#C3FFFC]"
              data-cursor="CLOSE"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Main Navigation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-8">
            <div className="lg:col-span-8 flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.number}
                  onClick={() => handleLinkClick(link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  className="group flex items-baseline gap-4 md:gap-8 text-left py-2 hover:translate-x-3 transition-transform duration-200"
                  data-cursor="GO"
                >
                  <span className="font-mono-code text-xs md:text-sm text-[#8B8B8B] group-hover:text-[var(--accent-theme)] transition-colors">
                    {link.number}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors uppercase leading-none">
                      {link.name}
                    </span>
                    <span className="font-mono-code text-[11px] text-[#525252] group-hover:text-[#8B8B8B] transition-colors mt-1">
                      {link.subtitle}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7 opacity-0 group-hover:opacity-100 text-[var(--accent-theme)] transition-opacity ml-auto" />
                </motion.button>
              ))}
            </div>

            {/* Sidebar Context inside Menu */}
            <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1f1f1f] pt-8 lg:pt-0 lg:pl-12 space-y-8 font-mono-code text-xs">
              <div>
                <p className="text-[#8B8B8B] uppercase tracking-wider mb-2">// DIRECT REACHOUT</p>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="block text-sm md:text-base text-[#F5F5F5] hover:text-[var(--accent-theme)] transition-colors font-bold"
                >
                  {portfolioData.personal.email}
                </a>
              </div>

              <div>
                <p className="text-[#8B8B8B] uppercase tracking-wider mb-2">// SOCIAL INDEX</p>
                <div className="flex flex-col space-y-2">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-sm text-[#F5F5F5] hover:text-[var(--accent-theme)] transition-colors"
                  >
                    <span>GITHUB</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-sm text-[#F5F5F5] hover:text-[var(--accent-theme)] transition-colors"
                  >
                    <span>LINKEDIN</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[#8B8B8B] uppercase tracking-wider mb-2">// GEOLOCATION</p>
                <p className="text-[#F5F5F5]">{portfolioData.personal.location}</p>
                <p className="text-[#8B8B8B] mt-1">{portfolioData.personal.coordinates}</p>
                <p className="text-[var(--accent-theme)] mt-2 flex items-center gap-2 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-theme)] animate-ping" />
                  {portfolioData.personal.status}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-wrap items-center justify-between border-t border-[#1f1f1f] pt-6 font-mono-code text-[11px] text-[#8B8B8B] tracking-wider">
            <div>© 2026 NITHIN NAGABUSHANAM — ALL RIGHTS RESERVED</div>
            <div className="text-[#F5F5F5]">DESIGN BLUEPRINT: MAURICIO JUBA 1:1 RECREATION</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
