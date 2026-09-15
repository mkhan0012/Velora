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
    <section className="py-24 md:py-32 bg-ivory relative border-b border-charcoal/10">
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

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const params = new URLSearchParams();
            
            const q = formData.get("q") as string;
            if (q) params.set("q", q);
            
            const type = formData.get("type") as string;
            if (type && type !== "Any type") params.set("type", type);
            
            const budget = formData.get("budget") as string;
            if (budget && budget !== "Any budget") params.set("price", budget);
            
            const beds = formData.get("beds") as string;
            if (beds && beds !== "Any") {
               params.set("beds", beds.replace("+", ""));
            }
            
            if (activeTab) params.set("purpose", activeTab);

            router.push(`/properties?${params.toString()}`);
          }}
          className="flex flex-col lg:flex-row bg-white/50 backdrop-blur-md border border-charcoal/10"
        >
          {/* Location */}
          <div className="flex-1 p-8 lg:border-r border-charcoal/10 relative group cursor-pointer hover:bg-white/80 transition-colors">
            <div className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50 font-bold mb-3">Location</div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-bronze" strokeWidth={1.5} />
              <input 
                name="q"
                type="text" 
                placeholder="Where do you want to live?" 
                className="bg-transparent border-none outline-none text-sm font-medium w-full text-charcoal placeholder:text-charcoal/40"
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="flex-1 p-8 lg:border-r border-b lg:border-b-0 border-t lg:border-t-0 border-charcoal/10 relative group cursor-pointer hover:bg-white/80 transition-colors flex justify-between items-end">
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50 font-bold mb-3">Property Type</div>
              <select name="type" className="bg-transparent border-none outline-none text-[15px] font-medium text-charcoal cursor-pointer appearance-none">
                <option>Any type</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Penthouse</option>
                <option>Plot</option>
                <option>Estate</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-charcoal/40 mb-1 group-hover:text-bronze transition-colors" />
          </div>

          {/* Budget */}
          <div className="flex-1 p-8 lg:border-r border-b lg:border-b-0 border-charcoal/10 relative group cursor-pointer hover:bg-white/80 transition-colors flex justify-between items-end">
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50 font-bold mb-3">Budget</div>
              <select name="budget" className="bg-transparent border-none outline-none text-[15px] font-medium text-charcoal cursor-pointer appearance-none">
                <option>Any budget</option>
                <option>Under ₹5 Cr</option>
                <option>₹5 Cr - ₹10 Cr</option>
                <option>₹10 Cr - ₹15 Cr</option>
                <option>Above ₹15 Cr</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-charcoal/40 mb-1 group-hover:text-bronze transition-colors" />
          </div>

          {/* Bedrooms */}
          <div className="flex-1 p-8 relative group cursor-pointer hover:bg-white/80 transition-colors flex justify-between items-end">
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50 font-bold mb-3">Bedrooms</div>
              <select name="beds" className="bg-transparent border-none outline-none text-[15px] font-medium text-charcoal cursor-pointer appearance-none">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-charcoal/40 mb-1 group-hover:text-bronze transition-colors" />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="bg-bronze text-white px-12 py-8 lg:py-0 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-charcoal transition-all duration-500 flex items-center justify-center gap-4 group"
          >
            <span className="relative z-10">Search</span>
            <ArrowRight size={14} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500" strokeWidth={2} />
          </button>
        </motion.form>
        
      </div>
    </section>
  );
}
