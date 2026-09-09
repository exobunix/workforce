"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import { solutionsData } from "@/data/solutionsData";
import { Layers, ArrowRight, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";

export default function SolutionShowcase() {
  const { language } = useLanguage();
  const { homepage } = useContent();

  const ss = homepage.solutionShowcase;
  const badge = language === "hi" ? (ss?.badgeHi || "समाधान मॉडल") : (ss?.badgeEn || "Conceptual Solutions");
  const heading = ss?.heading || (language === "hi" ? "Campaign Solution Examples" : "Electoral Campaign Solution Concepts");
  const sub = ss?.sub || (language === "hi" ? "पारदर्शिता के साथ प्रस्तुत — तकनीकी एवं संगठनात्मक कार्यप्रणाली के नमूने।" : "Demonstrating our operational architecture and command workflows through structured concept prototypes.");

  return (
    <section className="py-12 lg:py-16 bg-navy-900 relative overflow-hidden" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-950 border border-navy-700 text-accent-gold text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent-orange" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-hindi">
            {heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {sub}
          </p>
        </div>

        {/* 5 Concept Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {solutionsData.map((item, idx) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-gradient-to-b from-navy-850 to-navy-950 border border-navy-700/80 p-6 sm:p-7 flex flex-col justify-between hover:border-accent-orange/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                {/* Header Tag & Illustrative Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-accent-orange uppercase">
                    {language === "hi" ? item.tagHi : item.tagEn}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-navy-900 text-[10px] font-mono text-accent-gold border border-navy-700 font-medium">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-hindi group-hover:text-accent-gold transition-colors mb-2 leading-snug">
                  {language === "hi" ? item.titleHi : item.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {language === "hi" ? item.descHi : item.descEn}
                </p>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-navy-950/80 border border-navy-800 mb-6 text-center">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="overflow-hidden">
                      <span className="text-xs sm:text-sm font-black text-white font-mono block truncate">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-slate-400 block truncate mt-0.5">
                        {language === "hi" ? m.labelHi : m.labelEn}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Core Features List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    {language === "hi" ? "मॉडल विशेषताएं:" : "Architectural Highlights:"}
                  </span>
                  {(language === "hi" ? item.featuresHi : item.featuresEn).map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-orange flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="pt-4 mt-6 border-t border-navy-800 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono">CONCEPT MODEL</span>
                <span className="italic text-accent-gold">Customizable</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Custom Solution Consultation Box */}
          <div className="rounded-2xl bg-gradient-to-br from-royal-blue/30 via-navy-900 to-navy-950 border border-accent-orange/40 p-6 sm:p-7 flex flex-col justify-between shadow-2xl keep-dark">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-accent-orange uppercase tracking-wider">
                CUSTOM CAMPAIGN BLUEPRINT
              </span>
              <h3 className="text-2xl font-bold text-white font-hindi">
                अपनी विधानसभा के लिए कस्टमाइज्ड रणनीति बनाएं
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                प्रत्येक विधानसभा क्षेत्र की जनसांख्यिकी और चुनावी चुनौतियां अलग होती हैं। हमारी टीम आपके क्षेत्र के अनुकूल विशेष कार्ययोजना तैयार करती है।
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover text-white font-bold text-sm shadow-lg shadow-accent-orange/20 transition-all hover:brightness-110"
              >
                <span>परामर्श सत्र प्रारंभ करें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
