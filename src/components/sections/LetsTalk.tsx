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
      className="w-full bg-[#050505] text-[#F5F5F5] border-b border-[#1b2226] scroll-mt-14 md:scroll-mt-16 select-none"
    >
      {/* 1. GIANT SCROLL-LINKED MARQUEE BANNER: LET'S TALK */}
      <GiantSectionBanner
        number="05"
        category="OPEN TO OPPORTUNITIES"
        word1="LET'S"
        word2="TALK"
      />

      {/* 2. SEND A MESSAGE CARD IN WARM SAND / CREAM (#ECE8DF) */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16">
        {/* Warm Cream Box Enclosure matching Marquee */}
        <div className="w-full border border-[#D8D2C5] bg-[#ECE8DF] text-[#111111] p-6 sm:p-10 md:p-14 lg:p-16 space-y-10 shadow-2xl">
          {/* Header Label */}
          <div className="font-mono-code text-xs sm:text-[13px] text-[#786D5E] uppercase tracking-[0.25em] font-medium italic">
            SEND A MESSAGE
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* NAME FIELD (Dashed Underline Input) */}
            <div className="space-y-2">
              <label className="font-mono-code text-[11px] text-[#786D5E] uppercase tracking-widest block font-bold">
                NAME
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="YOUR NAME"
                className="w-full bg-transparent text-[#111111] placeholder-[#9E9587] font-mono-code text-sm sm:text-base font-bold px-0 py-2 outline-none border-b border-dashed border-[#A8A092] focus:border-[#111111] transition-colors"
              />
            </div>

            {/* EMAIL FIELD (Dashed Underline Input) */}
            <div className="space-y-2">
              <label className="font-mono-code text-[11px] text-[#786D5E] uppercase tracking-widest block font-bold">
                EMAIL
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                className="w-full bg-transparent text-[#111111] placeholder-[#9E9587] font-mono-code text-sm sm:text-base font-bold px-0 py-2 outline-none border-b border-dashed border-[#A8A092] focus:border-[#111111] transition-colors"
              />
            </div>

            {/* MESSAGE FIELD (Large Dashed Box) */}
            <div className="space-y-2">
              <label className="font-mono-code text-[11px] text-[#786D5E] uppercase tracking-widest block font-bold">
                MESSAGE
              </label>
              <div className="relative border border-dashed border-[#A8A092] focus-within:border-[#111111] transition-colors bg-[#E6E1D7]/50">
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="TYPE YOUR MESSAGE..."
                  className="w-full bg-transparent text-[#111111] placeholder-[#9E9587] font-mono-code text-sm sm:text-base font-medium p-4 outline-none resize-none"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON & CLIENT NOTICE */}
            <div className="pt-4 space-y-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] hover:bg-[#1a1a1a] text-[#F2F0EA] font-mono-code text-xs font-black tracking-widest uppercase transition-all clip-chamfer-btn shadow-lg group"
                data-cursor="SEND"
              >
                <span>{sending ? "OPENING MAIL.." : "SEND"}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--accent-theme)]" />
              </button>

              <p className="font-mono-code text-[10px] sm:text-[11px] text-[#786D5E] tracking-wider uppercase font-medium">
                OPENS YOUR MAIL CLIENT — OR WRITE DIRECT TO{" "}
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  onClick={() => playSound("click")}
                  className="text-[#111111] hover:underline transition-colors font-bold underline-offset-4"
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
