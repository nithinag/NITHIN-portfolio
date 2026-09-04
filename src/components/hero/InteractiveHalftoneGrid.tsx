"use client";

import React, { useEffect, useRef } from "react";
import { usePortfolio } from "@/context/ThemeContext";

interface InteractiveHalftoneGridProps {
  cell?: number;
  decay?: number;
  className?: string;
}

export default function InteractiveHalftoneGrid({
  cell = 26,
  decay = 0.94,
  className = "",
}: InteractiveHalftoneGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = usePortfolio();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame = 0;
    let destroyed = false;
    let isAnimating = false;
    let cols = 0, rows = 0, width = 0, height = 0;
    let intensityBuffer = new Float32Array(0);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      cols = Math.max(1, Math.ceil(width / cell));
      rows = Math.max(1, Math.ceil(height / cell));

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      intensityBuffer = new Float32Array(cols * rows);
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = theme.hex;
      let hasActiveCells = false;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const index = r * cols + c;
          const val = intensityBuffer[index];
          if (val < 0.02) {
            intensityBuffer[index] = 0;
            continue;
          }

          hasActiveCells = true;
          intensityBuffer[index] = val * decay; // Exponential decay factor (0.94)

          ctx.globalAlpha = Math.min(1, val) * 0.85;
          ctx.fillRect(c * cell + 1, r * cell + 1, cell - 2, cell - 2);
        }
      }
      ctx.globalAlpha = 1;
      return hasActiveCells;
    };

    const loop = () => {
      if (destroyed) {
        isAnimating = false;
        return;
      }
      if (renderFrame()) {
        animFrame = requestAnimationFrame(loop);
      } else {
        isAnimating = false;
      }
    };

    const triggerAnimation = () => {
      if (!isAnimating && !destroyed) {
        isAnimating = true;
        animFrame = requestAnimationFrame(loop);
      }
    };

    const markCellHover = (px: number, py: number) => {
      const col = Math.floor(px / cell);
      const row = Math.floor(py / cell);

      // Activate 3x3 cell neighborhood (Mauricio Juba exact hover logic)
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const targetRow = row + dr;
          const targetCol = col + dc;
          if (targetRow < 0 || targetCol < 0 || targetRow >= rows || targetCol >= cols) continue;

          const weight = dr === 0 && dc === 0 ? 1.0 : 0.45;
          const idx = targetRow * cols + targetCol;
          intensityBuffer[idx] = Math.max(intensityBuffer[idx], weight);
        }
      }
    };

    const onPointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && y >= 0 && x <= width && y <= height) {
        markCellHover(x, y);
        triggerAnimation();
      }
    };

    resize();

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("resize", resize);

    return () => {
      destroyed = true;
      cancelAnimationFrame(animFrame);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", resize);
    };
  }, [cell, decay, theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-10 mix-blend-screen opacity-90 ${className}`}
    />
  );
}
