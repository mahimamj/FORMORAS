'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PenTool,
  Layers,
  Cpu,
  Sparkles,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Compass,
  Zap,
} from 'lucide-react';

interface StageStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  details: string;
  specs: { label: string; value: string }[];
  tagline: string;
}

export default function Craftsmanship() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const steps: StageStep[] = [
    {
      step: '01',
      title: 'Architectural 3D BIM & Shop Drawings',
      subtitle: 'Parametric modeling & Revit integration',
      description:
        'Every contract project commences with exhaustive 3D parametric CAD modeling, finite element stress analysis, and native Revit BIM family generation to ensure millimeter-perfect architectural alignment before physical prototyping.',
      icon: PenTool,
      details: 'Tolerance: 0.1mm // File Formats: IFC, DWG, REVIT 3D',
      tagline: 'Zero-Margin Structural Engineering',
      specs: [
        { label: 'Precision Tolerance', value: '±0.1 mm' },
        { label: 'BIM Integration', value: 'Revit / IFC 2026' },
        { label: 'Prototyping Lead', value: '48 Hours' },
      ],
    },
    {
      step: '02',
      title: 'Ethical Material Selection & Vacuum Curing',
      subtitle: 'Hand-inspected raw timber & stone blocks',
      description:
        'FSC-certified hardwoods and premium marble blocks are selected at source. Timber is vacuum-dried in computer-monitored kilns to 6-8% equilibrium moisture content, eliminating internal stress and preventing warp under extreme climatic shifts.',
      icon: Layers,
      details: 'Moisture Control: 6-8% // 100% FSC Certified Hardwood',
      tagline: 'Kiln-Stabilized Natural Hardwoods',
      specs: [
        { label: 'Moisture Range', value: '6% - 8% EMC' },
        { label: 'Sustainability', value: 'FSC® Chain-of-Custody' },
        { label: 'Inspection', value: 'Density & Grain Scan' },
      ],
    },
    {
      step: '03',
      title: '5-Axis Precision CNC Machining',
      subtitle: 'Robotic joinery & micron-level milling',
      description:
        'State-of-the-art German 5-axis CNC machining centers sculpt complex organic contours, blind mortise-and-tenon joints, and micro-channeled brass inlays with absolute batch repeatability across 10,000+ unit production runs.',
      icon: Cpu,
      details: 'Speed: 24,000 RPM // 5-Axis Simultaneous Milling',
      tagline: 'Robotic Repeatability at Volume',
      specs: [
        { label: 'Milling Speed', value: '24,000 RPM' },
        { label: 'Axis Control', value: '5-Axis Simultaneous' },
        { label: 'Joint Rigidity', value: 'Interlocking Mortise' },
      ],
    },
    {
      step: '04',
      title: 'Artisan Hand-Finishing & PVD Coating',
      subtitle: 'Multi-layer hand-rubbed oil & robotic baking',
      description:
        'Master craftsmen apply 7 coats of organic oils, non-toxic waterborne lacquers, or hand-patinated metal leafing. Electrostatic PVD vacuum titanium coating ensures scratch-proof, chemical-resistant commercial resilience.',
      icon: Sparkles,
      details: '7-Coat Polyurethane // Physical Vapor Deposition (PVD)',
      tagline: '7-Layer Micro-Protective Seal',
      specs: [
        { label: 'Finish Coats', value: '7-Stage Hand Rubbed' },
        { label: 'Chemical Resistance', value: 'ASTM D1308 Passed' },
        { label: 'Metal Plating', value: 'PVD Titanium Plating' },
      ],
    },
    {
      step: '05',
      title: 'Contract Structural Inspection & BIFMA QA',
      subtitle: '100,000-cycle stress testing & spectral illumination',
      description:
        'Each production batch undergoes 100,000-cycle pneumatic drop and load tests, seam tensile pull checks, and 5,000K daylight-calibrated color matching to guarantee compliance with hospitality durability codes.',
      icon: ShieldCheck,
      details: '100k Stress Cycle // ISO 9001 & BIFMA X5.1 Certified',
      tagline: 'Commercial Grade BIFMA Level 3 Certified',
      specs: [
        { label: 'Pneumatic Cycles', value: '100,000+ Cycles' },
        { label: 'Quality Standard', value: 'BIFMA Level 3 / ISO 9001' },
        { label: 'Color Matching', value: '5000K Spectrometer' },
      ],
    },
    {
      step: '06',
      title: 'White-Glove Global Freight & On-Site Assembly',
      subtitle: 'Shock-proof honeycomb crating & container seal',
      description:
        'Products are enclosed in custom-molded shock-absorbing honeycomb timber crates fitted with tilt and humidity sensors. Dispatched via sea container or air charter with optional turnkey site unpacking and assembly supervision.',
      icon: Truck,
      details: 'Custom Timber Crating // Global Door-to-Site Delivery',
      tagline: 'Humidity-Monitored Global Transit',
      specs: [
        { label: 'Packaging', value: 'Reinforced Timber Crate' },
        { label: 'Sensor Monitoring', value: 'Tilt & Shock Sensors' },
        { label: 'Site Support', value: 'Global Assembly Supervisor' },
      ],
    },
  ];

  return (
    <section
      id="craftsmanship"
      className="section-padding bg-cream border-t border-stone-200/80 relative overflow-hidden"
    >
      {/* Background Decorative Accent Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-champagne-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.28em] text-champagne-dark font-mono font-semibold px-4 py-1.5 rounded-full bg-champagne/10 border border-champagne/20 mb-4"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>04 // Manufacturing Protocol</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal font-normal leading-tight"
          >
            The Precision <br />
            <span className="italic text-champagne-dark">Craftsmanship Journey.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-sm md:text-base font-normal mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            From initial CAD blueprint to final container seal, explore our 6-stage industrial artisan workflow engineered for global contract projects.
          </motion.p>
        </div>

        {/* Full 6-Stage Timeline Display */}
        <div className="relative">
          {/* Vertical Center Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-champagne-dark/20 via-champagne-dark/60 to-champagne-dark/20 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;
              const isSelected = activeStage === idx;

              return (
                <div
                  key={item.step}
                  className={`flex flex-col lg:flex-row items-center cursor-pointer ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  onClick={() => setActiveStage(idx)}
                >
                  {/* Content Box */}
                  <div className="w-full lg:w-1/2 p-2 lg:p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.08 }}
                      className={`p-6 sm:p-8 rounded-luxury border transition-all duration-500 shadow-luxury-soft ${
                        isSelected
                          ? 'bg-white border-champagne shadow-luxury-glow ring-1 ring-champagne/30'
                          : 'bg-white/80 hover:bg-white border-stone-200/80 hover:border-champagne/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-serif text-champagne-dark font-semibold">
                          Stage {item.step}
                        </span>
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-charcoal text-champagne' : 'bg-stone-100 text-stone-600'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium mb-1">
                        {item.title}
                      </h3>

                      <span className="text-[11px] font-mono text-champagne-dark font-semibold uppercase tracking-widest block mb-3">
                        {item.subtitle}
                      </span>

                      <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed mb-5">
                        {item.description}
                      </p>

                      <div className="pt-3 border-t border-stone-200/80 text-[11px] font-mono text-stone-500 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne-dark" />
                        <span>{item.details}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node Badge for Desktop */}
                  <div
                    className={`hidden lg:flex items-center justify-center w-12 h-12 rounded-full border-2 z-10 font-serif text-sm font-bold shadow-md transition-all duration-300 ${
                      isSelected
                        ? 'bg-charcoal border-champagne text-champagne scale-110'
                        : 'bg-white border-champagne-dark/40 text-charcoal hover:border-champagne'
                    }`}
                  >
                    {item.step}
                  </div>

                  {/* Empty Spacer Column for symmetry */}
                  <div className="w-full lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality Guarantee Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-charcoal text-cream p-8 md:p-12 rounded-luxury-lg relative overflow-hidden border border-stone-800 shadow-luxury"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-champagne-shimmer opacity-10 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-champagne text-xs uppercase tracking-[0.2em] font-mono font-semibold">
                <CheckCircle2 className="w-4 h-4 text-champagne" />
                <span>Zero-Defect Contract Guarantee</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal">
                100% Quality Inspected & Crated Prior to Export
              </h3>
              <p className="text-stone-400 text-xs md:text-sm font-light max-w-xl">
                Every unit undergoes full assembly trial fitting, 5000K daylight color inspection, and humidity-sealed crating before dispatch.
              </p>
            </div>

            <a
              href="#quote"
              className="whitespace-nowrap bg-champagne hover:bg-champagne-gold text-charcoal text-xs uppercase tracking-[0.2em] px-7 py-4 rounded-luxury font-semibold transition-all duration-300 shadow-luxury-soft hover:shadow-luxury-glow"
            >
              Request Quality Protocols
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
