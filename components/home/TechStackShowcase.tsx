"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import {
  Globe,
  Smartphone,
  LayoutDashboard,
  Users,
  FileSpreadsheet,
  PhoneCall,
  PieChart,
  Cloud,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Cpu
} from "lucide-react";

export default function TechStackShowcase() {
  const { language } = useLanguage();
  const { homepage } = useContent();

  const ts = homepage.techSection;
  const badge = language === "hi" ? (ts?.badgeHi || "तकनीकी सामर्थ्य") : (ts?.badgeEn || "Technology Stack");
  const heading = ts?.heading || (language === "hi" ? "चुनावी तकनीकी अवसंरचना" : "Technology-Driven Campaign Infrastructure");
  const sub = ts?.sub || (language === "hi" ? "आधुनिक सॉफ्टवेयर, क्लाउड सिस्टम और डेटा टूल्स के साथ अभियान को मिलती है अद्वितीय गति।" : "Empowering electoral operations with state-of-the-art software, telematics, and data governance.");

  const technologies = [
    {
      icon: <LayoutDashboard className="w-6 h-6 text-accent-orange" />,
      titleHi: "कैंपेन कमान डैशबोर्ड",
      titleEn: "Campaign Dashboards",
      descHi: "उम्मीदवार और रणनीतिकारों के लिए रीयल-टाइम मॉनिटरिंग और एनालिटिक्स।"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-sky-400" />,
      titleHi: "कार्यकर्ता मोबाइल ऐप",
      titleEn: "Worker Mobile Apps",
      descHi: "बूथ प्रभारियों व फील्ड टीम के लिए सरल हिंदी में डोर-टू-डोर ट्रैकिंग ऐप।"
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      titleHi: "आधिकारिक वेब पोर्टल्स",
      titleEn: "Official Web Portals",
      descHi: "उम्मीदवार की आधिकारिक वेबसाइट, जीवनी और घोषणापत्र मंच।"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      titleHi: "पॉलिटिकल CRM सिस्टम",
      titleEn: "Political CRM Systems",
      descHi: "कार्यकर्ताओं, समर्थकों और जनसमस्याओं का सुरक्षित वर्गीकरण।"
    },
    {
      icon: <PieChart className="w-6 h-6 text-accent-gold" />,
      titleHi: "डेटा विजुअलाइजेशन",
      titleEn: "Data Visualization",
      descHi: "बूथ-स्तरीय स्विंग रुझान, टर्नआउट अनुमान और जनसांख्यिकी मैपिंग।"
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-rose-400" />,
      titleHi: "क्लाउड टेलीफोनी प्लेटफॉर्म",
      titleEn: "Cloud Telephony Systems",
      descHi: "DLT-स्वीकृत बल्क SMS, ऑटोमेटेड IVR और कॉल सेंटर इंफ्रास्ट्रक्चर।"
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-amber-400" />,
      titleHi: "ऑटोमेटेड डेली रिपोर्टिंग",
      titleEn: "Automated Daily Reporting",
      descHi: "प्रतिदिन शाम 8 बजे स्वतः उत्पन्न होने वाली विस्तृत समीक्षा रिपोर्ट्स।"
    },
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      titleHi: "सुरक्षित क्लाउड आर्किटेक्चर",
      titleEn: "Encrypted Cloud Stack",
      descHi: "डेटा सुरक्षा और 24/7 सर्वर उपलब्धता के साथ सुरक्षित सर्वर।"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-accent-orange" />,
      titleHi: "AI-असिस्टेड प्रोडक्शन",
      titleEn: "AI-Assisted Production",
      descHi: "स्मार्ट वीडियो रेंडरिंग, वॉइसओवर और सोशल मीडिया क्रिएटिव जनरेशन।"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      titleHi: "प्रेडिक्टिव पोलिंग एनालिटिक्स",
      titleEn: "Polling Analytics",
      descHi: "जमीनी सर्वे और जनमत रुझानों का सांख्यिकीय विश्लेषण मॉडल।"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-navy-950 relative overflow-hidden border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-navy-700 text-accent-orange text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-hindi">
            {heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {sub}
          </p>
        </div>

        {/* 10 Technology Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-navy-900/80 border border-navy-800 hover:border-navy-600 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-accent-gold transition-colors font-hindi mb-2 leading-snug">
                  {language === "hi" ? tech.titleHi : tech.titleEn}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {tech.descHi}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-navy-850 flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                <span>SYSTEM v2.7</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scope disclaimer notice as required by Section 27 */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
            * नोट: प्रत्येक तकनीक मॉड्यूल अभियान की विशिष्ट आवश्यकताओं, कार्यक्षेत्र और अनुबंध के अनुसार अनुकूलित किया जाता है।
          </p>
        </div>

      </div>
    </section>
  );
}
