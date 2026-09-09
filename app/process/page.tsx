"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import FinalCta from "@/components/home/FinalCta";
import EnquiryModal from "@/components/shared/EnquiryModal";
import { Workflow, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ProcessPage() {
  const { language } = useLanguage();
  const { pages } = useContent();
  const [modalOpen, setModalOpen] = useState(false);

  const proc = pages.process;

  return (
    <main className="flex-1 bg-navy-900 text-slate-100 overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900 border-b border-navy-800 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
              <Link href="/" className="hover:text-accent-gold">HOME</Link>
              <span>/</span>
              <span className="text-accent-orange font-bold">METHODOLOGY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-hindi leading-tight">
              {language === "hi"
                ? (proc?.heading || "हमारी कार्यप्रणाली")
                : "Our Operational Methodology"}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              {language === "hi"
                ? (proc?.lead || "डेटा संकलन से लेकर रणनीति, कंटेंट, मतदाता संवाद, फील्ड क्रियान्वयन, मॉनिटरिंग और दैनिक रिपोर्टिंग तक की चरणबद्ध वैज्ञानिक व्यवस्था।")
                : "A disciplined seven-phase lifecycle turning constituency insights into coordinated field authority."}
            </p>

            <div className="pt-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover text-white font-bold text-sm shadow-xl shadow-accent-orange/20 transition-all hover:brightness-110 cursor-pointer"
              >
                <span>{language === "hi" ? "अभियान प्रक्रिया पर चर्चा करें" : "Discuss Operational Roadmap"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Process Interactive Component */}
      <ProcessTimeline />

      {/* Daily Reporting Protocol Callout */}
      <section className="py-16 bg-navy-950 border-y border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-950 border border-navy-700 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-accent-gold" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-hindi">
                  दैनिक शाम 8:00 बजे समीक्षा रिपोर्ट (Daily 8:00 PM Executive Dossier)
                </h3>
                <span className="text-xs text-accent-orange font-mono">ACCOUNTABILITY & TRANSPARENCY</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              प्रत्येक दिन के अंत में उम्मीदवार और उनकी कोर कमेटी को एक व्यापक रिपोर्ट सौंपी जाती है जिसमें निम्नलिखित शामिल होता है:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>दिन भर में कवर किए गए कुल गांव/वार्ड एवं डोर-टू-डोर संपर्क आंकड़े</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>कॉल सेंटर द्वारा की गई सफल कॉल्स एवं मतदाता संतुष्टि सारांश</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>सोशल मीडिया रीच, पोस्टर्स एंगेजमेंट और रील्स परफॉर्मेंस मैट्रिक्स</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>विरोधी नैरेटिव व स्थानीय समस्याओं पर वॉर रूम की त्वरित कार्रवाई रिपोर्ट</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
