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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#111] flex items-center"
    >
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 w-full h-full origin-bottom"
      >
        <div className="absolute inset-0 w-full h-full" data-cursor="view">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row justify-between items-end w-full h-full pb-20">
          
          <div className="w-full lg:w-1/2 flex flex-col items-start text-white pt-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-bronze">
                Velora Estates
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-8xl lg:text-[7rem] font-light leading-[0.95] mb-8 tracking-tighter"
            >
              Spaces that<br />
              <span className="italic font-normal text-white/95">speak</span> for<br />
              themselves.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-ivory/70 max-w-sm text-[14px] font-light leading-relaxed mb-12 tracking-wide"
            >
              Curating exceptional residences for those who appreciate architecture, place and possibility.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center"
            >
              <Link 
                href="/properties" 
                className="group relative overflow-hidden bg-bronze border border-bronze text-white px-12 py-5 text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-white hover:border-white hover:text-charcoal flex items-center justify-center gap-4 w-full sm:w-auto"
              >
                <span className="relative z-10 font-bold">Explore Residences</span>
                <ArrowRight size={14} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500" strokeWidth={2} />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="hidden lg:flex flex-col items-end text-white text-right"
          >
            <div className="flex flex-col gap-3 mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-bronze font-medium">Curated Portfolio</span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ivory/80">Mumbai · Goa · Delhi · Bengaluru</span>
            </div>
            
            <div className="flex items-center gap-6 border-t border-white/10 pt-6 w-72 justify-end">
              <div className="text-[10px] font-medium tracking-[0.2em] mr-auto text-ivory/50">
                0{currentIndex + 1} &mdash; 0{heroImages.length}
              </div>
              <div className="flex gap-3">
                <MagneticButton 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal hover:border-white transition-all duration-500 z-20 backdrop-blur-sm bg-white/5"
                >
                  <ArrowLeft size={16} strokeWidth={1.5} />
                </MagneticButton>
                <MagneticButton 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal hover:border-white transition-all duration-500 z-20 backdrop-blur-sm bg-white/5"
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute bottom-10 left-6 md:left-12 flex items-center gap-5"
        >
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-bronze h-full origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] text-ivory/50 rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </motion.div>
      </div>
    </div>
  );
}
