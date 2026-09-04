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
      className="w-full bg-[#080909] text-[#F5F5F5] border-b border-[#1b2226] scroll-mt-14 md:scroll-mt-16 select-none"
    >
      {/* 1. GIANT SCROLL-LINKED MARQUEE BANNER: LET'S TALK */}
      <GiantSectionBanner
        number="05"
        category="OPEN TO OPPORTUNITIES"
        word1="LET'S"
        word2="TALK"
      />

      {/* 2. EXACT 1:1 RECREATION OF MAURICIO JUBA CONTACT FORM */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16">
        {/* Outer 1px Box Enclosure */}
        <div className="w-full border border-[#1f282c] bg-[#080909] p-6 sm:p-10 md:p-14 lg:p-16 space-y-10">
          {/* Header Label */}
          <div className="font-mono-code text-xs text-[var(--accent-theme)] uppercase tracking-[0.25em] font-semibold">
            SEND A MESSAGE
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* NAME FIELD (Dashed Underline Input) */}
            <div className="space-y-2">
              <label className="font-mono-code text-[11px] text-[#7a8a92] uppercase tracking-widest block font-medium">
                NAME
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent text-[#F5F5F5] font-mono-code text-sm sm:text-base px-0 py-2 outline-none border-b border-dashed border-[#2b383f] focus:border-[var(--accent-theme)] transition-colors"
              />
            </div>

            {/* EMAIL FIELD (Dashed Underline Input) */}
            <div className="space-y-2">
              <label className="font-mono-code text-[11px] text-[#7a8a92] uppercase tracking-widest block font-medium">
                EMAIL
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-[#F5F5F5] font-mono-code text-sm sm:text-base px-0 py-2 outline-none border-b border-dashed border-[#2b383f] focus:border-[var(--accent-theme)] transition-colors"
              />
            </div>

            {/* MESSAGE FIELD (Large Dashed Box) */}
            <div className="space-y-2">
              <label className="font-mono-code text-[11px] text-[#7a8a92] uppercase tracking-widest block font-medium">
                MESSAGE
              </label>
              <div className="relative border border-dashed border-[#2b383f] focus-within:border-[var(--accent-theme)] transition-colors bg-[#060707]">
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent text-[#F5F5F5] font-mono-code text-sm sm:text-base p-4 outline-none resize-none"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON & CLIENT NOTICE (Exact Mauricio Juba 1:1) */}
            <div className="pt-4 space-y-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-theme)] text-[#050505] font-mono-code text-xs font-black tracking-widest uppercase hover:opacity-90 transition-all clip-chamfer-btn shadow-[0_0_20px_var(--accent-glow)] group"
                data-cursor="SEND"
              >
                <span>{sending ? "OPENING MAIL.." : "SEND"}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <p className="font-mono-code text-[10px] sm:text-[11px] text-[#55646c] tracking-wider uppercase">
                OPENS YOUR MAIL CLIENT — OR WRITE DIRECT TO{" "}
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  onClick={() => playSound("click")}
                  className="text-[#8e9fa8] hover:text-[var(--accent-theme)] transition-colors underline underline-offset-4"
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
