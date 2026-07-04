"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import GlitchText from "./GlitchText";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 12,
    minutes: 9,
    seconds: 45,
  });

  // Countdown timer tick
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Set up animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  } as const;

  const itemDown = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  } as const;

  const itemUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  } as const;



  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-16 lg:px-24 overflow-hidden bg-black"
    >
      {/* Deep Space cosmic blue-purple radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#03001e_0%,#010110_70%,#000000_100%)] pointer-events-none" />

      {/* Main split dashboard content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full my-auto z-10">
        
        {/* Left Column - Branding & Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 flex flex-col justify-center text-left"
        >
          <motion.div variants={itemDown} className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-space-cyan"></span>
            <span className="text-[10px] md:text-xs font-orbitron tracking-[0.3em] text-space-cyan uppercase font-bold">
              Interstellar Tech Odyssey
            </span>
          </motion.div>

          <motion.h1
            variants={itemDown}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-extrabold tracking-wider leading-none mb-4 select-none"
          >
            <span className="text-gradient-animate">
              <GlitchText text="IGNITO" />
            </span>
            <br />
            <span className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <GlitchText text="2026" />
            </span>
          </motion.h1>

          <motion.p
            variants={itemUp}
            className="text-gray-400 text-xs md:text-sm max-w-lg mb-8 leading-relaxed font-sans"
          >
            Ignito is the annual national techno-managerial festival of Govt. Model Engineering College, Thrikakara. As India&apos;s first student-run technical festival, Ignito has been inspiring innovation and engineering excellence since 1999. Map your flight coordinates to the digital frontier—the cosmic singularity of Ignito awaits.
          </motion.p>

          {/* CTA Actions */}
          <motion.div variants={itemUp} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group relative px-8 py-3.5 bg-gradient-to-r from-space-purple via-space-cyan to-space-magenta text-black font-orbitron font-extrabold text-xs tracking-widest uppercase rounded shadow-[0_0_20px_rgba(0,245,255,0.35)] hover:shadow-[0_0_35px_rgba(189,0,255,0.7)] transition-all duration-300 transform hover:scale-105"
            >
              Initiate Warp
              <Rocket className="inline-block w-4 h-4 ml-2 -mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              href="/events"
              className="px-8 py-3.5 border border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/20 font-orbitron font-semibold text-xs tracking-widest uppercase rounded transition-all duration-300"
            >
              Explore Sectors
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column - Executive Techfest Overview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-5/12 p-6 rounded-lg glass-panel border border-white/10 bg-white/5 backdrop-blur-md flex flex-col gap-6 relative"
        >
          {/* Subtle design accents */}
          <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-space-purple/10 rounded-full blur-[30px] pointer-events-none" />

          {/* Header */}
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <span className="text-[10px] font-orbitron font-extrabold tracking-widest text-white/80 uppercase">
              {"// EXECUTIVE OVERVIEW"}
            </span>
            <span className="text-[8px] font-mono text-space-cyan uppercase">
              STATUS: OPERATIONAL
            </span>
          </div>

          {/* Metric 1 - Total Prize Pool */}
          <div className="bg-black/45 p-4 rounded border border-white/5 text-left relative flex justify-between items-center">
            <div>
              <span className="text-[9px] font-orbitron font-extrabold tracking-widest text-gray-500 uppercase block mb-1">
                Total Prize Pool
              </span>
              <span className="text-xl md:text-2xl font-orbitron font-extrabold tracking-wider text-space-magenta glow-text-magenta">
                ₹5,00,000/-
              </span>
            </div>
            <div className="text-[10px] font-mono text-gray-400 text-right">
              <div>Day 3 Gala</div>
              <div className="text-space-cyan">9 Tracks</div>
            </div>
          </div>

          {/* Metric 2 - Expected Hackers */}
          <div className="bg-black/45 p-4 rounded border border-white/5 text-left relative flex justify-between items-center">
            <div>
              <span className="text-[9px] font-orbitron font-extrabold tracking-widest text-gray-500 uppercase block mb-1">
                Expected Hackers
              </span>
              <span className="text-xl md:text-2xl font-orbitron font-extrabold tracking-wider text-space-cyan glow-text-cyan">
                1,500+ Innovators
              </span>
            </div>
            <div className="text-[10px] font-mono text-gray-400 text-right">
              <div>Global Registry</div>
              <div className="text-space-purple">Validated</div>
            </div>
          </div>

          {/* Metric 3 - Tech Tracks */}
          <div className="bg-black/45 p-4 rounded border border-white/5 text-left relative flex justify-between items-center">
            <div>
              <span className="text-[9px] font-orbitron font-extrabold tracking-widest text-gray-500 uppercase block mb-1">
                Tech Tracks
              </span>
              <span className="text-xl md:text-2xl font-orbitron font-extrabold tracking-wider text-space-purple glow-text-purple">
                6 Specialized Sectors
              </span>
            </div>
            <div className="text-[10px] font-mono text-gray-400 text-right">
              <div>AI & Robotics</div>
              <div className="text-space-magenta">Active</div>
            </div>
          </div>

          {/* System capacity bar */}
          <div className="flex flex-col gap-1.5 text-left">
            <div className="flex justify-between text-[9px] font-orbitron font-extrabold tracking-widest text-gray-400 uppercase">
              <span>REGISTRATION FILL RATE</span>
              <span className="text-space-cyan font-bold">78%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded border border-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-space-cyan via-space-purple to-space-magenta w-[78%]" />
            </div>
          </div>

        </motion.div>
      </div>

      {/* Expanded bottom metrics bar */}
      <div className="w-full z-10 max-w-6xl mx-auto border-t border-white/10 pt-8 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-left">
          <div>
            <div className="text-[10px] font-orbitron text-space-cyan tracking-wider uppercase mb-1">
              Mission Phase
            </div>
            <div className="text-sm md:text-base font-bold text-white font-sans">01-Scaffolding</div>
          </div>
          
          <div>
            <div className="text-[10px] font-orbitron text-space-purple tracking-wider uppercase mb-1">
              Active Nodes
            </div>
            <div className="text-sm md:text-base font-bold text-white font-sans">1,240+ Coders</div>
          </div>

          <div>
            <div className="text-[10px] font-orbitron text-green-400 tracking-wider uppercase mb-1">
              Project Status
            </div>
            <div className="text-sm md:text-base font-bold text-green-400 font-sans glow-text-cyan">Operational</div>
          </div>

          <div>
            <div className="text-[10px] font-orbitron text-space-magenta tracking-wider uppercase mb-1">
              System Launch In
            </div>
            <div className="text-xs md:text-sm font-bold text-white font-mono flex gap-1 items-center">
              <span>{timeLeft.days}d</span>
              <span className="text-space-purple animate-pulse">:</span>
              <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
              <span className="text-space-purple animate-pulse">:</span>
              <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
              <span className="text-space-purple animate-pulse">:</span>
              <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="text-[10px] font-orbitron text-space-cyan tracking-wider uppercase mb-1">
              Premium Access Key
            </div>
            <div className="text-sm md:text-base font-bold text-space-cyan font-sans glow-text-cyan">Validated</div>
          </div>
        </div>
      </div>
    </section>
  );
}
