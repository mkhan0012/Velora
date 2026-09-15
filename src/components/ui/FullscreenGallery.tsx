"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
}

export default function FullscreenGallery({ isOpen, onClose, images, initialIndex = 0 }: Props) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-deep-charcoal flex flex-col items-center justify-center"
        >
          {/* Header Controls */}
          <div className="absolute top-0 inset-x-0 p-6 z-50 flex items-center justify-between text-white/70">
            <span className="font-display text-sm tracking-widest">{currentIndex + 1} / {images.length}</span>
            <button 
              onClick={onClose}
              className="hover:text-white transition-colors p-2"
            >
              <X size={28} strokeWidth={1} />
            </button>
          </div>
          
          {/* Main Image Area */}
          <div className="relative w-full flex-grow flex items-center justify-center px-4 md:px-16 pb-24 md:pb-32 pt-20">
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-white transition-colors p-4"
            >
              <ChevronLeft size={40} strokeWidth={1} />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-white transition-colors p-4"
            >
              <ChevronRight size={40} strokeWidth={1} />
            </button>

            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-[90vw] h-full max-h-[75vh]"
            >
              <Image 
                src={images[currentIndex]} 
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 md:bottom-10 inset-x-0 flex justify-center px-4 z-50">
            <div className="flex gap-2 md:gap-4 overflow-x-auto no-scrollbar max-w-full pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-12 w-16 md:h-16 md:w-24 flex-shrink-0 border transition-all duration-300 ${
                    idx === currentIndex ? "border-white opacity-100" : "border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 4rem, 6rem" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
