// File: app/layout.tsx
// FIX: This is now a clean Server Component that uses the new MainLayout client component.
// This allows the metadata export to work correctly for SEO.

import type { Metadata } from 'next';
import Script from 'next/script';
import MainLayout from './components/MainLayout'; // Import the new client layout
import './globals.css';

// The metadata export now works correctly because this is a Server Component.
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
      <body className="bg-[#07080e] text-slate-200 overflow-x-hidden">
        {/* Use the MainLayout Client Component to wrap the children and handle interactive elements */}
        <MainLayout>
          {children}
        </MainLayout>

        {/* Global Trustpilot Widget - Safe to load after page interaction */}
        <Script
          strategy="lazyOnload"
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        />

        {/* High-Performance Analytics Deferral Engine */}
        <Script id="deferred-analytics" strategy="afterInteractive">
          {`
            (function() {
              var analyticsLoaded = false;
              
              function loadAnalytics() {
                if (analyticsLoaded) return;
                analyticsLoaded = true;
                
                // 1. Inject Google Tag Manager / Google Ads
                var gtmScript = document.createElement('script');
                gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16649126006';
                gtmScript.async = true;
                document.head.appendChild(gtmScript);
                
                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16649126006');
                
                // 2. Inject Facebook Pixel
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '2550379602025185');
                fbq('track', 'PageView');
                
                // Clean up event listeners once loaded
                removeListeners();
              }
              
              function removeListeners() {
                window.removeEventListener('touchstart', loadAnalytics);
                window.removeEventListener('scroll', loadAnalytics);
                window.removeEventListener('mousemove', loadAnalytics);
              }
              
              // Trigger script load only when a real human interacts with the site
              window.addEventListener('touchstart', loadAnalytics, { passive: true });
              window.addEventListener('scroll', loadAnalytics, { passive: true });
              window.addEventListener('mousemove', loadAnalytics, { passive: true });
            })();
          `}
        </Script>

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img 
                height="1" 
                width="1" 
                style="display:none" 
                src="https://www.facebook.com/tr?id=2550379602025185&ev=PageView&noscript=1"
                alt="Facebook Pixel"
          />`
          }}
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