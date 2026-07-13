/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BUSINESS_INFO } from "../data";
import { InquiryInput } from "../types";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Map } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [form, setForm] = useState<InquiryInput>({
    name: "",
    phone: "",
    email: "",
    subject: "Inquiry on Medicine Availability",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database query/email dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        subject: "Inquiry on Medicine Availability",
        message: ""
      });

      // Clear success notification after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <div id="contact-view" className="space-y-20 pt-28 pb-12">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Get in Touch</span>
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white font-display uppercase tracking-wide">
          Contact & Directions
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm">
          Have an inquiry about medicine stocks, chronic prescription billing, or home delivery? Contact Shanti Medical Hall today.
        </p>
        <div className="w-16 h-1 bg-accent-teal mx-auto rounded-full mt-4" />
      </section>

      {/* 2. Form & Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display uppercase tracking-wider">
              Business Location Details
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
              Our store is conveniently located on Belhariya Road in Tekari, Gaya. Walking into our branch connects you directly with friendly pharmacists who prioritize your health.
            </p>

            <div className="space-y-4">
              {/* Address card */}
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 bg-teal-50 dark:bg-teal-950/20 text-accent-teal rounded-lg flex items-center justify-center shrink-0 border border-teal-100/40">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">Store Address</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{BUSINESS_INFO.location}</p>
                </div>
              </div>

              {/* Phone card */}
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 bg-sky-50 dark:bg-sky-950/20 text-sky-600 rounded-lg flex items-center justify-center shrink-0 border border-sky-100/40">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">Call Desk (Click to call)</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">For immediate inventory inquiries:</p>
                  <a href={BUSINESS_INFO.phoneUrl} className="text-sm font-bold text-slate-900 dark:text-white hover:text-accent-teal transition-colors mt-1 block">
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 rounded-lg flex items-center justify-center shrink-0 border border-emerald-100/40">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">Email Correspondence</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mb-1">Send your documents or official feedback:</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xs font-bold text-slate-900 dark:text-white hover:text-accent-teal transition-colors font-mono">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 p-5 rounded-xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">Working Hours</h4>
                  {BUSINESS_INFO.workingHours.map((wh, idx) => (
                    <p key={idx} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      <strong>{wh.days}:</strong> {wh.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                Quick Inquiry Form
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                Fill out the secure form below, and we will contact you directly regarding your health needs.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  id="inquiry-success-notif"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 p-6 rounded-xl text-center space-y-3"
                >
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Inquiry Submitted Successfully!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs max-w-sm mx-auto">
                    Thank you for contacting Shanti Medical Hall. One of our retail specialists will review your enquiry and contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-xs transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Contact Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-xs transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-xs transition-all"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-xs transition-all"
                      >
                        <option>Inquiry on Medicine Availability</option>
                        <option>Monthly Chronic Care Discounts</option>
                        <option>Diagnostic Equipment Setup</option>
                        <option>Delivery Status check</option>
                        <option>General Feedback</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Message Notes *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Enter details of your inquiry here..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-xs transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-teal hover:bg-accent-teal-hover disabled:bg-slate-400 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-emerald-500/10 hover:shadow-lg flex items-center justify-center gap-2 text-xs"
                  >
                    <Send size={15} />
                    {isSubmitting ? "Submitting Inquiry..." : "Submit Quick Inquiry"}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. Full Map block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm h-[400px] relative">
          <iframe
            id="contact-large-map-iframe"
            src={BUSINESS_INFO.googleMapsEmbed}
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shanti Medical Hall Location Map Complete"
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <span>Coordinates: Latitude 24.9311 | Longitude 84.8322</span>
          <a
            id="contact-large-maps-directions-link"
            href={BUSINESS_INFO.googleMapsLink}
            target="_blank"
            rel="noreferrer"
            className="text-accent-teal hover:underline font-bold flex items-center gap-1.5"
          >
            <Map size={14} />
            Open Directly in Google Maps Application
          </a>
        </div>
      </section>
    </div>
  );
}
