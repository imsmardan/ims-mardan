"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    stars: 5,
    quote:
      "The clinical training at IMS Mardan is exceptional. I was placed at an affiliated hospital from my second year and gained real hands-on experience that most students only read about.",
    name: "Ahmad Raza",
    program: "BS Radiology, 3rd Year",
  },
  {
    stars: 5,
    quote:
      "The faculty here are practicing clinicians, not just academics. They bring real hospital experience into every lecture. I feel fully prepared for my nursing career.",
    name: "Sara Noor",
    program: "BS Nursing, Final Year",
  },
  {
    stars: 5,
    quote:
      "After completing my degree from IMS Mardan I was immediately hired by a private hospital. The quality of education and practical training made all the difference.",
    name: "Usman Khan",
    program: "BS Anesthesia, Alumni",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/sections/testimonials-bg.webp"
          alt="Testimonials background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0F2456]/88" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-[#A8C4E0] border border-[#A8C4E0]/40 px-3 py-1 rounded mb-4">
            Student Stories
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-white">
            What Our Students Say
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-7 hover:bg-white/15 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              {/* Quote */}
              <p className="text-white/85 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Person */}
              <div>
                <p className="font-playfair font-bold text-white text-base">{t.name}</p>
                <p className="text-[#A8C4E0] text-xs font-mono mt-0.5">{t.program}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
