"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarR = ({ children, className }: NavbarProps) => {
  return (
    <div className={cn("fixed inset-x-0 top-2 z-40 w-full", className)}>
      {children}
    </div>
  );
};

export const NavBody = ({ children, className }: NavBodyProps) => {
  return (
    <div
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-xl  px-4 py-2 shadow-sm backdrop-blur-lg lg:flex  ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className }: NavItemsProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={`link-${idx}`}
          href={item.link}
          className={cn(
            "relative px-4 py-2 text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100",
            pathname === item.link &&
              "text-neutral-900 dark:text-neutral-100 font-semibold"
          )}
        >
          <span>{item.name}</span>
          {/* {pathname === item.link && (
            <motion.div
              className="absolute -z-10 inset-0 rounded-lg bg-neutral-100 dark:bg-neutral-800"
              layoutId="navbar-active-indicator"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )} */}
        </Link>
      ))}
    </div>
  );
};

// Stable base styles for mobile navigation
const mobileNavBaseStyles =
  "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between  rounded-lg py-2 lg:hidden";

export const MobileNav = ({ children, className }: MobileNavProps) => {
  return <div className={cn(mobileNavBaseStyles, className)}>{children}</div>;
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center rounded-lg justify-between shadow-sm backdrop-blur-lg py-2 px-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-background px-4 py-8 shadow-lg",
              className
            )}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md p-2 text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
};
