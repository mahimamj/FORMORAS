'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Store, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenCatalogue: () => void;
  onOpenQuote: (productName?: string) => void;
}

export default function Hero({ onOpenCatalogue, onOpenQuote }: HeroProps) {
  return (
    <section className="relative pt-32 sm:pt-36 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Urban Ladder Style Hero Main Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden min-h-[480px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-end p-8 sm:p-14 lg:p-20 shadow-2xl group border border-stone-200/60"
        >
          {/* Rich Interior Background Image with Lush Garden View */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2400"
              alt="Luxury Contract Interior"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Dark Gradient Overlay on Right Side for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-black/85 md:to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          </div>

          {/* Right-Aligned Hero Banner Content (Urban Ladder Monsoon Sale Style) */}
          <div className="relative z-10 max-w-xl text-right md:text-right text-white space-y-5 flex flex-col items-end">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-200 text-xs font-mono uppercase tracking-widest font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial B2B Portfolio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-stone-100 drop-shadow-md">
              It’s Raining Discounts <br />
              <span className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wider text-white uppercase block mt-1">
                MONSOON SALE
              </span>
            </h2>

            <div className="flex items-baseline justify-end space-x-3 text-amber-300">
              <span className="text-xs uppercase font-mono tracking-widest font-semibold text-stone-200">UP TO</span>
              <span className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-tight">40% OFF</span>
            </div>

            <p className="text-stone-300 text-xs sm:text-sm font-sans font-normal leading-relaxed max-w-md drop-shadow">
              Architectural grade executive chairs, solid ashwood dining sets, workstation task chairs, and modular lounge furniture for B2B contract fitouts.
            </p>

            <div className="pt-4 flex flex-wrap gap-3 justify-end items-center">
              <button
                onClick={() => onOpenQuote('Monsoon Sale Inquiry')}
                className="inline-flex items-center space-x-3 bg-transparent hover:bg-white text-white hover:text-charcoal border-2 border-white px-8 py-3.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:scale-105"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCatalogue}
                className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 px-6 py-3.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span className="hidden sm:inline">PDF CATALOG</span>
              </button>
            </div>
          </div>

          {/* Floating Orange Store Widget Button (Bottom Right - Urban Ladder Floating Badge) */}
          <div className="absolute bottom-6 right-6 z-20">
            <a
              href="#projects"
              title="Locate Showroom & Experience Center"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f26522] hover:bg-[#e05411] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
            >
              <Store className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
