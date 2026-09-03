'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ShopByCategory from '@/components/ShopByCategory';
import PromotionalBanners from '@/components/PromotionalBanners';
import About from '@/components/About';
import Collections from '@/components/Collections';
import CategoryShowcase from '@/components/CategoryShowcase';
import MaterialLibrary from '@/components/MaterialLibrary';
import Craftsmanship from '@/components/Craftsmanship';
import FactoryShowcase from '@/components/FactoryShowcase';
import Projects from '@/components/Projects';
import GlobalPresence from '@/components/GlobalPresence';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CatalogueModal from '@/components/CatalogueModal';
import QuoteModal from '@/components/QuoteModal';

export default function Home() {
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>(undefined);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('prince');

  const handleOpenQuote = (productName?: string) => {
    setQuoteProduct(productName);
    setIsQuoteOpen(true);
  };

  const handleSelectCategory = (catId: string) => {
    setActiveCategoryFilter(catId);
  };

  return (
    <main className="min-h-screen bg-cream text-charcoal selection:bg-champagne selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
        onSelectCategory={handleSelectCategory}
      />

      {/* Hero Section */}
      <Hero
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Shop by Category Circles Grid */}
      <ShopByCategory onSelectCategory={handleSelectCategory} />

      {/* Discounts and Offers Row */}
      <PromotionalBanners onOpenQuote={handleOpenQuote} />

      {/* Interactive 11 Category Catalogue Showcase */}
      <CategoryShowcase
        onOpenQuote={handleOpenQuote}
        selectedCategoryId={activeCategoryFilter}
        onSelectCategory={handleSelectCategory}
      />

      {/* About & Heritage */}
      <About />

      {/* Product Collections Grid */}
      <Collections onOpenQuote={() => handleOpenQuote()} />

      {/* Tactile Material Library */}
      <MaterialLibrary />

      {/* 6-Stage Craftsmanship Journey */}
      <Craftsmanship />

      {/* Featured Global B2B Projects */}
      <Projects />

      {/* Executive Endorsements & Testimonials */}
      <Testimonials />

      {/* B2B Procurement FAQ */}
      <FAQ />

      {/* Contact & Instant Project Estimator */}
      <ContactSection onOpenCatalogue={() => setIsCatalogueOpen(true)} />

      {/* Editorial Footer */}
      <Footer />

      {/* Slide-over Modals */}
      <CatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
      />
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={quoteProduct}
      />
    </main>
  );
}
