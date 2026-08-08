'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Award, Globe, Building2, Factory } from 'lucide-react';

interface HeroProps {
  onOpenCatalogue: () => void;
  onOpenQuote: () => void;
}

export default function Hero({ onOpenCatalogue, onOpenQuote }: HeroProps) {
  const stats = [
    { value: '25+', label: 'Years Heritage', icon: Award },
    { value: '500+', label: 'Global Projects', icon: Building2 },
    { value: '40+', label: 'Countries Exported', icon: Globe },
    { value: '100k', label: 'Sq Ft Factory', icon: Factory },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Video / Cinematic Backdrop */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
          poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-minimalist-design-41551-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Layered Luxury Vignette & Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/40" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-champagne/30 bg-obsidian/60 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-champagne font-medium">
            B2B Contract Manufacturing & Atelier
          </span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-alabaster font-light leading-[1.08] max-w-5xl mb-6"
        >
          Crafting Timeless Furniture <br className="hidden sm:inline" />
          <span className="italic font-serif text-champagne">for Extraordinary Spaces.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-alabaster/75 font-sans font-light max-w-3xl leading-relaxed mb-10"
        >
          Bespoke high-volume manufacturing engineered for principal architects, luxury hospitality groups, executive interiors, and global brand flagships.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 w-full sm:w-auto"
        >
          <button
            onClick={onOpenCatalogue}
            className="w-full sm:w-auto group flex items-center justify-center space-x-3 bg-champagne hover:bg-champagne-gold text-obsidian font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-luxury transition-all duration-500 shadow-luxury-glow hover:shadow-luxury hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-obsidian" />
            <span>Request Catalogue</span>
          </button>

          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto group flex items-center justify-center space-x-3 bg-obsidian/80 hover:bg-obsidian border border-white/20 hover:border-champagne text-alabaster text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-luxury backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5"
          >
            <span>Get Bulk Quote</span>
            <ArrowUpRight className="w-4 h-4 text-champagne transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        {/* Floating Animated Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-5 rounded-luxury border border-white/10 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-champagne/40 hover:bg-obsidian/90 group"
              >
                <div className="w-8 h-8 rounded-full bg-champagne/10 flex items-center justify-center mb-2 group-hover:bg-champagne/20 transition-colors">
                  <Icon className="w-4 h-4 text-champagne" />
                </div>
                <span className="font-serif text-3xl md:text-4xl text-alabaster font-light tracking-tight group-hover:text-champagne transition-colors">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-alabaster/60 mt-1 font-sans">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60">
        <span className="text-[9px] uppercase tracking-[0.25em] text-alabaster/60">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-alabaster/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-champagne rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
