"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Don't animate the homepage on subsequent visits if we want it to feel instantaneous, 
  // but for a premium feel, animating every route is usually nice.
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for that "Apple/Premium" feel
      }}
    >
      {children}
    </motion.div>
  );
}
