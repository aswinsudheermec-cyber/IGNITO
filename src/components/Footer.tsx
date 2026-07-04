"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black/60 border-t border-white/10 py-8 px-6 md:px-16 lg:px-24 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 font-mono text-[10px]">
        {/* Left Side Info */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <span className="font-orbitron font-extrabold text-xs tracking-widest text-white">
            IGNITO 2026
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="uppercase">
            Govt. Model Engineering College, Thrikakara
          </span>
        </div>

        {/* Right Side Copyright & Tagline */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-right">
          <span>
            © 2026 IGNITO. ALL RIGHTS RESERVED.
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="text-space-cyan font-bold tracking-wider">
            INSPIRE | INNOVATE | ENGINEER
          </span>
        </div>
      </div>
    </footer>
  );
}
