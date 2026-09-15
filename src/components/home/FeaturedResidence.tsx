"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FeaturedResidence() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-ivory text-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Image */}
          <div className="lg:col-span-7 relative h-[60vh] md:h-[70vh] w-full overflow-hidden" data-cursor="explore">
            <motion.div 
              className="w-full h-full relative"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Image 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
                alt="Villa No. 07, Alibaug" 
                fill
                className="object-cover transition-transform duration-1000 ease-out"
                style={{ transform: isHovered ? "scale(1.03)" : "scale(1)" }}
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-5 relative pt-4 md:pt-12">
            <div className="absolute top-0 right-0 font-display text-4xl text-stone select-none hidden md:block">
              01<span className="text-xl">/03</span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-6">
                Featured Residence
              </div>
              
              <h2 className="font-display text-5xl md:text-6xl font-light mb-4">
                Villa No. 07
              </h2>
              
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider mb-8 text-charcoal font-semibold">
                <MapPin size={14} className="text-warm-gray" strokeWidth={2} />
                Alibaug, Maharashtra
              </div>
              
              <p className="text-warm-gray leading-relaxed mb-12 max-w-md font-light text-sm md:text-base">
                A contemporary coastal residence where sculptural architecture meets expansive views and quiet living.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 mb-12 border-t border-b border-stone/50 py-8">
                <div className="flex flex-col gap-1 pr-4 md:pr-0">
                  <span className="font-sans text-2xl font-light">4</span>
                  <span className="text-[10px] uppercase tracking-widest text-warm-gray font-medium">Bedrooms</span>
                </div>
                <div className="flex flex-col gap-1 pl-4 md:border-l border-stone/50 md:pl-6">
                  <span className="font-sans text-2xl font-light">5</span>
                  <span className="text-[10px] uppercase tracking-widest text-warm-gray font-medium">Bathrooms</span>
                </div>
                <div className="flex flex-col gap-1 pr-4 md:pr-0 md:border-l border-stone/50 md:pl-6 pt-4 md:pt-0 border-t md:border-none border-stone/50">
                  <span className="font-sans text-2xl font-light">4,800</span>
                  <span className="text-[10px] uppercase tracking-widest text-warm-gray font-medium">sq.ft</span>
                </div>
                <div className="flex flex-col gap-1 pl-4 md:border-l border-stone/50 md:pl-6 pt-4 md:pt-0 border-t border-l md:border-t-0 border-stone/50">
                  <span className="font-sans text-2xl font-light">₹8.75 Cr</span>
                  <span className="text-[10px] uppercase tracking-widest text-warm-gray font-medium">Price</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  href="/properties/villa-no-07" 
                  className="bg-bronze text-white px-8 py-4 text-[11px] uppercase tracking-widest hover:bg-charcoal transition-colors flex items-center justify-center gap-4 group w-full sm:w-auto"
                >
                  Discover Residence
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border border-stone px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-3 text-[11px] uppercase tracking-widest hover:border-charcoal hover:bg-white transition-colors">
                  <Heart size={14} strokeWidth={1.5} /> Save Property
                </button>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
