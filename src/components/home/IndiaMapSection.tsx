"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Adjusted relative coordinates for the new India location map SVG
const locations = [
  { name: "Delhi", x: "36.5%", y: "37%", count: 3 },
  { name: "Mumbai", x: "26.5%", y: "59%", count: 5 },
  { name: "Goa", x: "28.5%", y: "65.5%", count: 2 },
  { name: "Hyderabad", x: "39%", y: "62%", count: 4 },
  { name: "Bengaluru", x: "35.5%", y: "71%", count: 2 }
];

export default function IndiaMapSection() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          
          <div className="w-full md:w-5/12">
            <span className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-6 block">Our Presence</span>
            <h2 className="font-display text-4xl lg:text-5xl font-light leading-[1.1] mb-8 text-charcoal">
              Exclusive properties in India's most coveted locations.
            </h2>
            <p className="text-warm-gray text-sm font-light mb-10 max-w-sm leading-relaxed">
              From the vibrant energy of Mumbai to the serene landscapes of Goa, Velora Estates offers a curated selection of architectural masterpieces across the country.
            </p>
            
            <div className="flex flex-col gap-4">
              {locations.map((loc) => (
                <div 
                  key={loc.name}
                  className="flex justify-between items-center border-b border-charcoal/10 pb-4 cursor-pointer group"
                  onMouseEnter={() => setHoveredLocation(loc.name)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <span className={`text-sm tracking-widest uppercase transition-colors ${hoveredLocation === loc.name ? 'text-bronze font-semibold' : 'text-charcoal'}`}>
                    {loc.name}
                  </span>
                  <span className="text-warm-gray text-xs">{loc.count} Residences</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-7/12 relative aspect-square max-w-2xl mx-auto flex items-center justify-center bg-[#E5E0D6]/30 rounded-full border border-[#E5E0D6]">
            {/* Abstract Map Visualization */}
            <div className="relative w-full h-full max-w-md max-h-md" data-cursor="explore">
              <img 
                src="/india-map.svg"
                alt="Map of India"
                className="w-full h-full object-contain opacity-40 mix-blend-multiply"
              />
              
              {locations.map((loc) => {
                const isHovered = hoveredLocation === loc.name;
                return (
                  <div 
                    key={loc.name}
                    className="absolute"
                    style={{ left: loc.x, top: loc.y }}
                    onMouseEnter={() => setHoveredLocation(loc.name)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                      {/* Pulse effect */}
                      <div className={`absolute w-12 h-12 rounded-full border border-bronze transition-all duration-700 ${isHovered ? 'scale-100 opacity-20' : 'scale-50 opacity-0'}`} />
                      
                      {/* Core dot */}
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isHovered ? 'bg-bronze scale-150' : 'bg-charcoal scale-100'}`} />
                      
                      {/* Tooltip */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="absolute top-full mt-2 bg-charcoal text-white px-4 py-2 text-[10px] uppercase tracking-widest whitespace-nowrap z-10"
                          >
                            {loc.name} <span className="text-bronze ml-2">{loc.count}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
