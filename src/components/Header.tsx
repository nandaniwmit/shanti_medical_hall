/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BUSINESS_INFO } from "../data";
import { Pill, Sun, Moon, Menu, X, Phone, MessageSquare, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onOpenWhatsAppModal: () => void;
}

export default function Header({ currentTab, onTabChange, onOpenWhatsAppModal }: HeaderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sync theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (preferDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (tabId: string) => {
    onTabChange(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="main-sticky-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass-nav shadow-md border-b border-slate-200/50 dark:border-slate-800/40 py-3"
          : "bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Brand */}
        <div
          id="header-brand-logo"
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-med-blue-600 group-hover:bg-med-blue-700 text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-md shadow-blue-500/10">
              <Pill className="rotate-45" size={20} />
            </div>
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-950">
              <ShieldAlert className="text-white" size={8} />
            </div>
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-med-blue-600 dark:text-white leading-tight uppercase tracking-wider font-display">
              {BUSINESS_INFO.name}
            </h1>
            <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-widest block uppercase">
              {BUSINESS_INFO.category}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              id={`nav-item-${item.id}`}
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                currentTab === item.id
                  ? "text-med-blue-600 dark:text-med-blue-400 bg-blue-50/60 dark:bg-slate-900/40"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900"
              }`}
            >
              {item.label}
              {currentTab === item.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-med-blue-600 rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Header Action Button CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            id="dark-mode-toggle"
            onClick={toggleTheme}
            className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all"
            aria-label="Toggle light and dark mode"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Call CTA */}
          <a
            id="header-call-btn"
            href={BUSINESS_INFO.phoneUrl}
            className="flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl text-xs font-bold transition-all"
          >
            <Phone size={13} className="text-med-blue-600" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Order Form */}
          <button
            id="header-whatsapp-order-btn"
            onClick={onOpenWhatsAppModal}
            className="flex items-center gap-1.5 px-4 py-2 bg-accent-teal hover:bg-accent-teal-hover text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-500/10 hover:shadow-lg"
          >
            <MessageSquare size={13} />
            <span>WhatsApp Order</span>
          </button>
        </div>

        {/* Mobile Header Right */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Dark Mode Toggle for Mobile */}
          <button
            id="dark-mode-toggle-mobile"
            onClick={toggleTheme}
            className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg"
            aria-label="Toggle mode"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Hamburguer Menu */}
          <button
            id="mobile-menu-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navItems.map((item) => (
                <button
                  id={`mobile-nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    currentTab === item.id
                      ? "bg-med-blue-600 text-white"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-900">
                <a
                  id="mobile-drawer-call-btn"
                  href={BUSINESS_INFO.phoneUrl}
                  className="flex items-center justify-center gap-1.5 py-3 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-xl text-xs transition-colors"
                >
                  <Phone size={14} className="text-med-blue-600" />
                  Call Now
                </a>
                <button
                  id="mobile-drawer-whatsapp-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWhatsAppModal();
                  }}
                  className="flex items-center justify-center gap-1.5 py-3 bg-accent-teal text-white font-bold rounded-xl text-xs"
                >
                  <MessageSquare size={14} />
                  WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
