/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { GALLERY_ITEMS } from "../data";
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Store Front", "Medicine Shelves", "Products", "Medical Equipment", "Customers"];

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div id="gallery-view" className="space-y-16 pt-28 pb-12">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Visual Tour</span>
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white font-display uppercase tracking-wide">
          Store Gallery & Facility
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm">
          A visual showcase of Shanti Medical Hall's professional storefront, organized racks, medical devices, and friendly healthcare setup.
        </p>
        <div className="w-16 h-1 bg-accent-teal mx-auto rounded-full mt-4" />
      </section>

      {/* 2. Category Filters Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, "-")}-btn`}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-accent-teal text-white shadow-md shadow-emerald-500/10"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Modern Masonry Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  id={`gallery-card-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer aspect-4/3"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark overlay & Zoom text icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-accent-teal text-[10px] font-bold uppercase tracking-widest mb-1.5 block">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                      {item.title}
                      <ZoomIn size={14} className="text-slate-400" />
                    </h3>
                    {item.description && (
                      <p className="text-slate-300 text-[10px] line-clamp-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Static Category badge when not hovered */}
                  <span className="absolute top-4 left-4 inline-block bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider group-hover:opacity-0 transition-opacity duration-200 shadow-sm border border-slate-100/15">
                    {item.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
              <ImageIcon className="mx-auto text-slate-300 dark:text-slate-700 mb-3" size={48} />
              <p className="text-slate-500 dark:text-slate-400 text-sm">No images in this folder. Please select another category.</p>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. Interactive Popup Lightbox (AnimatePresence) */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark background overlay */}
            <motion.div
              id="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm"
            />

            {/* Lightbox Contents */}
            <motion.div
              id="lightbox-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-slate-900 dark:bg-slate-950 rounded-2xl overflow-hidden z-10 border border-slate-800/80 shadow-2xl flex flex-col"
            >
              {/* Image box */}
              <div className="relative aspect-16/10 flex items-center justify-center bg-black overflow-hidden group">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].alt}
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Left navigation arrow */}
                <button
                  id="lightbox-prev-btn"
                  onClick={handlePrev}
                  className="absolute left-4 w-11 h-11 rounded-full bg-slate-900/60 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-slate-900/90 transition-all opacity-70 hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Right navigation arrow */}
                <button
                  id="lightbox-next-btn"
                  onClick={handleNext}
                  className="absolute right-4 w-11 h-11 rounded-full bg-slate-900/60 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-slate-900/90 transition-all opacity-70 hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Close Button top-right */}
                <button
                  id="lightbox-close-btn"
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-slate-900/90 transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Caption & Metadata Footer */}
              <div className="p-6 bg-slate-900 text-white border-t border-slate-800 flex justify-between items-start gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent-teal mb-1 block">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="text-base font-bold font-display leading-snug">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  {filteredItems[lightboxIndex].description && (
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                      {filteredItems[lightboxIndex].description}
                    </p>
                  )}
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-mono text-slate-500 font-semibold block">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
