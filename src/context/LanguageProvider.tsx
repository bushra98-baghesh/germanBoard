"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Language,
  translations,
  defaultLanguage,
  getBrowserLanguage,
  getStoredLanguage,
  setStoredLanguage,
} from "@/lib/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    // Get initial language from storage or browser
    const storedLang = getStoredLanguage();
    if (storedLang) {
      setLanguageState(storedLang);
    } else {
      const browserLang = getBrowserLanguage();
      setLanguageState(browserLang);
      setStoredLanguage(browserLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setStoredLanguage(lang);
  };

  const t = (key: string): string => {
    return (
      translations[language]?.[key] || translations[defaultLanguage][key] || key
    );
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{ language: defaultLanguage, setLanguage, t }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
