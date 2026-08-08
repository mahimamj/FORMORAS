/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0B0C',
          light: '#121214',
          card: '#161618',
          border: '#242428',
        },
        alabaster: {
          DEFAULT: '#F7F5F0',
          muted: '#EFECE6',
          dark: '#E5E0D8',
        },
        champagne: {
          DEFAULT: '#C5A880',
          gold: '#D4AF37',
          dark: '#9E825B',
          light: '#E6D7C3',
        },
        charcoal: {
          DEFAULT: '#1E1E22',
          light: '#2A2A30',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'luxury': '20px',
        'luxury-lg': '24px',
        'luxury-sm': '14px',
      },
      boxShadow: {
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.4)',
        'luxury-soft': '0 10px 30px rgba(0, 0, 0, 0.25)',
        'luxury-glow': '0 0 40px rgba(197, 168, 128, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'luxury-dark': 'linear-gradient(180deg, rgba(11,11,12,0.85) 0%, rgba(11,11,12,0.95) 100%)',
        'champagne-shimmer': 'linear-gradient(135deg, #C5A880 0%, #E6D7C3 50%, #9E825B 100%)',
      }
    },
  },
  plugins: [],
}
