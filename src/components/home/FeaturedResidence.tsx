"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FeaturedResidence() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 md:py-40 bg-ivory text-charcoal overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-7 relative h-[65vh] md:h-[80vh] w-full overflow-hidden group" data-cursor="explore">
            <motion.div 
              className="w-full h-full relative origin-bottom"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-20%" }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
                alt="Villa No. 07, Alibaug" 
                fill
                className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
              />
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-charcoal/30"></div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-charcoal/70 font-semibold">
                  Featured Residence
                </div>
              </div>
              
              <h2 className="font-display text-6xl md:text-[5rem] font-light mb-6 tracking-tighter leading-none">
                Villa <span className="italic text-charcoal/80">No. 07</span>
              </h2>
              
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] mb-10 text-charcoal/80 font-medium">
                <MapPin size={14} className="text-bronze" strokeWidth={1.5} />
                Alibaug, Maharashtra
              </div>
              
              <p className="text-charcoal/70 leading-[1.8] mb-16 max-w-md font-light text-[14px] md:text-[15px] tracking-wide">
                A contemporary coastal residence where sculptural architecture meets expansive views and quiet living. Every detail has been meticulously crafted for an unparalleled lifestyle.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-14 border-t border-b border-charcoal/10 py-10">
                <div className="flex flex-col gap-2 pr-4 md:pr-0">
                  <span className="font-sans text-3xl font-light text-charcoal tracking-tighter">4</span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-charcoal/50 font-semibold">Bedrooms</span>
                </div>
                <div className="flex flex-col gap-2 pl-4 md:border-l border-charcoal/10 md:pl-8">
                  <span className="font-sans text-3xl font-light text-charcoal tracking-tighter">5</span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-charcoal/50 font-semibold">Bathrooms</span>
                </div>
                <div className="flex flex-col gap-2 pr-4 md:pr-0 md:border-l border-charcoal/10 md:pl-8 pt-6 md:pt-0 border-t md:border-none border-charcoal/10">
                  <span className="font-sans text-3xl font-light text-charcoal tracking-tighter">4.8k</span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-charcoal/50 font-semibold">sq.ft</span>
                </div>
                <div className="flex flex-col gap-2 pl-4 md:border-l border-charcoal/10 md:pl-8 pt-6 md:pt-0 border-t border-l md:border-t-0 border-charcoal/10">
                  <span className="font-sans text-3xl font-light text-charcoal tracking-tighter">8.75<span className="text-xl">cr</span></span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-charcoal/50 font-semibold">Price</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <Link 
                  href="/properties/villa-no-07" 
                  className="group relative overflow-hidden bg-charcoal text-white px-10 py-4 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-4 w-full sm:w-auto hover:bg-bronze"
                >
                  <span className="relative z-10 font-semibold">Discover</span>
                  <ArrowRight size={14} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500" />
                </Link>
                <button className="group border border-charcoal/20 px-10 py-4 w-full sm:w-auto flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] hover:border-charcoal transition-all duration-500 font-semibold text-charcoal/80">
                  <Heart size={14} strokeWidth={1.5} className="group-hover:fill-charcoal group-hover:text-charcoal transition-colors duration-500" /> Save
                </button>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
