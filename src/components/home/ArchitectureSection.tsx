"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ArchitectureSection() {
  return (
    <section className="py-24 md:py-0 bg-[#121312] text-white">
      <div className="container mx-auto px-6 md:px-12 h-full">
        <div className="flex flex-col md:flex-row items-center md:h-[80vh]">
          
          {/* Left Content */}
          <div className="w-full md:w-5/12 pr-0 md:pr-12 lg:pr-24 py-12 md:py-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-widest text-ivory/60 font-semibold mb-6 block">Our Philosophy</span>
              <h2 className="font-display text-4xl lg:text-5xl font-light leading-[1.1] mb-6">
                Architecture isn't just<br />
                what surrounds us.
              </h2>
              <p className="text-ivory/80 text-sm font-light mb-10 max-w-sm leading-relaxed">
                It shapes how we live.
              </p>
              <Link 
                href="/about" 
                className="border border-white/30 text-white px-8 py-3.5 text-[11px] uppercase tracking-widest hover:bg-white hover:text-charcoal transition-colors inline-flex items-center gap-4 group"
              >
                Explore Our Philosophy
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-7/12 h-[50vh] md:h-full relative mt-12 md:mt-0" data-cursor="view">
            <Image 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
              alt="Architecture Detail" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#121312]/20 mix-blend-multiply" />
            
            {/* Overlay Text box */}
            <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 text-[9px] uppercase tracking-[0.2em] text-white/70 font-semibold leading-loose text-right">
              "BETTER<br />
              SPACES<br />
              BRIGHTER<br />
              LIVES"
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
