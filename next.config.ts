import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

// Base CSP: More permissive for development to allow for 'unsafe-eval' and 'unsafe-inline'
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: seeklogo.com upload.wikimedia.org www.svgrepo.com avatars.githubusercontent.com placehold.co images.pexels.com;
    font-src 'self';
    connect-src 'self';
    object-src 'none';
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: isProd ? cspHeader.replace("'unsafe-eval'", "").replace("'unsafe-inline'", "") : cspHeader
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
];


const nextConfig: NextConfig = {
  output: 'standalone',
  
  // Experimental optimization features
  experimental: {
    inlineCss: true,
    // Tree-shakes unused component CSS/code overhead from common libraries
    optimizePackageImports: ['lucide-react', 'framer-motion', 'clsx', 'tailwind-merge'],
  },

  images: {
    // Add common device widths to generate more optimal image sizes.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Add image sizes for smaller images like icons or avatars.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable AVIF support, which is often smaller than WebP.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'seeklogo.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.svgrepo.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "images.pexels.com" },    
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;