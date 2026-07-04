"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedin: string;
  phone: string;
  glowColor: "cyan" | "purple" | "magenta";
}

function TeamMemberCard({ name, role, image, email, linkedin, phone, glowColor }: TeamMember) {
  const borderStyles = {
    cyan: "hover:border-space-cyan/40 hover:shadow-[0_0_25px_rgba(0,245,255,0.25)]",
    purple: "hover:border-space-purple/40 hover:shadow-[0_0_25px_rgba(189,0,255,0.25)]",
    magenta: "hover:border-space-magenta/40 hover:shadow-[0_0_25px_rgba(255,0,127,0.25)]",
  };

  const ringStyles = {
    cyan: "border-space-cyan shadow-[0_0_10px_rgba(0,245,255,0.3)]",
    purple: "border-space-purple shadow-[0_0_10px_rgba(189,0,255,0.3)]",
    magenta: "border-space-magenta shadow-[0_0_10px_rgba(255,0,127,0.3)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`p-8 rounded-lg glass-panel border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-between text-center relative transition-all duration-300 ${borderStyles[glowColor]}`}
    >
      <div className="flex flex-col items-center w-full">
        {/* Profile Circle Frame */}
        <div className={`relative w-28 h-28 rounded-full border-2 bg-black/50 p-1 mb-6 flex items-center justify-center ${ringStyles[glowColor]}`}>
          <Image
            src={image}
            alt={name}
            width={112}
            height={112}
            className="w-full h-full object-cover rounded-full select-none"
          />
        </div>

        {/* Name */}
        <h4 className="text-sm font-orbitron font-extrabold tracking-widest text-white uppercase mb-2">
          {name}
        </h4>

        {/* Role Pill Label */}
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 font-mono text-[9px] text-gray-400 tracking-wider mb-6">
          {role}
        </span>

        {/* Graphic Accent Divider */}
        <div className="w-12 h-[1px] bg-white/15 mb-6" />
      </div>

      {/* Social Contacts Row */}
      <div className="flex gap-4">
        <a
          href={`mailto:${email}`}
          className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:border-space-cyan hover:text-space-cyan hover:bg-space-cyan/10 flex items-center justify-center text-gray-400 transition-colors duration-300"
          aria-label="Email"
        >
          {/* Inline SVG Mail */}
          <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:border-space-purple hover:text-space-purple hover:bg-space-purple/10 flex items-center justify-center text-gray-400 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          {/* Inline SVG LinkedIn */}
          <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href={`tel:${phone}`}
          className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:border-space-magenta hover:text-space-magenta hover:bg-space-magenta/10 flex items-center justify-center text-gray-400 transition-colors duration-300"
          aria-label="Phone"
        >
          {/* Inline SVG Phone */}
          <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const coreTeam: TeamMember[] = [
    {
      name: "Anna K George",
      role: "Chairperson",
      image: "/images/anna.png",
      email: "anna@ignito.tech",
      linkedin: "https://linkedin.com",
      phone: "+919876543210",
      glowColor: "cyan",
    },
    {
      name: "Rohit Jose",
      role: "General Secretary",
      image: "/images/rohit.png",
      email: "rohit@ignito.tech",
      linkedin: "https://linkedin.com",
      phone: "+919876543211",
      glowColor: "purple",
    },
    {
      name: "Sanjay Sudheer",
      role: "Joint Secretary",
      image: "/images/sanjay.png",
      email: "sanjay@ignito.tech",
      linkedin: "https://linkedin.com",
      phone: "+919876543212",
      glowColor: "magenta",
    },
    {
      name: "Aravindh P A",
      role: "Event Manager",
      image: "/images/aravindh.png",
      email: "aravindh@ignito.tech",
      linkedin: "https://linkedin.com",
      phone: "+919876543213",
      glowColor: "cyan",
    },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative pt-24 pb-16 px-6 md:px-16 lg:px-24 bg-transparent overflow-hidden border-t border-white/5 flex flex-col items-center"
    >
      {/* Background radial glows */}
      <div className="absolute right-[-150px] bottom-[-150px] w-[350px] h-[350px] bg-space-purple/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 z-10">
        <h2 className="text-xs font-orbitron font-bold tracking-[0.4em] text-space-cyan uppercase mb-3">
          Contacts
        </h2>
        <h3 className="text-3xl md:text-5xl font-orbitron font-extrabold tracking-wide uppercase">
          Our Team
        </h3>
        <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto mt-4 font-sans leading-relaxed">
          Connect directly with our core mission operations crew directing Ignito 2026.
        </p>
      </div>

      {/* Grid of Team Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10 mb-16">
        {coreTeam.map((member, idx) => (
          <TeamMemberCard key={idx} {...member} />
        ))}
      </div>

      {/* Return to Orbit Scroll Button */}
      <div className="z-10 w-full max-w-6xl flex justify-center border-t border-white/5 pt-8">
        <button
          onClick={handleScrollTop}
          className="group px-6 py-2.5 bg-white/5 border border-white/10 hover:border-space-cyan text-gray-400 hover:text-space-cyan rounded text-xs font-orbitron tracking-widest uppercase transition-all duration-300 flex items-center gap-2"
        >
          <span>Return to Orbit</span>
          {/* Custom SVG arrow */}
          <svg className="w-3.5 h-3.5 stroke-current group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      </div>
    </section>
  );
}
