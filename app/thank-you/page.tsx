"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Home, Phone, ShieldCheck } from "lucide-react";

export default function ThankYouPage() {
  const { language } = useLanguage();

  return (
    <main className="flex-1 min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-navy-950 bg-grid-pattern relative">
      <div className="max-w-xl w-full text-center space-y-8 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-navy-850 to-navy-950 border border-navy-700 shadow-2xl relative z-10">
        
        {/* Animated Checkmark */}
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-white font-hindi">
            {language === "hi" ? "धन्यवाद!" : "Thank You!"}
          </h1>

          <h2 className="text-lg sm:text-xl font-bold text-accent-gold font-hindi">
            {language === "hi"
              ? "आपकी जानकारी सफलतापूर्वक प्राप्त हो गई है।"
              : "Your Campaign Brief Has Been Received."}
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            {language === "hi"
              ? "हमारी वरिष्ठ रणनीति टीम आपके द्वारा साझा की गई जानकारी की समीक्षा करेगी और उपलब्ध संपर्क विवरण के माध्यम से 24 घंटे के भीतर आपसे संपर्क करेगी।"
              : "Our senior strategic directorship will review your brief and initiate consultation via your provided contact number within 24 hours."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-white font-bold text-sm border border-navy-700 flex items-center justify-center gap-2 transition"
          >
            <Home className="w-4 h-4" />
            <span>{language === "hi" ? "होम पर जाएं" : "Return Home"}</span>
          </Link>

          <a
            href="tel:9621762121"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover text-white font-bold text-sm shadow-lg shadow-accent-orange/25 flex items-center justify-center gap-2 transition hover:brightness-110"
          >
            <Phone className="w-4 h-4" />
            <span>{language === "hi" ? "Call Now: 9621762121" : "Call Now: 9621762121"}</span>
          </a>
        </div>

        <div className="pt-4 border-t border-navy-800 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-accent-gold" />
          <span>आपकी जानकारी पूर्णतः सुरक्षित और गोपनीय है।</span>
        </div>

      </div>
    </main>
  );
}
