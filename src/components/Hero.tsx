'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Store, Sparkles, ShieldCheck, Award, Factory, Calculator } from 'lucide-react';

interface HeroProps {
  onOpenCatalogue: () => void;
  onOpenQuote: (productName?: string) => void;
}

export default function Hero({ onOpenCatalogue, onOpenQuote }: HeroProps) {
  return (
    <section className="relative pt-32 sm:pt-36 pb-12 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        
        {/* Main Hero Luxury Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden min-h-[500px] sm:min-h-[560px] md:min-h-[600px] lg:min-h-[640px] flex items-center justify-end p-8 sm:p-14 lg:p-20 shadow-2xl group border border-stone-300/80"
        >
          {/* Rich Architectural Interior Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2400"
              alt="Luxury Commercial Furniture Fitout"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Rich Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/50 to-black/90 md:to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          </div>

          {/* Right-Aligned Hero Banner Content */}
          <div className="relative z-10 max-w-2xl text-right md:text-right text-white space-y-6 flex flex-col items-end">
            
            {/* Top Pill Badges */}
            <div className="flex flex-wrap gap-2 justify-end items-center">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-200 text-xs font-mono uppercase tracking-widest font-semibold shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>B2B Contract Portfolio</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-stone-100 text-xs font-mono tracking-wider font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>10-Yr B2B Warranty</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-stone-100 drop-shadow-md">
              Architectural Seating & <br />
              <span className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 uppercase block mt-1">
                CONTRACT FITOUTS
              </span>
            </h1>

            {/* Price Discount Callout */}
            <div className="flex items-baseline justify-end space-x-3 text-amber-300">
              <span className="text-xs uppercase font-mono tracking-widest font-semibold text-stone-300">DIRECT FACTORY OFFERS</span>
              <span className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-tight">UP TO 40% OFF</span>
            </div>

            {/* Paragraph Subtitle */}
            <p className="text-stone-300 text-xs sm:text-sm font-sans font-normal leading-relaxed max-w-lg drop-shadow">
              BIFMA Level 3 certified executive seating, solid European ashwood dining sets, workstation task chairs, and modular lounge furniture engineered for high-traffic corporate fitouts.
            </p>

            {/* Hero CTAs Row */}
            <div className="pt-4 flex flex-wrap gap-3 justify-end items-center">
              <button
                onClick={() => onOpenQuote('Monsoon Sale & Contract Fitout Inquiry')}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-charcoal font-semibold px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 shadow-xl hover:scale-105"
              >
                <span>GET B2B QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#features"
                className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 px-6 py-4 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all shadow-md"
              >
                <Calculator className="w-4 h-4 text-amber-300" />
                <span>FITOUT ESTIMATOR</span>
              </a>

              <button
                onClick={onOpenCatalogue}
                className="inline-flex items-center space-x-2 bg-stone-900/60 hover:bg-stone-900 text-white backdrop-blur-md border border-stone-700 px-6 py-4 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span className="hidden sm:inline">PDF CATALOG</span>
              </button>
            </div>
          </div>

          {/* Floating Store Widget Button */}
          <div className="absolute bottom-6 right-6 z-20">
            <a
              href="#projects"
              title="Locate Experience Center & Factory Showroom"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f26522] hover:bg-[#e05411] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
            >
              <Store className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Feature Highlights Grid Ribbon Below Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {[
            { title: '10-Year Warranty', text: 'Structural B2B Guarantee', icon: ShieldCheck },
            { title: 'BIFMA Level 3', text: '100,000+ Recline Cycles', icon: Award },
            { title: 'Direct Factory Pricing', text: '35-45% Middleman Savings', icon: Factory },
            { title: '120+ Finish Swatches', text: 'Custom Fabrics & Hardwoods', icon: Sparkles },
          ].map((feat, idx) => {
            const FeatIcon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-2xl p-4 flex items-center space-x-3.5 shadow-sm hover:shadow-luxury-soft transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-900 shrink-0">
                  <FeatIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal font-sans">{feat.title}</h4>
                  <p className="text-[11px] text-stone-500 font-mono mt-0.5">{feat.text}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
