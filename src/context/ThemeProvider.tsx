"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "germanboard-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const resolvedTheme = storedTheme ?? defaultTheme;

    setThemeState(resolvedTheme);
    applyTheme(resolvedTheme, systemTheme);
    setIsReady(true);
  }, [storageKey, defaultTheme]);

  const applyTheme = (
    theme: Theme,
    systemTheme: "dark" | "light" = "light"
  ) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    const applied = theme === "system" ? systemTheme : theme;
    root.classList.add(applied);
  };

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    applyTheme(newTheme, systemTheme);
  };

  if (!isReady) return null; // 🔒 Prevent hydration mismatch

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
