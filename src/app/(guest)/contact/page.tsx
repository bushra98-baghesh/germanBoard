"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/Button";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/ui/Loader";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(5, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;
const faqs = [
  {
    questionKey: "faq.question1",
    answerKey: "faq.answer1",
  },
  {
    questionKey: "faq.question2",
    answerKey: "faq.answer2",
  },
  {
    questionKey: "faq.question3",
    answerKey: "faq.answer3",
  },
  {
    questionKey: "faq.question4",
    answerKey: "faq.answer4",
  },
];

const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/GermanBoard",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/germanboard",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://twitter.com/german_board",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "http://instagram.com/germanboard1",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: "Google",
    href: "mailto:info@germanboard.org?subject=Contact%20Request&body=Hello%20German%20Board%20Team,",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148s2.75-6.148 6.125-6.148c1.922 0 3.211.82 3.953 1.523l2.703-2.625c-1.703-1.57-3.906-2.523-6.656-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.75 0 9.547-4.023 9.547-9.695 0-.652-.07-1.148-.156-1.477z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/germanboard",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      // Clean Telegram logo SVG
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <g>
          <circle cx="12" cy="12" r="12" fill="none" />
          <path d="M21.543 6.498a1.5 1.5 0 0 0-1.72-1.13c-2.13.57-13.13 3.52-16.6 4.54a1.5 1.5 0 0 0-.09 2.87l3.7 1.18 1.37 4.34a1.5 1.5 0 0 0 2.37.77l2.13-1.98 3.56 2.63a1.5 1.5 0 0 0 2.36-.86l2.56-11.13a1.5 1.5 0 0 0-.02-.28zm-3.13 2.02l-7.19 6.36a.5.5 0 0 0-.16.27l-.54 2.19a.25.25 0 0 1-.48-.03l-1.18-3.74a.5.5 0 0 1 .32-.62l8.7-2.74a.25.25 0 0 1 .32.33z" />
        </g>
      </svg>
    ),
  },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit() {
    setStatus({ type: null, message: "" });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus({
        type: "success",
        message: t("contact.success"),
      });
      reset();
    } catch {
      setStatus({
        type: "error",
        message: t("contact.error"),
      });
    }
  }

  return (
    <div
      className={cn(
        "relative min-h-screen flex flex-col items-center justify-center py-12 px-2 sm:px-6 lg:px-8"
      )}
    >
      {theme === "dark" && (
        <>
          <StarsBackground className="pointer-events-none fixed inset-0 z-0" />
          <ShootingStars className="pointer-events-none fixed inset-0 z-0" />

          <div
            aria-hidden
            className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[400px] h-[800px] rotate-[-25deg] pointer-events-none z-0"
            style={{
              background: `radial-gradient(ellipse at top, rgba(99, 102, 241, 0.5) 0%, rgba(99, 102, 241, 0.5) 0%, transparent 100%)`,
              filter: "blur(100px)",
            }}
          />
          {/* <div
            aria-hidden
            className="absolute top-[-20%]  -translate-x-1/2 w-[800px] h-[800px] rotate-[-25deg] pointer-events-none z-0"
            style={{
              background: `radial-gradient(ellipse at center, rgba(168, 85, 247, 0.3) 20%, rgba(147, 51, 234, 0.1) 50%, transparent 60%)`,
              filter: "blur(100px)",
            }}
          /> */}
        </>
      )}

      <main className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-stretch justify-center">
        {/* Left Section */}
        <section className="flex-1 flex flex-col justify-center gap-8 p-8 min-w-[280px] max-w-xl">
          <div className="relative flex flex-col gap-8 md:gap-10 pl-8">
            {/* Gradient Accent Bar */}
            <span
              aria-hidden
              className={cn(
                "absolute left-0 top-0 h-full w-1 rounded-full transition-all",
                theme === "dark"
                  ? "bg-gradient-to-b from-indigo-500 via-sky-300 to-indigo-300"
                  : "bg-gradient-to-b from-indigo-500 via-sky-300 to-indigo-300"
              )}
            />
            <div>
              <h1
                className="text-4xl font-extrabold tracking-tight mb-2 flex items-center gap-2 bg-clip-text text-transparent 
               bg-gradient-to-b from-[#020010] to-[#0F083D] 
               dark:from-white dark:to-neutral-500 "
              >
                {t("contact.title")}
                <span
                  className={cn(
                    "inline-block w-2 h-2 rounded-full align-middle bg-[#2EB9DF]"
                  )}
                ></span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
                {t("contact.description")}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                {t("contact.contacts")}
              </h2>
              <ul className="space-y-4 text-base font-medium text-gray-900 dark:text-white mb-8">
                <li className="flex items-center gap-3 group">
                  <Mail className="h-5 w-5 text-sky-600 dark:text-sky-400 group-hover:text-sky-500 transition-colors" />
                  <a
                    href={
                      "mailto:info@germanboard.org?subject=Contact%20Request&body=Hello%20German%20Board%20Team,"
                    }
                    className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors  group hover:translate-x-2 duration-300 ease-in-out"
                  >
                    info@germanboard.org
                  </a>
                </li>
                <li className="flex  gap-3 group">
                  <Phone className="h-5 w-5 text-sky-600 dark:text-sky-400 group-hover:text-sky-500 transition-colors" />
                  <address className="space-y-2 not-italic">
                    <div className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                      <div>
                        <a
                          href="https://wa.me/4917680203257?text=Hello%20German%20Board%20Team,"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                        >
                          +49 17680 203257
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                      <div>
                        <a
                          href="https://wa.me/4917644466088?text=Hello%20German%20Board%20Team,"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                        >
                          +49 17644 466088
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                      <div>
                        <a
                          href="https://wa.me/4915738922887?text=Hello%20German%20Board%20Team,"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                        >
                          +49 15738 922887
                        </a>
                      </div>
                    </div>
                  </address>
                </li>
                <li className="flex items-center gap-3 group">
                  <MapPin className="h-5 w-5 text-sky-600 dark:text-sky-400 group-hover:text-sky-500 transition-colors" />
                  <span className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                    <a
                      href="https://maps.app.goo.gl/dtp9tzihJic9Haea7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out"
                    >
                      <address>Kreuzeskirchstraße 8, 45127 Essen</address>
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                {t("contact.social")}
              </h2>
              <div className="flex space-x-3 mb-6">
                {social.slice(0, 4).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-full border border-gray-700 p-2 hover:bg-gray-700 transition-colors"
                    aria-label={item.name}
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Right Section: Contact Form */}
        <section className="flex-1 flex flex-col justify-center p-8 rounded-xl bg-white/80 dark:bg-white/5 shadow-xl backdrop-blur-md min-w-[280px] max-w-xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
            aria-label={t("contact.formAriaLabel") || t("contact.title")}
            noValidate
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                autoComplete="name"
                placeholder={t("contact.namePlaceholder")}
                {...register("name")}
                className={cn(
                  errors.name &&
                    "border-red-300 focus:border-red-500 focus:ring-red-500"
                )}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600" id="name-error">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="email" className="mb-1">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder={t("contact.emailPlaceholder")}
                {...register("email")}
                className={cn(
                  errors.email &&
                    "border-red-300 focus:border-red-500 focus:ring-red-500"
                )}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="subject" className="mb-1">
                {t("contact.subject")}
              </Label>
              <Input
                id="subject"
                type="text"
                placeholder={t("contact.subjectPlaceholder")}
                {...register("subject")}
                className={cn(
                  errors.subject &&
                    "border-red-300 focus:border-red-500 focus:ring-red-500"
                )}
                aria-invalid={!!errors.subject}
                aria-describedby="subject-error"
              />
              {errors.subject && (
                <p className="mt-2 text-sm text-red-600" id="subject-error">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="message" className="mb-1">
                {t("contact.message")}
              </Label>
              <Textarea
                id="message"
                rows={5}
                placeholder={t("contact.messagePlaceholder")}
                {...register("message")}
                className={cn(
                  "block w-full rounded-md border border-gray-200 dark:border-white/40 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm  sm:text-sm",
                  errors.message &&
                    "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                )}
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600" id="message-error">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className="flex justify-start">
              <Button
                type="submit"
                className={cn(
                  "w-auto text-sm px-6 py-2 font-medium rounded-sm text-white shadow-lg hover:scale-[1.03] transition-transform duration-150",
                  theme === "dark" ? "bg-white text-[#020010]" : "bg-[#020010]"
                )}
                aria-label={"Submit"}
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loader size="sm" /> : "Submit"}
              </Button>
            </div>
            {status.type && (
              <div
                className={cn(
                  "mt-2 text-center text-sm font-medium",
                  status.type === "success" ? "text-green-600" : "text-red-600"
                )}
                role="alert"
              >
                {status.message}
              </div>
            )}
          </form>
        </section>
      </main>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-stretch justify-center my-20">
        <div className=" w-full h-[200px] sm:h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow ">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="filter transition-all duration-300"
            style={{
              border: 0,
              filter:
                theme === "dark"
                  ? "invert(90%) hue-rotate(180deg) contrast(100%)"
                  : "none",
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.449755097281!2d13.388859715819618!3d52.51703697981233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c6b6b1c0e7%3A0x807b7c8e36d7c2aa!2sBerlin!5e0!3m2!1sen!2sde!4v1612894673371!5m2!1sen!2sde"
          />
        </div>
      </div>
      {/* Frequently asked questions */}
      <section className="relative w-full py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase">
              {t("faq.title")}
            </p>
            <h1
              className="py-4 text-4xl md:text-5xl font-semibold  bg-clip-text text-transparent 
  bg-gradient-to-b from-[#020010] to-[#020010]/40
  dark:from-neutral-50 dark:to-neutral-800 dark:bg-opacity-100"
            >
              {t("faq.heading")}
            </h1>
            <p className="mt-4 text-base text-[#020010]/70 dark:text-zinc-400 max-w-md">
              {t("faq.description")}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = idx === openIndex;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white/5 backdrop-blur p-4 shadow border border-white/10"
                >
                  <button
                    className={cn(
                      "w-full flex justify-between items-center text-left font-medium transition-colors duration-300",
                      "text-gray-900 dark:text-white"
                    )}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <span>{t(item.questionKey)}</span>
                    <ChevronDown
                      className={cn(
                        "transition-transform duration-300 text-sky-600 dark:text-sky-400",
                        isOpen ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        {t(item.answerKey)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
