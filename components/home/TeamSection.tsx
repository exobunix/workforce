"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import { Users, Shield, Briefcase, Award } from "lucide-react";

export default function TeamSection() {
  const { t, language } = useLanguage();
  const { homepage } = useContent();

  const ts = homepage.teamSection || t.team;
  const badge = language === "hi" ? (ts.badgeHi || (ts as any).badge || "मानव संसाधन एवं विशेषज्ञता") : (ts.badgeEn || "Human Capital");

  return (
    <section className="py-12 lg:py-16 bg-navy-900 relative overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-950 border border-navy-700 text-accent-gold text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-accent-orange" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-hindi">
            {ts.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {ts.sub}
          </p>
        </div>

        {/* 9 Specialized Team Division Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(ts.categories || t.team.categories).map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-navy-850 to-navy-950 border border-navy-800 hover:border-navy-600 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-navy-900 text-accent-gold border border-navy-800">
                    {cat.size}
                  </span>
                  <Briefcase className="w-4 h-4 text-accent-orange" />
                </div>

                <h3 className="text-lg font-bold text-white font-hindi mb-2">
                  {cat.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-navy-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>VERIFIED OPERATIONAL ROSTER</span>
                <span className="text-emerald-400">DEPLOYABLE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Framing note for integrity */}
        <div className="mt-8 text-center text-xs text-slate-500 italic max-w-2xl mx-auto">
          * वर्कफोर्स इन्फोटेक की संगठनात्मक टीम क्षमता चुनाव रणनीति, डेटा, डिजिटल मीडिया, कॉल सेंटर और फील्ड ऑपरेशंस के समेकित मानव संसाधन पूल को दर्शाती है।
        </div>

      </div>
    </section>
  );
}
