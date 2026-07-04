import Events from "@/components/Events";

export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden pt-20">
      {/* Global cosmic background mesh */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,#03001e_0%,#010110_45%,#000000_100%)] pointer-events-none" />

      {/* Standalone Events container */}
      <main className="relative z-10">
        <Events />
      </main>
    </div>
  );
}
