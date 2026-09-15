"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, ChevronDown, Heart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import { useSavedProperties } from "@/hooks/useSavedProperties";
import PropertyCard from "@/components/ui/PropertyCard";

export default function SearchAndProperties() {
  const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Any type");
  const [selectedBudget, setSelectedBudget] = useState("Any budget");
  const [selectedBeds, setSelectedBeds] = useState("Any");

  const { savedIds, toggleSaved } = useSavedProperties();
  const filteredProperties = useMemo(() => {
    return properties.filter(p => {
      const matchSearch = searchTerm === "" || 
        p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchType = selectedType === "Any type" || p.type.toLowerCase() === selectedType.toLowerCase();
      
      let matchPrice = true;
      if (selectedBudget !== "Any budget") {
        if (selectedBudget === "Under ₹5 Cr") matchPrice = p.priceValue < 50000000;
        else if (selectedBudget === "₹5 Cr - ₹10 Cr") matchPrice = p.priceValue >= 50000000 && p.priceValue <= 100000000;
        else if (selectedBudget === "₹10 Cr - ₹20 Cr") matchPrice = p.priceValue > 100000000 && p.priceValue <= 200000000;
        else if (selectedBudget === "₹20 Cr+") matchPrice = p.priceValue > 200000000;
      }
      
      let matchBeds = true;
      if (selectedBeds !== "Any") {
        const beds = parseInt(selectedBeds);
        matchBeds = p.bedrooms >= beds;
      }
      
      return matchSearch && matchType && matchPrice && matchBeds;
    });
  }, [searchTerm, selectedType, selectedBudget, selectedBeds]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("Any type");
    setSelectedBudget("Any budget");
    setSelectedBeds("Any");
  };

  const hasFilters = searchTerm !== "" || selectedType !== "Any type" || selectedBudget !== "Any budget" || selectedBeds !== "Any";

  return (
    <>
      {/* SEARCH SECTION */}
      <section className="py-24 md:py-32 bg-ivory relative border-b border-charcoal/10" id="search-section">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-14">
            <div>
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-bronze font-bold block">Discover</span>
              </div>
              <h2 className="font-display text-5xl md:text-[4.5rem] font-light text-charcoal tracking-tighter leading-none">
                Find a <span className="italic font-normal text-charcoal/80">place</span><br />that feels like you.
              </h2>
            </div>
            
            <div className="flex border border-charcoal/20 p-1 w-full sm:w-auto self-start lg:self-end">
              <button 
                className={`flex-1 sm:flex-none px-10 py-4 text-[9px] uppercase tracking-[0.25em] font-bold transition-all duration-300 ${activeTab === "buy" ? "bg-charcoal text-white" : "text-charcoal/70 hover:bg-charcoal/5"}`}
                onClick={() => setActiveTab("buy")}
              >
                Buy
              </button>
              <button 
                className={`flex-1 sm:flex-none px-10 py-4 text-[9px] uppercase tracking-[0.25em] font-bold transition-all duration-300 ${activeTab === "rent" ? "bg-charcoal text-white" : "text-charcoal/70 hover:bg-charcoal/5"}`}
                onClick={() => setActiveTab("rent")}
              >
                Rent
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row bg-white/50 backdrop-blur-md border border-charcoal/10">
            {/* Location */}
            <div className="flex-1 p-8 lg:border-r border-charcoal/10 relative group cursor-text hover:bg-white/80 transition-colors">
              <div className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50 font-bold mb-3">Location</div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-bronze" strokeWidth={1.5} />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Where do you want to live?" 
                  className="bg-transparent border-none outline-none text-sm font-medium w-full text-charcoal placeholder:text-charcoal/40"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="flex-1 p-8 lg:border-r border-b lg:border-b-0 border-t lg:border-t-0 border-charcoal/10 relative group hover:bg-white/80 transition-colors flex justify-between items-end">
              <div className="w-full relative">
                <div className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50 font-bold mb-3">Property Type</div>
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-transparent border-none outline-none text-[15px] font-medium text-charcoal cursor-pointer appearance-none w-full pr-6"
                >
                  <option>Any type</option>
                  <option>Plot</option>
                  <option>House</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Penthouse</option>
                  <option>Estate</option>
                </select>
                <ChevronDown size={14} className="text-charcoal/40 absolute right-0 bottom-1 pointer-events-none group-hover:text-bronze transition-colors" />
              </div>
            </div>

            {/* Budget */}
            <div className="flex-1 p-8 lg:border-r border-b lg:border-b-0 border-charcoal/10 relative group hover:bg-white/80 transition-colors flex justify-between items-end">
              <div className="w-full relative">
                <div className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50 font-bold mb-3">Budget</div>
                <select 
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="bg-transparent border-none outline-none text-[15px] font-medium text-charcoal cursor-pointer appearance-none w-full pr-6"
                >
                  <option>Any budget</option>
                  <option>Under ₹5 Cr</option>
                  <option>₹5 Cr - ₹10 Cr</option>
                  <option>₹10 Cr - ₹20 Cr</option>
                  <option>₹20 Cr+</option>
                </select>
                <ChevronDown size={14} className="text-charcoal/40 absolute right-0 bottom-1 pointer-events-none group-hover:text-bronze transition-colors" />
              </div>
            </div>

            {/* Bedrooms */}
            <div className="flex-1 p-8 relative group hover:bg-white/80 transition-colors flex justify-between items-end">
              <div className="w-full relative">
                <div className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50 font-bold mb-3">Bedrooms</div>
                <select 
                  value={selectedBeds}
                  onChange={(e) => setSelectedBeds(e.target.value)}
                  className="bg-transparent border-none outline-none text-[15px] font-medium text-charcoal cursor-pointer appearance-none w-full pr-6"
                >
                  <option>Any</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
                <ChevronDown size={14} className="text-charcoal/40 absolute right-0 bottom-1 pointer-events-none group-hover:text-bronze transition-colors" />
              </div>
            </div>

            {/* Submit / Reset Button */}
            <button 
              onClick={() => {
                const el = document.getElementById('properties-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-bronze text-white px-12 py-8 lg:py-0 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-charcoal transition-all duration-500 flex items-center justify-center gap-4 group cursor-pointer"
            >
              <span className="relative z-10">Search Residences</span>
              <ArrowRight size={14} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500" strokeWidth={2} />
            </button>
          </div>
          
        </div>
      </section>

      {/* PROPERTIES GRID SECTION */}
      <section id="properties-grid" className="py-24 md:py-32 bg-[#EFEDEB] min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-bronze font-bold block">Curated Portfolio</span>
              </div>
              <h2 className="font-display text-5xl md:text-[4.5rem] font-light text-charcoal tracking-tighter leading-[0.9] mb-8">
                Exceptional <span className="italic font-normal text-charcoal/80">homes.</span><br />Remarkable <span className="italic font-normal text-charcoal/80">lives.</span>
              </h2>
              
              {/* Dynamic filter feedback */}
              <div className="flex items-center gap-4 mt-6">
                <span className="text-sm font-medium text-charcoal/70">
                  {filteredProperties.length} {filteredProperties.length === 1 ? 'residence' : 'residences'} matching your search
                </span>
                {hasFilters && (
                  <button 
                    onClick={clearFilters}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-bronze hover:text-charcoal transition-colors border border-bronze/30 px-3 py-1.5 rounded-full"
                  >
                    Clear all filters
                    <X size={12} />
                  </button>
                )}
              </div>
            </div>
            
            <Link 
              href="/properties" 
              className="flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-charcoal hover:text-bronze transition-colors group pb-2 border-b border-charcoal/20 hover:border-bronze"
            >
              View Entire Portfolio <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              <AnimatePresence mode="popLayout">
                {filteredProperties.slice(0, hasFilters ? undefined : 8).map((property, index) => {
                  const isSaved = savedIds.includes(property.id);
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      key={property.id}
                      className="group flex flex-col"
                    >
                      <PropertyCard property={property} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <h3 className="font-display text-4xl mb-4">No residences match your criteria.</h3>
              <p className="text-warm-gray mb-8">Try broadening your search or adjusting the filters.</p>
              <button 
                onClick={clearFilters}
                className="flex items-center gap-3 bg-charcoal text-white px-8 py-4 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-bronze transition-colors"
              >
                Clear Filters <ArrowRight size={14} />
              </button>
            </motion.div>
          )}

        </div>
      </section>
    </>
  );
}
