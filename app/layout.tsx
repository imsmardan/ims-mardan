import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Institute of Medical Sciences Mardan | Premier Nursing & Allied Health Institute",
  description:
    "IMS Mardan offers PMDC, HEC & PNC recognized BS Radiology, BS Anesthesia and BS Nursing programs with world-class clinical training in Khyber Pakhtunkhwa, Pakistan.",
  keywords:
    "IMS Mardan, nursing college Mardan, BS Radiology, BS Anesthesia, BS Nursing, medical sciences Mardan, PMDC recognized, KPK nursing institute",
  openGraph: {
    title: "Institute of Medical Sciences Mardan",
    description:
      "Premier nursing and allied health sciences institute in Mardan, KPK. PMDC, HEC & PNC recognized programs.",
    type: "website",
    locale: "en_PK",
    siteName: "IMS Mardan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} font-dm antialiased bg-bg text-text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
