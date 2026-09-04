"use client";

import React from "react";

// Diamond divider matching reference (exact scale & vertical axis)
const Diamond = () => (
  <div className="flex items-center justify-center px-8 sm:px-12 md:px-16 shrink-0">
    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 rotate-45 bg-[#9E9587] opacity-60" />
  </div>
);

export default function CompanyMarquee() {
  const companies = [
    // 1. Tectra Technologies
    {
      name: "Tectra Technologies",
      render: () => (
        <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 shrink-0 group px-2">
          <img
            src="/images/tectra-original.webp"
            alt="Tectra Technologies"
            className="h-10 sm:h-12 md:h-16 w-auto max-w-[260px] sm:max-w-[320px] object-contain brightness-0 opacity-85 group-hover:opacity-100 transition-all duration-300"
          />
        </div>
      ),
    },

    // 2. 1LY Minerals
    {
      name: "1LY Minerals",
      render: () => (
        <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 shrink-0 group px-2">
          <img
            src="/images/1ly-logo.png"
            alt="1LY Minerals"
            className="h-11 sm:h-14 md:h-18 w-auto max-w-[260px] sm:max-w-[320px] object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 mix-multiply"
          />
        </div>
      ),
    },

    // 3. Sathyabama Institute of Science and Technology
    {
      name: "Sathyabama",
      render: () => (
        <div className="flex items-center gap-3 h-16 sm:h-20 md:h-24 shrink-0 group px-2 select-none">
          <svg className="h-10 sm:h-12 md:h-15 w-auto object-contain text-[#111111]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 5 L85 20 L85 55 C85 75 50 95 50 95 C50 95 15 75 15 55 L15 20 Z" fill="none" stroke="currentColor" strokeWidth="4" />
            <circle cx="50" cy="45" r="22" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M50 28 L50 62 M35 45 L65 45" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="50" cy="37" r="4" fill="currentColor" />
            <circle cx="50" cy="53" r="4" fill="currentColor" />
            <circle cx="42" cy="45" r="4" fill="currentColor" />
            <circle cx="58" cy="45" r="4" fill="currentColor" />
          </svg>
          <div className="text-left font-serif leading-none">
            <div className="text-[14px] sm:text-[18px] md:text-[20px] font-black tracking-wider uppercase text-[#111111]">
              SATHYABAMA
            </div>
            <div className="text-[7px] sm:text-[9px] md:text-[10px] tracking-[0.2em] font-sans font-semibold uppercase text-[#444444] mt-1">
              INSTITUTE OF SCIENCE AND TECHNOLOGY
            </div>
          </div>
        </div>
      ),
    },

    // 4. Volkswagen
    {
      name: "Volkswagen",
      render: () => (
        <div className="flex items-center gap-3.5 h-16 sm:h-20 md:h-24 shrink-0 group px-2 select-none">
          <span className="text-[18px] sm:text-[22px] md:text-[26px] font-bold tracking-tight text-[#111111] font-sans">
            Volkswagen
          </span>
          <svg className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 text-[#111111]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="46" strokeWidth="5" />
            <circle cx="50" cy="50" r="40" strokeWidth="2.5" />
            <path d="M26 32 L40 76 L50 48 L60 76 L74 32" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35 32 L50 64 L65 32" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
    },

    // 5. IBM
    {
      name: "IBM",
      render: () => (
        <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 shrink-0 group px-2 select-none">
          <svg className="h-9 sm:h-11 md:h-14 w-auto text-[#111111]" viewBox="0 0 280 100" fill="currentColor">
            {/* I */}
            <rect x="10" y="5" width="40" height="8" />
            <rect x="10" y="18" width="40" height="8" />
            <rect x="23" y="31" width="14" height="8" />
            <rect x="23" y="44" width="14" height="8" />
            <rect x="23" y="57" width="14" height="8" />
            <rect x="23" y="70" width="14" height="8" />
            <rect x="10" y="83" width="40" height="8" />
            <rect x="10" y="96" width="40" height="8" />

            {/* B */}
            <path d="M70 5 H120 Q140 5 140 25 Q140 40 125 45 Q145 50 145 75 Q145 104 120 104 H70 Z" fill="none" />
            <rect x="70" y="5" width="45" height="8" />
            <rect x="70" y="18" width="55" height="8" />
            <rect x="70" y="31" width="20" height="8" />
            <rect x="110" y="31" width="20" height="8" />
            <rect x="70" y="44" width="50" height="8" />
            <rect x="70" y="57" width="20" height="8" />
            <rect x="115" y="57" width="20" height="8" />
            <rect x="70" y="70" width="20" height="8" />
            <rect x="115" y="70" width="20" height="8" />
            <rect x="70" y="83" width="55" height="8" />
            <rect x="70" y="96" width="45" height="8" />

            {/* M */}
            <rect x="160" y="5" width="16" height="8" />
            <rect x="244" y="5" width="16" height="8" />
            <rect x="160" y="18" width="24" height="8" />
            <rect x="236" y="18" width="24" height="8" />
            <rect x="160" y="31" width="32" height="8" />
            <rect x="228" y="31" width="32" height="8" />
            <rect x="160" y="44" width="16" height="8" />
            <rect x="194" y="44" width="32" height="8" />
            <rect x="244" y="44" width="16" height="8" />
            <rect x="160" y="57" width="16" height="8" />
            <rect x="202" y="57" width="16" height="8" />
            <rect x="244" y="57" width="16" height="8" />
            <rect x="160" y="70" width="16" height="8" />
            <rect x="244" y="70" width="16" height="8" />
            <rect x="160" y="83" width="16" height="8" />
            <rect x="244" y="83" width="16" height="8" />
            <rect x="160" y="96" width="16" height="8" />
            <rect x="244" y="96" width="16" height="8" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full min-h-[260px] sm:min-h-[300px] md:min-h-[340px] bg-[#ECE8DF] border-y border-[#D8D2C5] py-12 md:py-16 select-none overflow-hidden text-[#111111] flex flex-col justify-between">
      {/* Top Header Label (Exact Mauricio Juba 1:1) */}
      <div className="portfolio-container text-center pt-1 mb-6 md:mb-10">
        <p className="font-mono-code text-xs sm:text-[13px] italic tracking-[0.25em] text-[#786D5E] uppercase font-medium">
          SOME OF THE COMPANIES I&apos;VE WORKED WITH
        </p>
      </div>

      {/* Infinite Scrolling Large Company Logo Ticker Track (Exact Mauricio Juba 1:1 Scale) */}
      <div className="relative w-full flex overflow-hidden items-center my-auto">
        {/* Left and right fade gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-[#ECE8DF] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-[#ECE8DF] to-transparent" />

        <div className="animate-logo-marquee flex items-center whitespace-nowrap">
          {companies
            .concat(companies)
            .concat(companies)
            .concat(companies)
            .map((company, idx) => (
              <React.Fragment key={idx}>
                <div className="inline-flex items-center justify-center">
                  {company.render()}
                </div>
                <Diamond />
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* Bottom spacer for balance */}
      <div className="h-2" />
    </section>
  );
}
