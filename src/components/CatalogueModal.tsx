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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-obsidian-card border border-white/15 rounded-luxury-lg max-w-lg w-full p-8 relative shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 text-alabaster flex items-center justify-center hover:bg-champagne hover:text-obsidian transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-champagne mx-auto" />
              <h3 className="font-serif text-3xl text-alabaster font-light">
                Catalogue Dispatch Initiated
              </h3>
              <p className="text-xs text-alabaster/70 font-light leading-relaxed">
                We have sent the high-resolution 2026 Master Contract Catalogue (PDF + Revit 3D Library link) to <strong className="text-champagne font-mono">{email}</strong>.
              </p>
              <button
                onClick={onClose}
                className="bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] px-8 py-3 rounded-luxury font-semibold mt-4"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-champagne/10 text-champagne flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-alabaster">Request Master Catalogue</h3>
                  <span className="text-[10px] text-champagne/80 font-mono">
                    2026 Edition // 240 Pages of Contract Furniture
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-alabaster/70 block mb-1 font-mono">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Arch. Sophia Loren"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-luxury px-4 py-3 text-alabaster focus:border-champagne outline-none"
                  />
                </div>

                <div>
                  <label className="text-alabaster/70 block mb-1 font-mono">Work Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="sophia@studio-milan.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-luxury px-4 py-3 text-alabaster focus:border-champagne outline-none"
                  />
                </div>

                <div>
                  <label className="text-alabaster/70 block mb-1 font-mono">Preferred Delivery Format:</label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="w-full bg-obsidian border border-white/15 rounded-luxury px-4 py-3 text-alabaster focus:border-champagne outline-none"
                  >
                    <option>PDF Instant Download & Physical Hardcover Book</option>
                    <option>PDF Download Only (3D CAD Files Included)</option>
                    <option>Physical Linen-Bound Hardcover (DHL Express Delivery)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-champagne hover:bg-champagne-gold text-obsidian font-semibold text-xs uppercase tracking-[0.2em] py-3.5 rounded-luxury transition-colors shadow-luxury-glow"
              >
                <Download className="w-4 h-4" />
                <span>Receive Master Catalogue</span>
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
