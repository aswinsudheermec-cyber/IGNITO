"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Cpu, Menu, X } from "lucide-react";
import Link from "next/link";
import GlitchText from "./GlitchText";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: "Core", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Nebula Timelines", href: "/competitions" },
  ] as const;

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white group">
          <Cpu className="w-6 h-6 text-space-cyan group-hover:rotate-90 transition-transform duration-500" />
          <span className="font-orbitron font-extrabold text-xl tracking-widest bg-gradient-to-r from-space-cyan via-space-purple to-space-magenta bg-clip-text text-transparent">
            <GlitchText text="IGNITO" />
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-6 relative">
            {links.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-xs font-orbitron font-semibold tracking-widest uppercase text-gray-300 hover:text-space-cyan transition-colors duration-200 py-2 px-1"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <GlitchText text={link.name} />
                {hoveredIdx === idx && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-space-cyan via-space-purple to-space-magenta"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="relative px-5 py-2 font-orbitron text-xs font-semibold tracking-widest uppercase text-space-cyan border border-space-cyan/40 bg-space-cyan/5 hover:bg-space-cyan/20 hover:border-space-cyan hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300 rounded"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[65px] left-0 right-0 z-40 md:hidden glass-panel border-b border-white/10 flex flex-col items-center py-8 gap-6"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-orbitron font-semibold tracking-widest uppercase text-gray-300 hover:text-space-cyan transition-colors duration-200"
              >
                <GlitchText text={link.name} />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-2.5 font-orbitron text-xs font-semibold tracking-widest uppercase text-space-cyan border border-space-cyan/40 bg-space-cyan/5 hover:bg-space-cyan/20 rounded mt-2"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
