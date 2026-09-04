"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePortfolio } from "@/context/ThemeContext";

interface HalftonePortraitProps {
  src: string;
  pitch?: number;
}

export default function HalftonePortrait({ src, pitch = 7 }: HalftonePortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const { theme } = usePortfolio();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let destroyed = false;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    function render() {
      if (!canvas || !ctx || !img.naturalWidth || destroyed) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = rect.width;
      const height = rect.height;

      if (!width || !height) return;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Downsample to sample buffer
      const sampleW = Math.max(1, Math.ceil(width / 3));
      const sampleH = Math.max(1, Math.ceil(height / 3));

      const offscreen = document.createElement("canvas");
      offscreen.width = sampleW;
      offscreen.height = sampleH;
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      const scale = Math.max(sampleW / img.naturalWidth, sampleH / img.naturalHeight);
      const drawW = img.naturalWidth * scale;
      const drawH = img.naturalHeight * scale;
      const offX = (sampleW - drawW) / 2;
      const offY = (sampleH - drawH) / 2;

      offCtx.drawImage(img, offX, offY, drawW, drawH);

      const imgData = offCtx.getImageData(0, 0, sampleW, sampleH);
      const data = imgData.data;

      ctx.clearRect(0, 0, width, height);

      // 45-degree halftone grid loop (Mauricio Juba exact method)
      const step = Math.SQRT1_2 * pitch;
      const centerX = width / 2;
      const centerY = height / 2;
      const range = Math.ceil((width + height) / pitch) + 2;

      ctx.fillStyle = "#e2e8f0";
      ctx.beginPath();

      for (let l = -range; l <= range; l++) {
        for (let s = -range; s <= range; s++) {
          const x = centerX + (l - s) * step;
          const y = centerY + (l + s) * step;

          if (x < -pitch || x > width + pitch || y < -pitch || y > height + pitch) continue;

          const col = Math.min(sampleW - 1, Math.max(0, Math.floor((x / width) * sampleW)));
          const row = Math.min(sampleH - 1, Math.max(0, Math.floor((y / height) * sampleH)));
          const idx = (row * sampleW + col) * 4;

          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3] / 255;

          // Perceived luminance
          let luma = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 255 * a;

          // Increase contrast for sharp editorial halftone portrait
          luma = (luma - 0.28) * 1.55 + 0.28;
          luma = Math.max(0, Math.min(1, luma));

          // Soft fade out towards left side (seamless dark background blend)
          const fadeLeft = Math.min(1, Math.max(0, (x - width * 0.12) / (width * 0.32)));
          const fadeBottom = Math.min(1, Math.max(0, (height - y) / (height * 0.10)));
          luma = luma * fadeLeft * fadeBottom;

          const radius = Math.sqrt(luma) * pitch * 0.62;

          if (radius >= 0.35) {
            ctx.moveTo(x + radius, y);
            ctx.arc(x, y, radius, 0, Math.PI * 2);
          }
        }
      }

      ctx.fill();
      setIsReady(true);
    }

    img.onload = render;
    if (img.complete && img.naturalWidth) {
      render();
    }

    const onResize = () => {
      render();
    };

    window.addEventListener("resize", onResize);
    return () => {
      destroyed = true;
      window.removeEventListener("resize", onResize);
    };
  }, [src, pitch, theme]);

  return (
    <div className="relative w-full h-full overflow-hidden select-none pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full object-cover object-center" />
      {!isReady && (
        <img
          src={src}
          alt="Nithin Nagabushanam"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 blur-sm"
        />
      )}
    </div>
  );
}
