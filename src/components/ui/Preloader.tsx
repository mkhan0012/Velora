"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show preloader on first visit per session
    const hasVisited = sessionStorage.getItem("velora_visited");
    
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    sessionStorage.setItem("velora_visited", "true");
    
    // Lock body scroll while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2000); // 2 seconds of loading screen
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-deep-charcoal flex items-center justify-center"
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="font-display tracking-[0.2em] text-4xl md:text-6xl font-light text-ivory"
            >
              VELORA
            </motion.div>
          </div>
          
          {/* Subtle loading line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-12 w-48 h-[1px] bg-ivory/30 origin-left"
          >
            <motion.div 
              className="h-full bg-ivory origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
