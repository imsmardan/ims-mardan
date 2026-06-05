"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

const points = [
  "Affiliated with leading teaching hospitals in Mardan",
  "Supervised clinical rotations every semester",
  "50-bed on-campus medical center for skills training",
  "Simulation labs with modern medical equipment",
];

export default function ClinicalTrainingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <Image
              src="/images/sections/clinical-training.webp"
              alt="Clinical training at IMS Mardan"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block font-mono text-xs tracking-widest uppercase text-[#D42B2B] bg-red-50 border border-red-200 px-3 py-1 rounded mb-5">
              Clinical Training
            </span>
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-[#1B3A7A] mb-5">
              Real Hospital Training From Day One
            </h2>
            <p className="text-[#2D3748]/75 text-base leading-relaxed mb-8">
              At IMS Mardan, clinical training is not an afterthought — it is built into every
              program from the very beginning. Our students train at affiliated teaching hospitals
              in Mardan, gaining the hands-on experience that employers look for.
            </p>
            <ul className="space-y-4 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <FiCheckCircle className="text-[#D42B2B] shrink-0 mt-0.5" size={20} />
                  <span className="text-[#2D3748] text-base">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-[#1B3A7A] hover:bg-[#0F2456] text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Learn About Our Programs →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
