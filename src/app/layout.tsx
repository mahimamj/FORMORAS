import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FORMORAS Furniture Interiors | Luxury B2B Furniture & Contract Interiors',
  description:
    'World-class contract furniture manufacturing for principal architects, luxury hospitality groups, executive interiors, and global brand flagships. Timeless craftsmanship, 5-axis CNC precision, and bespoke production capacity.',
  keywords: [
    'FORMORAS furniture',
    'FORMORAS furniture interiors',
    'luxury furniture manufacturing',
    'B2B contract furniture',
    'hospitality furniture factory',
    'architectural millwork',
    'executive office furniture',
    'custom hotel furniture',
  ],
  authors: [{ name: 'FORMORAS Furniture Interiors' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-obsidian text-alabaster antialiased font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
