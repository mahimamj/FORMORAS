'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, Store, User, Heart, ShoppingBag, 
  ArrowUpRight, Download, ChevronRight, Sparkles 
} from 'lucide-react';

interface NavbarProps {
  onOpenCatalogue: () => void;
  onOpenQuote: (productName?: string) => void;
  onSelectCategory?: (categoryId: string) => void;
}

export default function Navbar({ onOpenCatalogue, onOpenQuote, onSelectCategory }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topLinks = [
    { name: 'Home Interiors', href: '#collections' },
    { name: 'Business Furniture', href: '#categories-catalog' },
    { name: 'Repair & Services', href: '#craftsmanship' },
  ];

  const categoryNavItems = [
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'exclusive', label: 'Deal Zone' },
    { id: 'sofa', label: 'Sofas & Recliners' },
    { id: 'prince', label: 'Prince Series' },
    { id: 'workstation', label: 'Workstations' },
    { id: 'dining', label: 'Dining & Kitchen' },
    { id: 'highcounter', label: 'Bar & Counter Stools' },
    { id: 'lounge', label: 'Lounge Chairs' },
    { id: 'tables', label: 'Tables & Stands' },
    { id: 'puffy', label: 'Ottomans' },
    { id: 'executive', label: 'Executive Series' },
  ];

  const handleCategoryClick = (catId: string) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const elem = document.getElementById('categories-catalog');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const elem = document.getElementById('categories-catalog');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200 shadow-sm transition-all duration-300">
      {/* Row 1: Top Brand, Service Links, Search Bar & Utility Icons (Urban Ladder Header Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center shrink-0">
          <img
            src="/formoras-logo.png"
            alt="FORMORAS Furniture Interiors"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Top Service Navigation Links (Desktop) */}
        <div className="hidden xl:flex items-center space-x-6 shrink-0 text-xs font-semibold text-stone-700">
          {topLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-amber-900 transition-colors py-1 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-800 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Wide Pill Search Input */}
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 1,000+ contract chairs, sofas, tables..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-100/80 hover:bg-stone-100 border border-stone-200/90 focus:border-amber-700/60 rounded-full pl-10 pr-4 py-2 text-xs text-charcoal outline-none transition-all shadow-inner"
            />
          </div>
        </form>

        {/* Header Utility Icons (Store, Account, Wishlist, Cart/Quote) */}
        <div className="flex items-center space-x-3 sm:space-x-5 text-stone-700 shrink-0">
          <button
            onClick={onOpenCatalogue}
            title="Download PDF Catalogue"
            className="hidden sm:flex items-center space-x-1.5 text-xs text-stone-700 hover:text-amber-900 transition-colors py-1.5 px-3 rounded-full hover:bg-stone-100"
          >
            <Download className="w-4 h-4 text-amber-800" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider hidden lg:inline">
              Catalog
            </span>
          </button>

          <a
            href="#projects"
            title="Store & Project Showroom"
            className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-700 hover:text-amber-900"
          >
            <Store className="w-5 h-5" />
          </a>

          <button
            onClick={() => onOpenQuote()}
            title="Account & Portal"
            className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-700 hover:text-amber-900 hidden sm:block"
          >
            <User className="w-5 h-5" />
          </button>

          <button
            onClick={() => onOpenQuote()}
            title="Wishlist"
            className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-700 hover:text-amber-900 relative hidden sm:block"
          >
            <Heart className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-700" />
          </button>

          {/* Cart / B2B Quote Action Pill */}
          <button
            onClick={() => onOpenQuote()}
            className="flex items-center space-x-2 bg-[#2c2420] hover:bg-[#3d322c] text-cream px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:scale-105"
          >
            <ShoppingBag className="w-4 h-4 text-amber-300" />
            <span className="hidden sm:inline">Quote Cart</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-charcoal p-2 hover:text-amber-900 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Row 2: Category Ribbon (Urban Ladder Signature Sub-Nav Bar) */}
      <div className="hidden lg:block border-t border-stone-200/80 bg-[#fdfbf9] py-2.5 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between space-x-4 min-w-max text-xs font-medium text-[#38302c]">
          {categoryNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleCategoryClick(item.id)}
              className="hover:text-amber-900 hover:underline transition-all whitespace-nowrap px-1 py-0.5 tracking-tight font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-stone-200 p-6 flex flex-col space-y-5 shadow-2xl z-50 max-h-[85vh] overflow-y-auto"
          >
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search models or series..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-100 border border-stone-200 rounded-full pl-10 pr-4 py-2.5 text-xs text-charcoal outline-none"
              />
            </form>

            <div className="flex flex-col space-y-2 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold mb-1">
                Categories
              </span>
              {categoryNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleCategoryClick(item.id);
                  }}
                  className="flex items-center justify-between text-xs uppercase tracking-wider text-stone-800 hover:text-amber-900 py-2 border-b border-stone-100 font-semibold text-left"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-amber-800" />
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatalogue();
                }}
                className="w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-wider text-charcoal border border-stone-300 py-3 rounded-full font-semibold"
              >
                <Download className="w-4 h-4 text-amber-800" />
                <span>Download PDF Catalogue</span>
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-wider bg-[#2c2420] text-cream font-semibold py-3 rounded-full"
              >
                <span>Get B2B Quote</span>
                <ArrowUpRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
