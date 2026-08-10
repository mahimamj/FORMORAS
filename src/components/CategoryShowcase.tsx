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
  const [activeImageMap, setActiveImageMap] = useState<Record<string, string>>({});

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
            11 Contract Seating & <span className="text-champagne-dark italic font-normal">Furniture Categories</span>
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

        {/* Active Category Header Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-stone-200/90 rounded-luxury-lg p-8 lg:p-10 mb-12 shadow-luxury-soft relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-champagne/15 text-champagne-dark border border-champagne/30 text-[11px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                    {activeCategory.badge}
                  </span>
                  <span className="text-stone-500 text-xs font-mono flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-champagne-dark" />
                    {activeCategory.pdfCatalog} ({activeCategory.totalPages} Pages)
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-4xl text-charcoal font-medium">
                  {activeCategory.title}
                </h3>
                <p className="text-champagne-dark text-sm font-mono font-medium">{activeCategory.subtitle}</p>

                <p className="text-stone-600 text-xs md:text-sm font-normal leading-relaxed">
                  {activeCategory.description}
                </p>

                {/* Key Technical Features */}
                <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-700 font-medium">
                  {activeCategory.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-champagne-dark shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PDF Action Box */}
              <div className="bg-cream-muted border border-stone-200/80 rounded-luxury p-6 flex flex-col justify-between space-y-4 text-center lg:text-left">
                <div>
                  <div className="text-xs font-mono text-stone-500 uppercase tracking-widest mb-1 font-medium">
                    Official Pricelist & Spec Sheet
                  </div>
                  <h4 className="font-serif text-lg text-charcoal font-medium mb-2">
                    {activeCategory.title} Catalog PDF
                  </h4>
                  <p className="text-[11px] text-stone-600 leading-relaxed mb-4">
                    Download the complete {activeCategory.totalPages}-page commercial B2B pricelist with fabric swatches & dimension blueprints.
                  </p>
                </div>

                <div className="space-y-2">
                  <a
                    href={`/A -DIVINE CHAIRS PRICELIST/${encodeURIComponent(activeCategory.pdfCatalog)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-charcoal hover:bg-stone-800 text-cream text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded-luxury flex items-center justify-center space-x-2 transition-all shadow-md"
                  >
                    <Download className="w-4 h-4 text-champagne" />
                    <span>Download {activeCategory.pdfCatalog.split('.')[0]}</span>
                  </a>
                  <button
                    onClick={() => onOpenQuote(`Bulk B2B Inquiry: ${activeCategory.title}`)}
                    className="w-full bg-white hover:bg-stone-100 text-charcoal text-xs font-medium uppercase tracking-wider py-2.5 px-4 rounded-luxury border border-stone-300 transition-colors shadow-sm"
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
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-stone-200 px-2.5 py-1 rounded-full text-[10px] font-mono text-champagne-dark font-semibold shadow-sm">
                        {product.modelCode}
                      </div>
                      {product.bifmaCertified && (
                        <div className="absolute top-3 right-3 bg-emerald-50 backdrop-blur-md border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full text-[9px] font-mono flex items-center gap-1 font-semibold shadow-sm">
                          <ShieldCheck className="w-3 h-3" />
                          <span>BIFMA</span>
                        </div>
                      )}

                      {/* Front & Back View Switcher Toggle if Back Image exists */}
                      {product.backImage && (
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
                      )}
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="font-serif text-lg text-charcoal group-hover:text-champagne-dark font-medium transition-colors line-clamp-1">
                          {product.title}
                        </h5>
                      </div>

                      <div className="flex items-baseline space-x-2">
                        <span className="font-serif text-xl text-champagne-dark font-semibold">
                          {product.price}
                        </span>
                        {product.price !== 'Price on Request' && !product.price.toLowerCase().includes('request') && (
                          <span className="text-[10px] text-stone-400 font-mono">
                            (Ex-Warehouse)
                          </span>
                        )}
                      </div>

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
                      onClick={() => onOpenQuote(`${product.title} (${product.modelCode}) - ${product.price}`)}
                      className="flex-1 bg-charcoal hover:bg-stone-800 text-cream text-[11px] font-semibold uppercase tracking-wider py-2 rounded-luxury transition-all flex items-center justify-center space-x-1 shadow-sm"
                    >
                      <span>Quote</span>
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
                  <div className="font-serif text-2xl text-champagne-dark font-semibold mt-1">
                    {selectedProductModal.price}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProductModal(null)}
                  className="w-8 h-8 rounded-full bg-stone-200 text-charcoal hover:bg-charcoal hover:text-cream flex items-center justify-center transition-colors font-bold text-xs"
                >
                  ✕
                </button>
              </div>

              {/* Dual View Front & Back Image Showcase */}
              {selectedProductModal.backImage ? (
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
                    const prodName = `${selectedProductModal.title} (${selectedProductModal.modelCode}) - ${selectedProductModal.price}`;
                    setSelectedProductModal(null);
                    onOpenQuote(prodName);
                  }}
                  className="w-full bg-charcoal hover:bg-stone-800 text-cream text-xs font-semibold uppercase tracking-wider py-3.5 rounded-luxury transition-all text-center shadow-luxury-soft"
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
