/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { SERVICES_LIST } from "../data";
import {
  Pill,
  HeartPulse,
  Sparkles,
  Baby,
  UserCheck,
  Activity,
  Scissors,
  Briefcase,
  Droplets,
  ShieldAlert,
  Check,
  MessageCircle
} from "lucide-react";

// Helper function to resolve string to icon component dynamically
const IconResolver = ({ name, size = 22, className = "text-accent-teal" }: { name: string; size?: number; className?: string }) => {
  const iconMap: Record<string, React.ComponentType<{ size: number; className: string }>> = {
    Pill,
    HeartPulse,
    Sparkles,
    Baby,
    UserCheck,
    Activity,
    Scissors,
    Briefcase,
    Droplets,
    ShieldAlert
  };

  const ResolvedIcon = iconMap[name] || Pill;
  return <ResolvedIcon size={size} className={className} />;
};

interface ServicesProps {
  onOpenWhatsAppModal: (prefilledMed?: string) => void;
}

export default function Services({ onOpenWhatsAppModal }: ServicesProps) {
  return (
    <div id="services-view" className="space-y-20 pt-28 pb-12">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Our Comprehensive Offerings</span>
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white font-display uppercase tracking-wide">
          Pharmacy & Healthcare Services
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm">
          Shanti Medical Hall is equipped with regulated pharmaceutical storage facilities and an extensive inventory to support all your clinical needs.
        </p>
        <div className="w-16 h-1 bg-accent-teal mx-auto rounded-full mt-4" />
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES_LIST.map((serv) => (
            <div
              id={`service-card-${serv.id}`}
              key={serv.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover-card-trigger shadow-sm"
            >
              {/* Service Icon */}
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-950 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-850">
                <IconResolver name={serv.icon} size={28} />
              </div>

              {/* Service Details */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display uppercase tracking-wider">
                    {serv.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    {serv.description}
                  </p>
                </div>

                {/* Sub-features listed nicely */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-4">
                  {serv.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 text-[11px]">
                      <div className="w-4 h-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                        <Check size={10} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Quick WhatsApp Inquiry CTA for this Service */}
                <div className="pt-4 border-t border-slate-50 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono">100% Genuine Supplies</span>
                  <button
                    id={`service-order-btn-${serv.id}`}
                    onClick={() => onOpenWhatsAppModal(`Enquiry regarding: ${serv.title}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-teal hover:text-accent-teal-hover transition-all"
                  >
                    <MessageCircle size={14} />
                    Order / Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Operational Standards banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 dark:bg-slate-950 text-slate-300 rounded-3xl p-8 md:p-12 border border-slate-850 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4 max-w-2xl">
            <span className="text-accent-teal text-xs font-bold uppercase tracking-widest block">Ethical Medical Standards</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white font-display uppercase">
              Strict Cold-Chain Preservation
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Certain immunizations, insulins, and biologic elements lose their therapeutic strength if exposed to unstable temperatures. At Shanti Medical Hall, we employ dedicated medical refrigeration units with automated voltage stabilizers and 24/7 solar battery backup to preserve compound efficacy perfectly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-4 shrink-0 w-full lg:w-auto">
            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-800 text-center flex-1 lg:flex-none lg:w-44">
              <span className="text-2xl font-bold text-white block">2°C - 8°C</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mt-1">Vaccine Temperature</span>
            </div>
            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-800 text-center flex-1 lg:flex-none lg:w-44">
              <span className="text-2xl font-bold text-white block">24 Hours</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mt-1">Power Backup Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
