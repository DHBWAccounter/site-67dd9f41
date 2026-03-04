"use client";

import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Dining redefined.",
    text: "I've eaten at restaurants in 47 countries. Nothing — nothing — prepared me for this. The robot samurai fighting over my dessert was worth the trip to Tokyo alone. And the food? Michelin-quality. My children haven't stopped talking about it for weeks.",
    author: "Marcus Chen",
    location: "Singapore",
    type: "Family of 4",
  },
  {
    quote: "A symphony of light, taste, and technology.",
    text: "We came for the novelty, expecting gimmicks. We left genuinely moved. There's something profound about watching machines perform with such grace while humans add the intangible warmth. The wagyu course made me cry. Actually cry.",
    author: "Elena Rossi",
    location: "Italy",
    type: "Anniversary Dinner",
  },
  {
    quote: "The future tastes delicious.",
    text: "As a robotics engineer myself, I was skeptical. These aren't just robots going through motions — they're characters with personality. Takeshi has created something that shouldn't work but absolutely does. The precision on the sashimi? Better than human hands.",
    author: "Dr. James Park",
    location: "MIT Robotics Lab",
    type: "Solo Diner",
  },
];

export function Testimonials() {
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
      className="relative py-24 lg:py-32 overflow-hidden gradient-mesh"
    >
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 text-center mb-20">
          <span className="inline-block font-display text-sm text-secondary tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-glow-cyan">What Guests</span>
            <br />
            <span className="text-foreground/80">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={cn(
                "animate-on-scroll opacity-0 group relative p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-500",
                index === 1 && "lg:-mt-4 lg:mb-4"
              )}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/20 group-hover:text-secondary/40 transition-colors duration-300" />

              {/* Quote Title */}
              <h3 className="font-display text-xl font-bold text-secondary mb-4">
                "{testimonial.quote}"
              </h3>

              {/* Quote Text */}
              <p className="font-body text-foreground/70 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-background">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-sm text-foreground/50">
                    {testimonial.location} | {testimonial.type}
                  </p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
