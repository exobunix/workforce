"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import TechStackShowcase from "@/components/home/TechStackShowcase";
import FinalCta from "@/components/home/FinalCta";
import EnquiryModal from "@/components/shared/EnquiryModal";
import { Cpu, ArrowRight, ShieldCheck, CheckCircle2, Monitor, Smartphone, Lock } from "lucide-react";

export default function TechnologyPage() {
  const { language } = useLanguage();
  const { pages } = useContent();
  const [modalOpen, setModalOpen] = useState(false);

  const tech = pages.technology;

  return (
    <main className="flex-1 bg-navy-900 text-slate-100 overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900 border-b border-navy-800 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
              <Link href="/" className="hover:text-accent-gold">HOME</Link>
              <span>/</span>
              <span className="text-accent-orange font-bold">TECHNOLOGY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-hindi leading-tight">
              {language === "hi"
                ? (tech?.heading || "चुनावी तकनीकी समाधान")
                : "Election Technology & Digital Platforms"}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              {language === "hi"
                ? (tech?.sub || "अभियान को दें एक केंद्रीकृत डिजिटल सिस्टम — कमान डैशबोर्ड, कार्यकर्ता मोबाइल ऐप, टेलीफोनी और रीयल-टाइम मॉनिटरिंग टूल्स।")
                : "Equipping political campaigns with custom command dashboards, mobile worker applications, cloud telephony, and real-time operational telemetry."}
            </p>

            <div className="pt-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover text-white font-bold text-sm shadow-xl shadow-accent-orange/20 transition-all hover:brightness-110 cursor-pointer"
              >
                <span>{language === "hi" ? "तकनीकी समाधान डेमो का अनुरोध करें" : "Request Technology Demo"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Component */}
      <TechStackShowcase />

      {/* Security & Data Architecture Callout */}
      <section className="py-16 bg-navy-950 border-y border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            <div className="p-6 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy-950 border border-navy-700 flex items-center justify-center text-accent-gold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-hindi">
                बैंक-ग्रेड डेटा सुरक्षा एवं एन्क्रिप्शन
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                सभी डेटाबेस AES-256 बिट एन्क्रिप्शन और मल्टी-फैक्टर ऑथेंटिकेशन से सुरक्षित रहते हैं। किसी भी अनाधिकृत व्यक्ति की पहुंच पूर्णतः प्रतिबंधित है।
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy-950 border border-navy-700 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-hindi">
                DPDP Act 2023 एवं IT Act अनुपालन
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                हमारे सभी सॉफ्टवेयर और एप्लीकेशन भारतीय डेटा संरक्षण कानून और निर्वाचन आयोग के डिजिटल दिशा-निर्देशों के पूर्ण अनुपालन में निर्मित किए जाते हैं।
              </p>
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
