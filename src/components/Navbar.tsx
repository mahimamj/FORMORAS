'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Download, FileText, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenCatalogue: () => void;
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenCatalogue, onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Materials', href: '#materials' },
    { name: 'Craftsmanship', href: '#craftsmanship' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-stone-200/80 py-4 shadow-luxury-soft'
          : 'bg-gradient-to-b from-cream/95 via-cream/60 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center space-x-3 shrink-0 mr-6 lg:mr-10">
          <div className="w-9 h-9 border border-charcoal/40 rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-champagne group-hover:rotate-45 bg-white/80 shadow-sm">
            <span className="font-serif italic text-charcoal text-lg font-semibold">F</span>
          </div>
          <div>
            <span className="font-serif text-xl md:text-2xl tracking-widest text-charcoal font-semibold block">
              FORMORAS
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-stone-600 block font-sans font-medium">
              Furniture Interiors
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-stone-700 hover:text-champagne-dark font-medium transition-colors duration-300 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={onOpenCatalogue}
            className="flex items-center space-x-2 text-xs uppercase tracking-[0.18em] text-charcoal hover:text-champagne-dark border border-stone-300 hover:border-champagne/60 bg-white/70 px-5 py-2.5 rounded-luxury transition-all duration-300 shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-champagne-dark" />
            <span className="font-medium">Catalogue</span>
          </button>
          
          <button
            onClick={onOpenQuote}
            className="flex items-center space-x-2 text-xs uppercase tracking-[0.18em] bg-charcoal hover:bg-stone-800 text-cream font-semibold px-5 py-2.5 rounded-luxury transition-all duration-300 shadow-luxury-soft hover:scale-[1.02]"
          >
            <span>Get Bulk Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-champagne" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-charcoal p-2 hover:text-champagne-dark transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-[72px] bg-cream/98 backdrop-blur-xl border-b border-stone-200/80 p-6 flex flex-col space-y-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-charcoal hover:text-champagne-dark py-2 border-b border-stone-200/60 font-medium"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-champagne-dark" />
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatalogue();
                }}
                className="w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.18em] text-charcoal border border-stone-300 bg-white py-3 rounded-luxury font-medium"
              >
                <Download className="w-4 h-4 text-champagne-dark" />
                <span>Request Catalogue</span>
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.18em] bg-charcoal text-cream font-semibold py-3 rounded-luxury"
              >
                <span>Get Bulk Quote</span>
                <ArrowUpRight className="w-4 h-4 text-champagne" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
