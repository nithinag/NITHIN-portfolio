"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeColor = {
  id: "cyan" | "pink" | "lime";
  name: string;
  hex: string;
  glow: string;
  dim: string;
};

export const THEMES: ThemeColor[] = [
  {
    id: "cyan",
    name: "CYAN",
    hex: "#C3FFFC",
    glow: "rgba(195, 255, 252, 0.25)",
    dim: "#7ee0dc",
  },
  {
    id: "pink",
    name: "PINK",
    hex: "#FFB3D1",
    glow: "rgba(255, 179, 209, 0.25)",
    dim: "#f08fb6",
  },
  {
    id: "lime",
    name: "LIME",
    hex: "#D8FF7A",
    glow: "rgba(216, 255, 122, 0.25)",
    dim: "#b5df51",
  },
];

interface PortfolioContextType {
  theme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
  cycleTheme: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  scrollFraction: string;
  cursorCoordinates: { x: string; y: string };
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  playSound: (type?: "click" | "hover" | "switch") => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [themeIndex, setThemeIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("00 — INTRO");
  const [scrollFraction, setScrollFraction] = useState("0.00");
  const [cursorCoordinates, setCursorCoordinates] = useState({ x: "0.0", y: "0.0" });
  const [soundEnabled, setSoundEnabled] = useState(true);

  const theme = THEMES[themeIndex];

  const cycleTheme = () => {
    const next = (themeIndex + 1) % THEMES.length;
    setThemeIndex(next);
    playSound("switch");
  };

  // Sync CSS variables with active theme
  useEffect(() => {
    document.documentElement.style.setProperty("--accent-theme", theme.hex);
    document.documentElement.style.setProperty("--accent-glow", theme.glow);
    document.documentElement.style.setProperty("--accent-dim", theme.dim);
  }, [theme]);

  // Track scroll fraction & active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const fraction = (window.scrollY / totalScroll).toFixed(2);
        setScrollFraction(fraction);
      }

      // Check sections for 5 main tabs
      const sections = [
        { id: "hero", label: "01 — HOME" },
        { id: "about", label: "02 — ABOUT" },
        { id: "experience", label: "03 — EXPERIENCE" },
        { id: "projects", label: "04 — PROJECTS" },
        { id: "contact", label: "05 — CONTACT" },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sections[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track cursor coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth).toFixed(2);
      const normY = (e.clientY / window.innerHeight).toFixed(2);
      setCursorCoordinates({ x: normX, y: normY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Web Audio UI sound synth
  const playSound = (type: "click" | "hover" | "switch" = "click") => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "click") {
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.05);
      } else if (type === "hover") {
        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        gain.gain.setValueAtTime(0.015, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.03);
      } else if (type === "switch") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.08);
      }
    } catch {
      // AudioContext could be blocked by autoplay policies
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        theme,
        setTheme: (t) => {
          const idx = THEMES.findIndex((x) => x.id === t.id);
          if (idx >= 0) setThemeIndex(idx);
        },
        cycleTheme,
        activeSection,
        setActiveSection,
        scrollFraction,
        cursorCoordinates,
        soundEnabled,
        setSoundEnabled,
        playSound,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return context;
}
