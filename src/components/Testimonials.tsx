'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Play, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        'FORMORAS Furniture Interiors executed the custom furniture package for our 340-room resort on the Amalfi Coast with absolute precision. Their engineering team maintained 0.1mm tolerances across all millwork.',
      name: 'Elena Rostova',
      role: 'Principal Partner',
      company: 'Vance & Holbrook Architects (London)',
      location: 'Milan / Zurich',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'Finding a factory capable of combining high-volume 5-axis CNC production with true hand-patinated bronze finishes is exceptionally rare. FORMORAS is our default contract manufacturing partner.',
      name: 'Marcus Vance',
      role: 'Principal Interior Architect',
      company: 'Vance & Partners Atelier',
      location: 'London / New York',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
      rating: 5,
    },
    {
      id: 3,
      quote:
        'The structural integrity and FSC certification compliance gave our corporate board total confidence for our 14-floor London headquarters project. Delivered 2 weeks ahead of schedule.',
      name: 'Sarah Chen-Siddiqui',
      role: 'Global Real Estate Director',
      company: 'Nexis Financial Group',
      location: 'London',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeTestimonial];

  return (
    <section className="section-padding bg-obsidian-light border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne font-mono block mb-3">
            08 // Client Endorsements
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-alabaster font-light">
            Endorsed by Global <br />
            <span className="italic text-champagne">Design Authorities.</span>
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="glass-panel p-8 md:p-14 rounded-luxury-lg border border-white/10 relative shadow-2xl max-w-4xl mx-auto">
          <Quote className="w-16 h-16 text-champagne/20 absolute top-8 left-8 -z-0" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col md:flex-row items-center gap-8"
            >
              {/* Client Photo */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-champagne/50 shrink-0 shadow-luxury image-container-zoom">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote & Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-champagne fill-current" />
                  ))}
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl text-alabaster font-light italic leading-relaxed mb-6">
                  "{current.quote}"
                </blockquote>

                <div>
                  <h4 className="font-serif text-xl text-champagne">{current.name}</h4>
                  <p className="text-xs text-alabaster/70 font-sans mt-0.5">
                    {current.role} — <strong className="text-alabaster font-normal">{current.company}</strong> ({current.location})
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
            <span className="text-xs font-mono text-alabaster/50">
              0{activeTestimonial + 1} / 0{testimonials.length}
            </span>

            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-alabaster hover:border-champagne hover:text-champagne transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-alabaster hover:border-champagne hover:text-champagne transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
