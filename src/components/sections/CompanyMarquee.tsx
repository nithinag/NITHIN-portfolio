"use client";

import React from "react";

// Diamond divider matching Mauricio Juba (exact scale & opacity)
const Diamond = () => (
  <div className="flex items-center justify-center px-10 sm:px-16 md:px-24 shrink-0">
    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rotate-45 bg-[#9E9587] opacity-60" />
  </div>
);

export default function CompanyMarquee() {
  const companies = [
    // 1. Tectra Technologies
    {
      name: "Tectra Technologies",
      render: () => (
        <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 shrink-0 group px-3">
          <img
            src="/images/tectra-original.webp"
            alt="Tectra Technologies"
            className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto max-w-[300px] sm:max-w-[400px] md:max-w-[480px] object-contain brightness-0 opacity-85 group-hover:opacity-100 transition-all duration-300"
          />
        </div>
      ),
    },

    // 2. 1LY Minerals
    {
      name: "1LY Minerals",
      render: () => (
        <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 shrink-0 group px-3">
          <img
            src="/images/1ly-logo.png"
            alt="1LY Minerals"
            className="h-14 sm:h-18 md:h-22 lg:h-26 w-auto max-w-[320px] sm:max-w-[420px] md:max-w-[500px] object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 mix-multiply"
          />
        </div>
      ),
    },

    // 3. Surabhii Fresh Milk
    {
      name: "Surabhii Fresh",
      render: () => (
        <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 shrink-0 group px-3">
          <img
            src="/images/surabhii-logo.png"
            alt="Surabhii Fresh Milk"
            className="h-14 sm:h-18 md:h-22 lg:h-26 w-auto max-w-[340px] sm:max-w-[440px] md:max-w-[520px] object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 mix-multiply"
          />
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
