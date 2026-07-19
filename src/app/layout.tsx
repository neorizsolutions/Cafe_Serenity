import { Geist } from 'next/font/google';
import './globals.css';
import { constructMetadata } from '@/utils/seo';
import SkipToContent from '@/components/layout/SkipToContent';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import CookieBanner from '@/components/layout/CookieBanner';
import CheckoutProviderWrapper from '@/providers/CheckoutProviderWrapper';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata = constructMetadata();

export const viewport = {
  themeColor: '#1e6040',
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CheckoutProviderWrapper>
          {/* Accessibility Skip Link */}
          <SkipToContent />
          
          {/* Promotion Announcement */}
          <AnnouncementBar />
          
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
          <CookieBanner />
        </CheckoutProviderWrapper>
      </body>
    </html>
  );
}
