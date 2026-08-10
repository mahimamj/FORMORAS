import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col items-center justify-center p-6 text-center">
      <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-mono font-semibold mb-2">
        404 // Page Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl text-charcoal font-medium mb-4">
        Page Not Found
      </h1>
      <p className="text-stone-600 text-sm max-w-md mb-8">
        The requested architectural specification page or resource could not be found.
      </p>
      <Link
        href="/"
        className="bg-charcoal text-cream text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-luxury font-semibold shadow-luxury-soft hover:bg-stone-800 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
