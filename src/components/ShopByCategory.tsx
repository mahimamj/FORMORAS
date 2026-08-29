'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { normalizeCategoryId } from '@/utils/categoryUtils';

interface CategoryBubble {
  id: string;
  name: string;
  image?: string;
  isSpecial?: boolean;
  specialText?: string;
}

const CATEGORY_BUBBLES: CategoryBubble[] = [
  {
    id: 'new-arrivals',
    name: 'Latest Arrivals',
    isSpecial: true,
    specialText: 'NEW',
  },
  {
    id: 'sofa',
    name: 'Sofas & Couches',
    image: '/extracted_product_images/sofa_002.jpg',
  },
  {
    id: 'prince',
    name: 'Prince Series',
    image: '/extracted_product_images/EXT-0040.jpg',
  },
  {
    id: 'tables',
    name: 'Coffee & Side Tables',
    image: '/extracted_product_images/EXT-0338.jpg',
  },
  {
    id: 'workstation',
    name: 'Workstation Chairs',
    image: '/extracted_product_images/workstation_001.jpg',
  },
  {
    id: 'executive',
    name: 'Executive Chairs',
    image: '/extracted_product_images/EXT-0001.jpg',
  },
  {
    id: 'dining',
    name: 'Dining Sets',
    image: '/extracted_dining_products/DIN_001_DINING_CHAIR_1_DINING_CHAIR_composite.png',
  },
  {
    id: 'highcounter',
    name: 'Bar & Counter Stools',
    image: '/highcounter/107099b4-8775-41ef-ba18-ea1ccd7287c4.png',
  },
  {
    id: 'lounge',
    name: 'Lounge Chairs',
    image: '/extracted_product_images/EXT-0120.jpg',
  },
  {
    id: 'recliner',
    name: 'Recliners',
    image: '/extracted_product_images/EXT-0200.jpg',
  },
  {
    id: 'puffy',
    name: 'Puffies & Ottomans',
    image: '/extracted_product_images/EXT-0250.jpg',
  },
  {
    id: 'cafe',
    name: 'Cafe & Bistro',
    image: '/cafe_series/bistro_wo_arms.jpg',
  },
  {
    id: 'storage',
    name: 'Storage & Credenzas',
    image: '/extracted_product_images/EXT-0300.jpg',
  },
  {
    id: 'stands',
    name: 'Podiums & Stands',
    image: '/extracted_product_images/EXT-0350.jpg',
  },
  {
    id: 'bifma',
    name: 'BIFMA Certified',
    image: '/extracted_product_images/EXT-0002.jpg',
  },
  {
    id: 'executive',
    name: 'Executive Series',
    image: '/extracted_product_images/EXT-0001.jpg',
  },
];

interface ShopByCategoryProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function ShopByCategory({ onSelectCategory }: ShopByCategoryProps) {
  const handleClick = (categoryId: string) => {
    const normalized = normalizeCategoryId(categoryId);
    window.location.href = `/category/${normalized}`;
  };

  return (
    <section className="py-16 bg-[#fcfaf7] border-t border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Urban Ladder Style Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2b2523] font-semibold tracking-tight">
              Shop by Category
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-sans mt-1">
              Explore 1,000+ commercial contract seating & furniture models by series
            </p>
          </div>

          <a
            href="#categories-catalog"
            className="hidden sm:flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold hover:text-charcoal transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Circular Avatar Grid (2 Rows x 8 Columns) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8 items-start justify-items-center">
          {CATEGORY_BUBBLES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              onClick={() => handleClick(cat.id)}
              className="flex flex-col items-center text-center group cursor-pointer w-full"
            >
              {cat.isSpecial ? (
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#4a2e23] text-white flex flex-col items-center justify-center p-3 shadow-md group-hover:scale-105 transition-transform duration-300 relative border-2 border-amber-700/30">
                  <div className="border-2 border-dashed border-amber-300/40 rounded-full p-2.5 flex flex-col items-center justify-center">
                    <Sparkles className="w-5 h-5 text-amber-300 mb-0.5" />
                    <span className="text-xs font-bold font-mono tracking-widest text-amber-200">
                      {cat.specialText}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#f6eee5] border border-stone-200/90 flex items-center justify-center p-3 shadow-sm group-hover:shadow-luxury-soft group-hover:scale-105 group-hover:border-amber-700/40 transition-all duration-300 relative overflow-hidden">
                  <img
                    src={cat.image || '/formoras-logo.png'}
                    alt={cat.name}
                    className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              <span className="text-xs md:text-[13px] text-[#3b3430] font-medium tracking-tight mt-3 line-clamp-2 leading-snug group-hover:text-amber-950 transition-colors">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
