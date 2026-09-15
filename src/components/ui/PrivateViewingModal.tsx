"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Property } from "@/data/properties";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  property: Property;
}

export default function PrivateViewingModal({ isOpen, onClose, property }: Props) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 bg-ivory w-full md:w-[600px] md:max-h-[90vh] overflow-y-auto md:rounded-sm flex flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center p-6 md:p-10 border-b border-charcoal/10 sticky top-0 bg-ivory/95 backdrop-blur-sm z-10">
              <div>
                <span className="text-[9px] uppercase tracking-widest font-semibold text-warm-gray mb-1 block">
                  Private Viewing
                </span>
                <h3 className="font-display text-2xl text-charcoal">{property.title}</h3>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-charcoal/5 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} className="text-charcoal" />
              </button>
            </div>

            <div className="p-6 md:p-10">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-6 text-bronze">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h4 className="font-display text-3xl mb-4">Request Received</h4>
                  <p className="text-warm-gray mb-10 max-w-sm">
                    Thank you. A Velora private client advisor will contact you shortly to confirm your viewing for {property.title}.
                  </p>
                  <button 
                    onClick={onClose}
                    className="border border-charcoal text-charcoal px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-charcoal hover:text-white transition-colors"
                  >
                    Return to Residence
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-charcoal/60">Preferred Date</label>
                      <input 
                        type="date" 
                        required
                        className="border-b border-charcoal/20 bg-transparent py-3 outline-none focus:border-bronze transition-colors text-charcoal font-medium" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-charcoal/60">Preferred Time</label>
                      <select className="border-b border-charcoal/20 bg-transparent py-3 outline-none focus:border-bronze transition-colors text-charcoal font-medium appearance-none">
                        <option>Morning (9AM - 12PM)</option>
                        <option>Afternoon (12PM - 4PM)</option>
                        <option>Evening (4PM - 7PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-charcoal/60">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      className="border-b border-charcoal/20 bg-transparent py-3 outline-none focus:border-bronze transition-colors text-charcoal font-medium placeholder:text-charcoal/30" 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-charcoal/60">Phone</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98765 43210"
                        className="border-b border-charcoal/20 bg-transparent py-3 outline-none focus:border-bronze transition-colors text-charcoal font-medium placeholder:text-charcoal/30" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-charcoal/60">Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="jane@example.com"
                        className="border-b border-charcoal/20 bg-transparent py-3 outline-none focus:border-bronze transition-colors text-charcoal font-medium placeholder:text-charcoal/30" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mb-4">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-charcoal/60">Message (Optional)</label>
                    <textarea 
                      rows={3}
                      placeholder="Any specific requirements..."
                      className="border-b border-charcoal/20 bg-transparent py-3 outline-none focus:border-bronze transition-colors text-charcoal font-medium placeholder:text-charcoal/30 resize-none" 
                    />
                  </div>

                  <button 
                    type="submit"
                    className="bg-bronze text-white py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-charcoal transition-all duration-500 flex items-center justify-center gap-4 group w-full mt-2"
                  >
                    Request Private Viewing
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
