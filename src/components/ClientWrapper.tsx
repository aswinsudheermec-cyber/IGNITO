"use client";

import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import GlobalCanvas from "./GlobalCanvas";
import { AnimatePresence } from "framer-motion";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  // Manage body scroll boundaries during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && <GlobalCanvas />}
      <div className={loading ? "h-screen overflow-hidden opacity-0" : "opacity-100 transition-opacity duration-700"}>
        {children}
      </div>
    </>
  );
}
