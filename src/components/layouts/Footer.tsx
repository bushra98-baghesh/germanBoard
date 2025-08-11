import Link from "next/link";
import Image from "next/image";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
const navigation = {
  navigation: [
    { name: "Home", href: "#" },
    { name: "Courses", href: "/courses" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ],
  about: [
    { name: "About German Board", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};

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

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b  from-[#020010]   to-[#18181b] text-gray-200 dark:text-gray-200  ">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-400">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigation.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* About/Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-400">About</h3>
            <ul className="space-y-2">
              {navigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-400">
              Contact us
            </h3>
            <div className="space-y-5">
              <address className="space-y-4 not-italic">
                <div className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                  <div className="bg-indigo-50 p-1.5 rounded group-hover:bg-indigo-100 transition-colors">
                    <FaPhoneVolume className="text-[#372948]" size={14} />
                  </div>
                  <div>
                    <a
                      href="https://wa.me/4917680203257?text=Hello%20German%20Board%20Team,"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-indigo-600 transition-colors text-xs"
                    >
                      +49 17680 203257
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                  <div className="bg-indigo-50 p-1.5 rounded group-hover:bg-indigo-100 transition-colors">
                    <FaPhoneVolume className="text-[#372948]" size={14} />
                  </div>
                  <div>
                    <a
                      href="https://wa.me/4917644466088?text=Hello%20German%20Board%20Team,"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-indigo-600 transition-colors text-xs"
                    >
                      +49 17644 466088
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                  <div className="bg-indigo-50 p-1.5 rounded group-hover:bg-indigo-100 transition-colors">
                    <FaPhoneVolume className="text-[#372948]" size={14} />
                  </div>
                  <div>
                    <a
                      href="https://wa.me/4915738922887?text=Hello%20German%20Board%20Team,"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-indigo-600 transition-colors text-xs"
                    >
                      +49 15738 922887
                    </a>
                  </div>
                </div>
              </address>
            </div>
          </div>
          {/* Location */}
          <div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-4">
                Location
              </h4>
              <address className="space-y-6 not-italic">
                <a
                  href="https://maps.app.goo.gl/dtp9tzihJic9Haea7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out"
                >
                  <div className="bg-indigo-50 p-1.5 rounded group-hover:bg-indigo-100 transition-colors">
                    <FaLocationDot className="text-[#372948]" size={14} />
                  </div>
                  <div>
                    <address className="text-gray-400 group-hover:text-indigo-600 transition-colors text-xs not-italic">
                      Kreuzeskirchstraße 8, 45127 Essen
                    </address>
                  </div>
                </a>
                <a
                  href="https://maps.app.goo.gl/BFkh2a1a2tyDgs9M6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out"
                >
                  <div className="bg-indigo-50 p-1.5 rounded group-hover:bg-indigo-100 transition-colors">
                    <FaLocationDot className="text-[#372948]" size={14} />
                  </div>
                  <div>
                    <address className="text-gray-400 group-hover:text-indigo-600 transition-colors text-xs not-italic">
                      Rhöndorfer Str., 50939 Köln
                    </address>
                  </div>
                </a>
                <a
                  href="https://maps.app.goo.gl/96mQgw5QVpcndqJo6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out"
                >
                  <div className="bg-indigo-50 p-1.5 rounded group-hover:bg-indigo-100 transition-colors">
                    <FaLocationDot className="text-[#372948]" size={14} />
                  </div>
                  <div>
                    <address className="text-gray-400 group-hover:text-indigo-600 transition-colors text-xs not-italic">
                      Wolfsschlucht 10, 34117 Kassel
                    </address>
                  </div>
                </a>
              </address>
            </div>
          </div>
          {/* Social/Chat */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-400">
              Follow us
            </h3>
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
            <h3 className="text-sm font-semibold mb-4 text-gray-400">
              Let&apos;s chat
            </h3>
            <div className="flex space-x-3">
              {social.slice(4).map((item) => (
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
        {/* Bottom row */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-800 pt-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="German Board Logo"
              width={36}
              height={36}
              className="rounded"
            />
            <span className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} GermanBoard. All rights
              reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/datenschutz"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy &amp; Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
