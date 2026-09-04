"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { usePortfolio } from "@/context/ThemeContext";
import { Copy, Check, Send, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactForm() {
  const { playSound, theme } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    playSound("click");
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSound("click");
    setFormSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.85 },
      colors: [theme.hex, "#F5F5F5", "#8B8B8B"],
    });
  };

  return (
    <section id="contact" className="w-full bg-[#050505] text-[#F5F5F5] py-20 md:py-32 border-b border-[#1a1a1a]">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1a1a1a] pb-8 mb-12">
          <div>
            <div className="font-mono-code text-xs text-[var(--accent-theme)] tracking-widest uppercase mb-2">
              // 13. DIRECT REACHOUT
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-[#F5F5F5]">
              CONTACT FORM
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono-code text-xs text-[#8B8B8B] tracking-wider">
            [AVAILABLE FOR HIGH-IMPACT OPPORTUNITIES]
          </div>
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            {formSubmitted ? (
              <div className="p-8 md:p-12 bg-[#0a0a0a] border border-[var(--accent-theme)] space-y-4 clip-chamfer-lg shadow-2xl">
                <div className="font-mono-code text-xs text-[var(--accent-theme)] uppercase tracking-widest">
                  // TRANSMISSION RECEIVED
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F5F5F5]">
                  THANK YOU FOR REACHING OUT, {formData.name || "COLLABORATOR"}.
                </h3>
                <p className="text-sm text-[#8B8B8B] font-light">
                  Your message has been processed. I will reply to <span className="text-[var(--accent-theme)] font-mono-code">{formData.email || "your email"}</span> promptly.
                </p>
                <button
                  onClick={() => {
                    playSound("click");
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 font-mono-code text-xs px-5 py-2.5 bg-[#141414] text-[#F5F5F5] border border-[#262626] hover:border-[var(--accent-theme)] clip-chamfer-btn transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono-code text-xs text-[#8B8B8B] uppercase block mb-2">
                      [01] YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Satoshi Nakamoto"
                      className="w-full bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[var(--accent-theme)] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#525252] outline-none transition-colors font-mono-code clip-chamfer"
                    />
                  </div>

                  <div>
                    <label className="font-mono-code text-xs text-[#8B8B8B] uppercase block mb-2">
                      [02] YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[var(--accent-theme)] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#525252] outline-none transition-colors font-mono-code clip-chamfer"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono-code text-xs text-[#8B8B8B] uppercase block mb-2">
                    [03] INQUIRY TYPE / SUBJECT *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="AI Engineering Role / Consulting / Collaboration"
                    className="w-full bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[var(--accent-theme)] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#525252] outline-none transition-colors font-mono-code clip-chamfer"
                  />
                </div>

                <div>
                  <label className="font-mono-code text-xs text-[#8B8B8B] uppercase block mb-2">
                    [04] MESSAGE / DETAILS *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team objectives, or role timeline..."
                    className="w-full bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[var(--accent-theme)] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#525252] outline-none transition-colors font-mono-code resize-none clip-chamfer"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 w-full sm:w-auto font-mono-code text-xs font-black uppercase tracking-widest px-8 py-4 bg-[var(--accent-theme)] text-[#050505] hover:opacity-90 clip-chamfer-btn shadow-[0_0_15px_var(--accent-glow)] transition-all"
                  data-cursor="DISPATCH"
                >
                  <span>SEND TRANSMISSION</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Channels */}
          <div className="lg:col-span-5 space-y-8 font-mono-code text-xs">
            {/* Quick Email Copy Box */}
            <div className="p-6 bg-[#0a0a0a] border border-[#1f1f1f] space-y-3 clip-chamfer">
              <span className="text-[#8B8B8B] uppercase block">// DIRECT INBOX</span>
              <div className="flex items-center justify-between gap-3 p-3 bg-[#050505] border border-[#262626] clip-chamfer-btn">
                <span className="text-xs sm:text-sm text-[#F5F5F5] truncate">
                  {portfolioData.personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 hover:text-[var(--accent-theme)] transition-colors"
                  title="Copy to clipboard"
                  data-cursor="COPY"
                >
                  {copied ? <Check className="w-4 h-4 text-[var(--accent-theme)]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-[10px] text-[var(--accent-theme)] flex items-center gap-1.5">
                  <Check className="w-3 h-3" />
                  <span>EMAIL COPIED TO CLIPBOARD</span>
                </div>
              )}
            </div>

            {/* Social & Profiles */}
            <div className="p-6 bg-[#0a0a0a] border border-[#1f1f1f] space-y-4 clip-chamfer">
              <span className="text-[#8B8B8B] uppercase block">// PROFILES & WORKSPACES</span>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound("click")}
                className="flex items-center justify-between p-3 bg-[#050505] border border-[#262626] hover:border-[var(--accent-theme)] group clip-chamfer-btn transition-colors"
                data-cursor="GITHUB"
              >
                <div>
                  <div className="text-[#F5F5F5] group-hover:text-[var(--accent-theme)] font-bold">GITHUB</div>
                  <div className="text-[10px] text-[#8B8B8B]">{portfolioData.personal.githubDisplay}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8B8B8B] group-hover:text-[var(--accent-theme)]" />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound("click")}
                className="flex items-center justify-between p-3 bg-[#050505] border border-[#262626] hover:border-[var(--accent-theme)] group clip-chamfer-btn transition-colors"
                data-cursor="LINKEDIN"
              >
                <div>
                  <div className="text-[#F5F5F5] group-hover:text-[var(--accent-theme)] font-bold">LINKEDIN</div>
                  <div className="text-[10px] text-[#8B8B8B]">{portfolioData.personal.linkedinDisplay}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8B8B8B] group-hover:text-[var(--accent-theme)]" />
              </a>
            </div>

            <div className="p-6 bg-[#0a0a0a] border border-[#1f1f1f] text-[11px] text-[#8B8B8B] space-y-2 clip-chamfer">
              <span className="text-[var(--accent-theme)] uppercase font-bold block">// RESPONSE TIME</span>
              <p>
                Typically replies within 24 hours for full-time engineering inquiries, AI consulting projects, and technical advisories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
