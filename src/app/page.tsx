// import Image from "next/image";
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { useLanguage } from "@/context/LanguageProvider";
import {
  Video,
  Laptop,
  Building2,
  VideoIcon,
  MessageSquare,
  PlayCircle,
  FolderKanban,
  PenTool,
  BarChart3,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// const trustedLogos = [
//   { src: "/images/logo.png", alt: "German Board logo" },
//   { src: "/images/Azav.jpg", alt: "Azav logo" },
//   { src: "/images/Bfd.png", alt: "Bfd logo" },
//   { src: "/images/Dakks.png", alt: "Dakks logo" },
//   { src: "/images/ISO.png", alt: "ISO logo" },
// ];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="">
      {/* Hero section */}
      <div className="h-[35rem] w-full flex items-center justify-center  antialiased relative">
        <div
          aria-hidden
          className="hidden dark:absolute top-[-40%] left-1/2 -translate-x-1/2 w-[400px] h-[800px] rotate-[-25deg] pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at top, rgba(99, 102, 241, 0.5) 0%, rgba(99, 102, 241, 0.5) 0%, transparent 80%)`,
            filter: "blur(100px)",
          }}
        />

        <div className="p-4 max-w-7xl mx-auto  flex flex-col items-center justify-center relative z-10 w-full md:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6366F1]/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-500/20 dark:border-purple-500/30"
          >
            <Sparkles className="w-4 h-4 text-[#6366F1]" />
            <span className="text-sm font-medium text-[#6366F1]">
              Shaping minds, building careers
            </span>
          </motion.div>

          <h1
            className="py-4 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent 
               bg-gradient-to-b from-[#020010] to-[#0F083D]/70 
               dark:from-white dark:to-neutral-600 "
          >
            German Board <br /> For Training and Consulting GmbH
          </h1>
          <p className="mt-4 font-medium text-base text-[#020010]/70 dark:text-neutral-300 max-w-lg text-center mx-auto">
            Explore & Join special online and offline courses and become a
            certified trainer with German Board
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/login">
              <Button size="lg" className="px-10 bg-[#020010] dark:bg-white">
                {" "}
                Join Now{" "}
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className=" dark:border-white/50 border-[#020010] bg-transparent"
            >
              Go Premium
            </Button>
          </div>
        </div>
        {/* Show these effects only in dark mode */}
        <div className="hidden dark:block absolute inset-0 z-0">
          <ShootingStars />
          <StarsBackground />
        </div>
      </div>

      {/* Training Programs section */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-[#020010] dark:to-[#0b0820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="text-3xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-br from-indigo-500 to-sky-500  
               uppercase"
            >
              {t("training.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("training.subtitle")}
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Live Training Card */}
              <div className="group flex-1 min-w-[220px] rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/30 dark:border-gray-700/60 shadow-xl hover:scale-105 hover:shadow-2xl hover:border-blue-400/60 dark:hover:border-blue-400/60 transition-all duration-300">
                <div className="mb-4 p-4 rounded-full shadow-lg border-2 border-white/60 dark:border-gray-800/60 from-indigo-500 to-blue-500 bg-gradient-to-br bg-opacity-80 dark:bg-opacity-100">
                  <Video className="w-8 h-8 drop-shadow-lg text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white mt-2">
                  {t("training.live.name")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {t("training.live.description")}
                </p>
              </div>

              {/* Online Training Card */}
              <div className="group flex-1 min-w-[220px] rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/30 dark:border-gray-700/60 shadow-xl hover:scale-105 hover:shadow-2xl hover:border-blue-400/60 dark:hover:border-blue-400/60 transition-all duration-300">
                <div className="mb-4 p-4 rounded-full shadow-lg border-2 border-white/60 dark:border-gray-800/60 from-sky-500 to-cyan-500 bg-gradient-to-br bg-opacity-80 dark:bg-opacity-100">
                  <Laptop className="w-8 h-8 drop-shadow-lg text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white mt-2">
                  {t("training.online.name")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {t("training.online.description")}
                </p>
              </div>

              {/* Onsite Training Card */}
              <div className="group flex-1 min-w-[220px] rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/30 dark:border-gray-700/60 shadow-xl hover:scale-105 hover:shadow-2xl hover:border-blue-400/60 dark:hover:border-blue-400/60 transition-all duration-300">
                <div className="mb-4 p-4 rounded-full shadow-lg border-2 border-white/60 dark:border-gray-800/60 from-purple-500 to-pink-500 bg-gradient-to-br bg-opacity-80 dark:bg-opacity-100">
                  <Building2 className="w-8 h-8 drop-shadow-lg text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white mt-2">
                  {t("training.onsite.name")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {t("training.onsite.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Showcase section */}
      <div className="py-16 bg-gradient-to-b to-white from-gray-50 dark:from-[#0b0820] dark:to-[#020010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center my-10">
            <h2
              className="text-3xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-br from-indigo-500 to-sky-500  
              uppercase"
            >
              {t("features.showcase.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("features.showcase.subtitle")}
            </p>
          </div>
          <div className="space-y-32 pt-16">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-[4/3] rounded-2xl ">
                  <Image
                    src="/images/live.png"
                    alt={t("features.showcase.title1")}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-500">
                  {t("features.showcase.title1")}
                </h3>
                <div className="space-y-6">
                  {/* Bullet Point 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <VideoIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t("features.showcase.bullet1.title")}
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {t("features.showcase.bullet1.text")}
                      </p>
                    </div>
                  </motion.div>

                  {/* Bullet Point 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t("features.showcase.bullet2.title")}
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {t("features.showcase.bullet2.text")}
                      </p>
                    </div>
                  </motion.div>

                  {/* Bullet Point 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t("features.showcase.bullet3.title")}
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {t("features.showcase.bullet3.text")}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-16"
            >
              <div className="w-full lg:w-3/5 relative ">
                <div className="relative aspect-[4/3] rounded-2xl  ">
                  <Image
                    src="/images/Quiz.png"
                    alt={t("features.showcase.title3")}
                    fill
                    className="object-contain "
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/5 space-y-6">
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
                  {t("features.showcase.title3")}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("features.showcase.text3")}
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-16"
            >
              <div className="w-full lg:w-1/2 space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-500">
                  {t("features.showcase.title2")}
                </h3>
                <div className="space-y-6">
                  {/* Bullet Point 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <FolderKanban className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t("features.showcase.bullet4.title")}
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {t("features.showcase.bullet4.text")}
                      </p>
                    </div>
                  </motion.div>

                  {/* Bullet Point 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 dark:from-sky-400 dark:to-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/20">
                      <PenTool className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t("features.showcase.bullet5.title")}
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {t("features.showcase.bullet5.text")}
                      </p>
                    </div>
                  </motion.div>

                  {/* Bullet Point 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t("features.showcase.bullet6.title")}
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {t("features.showcase.bullet6.text")}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/Tools.png"
                    alt={t("features.showcase.title2")}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="relative z-10 py-24">
        {/* Purple radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[800px] h-[800px] rounded-full bg-[#6366F1]/20 blur-3xl dark:bg-[#6366F1]/20 " />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-purple-200 mb-10">
            {t("pricing.subtitle")}
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Certified Trainer Membership */}
            <div className="relative bg-white/90 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group flex flex-col">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
                  {t("pricing.certified.title")}
                </span>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    $255
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                    {t("pricing.price.year")}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-sm flex-grow">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.publishing")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.approval")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.connecting")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.marketing")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.support247")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.privatePage")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.communicate")}
                  </span>
                </li>
                <li className="flex items-start opacity-60">
                  <span className="text-red-400 mr-3 mt-0.5 flex-shrink-0">
                    ✗
                  </span>
                  <span className="text-gray-700 dark:text-gray-400">
                    {t("pricing.features.meetings")}
                  </span>
                </li>
                <li className="flex items-start opacity-60">
                  <span className="text-red-400 mr-3 mt-0.5 flex-shrink-0">
                    ✗
                  </span>
                  <span className="text-gray-700 dark:text-gray-400">
                    {t("pricing.features.discount3")}
                  </span>
                </li>
                <li className="flex items-start opacity-60">
                  <span className="text-red-400 mr-3 mt-0.5 flex-shrink-0">
                    ✗
                  </span>
                  <span className="text-gray-700 dark:text-gray-400">
                    {t("pricing.features.discount5")}
                  </span>
                </li>
              </ul>

              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 mt-auto">
                {t("pricing.button")}
              </Button>
            </div>

            {/* International Trainer Membership - Featured */}
            <div className="relative bg-gradient-to-br from-white/95 to-blue-50/50 dark:from-gray-800/90 dark:to-blue-900/20 backdrop-blur-2xl border-2 border-blue-500/30 rounded-3xl p-6 lg:p-8 shadow-2xl scale-105 z-10 group flex flex-col">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                {t("pricing.mostPopular")}
              </div>

              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 dark:text-blue-200 bg-blue-100 dark:bg-blue-800/40 rounded-full mb-4">
                  {t("pricing.international.title")}
                </span>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    $300
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                    {t("pricing.price.year")}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-sm flex-grow">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.publishing")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.approval")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.accreditation")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.accreditTrainers")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.support247")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.privatePage")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.technicalSupport")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.meetings")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.discount3")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.discount5")}
                  </span>
                </li>
              </ul>

              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 mt-auto">
                {t("pricing.button")}
              </Button>
            </div>

            {/* Centers and Institutions Membership */}
            <div className="relative bg-white/90 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group flex flex-col">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 rounded-full mb-2">
                  {t("pricing.centers.title")}
                </span>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  {t("pricing.centers.subtitle")}
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    $400
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                    {t("pricing.price.year")}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-sm flex-grow">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.acceptTrainers")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.acceptCenters")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.courseAccreditation")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.packageAccreditation")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.support2424")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.privatePage")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.businessAdvice")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.connectTrainers")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.discount3")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("pricing.features.discount5")}
                  </span>
                </li>
              </ul>

              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 mt-auto">
                {t("pricing.button")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
