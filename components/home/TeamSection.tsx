"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    photo: "/images/team/team-member-1.webp",
    name: "Dr. Ismail Khan",
    designation: "Director & Technical Advisor",
    org: "Institute of Medical Sciences Mardan",
    bio: "A dedicated healthcare professional and educator committed to building a premier medical sciences institute that produces skilled, compassionate healthcare professionals for Pakistan.",
    href: "/team/dr-ismail-khan",
  },
  {
    photo: "/images/team/team-member-2.webp",
    name: "Adil Nawaz",
    designation: "CEO & Founder",
    org: "Malik Sher Khan Foundation Mardan",
    bio: "Visionary leader and founder of Malik Sher Khan Foundation, driving the mission to provide quality healthcare education and community development in Mardan and Khyber Pakhtunkhwa.",
    href: "/team/adil-nawaz",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white">
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
            Our Leadership
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-[#1B3A7A] mb-4">
            Meet Our Key Team Members
          </h2>
          <p className="text-[#2D3748]/70 text-base max-w-xl mx-auto">
            Experienced professionals dedicated to academic excellence and student success.
          </p>
        </motion.div>

        {/* Cards — centered, max 800px */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#F8F9FC] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair font-bold text-xl text-[#1B3A7A] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#D42B2B] text-sm font-semibold mb-0.5">
                  {member.designation}
                </p>
                <p className="text-[#2D3748]/60 text-xs mb-4">{member.org}</p>
                <p className="text-[#2D3748]/75 text-sm leading-relaxed mb-5">
                  {member.bio}
                </p>
                <Link
                  href={member.href}
                  className="inline-flex items-center gap-2 text-[#1B3A7A] hover:text-[#D42B2B] font-semibold text-sm border border-[#1B3A7A] hover:border-[#D42B2B] px-4 py-2 rounded-lg transition-all"
                >
                  Read Full Profile →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
