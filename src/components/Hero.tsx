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
      <div className="absolute inset-0 z-0 bg-stone-900">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2400"
          alt="Luxury Architecture Interior"
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-115 opacity-85"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-75 contrast-115 opacity-85"
          poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2400"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-minimalist-design-41551-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Luxury Contrast Overlay (Makes background room dark & clearly visible) */}
        <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-stone-950/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-3 px-4.5 py-2 rounded-full border border-champagne/50 bg-white/95 backdrop-blur-md mb-8 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-champagne-dark animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-semibold">
            B2B Contract Manufacturing & Atelier
          </span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-charcoal font-normal leading-[1.08] max-w-5xl mb-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]"
        >
          Crafting Timeless Furniture <br className="hidden sm:inline" />
          <span className="italic font-serif text-champagne-dark">for Extraordinary Spaces.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-stone-800 font-sans font-medium max-w-3xl leading-relaxed mb-10 drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]"
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
            className="w-full sm:w-auto group flex items-center justify-center space-x-3 bg-charcoal hover:bg-stone-800 text-cream font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-luxury transition-all duration-500 shadow-luxury-soft hover:shadow-luxury hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-champagne" />
            <span>Request Catalogue</span>
          </button>

          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto group flex items-center justify-center space-x-3 bg-white/80 hover:bg-white border border-stone-300 hover:border-champagne text-charcoal font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-luxury backdrop-blur-md transition-all duration-500 shadow-sm hover:-translate-y-0.5"
          >
            <span>Get Bulk Quote</span>
            <ArrowUpRight className="w-4 h-4 text-champagne-dark transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                className="bg-white/85 backdrop-blur-md p-5 rounded-luxury border border-stone-200/80 flex flex-col items-center justify-center text-center shadow-luxury-soft transition-all duration-500 hover:border-champagne/60 hover:shadow-luxury hover:bg-white group"
              >
                <div className="w-8 h-8 rounded-full bg-champagne/15 flex items-center justify-center mb-2 group-hover:bg-champagne/30 transition-colors">
                  <Icon className="w-4 h-4 text-champagne-dark" />
                </div>
                <span className="font-serif text-3xl md:text-4xl text-charcoal font-medium tracking-tight group-hover:text-champagne-dark transition-colors">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-stone-500 mt-1 font-sans font-medium">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60">
        <span className="text-[9px] uppercase tracking-[0.25em] text-stone-600 font-medium">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-stone-400 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-champagne-dark rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
