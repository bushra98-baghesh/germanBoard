"use client";
import {
  NavbarR,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/UI_Navbar";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageProvider";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LOGO_ALT = "German Board Logo";

const Logo = () => (
  <Link
    href="/"
    className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 transition-opacity duration-200 "
  >
    <Image
      src="/images/logo.png"
      alt={LOGO_ALT}
      width={40}
      height={40}
      priority
      className="h-10 w-10 lg:h-12 lg:w-12"
    />
    <div className="flex flex-col leading-tight">
      <span
        className="tracking-wide text-sm lg:text-base font-bold bg-clip-text text-transparent 
    bg-gradient-to-b from-[#020010] to-[#5c5a79] 
    dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50"
      >
        German Board
      </span>
      <span
        className="lg:text-xs text-[10px] font-bold bg-clip-text text-transparent 
    bg-gradient-to-b from-[#020010] to-[#5c5a79] 
    dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50"
      >
        البورد الألماني للتدريب و الاستشارات
      </span>
    </div>
  </Link>
);

export function Navbar() {
  const { t } = useLanguage();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: t("nav.home"),
      link: "/",
    },
    {
      name: t("nav.blogs"),
      link: "/blogs",
    },
    {
      name: t("nav.courses"),
      link: "/courses",
    },
    // {
    //   name: "Certificates",
    //   link: "/certificates",
    // },
    {
      name: t("nav.about"),
      link: "/about",
    },
    {
      name: t("nav.contact"),
      link: "/contact",
    },
  ];

  return (
    <div className="fixed top-0 z-50 w-full">
      <NavbarR>
        {/* Desktop Navigation */}
        <NavBody>
          <Logo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4 relative z-50">
            <ThemeToggle />

            <div className="flex items-center gap-2">
              <Link href="/certificates" className="relative z-50">
                <Button className="transition-colors duration-200">
                  {t("nav.certificates")}
                </Button>
              </Link>
              {/* <Link href="/login" className="relative z-50">
                <Button
                  variant="ghost"
                  className="transition-colors duration-200"
                >
                  {t("nav.login")}
                </Button>
              </Link>
              <Link href="/register" className="relative z-50">
                <Button className="transition-colors duration-200 bg-[#020010] dark:bg-white">
                  {t("nav.getStarted")}
                </Button>
              </Link> */}
            </div>
            <LanguageToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Logo />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative block w-full py-2 text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
              >
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Link href="/certificates" className="relative z-50">
                <Button className="transition-colors duration-200">
                  {t("nav.certificates")}
                </Button>
              </Link>
              {/* <Link href="/login" className="w-full">
                <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="ghost"
                  className="w-full transition-colors duration-200"
                >
                  {t("nav.login")}
                </Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full transition-colors duration-200"
                >
                  {t("nav.getStarted")}
                </Button>
              </Link> */}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </NavbarR>
    </div>
  );
}
