import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import HeaderHUD from "@/components/layout/HeaderHUD";
import BottomHUD from "@/components/layout/BottomHUD";
import FloatingRibbon from "@/components/layout/FloatingRibbon";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { PortfolioProvider } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolioData";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
  description: `${portfolioData.personal.name} — AI Engineer & Product Builder based in Chennai, India. Specializing in Generative AI, Multi-Agent Systems, RAG pipelines, and high-performance software engineering.`,
  keywords: [
    "Nithin Nagabushanam",
    "AI Engineer",
    "Generative AI",
    "LangChain",
    "LangGraph",
    "Multi-Agent Systems",
    "RAG",
    "Flutter",
    "FastAPI",
    "Chennai AI Engineer",
    "Portfolio 2026",
  ],
  authors: [{ name: "Nithin Nagabushanam", url: "https://github.com/nithinag" }],
  creator: "Nithin Nagabushanam",
  metadataBase: new URL("https://nithin-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithin-portfolio.vercel.app",
    title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
    description: "AI Engineer & Product Builder specializing in Generative AI, Multi-Agent Systems, and enterprise RAG pipelines.",
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: "/images/portrait.jpg",
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
    description: "AI Engineer & Product Builder specializing in Generative AI, Multi-Agent Systems, and enterprise RAG pipelines.",
    images: ["/images/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${plexMono.variable} dark scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[var(--accent-theme)] selection:text-[#050505]">
        <PortfolioProvider>
          <SmoothScroll>
            <CustomCursor />
            <HeaderHUD />
            <FloatingRibbon />
            <BottomHUD />
            {children}
          </SmoothScroll>
        </PortfolioProvider>
      </body>
    </html>
  );
}
