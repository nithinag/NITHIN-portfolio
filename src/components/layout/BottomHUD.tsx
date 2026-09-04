"use client";

import { useEffect, useState } from "react";
import { usePortfolio } from "@/context/ThemeContext";
import { Volume2, VolumeX } from "lucide-react";

export default function BottomHUD() {
  const {
    theme,
    cycleTheme,
    activeSection,
    scrollFraction,
    cursorCoordinates,
    soundEnabled,
    setSoundEnabled,
    playSound,
  } = usePortfolio();

  const [time, setTime] = useState("12:00:00 IST");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const istTime = new Intl.DateTimeFormat("en-GB", options).format(now);
      setTime(`${istTime} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#050505]/95 backdrop-blur-md border-t border-[#1a1a1a] hud-bottom-glow select-none">
      <div className="portfolio-container flex items-center justify-between h-10 md:h-11 font-mono-code text-[10px] md:text-[11px] text-[#8B8B8B]">
        {/* Left: Scroll & Cursor Telemetry */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-[#525252]">SCRL</span>
            <span className="text-[#F5F5F5] font-semibold">{scrollFraction}</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5">
            <span className="text-[#525252]">CRSR</span>
            <span className="text-[#F5F5F5] font-semibold">
              {cursorCoordinates.x} / {cursorCoordinates.y}
            </span>
          </div>
        </div>

        {/* Center: Active Section Indicator */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-theme)] animate-pulse" />
          <span className="text-[#F5F5F5] font-bold tracking-widest uppercase">
            {activeSection}
          </span>
        </div>

        {/* Right: Theme Switcher & Clock */}
        <div className="flex items-center gap-4">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              if (!soundEnabled) playSound("click");
            }}
            className="hidden md:flex items-center gap-1 hover:text-[var(--accent-theme)] transition-colors"
            title="Toggle Audio Feedback"
            data-cursor="SOUND"
          >
            {soundEnabled ? (
              <Volume2 className="w-3 h-3 text-[var(--accent-theme)]" />
            ) : (
              <VolumeX className="w-3 h-3 text-[#525252]" />
            )}
            <span className="text-[9px] uppercase">{soundEnabled ? "SFX ON" : "SFX OFF"}</span>
          </button>

          {/* Theme Cycler (Exact Mauricio Juba Style) */}
          <button
            onClick={cycleTheme}
            className="group flex items-center gap-1.5 px-2 py-0.5 bg-[#0c0c0c] border border-[#262626] hover:border-[var(--accent-theme)] text-[#F5F5F5] transition-all clip-chamfer-btn"
            title="Click to Cycle Theme Accent"
            data-cursor="THEME"
          >
            <span className="text-[#8B8B8B] group-hover:text-[#F5F5F5]">THEME</span>
            <span
              className="w-2.5 h-2.5 inline-block transition-colors"
              style={{ backgroundColor: theme.hex }}
            />
            <span className="font-bold text-[var(--accent-theme)]">
              {theme.hex}
            </span>
          </button>

          {/* Live Clock */}
          <div className="hidden lg:block text-[#F5F5F5] font-semibold">
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}
