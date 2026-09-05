'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Eye, Download, FileText, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { COLLECTION_TO_CATEGORY_MAP } from '@/utils/categoryUtils';
import { PRODUCTS_DATA, ProductItem } from '@/data/productsData';

interface CollectionsProps {
  onOpenQuote: (productName?: string) => void;
}

export default function Collections({ onOpenQuote }: CollectionsProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Living',
    'Dining',
    'Office',
    'Outdoor',
    'Hospitality',
    'Commercial',
    'Custom Furniture',
  ];

  const handleTabClick = (catName: string) => {
    setActiveCategory(catName);
    const target = COLLECTION_TO_CATEGORY_MAP[catName];
    if (target && target.route) {
      window.location.href = target.route;
    }
  };

  const getCategoryProducts = (catName: string): { product: ProductItem; categoryName: string; route: string }[] => {
    if (catName === 'All') {
      const featuredCategoryIds = ['sofa', 'executive', 'dining', 'cafe', 'lounge', 'highcounter', 'tables'];
      return featuredCategoryIds.map((cid) => {
        const prod = PRODUCTS_DATA.find((p) => p.categoryId === cid) || PRODUCTS_DATA[0];
        const mapEntry = Object.entries(COLLECTION_TO_CATEGORY_MAP).find(([_, v]) => v.categoryId === cid);
        return {
          product: prod,
          categoryName: mapEntry ? mapEntry[0] : cid,
          route: `/category/${cid}`,
        };
      });
    }

    const targetInfo = COLLECTION_TO_CATEGORY_MAP[catName] || { categoryId: 'prince', title: 'Prince Series', route: '/category/prince' };
    const prods = PRODUCTS_DATA.filter((p) => p.categoryId === targetInfo.categoryId);
    return prods.slice(0, 6).map((p) => ({
      product: p,
      categoryName: catName,
      route: targetInfo.route,
    }));
  };

  const displayedItems = getCategoryProducts(activeCategory);
  const activeMapInfo = COLLECTION_TO_CATEGORY_MAP[activeCategory] || { categoryId: 'prince', title: 'Catalog', route: '/#categories-catalog' };

  return (
    <section id="collections" className="py-24 bg-cream border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-mono block mb-3 font-semibold">
              02 // Portfolio Collections & Categories
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal font-normal">
              Master Collections <br />
              <span className="italic text-champagne-dark">for Contract Interiors.</span>
            </h2>
          </div>

          <div className="space-y-3 max-w-md">
            <p className="text-stone-600 text-sm font-normal leading-relaxed">
              Curated contract furniture series engineered for luxury hotels, presidential executive suites, commercial fitouts, and fine dining spaces.
            </p>
            <a
              href={activeMapInfo.route}
              className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-champagne-dark hover:text-amber-900 transition-colors uppercase tracking-wider"
            >
              <span>Explore {activeMapInfo.title}</span>
              <ArrowUpRight className="w-4 h-4 text-champagne-dark" />
            </a>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-2.5 overflow-x-auto pb-6 mb-12 scrollbar-thin scrollbar-thumb-stone-300 border-b border-stone-200">
          {categories.map((cat) => {
            const target = COLLECTION_TO_CATEGORY_MAP[cat];
            const isActive = activeCategory === cat;
            return (
              <a
                key={cat}
                href={target ? target.route : '/#categories-catalog'}
                onClick={(e) => {
                  setActiveCategory(cat);
                }}
                className={`whitespace-nowrap text-xs uppercase tracking-[0.18em] px-5 py-3 rounded-full transition-all duration-300 flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-charcoal text-cream font-semibold shadow-luxury-soft scale-105'
                    : 'bg-white text-stone-700 hover:text-charcoal hover:bg-stone-100 border border-stone-200 shadow-sm'
                }`}
              >
                <span>{cat}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            );
          })}
        </div>

        {/* Category Grid Display */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedItems.map(({ product, categoryName, route }) => (
              <motion.a
                key={product.id}
                href={route}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-luxury overflow-hidden border border-stone-200/80 hover:border-champagne/60 transition-all duration-500 shadow-sm hover:shadow-luxury-soft flex flex-col cursor-pointer"
              >
                {/* Image Showcase */}
                <div className="relative overflow-hidden bg-stone-50/90 p-4 border-b border-stone-100 aspect-square flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  />
                  <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-xs text-stone-100 text-[9px] font-mono px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider flex items-center space-x-1">
                    <span>{categoryName}</span>
                    <ArrowUpRight className="w-3 h-3 text-champagne" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-champagne-dark font-semibold block font-mono">
                      {product.modelCode} — {product.warranty}
                    </span>
                    <h3 className="font-serif text-2xl text-charcoal font-medium mt-1 group-hover:text-champagne-dark transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600 font-sans">
                    <span className="font-mono text-stone-500">Lead Time: <strong className="text-charcoal font-medium">{product.leadTime}</strong></span>
                    <span className="text-champagne-dark font-semibold group-hover:underline flex items-center space-x-1">
                      <span>View Category</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
