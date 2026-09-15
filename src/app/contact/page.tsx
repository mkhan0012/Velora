"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-ivory min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Content */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl md:text-7xl font-light mb-8 leading-tight">Let's talk about exceptional spaces.</h1>
              <p className="text-warm-gray text-lg mb-12 max-w-md font-light">
                Whether you are looking to acquire a residence or seeking representation for your property, our team provides discreet, expert guidance.
              </p>

              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-2">General Enquiries</h3>
                  <a href="mailto:contact@veloraestates.com" className="text-xl hover:text-bronze transition-colors">contact@veloraestates.com</a>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-2">Offices</h3>
                  <p className="text-lg font-light text-charcoal">Mumbai<br />Delhi<br />Goa<br />Bengaluru</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 border border-stone">
            {!submitted ? (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onSubmit={handleSubmit} 
                className="flex flex-col gap-8"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">I am interested in</label>
                  <select required className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm text-charcoal">
                    <option value="buying">Purchasing a Residence</option>
                    <option value="selling">Selling a Residence</option>
                    <option value="renting">Renting a Residence</option>
                    <option value="other">Other Enquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">First Name</label>
                    <input required type="text" className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">Last Name</label>
                    <input required type="text" className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">Email</label>
                    <input required type="email" className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">Phone (Optional)</label>
                    <input type="tel" className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 mb-4">
                  <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">Message</label>
                  <textarea required rows={4} className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm resize-none"></textarea>
                </div>

                <button type="submit" className="bg-charcoal text-white py-4 px-8 text-xs uppercase tracking-widest hover:bg-bronze transition-colors flex justify-between items-center group w-full md:w-auto self-start">
                  Submit Enquiry 
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform ml-4" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20 h-full"
              >
                <div className="w-16 h-16 rounded-full border border-bronze flex items-center justify-center text-bronze mb-8">
                  <Check size={32} strokeWidth={1} />
                </div>
                <h2 className="font-display text-4xl mb-4">Message Received.</h2>
                <p className="text-warm-gray font-light max-w-sm">Thank you for reaching out. A Velora representative will contact you shortly.</p>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
