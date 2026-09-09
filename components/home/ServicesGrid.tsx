"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import { servicesData } from "@/data/servicesData";
import {
  ArrowRight,
  Share2,
  Database,
  Users,
  PhoneCall,
  Cpu,
  Video,
  Newspaper,
  Truck,
  Calendar,
  Award,
  ShieldAlert,
  CheckCircle,
  Layers
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Share2: <Share2 className="w-6 h-6 text-accent-orange" />,
  Database: <Database className="w-6 h-6 text-accent-gold" />,
  Users: <Users className="w-6 h-6 text-blue-400" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-emerald-400" />,
  Cpu: <Cpu className="w-6 h-6 text-purple-400" />,
  Video: <Video className="w-6 h-6 text-rose-400" />,
  Newspaper: <Newspaper className="w-6 h-6 text-amber-400" />,
  Truck: <Truck className="w-6 h-6 text-sky-400" />,
  Calendar: <Calendar className="w-6 h-6 text-indigo-400" />,
  Award: <Award className="w-6 h-6 text-accent-gold" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-red-400" />
};

export default function ServicesGrid() {
  const { language } = useLanguage();
  const { homepage } = useContent();

  const sec = homepage.servicesSection;
  const badge = language === "hi" ? (sec?.badgeHi || "11 एकीकृत चुनावी कार्यक्षेत्र") : (sec?.badgeEn || "11 Integrated Electoral Verticals");
  const heading = language === "hi" ? (sec?.headingHi || "हमारी संपूर्ण चुनाव प्रबंधन सेवाएं") : (sec?.headingEn || "Our Complete Campaign Management Services");
  const sub = language === "hi" ? (sec?.subHi || "रणनीति से लेकर जमीनी क्रियान्वयन और रिपोर्टिंग तक संपूर्ण समाधान।") : (sec?.subEn || "End-to-end solutions from strategy to grassroots execution and daily command reporting.");

  // Merge dynamic overrides if admin updated any service title/shortDesc
  const displayServices = servicesData.map(s => {
    const override = sec?.services?.find(item => item.id === s.id || item.slug === s.slug);
    if (!override) return s;
    return {
      ...s,
      titleHi: override.titleHi || s.titleHi,
      titleEn: override.titleEn || s.titleEn,
      tagHi: override.tagHi || s.tagHi,
      tagEn: override.tagEn || s.tagEn,
      shortDescHi: override.shortDescHi || s.shortDescHi,
      shortDescEn: override.shortDescEn || s.shortDescEn,
      capabilitiesHi: override.capabilitiesHi && override.capabilitiesHi.length > 0 ? override.capabilitiesHi : s.capabilitiesHi
    };
  });

  return (
    <section className="py-12 lg:py-16 bg-navy-900 relative overflow-hidden" id="services">
      {/* Background radial highlights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-royal-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-950 border border-navy-700 text-accent-orange text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-hindi">
            {heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {sub}
          </p>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {displayServices.map((service, index) => {
            const isFeatured = service.id === "11" || service.id === "01"; // War Room or Social Media

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-gradient-to-b from-navy-850 to-navy-950 border border-navy-700/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-orange/60 hover:shadow-2xl hover:shadow-navy-950/80 overflow-hidden ${
                  service.id === "11" ? "md:col-span-2 lg:col-span-2 bg-gradient-to-r from-navy-850 via-navy-900 to-navy-950 border-accent-orange/40" : ""
                }`}
              >
                {/* Dynamic Accent Top Line that expands on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-accent-orange to-accent-gold group-hover:w-full transition-all duration-500 ease-out" />

                <div>
                  {/* Top metadata row: Number & Category & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-navy-950 text-accent-gold border border-navy-700">
                        {service.id}
                      </span>
                      <span className="text-[11px] font-semibold text-accent-orange uppercase tracking-wider">
                        {language === "hi" ? service.tagHi : service.tagEn}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-navy-950 border border-navy-700/80 flex items-center justify-center group-hover:scale-110 group-hover:border-accent-orange/50 transition-all duration-300">
                      {iconMap[service.icon] || <Layers className="w-6 h-6 text-accent-orange" />}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent-gold transition-colors font-hindi leading-snug mb-3">
                    {language === "hi" ? service.titleHi : service.titleEn}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {language === "hi" ? service.shortDescHi : service.shortDescEn}
                  </p>

                  {/* 4-5 Capabilities Bullet List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-navy-800/80">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      {language === "hi" ? "प्रमुख क्षमताएं:" : "Core Capabilities:"}
                    </span>
                    {(language === "hi" ? service.capabilitiesHi : service.capabilitiesEn).slice(0, 4).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-accent-orange group-hover:text-accent-gold transition-colors"
                  >
                    <span>{language === "hi" ? "सेवा देखें व समझें" : "Explore Vertical"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <span className="text-[10px] text-slate-500 font-mono">
                    ECI COMPLIANT
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Directory Button */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm border border-navy-700 hover:border-accent-orange transition-all shadow-xl keep-dark group cursor-pointer"
          >
            <span>{language === "hi" ? "सभी 11 चुनावी सेवाओं की विस्तृत विवरणिका देखें" : "View Comprehensive 11 Services Directory"}</span>
            <ArrowRight className="w-4 h-4 text-accent-orange group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
