'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Send, CheckCircle2, Calculator } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, initialProduct = '' }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sector, setSector] = useState('Luxury Hotel & Resort');
  const [quantity, setQuantity] = useState('100 - 300 Units');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState(initialProduct ? `Inquiry for: ${initialProduct}` : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-cream border border-stone-200 rounded-luxury-lg max-w-xl w-full p-8 relative shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-stone-200 text-charcoal flex items-center justify-center hover:bg-charcoal hover:text-cream transition-colors font-bold text-xs"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-champagne-dark mx-auto" />
              <h3 className="font-serif text-3xl text-charcoal font-medium">
                Bulk RFP Received
              </h3>
              <p className="text-xs text-stone-600 font-normal leading-relaxed">
                Our Senior Commercial Estimator will prepare your itemized DDP quotation including freight and lead times, sent to <strong className="text-champagne-dark font-mono font-semibold">{email}</strong> within 12 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-charcoal text-cream text-xs uppercase tracking-[0.2em] px-8 py-3 rounded-luxury font-semibold mt-4 shadow-luxury-soft"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-stone-100 text-champagne-dark flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal font-medium">Request Bulk Contract Quote</h3>
                  <span className="text-[10px] text-champagne-dark font-mono font-semibold">
                    Itemized Pricing, Lead Times & Freight Estimates
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-stone-600 block mb-1 font-mono font-medium">Work Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="procurement@hotelgroup.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-charcoal focus:border-champagne-dark outline-none font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-stone-600 block mb-1 font-mono font-medium">Commercial Sector:</label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-charcoal focus:border-champagne-dark outline-none font-medium"
                    >
                      <option>Luxury Hotel & Resort</option>
                      <option>Executive Corporate HQ</option>
                      <option>Private Villa Estate</option>
                      <option>Fine Dining & Hospitality</option>
                      <option>Flagship Retail Boutique</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-stone-600 block mb-1 font-mono font-medium">Estimated Order Volume:</label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-charcoal focus:border-champagne-dark outline-none font-medium"
                    >
                      <option>10 - 50 Units</option>
                      <option>50 - 150 Units</option>
                      <option>150 - 500+ Units</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-stone-600 block mb-1 font-mono font-medium">RFP / Project Notes:</label>
                  <textarea
                    rows={3}
                    placeholder="Mention specific collection items, dimensions, custom finish requirements, or target delivery date..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-luxury p-3 text-charcoal focus:border-champagne-dark outline-none font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-charcoal hover:bg-stone-800 text-cream font-semibold text-xs uppercase tracking-[0.2em] py-3.5 rounded-luxury transition-colors shadow-luxury-soft"
              >
                <span>Submit RFP for Instant Processing</span>
                <ArrowUpRight className="w-4 h-4 text-champagne" />
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
