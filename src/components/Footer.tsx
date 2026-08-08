'use client';

import { ArrowUpRight, Send, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obsidian-light text-alabaster border-t border-white/10 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border border-white/60 rounded-full flex items-center justify-center">
                <span className="font-serif italic text-white text-base font-semibold">F</span>
              </div>
              <div>
                <span className="font-serif text-2xl tracking-widest text-white font-medium block">
                  FORMORAS
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/90 block font-sans font-medium">
                  Furniture Interiors
                </span>
              </div>
            </div>
            <p className="text-xs text-alabaster/60 font-light max-w-sm leading-relaxed">
              FORMORAS Furniture Interiors is a premier contract furniture manufacturer and interior solution provider, engineering bespoke collections for hotels, corporate HQs, luxury residences, and commercial projects.
            </p>
            <div className="text-[11px] font-mono text-champagne/80">
              ISO 9001:2015 & FSC Certified Manufacturing Plant
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-champagne">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-alabaster/70 font-light">
              <li><a href="#collections" className="hover:text-champagne transition-colors">Living & Seating Systems</a></li>
              <li><a href="#collections" className="hover:text-champagne transition-colors">Presidential Bedroom Suites</a></li>
              <li><a href="#collections" className="hover:text-champagne transition-colors">Executive Boardroom Tables</a></li>
              <li><a href="#collections" className="hover:text-champagne transition-colors">Resort Teak & Outdoor</a></li>
              <li><a href="#collections" className="hover:text-champagne transition-colors">Bespoke Custom Joinery</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-champagne">
              Global Hubs
            </h4>
            <ul className="space-y-2 text-xs text-alabaster/70 font-light">
              <li>Milan Atelier (HQ)</li>
              <li>Dubai Design District</li>
              <li>New York Showroom</li>
              <li>London Mayfair</li>
              <li>Tokyo Ginza</li>
              <li>Singapore Marina</li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-champagne">
              Architectural Journal
            </h4>
            <p className="text-xs text-alabaster/60 font-light leading-relaxed">
              Subscribe to receive private B2B catalogue releases and material sample updates.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Architectural Journal!'); }} className="flex items-center space-x-2 pt-1">
              <input
                type="email"
                placeholder="Architect email..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-luxury px-3 py-2 text-xs text-alabaster focus:border-champagne outline-none"
              />
              <button
                type="submit"
                className="bg-champagne hover:bg-champagne-gold text-obsidian p-2 rounded-luxury transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-alabaster/50 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} FORMORAS Furniture Interiors. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-champagne transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-champagne transition-colors">Contract Terms</a>
            <a href="#" className="hover:text-champagne transition-colors">FSC Sustainability Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
