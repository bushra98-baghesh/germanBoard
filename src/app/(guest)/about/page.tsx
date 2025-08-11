"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { cn } from "@/lib/utils";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { motion } from "framer-motion";
import { Award, Shield, Lightbulb } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Award,
    titleKey: "about.values.quality.title",
    descriptionKey: "about.values.quality.description",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Shield,
    titleKey: "about.values.credibility.title",
    descriptionKey: "about.values.credibility.description",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Lightbulb,
    titleKey: "about.values.creativity.title",
    descriptionKey: "about.values.creativity.description",
    color: "from-amber-500 to-orange-500",
  },
];

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <main className="relative min-h-screen   ">
      <div className="h-[20rem] w-full flex items-center justify-center  antialiased relative">
        <div className="p-4 max-w-5xl mx-auto  flex flex-col items-center justify-center relative z-10 w-full md:pt-0">
          <h1
            className="py-4 pt-8 text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent 
               bg-gradient-to-b from-[#020010] to-[#0F083D]/70 
               dark:from-white dark:to-neutral-600 "
          >
            About German Board
          </h1>
          <p className="mt-2 font-medium text-base text-[#020010]/70 dark:text-neutral-300 max-w-lg text-center mx-auto">
            Empowering individuals through education, integration, and
            innovation across Germany and beyond
          </p>
        </div>
        {/* Show these effects only in dark mode */}
        <div className="hidden dark:block absolute inset-0 z-0">
          <ShootingStars />
          <StarsBackground />
        </div>
      </div>

      <section className="relative z-10 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-200 text-xs font-semibold tracking-wider mb-2">
              {t("about.hero.subtitle")}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-300 dark:to-blue-300">
              {t("about.hero.title")}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              {language === "en"
                ? t("about.intro.content").split("\n\n")[0]
                : t("about.intro.content").split("\n\n")[0]}
            </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">
                  1500+
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {language === "en"
                    ? "Trained Students"
                    : "Ausgebildete Teilnehmer"}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">
                  2017
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {language === "en" ? "Founded" : "Gegründet"}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-300">
                  3
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {language === "en" ? "Branches" : "Standorte"}
                </span>
              </div>
            </div>
            {/* Avatars/Placeholder */}
            {/* <div className="flex items-center mt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-900"
                  />
                ))}
              </div>
              <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">
                {language === "en"
                  ? "Our Team & Alumni"
                  : "Unser Team & Alumni"}
              </span>
            </div> */}
          </div>
          {/* Right: Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full  flex items-center justify-center">
              <Image
                src="/images/AB-3.jpg"
                alt="German Board training and consulting services"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/40 dark:border-gray-700/60"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS/VALUES SECTION */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-300 dark:to-blue-300">
            {t("about.values.title")}
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4">
            {values.map((value, idx) => (
              <motion.div
                key={value.titleKey}
                className={cn(
                  "flex-1 min-w-[220px] rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group transition-all duration-300",
                  "bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/30 dark:border-gray-700/60 shadow-xl",
                  "hover:scale-105 hover:shadow-2xl hover:border-blue-400/60 dark:hover:border-blue-400/60"
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                aria-label={t(value.titleKey)}
              >
                <div
                  className={cn(
                    "mb-4 p-4 rounded-full shadow-lg border-2 border-white/60 dark:border-gray-800/60"
                  )}
                >
                  {/* Colorful icons in light mode, white in dark mode */}
                  {(() => {
                    // Assign a color per index for demonstration; adjust as needed
                    const colorClassLight =
                      idx === 0
                        ? "text-purple-500"
                        : idx === 1
                        ? "text-blue-500"
                        : idx === 2
                        ? "text-emerald-500"
                        : "text-pink-500";
                    return (
                      <value.icon
                        className={cn(
                          "w-10 h-10 drop-shadow-lg",
                          colorClassLight,
                          "dark:text-white"
                        )}
                      />
                    );
                  })()}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  {t(value.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t(value.descriptionKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Bullets/Stats */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-300 dark:to-blue-300 mb-4">
              {language === "en" ? "Why Choose Us" : "Warum uns wählen?"}
            </h2>
            <ul className="space-y-4">
              {t("about.intro.content")
                .split("\n\n")
                .slice(1, 3)
                .map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-base">
                      {point}
                    </span>
                  </li>
                ))}
            </ul>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">
                  {language === "en" ? "Expert Coaches" : "Experten"}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {language === "en"
                    ? "Certified, Experienced"
                    : "Zertifiziert, erfahren"}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">
                  {language === "en" ? "Personalized" : "Individuell"}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {language === "en"
                    ? "Tailored Learning"
                    : "Maßgeschneidertes Lernen"}
                </span>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full flex items-center justify-center">
              <Image
                src="/images/AB-2.jpg"
                alt="German Board professional development and education"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/40 dark:border-gray-700/60"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
