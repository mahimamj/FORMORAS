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
      bgColor: 'bg-gradient-to-br from-[#FFFDF9] via-[#FAF4ED] to-[#F3EBE0] text-stone-900 border border-amber-200/90',
      badgeStyle: 'bg-amber-100/90 text-[#8C6D3F] border border-amber-300',
      textColor: 'text-stone-600',
      btnColor: 'bg-gradient-to-r from-[#B89768] to-[#9E7C4F] hover:from-[#A6824F] hover:to-[#8C6D3F] text-white',
      iconColor: 'text-[#B89768]/15',
    },
    {
      id: 'warranty',
      badge: '10-YEAR WARRANTY',
      title: 'BIFMA Certified Assurance',
      subtitle: 'Commercial grade structural resilience tested for 100,000+ continuous cycles.',
      icon: ShieldCheck,
      bgColor: 'bg-gradient-to-br from-white to-[#F7F4EE] text-stone-900 border border-stone-200/90',
      badgeStyle: 'bg-stone-100 text-stone-700 border border-stone-300',
      textColor: 'text-stone-600',
      btnColor: 'bg-charcoal hover:bg-stone-800 text-cream',
      iconColor: 'text-stone-400/15',
    },
    {
      id: 'express',
      badge: 'EXPRESS DISPATCH',
      title: '3-Week Pan-India Shipping',
      subtitle: 'Direct factory container logistics with zero-defect protective crating.',
      icon: Truck,
      bgColor: 'bg-gradient-to-br from-[#FAF5EF] to-[#EFE5D9] text-stone-900 border border-amber-200/80',
      badgeStyle: 'bg-amber-100/90 text-amber-950 border border-amber-300',
      textColor: 'text-stone-600',
      btnColor: 'bg-[#8C6D3F] hover:bg-[#785C33] text-white',
      iconColor: 'text-[#8C6D3F]/15',
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
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold ${offer.badgeStyle}`}>
                      {offer.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium leading-snug text-stone-900">
                    {offer.title}
                  </h3>

                  <p className={`text-xs sm:text-sm font-sans leading-relaxed ${offer.textColor}`}>
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
                <Icon className={`absolute -bottom-4 -right-4 w-32 h-32 ${offer.iconColor} pointer-events-none group-hover:scale-110 transition-transform duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
