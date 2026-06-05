"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  { Icon: FiPhone, label: "Phone", value: "+92 XXX XXXXXXX", href: "tel:+92XXXXXXXXXX" },
  { Icon: FiMail, label: "Email", value: "info@imsmardan.edu.pk", href: "mailto:info@imsmardan.edu.pk" },
  { Icon: FiMapPin, label: "Address", value: "Mardan, Khyber Pakhtunkhwa", href: null },
  { Icon: FaWhatsapp, label: "WhatsApp", value: "+92 XXX XXXXXXX", href: "https://wa.me/+92XXXXXXXXXX" },
];

const programs = ["BS Radiology", "BS Anesthesia", "BS Nursing"];

export default function InquiryFormSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", program: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSubmitted(true);
  };

  const field = (key: keyof typeof form, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  return (
    <section ref={ref} className="py-20 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-mono text-xs tracking-widest uppercase text-[#D42B2B] bg-red-50 border border-red-200 px-3 py-1 rounded mb-5">
              Contact Us
            </span>
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-[#1B3A7A] mb-4">
              Have Questions? We Are Here to Help.
            </h2>
            <p className="text-[#2D3748]/70 text-base leading-relaxed mb-8">
              Our admissions team is ready to answer all your questions about programs,
              fees, eligibility, hostel, and campus life.
            </p>
            <div className="space-y-5">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1B3A7A] flex items-center justify-center shrink-0">
                    <Icon className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#2D3748]/50 font-mono uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[#2D3748] font-semibold hover:text-[#1B3A7A] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#2D3748] font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="font-playfair font-bold text-2xl text-[#1B3A7A] mb-6">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <span className="text-5xl mb-4 block">✅</span>
                <h4 className="font-playfair font-bold text-xl text-[#1B3A7A] mb-2">
                  Message Sent!
                </h4>
                <p className="text-[#2D3748]/70">
                  Thank you for your inquiry. Our admissions team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-sm font-semibold text-[#2D3748] mb-1">
                    Full Name <span className="text-[#D42B2B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => field("name", e.target.value)}
                    placeholder="Your full name"
                    className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A7A] transition-all ${
                      errors.name ? "border-[#D42B2B]" : "border-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[#D42B2B] text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2D3748] mb-1">
                    Phone Number <span className="text-[#D42B2B]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => field("phone", e.target.value)}
                    placeholder="+92 XXX XXXXXXX"
                    className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A7A] transition-all ${
                      errors.phone ? "border-[#D42B2B]" : "border-gray-200"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[#D42B2B] text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2D3748] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => field("email", e.target.value)}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A7A] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2D3748] mb-1">
                    Program of Interest
                  </label>
                  <select
                    value={form.program}
                    onChange={(e) => field("program", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A7A] transition-all bg-white"
                  >
                    <option value="">Select a program</option>
                    {programs.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2D3748] mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => field("message", e.target.value)}
                    placeholder="Tell us what you'd like to know..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A7A] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D42B2B] hover:bg-red-700 text-white font-bold py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg text-sm"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
