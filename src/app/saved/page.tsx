"use client";

import { useSavedProperties } from "@/hooks/useSavedProperties";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/ui/PropertyCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SavedPage() {
  const { savedIds, isLoaded, toggleSaved } = useSavedProperties();

  if (!isLoaded) return <div className="min-h-screen bg-ivory pt-32 pb-24" />;

  const savedProperties = properties.filter(p => savedIds.includes(p.id));

  return (
    <div className="bg-ivory min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-charcoal/10 pb-8"
        >
          <span className="text-[10px] uppercase tracking-widest text-warm-gray mb-4 block">
            Your Collection
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-light text-charcoal">
            Residences you've chosen to keep close.
          </h1>
        </motion.div>

        {savedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {savedProperties.map(property => (
              <motion.div 
                key={property.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group flex flex-col"
              >
                <Link href={`/properties/${property.id}`} className="block relative aspect-[4/3] bg-stone mb-6 overflow-hidden">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]" />
                </Link>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-charcoal">{property.title}</h3>
                  <button 
                    onClick={() => toggleSaved(property.id)}
                    className="text-[9px] uppercase tracking-widest text-warm-gray hover:text-charcoal border-b border-transparent hover:border-charcoal transition-colors"
                  >
                    Remove
                  </button>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-warm-gray mb-4">
                  {property.location}
                </div>
                <div className="flex justify-between items-center border-t border-charcoal/10 pt-4 mt-auto">
                  <span className="font-medium text-charcoal">{property.price}</span>
                  <Link href={`/properties/${property.id}`} className="text-[10px] uppercase tracking-widest text-bronze hover:text-charcoal transition-colors flex items-center gap-2">
                    View Residence <span className="text-[14px]">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-32 flex flex-col items-center justify-center text-center">
            <h3 className="font-display text-3xl mb-4 text-charcoal">Your collection is waiting.</h3>
            <p className="text-warm-gray mb-10 max-w-sm">
              Explore our portfolio and save the residences that inspire you to keep them here for easy access.
            </p>
            <Link 
              href="/properties"
              className="border border-charcoal text-charcoal px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-charcoal hover:text-white transition-colors"
            >
              Explore Residences →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
