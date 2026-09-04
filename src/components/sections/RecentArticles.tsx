"use client";

import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { usePortfolio } from "@/context/ThemeContext";
import { ArrowUpRight } from "lucide-react";

export default function RecentArticles() {
  const { playSound } = usePortfolio();

  return (
    <section id="articles" className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      <GiantSectionBanner
        number="02"
        category="TECHNICAL WRITINGS & INSIGHTS"
        word1="ARTICLES"
        word2="WRITING"
      />

      <div className="portfolio-container py-16 md:py-24">
        <div className="divide-y divide-[#1a1a1a] border-y border-[#1a1a1a]">
          {portfolioData.articles.map((article) => (
            <div
              key={article.id}
              onClick={() => playSound("click")}
              onMouseEnter={() => playSound("hover")}
              className="group py-8 md:py-12 transition-colors hover:bg-[#0c0c0c] px-4 md:px-8 cursor-pointer"
              data-cursor="READ"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-center">
                {/* Number & Date */}
                <div className="lg:col-span-3 flex items-center gap-4 font-mono-code text-xs text-[#8B8B8B]">
                  <span className="text-[var(--accent-theme)] font-bold">{article.number}</span>
                  <span>{article.date}</span>
                  <span className="text-[#383838]">/</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title & Excerpt */}
                <div className="lg:col-span-7 space-y-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#F5F5F5] group-hover:text-[var(--accent-theme)] transition-colors uppercase">
                    {article.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#8B8B8B] line-clamp-2 font-light">
                    {article.excerpt}
                  </p>
                </div>

                {/* Category & Action */}
                <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-4 font-mono-code text-xs">
                  <span className="text-[#8B8B8B] text-[10px] bg-[#141414] px-2.5 py-1 border border-[#222] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="w-9 h-9 border border-[#262626] group-hover:border-[var(--accent-theme)] group-hover:bg-[var(--accent-theme)] group-hover:text-[#050505] flex items-center justify-center clip-chamfer-btn transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
