"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LifestyleSection() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        data-cursor="view"
      />
      <div className="absolute inset-0 bg-charcoal/30" />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-light mb-6"
        >
          More than a home.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-light mb-10 max-w-lg text-ivory/90"
        >
          A place to create memories, slow down and live beautifully.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            href="/about" 
            className="bg-white text-charcoal px-8 py-4 text-[11px] uppercase tracking-widest hover:bg-bronze hover:text-white transition-colors flex items-center gap-3 group"
          >
            Discover the Velora Lifestyle
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
