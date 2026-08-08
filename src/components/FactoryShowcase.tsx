'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Play, Shield, Maximize2, Cpu, CheckCircle2, ChevronRight, X } from 'lucide-react';

export default function FactoryShowcase() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const factoryStats = [
    { value: '100,000', label: 'Sq Ft Manufacturing Facility', sub: 'Climate controlled & dust-free' },
    { value: '12,000+', label: 'Units Monthly Capacity', sub: 'High volume B2B throughput' },
    { value: '85+', label: 'Master Artisans & Technicians', sub: 'Dedicated engineering team' },
    { value: '100%', label: 'In-House Production', sub: 'Wood, metal, marble, upholstery' },
  ];

  const machineryHighlights = [
    { title: 'German 5-Axis Homag CNC', desc: 'Micron joinery precision' },
    { title: 'Automated Dust-Free Lacquer Tunnel', desc: 'Flawless piano mirror finish' },
    { title: 'Laser Metal Cutting & PVD Chamber', desc: 'Precision metallic trims' },
    { title: 'Hydraulic Upholstery & Mold Presses', desc: 'Custom ergonomic foam molds' },
  ];

  return (
    <section id="factory" className="section-padding bg-obsidian border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne font-mono block mb-3">
              05 // Industrial Capacity
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-alabaster font-light">
              100,000 Sq Ft <br />
              <span className="italic text-champagne">Manufacturing Complex.</span>
            </h2>
          </div>
          <p className="text-alabaster/70 text-sm max-w-md font-light leading-relaxed">
            Our state-of-the-art production complex combines automated European robotics with dedicated hand-upholstery studios under one ISO certified roof.
          </p>
        </div>

        {/* Cinematic Factory Banner with Video Tour Trigger */}
        <div className="relative rounded-luxury-lg overflow-hidden border border-white/15 aspect-[16/9] mb-12 shadow-luxury group">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="Factory Drone Photography"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-80" />

          {/* Center Play Video Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="group/btn flex items-center space-x-4 bg-obsidian/80 hover:bg-champagne text-alabaster hover:text-obsidian p-5 md:px-8 md:py-5 rounded-full border border-champagne/40 backdrop-blur-md transition-all duration-500 shadow-luxury-glow hover:scale-105"
            >
              <div className="w-10 h-10 rounded-full bg-champagne text-obsidian flex items-center justify-center group-hover/btn:bg-obsidian group-hover/btn:text-champagne transition-colors">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-medium hidden sm:inline">
                Watch 4K Factory Tour Video
              </span>
            </button>
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between glass-panel p-4 md:p-6 rounded-luxury border border-white/10 gap-4">
            <div className="flex items-center space-x-3">
              <Factory className="w-6 h-6 text-champagne" />
              <div>
                <span className="text-xs text-alabaster font-serif block">
                  ISO 9001:2015 & ISO 14001 Certified Plant
                </span>
                <span className="text-[10px] text-champagne/80 font-mono">
                  Location: Treviso Industrial Park // Milan Regional Hub
                </span>
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/10 text-alabaster border border-white/10">
              Live Factory Status: Operational (3 Shifts)
            </span>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {factoryStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-obsidian-card p-6 rounded-luxury border border-white/10 hover:border-champagne/40 transition-all duration-500 shadow-luxury-soft"
            >
              <span className="font-serif text-3xl md:text-4xl text-champagne font-light block">
                {stat.value}
              </span>
              <h4 className="font-serif text-lg text-alabaster mt-2">{stat.label}</h4>
              <p className="text-xs text-alabaster/60 font-sans mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Advanced Machinery Breakdown */}
        <div className="glass-panel p-8 md:p-10 rounded-luxury-lg border border-white/10">
          <h3 className="font-serif text-2xl text-alabaster font-light mb-6 flex items-center space-x-3">
            <Cpu className="w-6 h-6 text-champagne" />
            <span>Industrial Machinery Infrastructure</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {machineryHighlights.map((m, mIdx) => (
              <div
                key={mIdx}
                className="bg-white/5 p-4 rounded-luxury border border-white/5 flex items-start space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-alabaster uppercase tracking-wider">
                    {m.title}
                  </h4>
                  <p className="text-[11px] text-alabaster/60 font-sans mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/95 backdrop-blur-2xl"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-luxury-lg overflow-hidden border border-champagne/40 shadow-2xl">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-obsidian/80 text-alabaster flex items-center justify-center hover:bg-champagne hover:text-obsidian transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Virtual Factory Tour"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
