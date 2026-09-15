"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateCount = () => {
      const stored = localStorage.getItem("velora_saved");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setSavedCount(parsed.length);
        } catch (e) {
          console.error(e);
        }
      }
    };
    
    updateCount();
    window.addEventListener("savedPropertiesUpdated", updateCount);
    return () => window.removeEventListener("savedPropertiesUpdated", updateCount);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Properties", href: "/properties" },
    { name: "Locations", href: "/locations" },
    { name: "Journal", href: "/journal" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[0.16,1,0.3,1] ${
          isScrolled || isMenuOpen
            ? "bg-ivory/90 backdrop-blur-xl py-5 text-charcoal border-b border-charcoal/5 shadow-sm"
            : "bg-transparent py-8 text-white"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <Link href="/" className="z-50 flex items-center">
            <span className="font-display tracking-[0.25em] text-2xl font-light uppercase">Velora</span>
          </Link>

          <nav className="hidden lg:flex gap-10 items-center absolute left-1/2 -translate-x-1/2 font-sans text-[10px] uppercase tracking-[0.2em] font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="hover:text-bronze transition-colors relative group"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6 z-50">
            <button className="hover:opacity-70 transition-opacity p-2" aria-label="Search">
              <Search size={16} strokeWidth={1.5} />
            </button>
            
            <Link href="/saved" className="hover:opacity-70 transition-opacity p-2 relative" aria-label="Saved Properties">
              <Heart size={16} strokeWidth={1.5} />
              {savedCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-bronze text-white text-[9px] rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                  {savedCount}
                </span>
              )}
            </Link>
            
            <Link 
              href="/contact" 
              className={`text-[10px] uppercase tracking-[0.2em] font-semibold px-6 py-3 border transition-colors ${isScrolled || isMenuOpen ? 'border-charcoal/20 hover:border-charcoal hover:bg-charcoal hover:text-white' : 'border-white/30 hover:bg-white hover:text-charcoal'}`}
            >
              Enquire
            </Link>
            
            <button 
              className="p-2 ml-2 hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-4 z-50">
            <button className="p-2" aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-ivory text-charcoal flex flex-col px-6 md:px-12 pt-32 pb-12 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mt-12 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-5xl md:text-7xl font-light hover:text-bronze transition-colors inline-block tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-5xl md:text-7xl font-light hover:text-bronze transition-colors inline-block tracking-tighter"
                  >
                    Contact
                  </Link>
                </motion.div>
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-between items-end border-t border-charcoal/10 pt-8 mt-12"
            >
              <Link href="/saved" className="flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] font-semibold hover:text-bronze transition-colors" onClick={() => setIsMenuOpen(false)}>
                <Heart size={14} strokeWidth={1.5} /> Saved ({savedCount})
              </Link>
              <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal/50 font-medium">
                Velora Estates &copy; 2026
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
