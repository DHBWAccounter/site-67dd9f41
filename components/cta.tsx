"use client";

import { useEffect, useRef } from "react";
import { Calendar, Phone, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTA() {
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
      id="reserve"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/30 blur-3xl animate-float delay-300" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="animate-on-scroll opacity-0 relative p-8 lg:p-12 rounded-3xl bg-card/80 backdrop-blur-lg border border-primary/30 neon-border-pink">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary rounded-br-3xl" />

            {/* Content */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-body text-sm text-primary tracking-wider uppercase">
                  Reservations Open 60 Days Ahead
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-glow-pink">Reserve Your Place</span>
                <br />
                <span className="text-foreground/80">in the Future</span>
              </h2>

              <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
                Seats at Takeshi's Robot Restaurant are among the most sought-after in Tokyo. 
                We release reservations 60 days in advance, and prime weekend slots often book within hours.
              </p>

              <p className="font-display text-xl font-bold text-secondary mb-10">
                Don't miss your chance to experience dining like nowhere else on Earth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                  href="tel:+81-3-762-2801"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-display text-sm font-bold uppercase tracking-wider rounded-lg overflow-hidden"
                >
                  <Phone className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Call to Reserve</span>
                  <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
                <a
                  href="mailto:reservations@takeshirobot.jp"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-secondary/50 text-secondary font-display text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-secondary/10 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Contact Info */}
              <div className="pt-8 border-t border-border/50">
                <p className="font-body text-foreground/60">
                  For same-day availability or special requests, call our human concierge team at{" "}
                  <a href="tel:+81-3-762-2801" className="text-secondary hover:text-secondary/80 transition-colors">
                    +81-3-ROBOT-01
                  </a>
                  {" "}or email{" "}
                  <a href="mailto:reservations@takeshirobot.jp" className="text-secondary hover:text-secondary/80 transition-colors">
                    reservations@takeshirobot.jp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
