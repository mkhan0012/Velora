"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Heart, Share2, MapPin, Maximize, X, 
  ChevronLeft, ChevronRight, Check, Droplets, TreePine, 
  Sun, Shield, Wind, Home, Car, ArrowRight
} from "lucide-react";
import { properties } from "@/data/properties";
import { useSavedProperties } from "@/hooks/useSavedProperties";

export default function PropertyDetail() {
  const { id } = useParams();
  const router = useRouter();
  const property = properties.find(p => p.id === id);
  const { isSaved, toggleSaved, isLoaded } = useSavedProperties();
  
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isViewingModalOpen, setIsViewingModalOpen] = useState(false);
  const [viewingSubmitted, setViewingSubmitted] = useState(false);
  const [activeFloor, setActiveFloor] = useState("Ground Floor");

  // Prevent scroll when modals are open
  useEffect(() => {
    if (isGalleryOpen || isViewingModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isGalleryOpen, isViewingModalOpen]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Property not found</h1>
          <Link href="/properties" className="text-sm uppercase tracking-widest border-b border-charcoal pb-1">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [property.image, ...(property.images || [])];
  const saved = isLoaded ? isSaved(property.id) : false;

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isGalleryOpen) return;
    if (e.key === "ArrowRight") handleNextImage();
    if (e.key === "ArrowLeft") handlePrevImage();
    if (e.key === "Escape") setIsGalleryOpen(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleViewingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setViewingSubmitted(true);
    // Reset after 3 seconds for demo purposes
    setTimeout(() => {
      setIsViewingModalOpen(false);
      setTimeout(() => setViewingSubmitted(false), 500);
    }, 3000);
  };

  const amenities = [
    { icon: <Droplets size={20} strokeWidth={1} />, label: "Private Pool" },
    { icon: <TreePine size={20} strokeWidth={1} />, label: "Garden" },
    { icon: <Sun size={20} strokeWidth={1} />, label: "Sea View" },
    { icon: <Shield size={20} strokeWidth={1} />, label: "Security" },
    { icon: <Wind size={20} strokeWidth={1} />, label: "Outdoor Lounge" },
    { icon: <Home size={20} strokeWidth={1} />, label: "Smart Home" },
    { icon: <Car size={20} strokeWidth={1} />, label: "Private Parking" },
  ];

  return (
    <div className="bg-ivory min-h-screen">
      
      {/* Top Navigation */}
      <div className="pt-24 pb-6 px-6 md:px-12 flex justify-between items-center bg-ivory sticky top-0 z-30">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-[10px] uppercase tracking-widest hover:text-bronze transition-colors">
          <ArrowLeft size={14} /> Back to Properties
        </button>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest hover:text-bronze transition-colors">
            <Share2 size={14} /> Share
          </button>
          <button 
            onClick={() => toggleSaved(property.id)}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest hover:text-bronze transition-colors"
          >
            <Heart size={14} className={saved ? "fill-bronze text-bronze" : ""} /> {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pb-24">
        
        {/* Header Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <h1 className="font-display text-5xl md:text-7xl font-light mb-4">{property.title}</h1>
            <div className="flex items-center gap-2 text-warm-gray text-sm uppercase tracking-widest">
              <MapPin size={16} strokeWidth={1.5} /> {property.location}
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="font-display text-4xl">{property.price}</div>
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-charcoal/80">
              {property.type !== 'Plot' && (
                <>
                  <span>{property.bedrooms} Beds</span>
                  <span className="w-1 h-1 rounded-full bg-bronze" />
                  <span>{property.bathrooms} Baths</span>
                  <span className="w-1 h-1 rounded-full bg-bronze" />
                </>
              )}
              <span>{property.area}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button 
            onClick={() => setIsViewingModalOpen(true)}
            className="bg-charcoal text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-bronze transition-colors flex-1 sm:flex-none text-center"
          >
            Schedule a Private Viewing →
          </button>
          <button className="border border-stone text-charcoal px-8 py-4 text-xs uppercase tracking-widest hover:border-charcoal transition-colors flex-1 sm:flex-none text-center">
            Enquire About This Residence
          </button>
        </div>

        {/* Image Gallery Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[60vh] md:h-[75vh] mb-24">
          <div 
            className="lg:col-span-8 relative h-full w-full cursor-pointer overflow-hidden bg-stone group"
            onClick={() => { setCurrentImageIndex(0); setIsGalleryOpen(true); }}
            data-cursor="view"
          >
            <Image src={allImages[0]} alt={property.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="hidden lg:grid lg:col-span-4 grid-rows-2 gap-4 h-full">
            {allImages.slice(1, 3).map((img, idx) => (
              <div 
                key={idx} 
                className="relative w-full h-full cursor-pointer overflow-hidden bg-stone group"
                onClick={() => { setCurrentImageIndex(idx + 1); setIsGalleryOpen(true); }}
              >
                <Image src={img} alt={`${property.title} - Image ${idx + 2}`} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                {idx === 1 && allImages.length > 3 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-display text-2xl">
                    +{allImages.length - 3}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* The Residence & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-7">
            <h2 className="text-xs uppercase tracking-widest text-warm-gray mb-8">The Residence</h2>
            <div className="font-display text-3xl md:text-4xl leading-snug font-light text-charcoal mb-8">
              A masterclass in contemporary design, this {property.type.toLowerCase()} offers an unparalleled living experience characterized by vast open spaces, natural light, and a seamless connection to its surroundings.
            </div>
            <p className="text-warm-gray leading-relaxed mb-8 font-light">
              Every detail has been considered—from the bespoke material palette of warm woods and textured stone to the carefully framed views of the landscape. The fluid layout encourages both grand entertaining and quiet moments of retreat, making it not just a striking architectural achievement, but a profoundly comfortable home.
            </p>
          </div>
          
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="text-xs uppercase tracking-widest text-warm-gray mb-8 border-b border-stone pb-4">Specifications</h2>
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between border-b border-stone/50 pb-4">
                <span className="text-sm font-light">Property Type</span>
                <span className="font-medium text-sm">{property.type}</span>
              </li>
              {property.type !== 'Plot' && (
                <>
                  <li className="flex justify-between border-b border-stone/50 pb-4">
                    <span className="text-sm font-light">Bedrooms</span>
                    <span className="font-medium text-sm">{property.bedrooms}</span>
                  </li>
                  <li className="flex justify-between border-b border-stone/50 pb-4">
                    <span className="text-sm font-light">Bathrooms</span>
                    <span className="font-medium text-sm">{property.bathrooms}</span>
                  </li>
                </>
              )}
              <li className="flex justify-between border-b border-stone/50 pb-4">
                <span className="text-sm font-light">Internal Area</span>
                <span className="font-medium text-sm">{property.area}</span>
              </li>
              <li className="flex justify-between border-b border-stone/50 pb-4">
                <span className="text-sm font-light">Parking</span>
                <span className="font-medium text-sm">3 Cars</span>
              </li>
              <li className="flex justify-between border-b border-stone/50 pb-4">
                <span className="text-sm font-light">Year Built</span>
                <span className="font-medium text-sm">2024</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-24">
          <h2 className="text-xs uppercase tracking-widest text-warm-gray mb-10 text-center">Amenities</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-full border border-stone flex items-center justify-center text-charcoal group-hover:border-bronze group-hover:text-bronze transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floor Plan Section */}
        <div className="mb-24 bg-stone/30 py-20 px-6 md:px-12 rounded-sm border border-stone">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4">Designed around living.</h2>
            <p className="text-warm-gray max-w-md">The layout creates a natural flow between private sanctuaries and shared gathering spaces.</p>
          </div>
          
          <div className="flex justify-center gap-4 md:gap-8 mb-12">
            {["Ground Floor", "First Floor", "Second Floor"].map(floor => (
              <button 
                key={floor}
                onClick={() => setActiveFloor(floor)}
                className={`text-[10px] md:text-xs uppercase tracking-widest pb-2 border-b-2 transition-colors ${
                  activeFloor === floor ? "border-charcoal text-charcoal font-semibold" : "border-transparent text-warm-gray hover:text-charcoal"
                }`}
              >
                {floor}
              </button>
            ))}
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto h-[40vh] md:h-[60vh] border border-charcoal/10 bg-white flex items-center justify-center overflow-hidden">
            <div className="text-warm-gray flex flex-col items-center gap-4 opacity-50">
              <Maximize size={32} strokeWidth={1} />
              <span className="font-display text-xl">{activeFloor} Plan</span>
              <span className="text-xs">Interactive Floor Plan Available Upon Request</span>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8">A place with<br />its own rhythm.</h2>
            <p className="text-warm-gray mb-10 font-light">
              Situated in a highly sought-after enclave, this residence offers the perfect balance of seclusion and connectivity.
            </p>
            <ul className="flex flex-col gap-6">
              <li className="flex justify-between border-b border-stone pb-2">
                <span className="text-sm font-semibold text-charcoal">Beach</span>
                <span className="text-sm text-warm-gray">4 min</span>
              </li>
              <li className="flex justify-between border-b border-stone pb-2">
                <span className="text-sm font-semibold text-charcoal">City Centre</span>
                <span className="text-sm text-warm-gray">25 min</span>
              </li>
              <li className="flex justify-between border-b border-stone pb-2">
                <span className="text-sm font-semibold text-charcoal">Fine Dining</span>
                <span className="text-sm text-warm-gray">8 min</span>
              </li>
              <li className="flex justify-between border-b border-stone pb-2">
                <span className="text-sm font-semibold text-charcoal">Airport</span>
                <span className="text-sm text-warm-gray">90 min</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[50vh] w-full bg-stone border border-charcoal/10 overflow-hidden group">
            {/* Map styling mock */}
            <div className="absolute inset-0 bg-[#e5e3df] opacity-50 mix-blend-multiply" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-bronze rounded-full z-10 shadow-[0_0_0_10px_rgba(154,129,92,0.2)]">
              <div className="absolute w-12 h-12 border border-bronze rounded-full -top-4 -left-4 animate-ping opacity-20" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 bg-charcoal text-white text-[9px] uppercase tracking-widest px-3 py-1 z-10">
              {property.title}
            </div>
          </div>
        </div>

      </div>

      {/* Full Screen Gallery */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-deep-charcoal flex items-center justify-center"
          >
            <div className="absolute top-6 right-6 z-50 flex items-center gap-6 text-white/50">
              <span className="font-display text-sm tracking-widest">{currentImageIndex + 1} / {allImages.length}</span>
              <button 
                onClick={() => setIsGalleryOpen(false)}
                className="hover:text-white transition-colors"
              >
                <X size={28} strokeWidth={1} />
              </button>
            </div>
            
            <button 
              onClick={handlePrevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-white transition-colors p-4"
            >
              <ChevronLeft size={40} strokeWidth={1} />
            </button>
            
            <button 
              onClick={handleNextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-white transition-colors p-4"
            >
              <ChevronRight size={40} strokeWidth={1} />
            </button>

            <motion.div 
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-[90vw] h-[85vh]"
            >
              <Image 
                src={allImages[currentImageIndex]} 
                alt={`${property.title} gallery image`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Schedule Viewing Modal */}
      <AnimatePresence>
        {isViewingModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          >
            <div className="absolute inset-0 bg-deep-charcoal/80 backdrop-blur-sm" onClick={() => setIsViewingModalOpen(false)} />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-2xl bg-ivory shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsViewingModalOpen(false)}
                className="absolute top-6 right-6 text-warm-gray hover:text-charcoal z-10"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <div className="p-10 md:p-16">
                {!viewingSubmitted ? (
                  <>
                    <h2 className="font-display text-4xl mb-2">Arrange a private viewing.</h2>
                    <p className="text-warm-gray text-sm mb-10">Please provide your details below and a Velora representative will contact you to confirm the appointment.</p>
                    
                    <form onSubmit={handleViewingSubmit} className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">Name</label>
                          <input required type="text" className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">Phone</label>
                          <input required type="tel" className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm" />
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">Email</label>
                        <input required type="email" className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">Preferred Date</label>
                          <input required type="date" className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm text-warm-gray" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">Preferred Time</label>
                          <select required className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm text-warm-gray">
                            <option value="">Select a time</option>
                            <option value="morning">Morning (9AM - 12PM)</option>
                            <option value="afternoon">Afternoon (12PM - 4PM)</option>
                            <option value="evening">Evening (4PM - 7PM)</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 mb-4">
                        <label className="text-[10px] uppercase tracking-widest text-warm-gray font-semibold">Message (Optional)</label>
                        <textarea rows={2} className="border-b border-stone bg-transparent p-2 outline-none focus:border-charcoal transition-colors font-medium text-sm resize-none"></textarea>
                      </div>

                      <button type="submit" className="bg-charcoal text-white py-4 text-xs uppercase tracking-widest hover:bg-bronze transition-colors flex justify-center items-center gap-2 group">
                        Request Viewing 
                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full border border-bronze flex items-center justify-center text-bronze mb-8">
                      <Check size={32} strokeWidth={1} />
                    </div>
                    <h2 className="font-display text-4xl mb-4">Thank you.</h2>
                    <p className="text-warm-gray font-light max-w-sm">A Velora representative will be in touch shortly to confirm your viewing for {property.title}.</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
