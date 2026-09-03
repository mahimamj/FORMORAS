'use client';

import { useState, useEffect } from 'react';
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
  selectedCategoryId?: string;
  onSelectCategory?: (categoryId: string) => void;
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

export default function CategoryShowcase({ onOpenQuote, selectedCategoryId: externalCategoryId, onSelectCategory }: CategoryShowcaseProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(externalCategoryId || 'prince');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const [activeImageMap, setActiveImageMap] = useState<Record<string, string>>({});

  const [visibleCount, setVisibleCount] = useState<number>(36);

  useEffect(() => {
    if (externalCategoryId) {
      setSelectedCategoryId(externalCategoryId);
      setVisibleCount(36);
    }
  }, [externalCategoryId]);

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
    <section id="categories-catalog" className="py-24 bg-cream relative overflow-hidden text-charcoal border-t border-stone-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-champagne/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-champagne/30 text-champagne-dark text-xs font-mono tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-semibold">Extracted PDF Catalogue & Pricelist Index</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-charcoal tracking-tight leading-tight">
            9 Contract Seating & <span className="text-champagne-dark italic font-normal">Furniture Categories</span>
          </h2>
          <p className="text-stone-600 text-sm md:text-base font-normal leading-relaxed">
            Browse our complete 2026 series lineup extracted directly from Divine Chairs' official specification sheets and commercial pricelists.
          </p>
        </div>

        {/* Category Tab Bar (11 Categories) */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-stone-300">
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
                    if (onSelectCategory) {
                      onSelectCategory(cat.id);
                    }
                  }}
                  className={`flex items-center space-x-2.5 px-5 py-3 rounded-luxury text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-charcoal text-cream shadow-md font-semibold scale-105'
                      : 'bg-white text-stone-700 border border-stone-200 hover:border-champagne/60 hover:text-charcoal shadow-sm'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{cat.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-cream' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {PRODUCTS_DATA.filter(p => p.categoryId === cat.id).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>



        {/* Product Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-champagne-dark" />
            <h4 className="font-serif text-xl text-charcoal font-medium">
              Extracted Products ({filteredProducts.length} Models)
            </h4>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search model, code or price..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-stone-300 rounded-luxury pl-10 pr-4 py-2 text-xs text-charcoal focus:border-champagne-dark outline-none transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-luxury border border-stone-200 space-y-3 shadow-sm">
            <FileText className="w-12 h-12 text-stone-400 mx-auto" />
            <p className="text-stone-600 text-sm">No models found matching "{searchQuery}".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-champagne-dark font-mono font-semibold hover:underline"
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
                  className="bg-white border border-stone-200/80 hover:border-champagne/60 rounded-luxury p-5 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-luxury-soft"
                >
                  <div className="space-y-3">
                    <div className={`relative overflow-hidden rounded-lg bg-stone-50/80 p-2 border border-stone-100 ${
                      product.title.toLowerCase().includes('footrest') || product.title.toLowerCase().includes('set') || activeCategory.id === 'sofa'
                        ? 'aspect-[4/3]'
                        : 'aspect-square'
                    }`}>
                      <img
                        src={activeImageMap[product.id] || product.image}
                        alt={product.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                      />

                      {/* 3-View Interactive Side View Switcher */}
                      {product.images && product.images.length >= 3 ? (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-stone-300 rounded-full p-0.5 flex space-x-1 shadow-md z-10">
                          {['Perspective', 'Front', 'Side'].map((label, idx) => {
                            const imgPath = product.images![idx] || product.image;
                            const isActive = (activeImageMap[product.id] || product.image) === imgPath;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImageMap(prev => ({ ...prev, [product.id]: imgPath }));
                                }}
                                className={`px-2 py-0.5 text-[9px] font-mono rounded-full transition-colors ${
                                  isActive
                                    ? 'bg-charcoal text-cream font-bold shadow-xs'
                                    : 'text-stone-600 hover:text-charcoal'
                                }`}
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>
                      ) : product.backImage ? (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-stone-300 rounded-full p-0.5 flex space-x-1 shadow-md z-10">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageMap(prev => ({ ...prev, [product.id]: product.image }));
                            }}
                            className={`px-2 py-0.5 text-[9px] font-mono rounded-full transition-colors ${
                              (activeImageMap[product.id] || product.image) === product.image
                                ? 'bg-charcoal text-cream font-bold'
                                : 'text-stone-600 hover:text-charcoal'
                            }`}
                          >
                            Front
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageMap(prev => ({ ...prev, [product.id]: product.backImage! }));
                            }}
                            className={`px-2 py-0.5 text-[9px] font-mono rounded-full transition-colors ${
                              activeImageMap[product.id] === product.backImage
                                ? 'bg-charcoal text-cream font-bold'
                                : 'text-stone-600 hover:text-charcoal'
                            }`}
                          >
                            Back
                          </button>
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-0.5">
                        <h5 className="font-serif text-lg text-charcoal group-hover:text-champagne-dark font-medium transition-colors line-clamp-1">
                          {product.title}
                        </h5>
                      </div>
                      <div className="text-[10px] font-mono text-stone-500 uppercase tracking-wider mb-2 font-medium">
                        Code: {product.modelCode}
                      </div>

                      <button
                        onClick={() => onOpenQuote(`${product.title} (${product.modelCode})`)}
                        className="mt-1 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-mono font-semibold transition-all shadow-xs"
                      >
                        <Sparkles className="w-3 h-3 text-[#B89768]" />
                        <span>Request Price</span>
                      </button>

                      <div className="mt-3 pt-3 border-t border-stone-200 space-y-1.5 text-[11px] text-stone-600">
                        <div className="flex justify-between">
                          <span className="text-stone-400 font-mono">Warranty:</span>
                          <span className="font-medium">{product.warranty}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-400 font-mono">Lead Time:</span>
                          <span className="font-medium">{product.leadTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-200 flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedProductModal(product)}
                      className="flex-1 bg-stone-100 hover:bg-stone-200 text-charcoal text-[11px] font-medium py-2 rounded-luxury border border-stone-200 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-champagne-dark" />
                      <span>Specs</span>
                    </button>
                    <button
                      onClick={() => onOpenQuote(`${product.title} (${product.modelCode})`)}
                      className="flex-1 bg-charcoal hover:bg-stone-800 text-cream text-[11px] font-semibold uppercase tracking-wider py-2 rounded-luxury transition-all flex items-center justify-center space-x-1 shadow-sm"
                    >
                      <span>Request Price</span>
                      <ArrowRight className="w-3.5 h-3.5 text-champagne" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 36)}
                  className="px-8 py-3.5 rounded-luxury bg-white hover:bg-charcoal hover:text-cream text-charcoal text-xs font-mono uppercase tracking-wider border border-stone-300 transition-all duration-300 shadow-sm font-semibold"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md"
            onClick={() => setSelectedProductModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream border border-stone-200 rounded-luxury-lg max-w-xl w-full p-8 relative shadow-2xl space-y-6"
            >
              <div className="flex items-start justify-between border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs font-mono text-champagne-dark uppercase tracking-wider font-semibold">
                    {selectedProductModal.modelCode}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal font-medium">
                    {selectedProductModal.title}
                  </h3>
                  <button
                    onClick={() => {
                      const prodName = `${selectedProductModal.title} (${selectedProductModal.modelCode})`;
                      setSelectedProductModal(null);
                      onOpenQuote(prodName);
                    }}
                    className="mt-2 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-900 text-xs font-mono font-semibold transition-all shadow-xs"
                  >
                    <Sparkles className="w-3 h-3 text-amber-700" />
                    <span>Request Price Quote</span>
                  </button>
                </div>
                <button
                  onClick={() => setSelectedProductModal(null)}
                  className="w-8 h-8 rounded-full bg-stone-200 text-charcoal hover:bg-charcoal hover:text-cream flex items-center justify-center transition-colors font-bold text-xs"
                >
                  ✕
                </button>
              </div>

              {/* 3-View Multi-Angle Side View Gallery Showcase */}
              {selectedProductModal.images && selectedProductModal.images.length >= 3 ? (
                <div className="space-y-3 bg-white p-3.5 rounded-luxury border border-stone-200">
                  <div className="text-[11px] font-mono text-champagne-dark font-semibold uppercase tracking-wider flex items-center justify-between">
                    <span>Multi-Angle 3 Side Views</span>
                    <span className="text-[9px] text-stone-400">PDF Spec Extraction</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['3/4 Perspective', 'Front View', 'Side / Back'].map((viewLabel, idx) => (
                      <div key={idx} className="text-center space-y-1">
                        <div className="aspect-square bg-stone-50 rounded-lg p-1.5 overflow-hidden flex items-center justify-center border border-stone-100 shadow-xs">
                          <img
                            src={selectedProductModal.images![idx] || selectedProductModal.image}
                            alt={viewLabel}
                            className="h-full object-contain hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-[9px] font-mono text-stone-600 uppercase tracking-wider font-semibold block truncate">
                          {viewLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : selectedProductModal.backImage ? (
                <div className="grid grid-cols-2 gap-3 bg-white p-3 rounded-luxury border border-stone-200">
                  <div className="text-center space-y-1">
                    <div className="aspect-square bg-stone-50 rounded-lg p-2 overflow-hidden flex items-center justify-center border border-stone-100">
                      <img src={selectedProductModal.image} alt="Front View" className="h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-mono text-champagne-dark uppercase tracking-wider font-semibold">Front View</span>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="aspect-square bg-stone-50 rounded-lg p-2 overflow-hidden flex items-center justify-center border border-stone-100">
                      <img src={selectedProductModal.backImage} alt="Back View" className="h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-mono text-champagne-dark uppercase tracking-wider font-semibold">Back View</span>
                  </div>
                </div>
              ) : null}

              <div className="space-y-4 text-xs">
                <div className="bg-white rounded-luxury p-4 space-y-2 border border-stone-200">
                  <h4 className="font-mono text-champagne-dark text-[11px] uppercase tracking-wider font-semibold">
                    Engineering & BIFMA Specs
                  </h4>
                  <ul className="space-y-1.5 text-stone-700">
                    {selectedProductModal.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-champagne-dark shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 text-stone-700 font-mono text-[11px]">
                  <div className="bg-white p-3 rounded-luxury border border-stone-200">
                    <span className="text-stone-400 block">Warranty Period:</span>
                    <span className="text-charcoal font-sans font-medium">{selectedProductModal.warranty}</span>
                  </div>
                  <div className="bg-white p-3 rounded-luxury border border-stone-200">
                    <span className="text-stone-400 block">Factory Lead Time:</span>
                    <span className="text-charcoal font-sans font-medium">{selectedProductModal.leadTime}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={() => {
                    const prodName = `${selectedProductModal.title} (${selectedProductModal.modelCode})`;
                    setSelectedProductModal(null);
                    onOpenQuote(prodName);
                  }}
                  className="w-full bg-charcoal hover:bg-stone-800 text-cream text-xs font-semibold uppercase tracking-wider py-3.5 rounded-luxury transition-all text-center shadow-luxury-soft"
                >
                  Request B2B Price Quotation for {selectedProductModal.modelCode}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
