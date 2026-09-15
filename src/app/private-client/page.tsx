"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PrivateClientPage() {
  return (
    <div className="bg-charcoal min-h-screen text-white pt-32 pb-24 flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold mb-6 block">Private Client</span>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-8">
            Apply for Access
          </h1>
          <p className="text-white/70 font-light leading-relaxed mb-12">
            The Velora Private Client service is an exclusive, invite-only advisory for ultra-high-net-worth individuals. Please provide your details below and a dedicated concierge will contact you.
          </p>

          <form className="flex flex-col gap-8 text-left" onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you. Your application has been received.");
          }}>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/50">Full Name</label>
              <input required type="text" className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-bronze transition-colors text-white" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50">Email</label>
                <input required type="email" className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-bronze transition-colors text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50">Phone Number</label>
                <input required type="tel" className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-bronze transition-colors text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/50">Requirements (Optional)</label>
              <textarea rows={3} className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-bronze transition-colors text-white resize-none"></textarea>
            </div>

            <button type="submit" className="bg-bronze text-white py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-charcoal transition-colors mt-4 flex items-center justify-center gap-4 group">
              Submit Application
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
