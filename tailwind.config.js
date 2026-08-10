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
        cream: {
          DEFAULT: '#FBF9F5',
          muted: '#F4EFEA',
          dark: '#EFEAE2',
        },
        obsidian: {
          DEFAULT: '#18181B',
          light: '#27272A',
          card: '#FFFFFF',
          border: '#E5DEC9',
        },
        alabaster: {
          DEFAULT: '#18181B',
          muted: '#57534E',
          dark: '#292524',
        },
        champagne: {
          DEFAULT: '#B89768',
          gold: '#A6824F',
          dark: '#8C6D3F',
          light: '#E8DCB8',
        },
        charcoal: {
          DEFAULT: '#18181B',
          light: '#3F3F46',
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
        'luxury': '0 20px 50px rgba(30, 25, 20, 0.08)',
        'luxury-soft': '0 10px 30px rgba(30, 25, 20, 0.05)',
        'luxury-glow': '0 0 40px rgba(184, 151, 104, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'luxury-dark': 'linear-gradient(180deg, rgba(251,249,245,0.9) 0%, rgba(244,239,234,0.95) 100%)',
        'champagne-shimmer': 'linear-gradient(135deg, #B89768 0%, #D9C8B0 50%, #8C6D3F 100%)',
      }
    },
  },
  plugins: [],
}
