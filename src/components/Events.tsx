"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Eye, Calendar, Award } from "lucide-react";

interface EventCardProps {
  title: string;
  category: string;
  description: string;
  prize: string;
  fee: string;
  date: string;
  icon: React.ReactNode;
  glowColor: "cyan" | "purple" | "magenta";
}

function EventCard({ title, category, description, prize, fee, date, icon, glowColor }: EventCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse coords relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Max tilt of 10 degrees
    const tiltX = -(y / (rect.height / 2)) * 10;
    const tiltY = (x / (rect.width / 2)) * 10;
    
    setRotate({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const glowStyles = {
    cyan: "hover:border-space-cyan/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]",
    purple: "hover:border-space-purple/50 hover:shadow-[0_0_30px_rgba(189,0,255,0.2)]",
    magenta: "hover:border-space-magenta/50 hover:shadow-[0_0_30px_rgba(255,0,127,0.2)]",
  };

  const buttonStyles = {
    cyan: "border-space-cyan/40 bg-space-cyan/5 text-space-cyan hover:bg-space-cyan/20 hover:border-space-cyan hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]",
    purple: "border-space-purple/40 bg-space-purple/5 text-space-purple hover:bg-space-purple/20 hover:border-space-purple hover:shadow-[0_0_15px_rgba(189,0,255,0.4)]",
    magenta: "border-space-magenta/40 bg-space-magenta/5 text-space-magenta hover:bg-space-magenta/20 hover:border-space-magenta hover:shadow-[0_0_15px_rgba(255,0,127,0.4)]",
  };

  const feeTextStyles = {
    cyan: "text-space-cyan",
    purple: "text-space-purple",
    magenta: "text-space-magenta",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.02 : 1})`,
        transition: "transform 0.15s cubic-bezier(0.25, 0.8, 0.25, 1)",
      }}
      className={`group relative p-6 rounded-lg glass-panel cursor-pointer select-none transition-all duration-300 border border-white/5 bg-white/5 backdrop-blur-md ${glowStyles[glowColor]}`}
    >
      {/* Corner accent glow */}
      <div
        className={`absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-r transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-30"
        } ${
          glowColor === "cyan"
            ? "from-space-cyan to-transparent"
            : glowColor === "purple"
            ? "from-space-purple to-transparent"
            : "from-space-magenta to-transparent"
        }`}
      />
      <div
        className={`absolute top-0 left-0 w-[1px] h-8 bg-gradient-to-b transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-30"
        } ${
          glowColor === "cyan"
            ? "from-space-cyan to-transparent"
            : glowColor === "purple"
            ? "from-space-purple to-transparent"
            : "from-space-magenta to-transparent"
        }`}
      />

      {/* Category Tag */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-[9px] font-orbitron font-semibold tracking-[0.2em] text-white/55 uppercase bg-white/5 px-2.5 py-1 rounded">
          {category}
        </span>
        <div className={`transition-transform duration-500 ${isHovered ? "rotate-12 scale-110" : ""}`}>
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-orbitron font-bold tracking-wide mb-3 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-xs leading-relaxed mb-6 font-sans">
        {description}
      </p>

      {/* Metadata & pricing */}
      <div className="flex flex-col gap-3 pt-4 border-t border-white/5 text-[11px] font-orbitron text-gray-400">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-gray-500" />
            <span>Pool: <span className="text-white font-bold">{prize}</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-gray-500" />
            <span>{date}</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px]">
          <span className="text-gray-500 uppercase">Registration Entry</span>
          <span className={`font-bold tracking-wide ${feeTextStyles[glowColor]}`}>
            {fee}
          </span>
        </div>

        {/* Button */}
        <button
          className={`w-full mt-2 py-2 border font-orbitron font-extrabold text-[10px] tracking-widest uppercase rounded transition-all duration-300 ${buttonStyles[glowColor]}`}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default function Events() {
  const eventsData: EventCardProps[] = [
    {
      title: "IBeTo (Social Innovation)",
      category: "Socially Relevant Technology",
      description: "Excel's premier social innovation challenge. Design, build, and deploy technology-driven solutions addressing real-world societal problems.",
      prize: "₹2,50,000/-",
      fee: "₹399/-",
      date: "Oct 12-14",
      icon: <Code2 className="w-6 h-6 text-space-cyan" />,
      glowColor: "cyan",
    },
    {
      title: "RoboWar",
      category: "Robotics/Hardware Battle",
      description: "Enter the metal cage of death. Pit your heavy-duty custom fighting bots in direct combat. Armor panels, spinning blades, and raw speed rule.",
      prize: "₹2,00,000/-",
      fee: "₹299/-",
      date: "Oct 13",
      icon: <Cpu className="w-6 h-6 text-space-purple" />,
      glowColor: "purple",
    },
    {
      title: "HackForTomorrow",
      category: "24-Hour Software Hackathon",
      description: "Create next-gen open source programs, Web3 solutions, or space tracking integrations to tackle modern environmental and economic crises.",
      prize: "₹1,50,000/-",
      fee: "₹199/-",
      date: "Oct 14",
      icon: <Database className="w-6 h-6 text-space-magenta" />,
      glowColor: "magenta",
    },
    {
      title: "Issue! Coding Arena",
      category: "Competitive Coding",
      description: "Compete against India's fastest programmers. Resolve optimization puzzles, algorithmic complexities, and mock kernel debug challenges under tight constraints.",
      prize: "₹1,50,000/-",
      fee: "₹249/-",
      date: "Oct 15",
      icon: <Eye className="w-6 h-6 text-space-cyan" />,
      glowColor: "cyan",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  } as const;

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  } as const;

  const cardAnimVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  } as const;

  return (
    <section
      id="events"
      className="relative py-24 px-6 md:px-16 lg:px-24 bg-black overflow-hidden"
    >
      {/* Background soft glow under events */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-space-purple/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="text-center mb-16"
      >
        <h2 className="text-xs font-orbitron font-bold tracking-[0.4em] text-space-cyan uppercase mb-3">
          Mission Modules
        </h2>
        <h3 className="text-3xl md:text-5xl font-orbitron font-extrabold tracking-wide uppercase">
          Interstellar Grid
        </h3>
        <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto mt-4 font-sans leading-relaxed">
          Choose your sector, calibrate your instruments, and coordinate with your squad to claim victory.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {eventsData.map((event) => (
          <motion.div key={event.title} variants={cardAnimVariants}>
            <EventCard {...event} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
