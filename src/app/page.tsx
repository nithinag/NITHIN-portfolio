import Hero from "@/components/hero/Hero";
import CompanyMarquee from "@/components/sections/CompanyMarquee";
import AboutMe from "@/components/sections/AboutMe";
import MyToolkit from "@/components/sections/MyToolkit";
import WorkExperience from "@/components/sections/WorkExperience";
import FeaturedWork from "@/components/sections/FeaturedWork";
import InDepthLook from "@/components/sections/InDepthLook";
import ExperimentLab from "@/components/sections/ExperimentLab";
import LetsTalk from "@/components/sections/LetsTalk";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[var(--accent-theme)] selection:text-[#050505] overflow-x-hidden">
      {/* 01. HOME (HERO) */}
      <Hero />

      {/* COMPANY MARQUEE */}
      <CompanyMarquee />

      {/* 02. ABOUT SECTION */}
      <AboutMe />
      <MyToolkit />

      {/* 03. EXPERIENCE SECTION */}
      <WorkExperience />

      {/* 04. PROJECTS SECTION (KEPT AS EXISTING) */}
      <FeaturedWork />
      <InDepthLook />
      <ExperimentLab />

      {/* 05. CONTACT SECTION */}
      <LetsTalk />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

