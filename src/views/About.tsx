/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BUSINESS_INFO, STORE_TIMELINE, IMAGES } from "../data";
import { Award, ShieldCheck, HeartPulse, Sparkles, Building2, Quote } from "lucide-react";

export default function About() {
  const values = [
    { title: "Efficacy & Integrity", desc: "Every capsule and device is subject to multi-stage checks. We have zero tolerance for expired or counterfeit formulations.", icon: ShieldCheck, bg: "bg-emerald-50 dark:bg-emerald-950/20", color: "text-emerald-600 dark:text-emerald-400" },
    { title: "Patient Compassion", desc: "We support families beyond just transactions, writing simple usage instructions, adjusting pricing for chronic care, and giving clinical care.", icon: HeartPulse, bg: "bg-rose-50 dark:bg-rose-950/20", color: "text-rose-600 dark:text-rose-400" },
    { title: "Local Pride", desc: "Serving Tekari, Gaya, and neighboring rural villages for over 2.5 decades has established us as a reliable pillar of the community.", icon: Award, bg: "bg-amber-50 dark:bg-amber-950/20", color: "text-amber-600 dark:text-amber-400" },
    { title: "Operational Excellence", desc: "From strict cold-chain refrigeration for insulins to digital WhatsApp presorting, we integrate premium workflows for customer ease.", icon: Sparkles, bg: "bg-sky-50 dark:bg-sky-950/20", color: "text-sky-600 dark:text-sky-400" }
  ];

  return (
    <div id="about-view" className="space-y-20 pt-28 pb-12">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Our Story & Legacy</span>
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white font-display uppercase tracking-wide">
          About Shanti Medical Hall
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm">
          A licensed, family-operated local pharmacy serving Gaya, Bihar since 1998 with unwavering dedication to health standards.
        </p>
        <div className="w-16 h-1 bg-accent-teal mx-auto rounded-full mt-4" />
      </section>

      {/* 2. Business Story & Storefront Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Storefront Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent-teal to-sky-500 rounded-2xl blur opacity-25" />
            <div className="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2.5 rounded-2xl shadow-lg">
              <img
                src={IMAGES.storefront}
                alt="Shanti Medical Hall Main Retail Counter"
                className="w-full h-auto object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                <span className="text-xs font-bold text-accent-teal uppercase tracking-widest block mb-1">Our Storefront</span>
                <p className="text-[10px] text-slate-300">Located at Belhariya Road, Bela - Tekari Rd, Tekari, Gaya, Bihar</p>
              </div>
            </div>
          </div>

          {/* Business story details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-accent-teal uppercase tracking-wider block">Established 1998</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
              Serving our local community for over two and a half decades
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Shanti Medical Hall was founded in 1998 by <strong>Mr. Shanti Kumar</strong>, with a clear purpose: to bridge the critical gap in genuine healthcare supply in Tekari. In an era when duplicate medicines and inconsistent pricing troubled local families, we committed to supplying exclusively 100% authentic, batch-verified pharmaceutical solutions.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Over the years, we grew from a small neighborhood chemist into Tekari's premier family pharmacy. We expanded our inventory to feature specialized orthopedic braces, premium child wellness goods, diagnostic monitoring kits, and high-purity health proteins. Despite our growth, our foundational promise remains untouched: genuine medications, reasonable pricing, and ethical storage.
            </p>

            {/* In-view quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800/60">
              <div>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono block">25+</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Years Active</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono block">10,000+</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Patients Served</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono block">100%</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Genuine Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision, and Values */}
      <section className="bg-slate-50 dark:bg-slate-950/40 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Mission & Vision Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="w-10 h-10 bg-teal-50 dark:bg-teal-950/30 text-accent-teal rounded-lg flex items-center justify-center mb-5 border border-teal-100/40">
                <Building2 size={20} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-display uppercase tracking-wide">
                Our Mission
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                To safeguard the well-being of families in Tekari and rural Gaya by supplying strictly genuine, licensed medicines, pediatric foods, and life-saving accessories under professional oversight, making authentic healthcare affordable to all income categories.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="w-10 h-10 bg-sky-50 dark:bg-sky-950/30 text-sky-600 rounded-lg flex items-center justify-center mb-5 border border-sky-100/40">
                <Sparkles size={20} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-display uppercase tracking-wide">
                Our Vision
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                To build Tekari's most trusted, digitally enabled healthcare retailing ecosystem—combining expert face-to-face consultation with seamless WhatsApp remote ordering and storage reliability, setting a high local standard for retail pharmacy operations.
              </p>
            </div>
          </div>

          {/* Core Corporate Values */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Our Core Values</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-3 font-display">
                What Guides Our Service
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-xl shadow-sm">
                  <div className={`w-10 h-10 ${v.bg} ${v.color} rounded-lg flex items-center justify-center mb-4`}>
                    <v.icon size={20} />
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 font-display">
                    {v.title}
                  </h5>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-teal">Store Evolution</span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-3 font-display">
            Milestones of Trust
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs">A brief overview of how we have served you over the years.</p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-12">
          {STORE_TIMELINE.map((tl, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10">
              {/* Timeline bubble */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent-teal border-4 border-white dark:border-slate-950" />

              {/* Year label */}
              <span className="inline-block bg-teal-50 dark:bg-teal-950/40 text-accent-teal border border-teal-100/40 text-xs font-bold px-3 py-1 rounded-full font-mono mb-2">
                {tl.year}
              </span>

              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 font-display">
                {tl.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed max-w-3xl">
                {tl.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Owner Message */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-slate-100 rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          {/* Giant decorative Quote sign */}
          <Quote className="absolute right-6 top-6 text-slate-800/40 rotate-180" size={120} />

          <div className="relative z-10 space-y-6">
            <span className="text-xs font-bold text-accent-teal uppercase tracking-widest block">Message from the Founder</span>
            <p className="text-slate-300 italic text-sm sm:text-base leading-relaxed">
              "When I established Shanti Medical Hall in 1998, my aim was simple: to make sure that no family in Tekari ever had to compromise on their loved ones' health due to unavailable or counterfeit medications. Your health is your most precious asset. To honor that, our staff ensures that every medication sheet on our shelves is batch-certified, expiry-regulated, and stored in peak conditions. We look forward to serving you with the same ethics and local care for decades to come."
            </p>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white font-display">Mr. Shanti Kumar</h4>
                <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">Owner, Shanti Medical Hall</span>
              </div>
              <span className="text-xs text-accent-teal font-mono">Tekari, Gaya, Bihar</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
