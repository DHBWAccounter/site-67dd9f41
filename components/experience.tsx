"use client";

import { useEffect, useRef } from "react";
import { Sparkles, Flame, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

const acts = [
  {
    number: "I",
    title: "Arrival",
    icon: Sparkles,
    color: "primary",
    content: [
      'Enter through our famous "Time Tunnel," a 30-meter corridor of reactive LED panels that respond to your movements.',
      "Our host robots, Hikari and Kage, guide you to your table in our main dining arena, a 200-seat space surrounded by 360-degree projection mapping.",
    ],
  },
  {
    number: "II",
    title: "The Performance",
    icon: Flame,
    color: "secondary",
    content: [
      "Throughout your meal, enjoy three robot shows: the thunderous Taiko Drum Battle, the elegant Cherry Blossom Dance, and our signature Neon Samurai Showdown.",
      "Each performance is synchronized with your courses for maximum impact.",
    ],
  },
  {
    number: "III",
    title: "The Kitchen",
    icon: Camera,
    color: "purple",
    content: [
      "Watch through floor-to-ceiling windows as robots and chefs work in mesmerizing coordination.",
      "See Fujin slice sashimi with 0.1mm precision, witness Raijin create fire tornadoes over premium A5 wagyu, and marvel as Kitsune our cocktail robot crafts smoking, bubbling, color-changing drinks.",
    ],
  },
];

export function Experience() {
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
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden gradient-mesh"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 text-center mb-20">
          <span className="inline-block font-display text-sm text-secondary tracking-widest uppercase mb-4">
            The Experience
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-glow-cyan">Three Acts</span>
            <br />
            <span className="text-foreground/80">of Wonder</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-body text-lg text-foreground/70">
            Your evening unfolds across three distinct acts, each designed to delight all senses.
          </p>
        </div>

        {/* Acts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {acts.map((act, index) => {
            const Icon = act.icon;
            const colorClasses = {
              primary: {
                border: "border-primary/30 hover:border-primary/60",
                icon: "text-primary bg-primary/20",
                number: "text-glow-pink",
                bg: "from-primary/10",
              },
              secondary: {
                border: "border-secondary/30 hover:border-secondary/60",
                icon: "text-secondary bg-secondary/20",
                number: "text-glow-cyan",
                bg: "from-secondary/10",
              },
              purple: {
                border: "border-purple-500/30 hover:border-purple-500/60",
                icon: "text-purple-400 bg-purple-500/20",
                number: "text-glow-purple",
                bg: "from-purple-500/10",
              },
            }[act.color]!;

            return (
              <div
                key={act.number}
                className={cn(
                  "animate-on-scroll opacity-0 group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border transition-all duration-500",
                  colorClasses.border
                )}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Act Number */}
                <div className="absolute -top-4 -right-4 font-display text-6xl font-bold text-foreground/5 group-hover:text-primary/10 transition-colors duration-500">
                  {act.number}
                </div>

                {/* Icon */}
                <div className={cn("inline-flex p-4 rounded-xl mb-6", colorClasses.icon)}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold mb-2">
                  Act {act.number}: {act.title}
                </h3>

                {/* Content */}
                <div className="space-y-4">
                  {act.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="font-body text-foreground/70 leading-relaxed">
                      {paragraph.split(/(Hikari|Kage|Fujin|Raijin|Kitsune|Taiko Drum Battle|Cherry Blossom Dance|Neon Samurai Showdown|Time Tunnel)/).map((part, partIndex) => {
                        if (["Hikari", "Kage", "Fujin", "Raijin", "Kitsune"].includes(part)) {
                          return <strong key={partIndex} className="text-secondary">{part}</strong>;
                        }
                        if (["Taiko Drum Battle", "Cherry Blossom Dance", "Neon Samurai Showdown", "Time Tunnel"].includes(part)) {
                          return <strong key={partIndex} className="text-primary">{part}</strong>;
                        }
                        return part;
                      })}
                    </p>
                  ))}
                </div>

                {/* Gradient Overlay */}
                <div className={cn("absolute inset-0 rounded-2xl bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none", colorClasses.bg)} />
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="animate-on-scroll opacity-0 delay-700 mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-card border border-secondary/30">
            <Camera className="w-5 h-5 text-secondary" />
            <span className="font-body text-foreground/80">
              Every guest receives a <strong className="text-secondary">commemorative holographic photo</strong> with our robot performers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
