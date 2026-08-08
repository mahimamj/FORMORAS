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
          ? 'bg-obsidian/85 backdrop-blur-md border-b border-white/10 py-4 shadow-luxury-soft'
          : 'bg-gradient-to-b from-obsidian/90 via-obsidian/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center space-x-3">
          <div className="w-9 h-9 border border-white/60 rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:rotate-45">
            <span className="font-serif italic text-white text-lg font-semibold">F</span>
          </div>
          <div>
            <span className="font-serif text-xl md:text-2xl tracking-widest text-white font-medium block">
              FORMORAS
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/90 block font-sans font-medium">
              Furniture Interiors
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-alabaster/70 hover:text-champagne transition-colors duration-300 relative py-1 group"
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
            className="flex items-center space-x-2 text-xs uppercase tracking-[0.18em] text-alabaster/90 hover:text-champagne border border-white/15 hover:border-champagne/60 px-5 py-2.5 rounded-luxury transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5 text-champagne" />
            <span>Catalogue</span>
          </button>
          
          <button
            onClick={onOpenQuote}
            className="flex items-center space-x-2 text-xs uppercase tracking-[0.18em] bg-champagne hover:bg-champagne-gold text-obsidian font-semibold px-5 py-2.5 rounded-luxury transition-all duration-300 shadow-luxury-glow hover:shadow-luxury hover:scale-[1.02]"
          >
            <span>Get Bulk Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-alabaster p-2 hover:text-champagne transition-colors"
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
            className="lg:hidden fixed inset-x-0 top-[72px] bg-obsidian/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-alabaster/90 hover:text-champagne py-2 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-champagne/60" />
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatalogue();
                }}
                className="w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.18em] text-alabaster border border-white/20 py-3 rounded-luxury"
              >
                <Download className="w-4 h-4 text-champagne" />
                <span>Request Catalogue</span>
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.18em] bg-champagne text-obsidian font-semibold py-3 rounded-luxury"
              >
                <span>Get Bulk Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
