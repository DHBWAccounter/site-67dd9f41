"use client";

import { useEffect, useRef } from "react";
import { Star, Sparkles, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const menus = [
  {
    name: "Circuit Course",
    price: "¥12,000",
    priceNote: "per person",
    icon: Sparkles,
    color: "primary",
    courses: "7-course",
    description: "A 7-course introduction to our world. Features our greatest hits: robot-prepared nigiri selection, wagyu robata skewers, and the famous \"Meteor\" dessert — a chocolate sphere that cracks open tableside to reveal a galaxy of flavors.",
    highlights: ["Robot-prepared nigiri", "Wagyu robata skewers", "\"Meteor\" dessert"],
  },
  {
    name: "Neural Network Course",
    price: "¥18,000",
    priceNote: "per person",
    icon: Star,
    color: "secondary",
    courses: "12-course",
    popular: true,
    description: "Our most popular 12-course experience. Includes exclusive access to our Sake Pod, a private tasting room where robot sommelier Bacchus pairs premium sake with each course using AI analysis of your flavor preferences gathered throughout the meal.",
    highlights: ["Sake Pod access", "AI-powered pairing", "Robot sommelier Bacchus"],
  },
  {
    name: "Singularity Course",
    price: "¥35,000",
    priceNote: "per person",
    icon: Crown,
    color: "purple",
    courses: "16-course",
    exclusive: true,
    description: "The ultimate 16-course journey. Reserved for 8 guests per night, this experience includes a private table in our Observation Deck overlooking the entire kitchen, a personalized menu created in real-time based on your preferences, and a post-dinner backstage tour led by Takeshi himself (when available).",
    highlights: ["Observation Deck", "Personalized menu", "Backstage tour with Takeshi"],
  },
];

export function Menus() {
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
      id="menus"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-card to-background"
    >
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 text-center mb-20">
          <span className="inline-block font-display text-sm text-secondary tracking-widest uppercase mb-4">
            Our Menus
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-glow-pink">Curated</span>
            <br />
            <span className="text-foreground/80">Experiences</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-body text-lg text-foreground/70">
            Three curated experiences, each a multi-sensory journey through Japanese culinary tradition 
            reimagined through a futuristic lens.
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {menus.map((menu, index) => {
            const Icon = menu.icon;
            const colorClasses = {
              primary: {
                border: "border-primary/30",
                icon: "text-primary",
                badge: "bg-primary/20 text-primary",
                button: "bg-primary hover:bg-primary/80",
                glow: "neon-border-pink",
              },
              secondary: {
                border: "border-secondary/30",
                icon: "text-secondary",
                badge: "bg-secondary/20 text-secondary",
                button: "bg-secondary hover:bg-secondary/80 text-background",
                glow: "neon-border-cyan",
              },
              purple: {
                border: "border-purple-500/30",
                icon: "text-purple-400",
                badge: "bg-purple-500/20 text-purple-400",
                button: "bg-purple-500 hover:bg-purple-500/80",
                glow: "",
              },
            }[menu.color];

            return (
              <div
                key={menu.name}
                className={cn(
                  "animate-on-scroll opacity-0 group relative flex flex-col p-8 rounded-2xl bg-card/80 backdrop-blur-sm border transition-all duration-500 hover:scale-[1.02]",
                  colorClasses.border,
                  menu.popular && "lg:-mt-4 lg:mb-4"
                )}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Popular Badge */}
                {menu.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-background font-display text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                {/* Exclusive Badge */}
                {menu.exclusive && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-500 text-background font-display text-xs font-bold uppercase tracking-wider">
                    Exclusive
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={cn("inline-flex p-3 rounded-xl mb-4", colorClasses.badge)}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">{menu.name}</h3>
                    <span className="font-body text-sm text-foreground/50">{menu.courses} experience</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className={cn("font-display text-4xl font-bold", colorClasses.icon)}>
                    {menu.price}
                  </span>
                  <span className="font-body text-foreground/50 ml-2">{menu.priceNote}</span>
                </div>

                {/* Description */}
                <p className="font-body text-foreground/70 leading-relaxed mb-6 flex-grow">
                  {menu.description.split(/(Sake Pod|Bacchus|Observation Deck|Takeshi)/).map((part, partIndex) => {
                    if (["Sake Pod", "Bacchus", "Observation Deck", "Takeshi"].includes(part)) {
                      return <strong key={partIndex} className="text-secondary">{part}</strong>;
                    }
                    return part;
                  })}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2">
                  {menu.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2">
                      <div className={cn("w-1.5 h-1.5 rounded-full", 
                        menu.color === "primary" && "bg-primary",
                        menu.color === "secondary" && "bg-secondary",
                        menu.color === "purple" && "bg-purple-400"
                      )} />
                      <span className="font-body text-sm text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#reserve"
                  className={cn(
                    "block text-center py-3 rounded-lg font-display text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                    colorClasses.button
                  )}
                >
                  Reserve This Experience
                </a>
              </div>
            );
          })}
        </div>

        {/* Dietary Note */}
        <div className="animate-on-scroll opacity-0 delay-700 mt-12 text-center">
          <p className="font-body text-foreground/60">
            <span className="text-secondary">*</span> Vegetarian, vegan, and allergy accommodations available with 48-hour notice.
          </p>
        </div>
      </div>
    </section>
  );
}
