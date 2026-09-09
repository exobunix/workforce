"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import { Users, Database, Share2, MapPin, Cpu, Newspaper } from "lucide-react";

export default function TrustStrip() {
  const { t, language } = useLanguage();
  const { homepage } = useContent();

  const dynamicItems = homepage.trustStrip?.items?.map(item => ({
    stat: item.stat,
    label: language === "hi" ? item.labelHi : item.labelEn,
    desc: language === "hi" ? item.descHi : item.descEn
  })) || t.trustStrip.cards;

  const icons = [
    <Users key="1" className="w-5 h-5 text-accent-orange" />,
    <Database key="2" className="w-5 h-5 text-accent-gold" />,
    <Share2 key="3" className="w-5 h-5 text-sky-400" />,
    <MapPin key="4" className="w-5 h-5 text-emerald-400" />,
    <Cpu key="5" className="w-5 h-5 text-purple-400" />,
    <Newspaper key="6" className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section className="relative z-20 -mt-3 sm:-mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {dynamicItems.map((card, idx) => (
          <div
            key={idx}
            className="group relative p-4 rounded-2xl bg-gradient-to-b from-navy-850 to-navy-950 border border-navy-700/70 hover:border-accent-orange/50 shadow-xl transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Top subtle glow bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-accent-orange group-hover:to-transparent transition-all" />

            <div className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-700/80 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              {icons[idx]}
            </div>

            <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-accent-gold transition-colors font-mono">
              {card.stat}
            </span>

            <span className="text-xs font-bold text-slate-200 mt-0.5 leading-snug">
              {card.label}
            </span>

            <span className="text-[10px] text-slate-400 mt-1 leading-tight hidden sm:block">
              {card.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
