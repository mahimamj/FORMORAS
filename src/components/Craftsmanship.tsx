'use client';

import { motion } from 'framer-motion';
import { PenTool, Layers, Cpu, Sparkles, ShieldCheck, Truck, ArrowDown } from 'lucide-react';

export default function Craftsmanship() {
  const steps = [
    {
      step: '01',
      title: 'Architectural 3D BIM & Shop Drawings',
      subtitle: 'Parametric modeling & Revit integration',
      description:
        'Every project starts with full technical CAD engineering, 3D parametric renderings, and BIM object generation to ensure seamless architectural integration prior to prototyping.',
      icon: PenTool,
      details: 'Tolerance: 0.1mm // File formats: IFC, DWG, REVIT',
    },
    {
      step: '02',
      title: 'Ethical Material Selection & Curing',
      subtitle: 'Hand-inspected raw timber & stone slabs',
      description:
        'Raw logs and marble blocks are selected at source. Timber is vacuum-dried in computer-controlled kilns to eliminate internal tension and guarantee structural longevity.',
      icon: Layers,
      details: 'Moisture Control: 6-8% // FSC Certified Timber',
    },
    {
      step: '03',
      title: '5-Axis Precision CNC Machining',
      subtitle: 'Robotic joinery & micron-level milling',
      description:
        'German 5-axis CNC machining centers carve organic curves, mortise-and-tenon joints, and brass inlay grooves with absolute zero tolerance variation across production batches.',
      icon: Cpu,
      details: 'Speed: 24,000 RPM // 5-Axis Milling',
    },
    {
      step: '04',
      title: 'Artisan Hand-Finishing & Lacquering',
      subtitle: 'Multi-layer hand-rubbed oil & PVD plating',
      description:
        'Master artisans apply 7 layers of natural oils, waterborne lacquers, or hand-patinated metal leaf, followed by automated robotic baking for chip-proof resilience.',
      icon: Sparkles,
      details: '7-Coat Polyurethane // Hand-Patinated Brass',
    },
    {
      step: '05',
      title: 'Contract Structural Inspection',
      subtitle: 'BIFMA & ISO 9001 quality certification',
      description:
        'Each finished piece is subjected to 100,000-cycle pneumatic load tests, seam pull analysis, and color consistency checks under 5,000K calibrated architectural lighting.',
      icon: ShieldCheck,
      details: '100k Stress Cycle // ISO 9001 Compliance',
    },
    {
      step: '06',
      title: 'White-Glove Global Freight & On-Site Assembly',
      subtitle: 'Custom timber crating & logistics team',
      description:
        'Packed in shock-proof honeycomb timber crates with humidity sensors. Delivered via dedicated maritime container or air freight with optional white-glove installation.',
      icon: Truck,
      details: 'Custom Timber Crating // Global Door-to-Site',
    },
  ];

  return (
    <section id="craftsmanship" className="section-padding bg-cream border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-mono block mb-3 font-semibold">
            04 // Manufacturing Protocol
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal font-normal">
            The Precision <br />
            <span className="italic text-champagne-dark">Craftsmanship Journey.</span>
          </h2>
          <p className="text-stone-600 text-sm md:text-base font-normal mt-4 leading-relaxed">
            From initial CAD blueprint to final container seal, explore our 6-stage industrial artisan workflow.
          </p>
        </div>

        {/* Animated Timeline */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-champagne-dark/20 via-champagne-dark/50 to-champagne-dark/20 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full lg:w-1/2 p-4 lg:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className="bg-white p-8 rounded-luxury border border-stone-200/80 hover:border-champagne/60 transition-all duration-500 shadow-luxury-soft"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-serif text-champagne-dark font-semibold">
                          {item.step}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-champagne-dark">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl text-charcoal font-medium mb-1">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-champagne-dark font-semibold uppercase tracking-widest block mb-4">
                        {item.subtitle}
                      </span>
                      <p className="text-xs md:text-sm text-stone-600 font-normal leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className="pt-4 border-t border-stone-200 text-[11px] font-mono text-stone-500 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne-dark" />
                        <span>{item.details}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node Badge for Desktop */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-champagne-dark text-champagne-dark z-10 font-serif text-sm font-bold shadow-sm">
                    {item.step}
                  </div>

                  {/* Empty Spacer Column for layout symmetry */}
                  <div className="w-full lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
