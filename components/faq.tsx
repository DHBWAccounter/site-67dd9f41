"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is this a family-friendly restaurant?",
    answer: "Absolutely! Children are mesmerized by our robot performers. We offer a special \"Junior Engineer\" menu for guests under 12, complete with a small robot toy to take home. High chairs and changing facilities available.",
  },
  {
    question: "How long is the experience?",
    answer: "Plan for 2.5-3 hours. Each course is timed with performances, creating a leisurely pace. We recommend arriving 15 minutes early to enjoy the Time Tunnel without rushing.",
  },
  {
    question: "Do the robots replace human servers?",
    answer: "Our robots handle food delivery and performances, but human staff manage greetings, explain courses, and ensure your comfort. It's the best of both worlds — technological wonder with human warmth.",
  },
  {
    question: "Is the restaurant accessible?",
    answer: "Yes. All areas are wheelchair accessible, and we offer audio descriptions for visually impaired guests. Our robots can communicate in 12 languages via text displays.",
  },
  {
    question: "Can I book for special occasions?",
    answer: "We specialize in celebrations! Anniversary, birthday, and proposal packages available. Our robots can be programmed to deliver custom messages and even present rings during the show.",
  },
  {
    question: "What's your cancellation policy?",
    answer: "Free cancellation up to 48 hours before your reservation. Within 48 hours, a 50% charge applies. No-shows are charged in full.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      id="faq"
      className="relative py-24 lg:py-32 overflow-hidden gradient-mesh"
    >
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 text-center mb-16">
          <span className="inline-block font-display text-sm text-secondary tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-glow-cyan">Frequently Asked</span>
            <br />
            <span className="text-foreground/80">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "w-full flex items-start gap-4 p-6 rounded-2xl border transition-all duration-300 text-left",
                  openIndex === index
                    ? "bg-card border-secondary/50 neon-border-cyan"
                    : "bg-card/50 border-border hover:border-primary/30"
                )}
              >
                <HelpCircle className={cn(
                  "w-6 h-6 flex-shrink-0 mt-0.5 transition-colors duration-300",
                  openIndex === index ? "text-secondary" : "text-primary/50"
                )} />
                <div className="flex-grow">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                    )}
                  >
                    <p className="font-body text-foreground/70 leading-relaxed">
                      {faq.answer.split(/("Junior Engineer"|Time Tunnel)/).map((part, partIndex) => {
                        if (["\"Junior Engineer\"", "Time Tunnel"].includes(part)) {
                          return <strong key={partIndex} className="text-secondary">{part}</strong>;
                        }
                        return part;
                      })}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 flex-shrink-0 mt-1 text-foreground/50 transition-transform duration-300",
                    openIndex === index && "rotate-180 text-secondary"
                  )}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
