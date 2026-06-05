import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const info = [
  { Icon: FiMapPin, text: "Mardan, Khyber Pakhtunkhwa", href: null },
  { Icon: FiPhone, text: "+92 XXX XXXXXXX", href: "tel:+92XXXXXXXXXX" },
  { Icon: FiMail, text: "info@imsmardan.edu.pk", href: "mailto:info@imsmardan.edu.pk" },
  { Icon: FiClock, text: "Mon–Sat, 8AM – 4PM", href: null },
];

export default function QuickInfoBar() {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {info.map(({ Icon, text, href }) =>
              href ? (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-2 text-sm text-[#2D3748] hover:text-[#1B3A7A] transition-colors"
                >
                  <Icon className="text-[#1B3A7A] shrink-0" size={14} />
                  <span>{text}</span>
                </a>
              ) : (
                <div key={text} className="flex items-center gap-2 text-sm text-[#2D3748]">
                  <Icon className="text-[#1B3A7A] shrink-0" size={14} />
                  <span>{text}</span>
                </div>
              )
            )}
          </div>
          <a
            href="https://wa.me/+92XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-colors"
          >
            <FaWhatsapp size={16} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
