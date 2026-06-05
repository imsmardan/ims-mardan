"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    dropdown: [
      { label: "BS Radiology", href: "/programs/bs-radiology" },
      { label: "BS Anesthesia", href: "/programs/bs-anesthesia" },
      { label: "BS Nursing", href: "/programs/bs-nursing" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty", href: "/faculty" },
  { label: "Campus", href: "/campus" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#1B3A7A] shadow-lg"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 shrink-0">
              <Image
                src="/images/logo/ims-logo.png"
                alt="IMS Mardan Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-white">
              <p className="font-playfair font-bold text-sm lg:text-base leading-tight">
                Institute of Medical Sciences
              </p>
              <p className="font-dm text-xs text-[#A8C4E0] tracking-wider uppercase">
                Mardan
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                      pathname.startsWith("/programs")
                        ? "text-[#A8C4E0]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <FiChevronDown
                      size={14}
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-[#2D3748] hover:bg-[#F8F9FC] hover:text-[#1B3A7A] font-medium transition-colors border-b border-gray-50 last:border-0"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    pathname === link.href
                      ? "text-[#A8C4E0]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Apply Now Button */}
          <div className="hidden lg:block">
            <Link
              href="/admissions"
              className="bg-[#D42B2B] hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Full-screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#1B3A7A] z-50 flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/logo/ims-logo.png"
                    alt="IMS Mardan Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-white">
                  <p className="font-playfair font-bold text-sm leading-tight">
                    Institute of Medical Sciences
                  </p>
                  <p className="font-dm text-xs text-[#A8C4E0] tracking-wider uppercase">
                    Mardan
                  </p>
                </div>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <p className="text-white/60 text-xs font-mono uppercase tracking-widest px-3 pt-4 pb-1">
                      Programs
                    </p>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-white/90 hover:text-white font-medium text-base border-l-2 border-[#A8C4E0]/30 ml-3 hover:border-[#A8C4E0] transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-3 text-lg font-semibold transition-colors rounded-lg ${
                      pathname === link.href
                        ? "text-[#A8C4E0] bg-white/10"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="mt-8">
              <Link
                href="/admissions"
                className="block text-center bg-[#D42B2B] hover:bg-red-700 text-white font-bold px-6 py-4 rounded-xl text-lg transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
