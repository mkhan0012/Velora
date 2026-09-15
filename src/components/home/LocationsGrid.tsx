"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { properties } from "@/data/properties";

const locations = [
  {
    name: "Mumbai",
    img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1965&auto=format&fit=crop"
  },
  {
    name: "Goa",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Delhi",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Hyderabad",
    img: "https://images.unsplash.com/photo-1696941515998-d83f24967aca?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Bengaluru",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function LocationsGrid() {
  const [hoveredLocation, setHoveredLocation] = useState(locations[0]);

  const getLocationData = (locName: string) => {
    const locProps = properties.filter(p => p.location.toLowerCase().includes(locName.toLowerCase()));
    const count = locProps.length;
    const minPrice = count > 0 ? Math.min(...locProps.map(p => p.priceValue)) : 0;
    
    // Format min price
    let formattedPrice = "";
    if (minPrice > 0) {
      formattedPrice = `From ₹${(minPrice / 10000000).toFixed(2)} Cr`;
    }

    return { count, formattedPrice };
  };

  return (
    <section className="relative min-h-[90vh] bg-deep-charcoal text-white overflow-hidden flex items-center">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredLocation.name}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={hoveredLocation.img} 
              alt={hoveredLocation.name}
              fill
              className="object-cover opacity-60"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-24">
        
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-widest text-ivory/60 font-semibold mb-3 block">Locations</span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-white">
            Discover your<br />next destination.
          </h2>
        </div>

        <div className="flex flex-col max-w-4xl">
          {locations.map((loc) => {
            const { count, formattedPrice } = getLocationData(loc.name);
            const isHovered = hoveredLocation.name === loc.name;
            
            return (
              <Link 
                href={`/properties?location=${loc.name}`}
                key={loc.name}
                className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/20 py-8 md:py-10 transition-all hover:border-white/50 cursor-pointer"
                onMouseEnter={() => setHoveredLocation(loc)}
              >
                <div className="flex items-baseline gap-6">
                  <h3 className={`font-display text-4xl md:text-6xl transition-all duration-500 ${isHovered ? 'text-white translate-x-4 md:translate-x-8' : 'text-white/40'}`}>
                    {loc.name}
                  </h3>
                </div>

                <div className={`flex items-center gap-12 mt-6 md:mt-0 transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 md:-translate-x-8'}`}>
                  <div className="flex flex-col md:text-right hidden md:flex">
                    <span className="text-sm font-medium">{count} Residences</span>
                    {formattedPrice && <span className="text-[10px] uppercase tracking-widest text-ivory/60">{formattedPrice}</span>}
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs uppercase tracking-widest bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20 group-hover:bg-white group-hover:text-charcoal transition-colors">
                    Explore <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
