'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Phone, Mail, Building, ArrowRight } from 'lucide-react';

export default function GlobalPresence() {
  const [selectedHub, setSelectedHub] = useState(0);

  const globalHubs = [
    {
      city: 'Milan Atelier & HQ',
      country: 'Italy',
      type: 'European Flagship & Atelier',
      address: 'Via Durini 14, 20122 Milano',
      phone: '+39 02 8901 4455',
      email: 'milan@aurahautemobilier.com',
      projectsCount: '180+ Active Contracts',
      coords: 'LAT 45.4642° N // LON 9.1900° E',
    },
    {
      city: 'Dubai Design District',
      country: 'UAE',
      type: 'Middle East Regional Hub',
      address: 'Building 7, d3, Dubai Design District',
      phone: '+971 4 458 9200',
      email: 'dubai@aurahautemobilier.com',
      projectsCount: '140+ Luxury Resorts & Towers',
      coords: 'LAT 25.2048° N // LON 55.2708° E',
    },
    {
      city: 'New York Showroom',
      country: 'United States',
      type: 'Americas Contract Division',
      address: '200 Lexington Ave, Suites 801-804, NY',
      phone: '+1 212 554 9010',
      email: 'ny@aurahautemobilier.com',
      projectsCount: '110+ Executive Projects',
      coords: 'LAT 40.7128° N // LON 74.0060° W',
    },
    {
      city: 'London Mayfair Atelier',
      country: 'United Kingdom',
      type: 'UK & Nordic Operations',
      address: '32 Dover Street, Mayfair, London W1S 4NE',
      phone: '+44 20 7946 0912',
      email: 'london@aurahautemobilier.com',
      projectsCount: '95+ Hospitality Projects',
      coords: 'LAT 51.5074° N // LON 0.1278° W',
    },
    {
      city: 'Tokyo Ginza Gallery',
      country: 'Japan',
      type: 'Asia-Pacific Headquarters',
      address: '6-10-1 Ginza, Chuo-ku, Tokyo 104-0061',
      phone: '+81 3 5537 1100',
      email: 'tokyo@aurahautemobilier.com',
      projectsCount: '75+ Luxury Flagships',
      coords: 'LAT 35.6762° N // LON 139.6503° E',
    },
    {
      city: 'Singapore Marina Hub',
      country: 'Singapore',
      type: 'SE Asia Regional Center',
      address: '1 Marina Boulevard, #28-01, Singapore',
      phone: '+65 6823 9000',
      email: 'singapore@aurahautemobilier.com',
      projectsCount: '60+ Hotel Towers',
      coords: 'LAT 1.3521° N // LON 103.8198° E',
    },
  ];

  const active = globalHubs[selectedHub];

  return (
    <section id="global" className="section-padding bg-obsidian border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne font-mono block mb-3">
              07 // Global Footprint
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-alabaster font-light">
              Worldwide Atelier & <br />
              <span className="italic text-champagne">Distribution Hubs.</span>
            </h2>
          </div>
          <p className="text-alabaster/70 text-sm max-w-md font-light leading-relaxed">
            With direct logistics routes, regional account managers, and white-glove installation teams active across North America, Europe, the Middle East, and Asia.
          </p>
        </div>

        {/* Global Map & Interactive Hub Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map Graphic Area */}
          <div className="lg:col-span-7 relative bg-obsidian-card p-8 rounded-luxury-lg border border-white/10 shadow-luxury overflow-hidden">
            {/* World Map Stylized SVG */}
            <div className="relative w-full aspect-[16/9] flex items-center justify-center">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full opacity-30 fill-alabaster stroke-white/10"
              >
                {/* Simplified Continents Silhouette */}
                <path d="M150 150 Q200 100 300 130 T400 200 T250 350 T150 150 Z" /> {/* Americas */}
                <path d="M480 120 Q600 80 650 150 T620 300 T500 250 T480 120 Z" /> {/* Europe/Africa */}
                <path d="M680 100 Q850 80 900 200 T800 380 T680 100 Z" /> {/* Asia/Aus */}
              </svg>

              {/* Pulsating Regional Hub Nodes */}
              {globalHubs.map((hub, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedHub(idx)}
                  className={`absolute group flex items-center justify-center transition-all ${
                    idx === 0 ? 'top-[30%] left-[50%]' : ''
                  } ${idx === 1 ? 'top-[42%] left-[62%]' : ''} ${
                    idx === 2 ? 'top-[32%] left-[25%]' : ''
                  } ${idx === 3 ? 'top-[26%] left-[47%]' : ''} ${
                    idx === 4 ? 'top-[36%] left-[85%]' : ''
                  } ${idx === 5 ? 'top-[52%] left-[78%]' : ''}`}
                >
                  <span className="relative flex h-5 w-5">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                        selectedHub === idx ? 'bg-champagne opacity-75' : 'bg-white/40'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-5 w-5 border-2 ${
                        selectedHub === idx
                          ? 'bg-champagne border-obsidian scale-125'
                          : 'bg-obsidian border-white/60'
                      }`}
                    />
                  </span>
                  <span className="absolute top-6 whitespace-nowrap text-[10px] font-mono tracking-wider text-alabaster bg-obsidian/90 px-2 py-0.5 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    {hub.city}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-alabaster/60 border-t border-white/10 pt-4 font-mono">
              <span>Active Regional Hubs: 6 Key Metropolises</span>
              <span className="text-champagne font-semibold">40+ Countries Export Network</span>
            </div>
          </div>

          {/* Right Selected Hub Details */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-luxury-lg border border-white/10 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-champagne">
                {active.type}
              </span>
              <h3 className="font-serif text-3xl text-alabaster font-light mt-1">
                {active.city}
              </h3>
              <span className="text-xs text-alabaster/60 font-mono block mt-1">
                {active.coords}
              </span>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <span className="text-alabaster/60 block font-mono">Address:</span>
                  <span className="text-alabaster font-sans">{active.address}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <span className="text-alabaster/60 block font-mono">Direct Contract Desk:</span>
                  <span className="text-alabaster font-sans">{active.phone}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <span className="text-alabaster/60 block font-mono">Official Communications:</span>
                  <span className="text-alabaster font-sans">{active.email}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Building className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <span className="text-alabaster/60 block font-mono">Completed Projects Volume:</span>
                  <span className="text-champagne font-semibold font-serif text-sm">{active.projectsCount}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert(`Connecting with ${active.city} office...`)}
              className="w-full flex items-center justify-center space-x-2 bg-champagne hover:bg-champagne-gold text-obsidian text-xs uppercase tracking-[0.2em] py-3.5 rounded-luxury font-semibold transition-colors shadow-luxury-glow"
            >
              <span>Schedule Regional Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
