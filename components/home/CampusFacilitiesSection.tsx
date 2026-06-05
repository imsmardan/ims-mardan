"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const facilities = [
  { icon: "🔬", title: "Science Labs", desc: "Advanced equipment and modern technology" },
  { icon: "🧬", title: "Anatomy Labs", desc: "Hands-on training with realistic simulation" },
  { icon: "💻", title: "Computer Labs", desc: "Latest software and digital resources" },
  { icon: "📚", title: "Library", desc: "Vast collection of books, journals and online resources" },
  { icon: "☀️", title: "Solar Power", desc: "Sustainable solar power system" },
  { icon: "🏥", title: "50-Bed Medical Center", desc: "Dedicated center for hands-on training and student health" },
  { icon: "🕌", title: "Masjid", desc: "Peaceful place for spiritual reflection" },
  { icon: "🌿", title: "Lush Grounds", desc: "Beautifully landscaped lawns and two secure gate entrances" },
];

export default function CampusFacilitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/sections/campus-exterior.webp"
          alt="IMS Mardan Campus"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1B3A7A]/85" />
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
            Our Campus
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-white mb-4">
            State-of-the-Art Campus & Facilities
          </h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            Our 8 Kanal purpose-built campus is designed to provide a world-class learning environment.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-xl p-5 hover:bg-white/20 transition-all duration-300 group"
            >
              <span className="text-3xl mb-3 block">{f.icon}</span>
              <h4 className="font-playfair font-bold text-white text-base mb-1.5">
                {f.title}
              </h4>
              <p className="text-white/65 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
