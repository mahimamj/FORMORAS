'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ArrowUpRight, MapPin, Calendar, Layers, X, Download } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState<any | null>(null);

  const categories = ['All', 'Hotel', 'Villa', 'Office', 'Restaurant', 'Retail'];

  const projects = [
    {
      id: 1,
      title: 'Grand Horizon Resort & Spa',
      sector: 'Hotel',
      location: 'Amalfi Coast, Italy',
      architect: 'Lombardi & Partners Architecture',
      year: '2025',
      unitsInstalled: '340 Suites & Lobby Pavilion',
      contractScope: 'Custom guestroom joinery, public lounge seating, spa loungers',
      heroImage:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200',
      ],
      description:
        'A comprehensive contract furniture deployment encompassing 340 luxury guestrooms, presidential penthouses, and seaside dining verandas utilizing outdoor teak and bouclé textiles.',
    },
    {
      id: 2,
      title: 'Villa Belmond Estate',
      sector: 'Villa',
      location: 'Lake Como, Italy',
      architect: 'Studio Varese Interior',
      year: '2024',
      unitsInstalled: 'Private 1,800 sqm Compound',
      contractScope: 'Bespoke marble dining tables, walk-in closets, cinema lounge',
      heroImage:
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
      ],
      description:
        'Turnkey manufacturing of handcrafted walnut wood paneling, custom curved modular sectional sofas, and acid-etched bronze metal accent hardware.',
    },
    {
      id: 3,
      title: 'Nexis Financial Corporate Tower',
      sector: 'Office',
      location: 'Financial District, London',
      architect: 'Foster & Gensler Joint Atelier',
      year: '2025',
      unitsInstalled: '14 Executive Floors & Boardrooms',
      contractScope: 'Acoustic workstation pods, boardroom desks, presidential suites',
      heroImage:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
      ],
      description:
        'Equipped 14 floors of corporate office spaces with motorized height-adjustable executive desks, leather conference chairs, and sound-absorbing acoustic lounge pods.',
    },
    {
      id: 4,
      title: 'L’Étoile Michelin Restaurant',
      sector: 'Restaurant',
      location: 'Mayfair, London',
      architect: 'Atelier Jean-Luc',
      year: '2024',
      unitsInstalled: 'Main Dining Room & VIP Cellar',
      contractScope: 'Velvet banquette seating, marble service stations, wine room',
      heroImage:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200',
      ],
      description:
        'Bespoke banquette seating upholstered in stain-resistant deep burgundy Italian velvet paired with honed Nero Marquina marble tables.',
    },
    {
      id: 5,
      title: 'Maison Haute Flagship Store',
      sector: 'Retail',
      location: 'Via Montenapoleone, Milan',
      architect: 'Bespoke Luxury Retail Architects',
      year: '2025',
      unitsInstalled: '3-Story Flagship Boutique',
      contractScope: 'Display vitrines, brass counters, VIP lounge fitting rooms',
      heroImage:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200',
      ],
      description:
        'Handcrafted PVD brass display vitrines, fluted glass privacy partitions, and custom leather lounge chairs for private VIP client fitting salons.',
    },
  ];

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.sector === activeFilter);

  return (
    <section id="projects" className="section-padding bg-obsidian-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne font-mono block mb-3">
              06 // Global Case Studies
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-alabaster font-light">
              Featured Global <br />
              <span className="italic text-champagne">Contract Projects.</span>
            </h2>
          </div>
          <p className="text-alabaster/70 text-sm max-w-md font-light leading-relaxed">
            Explore landmark hospitality, executive, residential, and flagship retail installations completed across 40+ countries.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap text-xs uppercase tracking-[0.2em] px-5 py-3 rounded-full transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-champagne text-obsidian font-semibold shadow-luxury-glow'
                  : 'bg-white/5 text-alabaster/70 hover:text-alabaster hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveCaseStudy(project)}
              className="group cursor-pointer bg-obsidian-card rounded-luxury overflow-hidden border border-white/10 hover:border-champagne/50 transition-all duration-500 shadow-luxury-soft flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden image-container-zoom">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-70" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-obsidian/80 backdrop-blur-md text-champagne border border-champagne/30">
                  {project.sector}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[11px] text-alabaster/60 font-mono mb-2">
                    <MapPin className="w-3.5 h-3.5 text-champagne" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-alabaster font-light group-hover:text-champagne transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-alabaster/60 font-sans">
                  <span>Scope: <strong className="text-alabaster font-normal">{project.unitsInstalled}</strong></span>
                  <div className="w-8 h-8 rounded-full border border-champagne/40 flex items-center justify-center text-champagne group-hover:bg-champagne group-hover:text-obsidian transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/95 backdrop-blur-xl"
            onClick={() => setActiveCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-obsidian-card border border-white/15 rounded-luxury-lg max-w-4xl w-full p-6 sm:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-alabaster flex items-center justify-center hover:bg-champagne hover:text-obsidian transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne">
                Project Case Study // {activeCaseStudy.sector}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-alabaster font-light mt-1">
                {activeCaseStudy.title}
              </h2>
              <p className="text-xs text-champagne/80 font-mono mt-1">
                {activeCaseStudy.location} • Architect: {activeCaseStudy.architect} • Completed {activeCaseStudy.year}
              </p>

              {/* Main Banner */}
              <div className="my-6 rounded-luxury overflow-hidden aspect-[16/9] border border-white/10">
                <img
                  src={activeCaseStudy.heroImage}
                  alt={activeCaseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-xl text-alabaster">Executive Project Overview</h4>
                <p className="text-xs md:text-sm text-alabaster/75 font-light leading-relaxed">
                  {activeCaseStudy.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-white/10 text-xs font-sans">
                  <div>
                    <span className="text-alabaster/60 block font-mono">Contract Scope:</span>
                    <span className="text-alabaster font-medium">{activeCaseStudy.contractScope}</span>
                  </div>
                  <div>
                    <span className="text-alabaster/60 block font-mono">Volume / Scale:</span>
                    <span className="text-champagne font-medium">{activeCaseStudy.unitsInstalled}</span>
                  </div>
                </div>

                {/* Additional Gallery */}
                <h4 className="font-serif text-lg text-alabaster pt-2">Installation Gallery</h4>
                <div className="grid grid-cols-2 gap-4">
                  {activeCaseStudy.gallery.map((img: string, idx: number) => (
                    <div key={idx} className="rounded-luxury overflow-hidden aspect-[4/3] border border-white/10">
                      <img src={img} alt="Gallery item" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => alert(`Full Architectural Case Study PDF requested for ${activeCaseStudy.title}`)}
                    className="flex items-center space-x-2 bg-champagne hover:bg-champagne-gold text-obsidian font-semibold text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-luxury transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full Case Study PDF</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
