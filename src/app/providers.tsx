// app/providers.tsx
import { ThemeProvider } from "@/context/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageProvider";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="germanboard-theme">
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
