"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps any children in a scroll-triggered fade-up.
 * Children stay invisible until they enter the viewport, then animate in.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: `opacity 1s cubic-bezier(0.2, 1, 0.3, 1) ${delay}ms, transform 1.2s cubic-bezier(0.2, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}