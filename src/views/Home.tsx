/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BUSINESS_INFO, TESTIMONIALS, FAQS, IMAGES } from "../data";
import {
  ShieldCheck,
  UserCheck,
  Banknote,
  Zap,
  ClipboardList,
  HeartPulse,
  Star,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  MapPin,
  FileText,
  Pill,
  CreditCard,
  Map,
  Clock,
  Check,
  Award,
  Phone
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MedicineSearch from "../components/MedicineSearch";

interface HomeProps {
  onTabChange: (tab: string) => void;
  onOpenWhatsAppModal: (prefilledMed?: string) => void;
}

export default function Home({ onTabChange, onOpenWhatsAppModal }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const whyChooseUs = [
    { title: "100% Genuine Medicines", desc: "Every drug is ethically sourced directly from authorized pharma channels with zero duplicate risk.", icon: ShieldCheck, color: "text-emerald-500" },
    { title: "Experienced Staff", desc: "Managed by trained pharmacists with over 25 years of local community healthcare experience.", icon: UserCheck, color: "text-sky-500" },
    { title: "Affordable Prices", desc: "Enjoy consistent billing discounts, medical aid support, and competitive local rates.", icon: Banknote, color: "text-emerald-600" },
    { title: "Fast Service", desc: "No more waiting in long lines; get instant prescription verification and rapid support.", icon: Zap, color: "text-amber-500" },
    { title: "Prescription Medicines", desc: "A comprehensive stocking engine covering oncology, diabetes, cardiac, and rare formulations.", icon: ClipboardList, color: "text-rose-500" },
    { title: "Healthcare Products", desc: "One-stop shop for orthotics, modern BP monitors, vaporizers, glucometers, and vitamins.", icon: HeartPulse, color: "text-red-500" },
    { title: "Trusted Local Pharmacy", desc: "Servicing Tekari, Gaya families since 1998 with continuous medical availability.", icon: Star, color: "text-yellow-500" },
    { title: "Easy WhatsApp Support", desc: "Simply scan, send prescription photo, and receive confirmation in minutes.", icon: MessageSquare, color: "text-emerald-400" }
  ];

  const workingProcess = [
    { step: "1", title: "Visit Store / Search Online", desc: "Walk into our clean Tekari branch or browse our digital catalog.", icon: MapPin },
    { step: "2", title: "Share Prescription", desc: "Provide your prescription to our certified pharmacist or upload on WhatsApp.", icon: FileText },
    { step: "3", title: "Get Packed Medicines", desc: "Our staff double-verifies the batch numbers, expiry dates, and packs safely.", icon: Pill },
    { step: "4", title: "Easy Payment & Delivery", desc: "Pay securely via cash, card, or UPI, and take your medicines home.", icon: CreditCard }
  ];

  const trustBadges = [
    { label: "Established 1998", value: "25+ Years" },
    { label: "Genuine Catalog", value: "100% Genuine" },
    { label: "Happy Customers", value: "10K+ Served" },
    { label: "Community Rating", value: "4.9/5 Stars" }
  ];

  return (
    <div id="home-view" className="space-y-20 pb-12">
      {/* 1. Hero Section */}
      <section id="hero-banner" className="relative bg-gradient-to-br from-med-blue-600 to-med-blue-700 dark:from-slate-900 dark:to-slate-950 pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden text-white shadow-inner">
        {/* Subtle decorative medical cross grid backdrops */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="crossGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 10 20 M 0 10 L 20 10" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#crossGrid)" className="text-white dark:text-sky-500" />
          </svg>
        </div>

        {/* Hero image overlay skew pattern from the theme */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-white/5 dark:bg-white/[0.02] backdrop-blur-[8px] -skew-x-12 translate-x-12 border-l border-white/10 pointer-events-none hidden lg:block z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Texts */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 dark:bg-emerald-950/40 text-white dark:text-emerald-400 border border-white/20 dark:border-emerald-900/60 uppercase tracking-wider">
                <Award size={14} /> Registered Retailing Pharmacy
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight font-display uppercase tracking-wide">
                {BUSINESS_INFO.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-100 dark:text-slate-300">
                Your Trusted Pharmacy in Tekari
              </h2>
              <p className="text-sky-100/90 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                Providing 100% genuine medicines, professional healthcare products, pediatric baby care, personal hygiene products, and surgical essentials at affordable prices since 1998.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  id="hero-call-cta"
                  href={BUSINESS_INFO.phoneUrl}
                  className="px-6 py-3.5 bg-white hover:bg-blue-50 text-med-blue-700 font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 border-none"
                >
                  <Phone size={18} />
                  Call Store Now
                </a>
                <button
                  id="hero-whatsapp-cta"
                  onClick={() => onOpenWhatsAppModal()}
                  className="px-6 py-3.5 bg-accent-teal hover:bg-accent-teal-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} />
                  WhatsApp Order Form
                </button>
                <a
                  id="hero-directions-cta"
                  href={BUSINESS_INFO.googleMapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/35 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <MapPin size={18} className="text-white" />
                  Get Directions
                </a>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 dark:border-slate-800/80">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="bg-white/10 dark:bg-slate-900/40 p-3 rounded-lg border border-white/10 dark:border-slate-800/60 backdrop-blur-sm">
                    <span className="text-xl font-bold text-white block font-mono">
                      {badge.value}
                    </span>
                    <span className="text-[10px] text-sky-100/80 dark:text-slate-400 font-semibold uppercase tracking-wider">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-5 relative z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-teal to-sky-400 rounded-2xl blur-lg opacity-20 dark:opacity-40 animate-pulse" />
              <div className="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2 rounded-2xl shadow-2xl">
                <img
                  src={IMAGES.hero}
                  alt="Shanti Medical Hall modern display cases and counter"
                  className="w-full h-auto object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search Catalog */}
      <section id="fast-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Instant Catalog Search</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 font-display">
            Quickly Check & Order Stock
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Check local availability for essential capsules, tablets, syrups, and medical equipment in Tekari.
          </p>
        </div>
        <MedicineSearch onSelectForOrder={onOpenWhatsAppModal} />
      </section>

      {/* 3. Why Choose Us Section */}
      <section id="why-choose-us" className="bg-slate-50 dark:bg-slate-950/40 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Why Choose Us</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 font-display">
              Uncompromising Quality & Care
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              We operate under pharmaceutical regulatory guidance to guarantee the efficacy and safety of every product.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                id={`wcu-card-${idx}`}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl hover-card-trigger"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-950 rounded-xl flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-800/40">
                  <item.icon className={item.color} size={24} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Working Process */}
      <section id="working-process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Simple Workflow</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 font-display">
            How It Works
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Acquiring your prescription and health monitors is structured in four clear steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {workingProcess.map((proc, idx) => (
            <div key={idx} className="relative text-center flex flex-col items-center">
              {/* Connector line for desktop */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-[2px] bg-slate-100 dark:bg-slate-800 z-0" />
              )}

              {/* Step Circle with Icon */}
              <div className="relative z-10 w-16 h-16 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center mb-4 hover:border-accent-teal transition-all shadow-sm">
                <proc.icon className="text-accent-teal" size={24} />
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 dark:bg-slate-800 text-white font-mono font-bold text-xs rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                  {proc.step}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 font-display">
                {proc.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs max-w-xs leading-relaxed">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Customer Testimonials */}
      <section id="testimonials-section" className="bg-slate-50 dark:bg-slate-950/40 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Testimonials</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 font-display">
              Why Customers Trust Us
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Read real feedback from Gaya, Tekari patients, physicians, and families served over multiple decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review) => (
              <div
                id={`testimonial-card-${review.id}`}
                key={review.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover-card-trigger shadow-sm"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        fill={i < Math.floor(review.rating) ? "currentColor" : "none"}
                      />
                    ))}
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 ml-1 font-mono">
                      {review.rating}
                    </span>
                  </div>

                  {/* Review text */}
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed italic mb-6">
                    "{review.review}"
                  </p>
                </div>

                {/* Profile row */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-50 dark:border-slate-800/60">
                  <div className="w-10 h-10 bg-accent-teal/10 text-accent-teal rounded-full font-bold flex items-center justify-center font-display">
                    {review.avatarLetter}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {review.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block">
                      {review.location} • {review.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="faqs" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Frequently Asked Questions</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 font-display">
            Common Pharmacy Queries
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Everything you need to know about prescription sourcing, cold chain, and WhatsApp delivery in Tekari.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isFaqOpen = openFaq === faq.id;
            return (
              <div
                id={`faq-accordion-item-${faq.id}`}
                key={faq.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white text-sm hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <span className="font-display">{faq.question}</span>
                  {isFaqOpen ? <ChevronUp className="text-accent-teal shrink-0" size={18} /> : <ChevronDown className="text-slate-400 shrink-0" size={18} />}
                </button>

                <AnimatePresence initial={false}>
                  {isFaqOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-600 dark:text-slate-400 text-xs leading-relaxed border-t border-slate-50 dark:border-slate-800/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Google Map & Coordinates Section */}
      <section id="google-maps-location-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
          {/* Coordinates Details Block */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Store Directions</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 mb-4 font-display">
                Come Visit Our Branch
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6">
                Shanti Medical Hall is located at a very prime spot on Belhariya Road in Tekari, making it extremely accessible for residents of Gaya and surrounding villages.
              </p>

              {/* Specific info rows */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-xs">
                  <div className="w-8 h-8 bg-slate-50 dark:bg-slate-950 text-accent-teal rounded-lg flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800/40">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-950 dark:text-white block">Location Address</span>
                    <span className="text-slate-500 dark:text-slate-400">{BUSINESS_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="w-8 h-8 bg-slate-50 dark:bg-slate-950 text-accent-teal rounded-lg flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800/40">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-950 dark:text-white block">Call for Stock Check</span>
                    <a href={BUSINESS_INFO.phoneUrl} className="text-slate-500 dark:text-slate-400 hover:text-accent-teal transition-colors">
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="w-8 h-8 bg-slate-50 dark:bg-slate-950 text-accent-teal rounded-lg flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800/40">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-950 dark:text-white block">Store Hours</span>
                    <span className="text-slate-500 dark:text-slate-400 block">Monday-Saturday: 08:00 AM - 10:00 PM</span>
                    <span className="text-slate-500 dark:text-slate-400 block">Sunday: 09:00 AM - 08:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-800/60 mt-8 flex flex-wrap gap-3">
              <a
                id="maps-direction-btn"
                href={BUSINESS_INFO.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-accent-teal hover:bg-accent-teal-hover text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-500/10 flex items-center gap-2"
              >
                <Map size={14} />
                Open Google Maps
              </a>
              <button
                id="contact-nav-tab-btn"
                onClick={() => onTabChange("contact")}
                className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-xl text-xs transition-colors"
              >
                Contact Information
              </button>
            </div>
          </div>

          {/* Embedded Google Map iframe */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px] relative">
            <iframe
              id="google-maps-embed-iframe"
              src={BUSINESS_INFO.googleMapsEmbed}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shanti Medical Hall Location Map"
            />
          </div>
        </div>
      </section>

      {/* 8. Contact CTA Section */}
      <section id="contact-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-800 to-med-blue-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          {/* Subtle graphic accent */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-teal-200 text-xs font-bold uppercase tracking-widest block">Need Urgent Medicines?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
              Send Your Prescription Now via WhatsApp
            </h2>
            <p className="text-teal-100 text-sm leading-relaxed max-w-2xl">
              Don't compromise on your health treatments. Connect with Shanti Medical Hall today, and let our verified pharmacists prepare your medication list immediately.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                id="cta-whatsapp-order-btn"
                onClick={() => onOpenWhatsAppModal()}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 border border-emerald-400"
              >
                <MessageSquare size={18} />
                WhatsApp Medicine Order
              </button>
              <a
                id="cta-call-btn"
                href={BUSINESS_INFO.phoneUrl}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Phone size={18} className="text-accent-teal" />
                Call +91 98356 86452
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
