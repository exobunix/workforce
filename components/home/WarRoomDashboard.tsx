"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import {
  Activity,
  Radio,
  Users,
  MapPin,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Wifi,
  Clock,
  ShieldCheck
} from "lucide-react";

export default function WarRoomDashboard() {
  const { language } = useLanguage();
  const { homepage } = useContent();

  const [timeStr, setTimeStr] = useState("18:30:00");
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString("en-IN", { hour12: false }));
      setPulse((prev) => !prev);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const telemetry = homepage?.telemetry || {
    coveragePercent: "87%",
    totalBooths: "642",
    activeFieldTeams: "128",
    loggedActivities: "1,840+",
    tickerEvents: [
      "बूथ #312: बस्ता एवं वोटर स्लिप वितरण 92% पूर्ण",
      "एलईडी वैन #04: सेक्टर-B चौपाल वीडियो स्क्रीनिंग लाइव",
      "कॉल सेंटर डेस्क: 2,410 कॉल्स डिस्पैच (सकारात्मक 78%)"
    ]
  };

  const tickerEvents = telemetry.tickerEvents && telemetry.tickerEvents.length > 0
    ? telemetry.tickerEvents
    : [
        "बूथ #312: बस्ता एवं वोटर स्लिप वितरण 92% पूर्ण",
        "एलईडी वैन #04: सेक्टर-B चौपाल वीडियो स्क्रीनिंग लाइव",
        "कॉल सेंटर डेस्क: 2,410 कॉल्स डिस्पैच (सकारात्मक 78%)"
      ];

  return (
    <div className="relative rounded-2xl border border-navy-700/80 bg-gradient-to-b from-navy-900/90 via-navy-950/95 to-navy-950 p-5 sm:p-6 shadow-2xl backdrop-blur-xl text-slate-200 overflow-hidden dashboard-container">
      {/* Top glow lines */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-royal-blue/20 rounded-full blur-3xl pointer-events-none" />

      {/* Dashboard Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-navy-800">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-white block">
              CAMPAIGN INTELLIGENCE DASHBOARD
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              UP-AC2027 // WAR ROOM ENGINE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-accent-orange/15 border border-accent-orange/30 text-accent-gold">
            DEMO PREVIEW
          </span>
          <span className="text-xs font-mono font-semibold text-slate-400">
            {timeStr} IST
          </span>
        </div>
      </div>

      {/* 4 Core Stat Indicators */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Metric 1 */}
        <div className="p-3 rounded-xl bg-navy-900/80 border border-navy-800 hover:border-navy-700 transition dashboard-metric-card">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px] font-medium">
              {language === "hi" ? "विधानसभा कवरेज" : "Constituency Coverage"}
            </span>
            <TrendingUp className="w-3.5 h-3.5 text-accent-orange" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">{telemetry.coveragePercent || "87%"}</span>
            <span className="text-[10px] text-emerald-400 font-mono">+4.2% आज</span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-navy-950 rounded-full h-1.5 mt-2 overflow-hidden">
            <div className="bg-gradient-to-r from-accent-orange to-accent-gold h-1.5 rounded-full w-[87%]" />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-3 rounded-xl bg-navy-900/80 border border-navy-800 hover:border-navy-700 transition dashboard-metric-card">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px] font-medium">
              {language === "hi" ? "बूथ मॉनिटरिंग" : "Booth Monitoring"}
            </span>
            <MapPin className="w-3.5 h-3.5 text-accent-gold" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">{telemetry.totalBooths || "642"}</span>
            <span className="text-[10px] text-slate-400 font-mono">/ {telemetry.totalBooths || "642"} कुल</span>
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-[10px] text-emerald-400">
            <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
            <span>100% पन्ना प्रमुख एक्टिव</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-3 rounded-xl bg-navy-900/80 border border-navy-800 hover:border-navy-700 transition dashboard-metric-card">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px] font-medium">
              {language === "hi" ? "सक्रिय फील्ड टीमें" : "Field Teams Active"}
            </span>
            <Users className="w-3.5 h-3.5 text-sky-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">{telemetry.activeFieldTeams || "128"}</span>
            <span className="text-[10px] text-sky-400 font-mono">GPS ट्रैक्ड</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 truncate">
            डोर-टू-डोर व चौपाल संचालन
          </p>
        </div>

        {/* Metric 4 */}
        <div className="p-3 rounded-xl bg-navy-900/80 border border-navy-800 hover:border-navy-700 transition dashboard-metric-card">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px] font-medium">
              {language === "hi" ? "अभियान गतिविधियां" : "Campaign Activities"}
            </span>
            <Activity className="w-3.5 h-3.5 text-rose-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">{telemetry.loggedActivities || "1,840+"}</span>
            <span className="text-[10px] text-emerald-400 font-mono">लॉग्ड</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 truncate">
            रील्स, कॉल्स, चौपाल, बैठकें
          </p>
        </div>
      </div>

      {/* Real-Time Telemetry Feed Strip */}
      <div className="p-3 rounded-xl bg-navy-950/90 border border-navy-800 space-y-2 dashboard-telemetry">
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-accent-orange animate-pulse" />
            <span>{language === "hi" ? "लाइव फील्ड इवेंट्स स्ट्रीम" : "Live Field Telemetry Stream"}</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">24/7 AUTO-SYNC</span>
        </div>

        <div className="space-y-1.5 font-mono text-[11px]">
          {tickerEvents.map((evt, idx) => {
            const colors = ["bg-emerald-400", "bg-accent-orange", "bg-sky-400", "bg-purple-400"];
            const color = colors[idx % colors.length];
            return (
              <div key={idx} className="flex items-center justify-between p-1.5 rounded bg-navy-900/60 border border-navy-800/60 text-slate-300">
                <span className="flex items-center gap-1.5 truncate">
                  <span className={`w-1.5 h-1.5 rounded-full ${color}`}></span>
                  <span>{evt}</span>
                </span>
                <span className="text-[10px] text-slate-500 flex-shrink-0 ml-2">{idx === 0 ? "2m ago" : idx === 1 ? "6m ago" : "11m ago"}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="mt-3 pt-2 border-t border-navy-800/60 flex items-center justify-between text-[10px] text-slate-500">
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          <span>निजी एवं कस्टमाइज्ड क्लाउड आर्किटेक्चर</span>
        </div>
        <span className="italic">सचित्र निदर्शन (Illustrative Only)</span>
      </div>
    </div>
  );
}
