"use client";

import { useState, useEffect } from "react";
import { Property } from "@/data/properties";

export function useSavedProperties() {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("velora_saved");
    if (stored) {
      try {
        setSavedIds(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse saved properties", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const toggleSaved = (id: string) => {
    setSavedIds(prev => {
      const newSaved = prev.includes(id) 
        ? prev.filter(pid => pid !== id)
        : [...prev, id];
      
      localStorage.setItem("velora_saved", JSON.stringify(newSaved));
      // Dispatch custom event to update other components
      window.dispatchEvent(new Event("savedPropertiesUpdated"));
      return newSaved;
    });
  };

  const isSaved = (id: string) => savedIds.includes(id);

  return { savedIds, toggleSaved, isSaved, isLoaded };
}
