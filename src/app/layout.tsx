//  app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import MainLayout from './components/MainLayout';
import './globals.css'; 

export const metadata: Metadata = {
  metadataBase: new URL('https://majestikmagik.dev'), 
  title: 'Majestik Magik | Powering digital systems for the next generation of builders', 
  description:
    'Our systems are built to stabilize your infrastructure, gamify your daily workflows, and reward real-world execution. Welcome to your ultimate business quest.', 
  authors: [{ name: 'Majestik Magik' }], 
  manifest: '/site.webmanifest', 
  icons: {
    icon: '/img/majestikmagik_logo_indigo-64x64.webp', 
    shortcut: '/img/majestikmagik_logo_indigo-64x64.webp', 
    apple: '/img/majestikmagik_logo_indigo-64x64.webp', 
  },
  openGraph: {
    title: 'Majestik Magik | Powering digital systems for the next generation of builders', 
    description:
      'Our systems are built to stabilize your infrastructure, gamify your daily workflows, and reward real-world execution. Welcome to your ultimate business quest.', 
    url: 'https://majestikmagik.dev', 
    siteName: 'Majestik Magik', 
    images: [
      {
        url: '/img/screenshot_mm.webp', 
        width: 1200, 
        height: 630, 
        alt: 'Majestik Magik AI website screenshot', 
      },
    ],
    locale: 'en_US', 
    type: 'website', 
  },
  twitter: {
    card: 'summary_large_image', 
    title: 'Majestik Magik | Powering digital systems for the next generation of builders', 
    description:
      'Our systems are built to stabilize your infrastructure, gamify your daily workflows, and reward real-world execution. Welcome to your ultimate business quest.', 
    images: ['/img/screenshot_mm.webp'], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><link rel="preconnect" href="/fonts/Inter-VariableFont_opsz,wght.ttf" as="font" type="font/ttf" crossOrigin="anonymous" /></head>
      <body className="bg-[#07080e] text-slate-200 overflow-x-hidden">
        <MainLayout>
          {children}
        </MainLayout>

        {/* Global Trustpilot Widget - Safe to load after page interaction */}
        <Script
          strategy="lazyOnload" 
          type="text/javascript" 
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" 
        />

        {/* Website Search Schema */}
        <Script type="application/ld+json" id="structured-data">
          {JSON.stringify({
            "@context": "https://schema.org", 
            "@type": "WebSite", 
            "name": "Majestik Magik", 
            "url": "https://majestikmagik.dev", 
            "potentialAction": { 
              "@type": "SearchAction", 
              "target": "https://majestikmagik.dev/search?q={search_term_string}", 
              "query-input": "required name=search_term_string" 
            }
          })}
        </Script>

        {/* Professional Services Local SEO Schema */}
        <Script type="application/ld+json" id="local-services-structured-data">
          {JSON.stringify({
            "@context": "https://schema.org", 
            "@type": "ProfessionalService", 
            "name": "Majestik Magik", 
            "image": "https://majestikmagik.dev/img/majestikmagik_logo_indigo-64x64.webp", 
            "@id": "https://majestikmagik.dev/", 
            "url": "https://majestikmagik.dev", 
            "telephone": "+1-804-362-7561", 
            "address": { 
              "@type": "PostalAddress", 
              "addressLocality": "Richmond", 
              "addressRegion": "VA", 
              "postalCode": "23222", 
              "addressCountry": "US" 
            },
            "areaServed": { 
              "@type": "City", 
              "name": "Richmond" 
            },
            "serviceType": [ 
              "Same-day website fixes", 
              "WordPress repair", 
              "Shopify bug fixes", 
              "Webflow updates", 
              "Website speed optimization", 
              "Technical SEO fixes", 
              "Business Operations", 
              "Business Strategy", 
              "Pivot Quest", 
              "AI Business Assistant", 
              "AI Marketing", 
              "AI Sales" 
            ]
          })}
        </Script>
      </body>
    </html>
  );
}