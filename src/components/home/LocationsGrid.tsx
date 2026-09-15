"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const locationData = [
  {
    name: "MUMBAI",
    desc: "The energy of the city.",
    img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1965&auto=format&fit=crop"
  },
  {
    name: "GOA",
    desc: "Slow living, redefined.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "DELHI",
    desc: "Where heritage meets modernity.",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "BENGALURU",
    desc: "The new urban lifestyle.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function LocationsGrid() {
  return (
    <section className="py-24 bg-[#EFECE6]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-3 block">Our Locations</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal">
              Live somewhere<br />remarkable.
            </h2>
          </div>
          
          <Link 
            href="/locations" 
            className="flex items-center gap-3 text-[11px] uppercase tracking-widest font-semibold text-charcoal hover:text-bronze transition-colors group"
          >
            Explore All Locations <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locationData.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/properties?location=${loc.name}`} className="group block h-full">
                <div className="relative overflow-hidden bg-stone aspect-[16/10] w-full" data-cursor="explore">
                  <Image 
                    src={loc.img} 
                    alt={loc.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/90 via-charcoal/30 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between items-end">
                    <div className="text-white">
                      <h3 className="font-display tracking-widest text-sm mb-1 uppercase">{loc.name}</h3>
                      <p className="text-[10px] text-ivory/80 font-light">
                        {loc.desc}
                      </p>
                    </div>
                    <ArrowRight size={14} className="text-white transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
