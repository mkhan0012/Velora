"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const editItems = [
  {
    num: "01",
    title: "MATERIAL",
    desc: "Stone, wood and light.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "SPACE",
    desc: "Rooms designed to breathe.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "LANDSCAPE",
    desc: "Architecture in conversation with nature.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "DETAIL",
    desc: "The beauty of considered choices.",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function VeloraEdit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section className="bg-stone relative">
      {/* Desktop Version */}
      <div className="hidden md:block" ref={containerRef} style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-20">
          <div className="container mx-auto px-6 md:px-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-light mb-4">The Velora Edit</h2>
              <p className="text-warm-gray text-sm md:text-base max-w-md">
                A closer look at the places, materials and details that define exceptional living.
              </p>
            </motion.div>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-max">
            {editItems.map((item, index) => (
              <div key={index} className="w-[60vw] md:w-[40vw] lg:w-[30vw] flex flex-col">
                <div className="relative h-[40vh] md:h-[50vh] w-full mb-6 overflow-hidden bg-ivory">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
                <div className="flex items-start gap-4 border-t border-charcoal/10 pt-4">
                  <span className="text-[10px] uppercase tracking-widest text-warm-gray mt-1">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest font-medium mb-2">{item.title}</h3>
                    <p className="font-display text-xl text-warm-gray">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Mobile Version */}
      <div className="md:hidden py-24 block">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="font-display text-4xl font-light mb-4">The Velora Edit</h2>
          <p className="text-warm-gray text-sm max-w-md">
            A closer look at the places, materials and details that define exceptional living.
          </p>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 hide-scrollbar">
          {editItems.map((item, index) => (
            <div key={index} className="w-[85vw] flex-shrink-0 snap-center flex flex-col">
              <div className="relative h-[45vh] w-full mb-6 overflow-hidden">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex items-start gap-4 border-t border-charcoal/10 pt-4">
                <span className="text-[10px] uppercase tracking-widest text-warm-gray mt-1">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-medium mb-2">{item.title}</h3>
                  <p className="font-display text-xl text-warm-gray">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
