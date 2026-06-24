// File: app/layout.tsx
// FIX: This is now a clean Server Component that uses the new MainLayout client component.
// This allows the metadata export to work correctly for SEO.

import type { Metadata } from 'next';
import Script from 'next/script';
import MainLayout from './components/MainLayout'; // Import the new client layout
import './globals.css';



// The metadata export now works correctly because this is a Server Component.
export const metadata: Metadata = {
  metadataBase: new URL('https://www.majestikmagik.com'),
  title: 'Majestik Magik | Building powerful digital systems for the next generation of builders',
  description:
    'Entrepreneurship is a journey with twists, turns, and constant pivots. Our systems are built to stabilize your infrastructure, gamify your daily workflows, and reward real-world execution. Welcome to your ultimate business quest.',
  authors: [{ name: 'Majestik Magik' }],
  manifest: '/site.webmanifest',
  icons: {
    icon: '/img/majestikmagik_logo_indigo.png',
    shortcut: '/img/majestikmagik_logo_indigo.png',
    apple: '/img/majestikmagik_logo_indigo.png',
  },
  openGraph: {
    title: 'Majestik Magik | Building powerful digital systems for the next generation of builders',
    description:
      'Entrepreneurship is a journey with twists, turns, and constant pivots. Our systems are built to stabilize your infrastructure, gamify your daily workflows, and reward real-world execution. Welcome to your ultimate business quest.',
    url: 'https://www.majestikmagik.com',
    siteName: 'Majestik Magik',
    images: [
      {
        url: '/img/screenshot_mm.png',
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
    title: 'Majestik Magik | Building powerful digital systems for the next generation of builders',
    description:
      'Entrepreneurship is a journey with twists, turns, and constant pivots. Our systems are built to stabilize your infrastructure, gamify your daily workflows, and reward real-world execution. Welcome to your ultimate business quest.',
    images: ['/img/screenshot_mm.png'],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-transparent bg-linear-to-br from-slate-800 via to-slate-800 text-slate-200 overflow-x-hidden">
        {/* Use the MainLayout Client Component to wrap the children and handle interactive elements */}
        <MainLayout>
          {children}
        </MainLayout>
        {/* Global scripts can remain here */}
        <Script
          strategy="afterInteractive"
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16649126006"
        />
        <Script id="google-tag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16649126006');
          `}
        </Script>  


        {/* Facebook Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2550379602025185');
          fbq('track', 'PageView');
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

        <Script type="application/ld+json" id="structured-data">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Majestik Magik",
            "url": "https://www.majestikmagik.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.majestikmagik.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Majestik Magik",
            "image": "https://majestikmagik.com/img/og-hero.jpg",
            "@id": "https://majestikmagik.com/quick-fixes",
            "url": "https://majestikmagik.com",
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
              "Business Strategy"
            ]
          })
        }} />



      </body>
    </html>
  );
}
