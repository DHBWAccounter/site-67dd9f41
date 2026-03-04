"use client";

import { Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom TikTok icon since lucide-react doesn't have it
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/TakeshiRobotRestaurant",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/TakeshiRobots",
    icon: Youtube,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@RobotDining",
    icon: TikTokIcon,
  },
];

export function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-t from-background via-card to-background">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-background">T</span>
              </div>
              <div className="text-left">
                <h3 className="font-display text-lg font-bold text-glow-pink">
                  TAKESHI'S
                </h3>
                <p className="text-xs text-secondary tracking-widest uppercase">
                  Robot Restaurant
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <p className="font-body text-sm text-foreground/60 mb-4">
              Follow our robots on social media for behind-the-scenes content, new menu announcements, and the occasional robot dance-off.
            </p>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Handles */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm font-body text-foreground/50">
            <span>
              <strong className="text-secondary">Instagram:</strong>{" "}
              <a href="https://www.instagram.com/TakeshiRobotRestaurant" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                @TakeshiRobotRestaurant
              </a>
            </span>
            <span>
              <strong className="text-secondary">YouTube:</strong>{" "}
              <a href="https://www.youtube.com/TakeshiRobots" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                /TakeshiRobots
              </a>
            </span>
            <span>
              <strong className="text-secondary">TikTok:</strong>{" "}
              <a href="https://www.tiktok.com/@RobotDining" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                @RobotDining
              </a>
            </span>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Copyright & Tagline */}
          <div className="space-y-4">
            <p className="font-body text-sm text-foreground/50">
              © 2024 Takeshi's Robot Restaurant. All rights reserved.
            </p>
            <p className="font-display text-lg text-secondary text-glow-cyan animate-pulse-glow">
              「未来は今」— The future is now.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
