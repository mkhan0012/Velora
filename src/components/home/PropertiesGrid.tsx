"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { properties } from "@/data/properties";

export default function PropertiesGrid() {
  const displayProperties = properties.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-[#EFEDEB]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-charcoal/30"></div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-charcoal/60 font-semibold block">Curated Portfolio</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal tracking-tighter leading-none">
              Exceptional <span className="italic text-charcoal/80">homes.</span><br />Remarkable <span className="italic text-charcoal/80">lives.</span>
            </h2>
          </div>
          
          <Link 
            href="/properties" 
            className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-charcoal hover:text-bronze transition-colors group pb-2 border-b border-charcoal/20 hover:border-bronze"
          >
            View Entire Portfolio <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {displayProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col cursor-none"
            >
              <div className="relative overflow-hidden mb-6 bg-stone aspect-[3/4] w-full" data-cursor="explore">
                <Link href={`/properties/${property.id}`} className="block w-full h-full">
                  <Image 
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                  />
                </Link>
                
                <div className="absolute top-5 left-5 z-10">
                  <span className="bg-white/90 text-charcoal backdrop-blur-md px-4 py-2 text-[8px] uppercase tracking-[0.25em] font-bold">
                    For Sale
                  </span>
                </div>
                
                <button 
                  className="absolute top-5 right-5 z-10 text-white/90 hover:text-white transition-colors p-2 bg-charcoal/10 backdrop-blur-md rounded-full"
                  aria-label="Save property"
                >
                  <Heart size={16} strokeWidth={1.5} className="group-hover:fill-white/30" />
                </button>
              </div>

              <Link href={`/properties/${property.id}`} className="block flex-grow group/text">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-display text-[22px] font-light text-charcoal tracking-tight group-hover/text:text-bronze transition-colors duration-300">{property.title}</h3>
                      <ArrowRight size={14} className="text-bronze opacity-0 -translate-x-4 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-charcoal/50 font-medium mb-4">{property.location}</p>
                    
                    <div className="flex items-center gap-3 text-[10px] text-charcoal/70 font-semibold tracking-wider mb-5 uppercase">
                      <span>{property.bedrooms} Beds</span>
                      <span className="w-[3px] h-[3px] rounded-full bg-charcoal/20" />
                      <span>{property.bathrooms} Baths</span>
                      <span className="w-[3px] h-[3px] rounded-full bg-charcoal/20" />
                      <span>{property.area}</span>
                    </div>
                    <span className="font-sans text-[15px] font-medium tracking-wide text-charcoal">{property.price}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
