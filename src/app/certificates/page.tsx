"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Loader } from "@/components/ui/Loader";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Download,
  Copy,
  Check,
  Award,
  HelpCircle,
  ExternalLink,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export default function CertificatesPage() {
  const [certificateId, setCertificateId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [certificate, setCertificate] = useState<{
    id: string;
    imageUrl: string;
  } | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSearch = async () => {
    if (!certificateId.trim()) {
      setError("Please enter a certificate code");
      return;
    }

    setIsLoading(true);
    setError("");
    setCertificate(null);

    try {
      const res = await fetch(
        "https://backend.germanboard.org/api/v1/certificate/by-code",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: certificateId }),
        }
      );

      const data = await res.json();

      if (data.status === "success" && data.data?.certification_image) {
        setCertificate({
          id: certificateId,
          imageUrl: data.data.certification_image,
        });
      } else {
        setError("Certificate not found. Please check the code and try again.");
      }
    } catch {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!certificate?.imageUrl) return;

    try {
      // Create a temporary link element
      const link = document.createElement("a");
      link.href = certificate.imageUrl;
      link.download = `german-certificate-${certificate.id}.png`;
      link.target = "_blank";

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: open in new tab
      window.open(certificate.imageUrl, "_blank");
    }
  };

  const handleShare = (platform: string) => {
    if (!certificate?.imageUrl) return;

    const certificateUrl = certificate.imageUrl;
    const text = `Check out my German language certificate: ${certificate.id}`;
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        certificateUrl
      )}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        certificateUrl
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(certificateUrl)}`,
      email: `mailto:?subject=German Language Certificate&body=${encodeURIComponent(
        text + " " + certificateUrl
      )}`,
    };
    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank");
  };

  const handleCopyLink = async () => {
    if (!certificate?.imageUrl) return;

    try {
      await navigator.clipboard.writeText(certificate.imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy link");
    }
  };

  return (
    <main className="relative min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Search Section */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative bg-white/90 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 lg:p-8 shadow-lg group flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
              Enter Certificate Code
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Enter your certificate code here..."
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 text-lg"
              />
              <Button
                onClick={handleSearch}
                disabled={isLoading}
                className="px-8 py-3"
              >
                {isLoading ? (
                  <Loader size="sm" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
                {isLoading ? "Searching..." : "Search"}
              </Button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
              >
                <p className="text-red-600 dark:text-red-400 text-sm text-center">
                  {error}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Result Section */}
        <AnimatePresence>
          {certificate && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="max-w-5xl mx-auto mb-16"
            >
              <div className="relative bg-white/90 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 lg:p-8 shadow-lg group flex flex-col">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                    <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    Certificate Found!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    ID:{" "}
                    <span className="font-mono font-semibold text-blue-600 dark:text-blue-400">
                      {certificate.id}
                    </span>
                  </p>
                </div>

                <div className="relative w-full max-w-lg mx-auto mb-8 aspect-[3/2] rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-lg">
                  <Image
                    src={certificate.imageUrl}
                    alt="German Language Certificate"
                    fill
                    className="object-cover bg-gray-50 dark:bg-gray-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    onClick={handleDownload}
                    size="lg"
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Certificate
                  </Button>
                </div>

                {/* Share Section */}
                <div className="border-t border-gray-200 dark:border-gray-600 pt-8">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 text-center">
                    Share Your Achievement
                  </h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button
                      variant="outline"
                      onClick={() => handleShare("facebook")}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600"
                    >
                      <Facebook className="w-4 h-4 text-blue-600" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare("linkedin")}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600"
                    >
                      <Linkedin className="w-4 h-4 text-blue-700" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare("twitter")}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600"
                    >
                      <Twitter className="w-4 h-4 text-blue-400" />X
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare("email")}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600"
                    >
                      <Mail className="w-4 h-4 text-blue-600" />
                      Email
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleCopyLink}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      )}
                      {copied ? "Copied!" : "Copy Link"}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Help Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative bg-white/90 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 lg:p-8 shadow-lg group flex flex-col">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <HelpCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Need Help?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Having trouble finding or accessing your certificate? We&apos;re
                here to help you get what you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Common Issues
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Certificate code not found
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Image not loading properly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Download issues
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Get Support
                </h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() =>
                      window.open("mailto:support@germanboard.org", "_blank")
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Support
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("/contact", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Contact Form
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                💡 Pro Tip
              </h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Make sure to enter your certificate code exactly as it appears
                on your certificate. Certificate codes are case-sensitive and
                usually contain a mix of letters and numbers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
