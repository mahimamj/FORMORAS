'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, Check, ArrowRight, Info } from 'lucide-react';

export default function MaterialLibrary() {
  const [selectedMaterial, setSelectedMaterial] = useState(0);

  const materials = [
    {
      id: 'wood',
      name: 'Architectural Hardwoods',
      category: 'Wood',
      finishes: ['American Walnut', 'Smoked European Oak', 'Ebony Macassar', 'Natural Ash'],
      durability: 'Grade A Contract (Janka Rating 1,010-1,820 lbf)',
      ecoRating: 'FSC Certified / 100% Sustainable Forestry',
      texture:
        'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=1000',
      description:
        'Kiln-dried down to 6-8% moisture content for tropical and arid climate stability. Precision planed and sealed with non-yellowing polyurethane or matte hand-rubbed oil.',
    },
    {
      id: 'marble',
      name: 'Quarried Natural Stone',
      category: 'Marble',
      finishes: ['Calacatta Oro', 'Nero Marquina', 'Verde Alpi', 'Travertine Navona'],
      durability: 'Polished / Honed Hydrophobic Nanocoated',
      ecoRating: 'Zero Carbon Quarry Processing',
      texture:
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
      description:
        'Hand-selected slab book-matching for conference tables and vanity suites. Impregnated with stain-resistant resin matrix for high-traffic hospitality utility.',
    },
    {
      id: 'leather',
      name: 'Full-Grain Tuscan Leathers',
      category: 'Leather',
      finishes: ['Saddle Cognac', 'Nappa Obsidian', 'Nubuck Taupe', 'Vintage Espresso'],
      durability: '100,000+ Martindale Cycles',
      ecoRating: 'Vegetable Tanned / Chromium-Free',
      texture:
        'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000',
      description:
        'Sourced from Northern Italian tanneries. Butter-soft tactile hand feel with protective clear wax coat that develops an exquisite natural patina over decades.',
    },
    {
      id: 'fabric',
      name: 'Contract Bouclé & Velvets',
      category: 'Fabric',
      finishes: ['Textured Alabaster Bouclé', 'Royal Italian Velvet', 'Heavy Linen Blend', 'Acoustic Wool'],
      durability: 'CRIB 5 Fire Retardant / Stain-Shield Treated',
      ecoRating: 'OEKO-TEX Standard 100 Certified',
      texture:
        'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=1000',
      description:
        'Engineered for intensive commercial applications. Inherently flame-retardant fibers with high Martindale abrasion ratings and liquid repellency.',
    },
    {
      id: 'metal',
      name: 'Precision Metals & Alloys',
      category: 'Metal',
      finishes: ['Brushed Champagne Brass', 'Gunmetal PVD Steel', 'Antique Bronze', 'Polished Chrome'],
      durability: 'PVD Vapor Deposition Corrosion Armor',
      ecoRating: '100% Recyclable Architectural Alloys',
      texture:
        'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=1000',
      description:
        'Physical Vapor Deposition (PVD) coating ensures scratch-proof, fingerprint-resistant lustrous metallic finishes that will never tarnish or oxidize.',
    },
    {
      id: 'glass',
      name: 'Artisanal Architectural Glass',
      category: 'Glass',
      finishes: ['Fluted Reeded Glass', 'Smoked Bronze Glass', 'Ultra-Clear Low Iron', 'Acid-Etched Matte'],
      durability: 'Toughened Safety Glass (EN 12150)',
      ecoRating: 'Non-Toxic Low-Emissivity Formulation',
      texture:
        'https://images.unsplash.com/photo-1509660933844-6910e1276570?auto=format&fit=crop&q=80&w=1000',
      description:
        'Tempered for maximum impact resistance. Precision CNC beveling and custom fluted textures for refined privacy and luminous light diffusion.',
    },
  ];

  const activeMat = materials[selectedMaterial];

  return (
    <section id="materials" className="section-padding bg-cream-muted border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-mono block mb-3 font-semibold">
              03 // Tactile Engineering
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal font-normal">
              Materials Library & <br />
              <span className="italic text-champagne-dark">Bespoke Finishes.</span>
            </h2>
          </div>
          <p className="text-stone-600 text-sm max-w-md font-normal leading-relaxed">
            Every material in our atelier undergoes chemical, fire, and durability validation. Order physical swatch boxes for architectural specification.
          </p>
        </div>

        {/* Material Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {materials.map((mat, idx) => (
            <button
              key={mat.id}
              onClick={() => setSelectedMaterial(idx)}
              className={`p-4 rounded-luxury border text-left transition-all duration-300 ${
                selectedMaterial === idx
                  ? 'bg-white border-champagne text-charcoal shadow-luxury-soft font-semibold'
                  : 'bg-white/60 border-stone-200/80 text-stone-600 hover:text-charcoal hover:border-stone-300 hover:bg-white shadow-sm'
              }`}
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-champagne-dark block font-semibold">
                0{idx + 1}
              </span>
              <span className="font-serif text-lg font-normal block mt-1">{mat.category}</span>
            </button>
          ))}
        </div>

        {/* Detailed Tactile Card & Spec Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 md:p-12 rounded-luxury-lg border border-stone-200/80 shadow-luxury-soft">
          {/* Material Texture Preview */}
          <div className="lg:col-span-6 relative aspect-square md:aspect-[4/3] rounded-luxury overflow-hidden border border-stone-200 shadow-sm image-container-zoom">
            <motion.img
              key={activeMat.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={activeMat.texture}
              alt={activeMat.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-charcoal text-cream font-semibold shadow-sm">
                High-Resolution Texture
              </span>
              <h3 className="font-serif text-2xl text-cream mt-2 font-medium">{activeMat.name}</h3>
            </div>
          </div>

          {/* Specs & Finishes Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-mono font-semibold">
                Specification Overview
              </span>
              <h3 className="font-serif text-3xl text-charcoal font-medium mt-1">
                {activeMat.name}
              </h3>
              <p className="text-stone-600 text-sm font-normal mt-3 leading-relaxed">
                {activeMat.description}
              </p>
            </div>

            <div className="space-y-3 py-4 border-y border-stone-200 text-xs">
              <div className="flex items-start justify-between">
                <span className="text-stone-500 font-sans">Durability Rating:</span>
                <span className="text-charcoal font-mono font-medium text-right">{activeMat.durability}</span>
              </div>
              <div className="flex items-start justify-between">
                <span className="text-stone-500 font-sans">Sustainability & Fire Compliance:</span>
                <span className="text-champagne-dark font-mono font-semibold text-right">{activeMat.ecoRating}</span>
              </div>
            </div>

            {/* Available Finishes */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500 block mb-3 font-mono font-medium">
                Standard Swatch Options:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {activeMat.finishes.map((finish, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center space-x-2 bg-stone-50 px-3 py-2 rounded-luxury-sm border border-stone-200"
                  >
                    <Check className="w-3.5 h-3.5 text-champagne-dark" />
                    <span className="text-xs text-stone-700 font-medium">{finish}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <button
              onClick={() => alert(`Physical Material Box requested for ${activeMat.name}`)}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-charcoal hover:bg-stone-800 text-cream text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-luxury font-semibold transition-colors shadow-luxury-soft"
            >
              <Layers className="w-4 h-4 text-champagne" />
              <span>Order Physical Swatch Box</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
