'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is your Minimum Order Quantity (MOQ) for commercial B2B orders?',
      a: 'Our flexible contract manufacturing structure accommodates both custom presidential suite prototypes (MOQ 1-5 pieces) and multi-tower hotel or corporate developments (500 to 5,000+ units). Volume pricing tiers apply automatically above 50 units per SKU.',
    },
    {
      q: 'Do you offer OEM / ODM custom furniture engineering from architectural sketches?',
      a: 'Yes. Over 60% of our production consists of bespoke architectural designs. Our in-house parametric design team converts concept sketches into full shop drawings, BIM objects, and physical golden samples prior to mass production.',
    },
    {
      q: 'What are the standard production lead times for international projects?',
      a: 'Standard production lead time ranges from 6 to 10 weeks depending on custom veneer curing and metal PVD plating requirements. Expedited 4-week fast-track options are available for selected contract collections.',
    },
    {
      q: 'Are 3D CAD models, Revit BIM assets, and material finish samples available?',
      a: 'Absolutey. We provide complete 3D Revit families (.rfa), AutoCAD (.dwg), and Rhino (.3dm) models for every item in our catalog. Physical material sample boxes can be dispatched via DHL Express worldwide within 48 hours.',
    },
    {
      q: 'What environmental, FSC, and fire safety certifications do your products carry?',
      a: 'All timber is 100% FSC / PEFC certified harvested from managed European forests. Foam and upholstery fabrics satisfy CRIB 5 (BS 5852), CAL 117, and EN 1021 contract fire standards. Plant facility is ISO 9001 and ISO 14001 certified.',
    },
    {
      q: 'How are international maritime freight, customs, and white-glove installation handled?',
      a: 'We offer full DDP (Delivered Duty Paid) door-to-site shipping globally. Items are packed in heavy-duty timber shockproof crates, insured for 110% CIF value, and can be installed by our mobile white-glove technician crew.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-obsidian border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne font-mono block mb-3">
            09 // Procurement Information
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-alabaster font-light">
            Frequently Asked <br />
            <span className="italic text-champagne">Contract Questions.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-luxury border transition-all duration-300 ${
                  isOpen
                    ? 'bg-obsidian-card border-champagne/60 shadow-luxury-soft'
                    : 'bg-white/5 border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4"
                >
                  <span className="font-serif text-xl text-alabaster font-light">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-champagne text-obsidian' : 'bg-white/10 text-alabaster'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-alabaster/75 font-light leading-relaxed border-t border-white/10 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
