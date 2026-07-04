"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Eye, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import GlitchText from "./GlitchText";

interface TrackCardProps {
  sector: string;
  title: string;
  description: string;
  prize: string;
  fee: string;
  icon: React.ReactNode;
  glowColor: "cyan" | "purple" | "magenta";
}

function TrackCard({ sector, title, description, prize, fee, icon, glowColor }: TrackCardProps) {
  const cardBorderColors = {
    cyan: "hover:border-space-cyan/40 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]",
    purple: "hover:border-space-purple/40 hover:shadow-[0_0_20px_rgba(189,0,255,0.2)]",
    magenta: "hover:border-space-magenta/40 hover:shadow-[0_0_20px_rgba(255,0,127,0.2)]",
  };

  const prizeGlowColors = {
    cyan: "text-space-cyan glow-text-cyan",
    purple: "text-space-purple glow-text-purple",
    magenta: "text-space-magenta glow-text-magenta",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`p-6 rounded-lg glass-panel border border-white/10 bg-white/5 backdrop-blur-md flex flex-col justify-between transition-all duration-300 relative text-left ${cardBorderColors[glowColor]}`}
    >
      {/* Corner accent */}
      <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />

      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded bg-black/45 border border-white/5">
            {icon}
          </div>
          <div>
            <span className="text-[9px] font-mono tracking-widest text-gray-500 block uppercase">
              {sector}
            </span>
            <h4 className="text-sm font-orbitron font-bold text-white uppercase tracking-wider">
              {title}
            </h4>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-xs font-sans leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Prize Details & Action */}
      <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
        <div className="flex justify-between text-xs items-center">
          <span className="text-gray-500 uppercase font-mono text-[9px]">Grand Prize</span>
          <span className={`font-orbitron font-extrabold tracking-wide text-sm ${prizeGlowColors[glowColor]}`}>
            {prize}
          </span>
        </div>
        
        <div className="flex justify-between text-xs items-center mb-1">
          <span className="text-gray-500 uppercase font-mono text-[9px]">Registration</span>
          <span className="text-white font-semibold font-mono">
            {fee}
          </span>
        </div>

        <Link
          href="/events"
          className="w-full py-2 bg-white/5 hover:bg-white/10 text-center rounded border border-white/10 font-orbitron text-[9px] tracking-widest text-white hover:text-space-cyan uppercase flex items-center justify-center gap-1.5 transition-colors duration-300"
        >
          <span>Initialize Access</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function DataCore() {
  const tracks: TrackCardProps[] = [
    {
      sector: "[SECTOR_01]",
      title: "IBeTo (Social Innovation)",
      description: "Design, build, and deploy technology-driven solutions addressing real-world societal problems.",
      prize: "₹2,50,000/-",
      fee: "₹399/-",
      icon: <Terminal className="w-4 h-4 text-space-cyan" />,
      glowColor: "cyan",
    },
    {
      sector: "[SECTOR_02]",
      title: "RoboWar",
      description: "Pit heavy-duty custom fighting bots in direct combat inside the metal battle arena cages.",
      prize: "₹2,00,000/-",
      fee: "₹299/-",
      icon: <Cpu className="w-4 h-4 text-space-purple" />,
      glowColor: "purple",
    },
    {
      sector: "[SECTOR_03]",
      title: "HackForTomorrow",
      description: "Collaborate in a grueling 24-hour hackathon to program open source Web3, AI, and environmental projects.",
      prize: "₹1,50,000/-",
      fee: "₹199/-",
      icon: <Database className="w-4 h-4 text-space-magenta" />,
      glowColor: "magenta",
    },
    {
      sector: "[SECTOR_04]",
      title: "Issue! Coding Arena",
      description: "Develop agent-based optimizations and solve complex algorithmic problems against India's fastest encoders.",
      prize: "₹1,50,000/-",
      fee: "₹249/-",
      icon: <Eye className="w-4 h-4 text-space-cyan" />,
      glowColor: "cyan",
    },
  ];

  return (
    <section
      id="datacore"
      className="relative py-24 px-6 md:px-16 lg:px-24 bg-transparent overflow-hidden border-t border-white/5 flex flex-col items-center"
    >
      {/* Dynamic Cosmic Gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#03001e_0%,#010110_65%,#000000_100%)] opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 z-10">
        <h2 className="text-xs font-orbitron font-bold tracking-[0.4em] text-space-cyan uppercase mb-3">
          Quantum Mainframe
        </h2>
        <h3 className="text-3xl md:text-5xl font-orbitron font-extrabold tracking-wide uppercase">
          <GlitchText text="QUANTUM DATA CORE" />
        </h3>
        <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto mt-4 font-sans leading-relaxed">
          Monitor raw sector registries, evaluate technical directories, and synchronize core flight vectors across specialized sectors.
        </p>
      </div>

      {/* Wide grid card tracks */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10">
        {tracks.map((track, idx) => (
          <TrackCard key={idx} {...track} />
        ))}
      </div>
    </section>
  );
}
