"use client";

import { useEffect, useRef } from "react";
import { MapPin, Clock, Phone, Mail, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
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
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-card to-background"
    >
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 text-center mb-16">
          <span className="inline-block font-display text-sm text-secondary tracking-widest uppercase mb-4">
            Location
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-glow-pink">Find</span>
            <br />
            <span className="text-foreground/80">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Map Placeholder */}
          <div className="animate-on-scroll opacity-0 delay-200">
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-primary/30 neon-border-pink">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-secondary/10" />
              <div className="absolute inset-0 circuit-pattern opacity-40" />
              
              {/* Center Marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full bg-primary/30 animate-pulse-glow" />
                    <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-primary" />
                  </div>
                  <p className="mt-4 font-display text-lg font-bold text-secondary">
                    Kabukicho, Shinjuku
                  </p>
                  <p className="font-body text-sm text-foreground/60">
                    Look for the giant holographic robot
                  </p>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-secondary/50" />
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="animate-on-scroll opacity-0 delay-400 space-y-6">
            {/* Address */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Address</h3>
                  <p className="font-body text-foreground/70">
                    4-2-8 Shinjuku, Tokyo 160-0022, Japan
                  </p>
                  <p className="font-body text-sm text-foreground/50 mt-2">
                    Located in the heart of Kabukicho, 5 minutes from Shinjuku Station (East Exit). 
                    Look for the giant holographic robot — you can't miss it.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/20">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Hours</h3>
                  <p className="font-body text-foreground/70">
                    Tuesday - Sunday: 5:00 PM - 11:00 PM
                  </p>
                  <p className="font-body text-sm text-foreground/50 mt-1">
                    (Last seating 8:30 PM)
                  </p>
                  <p className="font-body text-sm text-primary mt-2">
                    Closed Mondays for robot maintenance
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/20">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Contact</h3>
                  <p className="font-body text-foreground/70">
                    Phone: <a href="tel:+81-3-762-2801" className="text-secondary hover:text-secondary/80 transition-colors">+81-3-ROBOT-01 (+81-3-762-2801)</a>
                  </p>
                  <p className="font-body text-foreground/70 mt-1">
                    Email: <a href="mailto:hello@takeshirobot.jp" className="text-secondary hover:text-secondary/80 transition-colors">hello@takeshirobot.jp</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Private Events */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/20">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Private Events</h3>
                  <p className="font-body text-foreground/70">
                    Our venue is available for private buyouts (up to 200 guests), corporate events, and film shoots.
                  </p>
                  <p className="font-body text-sm text-foreground/50 mt-2">
                    Contact: <a href="mailto:events@takeshirobot.jp" className="text-purple-400 hover:text-purple-400/80 transition-colors">events@takeshirobot.jp</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
