"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import SolutionShowcase from "@/components/home/SolutionShowcase";
import FinalCta from "@/components/home/FinalCta";
import EnquiryModal from "@/components/shared/EnquiryModal";
import { Sparkles, ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  const { language } = useLanguage();
  const { pages } = useContent();
  const [modalOpen, setModalOpen] = useState(false);

  const sol = pages.solutions;

  return (
    <main className="flex-1 bg-navy-900 text-slate-100 overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900 border-b border-navy-800 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
              <Link href="/" className="hover:text-accent-gold">HOME</Link>
              <span>/</span>
              <span className="text-accent-orange font-bold">SOLUTIONS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-hindi leading-tight">
              {language === "hi"
                ? (sol?.heading || "Campaign Solution Examples")
                : "Electoral Campaign Solution Concepts"}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              {language === "hi"
                ? (sol?.sub || "पारदर्शिता और विश्वसनीयता के साथ प्रस्तुत किए गए अवधारणात्मक समाधान मॉडल — डिजिटल कमांड सेंटर, डेटा डैशबोर्ड, वार रूम और ब्रांडिंग सिस्टम।")
                : "Illustrative operational blueprints and technology frameworks presented transparently without fabricated performance claims."}
            </p>

            <div className="pt-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover text-white font-bold text-sm shadow-xl shadow-accent-orange/20 transition-all hover:brightness-110 cursor-pointer"
              >
                <span>{language === "hi" ? "कस्टम समाधान तैयार करवाएं" : "Structure Custom Blueprint"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <SolutionShowcase />

      {/* Final CTA */}
      <FinalCta />

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
