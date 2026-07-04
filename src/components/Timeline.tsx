"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Zap, Sparkles } from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  details: string;
}

interface TimelineDayProps {
  dayNum: number;
  date: string;
  theme: string;
  events: ScheduleItem[];
  icon: React.ReactNode;
  glowColor: "cyan" | "purple" | "magenta";
}

function TimelineDay({ dayNum, date, theme, events, icon, glowColor }: TimelineDayProps) {
  const [isHovered, setIsHovered] = useState(false);

  const glowStyles = {
    cyan: "hover:border-space-cyan/40 hover:shadow-[0_0_25px_rgba(0,245,255,0.25)]",
    purple: "hover:border-space-purple/40 hover:shadow-[0_0_25px_rgba(189,0,255,0.25)]",
    magenta: "hover:border-space-magenta/40 hover:shadow-[0_0_25px_rgba(255,0,127,0.25)]",
  };

  const nodeStyles = {
    cyan: "border-space-cyan shadow-[0_0_10px_#00f5ff]",
    purple: "border-space-purple shadow-[0_0_10px_#bd00ff]",
    magenta: "border-space-magenta shadow-[0_0_10px_#ff007f]",
  };

  const activeStyles = isHovered ? nodeStyles[glowColor] : "border-white/20";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col md:flex-row gap-8 md:gap-16 w-full items-stretch py-8 border-b border-white/5 last:border-none"
    >
      {/* Day label left column */}
      <div className="w-full md:w-1/4 text-left flex flex-col justify-start">
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{ scale: isHovered ? 1.15 : 1 }}
            className={`w-10 h-10 rounded-full border-2 bg-black flex items-center justify-center transition-all duration-300 ${activeStyles}`}
          >
            {icon}
          </motion.div>
          <div>
            <span className="text-[10px] font-orbitron font-extrabold tracking-widest text-gray-500 uppercase">
              Day 0{dayNum}
            </span>
            <div className="text-xs font-orbitron font-bold text-white tracking-wide">{date}</div>
          </div>
        </div>
        <h4 className={`text-sm font-orbitron font-bold uppercase tracking-wider mt-2 transition-colors ${
          isHovered
            ? glowColor === "cyan"
              ? "text-space-cyan"
              : glowColor === "purple"
              ? "text-space-purple"
              : "text-space-magenta"
            : "text-gray-400"
        }`}>
          {theme}
        </h4>
      </div>

      {/* Events timeline details list right column */}
      <div className="w-full md:w-3/4">
        <div className={`p-6 rounded-lg glass-panel transition-all duration-300 border border-white/5 bg-white/5 ${glowStyles[glowColor]}`}>
          <div className="flex flex-col gap-5">
            {events.map((event, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 last:border-none pb-4 last:pb-0">
                <div className="text-left">
                  <h5 className="text-sm font-orbitron font-semibold text-white tracking-wide">
                    {event.title}
                  </h5>
                  <p className="text-gray-400 text-xs font-sans mt-1">
                    {event.details}
                  </p>
                </div>
                <span className="self-start sm:self-center px-3 py-1 rounded bg-white/5 border border-white/10 font-mono text-[9px] text-gray-300 whitespace-nowrap">
                  {event.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const scheduleData: TimelineDayProps[] = [
    {
      dayNum: 1,
      date: "Oct 12, 2026",
      theme: "Inauguration & Kickoff",
      glowColor: "cyan",
      icon: <Terminal className="w-4 h-4 text-space-cyan" />,
      events: [
        {
          time: "09:00 UTC",
          title: "Galactic Opening Ceremony",
          details: "Keynote address on orbital system computing and technical sector alignment.",
        },
        {
          time: "11:30 UTC",
          title: "Interstellar Hackathon Kickoff",
          details: "Cosmic Dev Hack prompts released. Team formation and sandbox environment lock-down.",
        },
        {
          time: "14:00 UTC",
          title: "Stellar AI Prompt Sandbox Open",
          details: "Autonomous agent negotiation arenas active for testing telemetry configurations.",
        },
      ],
    },
    {
      dayNum: 2,
      date: "Oct 13, 2026",
      theme: "Robotics & AI Battles",
      glowColor: "purple",
      icon: <Zap className="w-4 h-4 text-space-purple" />,
      events: [
        {
          time: "10:00 UTC",
          title: "Quantum Rover Navigation Challenge",
          details: "Automated hardware rovers deploy to guide through physical electromagnetic blockades.",
        },
        {
          time: "13:30 UTC",
          title: "Exoplanet Machine Learning Sandbox",
          details: "Atmospheric data feeds stream active. ML classifiers isolate exoplanet signatures.",
        },
        {
          time: "16:00 UTC",
          title: "Stellar AI Prompt Finals",
          details: "Top agent-based prompt frameworks deploy in full orbital simulations.",
        },
      ],
    },
    {
      dayNum: 3,
      date: "Oct 14, 2026",
      theme: "Presentations & Gala",
      glowColor: "magenta",
      icon: <Sparkles className="w-4 h-4 text-space-magenta" />,
      events: [
        {
          time: "10:00 UTC",
          title: "Galactic Venture Capital Pitches",
          details: "Milestone Gamma groups present business cases for solar-propulsion and satellite builds.",
        },
        {
          time: "14:00 UTC",
          title: "Stellar Hackathon Code Submission",
          details: "All sandbox code branches pushed and finalized for technical code reviews.",
        },
        {
          time: "19:00 UTC",
          title: "Cosmic Award Gala & Singularity Banquet",
          details: "Prize distribution, closing remarks, and celebration of the deep space odyssey.",
        },
      ],
    },
  ];

  return (
    <section
      id="timeline"
      className="relative py-24 px-6 md:px-16 lg:px-24 bg-black overflow-hidden border-t border-white/5 w-full flex flex-col items-center"
    >
      {/* Background soft glow */}
      <div className="absolute left-0 top-1/3 w-[350px] h-[350px] bg-space-purple/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 z-10">
        <h2 className="text-xs font-orbitron font-bold tracking-[0.4em] text-space-purple uppercase mb-3">
          Roadmap & Schedule
        </h2>
        <h3 className="text-3xl md:text-5xl font-orbitron font-extrabold tracking-wide uppercase">
          IGNITO 2026 Event Timeline
        </h3>
        <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto mt-4 font-sans leading-relaxed">
          Follow the 3-day technical path mapping inaugurations, active AI arenas, and final award galas.
        </p>
      </div>

      {/* Timeline List */}
      <div className="w-full max-w-4xl flex flex-col z-10">
        {scheduleData.map((day) => (
          <TimelineDay key={day.dayNum} {...day} />
        ))}
      </div>
    </section>
  );
}
