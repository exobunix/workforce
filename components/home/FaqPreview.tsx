"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { faqsData } from "@/data/faqsData";
import { ChevronDown, HelpCircle, ArrowRight, Search } from "lucide-react";

export default function FaqPreview() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqsData.filter((f) => {
    const term = searchTerm.toLowerCase();
    const q = (language === "hi" ? f.qHi : f.qEn).toLowerCase();
    const a = (language === "hi" ? f.aHi : f.aEn).toLowerCase();
    return q.includes(term) || a.includes(term);
  });

  const previewList = searchTerm ? filteredFaqs.slice(0, 8) : faqsData.slice(0, 8);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-16 bg-navy-900 relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-950 border border-navy-700 text-accent-gold text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-accent-orange" />
            <span>{language === "hi" ? "अक्सर पूछे जाने वाले सवाल" : "Frequently Asked Questions"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-hindi">
            {language === "hi" ? "महत्वपूर्ण प्रश्न एवं समाधान" : "Important Inquiries & Answers"}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {language === "hi"
              ? "चुनाव प्रबंधन, सेवाओं, तकनीक और नियमों से जुड़े मुख्य सवालों के स्पष्ट उत्तर।"
              : "Clear, transparent answers concerning our campaign methodologies, technology, and legal frameworks."}
          </p>
        </div>

        {/* Quick Search Box */}
        <div className="mb-8 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={language === "hi" ? "सवाल खोजें... (उदा. सोशल मीडिया, बूथ, कॉल सेंटर, डेटा)" : "Search FAQs... (e.g. social media, booth, call center, data)"}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-navy-950/80 border border-navy-700 text-white text-sm placeholder-slate-500 focus:border-accent-orange outline-none transition"
          />
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {previewList.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-navy-700/70 bg-gradient-to-b from-navy-850 to-navy-950 overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-hindi leading-snug flex items-center gap-3">
                    <span className="text-xs font-mono text-accent-orange font-semibold flex-shrink-0">
                      Q{faq.id}.
                    </span>
                    <span>{language === "hi" ? faq.qHi : faq.qEn}</span>
                  </span>
                  <div className={`w-7 h-7 rounded-lg bg-navy-900 border border-navy-700 flex items-center justify-center flex-shrink-0 text-slate-300 transition-transform duration-200 ${isOpen ? "rotate-180 bg-accent-orange text-white" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-navy-800/60 animate-in fade-in duration-200">
                    <p>{language === "hi" ? faq.aHi : faq.aEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All FAQs CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm border border-navy-700 hover:border-accent-orange transition-all shadow-lg keep-dark group cursor-pointer"
          >
            <span>{language === "hi" ? "सभी 20 प्रश्न एवं उत्तर देखें" : "View All 20 Election Campaign FAQs"}</span>
            <ArrowRight className="w-4 h-4 text-accent-orange group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
