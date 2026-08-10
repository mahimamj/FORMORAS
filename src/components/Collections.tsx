'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Layers, Eye, Download, FileText, CheckCircle2 } from 'lucide-react';

interface CollectionsProps {
  onOpenQuote: () => void;
}

export default function Collections({ onOpenQuote }: CollectionsProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const categories = [
    'All',
    'Living',
    'Bedroom',
    'Dining',
    'Office',
    'Outdoor',
    'Hospitality',
    'Commercial',
    'Custom Furniture',
  ];

  const products = [
    {
      id: 1,
      title: 'Aethel Lounge System',
      category: 'Living',
      subCategory: 'Modular Sofa & Armchairs',
      designer: 'Atelier Studio Milan',
      leadTime: '6-8 Weeks',
      dimensions: 'W 320cm x D 110cm x H 72cm',
      material: 'Full-Grain Nappa Leather / Smoked Oak',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
      tag: 'Hospitality Contract',
    },
    {
      id: 2,
      title: 'Vesper Executive Desk',
      category: 'Office',
      subCategory: 'Presidential Workstation',
      designer: 'Klaus & Partners',
      leadTime: '7-9 Weeks',
      dimensions: 'W 260cm x D 105cm x H 75cm',
      material: 'American Walnut & Brushed Brass',
      image:
        'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1200',
      tag: 'Executive Suites',
    },
    {
      id: 3,
      title: 'Solstice Outdoor Pavilion Lounger',
      category: 'Outdoor',
      subCategory: 'Resort Daybed & Chaise',
      designer: 'Costa Design Studio',
      leadTime: '5-7 Weeks',
      dimensions: 'W 210cm x D 160cm x H 68cm',
      material: 'Teak Frame & All-Weather Bouclé',
      image:
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1200',
      tag: 'Luxury Resorts',
    },
    {
      id: 4,
      title: 'Palais Banquette Dining Chair',
      category: 'Dining',
      subCategory: 'Fine Dining Seating',
      designer: 'Studio Poliformi',
      leadTime: '4-6 Weeks',
      dimensions: 'W 58cm x D 62cm x H 84cm',
      material: 'Italian Velvet & Smoked Bronze',
      image:
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1200',
      tag: 'Michelin Dining',
    },
    {
      id: 5,
      title: 'Monolith Calacatta Table',
      category: 'Hospitality',
      subCategory: 'Lobby & Conference Statement',
      designer: 'Marco Vanelli',
      leadTime: '8-10 Weeks',
      dimensions: 'W 360cm x D 130cm x H 76cm',
      material: 'Calacatta Marble & Gunmetal Steel',
      image:
        'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=1200',
      tag: 'Hotel Lobbies',
    },
    {
      id: 6,
      title: 'Nocturne Suite Platform Bed',
      category: 'Bedroom',
      subCategory: 'Presidential Suite Bedframe',
      designer: 'Atelier Haute',
      leadTime: '6-8 Weeks',
      dimensions: 'W 240cm x D 220cm x H 115cm',
      material: 'Nubuck Upholstery & Integrated Lighting',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
      tag: '5-Star Hospitality',
    },
    {
      id: 7,
      title: 'Aura Custom Retail Counter',
      category: 'Custom Furniture',
      subCategory: 'Bespoke Architectural Fixture',
      designer: 'Custom Engineering Team',
      leadTime: '8-12 Weeks',
      dimensions: 'Custom Specifications',
      material: 'Smoked Glass & Brass Inlays',
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
      tag: 'Luxury Retail Flagships',
    },
    {
      id: 8,
      title: 'Elysium Auditorium Modular Seating',
      category: 'Commercial',
      subCategory: 'Corporate Auditorium & Lounge',
      designer: 'B2B Commercial Division',
      leadTime: '8-10 Weeks',
      dimensions: 'High-Density Modular Config',
      material: 'Acoustic Wool Fabric & Molded Foam',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      tag: 'Corporate HQ',
    },
  ];

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="collections" className="section-padding bg-cream border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-mono block mb-3 font-semibold">
              02 // Portfolio Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal font-normal">
              Master Collections <br />
              <span className="italic text-champagne-dark">for Contract Interiors.</span>
            </h2>
          </div>

          <p className="text-stone-600 text-sm max-w-md font-normal leading-relaxed">
            Curated furniture suites built to strict contract grade standards. Custom dimensional modifications available for volume orders.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-6 mb-12 no-scrollbar border-b border-stone-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap text-xs uppercase tracking-[0.2em] px-5 py-3 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-charcoal text-cream font-semibold shadow-luxury-soft'
                  : 'bg-white text-stone-700 hover:text-charcoal hover:bg-stone-100 border border-stone-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Display */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white rounded-luxury overflow-hidden border border-stone-200/80 hover:border-champagne/60 transition-all duration-500 shadow-sm hover:shadow-luxury-soft flex flex-col"
              >
                {/* Image Showcase */}
                <div className={`relative overflow-hidden bg-stone-50 p-2 border-b border-stone-100 ${
                  product.title.toLowerCase().includes('footrest') || product.title.toLowerCase().includes('set') || product.category.toLowerCase().includes('sofa')
                    ? 'aspect-[4/3]'
                    : 'aspect-square'
                }`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Tag */}
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-champagne-dark border border-stone-200 font-semibold shadow-sm">
                    {product.tag}
                  </span>

                  {/* Quick Action Hover Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-stone-900/30 backdrop-blur-xs">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex items-center space-x-2 bg-charcoal text-cream text-xs uppercase tracking-[0.18em] px-5 py-3 rounded-luxury font-semibold shadow-luxury hover:bg-stone-800 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-champagne" />
                      <span>View Specifications</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-champagne-dark font-semibold block font-mono">
                      {product.category} — {product.subCategory}
                    </span>
                    <h3 className="font-serif text-2xl text-charcoal font-medium mt-1 group-hover:text-champagne-dark transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600 font-sans">
                    <span>Lead Time: <strong className="text-charcoal font-medium">{product.leadTime}</strong></span>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-champagne-dark font-medium hover:underline flex items-center space-x-1"
                    >
                      <span>CAD / Spec</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream border border-stone-200 rounded-luxury-lg max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="rounded-luxury overflow-hidden aspect-square border border-stone-200 bg-white p-2">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne-dark font-semibold">
                    {selectedProduct.category} // {selectedProduct.tag}
                  </span>
                  <h3 className="font-serif text-3xl text-charcoal font-medium">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-normal leading-relaxed">
                    Designed by {selectedProduct.designer}. Engineered for heavy contract usage with fire-retardant foam, reinforced hardwood inner frame, and high-abrasion upholstery.
                  </p>

                  <div className="space-y-2 py-3 border-y border-stone-200 text-xs font-sans">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Dimensions:</span>
                      <span className="text-charcoal font-mono font-medium">{selectedProduct.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Materials:</span>
                      <span className="text-charcoal font-medium">{selectedProduct.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Standard Lead Time:</span>
                      <span className="text-champagne-dark font-semibold">{selectedProduct.leadTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    <button
                      onClick={() => {
                        setSelectedProduct(null);
                        onOpenQuote();
                      }}
                      className="w-full bg-charcoal hover:bg-stone-800 text-cream font-semibold text-xs uppercase tracking-[0.2em] py-3.5 rounded-luxury transition-colors shadow-luxury-soft"
                    >
                      Include in Bulk Quote
                    </button>
                    
                    <button
                      onClick={() => alert(`BIM / 3D CAD Download requested for ${selectedProduct.title}`)}
                      className="w-full bg-white border border-stone-300 hover:border-champagne text-charcoal text-xs uppercase tracking-[0.2em] py-3.5 rounded-luxury flex items-center justify-center space-x-2 transition-colors shadow-sm font-medium"
                    >
                      <Download className="w-4 h-4 text-champagne-dark" />
                      <span>Download Revit 3D / CAD File</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
