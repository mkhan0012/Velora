"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<"default" | "view" | "explore">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look up the DOM tree for our custom data attributes
      const viewElement = target.closest('[data-cursor="view"]');
      const exploreElement = target.closest('[data-cursor="explore"]');
      
      if (viewElement) {
        setCursorType("view");
      } else if (exploreElement) {
        setCursorType("explore");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      backgroundColor: "var(--color-charcoal)",
      mixBlendMode: "difference" as const,
      color: "transparent",
    },
    view: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "var(--color-ivory)",
      mixBlendMode: "normal" as const,
      color: "var(--color-charcoal)",
    },
    explore: {
      x: mousePosition.x - 48,
      y: mousePosition.y - 48,
      width: 96,
      height: 96,
      backgroundColor: "var(--color-ivory)",
      mixBlendMode: "normal" as const,
      color: "var(--color-charcoal)",
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-[10px] font-medium tracking-widest uppercase font-sans shadow-sm"
      variants={variants}
      animate={cursorType}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 28,
        mass: 0.5
      }}
    >
      {cursorType === "view" && "VIEW"}
      {cursorType === "explore" && "EXPLORE \u2192"}
    </motion.div>
  );
}
