"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function MagneticButton({ 
  children, 
  className = "",
  onClick
}: { 
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  
  // Springs for smooth, physics-based movement
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center of element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // The "pull" strength
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * 0.3); // 0.3 is the magnetic strength
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
