'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Crown, Monitor, Coffee, Utensils, Sliders, 
  Armchair, Tv, Sofa, Box, Table, Download, FileText, 
  CheckCircle2, ArrowRight, ShieldCheck, Tag, Sparkles, Filter, Search, Eye
} from 'lucide-react';
import { FURNITURE_CATEGORIES, FurnitureCategory } from '../data/categoriesData';
import { PRODUCTS_DATA, ProductItem } from '../data/productsData';

interface CategoryShowcaseProps {
  onOpenQuote: (productName?: string) => void;
}

const CATEGORY_ICONS: Record<string, any> = {
  executive: Briefcase,
  prince: Crown,
  workstation: Monitor,
  cafe: Coffee,
  dining: Utensils,
  highcounter: Sliders,
  lounge: Armchair,
  recliner: Tv,
  sofa: Sofa,
  puffy: Box,
  tables: Table,
};

export default function CategoryShowcase({ onOpenQuote }: CategoryShowcaseProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('executive');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);

  const [visibleCount, setVisibleCount] = useState<number>(36);

  const activeCategory = FURNITURE_CATEGORIES.find((c) => c.id === selectedCategoryId) || FURNITURE_CATEGORIES[0];
  const categoryIcon = CATEGORY_ICONS[activeCategory.id] || Briefcase;

  // Filter products for active category
  const categoryProducts = PRODUCTS_DATA.filter((p) => p.categoryId === activeCategory.id);
  const filteredProducts = categoryProducts.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.price.includes(searchQuery)
  );

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <section id="categories-catalog" className="py-24 bg-obsidian relative overflow-hidden text-alabaster">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-champagne/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-amber-700/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-champagne/10 border border-champagne/20 text-champagne text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Extracted PDF Catalogue & Pricelist Index</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-alabaster tracking-tight leading-tight">
            11 Contract Seating & <span className="text-champagne italic font-normal">Furniture Categories</span>
          </h2>
          <p className="text-alabaster/70 text-sm md:text-base font-light leading-relaxed">
            Browse our complete 2026 series lineup extracted directly from Divine Chairs' official specification sheets and commercial pricelists.
          </p>
        </div>

        {/* Category Tab Bar (11 Categories) */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-champagne/20">
          <div className="flex space-x-3 min-w-max">
            {FURNITURE_CATEGORIES.map((cat) => {
              const IconComp = CATEGORY_ICONS[cat.id] || Briefcase;
              const isActive = cat.id === selectedCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategoryId(cat.id);
                    setSearchQuery('');
                  }}
                  className={`flex items-center space-x-2.5 px-5 py-3 rounded-luxury text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-champagne text-obsidian shadow-lg shadow-champagne/20 font-semibold scale-105'
                      : 'bg-obsidian-card text-alabaster/70 border border-white/10 hover:border-champagne/40 hover:text-alabaster'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{cat.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-obsidian/20 text-obsidian' : 'bg-white/10 text-alabaster/60'
                  }`}>
                    {PRODUCTS_DATA.filter(p => p.categoryId === cat.id).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Header Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-obsidian-card border border-white/15 rounded-luxury-lg p-8 lg:p-10 mb-12 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-champagne/15 text-champagne border border-champagne/30 text-[11px] font-mono px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeCategory.badge}
                  </span>
                  <span className="text-alabaster/60 text-xs font-mono flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-champagne" />
                    {activeCategory.pdfCatalog} ({activeCategory.totalPages} Pages)
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-4xl text-alabaster">
                  {activeCategory.title}
                </h3>
                <p className="text-champagne text-sm font-mono">{activeCategory.subtitle}</p>

                <p className="text-alabaster/80 text-xs md:text-sm font-light leading-relaxed">
                  {activeCategory.description}
                </p>

                {/* Key Technical Features */}
                <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-alabaster/90">
                  {activeCategory.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PDF Action Box */}
              <div className="bg-white/5 border border-white/10 rounded-luxury p-6 flex flex-col justify-between space-y-4 text-center lg:text-left">
                <div>
                  <div className="text-xs font-mono text-alabaster/60 uppercase tracking-widest mb-1">
                    Official Pricelist & Spec Sheet
                  </div>
                  <h4 className="font-serif text-lg text-alabaster mb-2">
                    {activeCategory.title} Catalog PDF
                  </h4>
                  <p className="text-[11px] text-alabaster/60 leading-relaxed mb-4">
                    Download the complete {activeCategory.totalPages}-page commercial B2B pricelist with fabric swatches & dimension blueprints.
                  </p>
                </div>

                <div className="space-y-2">
                  <a
                    href={`/A -DIVINE CHAIRS PRICELIST/${encodeURIComponent(activeCategory.pdfCatalog)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-champagne hover:bg-champagne-light text-obsidian text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded-luxury flex items-center justify-center space-x-2 transition-all shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download {activeCategory.pdfCatalog.split('.')[0]}</span>
                  </a>
                  <button
                    onClick={() => onOpenQuote(`Bulk B2B Inquiry: ${activeCategory.title}`)}
                    className="w-full bg-white/10 hover:bg-white/20 text-alabaster text-xs font-medium uppercase tracking-wider py-2.5 px-4 rounded-luxury border border-white/10 transition-colors"
                  >
                    Request Category Price Matrix
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Product Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-champagne" />
            <h4 className="font-serif text-xl text-alabaster">
              Extracted Products ({filteredProducts.length} Models)
            </h4>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-alabaster/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search model, code or price..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-luxury pl-10 pr-4 py-2 text-xs text-alabaster focus:border-champagne outline-none transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-luxury border border-white/10 space-y-3">
            <FileText className="w-12 h-12 text-champagne/40 mx-auto" />
            <p className="text-alabaster/70 text-sm">No models found matching "{searchQuery}".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-champagne font-mono hover:underline"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="bg-obsidian-card border border-white/10 hover:border-champagne/40 rounded-luxury p-5 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-champagne/5"
                >
                  <div className="space-y-3">
                    <div className={`relative overflow-hidden rounded-lg bg-obsidian-light/80 p-2 border border-white/5 ${
                      product.title.toLowerCase().includes('footrest') || product.title.toLowerCase().includes('set') || activeCategory.id === 'sofa'
                        ? 'aspect-[4/3]'
                        : 'aspect-square'
                    }`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                      />
                      <div className="absolute top-3 left-3 bg-obsidian/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[10px] font-mono text-champagne">
                        {product.modelCode}
                      </div>
                      {product.bifmaCertified && (
                        <div className="absolute top-3 right-3 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded-full text-[9px] font-mono flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" />
                          <span>BIFMA</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="font-serif text-lg text-alabaster group-hover:text-champagne transition-colors line-clamp-1">
                          {product.title}
                        </h5>
                      </div>

                      <div className="flex items-baseline space-x-2">
                        <span className="font-serif text-xl text-champagne font-medium">
                          {product.price}
                        </span>
                        <span className="text-[10px] text-alabaster/40 font-mono">
                          (Ex-Warehouse)
                        </span>
                      </div>

                      <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5 text-[11px] text-alabaster/70">
                        <div className="flex justify-between">
                          <span className="text-alabaster/40 font-mono">Warranty:</span>
                          <span>{product.warranty}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-alabaster/40 font-mono">Lead Time:</span>
                          <span>{product.leadTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedProductModal(product)}
                      className="flex-1 bg-white/5 hover:bg-white/10 text-alabaster text-[11px] font-medium py-2 rounded-luxury border border-white/10 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-champagne" />
                      <span>Specs</span>
                    </button>
                    <button
                      onClick={() => onOpenQuote(`${product.title} (${product.modelCode}) - ${product.price}`)}
                      className="flex-1 bg-champagne hover:bg-champagne-light text-obsidian text-[11px] font-semibold uppercase tracking-wider py-2 rounded-luxury transition-all flex items-center justify-center space-x-1 shadow-sm"
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 36)}
                  className="px-8 py-3.5 rounded-luxury bg-champagne/10 hover:bg-champagne hover:text-obsidian text-champagne text-xs font-mono uppercase tracking-wider border border-champagne/30 transition-all duration-300 shadow-lg shadow-champagne/5"
                >
                  Load More Models ({filteredProducts.length - visibleCount} Remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Product Detail Spec Modal */}
      <AnimatePresence>
        {selectedProductModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/95 backdrop-blur-xl"
            onClick={() => setSelectedProductModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-obsidian-card border border-white/15 rounded-luxury-lg max-w-xl w-full p-8 relative shadow-2xl space-y-6"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-champagne uppercase tracking-wider">
                    {selectedProductModal.modelCode}
                  </span>
                  <h3 className="font-serif text-2xl text-alabaster">
                    {selectedProductModal.title}
                  </h3>
                  <div className="font-serif text-2xl text-champagne mt-1">
                    {selectedProductModal.price}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProductModal(null)}
                  className="w-8 h-8 rounded-full bg-white/10 text-alabaster hover:bg-champagne hover:text-obsidian flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div className="bg-white/5 rounded-luxury p-4 space-y-2">
                  <h4 className="font-mono text-champagne text-[11px] uppercase tracking-wider">
                    Engineering & BIFMA Specs
                  </h4>
                  <ul className="space-y-1.5 text-alabaster/80">
                    {selectedProductModal.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-champagne shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 text-alabaster/70 font-mono text-[11px]">
                  <div className="bg-white/5 p-3 rounded-luxury border border-white/5">
                    <span className="text-alabaster/40 block">Warranty Period:</span>
                    <span className="text-alabaster font-sans">{selectedProductModal.warranty}</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-luxury border border-white/5">
                    <span className="text-alabaster/40 block">Factory Lead Time:</span>
                    <span className="text-alabaster font-sans">{selectedProductModal.leadTime}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={() => {
                    const prodName = `${selectedProductModal.title} (${selectedProductModal.modelCode}) - ${selectedProductModal.price}`;
                    setSelectedProductModal(null);
                    onOpenQuote(prodName);
                  }}
                  className="w-full bg-champagne hover:bg-champagne-light text-obsidian text-xs font-semibold uppercase tracking-wider py-3.5 rounded-luxury transition-all text-center"
                >
                  Request B2B Quotation for {selectedProductModal.modelCode}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
