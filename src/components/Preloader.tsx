"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Star {
  x: number;
  y: number;
  z: number;
  prevZ: number;
}

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [logText, setLogText] = useState("CALIBRATING SENSORS...");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 1. Hyperspace Warp Tunnel Canvas Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const starsCount = 450;
    const stars: Star[] = [];

    // Initialize stars with radial depth coordinates
    for (let i = 0; i < starsCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width,
        prevZ: 0,
      });
    }

    const draw = () => {
      // Create trailing light blur by filling black with high opacity
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Access progress state indirectly via a global tracker or linear scaling
      // We will read the percentage element text or compute a speed variable
      const percentElement = document.getElementById("preload-progress-num");
      const currentPercent = percentElement ? parseInt(percentElement.innerText) || 0 : 0;

      // Hyper-speed warp speed boosts as progress nears 100%
      const warpFactor = 1.0 + Math.pow(currentPercent / 100, 2.5) * 18.0;

      stars.forEach((star) => {
        star.prevZ = star.z;
        star.z -= 1.8 * warpFactor; // accelerate depth drift

        if (star.z <= 0) {
          star.z = width;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
          star.prevZ = star.z;
        }

        // 3D perspective mapping onto 2D screen coordinate planes
        const px = (star.x / star.z) * width + cx;
        const py = (star.y / star.z) * height + cy;

        const opx = (star.x / star.prevZ) * width + cx;
        const opy = (star.y / star.prevZ) * height + cy;

        // Draw star trail line to simulate high-speed exposure
        if (px >= 0 && px < width && py >= 0 && py < height) {
          const depthAlpha = 1.0 - star.z / width; // brighter as they zoom close
          ctx.strokeStyle = `rgba(0, 245, 255, ${depthAlpha * 0.7})`;
          ctx.lineWidth = (1.0 - star.z / width) * 1.8;
          ctx.beginPath();
          ctx.moveTo(opx, opy);
          ctx.lineTo(px, py);
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 2. Monospace Loading Cycles and Dynamic HUD logs (2.5-second total duration)
  useEffect(() => {
    const totalDuration = 2500;
    const steps = 100;
    const stepTime = totalDuration / steps;

    const logsList = [
      "CALIBRATING QUANTUM MAINFRAME...",
      "TUNING ANISOTROPIC WARP CORES...",
      "ESTABLISHING STELLAR SECURE LINK...",
      "LAUNCHING QUANTUM VORTEX MATRICES...",
      "WARP INITIALIZATION SUCCESSFUL."
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextVal = prev + 1;

        if (nextVal < 25) {
          setLogText(logsList[0]);
        } else if (nextVal < 50) {
          setLogText(logsList[1]);
        } else if (nextVal < 75) {
          setLogText(logsList[2]);
        } else if (nextVal < 99) {
          setLogText(logsList[3]);
        } else {
          setLogText(logsList[4]);
        }

        if (nextVal >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 350); // Pause briefly at 100% for transition pacing
          return 100;
        }
        return nextVal;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background hyperspace star tunnel */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Invisible HTML tracker for canvas frame rates */}
      <span id="preload-progress-num" className="hidden">
        {progress}
      </span>

      {/* Foreground HUD Panel Box - (Creative Bracket Hud Frame) */}
      <div className="z-10 relative flex flex-col items-center justify-center p-8 md:p-12 rounded-lg border border-white/10 bg-black/60 backdrop-blur-md max-w-sm w-full mx-4 shadow-[0_0_40px_rgba(0,245,255,0.08)]">
        
        {/* HUD Crosshairs/Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-space-cyan" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-space-cyan" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-space-cyan" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-space-cyan" />

        {/* HUD Header */}
        <span className="text-[9px] font-mono tracking-[0.35em] text-gray-500 uppercase mb-4">
          SYSTEM_TRANSMISSION: READY
        </span>

        {/* Center countdown */}
        <div className="flex flex-col items-center select-none font-mono">
          <span className="text-5xl md:text-6xl font-extrabold tracking-widest text-space-cyan glow-text-cyan mb-2">
            {String(progress).padStart(3, "0")}%
          </span>
          <span className="text-[10px] font-bold tracking-widest text-space-purple uppercase text-center max-w-xs h-5 truncate px-2">
            {logText}
          </span>
        </div>

        {/* Futuristic bottom progress ticker line */}
        <div className="w-full h-1 bg-white/5 rounded border border-white/10 overflow-hidden mt-6">
          <div 
            className="h-full bg-gradient-to-r from-space-cyan to-space-purple transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom status stats */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between font-mono text-[9px] text-gray-600 select-none pointer-events-none z-10">
        <span>GRID_COORD: 45-X9</span>
        <span>MAINFRAME_WARP: ON</span>
      </div>
    </motion.div>
  );
}
