"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    desktopImage: "/images/hero/hero-slide-1-desktop.webp",
    mobileImage: "/images/hero/hero-slide-1-mobile.webp",
    badge: "PMDC | HEC | PNC Recognized",
    heading: "Shaping the Future of Healthcare in Pakistan",
    paragraph:
      "The Institute of Medical Sciences Mardan is dedicated to producing skilled, compassionate, and competent healthcare professionals ready to serve Pakistan and beyond.",
    btn1: { label: "Apply for Admission", href: "/admissions" },
    btn2: { label: "Explore Programs", href: "/programs" },
  },
  {
    desktopImage: "/images/hero/hero-slide-2-desktop.webp",
    mobileImage: "/images/hero/hero-slide-2-mobile.webp",
    badge: "World-Class Clinical Training",
    heading: "Learn From Experts. Train in Real Hospitals.",
    paragraph:
      "Our students receive hands-on clinical training at affiliated teaching hospitals from day one — building real skills for real careers.",
    btn1: { label: "View Programs", href: "/programs" },
    btn2: { label: "Our Facilities", href: "/campus" },
  },
  {
    desktopImage: "/images/hero/hero-slide-3-desktop.webp",
    mobileImage: "/images/hero/hero-slide-3-mobile.webp",
    badge: "Admissions Open 2025",
    heading: "Your Healthcare Career Starts Here",
    paragraph:
      "Join hundreds of students already building their future at IMS Mardan. Merit-based admissions with scholarships available for deserving students.",
    btn1: { label: "Apply Now", href: "/admissions" },
    btn2: { label: "Learn More", href: "/about" },
  },
];

const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "5+", label: "Affiliated Hospitals" },
  { value: "30+", label: "Qualified Faculty" },
  { value: "3", label: "Recognized Programs" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Mobile image */}
          <Image
            src={slides[current].mobileImage}
            alt={slides[current].heading}
            fill
            priority
            className="object-cover sm:hidden"
            sizes="100vw"
          />
          {/* Desktop image */}
          <Image
            src={slides[current].desktopImage}
            alt={slides[current].heading}
            fill
            priority
            className="object-cover hidden sm:block"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-24 sm:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              {/* Badge */}
              <span className="inline-block font-mono text-xs tracking-widest uppercase bg-[#D42B2B] text-white px-3 py-1.5 rounded mb-5">
                {slides[current].badge}
              </span>

              {/* Heading */}
              <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5 text-shadow">
                {slides[current].heading}
              </h1>

              {/* Paragraph */}
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 text-shadow">
                {slides[current].paragraph}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slides[current].btn1.href}
                  className="bg-[#D42B2B] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  {slides[current].btn1.label}
                </Link>
                <Link
                  href={slides[current].btn2.href}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1B3A7A] font-bold px-6 py-3 rounded-lg transition-all duration-200"
                >
                  {slides[current].btn2.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#1B3A7A]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/20">
            {stats.map((stat) => (
              <div key={stat.label} className="py-4 px-4 text-center">
                <p className="font-playfair font-bold text-xl sm:text-2xl text-[#A8C4E0]">
                  {stat.value}
                </p>
                <p className="text-white/70 text-xs sm:text-sm mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all shadow-lg"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all shadow-lg"
        aria-label="Next slide"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Dot Navigation — sits above stats bar */}
      <div className="absolute bottom-[88px] sm:bottom-[80px] left-1/2 -translate-x-1/2 z-10 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-8 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
