/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BUSINESS_INFO } from "../data";
import { Pill, Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onTabChange: (tab: string) => void;
  onOpenWhatsAppModal: () => void;
  onOpenPrivacyModal: (docName: string) => void;
}

export default function Footer({ onTabChange, onOpenWhatsAppModal, onOpenPrivacyModal }: FooterProps) {
  const quickLinks = [
    { id: "home", label: "Home Dashboard" },
    { id: "about", label: "Our Story & Profile" },
    { id: "services", label: "Pharmacy Services" },
    { id: "gallery", label: "Store Gallery" },
    { id: "contact", label: "Contact & Directions" }
  ];

  const primaryServices = [
    { label: "Prescription Drugs", id: "services" },
    { label: "General & OTC medicines", id: "services" },
    { label: "Diabetic Care", id: "services" },
    { label: "Medical Devices", id: "services" },
    { label: "Baby Essentials", id: "services" },
    { label: "Surgical Equipment", id: "services" }
  ];

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-footer" className="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand Widget */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-med-blue-600 text-white rounded-xl flex items-center justify-center">
              <Pill className="rotate-45" size={20} />
            </div>
            <div>
              <h4 className="text-white font-bold font-display tracking-wide uppercase">{BUSINESS_INFO.name}</h4>
              <span className="text-[10px] uppercase font-bold text-med-blue-400 tracking-widest block">{BUSINESS_INFO.category}</span>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            {BUSINESS_INFO.tagline}. Sourcing only 100% genuine products with ethical storage protocols.
          </p>
          <div className="pt-2">
            <span className="text-xs text-slate-500 font-mono">ESTD. {BUSINESS_INFO.established} in Tekari, Bihar</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-slate-800/80">
            Quick Sitemap
          </h5>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  id={`footer-link-${link.id}`}
                  onClick={() => handleTabClick(link.id)}
                  className="text-xs hover:text-accent-teal transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200"
                >
                  <ArrowUpRight size={12} className="text-slate-600" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Highlight */}
        <div>
          <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-slate-800/80">
            Medical Categories
          </h5>
          <ul className="space-y-3">
            {primaryServices.map((serv, idx) => (
              <li key={idx}>
                <button
                  id={`footer-service-link-${idx}`}
                  onClick={() => handleTabClick("services")}
                  className="text-xs hover:text-accent-teal transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200"
                >
                  <ArrowUpRight size={12} className="text-slate-600" />
                  {serv.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info & Business Hours */}
        <div className="space-y-5">
          <h5 className="text-white font-bold text-sm uppercase tracking-wider pb-2 border-b border-slate-800/80">
            Store Hours & Location
          </h5>
          <div className="space-y-3.5 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="text-accent-teal shrink-0 mt-0.5" size={15} />
              <span>{BUSINESS_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-accent-teal shrink-0" size={15} />
              <a href={BUSINESS_INFO.phoneUrl} className="hover:text-accent-teal transition-colors">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-accent-teal shrink-0" size={15} />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-accent-teal transition-colors">
                {BUSINESS_INFO.email}
              </a>
            </div>
            <div className="flex items-start gap-2 bg-slate-800/40 p-3 rounded-lg border border-slate-800/60">
              <Clock className="text-accent-teal shrink-0 mt-0.5" size={15} />
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Business Hours</span>
                {BUSINESS_INFO.workingHours.map((wh, idx) => (
                  <p key={idx} className="text-[11px] leading-relaxed">
                    <strong>{wh.days}:</strong> {wh.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map and bottom legal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-400">
          <span>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Developed by{" "}
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </span>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-700">|</span>
            <button id="privacy-policy-btn" onClick={() => onOpenPrivacyModal("privacy")} className="hover:text-white transition-colors">Privacy Policy</button>
            <span className="text-slate-700">•</span>
            <button id="terms-conditions-btn" onClick={() => onOpenPrivacyModal("terms")} className="hover:text-white transition-colors">Terms & Conditions</button>
            <span className="text-slate-700">•</span>
            <button id="disclaimer-btn" onClick={() => onOpenPrivacyModal("disclaimer")} className="hover:text-white transition-colors">Disclaimer</button>
          </div>
        </div>

        {/* Call to action footer buttons */}
        <div className="flex items-center gap-3 text-xs font-bold text-white">
          <a
            id="footer-call-cta"
            href={BUSINESS_INFO.phoneUrl}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
          >
            <Phone size={13} />
            <span>Click to Call</span>
          </a>
          <button
            id="footer-whatsapp-cta"
            onClick={onOpenWhatsAppModal}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
          >
            <MessageSquare size={13} />
            <span>Order on WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Small medical disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <p className="text-[10px] text-slate-500 text-center leading-relaxed max-w-4xl mx-auto">
          <strong>Disclaimer:</strong> {BUSINESS_INFO.name} is a licensed retail pharmacy in Tekari, Bihar. Any product information or health guidelines provided on this website are for educational and catalog-referencing purposes only, and are NOT a substitute for professional medical advice, diagnosis, or treatment. Always consult with a registered medical practitioner before administering any medications.
        </p>
      </div>
    </footer>
  );
}
