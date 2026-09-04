"use client";

export default function FloatingRibbon() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center bg-[#F5F5F5] text-[#050505] py-4 px-2 shadow-2xl pointer-events-none select-none">
      <div className="font-black text-lg tracking-tighter leading-none mb-4">
        A.
      </div>
      <div
        className="font-mono-code text-[10px] font-bold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 text-[#525252]"
      >
        AI SYSTEMS // 2026
      </div>
    </div>
  );
}
