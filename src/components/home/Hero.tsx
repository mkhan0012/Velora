"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const heroImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", // Sunset
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", // Morning
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop", // Day
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"  // Night
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Optional auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-deep-charcoal flex items-center"
    >
      {/* Background Image Carousel */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 w-full h-full" data-cursor="view">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={heroImages[currentIndex]}
                alt={`Hero Background ${currentIndex + 1}`}
                fill
                priority={currentIndex === 0}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/80 via-charcoal/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-transparent to-transparent z-10" />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row justify-between items-end w-full h-full pb-24">
          
          {/* Main Content (Left) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-white pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ivory/90 mb-4"
            >
              Velora Estates
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] mb-6 tracking-tight"
            >
              Spaces that<br />
              speak for<br />
              themselves.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-ivory/90 max-w-sm text-sm font-light leading-relaxed mb-10"
            >
              Curating exceptional residences for those who appreciate architecture, place and possibility.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link 
                href="/properties" 
                className="bg-bronze text-white px-8 py-3.5 text-[11px] uppercase tracking-widest hover:bg-white hover:text-bronze transition-all duration-300 flex items-center justify-center sm:justify-start gap-4 group"
              >
                Explore Residences
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/locations" 
                className="border border-white/40 text-white px-8 py-3.5 text-[11px] uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300 text-center"
              >
                View Locations
              </Link>
            </motion.div>
          </div>

          {/* Right Metadata & Controls */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden lg:flex flex-col items-end text-white text-right"
          >
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-widest text-ivory/70 font-semibold">Curated Residences</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Mumbai · Goa · Delhi · Bengaluru</span>
            </div>
            
            <div className="flex items-center gap-4 border-t border-white/20 pt-4 w-64 justify-end">
              <div className="text-[10px] font-medium tracking-widest mr-4 text-ivory/60">
                0{currentIndex + 1} / 0{heroImages.length}
              </div>
              <MagneticButton 
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-charcoal transition-colors z-20"
              >
                <ArrowLeft size={12} />
              </MagneticButton>
              <MagneticButton 
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-charcoal transition-colors z-20"
              >
                <ArrowRight size={12} />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4"
        >
          <div className="w-8 h-[1px] bg-white/30 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-white h-full"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-ivory/70">Scroll to discover</span>
        </motion.div>
      </div>
    </div>
  );
}
