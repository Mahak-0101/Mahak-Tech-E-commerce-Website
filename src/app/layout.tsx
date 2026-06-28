import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollManagerInit from '@/components/animations/ScrollManagerInit';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'MahakTech | Next-Generation Technology & AI Solutions',
  description:
    'Premium technology and AI solutions engineered with cinematic precision. Apple-grade craft, Tesla-grade narrative, Stripe-grade interaction polish.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'MahakTech',
    description: 'Next-generation technology & AI solutions',
    url: '/',
    siteName: 'MahakTech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MahakTech',
    description: 'Next-generation technology & AI solutions',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/GeneralSans-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-white text-obsidian-ink">
        {/* Initialize scroll manager globally */}
        <ScrollManagerInit />
        
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
