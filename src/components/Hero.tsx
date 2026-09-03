'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Store, Sparkles, ShieldCheck, Award, Factory } from 'lucide-react';

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
              className="w-full h-full object-cover object-center filter brightness-105 contrast-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Luminous Light Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#FFFDF9]/95 via-[#FFFDF9]/90 to-[#FAF6EF]/40 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF9]/90 via-transparent to-[#FAF6EF]/50" />
          </div>

          {/* Right-Aligned Hero Banner Content in Light Glass Box */}
          <div className="relative z-10 max-w-2xl text-right md:text-right text-stone-900 space-y-6 flex flex-col items-end bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-luxury-lg border border-amber-200/60 shadow-luxury">
            
            {/* Top Pill Badges */}
            <div className="flex flex-wrap gap-2 justify-end items-center">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-[#8C6D3F] text-xs font-mono uppercase tracking-widest font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#B89768]" />
                <span>B2B Contract Portfolio</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-stone-100/90 border border-stone-300 text-stone-700 text-xs font-mono tracking-wider font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B89768]" />
                <span>10-Yr B2B Warranty</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-stone-900">
              Architectural Seating & <br />
              <span className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#B89768] via-[#D4AF37] to-[#8C6D3F] uppercase block mt-1">
                CONTRACT FITOUTS
              </span>
            </h1>

            {/* Price Discount Callout */}
            <div className="flex items-baseline justify-end space-x-3 text-[#A6824F]">
              <span className="text-xs uppercase font-mono tracking-widest font-semibold text-stone-600">DIRECT FACTORY OFFERS</span>
              <span className="font-serif text-4xl sm:text-6xl font-extrabold text-stone-900 tracking-tight">UP TO 40% OFF</span>
            </div>

            {/* Paragraph Subtitle */}
            <p className="text-stone-600 text-xs sm:text-sm font-sans font-normal leading-relaxed max-w-lg">
              BIFMA Level 3 certified executive seating, solid European ashwood dining sets, workstation task chairs, and modular lounge furniture engineered for high-traffic corporate fitouts.
            </p>

            {/* Hero CTAs Row */}
            <div className="pt-2 flex flex-wrap gap-3 justify-end items-center">
              <button
                onClick={() => onOpenQuote('Monsoon Sale & Contract Fitout Inquiry')}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#B89768] to-[#9E7C4F] hover:from-[#A6824F] hover:to-[#8C6D3F] text-white font-semibold px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 shadow-luxury hover:scale-105"
              >
                <span>GET B2B QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#categories-catalog"
                className="inline-flex items-center space-x-2 bg-amber-50 hover:bg-amber-100 text-stone-800 border border-amber-200 px-6 py-4 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all shadow-xs"
              >
                <Award className="w-4 h-4 text-[#B89768]" />
                <span>EXPLORE CATALOG</span>
              </a>

              <button
                onClick={onOpenCatalogue}
                className="inline-flex items-center space-x-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 px-6 py-4 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all shadow-xs"
              >
                <Download className="w-4 h-4 text-[#B89768]" />
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
