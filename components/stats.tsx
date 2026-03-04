"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "47", label: "Custom-built robots" },
  { value: "2.3 million", label: "Guests served" },
  { value: "156", label: "Countries represented" },
  { value: "4.9", label: "Average rating" },
  { value: "18", label: "Months to build" },
  { value: "∞", label: "Possibilities" },
];

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-r from-primary/10 via-background to-secondary/10"
    >
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            <span className="text-glow-pink">By the Numbers</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-on-scroll opacity-0 text-center group"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative inline-block">
                <span className="font-display text-4xl sm:text-5xl font-bold text-glow-cyan group-hover:text-glow-pink transition-all duration-500">
                  {stat.value}
                </span>
              </div>
              <p className="mt-2 font-body text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
