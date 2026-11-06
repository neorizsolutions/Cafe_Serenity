import { Geist } from 'next/font/google';
import './globals.css';
import './cafe-refinement.css';
import './brand-theme.css';
import './dark-theme.css';
import './editorial.css';
import { constructMetadata } from '@/utils/seo';
import SkipToContent from '@/components/layout/SkipToContent';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata = constructMetadata();

export const viewport = {
  themeColor: '#20211E',
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} dark font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Accessibility Skip Link */}
        <SkipToContent />
        
        {/* Main Navigation Header */}
        <Header />
        
        {/* Dynamic Pages Area */}
        <main id="main-content" className="flex-grow flex flex-col focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        
        {/* Base Website Footer */}
        <Footer />
        
        {/* Navigation Helpers */}
        <ScrollToTop />
      </body>
    </html>
  );
}
