"use client";

import { useState, useEffect, useCallback } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789XØΨΩΔΣΞαβγδtelemetryquantumsingularity";
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 25);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    if (isHovered) {
      const cleanup = scramble();
      return cleanup;
    } else {
      setDisplayText(text);
    }
  }, [isHovered, text, scramble]);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-block cursor-default select-none font-mono ${className}`}
    >
      {displayText}
    </span>
  );
}
