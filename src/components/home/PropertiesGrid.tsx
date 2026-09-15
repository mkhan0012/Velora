"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { properties } from "@/data/properties";

export default function PropertiesGrid() {
  const displayProperties = properties.slice(0, 4);

  return (
    <section className="py-24 bg-[#EFECE6]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-3 block">Curated Residences</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal">
              Exceptional homes.<br />Remarkable lives.
            </h2>
          </div>
          
          <Link 
            href="/properties" 
            className="flex items-center gap-3 text-[11px] uppercase tracking-widest font-semibold text-charcoal hover:text-bronze transition-colors group"
          >
            View All Properties <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative overflow-hidden mb-5 bg-stone aspect-[4/3] w-full" data-cursor="explore">
                <Link href={`/properties/${property.id}`} className="block w-full h-full">
                  <Image 
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </Link>
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-charcoal/80 text-white backdrop-blur-sm px-3 py-1.5 text-[9px] uppercase tracking-widest font-semibold">
                    For Sale
                  </span>
                </div>
                
                <button 
                  className="absolute top-4 right-4 z-10 text-white hover:text-bronze transition-colors"
                  aria-label="Save property"
                >
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>

              <Link href={`/properties/${property.id}`} className="block flex-grow">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-sans text-[15px] font-semibold text-charcoal">{property.title}</h3>
                      <ArrowRight size={14} className="text-charcoal opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                    <p className="text-xs text-warm-gray mb-2">{property.location}</p>
                    <span className="font-sans text-[15px] font-semibold mb-3">{property.price}</span>
                    <div className="flex items-center gap-2 text-[11px] text-warm-gray font-medium">
                      <span>{property.bedrooms} Beds</span>
                      <span className="w-1 h-1 rounded-full bg-stone" />
                      <span>{property.bathrooms} Baths</span>
                      <span className="w-1 h-1 rounded-full bg-stone" />
                      <span>{property.area}</span>
                    </div>
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
