"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#craft", label: "Craft" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#04070a]/75 backdrop-blur-md border-b border-white/5 py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-[#eef2e6]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#b8ff7a] shadow-[0_0_14px_#b8ff7a] animate-pulse" />
          Ahmad Javed
        </a>

        <div className="hidden md:flex gap-9 font-mono text-[11px] tracking-[0.18em] uppercase text-[#a4b09c]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-[#b8ff7a] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-px after:bg-[#b8ff7a] after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-500"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}