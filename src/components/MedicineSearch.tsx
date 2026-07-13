/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { MEDICINES_CATALOG, CATEGORIES } from "../data";
import { Medicine } from "../types";
import { Search, Pill, CheckCircle, AlertCircle, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MedicineSearchProps {
  onSelectForOrder: (medicineName: string) => void;
}

export default function MedicineSearch({ onSelectForOrder }: MedicineSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMedicines = useMemo(() => {
    return MEDICINES_CATALOG.filter((med) => {
      const matchesSearch =
        med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        med.uses.some((use) => use.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (med.manufacturer && med.manufacturer.toLowerCase().includes(searchQuery.toLowerCase())) ||
        med.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || med.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div id="medicine-search-section" className="w-full">
      {/* Search Header and Inputs */}
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <Pill className="text-accent-teal" size={24} />
          Digital Medicine Catalog & Search
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
          Find genuine medicines, check prescription guidelines, and instantly order via WhatsApp.
        </p>

        {/* Input bar */}
        <div className="relative flex items-center mb-6">
          <Search className="absolute left-4 text-slate-400 pointer-events-none" size={20} />
          <input
            id="medicine-search-input"
            type="text"
            placeholder="Search by medicine name, symptom, or manufacturer (e.g., Paracetamol, Fever, Cipla)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal text-sm transition-all"
          />
          {searchQuery && (
            <button
              id="clear-search-btn"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Categories Horizontal Scroll */}
        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Filter by Category
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
            <button
              id="category-all-btn"
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === "All"
                  ? "bg-accent-teal text-white shadow-md shadow-emerald-500/10"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => (
              <button
                id={`category-${cat.toLowerCase().replace(/\s+/g, "-")}-btn`}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-accent-teal text-white shadow-md shadow-emerald-500/10"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog Grid View */}
      <div className="relative">
        <AnimatePresence mode="popLayout">
          {filteredMedicines.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredMedicines.map((med) => (
                <motion.div
                  layout
                  id={`med-card-${med.id}`}
                  key={med.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-5 hover-card-trigger flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className="inline-block bg-med-blue-50 dark:bg-sky-950/40 text-med-blue-600 dark:text-sky-300 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                        {med.category}
                      </span>
                      {med.prescriptionRequired ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2 py-1 rounded">
                          <AlertCircle size={12} />
                          Rx Required
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded">
                          <CheckCircle size={12} />
                          OTC Safe
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">
                      {med.name}
                    </h4>
                    {med.strength && (
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500 block mb-2">
                        Strength: {med.strength} {med.manufacturer ? `| By ${med.manufacturer}` : ""}
                      </span>
                    )}

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-xs line-clamp-2 mb-4">
                      {med.description}
                    </p>

                    {/* Uses tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {med.uses.map((use, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded text-[10px]"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer */}
                  <div className="pt-4 border-t border-slate-50 dark:border-slate-800/60 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 text-[10px] block uppercase font-semibold">
                        Avg Market Price
                      </span>
                      <span className="text-lg font-bold text-slate-950 dark:text-white">
                        ₹{med.price}{" "}
                        <span className="text-xs font-normal text-slate-400 dark:text-slate-500">
                          / strip
                        </span>
                      </span>
                    </div>

                    <button
                      id={`order-btn-${med.id}`}
                      onClick={() => onSelectForOrder(med.name)}
                      className="bg-accent-teal hover:bg-accent-teal-hover text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md"
                    >
                      <MessageCircle size={14} />
                      Order
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl"
            >
              <Pill className="mx-auto text-slate-300 dark:text-slate-700 mb-4 animate-bounce" size={48} />
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                Medicine Not Found in Fast Catalog
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto px-4 mb-6">
                Don't worry! We stock thousands of medicines. Fill out our custom WhatsApp form to enquire about any unlisted medicine or prescription.
              </p>
              <button
                id="search-fallback-order-btn"
                onClick={() => onSelectForOrder(searchQuery || "Specialized Prescription")}
                className="bg-accent-teal hover:bg-accent-teal-hover text-white font-medium text-sm px-6 py-2.5 rounded-lg inline-flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Enquire via WhatsApp Form
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
