"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";

export default function AnnouncementBar() {
  const { language } = useLanguage();
  const { settings } = useContent();

  if (settings.announcementEnabled === false) {
    return null;
  }

  const tickerText = language === "hi"
    ? (settings.announcementTextHi || "उत्तर प्रदेश विधानसभा चुनाव 2027 | प्रोफेशनल चुनाव प्रबंधन एवं प्रचार अभियान समाधान")
    : (settings.announcementTextEn || "UP Assembly Election 2027 | Professional Election Campaign Management Solutions");

  const ctaText = language === "hi"
    ? (settings.announcementCtaHi || "अभी संपर्क करें →")
    : (settings.announcementCtaEn || "Contact War Room →");

  const ctaUrl = settings.announcementCtaUrl || "/contact";

  return (
    <div className="relative z-50 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border-b border-navy-700/60 text-xs sm:text-sm py-2 px-4 overflow-hidden keep-dark announcement-bar-dark">
      {/* Subtle moving light glow line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-orange/15 to-transparent animate-pulse-slow pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange"></span>
          </span>
          <p className="truncate font-medium tracking-wide text-white">
            <span className="text-white font-medium">{tickerText}</span>
          </p>
        </div>

        <Link
          href={ctaUrl}
          className="flex-shrink-0 hidden sm:inline-flex items-center gap-1.5 text-accent-gold hover:text-accent-orange font-semibold transition-colors duration-200 text-xs tracking-wider"
        >
          <span>{ctaText}</span>
        </Link>
      </div>
    </div>
  );
}
