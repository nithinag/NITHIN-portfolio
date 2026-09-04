"use client";

import { useState } from "react";
import GiantSectionBanner from "@/components/ui/GiantSectionBanner";
import { usePortfolio } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function LetsTalk() {
  const { playSound } = usePortfolio();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSound("click");
    setSending(true);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Collaborator"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
      setSending(false);
    }, 400);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-[calc(100vh-64px)] bg-[#050505] text-[#F5F5F5] scroll-mt-14 md:scroll-mt-16 select-none flex flex-col justify-between"
    >
      {/* 1. GIANT SCROLL-LINKED MARQUEE BANNER: LET'S TALK */}
      <GiantSectionBanner
        number="05"
        category="OPEN TO OPPORTUNITIES"
        word1="LET'S"
        word2="TALK"
      />

      {/* 2. EXACT 1:1 FORM AS PER MAURICIO JUBA SITE (IMAGE 1 REFERENCE) */}
      <div className="portfolio-container py-12 md:py-20 flex-1 flex flex-col justify-center">
        <div className="w-full max-w-5xl mx-auto space-y-10">
          {/* Top Label */}
          <div className="font-mono-code text-xs text-[var(--accent-theme)] uppercase tracking-[0.25em] font-semibold">
            SEND A MESSAGE
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* NAME FIELD */}
            <div className="space-y-2">
              <label className="font-mono-code text-[10px] sm:text-[11px] text-[#6b7c85] uppercase tracking-widest block font-medium">
                NAME
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="YOUR NAME"
                className="w-full bg-[#E5E9EC] text-[#0A0A0A] placeholder-[#778086] font-mono-code text-sm sm:text-base font-bold px-5 py-4 outline-none border border-transparent focus:border-[var(--accent-theme)] transition-colors clip-chamfer"
              />
            </div>

            {/* EMAIL FIELD */}
            <div className="space-y-2">
              <label className="font-mono-code text-[10px] sm:text-[11px] text-[#6b7c85] uppercase tracking-widest block font-medium">
                EMAIL
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                className="w-full bg-[#E5E9EC] text-[#0A0A0A] placeholder-[#778086] font-mono-code text-sm sm:text-base font-bold px-5 py-4 outline-none border border-transparent focus:border-[var(--accent-theme)] transition-colors clip-chamfer"
              />
            </div>

            {/* MESSAGE FIELD */}
            <div className="space-y-2">
              <label className="font-mono-code text-[10px] sm:text-[11px] text-[#6b7c85] uppercase tracking-widest block font-medium">
                MESSAGE
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="TYPE YOUR MESSAGE..."
                className="w-full bg-transparent text-[#F5F5F5] placeholder-[#384248] font-mono-code text-sm sm:text-base px-0 py-2 outline-none border-b border-[#222] focus:border-[var(--accent-theme)] transition-colors resize-none"
              />
            </div>

            {/* ACTION BUTTON & CAPTION */}
            <div className="pt-6 border-t border-dashed border-[#1a1a1a] space-y-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--accent-theme)] text-[#050505] font-mono-code text-xs font-black tracking-widest uppercase hover:opacity-90 transition-all clip-chamfer-btn shadow-[0_0_20px_var(--accent-glow)] group"
                data-cursor="SEND"
              >
                <span>{sending ? "OPENING MAIL.." : "SEND"}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <p className="font-mono-code text-[10px] sm:text-[11px] text-[#6b7c85] tracking-wider uppercase">
                OPENS YOUR MAIL CLIENT — OR WRITE DIRECT TO{" "}
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  onClick={() => playSound("click")}
                  className="text-[#A0A0A0] hover:text-[var(--accent-theme)] transition-colors underline underline-offset-4 font-semibold"
                >
                  {portfolioData.contact.email.toUpperCase()}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
