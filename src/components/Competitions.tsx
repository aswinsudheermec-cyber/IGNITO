"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Compass, GitBranch, Rocket } from "lucide-react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  description: string;
  index: number;
  icon: React.ReactNode;
}

function TimelineItem({ title, subtitle, description, index, icon }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 last:mb-0 w-full`}>
      {/* Asymmetric layout blocks */}
      
      {/* Content Block (Alternates Left/Right on Desktop) */}
      <div className={`w-full md:w-[45%] ${isEven ? "md:order-1 md:text-right" : "md:order-3 md:text-left"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="p-6 rounded-lg glass-panel border border-white/5 bg-white/5 backdrop-blur-md relative"
        >
          {/* Subtle timeline connector for mobile */}
          <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-4 h-[1px] bg-space-cyan md:hidden" />

          <span className="text-[10px] font-orbitron font-extrabold tracking-widest text-space-cyan uppercase">
            {subtitle}
          </span>
          <h4 className="text-xl md:text-2xl font-orbitron font-bold tracking-wide mt-1 mb-3 text-white">
            {title}
          </h4>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Center Node (Glow Indicator) */}
      <div className="absolute md:relative left-[-32px] md:left-auto top-1/2 md:top-auto -translate-y-1/2 md:translate-y-0 z-20 md:order-2 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0.3 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, margin: "-150px" }}
          transition={{ duration: 0.5 }}
          className="relative w-12 h-12 rounded-full bg-black border-2 border-space-purple flex items-center justify-center shadow-[0_0_15px_rgba(189,0,255,0.4)] group"
        >
          {/* Double ring glow */}
          <div className="absolute inset-0 rounded-full border border-space-cyan/20 animate-ping opacity-60 pointer-events-none" />
          <div className="text-space-cyan group-hover:text-space-magenta transition-colors duration-300">
            {icon}
          </div>
        </motion.div>
      </div>

      {/* Empty space for layout matching on desktop */}
      <div className="hidden md:block w-[45%] md:order-3" />
    </div>
  );
}

export default function Competitions() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const timelineItems: Omit<TimelineItemProps, "index">[] = [
    {
      title: "Nova Hack flagship",
      subtitle: "Milestone Alpha | Entry Fee: ₹499/-",
      description: "Assemble a multi-disciplinary fleet of developers and system planners. Solve high-stakes challenges: simulate life support systems, design orbital debris capture algorithms, or architect decentralized planetary communications systems.",
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      title: "Cosmo Rover challenge",
      subtitle: "Milestone Beta | Entry Fee: ₹399/-",
      description: "Build a physical or highly detailed digital rover. Drive through an obstacle course representing rugged Martian craters. Features auto-navigation tasks and spectroscopic material recognition tests.",
      icon: <GitBranch className="w-5 h-5" />,
    },
    {
      title: "Galactic Pitch deck",
      subtitle: "Milestone Gamma | Entry Fee: ₹299/-",
      description: "Formulate business cases for asteroid mining, solar-sail propulsion research, or satellite orbital constellations. Pitch directly to a panel of expert investors looking to fund the next giant leap.",
      icon: <Compass className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="competitions"
      ref={containerRef}
      className="relative py-24 px-12 md:px-16 lg:px-24 bg-black overflow-hidden"
    >
      {/* Background stars / dust */}
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-space-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-xs font-orbitron font-bold tracking-[0.4em] text-space-purple uppercase mb-3">
          Deep Space Checkpoints
        </h2>
        <h3 className="text-3xl md:text-5xl font-orbitron font-extrabold tracking-wide uppercase">
          Nebula Timelines
        </h3>
        <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto mt-4 font-sans leading-relaxed">
          Embark on the interstellar journey. Progress through Alpha, Beta, and Gamma milestones to unlock final orbit.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-4xl mx-auto pl-10 md:pl-0">
        {/* Background Vertical Base Line (Inert) */}
        <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 pointer-events-none" />

        {/* Scroll-Linked Progress Bar (Active) */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-space-cyan via-space-purple to-space-magenta origin-top -translate-x-1/2 pointer-events-none"
        />

        {/* Timeline Item Rows */}
        <div className="flex flex-col w-full relative">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={item.title}
              index={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
