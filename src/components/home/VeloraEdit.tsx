"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = scrollRef.current;
    if (node) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        
        const isAtLeftEdge = node.scrollLeft === 0;
        const isAtRightEdge = Math.ceil(node.scrollLeft + node.clientWidth) >= node.scrollWidth;

        // If scrolling left and not at left edge, OR scrolling right and not at right edge
        if ((e.deltaY < 0 && !isAtLeftEdge) || (e.deltaY > 0 && !isAtRightEdge)) {
          e.preventDefault();
          node.scrollBy({ left: e.deltaY * 1.5, behavior: 'auto' });
        }
      };
      
      // Add wheel listener with passive: false to allow preventDefault
      node.addEventListener("wheel", onWheel, { passive: false });
      return () => node.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <section ref={containerRef} className="bg-stone py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-4 block">Journal</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">The Velora Edit</h2>
          </div>
          <p className="text-warm-gray text-sm md:text-base max-w-sm font-light">
            A closer look at the places, materials and details that define exceptional living.
          </p>
        </motion.div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 md:gap-10 px-6 md:px-12 pb-12 cursor-grab active:cursor-grabbing hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
          {editItems.map((item, index) => (
            <div key={index} className="w-[85vw] md:w-[45vw] lg:w-[35vw] xl:w-[28vw] flex-shrink-0 flex flex-col group pointer-events-none md:pointer-events-auto">
              <div className="relative h-[45vh] md:h-[55vh] w-full mb-8 overflow-hidden bg-ivory pointer-events-auto">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
                  draggable="false"
                />
              </div>
              <div className="flex items-start gap-6 border-t border-charcoal/20 pt-6 transition-colors group-hover:border-charcoal/40">
                <span className="text-[10px] uppercase tracking-[0.2em] text-warm-gray font-semibold mt-1">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal mb-2">{item.title}</h3>
                  <p className="font-display text-2xl text-charcoal/80 font-light leading-snug">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer for right edge */}
          <div className="w-[6vw] md:w-[12vw] flex-shrink-0" />
        </div>
      
      {/* Global styles to hide webkit scrollbar just in case */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
