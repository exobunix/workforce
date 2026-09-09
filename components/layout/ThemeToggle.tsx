"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export default function ThemeToggle({ showLabel = false, className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? (language === "hi" ? "लाइट मोड में बदलें" : "Switch to Light Mode") : (language === "hi" ? "डार्क मोड में बदलें" : "Switch to Dark Mode")}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 border cursor-pointer group ${
        isDark
          ? "bg-navy-800/80 hover:bg-navy-750 text-amber-300 border-navy-700/80 hover:border-amber-400/50 shadow-sm"
          : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-accent-orange/50 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-accent-gold group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-royal-blue group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>

      {showLabel && (
        <span className="ml-2 text-xs font-semibold">
          {isDark
            ? language === "hi" ? "लाइट मोड" : "Light"
            : language === "hi" ? "डार्क मोड" : "Dark"}
        </span>
      )}
    </button>
  );
}
