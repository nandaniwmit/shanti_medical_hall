/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import WhatsAppModal from "./components/WhatsAppModal";
import LegalModals from "./components/LegalModals";

// Import Views
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Gallery from "./views/Gallery";
import Contact from "./views/Contact";

// Import Shared Data & Icons
import { BUSINESS_INFO } from "./data";
import { Phone, MessageSquare, ArrowUp, ShieldAlert, Clock, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentTab, setCurrentTab] = useState("home");
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [prefilledMed, setPrefilledMed] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Legal documentation state
  const [legalDoc, setLegalDoc] = useState<"privacy" | "terms" | "disclaimer" | null>(null);

  // Parse hash routing on load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const validTabs = ["home", "about", "services", "gallery", "contact"];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial load check
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Back to top scrolling observer
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Global Tracker Hook integration
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;
    
    let visitorId = localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    
    let sessionId = sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    
    const getPageName = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        return hash.charAt(0).toUpperCase() + hash.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };
    
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };
    
    sendInitPayload();
    
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
  };

  const openWhatsAppWithPrefill = (medicineName?: string) => {
    if (medicineName) {
      setPrefilledMed(medicineName);
    } else {
      setPrefilledMed("");
    }
    setIsWhatsAppOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case "home":
        return <Home onTabChange={handleTabChange} onOpenWhatsAppModal={openWhatsAppWithPrefill} />;
      case "about":
        return <About />;
      case "services":
        return <Services onOpenWhatsAppModal={openWhatsAppWithPrefill} />;
      case "gallery":
        return <Gallery />;
      case "contact":
        return <Contact />;
      default:
        return <Home onTabChange={handleTabChange} onOpenWhatsAppModal={openWhatsAppWithPrefill} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-accent-teal selection:text-white">
      {/* 1. Technical SEO Tag & JSON-LD injection */}
      <SEO currentTab={currentTab} />

      {/* 2. Top Banner / Emergency Warning Row */}
      <div id="top-emergency-strip" className="bg-red-600 dark:bg-red-700 text-white text-[10px] sm:text-xs py-2 px-4 text-center font-bold flex items-center justify-center gap-2 z-50 relative">
        <ShieldAlert size={14} className="animate-pulse" />
        <span>Emergency Contact? Call us for immediate medicine availability: {BUSINESS_INFO.phoneFormatted}</span>
        <span className="hidden md:inline-block opacity-75">|</span>
        <span className="hidden md:flex items-center gap-1">
          <Clock size={12} />
          Hours: Mon-Sat 8AM - 10PM, Sun 9AM - 8PM
        </span>
      </div>

      {/* 3. Main Header Navigation */}
      <Header
        currentTab={currentTab}
        onTabChange={handleTabChange}
        onOpenWhatsAppModal={() => openWhatsAppWithPrefill()}
      />

      {/* 4. Interactive Breadcrumbs */}
      {currentTab !== "home" && (
        <div id="breadcrumbs-navigation" className="bg-white dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-900/60 pt-36 pb-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
            <button
              id="breadcrumb-home-btn"
              onClick={() => handleTabChange("home")}
              className="hover:text-accent-teal transition-colors"
            >
              Home
            </button>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-900 dark:text-white capitalize">
              {currentTab}
            </span>
          </div>
        </div>
      )}

      {/* 5. Dynamic Page Frame Views */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 6. Site Footer */}
      <Footer
        onTabChange={handleTabChange}
        onOpenWhatsAppModal={() => openWhatsAppWithPrefill()}
        onOpenPrivacyModal={(doc) => setLegalDoc(doc as "privacy" | "terms" | "disclaimer")}
      />

      {/* 7. Persistent Floating Support Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              id="back-to-top-floating-btn"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="w-11 h-11 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-full flex items-center justify-center shadow-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Scroll Back to Top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Call Button */}
        <a
          id="floating-call-btn"
          href={BUSINESS_INFO.phoneUrl}
          className="w-12 h-12 bg-sky-600 hover:bg-sky-700 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all pulse-ring-effect"
          aria-label="Call Shanti Medical Hall"
        >
          <Phone size={22} />
        </a>

        {/* Floating WhatsApp Order Button */}
        <button
          id="floating-whatsapp-btn"
          onClick={() => openWhatsAppWithPrefill()}
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all pulse-ring-effect"
          aria-label="Open WhatsApp Order Form"
        >
          <MessageSquare size={22} />
        </button>
      </div>

      {/* 8. Mobile Sticky Footer Action Dock (Visible only on mobile screen widths) */}
      <div id="mobile-sticky-dock" className="sm:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/60 p-3 flex gap-3 z-30">
        <a
          id="dock-call-btn"
          href={BUSINESS_INFO.phoneUrl}
          className="flex-1 py-3 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-center flex items-center justify-center gap-1.5 text-xs border border-slate-200 dark:border-slate-800"
        >
          <Phone size={14} className="text-accent-teal" />
          Call Now
        </a>
        <button
          id="dock-whatsapp-order-btn"
          onClick={() => openWhatsAppWithPrefill()}
          className="flex-1 py-3 bg-accent-teal hover:bg-accent-teal-hover text-white rounded-xl font-bold flex items-center justify-center gap-1.5 text-xs shadow-md"
        >
          <MessageSquare size={14} />
          WhatsApp Order
        </button>
      </div>

      {/* 9. Interactive WhatsApp Order & Prescription Form Drawer */}
      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        prefilledMedicine={prefilledMed}
      />

      {/* 10. Legal Privacy, Terms & Disclaimer Modals */}
      <LegalModals
        isOpen={legalDoc !== null}
        onClose={() => setLegalDoc(null)}
        documentType={legalDoc}
      />
    </div>
  );
}
