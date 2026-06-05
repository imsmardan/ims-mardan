"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const goals = [
  {
    n: "01",
    icon: "🎓",
    title: "Academic Excellence",
    desc: "Providing high-quality education preparing students for successful healthcare careers",
  },
  {
    n: "02",
    icon: "🏥",
    title: "Clinical Expertise",
    desc: "Developing skilled and compassionate professionals delivering exceptional patient care",
  },
  {
    n: "03",
    icon: "🔬",
    title: "Research & Innovation",
    desc: "Fostering a culture of research advancing healthcare knowledge and practice",
  },
  {
    n: "04",
    icon: "🤝",
    title: "Community Service",
    desc: "Providing healthcare services and outreach programs improving community well-being",
  },
  {
    n: "05",
    icon: "🌱",
    title: "Sustainability",
    desc: "Maintaining a sustainable and eco-friendly campus promoting green practices",
  },
  {
    n: "06",
    icon: "🌍",
    title: "Global Recognition",
    desc: "Achieving national and international recognition as a premier nursing institution",
  },
  {
    n: "07",
    icon: "✅",
    title: "Student Success",
    desc: "Supporting students personal and professional growth ensuring employability",
  },
];

export default function GoalsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-[#D42B2B] bg-red-50 border border-red-200 px-3 py-1 rounded mb-4">
            Our Goals
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-[#1B3A7A]">
            What We Stand For
          </h2>
        </motion.div>

        {/* Grid: 3-3-1 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((g, i) => (
            <motion.div
              key={g.n}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 ${
                i === 6 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-[#A8C4E0] font-bold mt-1 shrink-0">
                  {g.n}
                </span>
                <div>
                  <span className="text-2xl mb-2 block">{g.icon}</span>
                  <h4 className="font-playfair font-bold text-base text-[#1B3A7A] mb-2">
                    {g.title}
                  </h4>
                  <p className="text-[#2D3748]/70 text-sm leading-relaxed">{g.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
