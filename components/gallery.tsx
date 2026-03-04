"use client";

import { useEffect, useRef } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryItems = [
  { title: "Neon Entrance Arch", description: "The iconic gateway to tomorrow" },
  { title: "Robot Performers", description: "Mid-dance elegance" },
  { title: "Exquisite Plating", description: "Where food meets art" },
  { title: "Time Tunnel", description: "30 meters of reactive LEDs" },
  { title: "Kitchen Theater", description: "Silicon and soul in harmony" },
  { title: "Holographic Moments", description: "Memories that transform" },
];

export function Gallery() {
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
      id="gallery"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-card to-background"
    >
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 text-center mb-16">
          <span className="inline-block font-display text-sm text-secondary tracking-widest uppercase mb-4">
            Gallery
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-glow-pink">Glimpses of</span>
            <br />
            <span className="text-foreground/80">Tomorrow</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-body text-lg text-foreground/70">
            Our gallery showcases the stunning visual experience awaiting you: the iconic neon entrance arch, 
            robot performers mid-dance, exquisite plating that blurs the line between food and art, and the 
            mesmerizing Time Tunnel. Each image captures a moment where technology and tradition dance together.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "animate-on-scroll opacity-0 group relative aspect-square rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500",
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 3 && "md:col-span-2"
              )}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500" />
              
              {/* Circuit Pattern */}
              <div className="absolute inset-0 circuit-pattern opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-background/60 group-hover:bg-background/40 transition-colors duration-500">
                <ImageIcon className="w-12 h-12 text-secondary/50 group-hover:text-secondary group-hover:scale-110 transition-all duration-300 mb-4" />
                <h3 className="font-display text-lg font-bold text-center group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-foreground/60 text-center">
                  {item.description}
                </p>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/50 group-hover:border-secondary transition-colors duration-300" />

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none neon-border-pink" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
