import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IGNITO 2026 | Govt. Model Engineering College, Thrikakara",
  description: "Step into the core of IGNITO 2026, the annual national techno-managerial festival of Govt. Model Engineering College, Kochi (MEC). Inspire, Innovate, Engineer.",
  keywords: "IGNITO, MEC Kochi, Model Engineering College, techfest, Kerala college techfest, coding hackathon, robotics, space theme, excelmec.org",
};

import Navbar from "@/components/Navbar";
import ClientWrapper from "@/components/ClientWrapper";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-black text-white selection:bg-space-cyan selection:text-black`}
      >
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
