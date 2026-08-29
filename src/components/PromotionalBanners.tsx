'use client';

import { motion } from 'framer-motion';
import { Tag, ShieldCheck, Truck, Percent, ArrowRight } from 'lucide-react';

interface PromotionalBannersProps {
  onOpenQuote: (offerTitle?: string) => void;
}

export default function PromotionalBanners({ onOpenQuote }: PromotionalBannersProps) {
  const offers = [
    {
      id: 'bulk-discount',
      badge: 'MONSOON B2B SALE',
      title: 'Up to 40% Off Bulk Contracts',
      subtitle: 'Applicable on orders above 50+ units for corporate & hospitality fitouts.',
      icon: Percent,
      bgColor: 'bg-amber-950 text-cream',
      btnColor: 'bg-amber-400 text-charcoal hover:bg-amber-300',
    },
    {
      id: 'warranty',
      badge: '10-YEAR WARRANTY',
      title: 'BIFMA Certified Assurance',
      subtitle: 'Commercial grade structural resilience tested for 100,000+ continuous cycles.',
      icon: ShieldCheck,
      bgColor: 'bg-stone-900 text-cream',
      btnColor: 'bg-white text-charcoal hover:bg-stone-100',
    },
    {
      id: 'express',
      badge: 'EXPRESS DISPATCH',
      title: '3-Week Pan-India Shipping',
      subtitle: 'Direct factory container logistics with zero-defect protective crating.',
      icon: Truck,
      bgColor: 'bg-[#3b2d28] text-cream',
      btnColor: 'bg-amber-500 text-white hover:bg-amber-600',
    },
  ];

  return (
    <section className="py-14 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#2b2523] font-semibold tracking-tight mb-8">
          Additional Discounts and Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, idx) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className={`${offer.bgColor} p-6 sm:p-8 rounded-luxury-lg shadow-luxury-soft flex flex-col justify-between relative overflow-hidden group`}
              >
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/15 backdrop-blur-md text-amber-200 border border-white/20 font-semibold">
                      {offer.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium leading-snug">
                    {offer.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                    {offer.subtitle}
                  </p>
                </div>

                <div className="pt-6 relative z-10">
                  <button
                    onClick={() => onOpenQuote(`Offer Claim: ${offer.title}`)}
                    className={`w-full py-3 px-4 rounded-luxury text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md ${offer.btnColor}`}
                  >
                    <span>Claim Offer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Decorative Icon */}
                <Icon className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
