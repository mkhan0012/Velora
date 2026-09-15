"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-ivory min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32 max-w-4xl"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1.1]">
            We believe a home<br />should feel inevitable.
          </h1>
          <p className="text-xl md:text-2xl text-warm-gray font-light max-w-2xl leading-relaxed">
            Velora curates exceptional real-estate experiences by bringing together architecture, location and lifestyle.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 md:mb-32">
          <div className="relative h-[60vh] md:h-[80vh] w-full bg-stone" data-cursor="view">
            <Image 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
              alt="Architecture Detail" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative h-[40vh] md:h-[60vh] w-full bg-stone self-end" data-cursor="view">
            <Image 
              src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop" 
              alt="Interior Detail" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-xs uppercase tracking-widest text-warm-gray mb-4 sticky top-32">Our Philosophy</h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="font-display text-3xl md:text-4xl leading-snug font-light mb-6">
              True luxury is quiet. It doesn't shout. It is found in the perfect alignment of space, light, and material.
            </h3>
            <p className="text-warm-gray leading-relaxed mb-8">
              We represent properties that transcend simple accommodation. Every residence in our portfolio has been selected for its architectural merit, its connection to the surrounding environment, and its ability to offer a deeply considered living experience. We believe that the spaces we inhabit shape our daily lives in profound ways.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-xs uppercase tracking-widest text-warm-gray mb-4 sticky top-32">Our Approach</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-warm-gray leading-relaxed mb-8">
              We act as curators rather than traditional brokers. Our team works closely with leading architects, designers, and developers to identify and present homes that represent the pinnacle of contemporary living. We offer our clients a highly discreet, consultative service tailored to their specific lifestyle requirements.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              From initial discovery to final handover, our process is defined by transparency, rigorous attention to detail, and a deep understanding of the premium property market.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-deep-charcoal text-white -mx-6 md:-mx-12 px-6 md:px-12 py-24 md:py-32">
          <div className="container mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-ivory/60 mb-16 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div>
                <span className="font-display text-5xl text-bronze block mb-6">01</span>
                <h3 className="text-sm uppercase tracking-widest mb-4">Curatorial Excellence</h3>
                <p className="text-ivory/70 text-sm leading-relaxed">We say no to most properties. The residences we represent must meet our uncompromising standards for design and livability.</p>
              </div>
              <div>
                <span className="font-display text-5xl text-bronze block mb-6">02</span>
                <h3 className="text-sm uppercase tracking-widest mb-4">Discreet Service</h3>
                <p className="text-ivory/70 text-sm leading-relaxed">We understand the value of privacy. Our client relationships are built on absolute discretion and trust.</p>
              </div>
              <div>
                <span className="font-display text-5xl text-bronze block mb-6">03</span>
                <h3 className="text-sm uppercase tracking-widest mb-4">Architectural Integrity</h3>
                <p className="text-ivory/70 text-sm leading-relaxed">We champion spaces that respect their context, employ authentic materials, and elevate the standard of residential design.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
