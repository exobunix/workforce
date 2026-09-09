"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import {
  Database,
  Compass,
  FileCode,
  PhoneCall,
  MapPin,
  Activity,
  ClipboardCheck,
  CheckCircle2,
  Workflow
} from "lucide-react";

export default function ProcessTimeline() {
  const { t, language } = useLanguage();
  const { homepage } = useContent();

  const proc = homepage.process || t.process;
  const badge = language === "hi" ? (proc.badgeHi || "कार्ययोजना") : (proc.badgeEn || "Methodology");

  const stepIcons = [
    <Database key="1" className="w-5 h-5 text-accent-gold" />,
    <Compass key="2" className="w-5 h-5 text-accent-orange" />,
    <FileCode key="3" className="w-5 h-5 text-sky-400" />,
    <PhoneCall key="4" className="w-5 h-5 text-emerald-400" />,
    <MapPin key="5" className="w-5 h-5 text-purple-400" />,
    <Activity key="6" className="w-5 h-5 text-rose-400" />,
    <ClipboardCheck key="7" className="w-5 h-5 text-accent-gold" />
  ];

  return (
    <section className="py-12 lg:py-16 bg-navy-900 relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-950 border border-navy-700 text-accent-orange text-xs font-bold uppercase tracking-widest">
            <Workflow className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-hindi">
            {proc.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {proc.sub}
          </p>
        </div>

        {/* Desktop Horizontal Process Pipeline */}
        <div className="hidden lg:block relative">
          {/* Connector Line behind the steps */}
          <div className="absolute top-1/2 left-4 right-4 -translate-y-8 h-1 bg-gradient-to-r from-navy-800 via-accent-orange/40 to-navy-800 z-0" />

          <div className="grid grid-cols-7 gap-3 relative z-10">
            {(proc.steps || t.process.steps).map((step, idx) => (
              <div
                key={idx}
                className="group relative p-4 rounded-2xl bg-navy-950/90 border border-navy-700/80 hover:border-accent-orange transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between text-left min-h-[260px] shadow-xl hover:shadow-2xl hover:shadow-navy-950"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-navy-900 text-accent-gold border border-navy-800">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {stepIcons[idx]}
                    </div>
                  </div>

                  <h3 className="text-sm font-black text-accent-orange uppercase tracking-wider mb-2 font-mono">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-navy-800/80 flex items-center gap-1 text-[10px] text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>प्रमाणित प्रक्रिया</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l-2 border-accent-orange/40 space-y-6">
          {t.process.steps.map((step, idx) => (
            <div key={idx} className="relative p-5 rounded-xl bg-navy-950/80 border border-navy-800">
              {/* Bullet node on timeline */}
              <div className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-navy-900 border-2 border-accent-orange flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-accent-gold">
                  PHASE {step.num}
                </span>
                <span className="text-xs font-black text-accent-orange uppercase font-mono">
                  {step.title}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
