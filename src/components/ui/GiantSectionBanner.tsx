"use client";

interface GiantSectionBannerProps {
  number: string;
  category: string;
  word1: string;
  word2: string;
}

export default function GiantSectionBanner({
  number,
  category,
  word1,
  word2,
}: GiantSectionBannerProps) {
  const phrase = `${word1} ${word2}`;

  return (
    <div className="w-full overflow-hidden border-b border-[#1a1a1a] bg-[#050505] py-8 md:py-14 select-none">
      {/* Top Index & Tag Bar */}
      <div className="portfolio-container flex items-center justify-between font-mono-code text-xs text-[#8B8B8B] mb-4">
        <div className="flex items-center gap-2">
          <span className="text-[var(--accent-theme)] font-bold">{number}</span>
          <span className="text-[#383838]">/</span>
          <span className="text-[#F5F5F5] uppercase tracking-wider">{category}</span>
        </div>
        <div className="text-[10px] text-[#525252] uppercase tracking-widest hidden sm:block">
          [SCROLL TO VIEW ARCHITECTURE]
        </div>
      </div>

      {/* Giant Marquee Track */}
      <div className="flex overflow-hidden relative">
        <div className="animate-giant-marquee flex items-center gap-12 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-5xl sm:text-7xl md:text-9xl xl:text-[10.5rem] font-black tracking-tighter uppercase text-[var(--accent-theme)] leading-none">
                {word1}
              </span>
              <span className="text-5xl sm:text-7xl md:text-9xl xl:text-[10.5rem] font-black tracking-tighter uppercase text-stroke-white leading-none">
                {word2}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
