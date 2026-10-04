import type { Metadata } from "next";
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["200", "300", "400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: "italic",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Muhammad Ahmad Javed — Full-Stack Developer",
  description:
    "Backend developer in Lahore building systems people trust. MERN stack, OpenCV, JWT, moving toward DevOps and automotive software.",
  openGraph: {
    title: "Muhammad Ahmad Javed — Full-Stack Developer",
    description:
      "Backend developer in Lahore. ODONTO-SCAN, CoinDom, and other MERN projects.",
    url: "https://portfolio-next-theta-henna.vercel.app",
    siteName: "Ahmad Javed",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}