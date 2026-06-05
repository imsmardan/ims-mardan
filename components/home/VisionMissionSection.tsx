"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VisionMissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#1B3A7A] rounded-2xl p-10 text-white"
          >
            <div className="text-5xl mb-5">🎯</div>
            <h3 className="font-playfair font-bold text-2xl sm:text-3xl mb-5">
              Our Vision
            </h3>
            <p className="text-white/85 text-base leading-relaxed">
              To address the shortage of skilled nurses in Pakistan, we aim to provide
              high-quality, job-oriented nursing education that prepares students for
              successful careers in healthcare.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#D42B2B] rounded-2xl p-10 text-white"
          >
            <div className="text-5xl mb-5">🚀</div>
            <h3 className="font-playfair font-bold text-2xl sm:text-3xl mb-5">
              Our Mission
            </h3>
            <p className="text-white/85 text-base leading-relaxed">
              To empower students to become competent, compassionate, and caring nursing
              professionals, capable of delivering high-quality patient care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
