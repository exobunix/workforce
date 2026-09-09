"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import {
  Monitor,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Users,
  Radio,
  BarChart2,
  ArrowRight,
  ShieldAlert
} from "lucide-react";

export default function CommandCenterPreview() {
  const { t, language } = useLanguage();
  const { homepage } = useContent();
  const [activeTab, setActiveTab] = useState<"social" | "field" | "calls" | "booth">("booth");

  const cc = homepage.commandCenter || t.commandCenter;
  const badge = language === "hi" ? (cc.badgeHi || cc.sub || "केंद्रीकृत कमान एवं नियंत्रण प्रणाली") : (cc.badgeEn || "Centralized Command & Control Matrix");

  return (
    <section className="py-12 lg:py-16 bg-navy-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-royal-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Command Center Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-navy-700 text-accent-orange text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-hindi">
              {cc.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {cc.desc}
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{cc.bullet1}</span>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{cc.bullet2}</span>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{cc.bullet3}</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/services/election-war-room"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover text-white font-bold text-sm shadow-xl shadow-accent-orange/20 transition-all hover:brightness-110"
              >
                <span>{t.commandCenter.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive War Room UI Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-navy-700 bg-navy-900/90 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
              {/* Header with Switcher Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-navy-800">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-accent-orange" />
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    ELECTION CONTROL MATRIX
                  </span>
                </div>

                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-navy-950 border border-navy-800 text-[11px] font-mono">
                  {(["booth", "calls", "field", "social"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === tab
                          ? "bg-royal-blue text-white font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Content based on Active Tab */}
              {activeTab === "booth" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800">
                      <span className="text-[10px] text-slate-400 font-mono block mb-1">
                        BOOTH INTEGRITY
                      </span>
                      <span className="text-2xl font-black text-white">412 / 412</span>
                      <span className="text-[11px] text-emerald-400 block mt-1">100% कमेटियां गठित</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800">
                      <span className="text-[10px] text-slate-400 font-mono block mb-1">
                        CRITICAL SWING
                      </span>
                      <span className="text-2xl font-black text-accent-orange">84 Booths</span>
                      <span className="text-[11px] text-accent-gold block mt-1">विशेष फोकस सूची</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-2.5">
                    <div className="flex justify-between text-xs font-medium text-slate-300">
                      <span>वोटर संपर्क प्रगति (डोर-टू-डोर)</span>
                      <span className="text-accent-gold font-mono">79.4%</span>
                    </div>
                    <div className="w-full bg-navy-900 rounded-full h-2">
                      <div className="bg-gradient-to-r from-accent-orange to-accent-gold h-2 rounded-full w-[79.4%]" />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>326 गांव / 88 वार्ड कवर</span>
                      <span>लक्षित अवधि: 15 दिन शेष</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "calls" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800">
                      <span className="text-[10px] text-slate-400 font-mono block mb-1">
                        CALLS DISPATCHED
                      </span>
                      <span className="text-2xl font-black text-white">48,210</span>
                      <span className="text-[11px] text-emerald-400 block mt-1">82% कनेक्टिविटी</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800">
                      <span className="text-[10px] text-slate-400 font-mono block mb-1">
                        FAVORABLE SENTIMENT
                      </span>
                      <span className="text-2xl font-black text-emerald-400">76.8%</span>
                      <span className="text-[11px] text-slate-400 block mt-1">वेरिफाइड वोटर समर्थन</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 space-y-1.5 text-xs text-slate-300">
                    <div className="flex justify-between font-mono text-[11px] text-slate-400">
                      <span>स्थानीय बोली संवाद</span>
                      <span className="text-accent-gold">अवधी / भोजपुरी / ब्रज</span>
                    </div>
                    <p className="text-[11px] text-slate-400 pt-1 border-t border-navy-800/60">
                      नागरिकों द्वारा उठाई गई प्रमुख समस्याएं: सड़क, बिजली और सिंचाई। सारांश रिपोर्ट उम्मीदवार को प्रेषित।
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "field" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800">
                      <span className="text-[10px] text-slate-400 font-mono block mb-1">
                        GPS TRACKED TEAMS
                      </span>
                      <span className="text-2xl font-black text-white">32 Units</span>
                      <span className="text-[11px] text-sky-400 block mt-1">सक्रिय जनसंपर्क में</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800">
                      <span className="text-[10px] text-slate-400 font-mono block mb-1">
                        LED RATH FLEET
                      </span>
                      <span className="text-2xl font-black text-accent-gold">4 Vans</span>
                      <span className="text-[11px] text-emerald-400 block mt-1">दैनिक 36 चौपाल कवरेज</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                      <span className="text-slate-200">लाइव वाहन ट्रैकिंग चालू है</span>
                    </div>
                    <span className="font-mono text-slate-500 text-[10px]">AIS-140 GPS</span>
                  </div>
                </div>
              )}

              {activeTab === "social" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800">
                      <span className="text-[10px] text-slate-400 font-mono block mb-1">
                        WEEKLY REACH
                      </span>
                      <span className="text-2xl font-black text-white">4.8M+</span>
                      <span className="text-[11px] text-emerald-400 block mt-1">मेटा व यूट्यूब कुल रीच</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800">
                      <span className="text-[10px] text-slate-400 font-mono block mb-1">
                        REELS PRODUCED
                      </span>
                      <span className="text-2xl font-black text-rose-400">28 Reels</span>
                      <span className="text-[11px] text-accent-gold block mt-1">100% स्थानीय मुद्दे</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 text-xs text-slate-300">
                    <span className="text-accent-orange font-bold block mb-1">रैपिड नैरेटिव रिस्पांस:</span>
                    <p className="text-[11px] text-slate-400">
                      विरोधी दुष्प्रचार या भ्रामक खबरों पर औसतन 12 मिनट के भीतर तथ्यात्मक स्पष्टीकरण एवं वीडियो जारी।
                    </p>
                  </div>
                </div>
              )}

              {/* Matrix Footer */}
              <div className="pt-4 mt-4 border-t border-navy-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>WAR ROOM SUITE v2.7</span>
                <span className="text-accent-gold italic">डेमो मॉडल (Illustrative Data)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
