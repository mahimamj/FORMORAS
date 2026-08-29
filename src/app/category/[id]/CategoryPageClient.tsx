'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Download, CheckCircle2, ShieldCheck, 
  ArrowRight, Search, Filter, Eye, ChevronRight, Sparkles, Home 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CatalogueModal from '@/components/CatalogueModal';
import QuoteModal from '@/components/QuoteModal';
import { FurnitureCategory, FURNITURE_CATEGORIES } from '@/data/categoriesData';
import { PRODUCTS_DATA, ProductItem } from '@/data/productsData';

interface CategoryPageClientProps {
  category: FurnitureCategory;
}

export default function CategoryPageClient({ category }: CategoryPageClientProps) {
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const [activeImageMap, setActiveImageMap] = useState<Record<string, string>>({});
  const [visibleCount, setVisibleCount] = useState<number>(36);

  const handleOpenQuote = (productName?: string) => {
    setQuoteProduct(productName);
    setIsQuoteOpen(true);
  };

  // Filter products for this specific category
  const categoryProducts = PRODUCTS_DATA.filter((p) => p.categoryId === category.id);
  const filteredProducts = categoryProducts.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.price.includes(searchQuery)
  );

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <main className="min-h-screen bg-cream text-charcoal selection:bg-champagne selection:text-white pt-28">
      {/* Navigation Header */}
      <Navbar
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Breadcrumbs Navigation Bar */}
      <div className="bg-[#f7f3ee] border-b border-stone-200/80 py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center space-x-2 text-xs font-mono text-stone-500">
          <a href="/" className="hover:text-amber-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <a href="/#categories-catalog" className="hover:text-amber-900 transition-colors">
            Categories
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-charcoal font-semibold">{category.title}</span>
        </div>
      </div>

      {/* Standalone Category Hero Showcase Header */}
      <section className="py-12 lg:py-16 bg-cream border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white border border-stone-200/90 rounded-luxury-lg p-8 lg:p-12 shadow-luxury-soft relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-champagne/15 text-champagne-dark border border-champagne/30 text-[11px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                    {category.badge}
                  </span>
                  <span className="text-stone-500 text-xs font-mono flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-champagne-dark" />
                    {category.pdfCatalog} ({category.totalPages} Pages)
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl text-charcoal font-medium tracking-tight">
                  {category.title}
                </h1>
                <p className="text-champagne-dark text-sm font-mono font-medium">{category.subtitle}</p>

                <p className="text-stone-600 text-xs md:text-sm font-normal leading-relaxed">
                  {category.description}
                </p>

                {/* Key Technical Features */}
                <div className="pt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-700 font-medium">
                  {category.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-champagne-dark shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PDF Action Box */}
              <div className="bg-[#fcfaf7] border border-stone-200/80 rounded-luxury p-6 flex flex-col justify-between space-y-4 text-center lg:text-left shadow-sm">
                <div>
                  <div className="text-xs font-mono text-stone-500 uppercase tracking-widest mb-1 font-medium">
                    Official Pricelist & Spec Sheet
                  </div>
                  <h3 className="font-serif text-lg text-charcoal font-medium mb-2">
                    {category.title} Catalog PDF
                  </h3>
                  <p className="text-[11px] text-stone-600 leading-relaxed mb-4">
                    Download the complete {category.totalPages}-page commercial B2B pricelist with fabric swatches & dimension blueprints.
                  </p>
                </div>

                <div className="space-y-2">
                  <a
                    href={`/A -DIVINE CHAIRS PRICELIST/${encodeURIComponent(category.pdfCatalog)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-charcoal hover:bg-stone-800 text-cream text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded-luxury flex items-center justify-center space-x-2 transition-all shadow-md"
                  >
                    <Download className="w-4 h-4 text-champagne" />
                    <span>Download PDF Specification Sheet</span>
                  </a>
                  <button
                    onClick={() => handleOpenQuote(`Bulk Category Inquiry: ${category.title}`)}
                    className="w-full bg-white hover:bg-stone-100 text-charcoal text-xs font-medium uppercase tracking-wider py-2.5 px-4 rounded-luxury border border-stone-300 transition-colors shadow-sm"
                  >
                    Request Category Price Matrix
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Catalogue Grid Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Product Filter & Search Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-champagne-dark" />
              <h2 className="font-serif text-2xl text-charcoal font-medium">
                {category.title} Catalog ({filteredProducts.length} Models)
              </h2>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={`Search in ${category.title}...`}
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
                      <div className="relative overflow-hidden rounded-lg bg-stone-50/80 p-2 border border-stone-100 aspect-square">
                        <img
                          src={activeImageMap[product.id] || product.image}
                          alt={product.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                        />

                        {/* 3-View Multi-Angle Side View Gallery Switcher */}
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
                        <h3 className="font-serif text-lg text-charcoal group-hover:text-champagne-dark font-medium transition-colors line-clamp-1">
                          {product.title}
                        </h3>
                        <div className="text-[10px] font-mono text-stone-500 uppercase tracking-wider mb-2 font-medium">
                          Code: {product.modelCode}
                        </div>

                        <div className="flex items-baseline space-x-2 mt-1">
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
                        onClick={() => handleOpenQuote(`${product.title} (${product.modelCode}) - ${product.price}`)}
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
      </section>

      {/* Explore Other Series Bar */}
      <section className="py-12 bg-[#fcfaf7] border-t border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium mb-6">
            Explore Other Contract Furniture Categories
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {FURNITURE_CATEGORIES.filter((c) => c.id !== category.id).map((otherCat) => (
              <a
                key={otherCat.id}
                href={`/category/${otherCat.id}`}
                className="bg-white hover:bg-charcoal hover:text-cream border border-stone-200/90 rounded-luxury p-3.5 text-center transition-all duration-300 group shadow-xs"
              >
                <span className="text-xs font-semibold block truncate group-hover:text-cream">
                  {otherCat.title}
                </span>
                <span className="text-[10px] text-stone-400 group-hover:text-stone-300 font-mono block mt-0.5">
                  {otherCat.badge}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <Footer />

      {/* Modals */}
      <CatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
      />
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={quoteProduct}
      />

      {/* Specs Modal */}
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

              {/* Specs Features */}
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
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={() => {
                    const prodName = `${selectedProductModal.title} (${selectedProductModal.modelCode}) - ${selectedProductModal.price}`;
                    setSelectedProductModal(null);
                    handleOpenQuote(prodName);
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
    </main>
  );
}
