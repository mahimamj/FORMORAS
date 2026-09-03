'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Factory, Award, Sparkles, Layers, Sliders, 
  CheckCircle2, ArrowRight, FileText, 
  Settings, Truck, RefreshCw, Cpu, Ruler, HelpCircle
} from 'lucide-react';

interface InteractiveFeatureShowcaseProps {
  onOpenQuote: (config?: string) => void;
  onOpenCatalogue: () => void;
}

export default function InteractiveFeatureShowcase({ onOpenQuote, onOpenCatalogue }: InteractiveFeatureShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'factory' | 'ergonomics' | 'materials' | 'turnkey'>('factory');
  


  const featurePillars = [
    {
      id: 'factory',
      icon: Factory,
      title: 'Direct Factory Procurement',
      subtitle: '35-45% Savings Without Middlemen',
      badge: 'B2B CONTRACT GRADE',
      color: 'from-amber-700/20 to-stone-900',
      description: 'Manufactured directly in our state-of-the-art ISO 9001 certified facility. Bypass retail markups and obtain high-performance commercial seating at true factory-direct pricing.',
      highlights: [
        'Zero retail or distributor markups',
        'Bulk volume discounts up to 40% off',
        'Direct factory container shipping',
        'Comprehensive 10-Year structural warranty',
      ],
      metrics: [
        { label: 'Cost Savings', value: '35 - 45%' },
        { label: 'Quality Audit', value: '100% ISO Certified' },
        { label: 'Structural Guarantee', value: '10 Years' },
      ],
    },
    {
      id: 'ergonomics',
      icon: Cpu,
      title: 'Ergonomic & BIFMA Engineering',
      subtitle: 'Certified 100,000+ Recline Cycles',
      badge: 'BIFMA LEVEL 3 CERTIFIED',
      color: 'from-amber-600/20 to-stone-900',
      description: 'Engineered with Italian Donati synchro-tilt mechanisms, Korean KGS Class-4 gas cylinders, dynamic lumbar support, and breathable high-density mesh to prevent spinal fatigue.',
      highlights: [
        'Synchro-tilt 4:1 recline ratio with multi-lock positions',
        '3D/4D adjustable armrests (Height, Angle, Depth)',
        'Cold-cured molded polyurethane foam (65kg/m³)',
        'BIFMA X5.1 & EN 1335 European safety compliance',
      ],
      metrics: [
        { label: 'Fatigue Test', value: '100,000+ Cycles' },
        { label: 'Foam Density', value: '65 kg/m³' },
        { label: 'Safety Standard', value: 'BIFMA Level 3' },
      ],
    },
    {
      id: 'materials',
      icon: Layers,
      title: 'Bespoke Swatch & Material Atelier',
      subtitle: '120+ Commercial Fabrics & Hardwoods',
      badge: 'TACTILE ATELIER',
      color: 'from-amber-800/20 to-stone-900',
      description: 'Select from high-abrasion Martindale commercial fabrics, CRIB-5 fire-retardant velvets, full-grain Italian Tuscan leathers, and kiln-dried solid European ashwood.',
      highlights: [
        '100,000+ Martindale abrasion cycle rating',
        'CRIB-5 fire-retardant & stain-shield hydrophobic coating',
        'FSC certified solid ashwood kiln-dried to 6-8% moisture',
        'Custom powder-coating & electroplated metal finishes',
      ],
      metrics: [
        { label: 'Abrasion Rating', value: '100k+ Martindale' },
        { label: 'Finish Swatches', value: '120+ Options' },
        { label: 'Timber Origin', value: 'Solid Ashwood' },
      ],
    },
    {
      id: 'turnkey',
      icon: Ruler,
      title: 'Turnkey CAD & Fitout Services',
      subtitle: 'Architectural Support & White-Glove Setup',
      badge: 'ARCHITECTURAL PORTAL',
      color: 'from-amber-900/20 to-stone-900',
      description: 'Full architectural support including downloadable 2D/3D DWG & Revit BIM models, complimentary physical swatch box delivery, and nationwide white-glove installation.',
      highlights: [
        'Free 2D/3D DWG & Revit BIM file downloads',
        'Dedicated B2B project specifier & account manager',
        'Physical sample box delivered in 48 hours',
        'Pan-India on-site assembly & packaging recycling',
      ],
      metrics: [
        { label: 'CAD Files', value: 'Revit & DWG 3D' },
        { label: 'Swatch Delivery', value: '48 Hours' },
        { label: 'Onsite Setup', value: 'White-Glove' },
      ],
    },
  ];


  const currentPillar = featurePillars.find((p) => p.id === activeTab) || featurePillars[0];

  return (
    <section id="features" className="py-24 bg-[#FAF8F5] text-stone-900 relative overflow-hidden border-t border-stone-200/80">
      {/* Glow Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-amber-300/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-20">
        
        {/* Top 6 Quick Feature Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: '10-Year B2B Warranty', desc: 'Structural Guarantee', icon: ShieldCheck },
            { title: 'BIFMA Level 3', desc: 'Ergonomic Certified', icon: Award },
            { title: 'Factory Direct', desc: '35-45% Cost Savings', icon: Factory },
            { title: '120+ Swatches', desc: 'Custom Fabric & Timber', icon: Layers },
            { title: 'Free 3D CAD/Revit', desc: 'Architect BIM Files', icon: Ruler },
            { title: 'Pan-India Logistics', desc: 'White-Glove Setup', icon: Truck },
          ].map((item, idx) => {
            const BadgeIcon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200 hover:border-amber-400 p-4 rounded-xl flex items-center space-x-3 transition-all duration-300 group shadow-sm hover:shadow-luxury-soft"
              >
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-800 group-hover:bg-[#B89768] group-hover:text-white transition-colors">
                  <BadgeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900 group-hover:text-amber-900 transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono text-stone-500 block mt-0.5">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Interactive Feature Pillars Showcase */}
        <div className="space-y-8">
          {/* Tab Selector Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-stone-100/90 p-2 rounded-2xl border border-stone-200">
            {featurePillars.map((pillar) => {
              const TabIcon = pillar.icon;
              const isActive = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id as any)}
                  className={`flex items-center space-x-3 p-4 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#B89768] to-[#9E7C4F] text-white shadow-lg border border-amber-300'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-white border border-transparent'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'}`}>
                    <TabIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider block font-sans">
                      {pillar.title.split(' ')[0]} {pillar.title.split(' ')[1]}
                    </span>
                    <span className={`text-[10px] font-mono truncate block ${isActive ? 'text-white/90' : 'text-stone-500'}`}>
                      {pillar.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-stone-200/90 rounded-3xl p-8 lg:p-12 shadow-luxury-soft relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Descriptions & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[10px] font-mono tracking-widest font-bold uppercase">
                  <span>{currentPillar.badge}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium">
                    {currentPillar.title}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {currentPillar.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentPillar.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => onOpenQuote(`Inquiry regarding: ${currentPillar.title}`)}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#B89768] to-[#9E7C4F] hover:from-[#A6824F] hover:to-[#8C6D3F] text-white font-semibold px-6 py-3 rounded-full text-xs font-mono tracking-wider uppercase transition-all shadow-md hover:scale-105"
                  >
                    <span>Request Specification Sheet</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenCatalogue}
                    className="inline-flex items-center space-x-2 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 px-5 py-3 rounded-full text-xs font-mono tracking-wider uppercase transition-all"
                  >
                    <FileText className="w-4 h-4 text-[#B89768]" />
                    <span>Download CAD / PDF Spec</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Key Metrics Highlight Boxes */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-4 bg-stone-50 p-6 rounded-2xl border border-stone-200">
                <h4 className="font-mono text-xs text-amber-900 font-semibold uppercase tracking-wider mb-2 flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#B89768]" />
                  <span>Engineering Highlights</span>
                </h4>

                {currentPillar.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="bg-white p-4 rounded-xl border border-stone-200/90 flex items-center justify-between shadow-xs"
                  >
                    <span className="text-xs text-stone-600 font-sans">{m.label}</span>
                    <span className="font-serif text-xl sm:text-2xl text-amber-900 font-semibold">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>




      </div>
    </section>
  );
}
