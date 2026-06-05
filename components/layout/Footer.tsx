import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const programs = [
  { label: "BS Radiology", href: "/programs/bs-radiology" },
  { label: "BS Anesthesia", href: "/programs/bs-anesthesia" },
  { label: "BS Nursing", href: "/programs/bs-nursing" },
  { label: "Fee Structure", href: "/admissions/fee-structure" },
  { label: "Scholarships & Financial Aid", href: "/admissions/scholarships" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty", href: "/faculty" },
  { label: "Campus & Facilities", href: "/campus" },
  { label: "News & Events", href: "/news" },
  { label: "Download Center", href: "/downloads" },
  { label: "Careers", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F2456] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo/ims-logo.png"
                  alt="IMS Mardan Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-playfair font-bold text-base leading-tight">
                  Institute of Medical Sciences
                </p>
                <p className="text-xs text-[#A8C4E0] tracking-wider uppercase font-mono">
                  Mardan
                </p>
              </div>
            </Link>
            <p className="text-[#A8C4E0] text-sm italic font-playfair mb-3">
              Shaping the Future of Healthcare in Pakistan
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A premier nursing and allied health sciences institute dedicated to
              producing skilled, compassionate healthcare professionals.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, href: "#", label: "Facebook" },
                { Icon: FaInstagram, href: "#", label: "Instagram" },
                { Icon: FaYoutube, href: "#", label: "YouTube" },
                { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D42B2B] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Programs */}
          <div>
            <h3 className="font-playfair font-bold text-base mb-5 text-white">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {programs.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-[#A8C4E0] text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-base mb-5 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-[#A8C4E0] text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-playfair font-bold text-base mb-5 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/70">
                <FiMapPin className="shrink-0 mt-0.5 text-[#A8C4E0]" size={16} />
                <span>Mardan, Khyber Pakhtunkhwa, Pakistan</span>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <FiPhone className="shrink-0 mt-0.5 text-[#A8C4E0]" size={16} />
                <a href="tel:+92XXXXXXXXXX" className="hover:text-[#A8C4E0] transition-colors">
                  +92 XXX XXXXXXX
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <FiPhone className="shrink-0 mt-0.5 text-green-400" size={16} />
                <span>WhatsApp: +92 XXX XXXXXXX</span>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <FiMail className="shrink-0 mt-0.5 text-[#A8C4E0]" size={16} />
                <a
                  href="mailto:info@imsmardan.edu.pk"
                  className="hover:text-[#A8C4E0] transition-colors"
                >
                  info@imsmardan.edu.pk
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <FiClock className="shrink-0 mt-0.5 text-[#A8C4E0]" size={16} />
                <span>Mon–Sat, 8AM – 4PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Red Divider */}
      <div className="h-px bg-[#D42B2B] mx-4 sm:mx-6 lg:mx-8" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>
            © 2025 Institute of Medical Sciences Mardan. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#A8C4E0] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#A8C4E0] transition-colors">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="hover:text-[#A8C4E0] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
