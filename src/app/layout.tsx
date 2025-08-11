import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "German Board - Consulting and Training",
  description:
    "Professional German language education and consulting services. Expert training programs,and educational consulting for individuals and organizations.",
  keywords: [
    "online courses",

    "German lessons",
    "German tutoring",
    "consulting",
    "training",
    "education",
    "German Board",
    "professional development",
  ],
  authors: [{ name: "German Board für Bildung und Beratung UG" }],
  creator: "German Board für Bildung und Beratung UG",
  publisher: "German Board für Bildung und Beratung UG",
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "16x16" },
      { url: "/logo.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png", sizes: "180x180" },
      { url: "/logo.png", type: "image/png", sizes: "152x152" },
      { url: "/logo.png", type: "image/png", sizes: "120x120" },
    ],
  },
  openGraph: {
    title: "German Board - Consulting and Training",
    description:
      "Professional German language education and consulting services. Expert training programs, language courses, and educational consulting for individuals and organizations.",
    type: "website",
    url: "/",
    siteName: "German Board for training and consulting",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "German Board Logo - Consulting and Training",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "German Board - Consulting and Training",
    description:
      "Professional German language education and consulting services",
    images: ["/logo.png"],
    creator: "@germanboard",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "education",
  classification: "business",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} h-full bg-white text-gray-900 dark:bg-[#020010] dark:text-gray-100`}
      >
        <Providers>
          <Navbar />
          <main className="flex-grow py-16 lg:py-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
