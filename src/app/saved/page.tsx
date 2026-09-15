"use client";

import { useSavedProperties } from "@/hooks/useSavedProperties";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/ui/PropertyCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SavedPage() {
  const { savedIds, isLoaded } = useSavedProperties();

  if (!isLoaded) return <div className="min-h-screen bg-ivory pt-32 pb-24" />;

  const savedProperties = properties.filter(p => savedIds.includes(p.id));

  return (
    <div className="bg-ivory min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-light mb-4">Saved Residences</h1>
          <p className="text-warm-gray">You have {savedProperties.length} saved {savedProperties.length === 1 ? 'property' : 'properties'}.</p>
        </motion.div>

        {savedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-dashed border-stone flex flex-col items-center">
            <h3 className="font-display text-3xl mb-4">Your saved residences will appear here.</h3>
            <p className="text-warm-gray mb-8">Explore our collection and save the properties that inspire you.</p>
            <Link 
              href="/properties"
              className="bg-charcoal text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-bronze transition-colors"
            >
              Explore Residences
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
