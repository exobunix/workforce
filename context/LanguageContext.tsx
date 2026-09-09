"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TranslationDictionary, dictionary } from "@/data/dictionary";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("hi");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("wf_lang") as Language;
      if (savedLang === "hi" || savedLang === "en") {
        setLanguageState(savedLang);
      }
    } catch {
      // localStorage may fail in certain environments; fallback to 'hi'
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("wf_lang", lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "hi" ? "en" : "hi";
    setLanguage(nextLang);
  };

  const t = dictionary[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
