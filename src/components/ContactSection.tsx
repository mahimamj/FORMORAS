'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Download, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenCatalogue: () => void;
}

export default function ContactSection({ onOpenCatalogue }: ContactSectionProps) {
  const [calculatorStep, setCalculatorStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Hospitality Guestrooms');
  const [estimatedUnits, setEstimatedUnits] = useState('50 - 150 Units');
  const [deliveryCountry, setDeliveryCountry] = useState('Europe / UK');
  const [finishGrade, setFinishGrade] = useState('Ultra-Luxury (Full Grain & Marble)');
  const [calculatedQuote, setCalculatedQuote] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Hotel / Resort Development',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculatedQuote('Est. Range: $145,000 - $190,000 USD (DDP Door-to-Site Freight Included)');
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-cream border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-mono block mb-3 font-semibold">
            10 // Initiate Contract
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-charcoal font-normal leading-tight">
            Let’s Build Something <br />
            <span className="italic text-champagne-dark">Extraordinary Together.</span>
          </h2>
          <p className="text-stone-600 text-sm md:text-base font-normal mt-4 leading-relaxed">
            Contact our dedicated contract engineering desk for shop drawings, physical material box dispatches, or instant project estimates.
          </p>
        </div>

        {/* Two-Column Grid: Instant Estimator & Direct Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column: Instant Quotation Calculator Tool */}
          <div className="lg:col-span-5 bg-white p-8 rounded-luxury-lg border border-stone-200/80 shadow-luxury-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-stone-100 text-champagne-dark flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal font-medium">Instant B2B Project Estimator</h3>
                  <span className="text-[10px] text-champagne-dark font-mono font-semibold">
                    Real-time contract volume cost guide
                  </span>
                </div>
              </div>

              <form onSubmit={handleCalculate} className="space-y-4 text-xs">
                <div>
                  <label className="text-stone-600 block mb-1 font-mono font-medium">1. Project Sector:</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-charcoal focus:border-champagne-dark outline-none font-medium"
                  >
                    <option>Hospitality Guestrooms & Suites</option>
                    <option>Executive Office Floors</option>
                    <option>Luxury Villa & Penthouse Complex</option>
                    <option>Michelin Restaurant Banquettes</option>
                    <option>Retail Flagship Displays</option>
                  </select>
                </div>

                <div>
                  <label className="text-stone-600 block mb-1 font-mono font-medium">2. Volume Quantity:</label>
                  <select
                    value={estimatedUnits}
                    onChange={(e) => setEstimatedUnits(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-charcoal focus:border-champagne-dark outline-none font-medium"
                  >
                    <option>10 - 49 Units (Bespoke Prototyping)</option>
                    <option>50 - 150 Units (Mid-Volume)</option>
                    <option>150 - 500+ Units (High Volume Commercial)</option>
                  </select>
                </div>

                <div>
                  <label className="text-stone-600 block mb-1 font-mono font-medium">3. Delivery Destination:</label>
                  <select
                    value={deliveryCountry}
                    onChange={(e) => setDeliveryCountry(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-charcoal focus:border-champagne-dark outline-none font-medium"
                  >
                    <option>Europe / United Kingdom</option>
                    <option>Middle East (UAE, KSA, Qatar)</option>
                    <option>North America (USA / Canada)</option>
                    <option>Asia Pacific (Singapore, Japan, Australia)</option>
                  </select>
                </div>

                <div>
                  <label className="text-stone-600 block mb-1 font-mono font-medium">4. Material Specification Level:</label>
                  <select
                    value={finishGrade}
                    onChange={(e) => setFinishGrade(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-charcoal focus:border-champagne-dark outline-none font-medium"
                  >
                    <option>Ultra-Luxury (Full Grain & Calacatta Marble)</option>
                    <option>Contract Prime (Solid Oak & Heavy Linen)</option>
                    <option>Custom Architectural Specification</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal hover:bg-stone-800 text-cream font-semibold text-xs uppercase tracking-[0.2em] py-3.5 rounded-luxury transition-colors mt-2 shadow-luxury-soft"
                >
                  Calculate Estimated Cost
                </button>
              </form>

              {calculatedQuote && (
                <div className="mt-6 p-4 rounded-luxury bg-stone-100 border border-champagne-dark/40 text-center animate-fade-in">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-champagne-dark block font-mono font-semibold">
                    Estimated Budget Allocation
                  </span>
                  <p className="font-serif text-sm text-charcoal font-normal mt-1">
                    {calculatedQuote}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-stone-200 mt-6 flex items-center justify-between">
              <button
                onClick={onOpenCatalogue}
                className="flex items-center space-x-2 text-xs text-champagne-dark hover:underline font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Specs</span>
              </button>
              <a
                href="https://wa.me/390289014455"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-emerald-700 hover:underline font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Atelier Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Official Contract Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-luxury-lg border border-stone-200/80 shadow-luxury-soft">
            {formSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-champagne-dark mx-auto" />
                <h3 className="font-serif text-3xl text-charcoal font-medium">
                  Inquiry Received Successfully
                </h3>
                <p className="text-xs text-stone-600 font-normal max-w-md mx-auto">
                  Thank you for contacting FORMORAS Furniture Interiors. A dedicated senior project director will review your parameters and respond within 12 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-charcoal text-cream text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-luxury font-semibold mt-4 shadow-luxury-soft"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-charcoal font-medium">
                    Official Project Registration
                  </h3>
                  <p className="text-xs text-stone-500 font-sans mt-1">
                    Fill out the form below to receive architectural CAD packages and physical samples.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-stone-600 block mb-1 font-mono font-medium">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Arch. Lorenzo Rossi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-xs text-charcoal focus:border-champagne-dark outline-none font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-stone-600 block mb-1 font-mono font-medium">Corporate Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="lorenzo@architects-studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-xs text-charcoal focus:border-champagne-dark outline-none font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-stone-600 block mb-1 font-mono font-medium">Company / Studio</label>
                    <input
                      type="text"
                      placeholder="Rossi & Associates Milan"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-xs text-charcoal focus:border-champagne-dark outline-none font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-stone-600 block mb-1 font-mono font-medium">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+39 02 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-luxury px-4 py-3 text-xs text-charcoal focus:border-champagne-dark outline-none font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-stone-600 block mb-1 font-mono font-medium">Project Scope & Details</label>
                  <textarea
                    rows={4}
                    placeholder="Provide details regarding project location, estimated timeline, target quantities, and custom material preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-luxury p-4 text-xs text-charcoal focus:border-champagne-dark outline-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 bg-charcoal hover:bg-stone-800 text-cream font-semibold text-xs uppercase tracking-[0.2em] py-4 rounded-luxury transition-all shadow-luxury-soft"
                >
                  <Send className="w-4 h-4 text-champagne" />
                  <span>Submit Architectural Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Location Embedded Visual */}
        <div className="rounded-luxury-lg overflow-hidden border border-stone-200/80 h-72 relative shadow-luxury-soft">
          <iframe
            title="Milan Factory Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87932.1818783477!2d9.123512399999999!3d45.4642035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3c11d4e0e5a4087b!2sVia%20Durini%2C%20Milano%20MI%2C%20Italy!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            className="w-full h-full border-0 filter grayscale opacity-90"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-luxury border border-stone-200 text-xs shadow-luxury-soft">
            <span className="text-champagne-dark font-mono font-semibold block">Milan Headquarters & Atelier</span>
            <span className="text-stone-600 text-[11px]">Via Durini 14, 20122 Milano, Italy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
