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
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </Link>
        
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-widest font-semibold text-charcoal">
            For Sale
          </span>
        </div>
        
        <button 
          onClick={(e) => { e.preventDefault(); toggleSaved(property.id); }}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full text-charcoal hover:bg-bronze hover:text-white transition-colors"
          aria-label={saved ? "Remove from saved" : "Save property"}
        >
          <Heart size={14} strokeWidth={2} className={saved ? "fill-current" : ""} />
        </button>
      </div>

      <Link href={`/properties/${property.id}`} className="block">
        <div className="flex justify-between items-start transition-transform duration-500 ease-out group-hover:-translate-y-2">
          <div className="flex flex-col">
            <h3 className="font-display text-2xl mb-1">{property.title}</h3>
            <p className="text-sm text-warm-gray uppercase tracking-wider mb-3">{property.location}</p>
            <div className="flex items-center gap-4 text-xs text-charcoal/80">
              <span>{property.bedrooms} Beds</span>
              <span className="w-[3px] h-[3px] rounded-full bg-bronze/50" />
              <span>{property.bathrooms} Baths</span>
              <span className="w-[3px] h-[3px] rounded-full bg-bronze/50" />
              <span>{property.area}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-3">
            <span className="font-sans text-sm font-semibold">{property.price}</span>
            <div className="w-8 h-8 rounded-full border border-stone flex items-center justify-center opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <ArrowRight size={14} className="text-bronze" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
