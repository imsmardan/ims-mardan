"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiX } from "react-icons/fi";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1B3A7A] text-white text-sm overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
            <p className="flex-1 text-center text-xs sm:text-sm">
              🎓 Admissions Open 2025 —{" "}
              <span className="font-semibold">BS Radiology</span> |{" "}
              <span className="font-semibold">BS Anesthesia</span> |{" "}
              <span className="font-semibold">BS Nursing</span>{" "}
              — Last Date: <span className="font-semibold">Date TBC</span>
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/admissions"
                className="text-[#D42B2B] font-semibold hover:text-red-400 transition-colors whitespace-nowrap"
              >
                Apply Now →
              </Link>
              <button
                onClick={() => setVisible(false)}
                aria-label="Close announcement"
                className="text-white/70 hover:text-white transition-colors"
              >
                <FiX size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
