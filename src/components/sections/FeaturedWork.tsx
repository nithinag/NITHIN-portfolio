"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, Project } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { usePortfolio } from "@/context/ThemeContext";
import { ArrowUpRight, CheckCircle2, X, ExternalLink } from "lucide-react";

export default function FeaturedWork() {
  const { playSound } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      {/* Giant Marquee Section Header */}
      <GiantSectionBanner
        number="04"
        category="AI & ENGINEERING PRODUCTION ARCHITECTURES"
        word1="FEATURED"
        word2="PROJECTS"
      />

      <div className="portfolio-container py-16 md:py-24">
        {/* Project Cards Stack */}
        <div className="space-y-12">
          {portfolioData.projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[var(--accent-theme)] transition-all p-6 sm:p-8 md:p-12 clip-chamfer-lg shadow-2xl"
              data-cursor="VIEW"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Metadata, Title, Description, Metrics */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Category & Year */}
                  <div className="flex items-center gap-3 font-mono-code text-xs text-[#8B8B8B]">
                    <span className="text-[var(--accent-theme)] font-bold">{project.number}</span>
                    <span className="text-[#383838]">/</span>
                    <span className="uppercase tracking-wider">{project.category}</span>
                    <span className="text-[#383838]">·</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-[#8B8B8B] font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Big Impact Metric Numbers (Mauricio Juba Style) */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-3.5 bg-[#050505] border border-[#1a1a1a] font-mono-code text-xs text-[#F5F5F5] flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-theme)] shrink-0 mt-1.5" />
                        <span className="leading-snug">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags & Action */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#141414]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono-code text-[11px] px-2.5 py-1 bg-[#141414] text-[#8B8B8B] border border-[#222]"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        playSound("click");
                        setSelectedProject(project);
                      }}
                      className="flex items-center gap-2 font-mono-code text-xs font-bold uppercase tracking-widest px-4 py-2 bg-[var(--accent-theme)] text-[#050505] clip-chamfer-btn hover:opacity-90 transition-all shadow-[0_0_12px_var(--accent-glow)]"
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
                    setSelectedProject(project);
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Crosshair overlays */}
                  <div className="absolute top-2 left-2 font-mono-code text-[9px] bg-[#050505]/90 px-1.5 py-0.5 border border-[#262626] text-[var(--accent-theme)]">
                    [SYS.PREVIEW.{project.number}]
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
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
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
