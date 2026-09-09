"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import {
  Layers,
  Database,
  Share2,
  Cpu,
  Video,
  Newspaper,
  Activity,
  FileCheck2,
  CheckCircle2,
  Award
} from "lucide-react";

export default function WhyChooseUs() {
  const { t, language } = useLanguage();
  const { homepage } = useContent();

  const wcu = homepage.whyChooseUs || t.whyWorkforce;
  const badge = language === "hi" ? (wcu.badgeHi || "प्रमुख विशेषताएं") : (wcu.badgeEn || "Key Differentiators");

  const cardIcons = [
    <Layers key="1" className="w-5 h-5 text-accent-orange" />,
    <Database key="2" className="w-5 h-5 text-accent-gold" />,
    <Share2 key="3" className="w-5 h-5 text-sky-400" />,
    <Cpu key="4" className="w-5 h-5 text-purple-400" />,
    <Video key="5" className="w-5 h-5 text-rose-400" />,
    <Newspaper key="6" className="w-5 h-5 text-amber-400" />,
    <Activity key="7" className="w-5 h-5 text-emerald-400" />,
    <FileCheck2 key="8" className="w-5 h-5 text-indigo-400" />
  ];

  return (
    <section className="py-12 lg:py-16 bg-navy-950 relative overflow-hidden" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-navy-700 text-accent-orange text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-hindi">
            {wcu.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {wcu.sub}
          </p>
        </div>

        {/* 8 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(wcu.cards || t.whyWorkforce.cards).map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-navy-900/80 border border-navy-800 hover:border-accent-orange/40 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {cardIcons[idx]}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-accent-gold transition-colors font-hindi mb-2">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-navy-850 flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>विश्वसनीय मानक</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
