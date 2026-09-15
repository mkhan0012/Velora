"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Architecture",
    title: "The New Language of Indian Luxury",
    date: "September 12, 2026",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    category: "Locations",
    title: "Inside Contemporary Coastal Architecture",
    date: "August 28, 2026",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
  },
  {
    category: "Design",
    title: "Why Natural Materials Are Defining Modern Homes",
    date: "August 15, 2026",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "Lifestyle",
    title: "The Art of Living With Less",
    date: "July 30, 2026",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "Locations",
    title: "Mumbai's Changing Skyline",
    date: "July 12, 2026",
    img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1965&auto=format&fit=crop"
  }
];

export default function JournalPage() {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="bg-ivory min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6">
            Places.<br />
            Architecture.<br />
            Living.
          </h1>
        </motion.div>

        {/* Featured Article */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <Link href="#" className="group block">
            <div className="relative h-[50vh] md:h-[70vh] w-full mb-8 overflow-hidden bg-stone" data-cursor="view">
              <Image 
                src={featuredArticle.img} 
                alt={featuredArticle.title} 
                fill 
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 max-w-5xl">
              <div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-4">
                  <span>{featuredArticle.category}</span>
                  <span className="w-1 h-1 rounded-full bg-bronze" />
                  <span>{featuredArticle.date}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight group-hover:text-bronze transition-colors">
                  {featuredArticle.title}
                </h2>
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold pb-2 border-b border-charcoal shrink-0 group-hover:border-bronze transition-colors">
                Read Article <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {remainingArticles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href="#" className="group block">
                <div className="relative h-[40vh] md:h-[50vh] w-full mb-6 overflow-hidden bg-stone" data-cursor="view">
                  <Image 
                    src={article.img} 
                    alt={article.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-3">
                  <span>{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-bronze" />
                  <span>{article.date}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-light leading-snug mb-4 group-hover:text-bronze transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold text-charcoal/70 group-hover:text-charcoal transition-colors">
                  Read Article <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
