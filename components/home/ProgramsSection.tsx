"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    image: "/images/programs/radiology-card.webp",
    icon: "🩻",
    title: "BS Radiology",
    duration: "4 Years",
    description:
      "Comprehensive training in diagnostic imaging, X-ray, CT scan, MRI, and ultrasound technology with hospital-based clinical rotations.",
    tags: ["PMDC Recognized", "Clinical Training", "Hospital Rotations"],
    href: "/programs/bs-radiology",
  },
  {
    image: "/images/programs/anesthesia-card.webp",
    icon: "💉",
    title: "BS Anesthesia",
    duration: "4 Years",
    description:
      "Training in anesthesia technology, patient monitoring, operating room management and critical care with hands-on surgical theater experience.",
    tags: ["PMDC Recognized", "OR Training", "Critical Care"],
    href: "/programs/bs-anesthesia",
  },
  {
    image: "/images/programs/nursing-card.webp",
    icon: "🩺",
    title: "BS Nursing",
    duration: "4 Years",
    description:
      "PNC-recognized nursing program covering medical-surgical nursing, community health, pediatric care, and professional nursing practice.",
    tags: ["PNC Recognized", "Ward Placements", "Community Health"],
    href: "/programs/bs-nursing",
  },
];

function ProgramCard({ program, index }: { program: typeof programs[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Background Image */}
      <div className="relative h-72">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 bg-[#D42B2B] text-white text-xs font-mono font-semibold px-3 py-1 rounded-full">
          {program.duration}
        </div>

        {/* Icon + Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-3xl mb-2 block">{program.icon}</span>
          <h3 className="font-playfair font-bold text-2xl text-white">
            {program.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-5">
        <p className="text-[#2D3748] text-sm leading-relaxed mb-4">
          {program.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {program.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono bg-[#F8F9FC] text-[#1B3A7A] border border-[#A8C4E0] px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={program.href}
          className="inline-flex items-center gap-2 text-[#1B3A7A] hover:text-[#D42B2B] font-semibold text-sm transition-colors group/link"
        >
          View Program
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProgramsSection() {
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
            Our Programs
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-[#1B3A7A] mb-4">
            PMDC & HEC Recognized Degree Programs
          </h2>
          <p className="text-[#2D3748]/70 text-base max-w-2xl mx-auto">
            All programs include full clinical training at affiliated teaching hospitals in Mardan.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <ProgramCard key={program.title} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
