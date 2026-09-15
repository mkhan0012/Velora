"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PrivateClientSection() {
  return (
    <section className="bg-charcoal text-white py-32 md:py-40 relative overflow-hidden">
      {/* Subtle background abstract shape */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-deep-charcoal/30 rounded-bl-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-bronze block"></span>
              <span className="text-[10px] uppercase tracking-widest text-bronze font-bold">Exclusive Service</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              Velora Private Client
            </h2>
            
            <p className="text-white/70 text-sm leading-relaxed max-w-md mb-10 font-light">
              For our most discerning buyers, we offer an off-market acquisition service. Gain access to extraordinary properties before they are publicly listed, with absolute discretion and personalized advisory.
            </p>
            
            <Link 
              href="/private-client" 
              className="inline-flex items-center gap-6 group"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold pb-1 border-b border-white/30 group-hover:border-white transition-colors">
                Apply for Access
              </span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-charcoal transition-all duration-300">
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square w-full max-w-md ml-auto bg-deep-charcoal overflow-hidden group" data-cursor="view">
              <Image 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
                alt="Private Client Service"
                fill
                className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/50 mb-2">Members Only</p>
                <p className="font-display text-xl text-white">Bespoke Advisory</p>
              </div>
            </div>
            
            {/* Floating element to break the grid */}
            <motion.div 
              className="hidden md:flex absolute -left-16 bottom-16 bg-ivory text-charcoal p-8 flex-col gap-2 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-[28px] font-display">24/7</span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-charcoal/50">Dedicated Concierge</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
