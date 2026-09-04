"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, Project } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { usePortfolio } from "@/context/ThemeContext";
import { ArrowUpRight, CheckCircle2, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedWork() {
  const { playSound } = usePortfolio();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = portfolioData.projects;
  const activeProject = projects[currentIndex];

  const handlePrev = () => {
    playSound("click");
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    playSound("click");
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a] scroll-mt-14 md:scroll-mt-16 overflow-hidden select-none"
    >
      {/* 1. Giant Marquee Section Header */}
      <GiantSectionBanner
        number="04"
        category="AI & ENGINEERING PRODUCTION ARCHITECTURES"
        word1="FEATURED"
        word2="PROJECTS"
      />

      {/* 2. Interactive Project Selector Bar */}
      <div className="w-full border-b border-[#1a1a1a] px-4 sm:px-8 md:px-12 lg:px-16 py-2.5 flex items-center justify-between font-mono-code text-[11px] sm:text-xs bg-[#080808] shrink-0">
        {/* Left: Project Selector Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          {projects.map((proj, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  playSound("click");
                  setCurrentIndex(idx);
                }}
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 border transition-all clip-chamfer-btn whitespace-nowrap text-[10px] sm:text-[11px] ${
                  isActive
                    ? "border-[var(--accent-theme)] bg-[#111] text-[var(--accent-theme)] font-bold shadow-[0_0_8px_var(--accent-glow)]"
                    : "border-[#222] bg-[#0a0a0a] text-[#777] hover:text-[#bbb] hover:border-[#333]"
                }`}
              >
                <span className={isActive ? "text-[var(--accent-theme)]" : "text-[#555]"}>{proj.number}</span>
                <span className="hidden sm:inline">/</span>
                <span className="truncate max-w-[120px] sm:max-w-none">{proj.title}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Prev / Next Controls */}
        <div className="flex items-center gap-2 shrink-0 pl-2">
          <span className="font-mono-code text-[10px] text-[#555] hidden sm:inline">
            [{currentIndex + 1} / {projects.length}]
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-1 sm:p-1.5 border border-[#222] bg-[#0c0c0c] hover:border-[var(--accent-theme)] hover:text-[var(--accent-theme)] transition-colors clip-chamfer-btn"
              title="Previous Project"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-1 sm:p-1.5 border border-[#222] bg-[#0c0c0c] hover:border-[var(--accent-theme)] hover:text-[var(--accent-theme)] transition-colors clip-chamfer-btn"
              title="Next Project"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Project Showcase Viewport (Fills screen budget) */}
      <div className="portfolio-container py-4 sm:py-6 md:py-8 flex-1 flex flex-col justify-center min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="group relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[var(--accent-theme)] transition-all p-5 sm:p-7 md:p-9 xl:p-11 clip-chamfer-lg shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* Left: Metadata, Title, Description, Metrics */}
              <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
                {/* Category & Year */}
                <div className="flex items-center gap-2.5 font-mono-code text-[11px] text-[#8B8B8B]">
                  <span className="text-[var(--accent-theme)] font-bold">{activeProject.number}</span>
                  <span className="text-[#383838]">/</span>
                  <span className="uppercase tracking-wider">{activeProject.category}</span>
                  <span className="text-[#383838]">·</span>
                  <span>{activeProject.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black uppercase tracking-tight text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors leading-tight">
                  {activeProject.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-[#8B8B8B] font-light leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-none">
                  {activeProject.description}
                </p>

                {/* Big Impact Metric Numbers */}
                <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {activeProject.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-2.5 sm:p-3 bg-[#050505] border border-[#1a1a1a] font-mono-code text-[11px] sm:text-xs text-[#F5F5F5] flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-theme)] shrink-0 mt-1" />
                      <span className="leading-snug">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags & Action Button */}
                <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[#141414]">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono-code text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#141414] text-[#8B8B8B] border border-[#222]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      playSound("click");
                      setSelectedProject(activeProject);
                    }}
                    className="flex items-center gap-1.5 font-mono-code text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[var(--accent-theme)] text-[#050505] clip-chamfer-btn hover:opacity-90 transition-all shadow-[0_0_12px_var(--accent-glow)] shrink-0"
                  >
                    <span>INSPECT CASE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right: Technical Image Preview with HUD Crosshairs */}
              <div
                className="lg:col-span-5 relative aspect-video sm:aspect-[4/3] bg-[#050505] border border-[#1f1f1f] overflow-hidden group-hover:border-[var(--accent-theme)] transition-colors cursor-pointer"
                onClick={() => {
                  playSound("click");
                  setSelectedProject(activeProject);
                }}
              >
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Crosshair overlays */}
                <div className="absolute top-2 left-2 font-mono-code text-[9px] bg-[#050505]/90 px-1.5 py-0.5 border border-[#262626] text-[var(--accent-theme)]">
                  [SYS.PREVIEW.{activeProject.number}]
                </div>

                <div className="absolute bottom-2 right-2 font-mono-code text-[9px] bg-[#050505]/90 px-2 py-0.5 border border-[#262626] text-[#8B8B8B] flex items-center gap-1">
                  <ExternalLink className="w-2.5 h-2.5" />
                  <span>EXPAND</span>
                </div>

                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--accent-theme)]" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--accent-theme)]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--accent-theme)]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--accent-theme)]" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 p-4 md:p-8 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0c0c0c] border border-[#262626] p-6 md:p-10 text-[#F5F5F5] my-auto clip-chamfer-lg shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  playSound("click");
                  setSelectedProject(null);
                }}
                className="absolute top-6 right-6 font-mono-code text-xs flex items-center gap-2 p-2 border border-[#262626] hover:border-[var(--accent-theme)] hover:text-[var(--accent-theme)] transition-colors clip-chamfer-btn"
                data-cursor="CLOSE"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4" />
              </button>

              <div className="font-mono-code text-xs text-[var(--accent-theme)] tracking-widest uppercase mb-2">
                PROJECT BREAKDOWN // {selectedProject.number}
              </div>

              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4">
                {selectedProject.title}
              </h3>

              <div className="w-full aspect-video border border-[#1f1f1f] overflow-hidden my-6 bg-[#050505]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>

              <p className="text-base sm:text-lg text-[#8B8B8B] leading-relaxed mb-6 font-light">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="font-mono-code text-xs text-[#8B8B8B] uppercase tracking-wider mb-3">
                  // MEASURED IMPACT & METRICS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 bg-[#050505] border border-[#1f1f1f] font-mono-code text-xs text-[#F5F5F5]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-theme)] shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono-code text-xs text-[#8B8B8B] uppercase tracking-wider mb-3">
                  // STACK ARCHITECTURE
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono-code text-xs px-3 py-1 bg-[#141414] border border-[#262626] text-[var(--accent-theme)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
