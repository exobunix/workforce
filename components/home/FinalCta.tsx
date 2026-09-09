"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import EnquiryModal from "@/components/shared/EnquiryModal";
import { Phone, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

export default function FinalCta() {
  const { t, language } = useLanguage();
  const { homepage, settings } = useContent();
  const [modalOpen, setModalOpen] = useState(false);

  const fc = homepage.finalCta || t.finalCta;
  const phone1 = settings.phone1 || "9621762121";
  const phone2 = settings.phone2 || "8467060042";

  return (
    <>
      <section className="py-12 lg:py-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden final-cta-section">
        {/* Cinematic gradient spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-royal-blue/30 via-accent-orange/20 to-accent-gold/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="rounded-3xl bg-gradient-to-b from-navy-850/95 to-navy-950/95 border border-accent-orange/50 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md keep-dark">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-orange/15 border border-accent-orange/40 text-accent-orange text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
              <span>🚩 UP Assembly 2027</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] font-hindi">
              <span>{fc.heading1}</span>
              <br />
              <span className="text-accent-gold">
                {fc.heading2}
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
              {fc.sub}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover hover:brightness-110 text-white font-bold text-sm sm:text-base shadow-xl shadow-accent-orange/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{fc.button1}</span>
              </button>

              <a
                href={`tel:${phone1}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 hover:border-emerald-400 transition-all flex items-center justify-center gap-2.5"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>{fc.button2}</span>
              </a>
            </div>

            {/* Direct Helpline Display */}
            <div className="mt-8 pt-8 border-t border-navy-800 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-slate-400 text-xs font-normal">हेल्पलाइन 1:</span>
                <a href={`tel:${phone1}`} className="text-white hover:text-accent-gold font-mono tracking-wider">
                  {phone1}
                </a>
              </div>

              <span className="text-slate-600 hidden sm:inline">•</span>

              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-slate-400 text-xs font-normal">हेल्पलाइन 2:</span>
                <a href={`tel:${phone2}`} className="text-white hover:text-accent-gold font-mono tracking-wider">
                  {phone2}
                </a>
              </div>

              <span className="text-slate-600 hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-normal">
                <ShieldCheck className="w-4 h-4" />
                <span>100% गोपनीय परामर्श</span>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-slate-500 max-w-xl mx-auto">
              {t.finalCta.disclaimer}
            </p>

          </div>
        </div>
      </section>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
