"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import {
  Database,
  Share2,
  PhoneCall,
  Newspaper,
  MapPin,
  Cpu,
  Award,
  Shield,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function OneAgencyPillars() {
  const { t, language } = useLanguage();
  const { homepage } = useContent();
  const [activePillar, setActivePillar] = useState(0);

  const oa = homepage.oneAgency || t.oneAgency;
  const badge = language === "hi" ? (oa.badgeHi || "7 मजबूत स्तंभ") : (oa.badgeEn || "7 Strategic Pillars");

  const pillarIcons = [
    <Database key="0" className="w-5 h-5 text-accent-gold" />,
    <Share2 key="1" className="w-5 h-5 text-accent-orange" />,
    <PhoneCall key="2" className="w-5 h-5 text-emerald-400" />,
    <Newspaper key="3" className="w-5 h-5 text-amber-400" />,
    <MapPin key="4" className="w-5 h-5 text-sky-400" />,
    <Cpu key="5" className="w-5 h-5 text-purple-400" />,
    <Award key="6" className="w-5 h-5 text-rose-400" />
  ];

  return (
    <section className="py-12 lg:py-16 bg-navy-950 relative overflow-hidden border-y border-navy-800">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-royal-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-navy-700 text-accent-gold text-xs font-bold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 text-accent-orange" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-hindi leading-tight">
            {oa.title1}{" "}
            <span className="text-accent-orange block sm:inline">
              {oa.title2}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {oa.sub}
          </p>
        </div>

        {/* 7 Vertical Pillars Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 items-stretch">
          {(oa.pillars || t.oneAgency.pillars).map((pillar, idx) => {
            const isActive = activePillar === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActivePillar(idx)}
                className={`group relative rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between text-left cursor-pointer min-h-[260px] ${
                  isActive
                    ? "bg-gradient-to-b from-navy-850 via-navy-800 to-navy-900 border-accent-orange shadow-xl shadow-accent-orange/10 -translate-y-2 keep-dark"
                    : "bg-navy-900/60 border-navy-800/80 hover:border-navy-700"
                }`}
              >
                {/* Pillar Number */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-accent-gold transition-colors">
                      0{idx + 1}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-navy-950 border border-navy-700/80 flex items-center justify-center">
                      {pillarIcons[idx]}
                    </div>
                  </div>

                  <span className="text-xs font-mono font-black text-accent-orange uppercase tracking-wider block mb-1">
                    {pillar.name}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-accent-gold transition-colors leading-snug font-hindi">
                    {pillar.nameHi}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Active Indicator */}
                <div className="pt-4 border-t border-navy-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    PILLAR 0{idx + 1}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isActive ? "bg-accent-orange animate-ping" : "bg-navy-700"}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Command Footer Note */}
        <div className="mt-12 p-6 rounded-2xl bg-navy-900/80 border border-navy-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white font-hindi">
              अलग-अलग वेंडरों के झंझट से मुक्ति — एक ही पेशेवर कमान
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              सभी 7 स्तम्भों के आंकड़े और इनपुट्स सीधे हमारे केंद्रीय वॉर रूम डैशबोर्ड से जुड़े होते हैं।
            </p>
          </div>

          <Link
            href="/process"
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-accent-orange hover:text-accent-gold transition-colors"
          >
            <span>कार्यप्रणाली विस्तार से देखें</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
