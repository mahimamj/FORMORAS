'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Cpu, Leaf, ArrowRight } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'heritage',
      icon: Compass,
      title: 'Italian Artisanal Heritage',
      subtitle: 'Decades of master joinery traditions blended with modern form.',
      description:
        'Founded on three generations of woodcraft and upholstery mastery, our atelier marries classic European aesthetic sensitivity with state-of-the-art industrial production lines.',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'cnc',
      icon: Cpu,
      title: '5-Axis Precision Engineering',
      subtitle: 'Micron-level tolerances for architectural consistency.',
      description:
        'Our state-of-the-art facility integrates 5-axis German CNC milling centers and robotic lacquering cabins, guaranteeing zero variance across multi-thousand unit commercial orders.',
      image:
        'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'sustainability',
      icon: Leaf,
      title: 'FSC Certified Forestry',
      subtitle: 'Conscious luxury harvested from managed European timber forests.',
      description:
        'Every log of American Walnut, European Oak, and Smoked Ash is ethically harvested under strict FSC compliance, paired with low-VOC waterborne lacquer finishes.',
      image:
        'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'quality',
      icon: ShieldCheck,
      title: 'Rigorous Contract Testing',
      subtitle: 'BIFMA & EN 16139 structural compliance for high-traffic environments.',
      description:
        'Designed specifically for demanding hospitality, executive, and public spaces. Every collection undergoes 100,000-cycle load, stress, and seam endurance testing.',
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  return (
    <section id="about" className="section-padding relative bg-cream-muted border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-mono block mb-3 font-semibold">
              01 // Architectural Story
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal font-normal leading-tight">
              Where Master Craft <br />
              <span className="italic text-champagne-dark">Meets Industrial Scale.</span>
            </h2>
          </div>
          <p className="text-stone-600 text-sm md:text-base font-normal max-w-md leading-relaxed">
            We partner with principal designers, luxury developers, and hospitality conglomerates to bring large-scale custom furniture programs from sketch to flawless turnkey delivery.
          </p>
        </div>

        {/* Large Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Pillar Navigation */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activeTab === idx;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`cursor-pointer p-6 rounded-luxury transition-all duration-500 border ${
                    isSelected
                      ? 'bg-white border-champagne/60 shadow-luxury-soft'
                      : 'bg-white/50 border-stone-200/70 hover:border-stone-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-luxury transition-colors ${
                        isSelected ? 'bg-charcoal text-cream' : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-xl text-charcoal font-medium">
                          {pillar.title}
                        </h3>
                        <span className="text-xs text-champagne-dark font-mono font-semibold">0{idx + 1}</span>
                      </div>
                      <p className="text-xs text-stone-500 mt-1 font-sans">
                        {pillar.subtitle}
                      </p>
                      {isSelected && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-xs text-stone-600 mt-4 leading-relaxed font-sans pt-3 border-t border-stone-200"
                        >
                          {pillar.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-luxury-lg overflow-hidden border border-stone-200/80 aspect-[4/3] shadow-luxury image-container-zoom">
              <motion.img
                key={activeTab}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src={pillars[activeTab].image}
                alt={pillars[activeTab].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-luxury border border-stone-200/80 shadow-luxury-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-champagne-dark font-semibold block">
                      Featured Process
                    </span>
                    <h4 className="font-serif text-lg text-charcoal font-medium mt-1">
                      {pillars[activeTab].title}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-champagne-dark/40 flex items-center justify-center text-champagne-dark">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
