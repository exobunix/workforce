"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import { Database, Share2, MapPin, ArrowRight, CheckCircle2, Shield } from "lucide-react";

export default function AboutTeaser() {
  const { t, language } = useLanguage();
  const { homepage } = useContent();

  const at = homepage.aboutTeaser || t.aboutTeaser;

  const cardIcons = [
    <Database key="data" className="w-6 h-6 text-accent-gold" />,
    <Share2 key="digital" className="w-6 h-6 text-accent-orange" />,
    <MapPin key="ground" className="w-6 h-6 text-emerald-400" />
  ];

  return (
    <section className="py-12 lg:py-16 bg-navy-950 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-royal-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-navy-700/80 text-accent-gold text-xs font-semibold tracking-wider uppercase mb-4">
            <Shield className="w-3.5 h-3.5 text-accent-orange" />
            <span>{language === "hi" ? (at.badgeHi || "संस्थागत विजन") : (at.badgeEn || "Institutional Vision")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] font-hindi">
            {at.heading1}{" "}
            <span className="text-accent-orange block sm:inline">
              {at.heading2}
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            <p>{at.p1}</p>
            <p className="text-slate-400">{at.p2}</p>
          </div>
        </div>

        {/* Central Stature Banner & 3 Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Highlight Callout Box */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-br from-royal-blue/40 via-navy-900 to-navy-950 border border-navy-700 flex flex-col justify-between shadow-2xl relative overflow-hidden keep-dark">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-orange/15 rounded-full blur-2xl" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono font-bold text-accent-orange tracking-widest uppercase">
                INTEGRATED ARCHITECTURE
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight font-hindi">
                {at.highlightTitle}
                <br />
                <span className="text-accent-gold">
                  {at.highlightSub}
                </span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === "hi"
                  ? (at.highlightDescHi || "रणनीति, डेटा, जनसंपर्क, तकनीक और फील्ड ऑपरेशंस का एक ही मंच से संचालन।")
                  : (at.highlightDescEn || "Orchestrating strategy, voter science, media, IT platforms, and field ops from one center.")}
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent-orange hover:text-accent-gold transition-colors group"
              >
                <span>{at.cta || t.aboutTeaser.cta}</span>
              </Link>
            </div>
          </div>

          {/* 3 Pillar Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {(at.cards || t.aboutTeaser.cards).map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-900/80 border border-navy-800 hover:border-accent-orange/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-950 border border-navy-700/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {cardIcons[idx]}
                  </div>

                  <span className="text-xs font-mono font-bold text-accent-orange tracking-wider block mb-1">
                    {card.tag}
                  </span>

                  <h4 className="text-lg font-bold text-white group-hover:text-accent-gold transition-colors leading-snug">
                    {card.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-navy-800/80 flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>सत्यापित परिचालन क्षमता</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
