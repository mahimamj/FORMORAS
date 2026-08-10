'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Send } from 'lucide-react';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogueModal({ isOpen, onClose }: CatalogueModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [format, setFormat] = useState('PDF Direct Download & Physical Hardcover');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

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
          className="bg-cream border border-stone-200 rounded-luxury-lg max-w-lg w-full p-8 relative shadow-2xl"
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
                Catalogue Dispatch Initiated
              </h3>
              <p className="text-xs text-stone-600 font-normal leading-relaxed">
                We have sent the high-resolution 2026 Master Contract Catalogue (PDF + Revit 3D Library link) to <strong className="text-champagne-dark font-mono font-semibold">{email}</strong>.
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
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal font-medium">Request Master Catalogue</h3>
                  <span className="text-[10px] text-champagne-dark font-mono font-semibold">
                    2026 Edition // 240 Pages of Contract Furniture
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-stone-600 block mb-1 font-mono font-medium">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Arch. Sophia Loren"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-charcoal focus:border-champagne-dark outline-none font-medium"
                  />
                </div>

                <div>
                  <label className="text-stone-600 block mb-1 font-mono font-medium">Work Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="sophia@studio-milan.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-charcoal focus:border-champagne-dark outline-none font-medium"
                  />
                </div>

                <div>
                  <label className="text-stone-600 block mb-1 font-mono font-medium">Preferred Delivery Format:</label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-charcoal focus:border-champagne-dark outline-none font-medium"
                  >
                    <option>PDF Instant Download & Physical Hardcover Book</option>
                    <option>PDF Download Only (3D CAD Files Included)</option>
                    <option>Physical Linen-Bound Hardcover (DHL Express Delivery)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-charcoal hover:bg-stone-800 text-cream font-semibold text-xs uppercase tracking-[0.2em] py-3.5 rounded-luxury transition-colors shadow-luxury-soft"
              >
                <Download className="w-4 h-4 text-champagne" />
                <span>Receive Master Catalogue</span>
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
