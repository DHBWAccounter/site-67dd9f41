"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-float delay-300" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl animate-float delay-500" />

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/30 rotate-45 animate-rotate-slow" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-secondary/30 rotate-12 animate-rotate-slow" style={{ animationDirection: "reverse" }} />

      {/* Scanline Effect */}
      <div className="absolute inset-0 scanline pointer-events-none opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-on-scroll opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/50 bg-secondary/10 mb-8">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="font-body text-sm text-secondary tracking-wider uppercase">
              Tokyo's Most Advanced Dining Experience
            </span>
          </div>
        </div>

        <h1 className="animate-on-scroll opacity-0 delay-200">
          <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-glow-pink mb-4 animate-flicker">
            DINE WITH
          </span>
          <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-glow-cyan">
            THE FUTURE
          </span>
        </h1>

        <p className="animate-on-scroll opacity-0 delay-400 max-w-3xl mx-auto mt-8 font-body text-lg sm:text-xl text-foreground/80 leading-relaxed">
          Welcome to <strong className="text-primary">Takeshi's Robot Restaurant</strong> — where every meal is a 
          performance and every bite tells a story. Our army of 47 custom-built robots works alongside master 
          chefs to deliver an unforgettable fusion of technology and tradition.
        </p>

        <p className="animate-on-scroll opacity-0 delay-500 max-w-2xl mx-auto mt-6 font-body text-base text-foreground/60 leading-relaxed">
          Step through our holographic entrance into a world of pulsing neon lights, synchronized robot dancers, 
          and the intoxicating aroma of sizzling wagyu and fresh wasabi. This isn't just dinner. It's a journey into tomorrow.
        </p>

        <div className="animate-on-scroll opacity-0 delay-600 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reserve"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-display text-sm font-bold uppercase tracking-wider rounded-lg overflow-hidden"
          >
            <span className="relative z-10">Reserve Your Table</span>
            <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a
            href="#experience"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-secondary/50 text-secondary font-display text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-secondary/10 transition-colors duration-300"
          >
            Explore the Experience
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-secondary/50" />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
