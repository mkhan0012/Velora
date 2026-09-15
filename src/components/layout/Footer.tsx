"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-charcoal text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-5 h-5 border-[1.5px] border-white flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
              <span className="font-display tracking-[0.2em] text-xl uppercase font-semibold">Velora</span>
            </Link>
            <h2 className="font-display text-4xl lg:text-5xl font-light leading-tight text-ivory mb-6">
              Exceptional Spaces.<br />
              Distinctive Lives.
            </h2>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-7 flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-widest text-warm-gray mb-2">Navigation</h4>
            <Link href="/properties" className="text-stone hover:text-white transition-colors w-fit">Properties</Link>
            <Link href="/locations" className="text-stone hover:text-white transition-colors w-fit">Locations</Link>
            <Link href="/journal" className="text-stone hover:text-white transition-colors w-fit">Journal</Link>
            <Link href="/about" className="text-stone hover:text-white transition-colors w-fit">About</Link>
            <Link href="/contact" className="text-stone hover:text-white transition-colors w-fit">Contact</Link>
          </div>

          {/* Resources & Social */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col sm:flex-row gap-16 sm:gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] uppercase tracking-widest text-warm-gray mb-2">Resources</h4>
              <Link href="#" className="text-stone hover:text-white transition-colors w-fit">Privacy</Link>
              <Link href="#" className="text-stone hover:text-white transition-colors w-fit">Terms</Link>
              <Link href="#" className="text-stone hover:text-white transition-colors w-fit">Legal</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] uppercase tracking-widest text-warm-gray mb-2">Social</h4>
              <Link href="#" className="text-stone hover:text-white transition-colors w-fit">Instagram</Link>
              <Link href="#" className="text-stone hover:text-white transition-colors w-fit">Pinterest</Link>
              <Link href="#" className="text-stone hover:text-white transition-colors w-fit">LinkedIn</Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-16 pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-md w-full">
            <h4 className="font-display text-2xl mb-2">The Velora Journal</h4>
            <p className="text-stone text-sm mb-6">Curated perspectives on architecture, design, and living.</p>
            <form className="flex border-b border-white/30 focus-within:border-white transition-colors pb-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border-none outline-none flex-grow text-white placeholder:text-warm-gray text-sm"
                required
              />
              <button type="submit" className="text-[11px] uppercase tracking-widest flex items-center gap-2 hover:text-bronze transition-colors group">
                Subscribe <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-widest text-warm-gray">
          <p>© 2026 Velora Estates. All rights reserved.</p>
          <p>Concept & Digital Experience by Zain Brandhaus</p>
        </div>
      </div>
    </footer>
  );
}
