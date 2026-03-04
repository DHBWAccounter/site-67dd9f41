"use client";

import { useEffect, useRef } from "react";
import { Cpu, Heart, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function About() {
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
      id="story"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 text-center mb-16">
          <span className="inline-block font-display text-sm text-secondary tracking-widest uppercase mb-4">
            Our Story
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-glow-pink">Where Silicon</span>
            <br />
            <span className="text-glow-cyan">Meets Soul</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Story Text */}
          <div className="animate-on-scroll opacity-0 delay-200 space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Founded in 2019 by robotics engineer turned restaurateur{" "}
              <strong className="text-primary">Takeshi Yamamoto</strong>, our restaurant was born from a simple question:{" "}
              <em className="text-secondary">"What if technology could make dining more magical?"</em>
            </p>

            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Takeshi spent 15 years developing industrial robots for automotive factories before a life-changing meal 
              at his grandmother's traditional kaiseki restaurant in Kyoto sparked a new vision. He realized the 
              precision and artistry of robotics could elevate — not replace — the human touch in cooking.
            </p>

            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Today, our kitchen houses robots named after Japanese folklore heroes:{" "}
              <strong className="text-secondary">Fujin</strong> prepares sushi with microsecond precision,{" "}
              <strong className="text-secondary">Raijin</strong> wields flamethrowers for dramatic robata grilling, 
              and our beloved <strong className="text-secondary">Amaterasu</strong> performs synchronized dances 
              between courses. Each robot was designed and built in our underground workshop, programmed with 
              movements choreographed by former Cirque du Soleil performers.
            </p>

            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              But technology is only half the story. Our human culinary team, led by Executive Chef{" "}
              <strong className="text-primary">Yuki Tanaka</strong> (formerly of Tokyo's three-Michelin-starred RyuGin), 
              brings decades of traditional training to every dish. The result? A harmony of silicon and soul.
            </p>
          </div>

          {/* Right: Visual Cards */}
          <div className="animate-on-scroll opacity-0 delay-400 space-y-6">
            {/* Robot Card */}
            <div className="group relative p-6 rounded-2xl bg-card border border-primary/30 hover:border-primary/60 transition-all duration-500 neon-border-pink">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary mb-2">47 Custom Robots</h3>
                  <p className="font-body text-foreground/70">
                    Each robot designed and built in-house, named after Japanese folklore heroes
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Chef Card */}
            <div className="group relative p-6 rounded-2xl bg-card border border-secondary/30 hover:border-secondary/60 transition-all duration-500 neon-border-cyan">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/20">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-secondary mb-2">Human Excellence</h3>
                  <p className="font-body text-foreground/70">
                    Led by Chef Yuki Tanaka from three-Michelin-starred RyuGin
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Team Card */}
            <div className="group relative p-6 rounded-2xl bg-card border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/20">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-purple-400 mb-2">Cirque du Soleil Magic</h3>
                  <p className="font-body text-foreground/70">
                    Robot movements choreographed by former Cirque du Soleil performers
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
