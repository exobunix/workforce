"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import { ShieldCheck, CheckCircle2, FileText, Lock, Scale, Check } from "lucide-react";

export default function ComplianceSection() {
  const { t, language } = useLanguage();
  const { homepage } = useContent();

  const comp = homepage.compliance || t.compliance;
  const badge = language === "hi" ? (comp.badgeHi || (comp as any).badge || "विधिक एवं नैतिक प्रतिबद्धता") : (comp.badgeEn || "Statutory & Ethical Compliance");

  return (
    <section className="py-12 lg:py-16 bg-navy-950 relative overflow-hidden border-t border-navy-800" id="compliance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-b from-navy-850 via-navy-900 to-navy-950 border border-navy-700 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative shields in background */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent-orange/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-royal-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-950 border border-navy-700 text-accent-gold text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-hindi leading-tight">
              {comp.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {comp.desc}
            </p>
          </div>

          {/* 8 Compliance Commitments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-navy-800/80">
            {t.compliance.points.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-navy-950/70 border border-navy-800/80 flex items-start gap-3 hover:border-slate-600 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Institutional Trust Footnote */}
          <div className="mt-10 pt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span>भारत निर्वाचन आयोग (ECI) एवं लागू राज्य निर्वाचन कानूनों के प्रति पूर्ण निष्ठा।</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>DPDP Act 2023 एवं सख्त गोपनीयता (Non-Disclosure) अनुबंध।</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
