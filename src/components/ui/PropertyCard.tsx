"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Property } from "@/data/properties";
import { useSavedProperties } from "@/hooks/useSavedProperties";

export default function PropertyCard({ property, className = "" }: { property: Property; className?: string }) {
  const { isSaved, toggleSaved, isLoaded } = useSavedProperties();
  const saved = isLoaded ? isSaved(property.id) : false;

  return (
    <div className={`group flex flex-col ${className}`}>
      <div className="relative overflow-hidden mb-6 bg-stone aspect-[4/5] md:aspect-[3/4]" data-cursor="explore">
        <Link href={`/properties/${property.id}`} className="block w-full h-full">
          <Image 
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </Link>
        
        <div className="absolute top-5 left-5 z-10 pointer-events-none">
          <span className="bg-white/95 text-charcoal backdrop-blur-md px-4 py-2 text-[8px] uppercase tracking-[0.3em] font-bold">
            {property.type}
          </span>
        </div>
        
        <button 
          onClick={(e) => { e.preventDefault(); toggleSaved(property.id); }}
          className="absolute top-5 right-5 z-20 text-white hover:scale-110 transition-all p-2 bg-charcoal/20 hover:bg-charcoal/40 backdrop-blur-md rounded-full"
          aria-label={saved ? "Remove from saved" : "Save property"}
        >
          <Heart size={16} strokeWidth={1.5} className={`transition-colors ${saved ? "fill-white text-white" : ""}`} />
        </button>
      </div>

      <Link href={`/properties/${property.id}`} className="block flex-grow group/text">
        <div className="flex justify-between items-start">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-display text-[24px] font-light text-charcoal tracking-tight group-hover/text:text-bronze transition-colors duration-300 transform group-hover/text:translate-x-1">{property.title}</h3>
              <div className="w-8 h-8 rounded-full border border-charcoal/10 flex items-center justify-center opacity-0 -translate-x-4 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover/text:opacity-100 group-hover/text:translate-x-0 group-hover/text:bg-charcoal">
                <ArrowRight size={12} className="text-charcoal group-hover/text:text-white" />
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50 font-bold mb-4">{property.location}</p>
            
            <div className="flex items-center gap-3 text-[9px] text-charcoal/70 font-bold tracking-[0.2em] mb-5 uppercase">
              {property.type !== 'Plot' && (
                <>
                  <span>{property.bedrooms} Beds</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-charcoal/20" />
                  <span>{property.bathrooms} Baths</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-charcoal/20" />
                </>
              )}
              <span>{property.area}</span>
            </div>
            <span className="font-sans text-[16px] font-semibold tracking-wide text-charcoal">{property.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
