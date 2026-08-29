'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Factory, Award, Sparkles, Layers, Sliders, 
  CheckCircle2, XCircle, ArrowRight, Calculator, FileText, 
  Settings, Truck, RefreshCw, Cpu, Ruler, HelpCircle
} from 'lucide-react';

interface InteractiveFeatureShowcaseProps {
  onOpenQuote: (config?: string) => void;
  onOpenCatalogue: () => void;
}

export default function InteractiveFeatureShowcase({ onOpenQuote, onOpenCatalogue }: InteractiveFeatureShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'factory' | 'ergonomics' | 'materials' | 'turnkey'>('factory');
  
  // Interactive Calculator State
  const [spaceType, setSpaceType] = useState('Corporate Office');
  const [unitCount, setUnitCount] = useState(50);
  const [finishTier, setFinishTier] = useState('Executive Luxury');

  // Calculate Estimate metrics
  const getDiscountPercent = (units: number) => {
    if (units >= 200) return 40;
    if (units >= 100) return 30;
    if (units >= 50) return 25;
    if (units >= 20) return 15;
    return 10;
  };

  const discount = getDiscountPercent(unitCount);
  const estLeadTime = unitCount > 100 ? '3 - 4 Weeks' : '2 - 3 Weeks';

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

  const comparisonRows = [
    {
      feature: 'Structural Guarantee',
      formoras: '10-Year Comprehensive B2B Warranty',
      generic: '1-Year Limited Warranty',
    },
    {
      feature: 'Manufacturing Standards',
      formoras: 'BIFMA X5.1 & EN 1335 Level 3 Certified',
      generic: 'Uncertified / Standard Market Assembly',
    },
    {
      feature: 'Cushioning & Foam',
      formoras: '65kg/m³ High-Resilience Molded Polyurethane',
      generic: '28kg/m³ Standard Cut Sheet Foam (Sags in 12m)',
    },
    {
      feature: 'Gas Lift Cylinder',
      formoras: 'KGS Class-4 Heavy-Duty Nitrogen Cylinder',
      generic: 'Class-2 / Standard Unbranded Cylinder',
    },
    {
      feature: 'Timber & Base Chassis',
      formoras: 'Solid European Ashwood & Die-Cast Aluminum',
      generic: 'Particle Board / Pressed Sheet Metal Base',
    },
    {
      feature: 'Fabric & Leather Compliance',
      formoras: 'CRIB-5 Fire Retardant & 100k Martindale Abrasion',
      generic: 'Low-Grade Vinyl / Standard Non-Compliant Fabric',
    },
    {
      feature: 'Pricing Model',
      formoras: 'Direct Factory Pricing (Save 35-45%)',
      generic: 'Multi-Layer Retail & Distributor Markups',
    },
  ];

  const currentPillar = featurePillars.find((p) => p.id === activeTab) || featurePillars[0];

  return (
    <section id="features" className="py-24 bg-[#0F0E0E] text-stone-100 relative overflow-hidden border-t border-stone-800">
      {/* Glow Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-amber-700/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-widest uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Furniture Excellence</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
            Designed for Durability. <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Engineered for Contracts.
            </span>
          </h2>

          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Discover why leading corporate offices, luxury hotels, and interior architects trust FORMORAS for factory-direct commercial fitouts.
          </p>
        </div>

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
                className="bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 p-4 rounded-xl flex items-center space-x-3 transition-all duration-300 group shadow-md"
              >
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-300 group-hover:bg-amber-500 group-hover:text-charcoal transition-colors">
                  <BadgeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-100 group-hover:text-amber-200 transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono text-stone-400 block mt-0.5">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-stone-900/90 p-2 rounded-2xl border border-stone-800">
            {featurePillars.map((pillar) => {
              const TabIcon = pillar.icon;
              const isActive = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id as any)}
                  className={`flex items-center space-x-3 p-4 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-700/80 to-amber-900/90 text-white shadow-xl border border-amber-500/40'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60 border border-transparent'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-stone-800 text-stone-400'}`}>
                    <TabIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider block font-sans">
                      {pillar.title.split(' ')[0]} {pillar.title.split(' ')[1]}
                    </span>
                    <span className="text-[10px] font-mono text-stone-300/80 truncate block">
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
              className="bg-gradient-to-br from-stone-900/90 via-stone-950 to-black border border-stone-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Descriptions & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono tracking-widest font-bold uppercase">
                  <span>{currentPillar.badge}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                    {currentPillar.title}
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                    {currentPillar.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentPillar.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => onOpenQuote(`Inquiry regarding: ${currentPillar.title}`)}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-charcoal font-semibold px-6 py-3 rounded-full text-xs font-mono tracking-wider uppercase transition-all shadow-lg hover:scale-105"
                  >
                    <span>Request Specification Sheet</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenCatalogue}
                    className="inline-flex items-center space-x-2 bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700 px-5 py-3 rounded-full text-xs font-mono tracking-wider uppercase transition-all"
                  >
                    <FileText className="w-4 h-4 text-amber-300" />
                    <span>Download CAD / PDF Spec</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Key Metrics Highlight Boxes */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-4 bg-stone-900/80 p-6 rounded-2xl border border-stone-800/80 backdrop-blur-md">
                <h4 className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2 flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Engineering Highlights</span>
                </h4>

                {currentPillar.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="bg-black/60 p-4 rounded-xl border border-stone-800/80 flex items-center justify-between"
                  >
                    <span className="text-xs text-stone-400 font-sans">{m.label}</span>
                    <span className="font-serif text-xl sm:text-2xl text-amber-300 font-semibold">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature Comparison Matrix Table */}
        <div className="bg-stone-900/80 border border-stone-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-6">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold block mb-1">
                Comparative Engineering Matrix
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                FORMORAS Contract Grade vs Standard Market Furniture
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-400 bg-stone-800 px-3 py-1.5 rounded-full border border-stone-700">
              Verified BIFMA & EN Specifications
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-stone-800 text-xs font-mono text-stone-400 uppercase tracking-wider">
                  <th className="py-3 px-4 w-1/3">Feature / Specification</th>
                  <th className="py-3 px-4 bg-amber-950/40 text-amber-300 font-bold border-x border-amber-500/20 w-1/3">
                    FORMORAS Contract Grade
                  </th>
                  <th className="py-3 px-4 text-stone-500 w-1/3">Standard Retail Furniture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-xs">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-800/40 transition-colors">
                    <td className="py-4 px-4 font-mono font-semibold text-stone-300">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 bg-amber-950/20 border-x border-amber-500/20 text-amber-200 font-medium">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{row.formoras}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-stone-400">
                      <div className="flex items-center space-x-2">
                        <XCircle className="w-4 h-4 text-stone-600 shrink-0" />
                        <span>{row.generic}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Instant B2B Project & Fitout Estimator */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-amber-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-stone-800/80 pb-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber-300 uppercase tracking-widest mb-1 font-semibold">
                <Calculator className="w-4 h-4" />
                <span>Interactive Quote & Fitout Estimator</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                Estimate Your Fitout Discount & Timeline
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md font-sans">
              Select your project parameters below to calculate estimated volume discounts and factory lead times instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Inputs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Space Type Selector */}
              <div>
                <label className="text-xs font-mono text-stone-300 block mb-2 font-semibold">
                  1. Select Space / Project Type:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {['Corporate Office', 'Executive Suite', 'Cafe & Bistro', 'Hotel Lounge', 'Dining & Kitchen'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSpaceType(type)}
                      className={`p-3 rounded-xl text-xs font-medium text-center border transition-all ${
                        spaceType === type
                          ? 'bg-amber-500 text-charcoal font-bold border-amber-400 shadow-md'
                          : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono text-stone-300 font-semibold">
                    2. Order Quantity: <span className="text-amber-300 font-serif text-base">{unitCount} Units</span>
                  </label>
                  <span className="text-[10px] font-mono text-stone-400">
                    Tier: {unitCount >= 100 ? 'Tier 1 Enterprise' : unitCount >= 50 ? 'Tier 2 Bulk' : 'Tier 3 Standard'}
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={300}
                  step={5}
                  value={unitCount}
                  onChange={(e) => setUnitCount(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer bg-stone-800 rounded-lg h-2"
                />
                <div className="flex justify-between text-[10px] font-mono text-stone-500 mt-1">
                  <span>5 Units</span>
                  <span>50 Units (25% OFF)</span>
                  <span>100 Units (30% OFF)</span>
                  <span>200+ Units (40% OFF)</span>
                </div>
              </div>

              {/* Finish Tier */}
              <div>
                <label className="text-xs font-mono text-stone-300 block mb-2 font-semibold">
                  3. Material & Finish Grade:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['Commercial Grade', 'Executive Luxury', 'Bespoke Handcrafted'].map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setFinishTier(tier)}
                      className={`p-3 rounded-xl text-xs font-medium text-center border transition-all ${
                        finishTier === tier
                          ? 'bg-amber-500 text-charcoal font-bold border-amber-400 shadow-md'
                          : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimation Output Card */}
            <div className="lg:col-span-5 bg-black/80 border border-amber-500/40 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl text-center lg:text-left">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-semibold block">
                  Calculated Estimate Tier
                </span>
                <h4 className="font-serif text-2xl text-white font-medium mt-1">
                  {spaceType} ({finishTier})
                </h4>
              </div>

              <div className="space-y-3 py-4 border-y border-stone-800 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Target Volume:</span>
                  <span className="font-mono text-stone-200 font-semibold">{unitCount} Furniture Units</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Direct B2B Discount:</span>
                  <span className="font-mono text-amber-300 font-bold text-sm">UP TO {discount}% OFF</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Factory Lead Time:</span>
                  <span className="font-mono text-stone-200 font-semibold">{estLeadTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Warranty Included:</span>
                  <span className="font-mono text-amber-300 font-semibold">10-Year Full B2B Warranty</span>
                </div>
              </div>

              <button
                onClick={() => onOpenQuote(`Fitout Estimate: ${spaceType} - ${unitCount} Units (${finishTier}) - ${discount}% Discount Tier`)}
                className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-charcoal font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-xl hover:scale-105"
              >
                <span>Request Quotation For This Fitout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
