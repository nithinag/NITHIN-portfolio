"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { usePortfolio } from "@/context/ThemeContext";
import { Play, RotateCcw, Cpu } from "lucide-react";

export default function ExperimentLab() {
  const { playSound } = usePortfolio();
  const [activeTab, setActiveTab] = useState<string>("exp-1");
  const [vectorAngle, setVectorAngle] = useState(45);
  const [tokensSpeed, setTokensSpeed] = useState(30);
  const [agentStep, setAgentStep] = useState(1);

  const selectedExp = portfolioData.experiments.find((e) => e.id === activeTab) || portfolioData.experiments[0];
  const cosineSim = Math.cos((vectorAngle * Math.PI) / 180).toFixed(4);

  return (
    <section id="experiments" className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1a1a1a]">
      <GiantSectionBanner
        number="03"
        category="ALGORITHMIC PLAYGROUND"
        word1="EXPERIMENT"
        word2="LAB"
      />

      <div className="portfolio-container py-16 md:py-24">
        {/* Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {portfolioData.experiments.map((exp) => (
            <button
              key={exp.id}
              onClick={() => {
                playSound("click");
                setActiveTab(exp.id);
              }}
              className={`p-4 text-left font-mono-code text-xs border clip-chamfer-btn transition-all ${
                activeTab === exp.id
                  ? "bg-[#141414] border-[var(--accent-theme)] text-[#F5F5F5] shadow-[0_0_15px_var(--accent-glow)]"
                  : "bg-[#0c0c0c] border-[#1f1f1f] text-[#8B8B8B] hover:text-[#F5F5F5] hover:border-[#262626]"
              }`}
              data-cursor="TEST"
            >
              <div className="text-[10px] text-[#525252] mb-1">[{exp.type}]</div>
              <div className="font-bold tracking-tight uppercase truncate">{exp.title}</div>
            </button>
          ))}
        </div>

        {/* Interactive Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-[#1f1f1f] bg-[#0c0c0c] p-6 md:p-10 clip-chamfer-lg shadow-2xl">
          {/* Left Context */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1a1a1a] pb-6 lg:pb-0 lg:pr-8">
            <div>
              <div className="font-mono-code text-xs text-[var(--accent-theme)] tracking-widest uppercase mb-2">
                ACTIVE EXPERIMENT
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F5F5F5] mb-4">
                {selectedExp.title}
              </h3>
              <p className="text-sm sm:text-base text-[#8B8B8B] leading-relaxed font-light mb-6">
                {selectedExp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedExp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-code text-[11px] px-2.5 py-1 bg-[#141414] border border-[#262626] text-[#8B8B8B]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 font-mono-code text-xs text-[#525252] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[var(--accent-theme)]" />
              <span>REAL-TIME CANVAS & LOGIC ENGINE</span>
            </div>
          </div>

          {/* Right Live Simulation */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[300px] p-2">
            {activeTab === "exp-1" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between font-mono-code text-xs text-[#8B8B8B]">
                  <span>VECTOR A (BASE: [1, 0])</span>
                  <span className="text-[var(--accent-theme)] font-bold">ANGLE: {vectorAngle}°</span>
                </div>

                <div className="relative w-full h-48 bg-[#050505] border border-[#1f1f1f] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:12px_12px]" />
                  <div className="absolute w-full h-[1px] bg-[#222]" />
                  <div className="absolute h-full w-[1px] bg-[#222]" />

                  {/* Vector A */}
                  <div className="absolute w-28 h-[2px] bg-[#8B8B8B] origin-left left-1/2" />

                  {/* Vector B */}
                  <div
                    className="absolute w-28 h-[2px] bg-[var(--accent-theme)] origin-left left-1/2 transition-transform duration-75 shadow-[0_0_12px_var(--accent-theme)]"
                    style={{ transform: `rotate(-${vectorAngle}deg)` }}
                  />

                  <div className="absolute bottom-2 left-2 font-mono-code text-[10px] text-[#525252]">
                    METRIC: COS(θ) = {cosineSim}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-mono-code text-xs text-[#8B8B8B] mb-2">
                    <span>ROTATE EMBEDDING VECTOR</span>
                    <span className="text-[#F5F5F5] font-bold">SIMILARITY: {cosineSim}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="180"
                    value={vectorAngle}
                    onChange={(e) => setVectorAngle(Number(e.target.value))}
                    className="w-full accent-[var(--accent-theme)] bg-[#1f1f1f] cursor-pointer"
                  />
                </div>
              </div>
            )}

            {activeTab === "exp-2" && (
              <div className="space-y-6 font-mono-code text-xs">
                <div className="flex items-center justify-between text-[#8B8B8B]">
                  <span>LLM TOKEN STREAM THROUGHPUT</span>
                  <span className="text-[var(--accent-theme)]">{tokensSpeed} TOKENS/SEC</span>
                </div>

                <div className="p-4 bg-[#050505] border border-[#1f1f1f] h-40 overflow-y-auto leading-relaxed text-[#F5F5F5]">
                  <span className="text-[#8B8B8B]">// INFERENCE PIPELINE STREAMING:</span>
                  <p className="mt-2 text-sm text-[var(--accent-theme)]">
                    &quot;Autonomous multi-agent orchestration enables distributed reasoning graphs with deterministic state evaluation and minimal latency overhead...&quot;
                  </p>
                  <span className="inline-block w-2 h-4 bg-[var(--accent-theme)] animate-pulse ml-1 align-middle" />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#8B8B8B]">STREAM ACCELERATION:</span>
                  <input
                    type="range"
                    min="10"
                    max="120"
                    value={tokensSpeed}
                    onChange={(e) => setTokensSpeed(Number(e.target.value))}
                    className="w-48 accent-[var(--accent-theme)] bg-[#1f1f1f] cursor-pointer"
                  />
                </div>
              </div>
            )}

            {activeTab === "exp-3" && (
              <div className="space-y-4 font-mono-code text-xs">
                <div className="text-[#8B8B8B] flex justify-between">
                  <span>DITHER MATRIX QUANTIZATION</span>
                  <span className="text-[var(--accent-theme)]">BAYER 8×8 THRESHOLD</span>
                </div>
                <div className="grid grid-cols-8 gap-1 p-3 bg-[#050505] border border-[#1f1f1f]">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square flex items-center justify-center text-[9px] border border-[#141414] hover:bg-[var(--accent-theme)] hover:text-[#050505] transition-colors text-[#8B8B8B]"
                    >
                      {Math.round((i / 64) * 255)}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "exp-4" && (
              <div className="space-y-4 font-mono-code text-xs">
                <div className="flex justify-between text-[#8B8B8B]">
                  <span>LANGGRAPH STATE MACHINE</span>
                  <span className="text-[var(--accent-theme)]">NODE: [{agentStep}/4]</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { step: 1, label: "INGEST DIFF", desc: "AST Parsing" },
                    { step: 2, label: "SUPERVISOR", desc: "Task Routing" },
                    { step: 3, label: "DOC WORKER", desc: "Synthesizing" },
                    { step: 4, label: "VERIFIER", desc: "Hallucination Check" },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className={`p-3 border clip-chamfer-btn transition-all ${
                        agentStep === s.step
                          ? "bg-[var(--accent-theme)] text-[#050505] border-[var(--accent-theme)] font-bold shadow-[0_0_12px_var(--accent-glow)]"
                          : "bg-[#050505] text-[#8B8B8B] border-[#1f1f1f]"
                      }`}
                    >
                      <div>{s.label}</div>
                      <div className="text-[10px] mt-1 opacity-80">{s.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => {
                      playSound("click");
                      setAgentStep((prev) => (prev % 4) + 1);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-theme)] text-[#050505] font-bold clip-chamfer-btn hover:opacity-90 transition-all"
                  >
                    <span>NEXT STEP</span>
                    <Play className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => {
                      playSound("click");
                      setAgentStep(1);
                    }}
                    className="p-2 bg-[#141414] text-[#8B8B8B] hover:text-[#F5F5F5] border border-[#262626] clip-chamfer-btn"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
