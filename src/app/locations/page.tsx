"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const locationData = [
  {
    name: "Mumbai",
    desc: "Vertical living redefined. Skyline views and unmatched city energy.",
    count: 14,
    img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1965&auto=format&fit=crop"
  },
  {
    name: "Goa",
    desc: "Tropical modernism. Coastal retreats designed for slow living.",
    count: 8,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Delhi",
    desc: "Expansive estates that blend heritage with contemporary luxury.",
    count: 11,
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Bengaluru",
    desc: "Nature-integrated homes in India's garden city.",
    count: 9,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Alibaug",
    desc: "Sculptural architecture meets expansive coastal views.",
    count: 5,
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
  },
  {
    name: "Hyderabad",
    desc: "Modern palaces and hilltop residences overlooking the city.",
    count: 7,
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function LocationsPage() {
  return (
    <div className="bg-ivory min-h-screen">
      
      {/* Hero */}
      <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-charcoal/40" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6">Live somewhere<br />remarkable.</h1>
        </motion.div>
      </div>

      {/* Locations Grid */}
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {locationData.map((loc, index) => (
            <motion.div 
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/properties?location=${loc.name}`} className="group block">
                <div className="relative h-[400px] md:h-[500px] w-full mb-6 overflow-hidden bg-stone" data-cursor="explore">
                  <Image 
                    src={loc.img} 
                    alt={loc.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                    <div className="text-white">
                      <h2 className="font-display text-4xl mb-2">{loc.name}</h2>
                      <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-out">
                        <p className="text-sm text-ivory/80 font-light translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          {loc.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-charcoal">
                  <span className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">
                    {loc.count} Residences
                  </span>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold group-hover:text-bronze transition-colors">
                    Explore <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
