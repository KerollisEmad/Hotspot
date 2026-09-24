import type { Metadata } from 'next';
import { Bebas_Neue, Poppins, Cairo } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const cairo = Cairo({
  weight: ['400', '600', '700'],
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hotspot - Taste Connected Successfully',
  description: 'Hotspot Digital Menu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${poppins.variable} ${cairo.variable}`}
    >
      <body className="min-h-screen">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
