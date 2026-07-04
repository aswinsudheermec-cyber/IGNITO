import Hero from "@/components/Hero";
import DataCore from "@/components/DataCore";
import Timeline from "@/components/Timeline";
import Link from "next/link";
import { ArrowRight, Calendar, Trophy, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Global cosmic background mesh */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,#03001e_0%,#010110_45%,#000000_100%)] pointer-events-none" />

      {/* Page Content Sections */}
      <main className="relative z-10">
        <Hero />
        <DataCore />
        <Timeline />

        {/* Featured Highlights Gateway Grid */}
        <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-black/60 overflow-hidden border-t border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-xs font-orbitron font-bold tracking-[0.4em] text-space-purple uppercase mb-3">
              Sector Navigation
            </h2>
            <h3 className="text-3xl md:text-5xl font-orbitron font-extrabold tracking-wide uppercase mb-12">
              Featured Gateways
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Events Gateway */}
              <Link
                href="/events"
                className="group p-8 rounded-lg glass-panel glass-panel-hover border border-white/5 bg-white/5 flex flex-col justify-between text-left h-[260px]"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-space-cyan/10 border border-space-cyan/30 flex items-center justify-center text-space-cyan mb-6">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-space-cyan transition-colors">
                    Interstellar Grid
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-sans">
                    View active programming sectors, software hackathons, and quantum AI battle arenas.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-space-cyan text-xs font-orbitron font-bold uppercase tracking-wider">
                  <span>Enter Sector</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Competitions Gateway */}
              <Link
                href="/competitions"
                className="group p-8 rounded-lg glass-panel glass-panel-hover border border-white/5 bg-white/5 flex flex-col justify-between text-left h-[260px]"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-space-purple/10 border border-space-purple/30 flex items-center justify-center text-space-purple mb-6">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-space-purple transition-colors">
                    Nebula Timelines
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-sans">
                    Track flagship milestone checkpoints, Mars rover builds, and interplanetary startup pitch decks.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-space-purple text-xs font-orbitron font-bold uppercase tracking-wider">
                  <span>View Timeline</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Contact Gateway */}
              <Link
                href="/contact"
                className="group p-8 rounded-lg glass-panel glass-panel-hover border border-white/5 bg-white/5 flex flex-col justify-between text-left h-[260px]"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-space-magenta/10 border border-space-magenta/30 flex items-center justify-center text-space-magenta mb-6">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-space-magenta transition-colors">
                    Transmit Signals
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-sans">
                    Secure direct telemetry connections with Mission Control and send query signal pulses.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-space-magenta text-xs font-orbitron font-bold uppercase tracking-wider">
                  <span>Beam Signal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
