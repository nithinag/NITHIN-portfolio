"use client";

import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Study() {
  const { education } = portfolioData;

  return (
    <section id="study" className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      <GiantSectionBanner
        number="06"
        category="ACADEMIC BACKGROUND & SPECIALIZATION"
        word1="STUDY"
        word2="EDUCATION"
      />

      <div className="portfolio-container py-16 md:py-24">
        <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6 sm:p-8 md:p-12 clip-chamfer-lg shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Degree & Institution */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-[#262626] bg-[#141414] flex items-center justify-center text-[var(--accent-theme)] clip-chamfer-btn">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono-code text-xs text-[#8B8B8B] uppercase">DEGREE PROGRAM</span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F5F5F5]">
                    {education.degree}
                  </h3>
                </div>
              </div>

              <div className="font-mono-code text-base sm:text-lg text-[var(--accent-theme)] font-bold">
                {education.field}
              </div>

              <p className="text-base text-[#8B8B8B] font-light">
                {education.institution}
              </p>

              <div className="pt-2 font-mono-code text-xs text-[#525252]">
                LOCATION: {education.location} • TIMELINE: {education.period}
              </div>
            </div>

            {/* Score & Highlights */}
            <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-[#1a1a1a] pt-6 lg:pt-0 lg:pl-10 space-y-6">
              <div className="p-4 bg-[#050505] border border-[#1f1f1f] flex items-center justify-between clip-chamfer">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[var(--accent-theme)]" />
                  <span className="font-mono-code text-xs text-[#8B8B8B] uppercase">CUMULATIVE GPA</span>
                </div>
                <div className="font-mono-code text-2xl font-black text-[#F5F5F5]">
                  {education.cgpa}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-mono-code text-xs text-[#8B8B8B] uppercase tracking-wider mb-3">
                  <BookOpen className="w-4 h-4 text-[var(--accent-theme)]" />
                  <span>SPECIALIZATION & FOCUS</span>
                </h4>
                <div className="space-y-2.5">
                  {education.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#050505] border border-[#1f1f1f] text-xs text-[#8B8B8B] font-mono-code clip-chamfer"
                    >
                      <span className="text-[var(--accent-theme)] mr-2">✦</span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
