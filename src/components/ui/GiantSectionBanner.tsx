"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface GiantSectionBannerProps {
  number?: string;
  category?: string;
  word1: string;
  word2: string;
}

export default function GiantSectionBanner({
  word1,
  word2,
}: GiantSectionBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track vertical scroll of this component across the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map vertical scroll progress to ultra-slow, gentle horizontal drift
  const rawX = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);
  const x = useSpring(rawX, { stiffness: 45, damping: 25, restDelta: 0.001 });

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden border-b border-[#1a1a1a] bg-[#050505] py-1 sm:py-2 md:py-3 select-none shrink-0"
    >
      {/* Scroll-Driven Horizontal Translation Track */}
      <div className="flex overflow-hidden relative">
        <motion.div
          style={{ x }}
          className="flex items-center gap-6 sm:gap-10 md:gap-12 whitespace-nowrap will-change-transform"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 sm:gap-6 md:gap-8 shrink-0">
              <span className="text-[clamp(4.8rem,14vw,15.5rem)] font-black tracking-[-0.04em] uppercase text-stroke-accent leading-[0.84] transition-colors duration-300">
                {word1}
              </span>
              <span className="text-[clamp(4.8rem,14vw,15.5rem)] font-black tracking-[-0.04em] uppercase text-[var(--accent-theme)] leading-[0.84] transition-colors duration-300">
                {word2}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

