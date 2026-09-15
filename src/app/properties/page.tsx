"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { properties, locations, propertyTypes, priceRanges } from "@/data/properties";
import PropertyCard from "@/components/ui/PropertyCard";
import { useSearchParams, useRouter } from "next/navigation";

import { Suspense } from "react";

function PropertiesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize state from URL params or defaults
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get("location") || "All");
  const [selectedType, setSelectedType] = useState(searchParams.get("type") || "All");
  const [selectedPrice, setSelectedPrice] = useState(searchParams.get("price") || "All");
  const [selectedBeds, setSelectedBeds] = useState(searchParams.get("beds") || "All");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "Featured");
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync URL when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("q", searchTerm);
    if (selectedLocation !== "All") params.set("location", selectedLocation);
    if (selectedType !== "All") params.set("type", selectedType);
    if (selectedPrice !== "All") params.set("price", selectedPrice);
    if (selectedBeds !== "All") params.set("beds", selectedBeds);
    if (sortBy !== "Featured") params.set("sort", sortBy);

    const newUrl = params.toString() ? `/properties?${params.toString()}` : "/properties";
    router.replace(newUrl, { scroll: false });
  }, [searchTerm, selectedLocation, selectedType, selectedPrice, selectedBeds, sortBy, router]);

  const filteredProperties = useMemo(() => {
    return properties.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchLocation = selectedLocation === "All" || p.location.includes(selectedLocation);
      const matchType = selectedType === "All" || p.type === selectedType;
      
      let matchPrice = true;
      if (selectedPrice !== "All") {
        const range = priceRanges.find(r => r.label === selectedPrice);
        if (range) {
          matchPrice = p.priceValue >= range.min && p.priceValue <= range.max;
        }
      }
      
      let matchBeds = true;
      if (selectedBeds !== "All") {
        const beds = parseInt(selectedBeds);
        matchBeds = p.bedrooms >= beds;
      }
      
      return matchSearch && matchLocation && matchType && matchPrice && matchBeds;
    }).sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.priceValue - b.priceValue;
      if (sortBy === "Price: High to Low") return b.priceValue - a.priceValue;
      if (sortBy === "Newest") return (b.new ? 1 : 0) - (a.new ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); // Featured
    });
  }, [searchTerm, selectedLocation, selectedType, selectedPrice, selectedBeds, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("All");
    setSelectedType("All");
    setSelectedPrice("All");
    setSelectedBeds("All");
    setSortBy("Featured");
  };

  const activeFiltersCount = [
    selectedLocation !== "All",
    selectedType !== "All",
    selectedPrice !== "All",
    selectedBeds !== "All"
  ].filter(Boolean).length;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-ivory">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="font-display text-5xl md:text-7xl font-light mb-6">Curated Residences</h1>
          <p className="text-warm-gray text-lg max-w-xl font-light">
            Exceptional homes, selected for their architecture, location and character.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 relative"
        >
          <div className="flex items-center border-b border-charcoal/20 pb-4 focus-within:border-charcoal transition-colors">
            <Search className="text-warm-gray mr-4" size={20} />
            <input 
              type="text" 
              placeholder="Search by name or location..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-lg placeholder:text-warm-gray/60 font-light"
            />
          </div>
        </motion.div>

        {/* Filters - Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16 border border-stone bg-white/50 px-6 py-4 rounded-sm"
        >
          <div className="flex flex-wrap items-center gap-8">
            {/* Location */}
            <div className="flex flex-col gap-1">
              <label className="text-[9px] uppercase tracking-widest text-warm-gray font-semibold">Location</label>
              <select 
                value={selectedLocation} 
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-transparent text-sm outline-none cursor-pointer appearance-none pr-4 font-medium"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
            
            <div className="w-[1px] h-8 bg-stone" />

            {/* Type */}
            <div className="flex flex-col gap-1">
              <label className="text-[9px] uppercase tracking-widest text-warm-gray font-semibold">Property Type</label>
              <select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-transparent text-sm outline-none cursor-pointer appearance-none pr-4 font-medium"
              >
                {propertyTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
            
            <div className="w-[1px] h-8 bg-stone" />

            {/* Price */}
            <div className="flex flex-col gap-1">
              <label className="text-[9px] uppercase tracking-widest text-warm-gray font-semibold">Price</label>
              <select 
                value={selectedPrice} 
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="bg-transparent text-sm outline-none cursor-pointer appearance-none pr-4 font-medium"
              >
                {priceRanges.map(range => <option key={range.label} value={range.label}>{range.label}</option>)}
              </select>
            </div>
            
            <div className="w-[1px] h-8 bg-stone" />

            {/* Bedrooms */}
            <div className="flex flex-col gap-1">
              <label className="text-[9px] uppercase tracking-widest text-warm-gray font-semibold">Bedrooms</label>
              <select 
                value={selectedBeds} 
                onChange={(e) => setSelectedBeds(e.target.value)}
                className="bg-transparent text-sm outline-none cursor-pointer appearance-none pr-4 font-medium"
              >
                <option value="All">All</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {activeFiltersCount > 0 && (
              <button 
                onClick={clearFilters}
                className="text-[10px] uppercase tracking-widest text-warm-gray hover:text-charcoal transition-colors border-b border-transparent hover:border-charcoal"
              >
                Clear Filters
              </button>
            )}
            
            <div className="flex items-center gap-3 border-l border-stone pl-6">
              <label className="text-[9px] uppercase tracking-widest text-warm-gray font-semibold">Sort By</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm outline-none cursor-pointer font-medium"
              >
                <option value="Featured">Featured</option>
                <option value="Newest">Newest</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Filters - Mobile */}
        <div className="md:hidden flex justify-between items-center mb-10 border-y border-stone py-4">
          <span className="text-sm font-medium">{filteredProperties.length} residences</span>
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border border-stone px-4 py-2"
          >
            Filter <span className="bg-bronze text-white w-4 h-4 rounded-full flex items-center justify-center text-[9px]">{activeFiltersCount}</span>
          </button>
        </div>

        {/* Results Info */}
        <div className="hidden md:block mb-8 text-sm text-warm-gray">
          Showing {filteredProperties.length} exceptional {filteredProperties.length === 1 ? "residence" : "residences"}
        </div>

        {/* Property Grid - Editorial Style */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-16">
            {filteredProperties.map((property, index) => {
              let spanClass = "md:col-span-6 lg:col-span-4"; // Default
              
              const pattern = index % 5;
              if (pattern === 0) spanClass = "md:col-span-8";
              else if (pattern === 1) spanClass = "md:col-span-4";
              else if (pattern === 2) spanClass = "md:col-span-6";
              else if (pattern === 3) spanClass = "md:col-span-6";
              else if (pattern === 4) spanClass = "md:col-span-12"; 

              return (
                <PropertyCard 
                  key={property.id} 
                  property={property} 
                  className={spanClass}
                />
              );
            })}
          </div>
        ) : (
          <div className="py-24 text-center border border-dashed border-stone flex flex-col items-center">
            <h3 className="font-display text-3xl mb-4">No residences found</h3>
            <p className="text-warm-gray mb-8">Try adjusting your filters to find what you're looking for.</p>
            <button 
              onClick={clearFilters}
              className="bg-charcoal text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-bronze transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Bottom Sheet */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/40 z-50 md:hidden backdrop-blur-sm"
              onClick={() => setIsMobileFilterOpen(false)}
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full bg-white z-50 md:hidden rounded-t-2xl p-6 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-display text-2xl">Filters</h3>
                <button onClick={() => setIsMobileFilterOpen(false)} className="p-2">
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-warm-gray font-semibold">Location</label>
                  <select 
                    value={selectedLocation} 
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="border border-stone rounded-none p-3 w-full bg-transparent outline-none"
                  >
                    {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-warm-gray font-semibold">Property Type</label>
                  <select 
                    value={selectedType} 
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="border border-stone rounded-none p-3 w-full bg-transparent outline-none"
                  >
                    {propertyTypes.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-warm-gray font-semibold">Price Range</label>
                  <select 
                    value={selectedPrice} 
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="border border-stone rounded-none p-3 w-full bg-transparent outline-none"
                  >
                    {priceRanges.map(range => <option key={range.label} value={range.label}>{range.label}</option>)}
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-warm-gray font-semibold">Bedrooms</label>
                  <select 
                    value={selectedBeds} 
                    onChange={(e) => setSelectedBeds(e.target.value)}
                    className="border border-stone rounded-none p-3 w-full bg-transparent outline-none"
                  >
                    <option value="All">All</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-warm-gray font-semibold">Sort By</label>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-stone rounded-none p-3 w-full bg-transparent outline-none"
                  >
                    <option value="Featured">Featured</option>
                    <option value="Newest">Newest</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={clearFilters}
                  className="flex-1 py-4 border border-stone text-xs uppercase tracking-widest text-charcoal font-semibold"
                >
                  Clear
                </button>
                <button 
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="flex-1 py-4 bg-charcoal text-white text-xs uppercase tracking-widest font-semibold"
                >
                  Show Results
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-ivory pt-32 pb-24" />}>
      <PropertiesContent />
    </Suspense>
  );
}
