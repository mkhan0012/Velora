"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/properties");
  };

  return (
    <section className="py-20 bg-[#EFECE6] border-b border-stone/50">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-10">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-3 block">Discover</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal">
              Find a place<br />that feels like you.
            </h2>
          </div>
          
          <div className="flex border border-stone/60 p-1 w-full sm:w-auto self-start lg:self-end">
            <button 
              className={`flex-1 sm:flex-none px-8 py-3 text-[11px] uppercase tracking-widest font-semibold transition-colors ${activeTab === "buy" ? "bg-bronze text-white" : "text-charcoal hover:bg-stone/50"}`}
              onClick={() => setActiveTab("buy")}
            >
              Buy
            </button>
            <button 
              className={`flex-1 sm:flex-none px-8 py-3 text-[11px] uppercase tracking-widest font-semibold transition-colors ${activeTab === "rent" ? "bg-bronze text-white" : "text-charcoal hover:bg-stone/50"}`}
              onClick={() => setActiveTab("rent")}
            >
              Rent
            </button>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSearch}
          className="flex flex-col lg:flex-row bg-white/40 border border-stone/50 shadow-sm"
        >
          {/* Location */}
          <div className="flex-1 p-6 lg:border-r border-stone/50 relative group cursor-pointer hover:bg-white/60 transition-colors">
            <div className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-2">Location</div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-charcoal" />
              <input 
                type="text" 
                placeholder="Where do you want to live?" 
                className="bg-transparent border-none outline-none text-sm font-medium w-full text-charcoal placeholder:text-charcoal/60"
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="flex-1 p-6 lg:border-r border-b lg:border-b-0 border-t lg:border-t-0 border-stone/50 relative group cursor-pointer hover:bg-white/60 transition-colors flex justify-between items-end">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-2">Property Type</div>
              <select className="bg-transparent border-none outline-none text-sm font-medium text-charcoal cursor-pointer appearance-none">
                <option>Any type</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Penthouse</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-warm-gray mb-1" />
          </div>

          {/* Budget */}
          <div className="flex-1 p-6 lg:border-r border-b lg:border-b-0 border-stone/50 relative group cursor-pointer hover:bg-white/60 transition-colors flex justify-between items-end">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-2">Budget</div>
              <select className="bg-transparent border-none outline-none text-sm font-medium text-charcoal cursor-pointer appearance-none">
                <option>₹50L - ₹20Cr+</option>
                <option>Under ₹5 Cr</option>
                <option>₹5 Cr - ₹10 Cr</option>
                <option>Above ₹10 Cr</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-warm-gray mb-1" />
          </div>

          {/* Bedrooms */}
          <div className="flex-1 p-6 relative group cursor-pointer hover:bg-white/60 transition-colors flex justify-between items-end">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-2">Bedrooms</div>
              <select className="bg-transparent border-none outline-none text-sm font-medium text-charcoal cursor-pointer appearance-none">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-warm-gray mb-1" />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="bg-bronze text-white px-10 py-6 lg:py-0 text-[11px] uppercase tracking-widest hover:bg-charcoal transition-colors flex items-center justify-center gap-3 group"
          >
            Search Properties
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
        
      </div>
    </section>
  );
}
