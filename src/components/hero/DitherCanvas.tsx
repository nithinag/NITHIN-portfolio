"use client";

import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "@/context/ThemeContext";

interface DitherCanvasProps {
  imageSrc: string;
}

export default function DitherCanvas({ imageSrc }: DitherCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = usePortfolio();
  const mousePosRef = useRef({ x: 0.6, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      setIsLoaded(true);
      renderDither();
    };

    const bayerMatrix8x8 = [
      [ 0, 32,  8, 40,  2, 34, 10, 42],
      [48, 16, 56, 24, 50, 18, 58, 26],
      [12, 44,  4, 36, 14, 46,  6, 38],
      [60, 28, 52, 20, 62, 30, 54, 22],
      [ 3, 35, 11, 43,  1, 33,  9, 41],
      [51, 19, 59, 27, 49, 17, 57, 25],
      [15, 47,  7, 39, 13, 45,  5, 37],
      [63, 31, 55, 23, 61, 29, 53, 21]
    ];

    function renderDither() {
      if (!canvas || !ctx) return;

      const targetWidth = 480;
      const aspectRatio = img.height / img.width;
      const targetHeight = Math.round(targetWidth * aspectRatio);

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      // Draw original image scaled down
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      const imgData = ctx.getImageData(0, 0, targetWidth, targetHeight);
      const data = imgData.data;

      // Extract RGB from current theme hex
      const hex = theme.hex.replace("#", "");
      const tR = parseInt(hex.substring(0, 2), 16) || 195;
      const tG = parseInt(hex.substring(2, 4), 16) || 255;
      const tB = parseInt(hex.substring(4, 6), 16) || 252;

      // Process pixels with Bayer Matrix Dithering
      for (let y = 0; y < targetHeight; y++) {
        for (let x = 0; x < targetWidth; x++) {
          const idx = (y * targetWidth + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          // Perceived luminance
          let gray = 0.299 * r + 0.587 * g + 0.114 * b;

          // Increase contrast for sharp editorial look
          gray = (gray - 110) * 1.5 + 110;
          gray = Math.max(0, Math.min(255, gray));

          // Edge fade / vignette towards the left and bottom
          const normX = x / targetWidth;
          const normY = y / targetHeight;
          const leftFade = Math.min(1, normX * 2.2);
          const bottomFade = Math.min(1, (1 - normY) * 2.5);
          gray = gray * leftFade * bottomFade;

          // Mouse proximity boost
          const dist = Math.hypot(normX - mousePosRef.current.x, normY - mousePosRef.current.y);

          // Threshold from Bayer matrix
          const matrixVal = (bayerMatrix8x8[y % 8][x % 8] / 64) * 255;
          const threshold = matrixVal + (dist < 0.2 ? (0.2 - dist) * 70 : 0);

          if (gray > threshold) {
            if (dist < 0.22) {
              data[idx] = tR;
              data[idx + 1] = tG;
              data[idx + 2] = tB;
            } else {
              data[idx] = 230;
              data[idx + 1] = 230;
              data[idx + 2] = 230;
            }
            data[idx + 3] = 255;
          } else {
            // Background blend
            data[idx] = 5;
            data[idx + 1] = 5;
            data[idx + 2] = 5;
            data[idx + 3] = 0; // transparent for dark backdrop blending
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mousePosRef.current = { x, y };
      renderDither();
    };

    const c = canvas;
    c.addEventListener("mousemove", handleMouseMove);

    return () => {
      c.removeEventListener("mousemove", handleMouseMove);
    };
  }, [imageSrc, theme]);

  return (
    <div className="relative w-full h-full flex items-center justify-end select-none pointer-events-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-h-[85vh] object-cover object-center image-pixelated contrast-125 opacity-90 transition-opacity"
        style={{ imageRendering: "pixelated" }}
      />
      {!isLoaded && (
        <img
          src={imageSrc}
          alt="Nithin Nagabushanam Portrait"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-60"
        />
      )}
    </div>
  );
}
