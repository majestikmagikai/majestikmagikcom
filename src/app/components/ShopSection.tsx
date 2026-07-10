'use client';

import React from 'react';
import Image from 'next/image';

// --- SVG Icon Components ---
const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// --- MAJESTIK MAGIK SHOP SECTION ---
export const ShopSection = () => {
  return (
    <section
      id="shop"
      aria-labelledby="shop-heading"
      className="relative z-0 py-24 md:py-36 overflow-hidden bg-slate-950"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/videos/majestikmagik_shop_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-slate-950/70 z-10"></div>

      {/* Dynamic ambient radial core glow - Base layer (z-11) */}
      <div
        className="absolute inset-0 z-11 opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(26, 81, 244, 0.18) 0%, rgba(2, 6, 23, 0) 70%)',
        }}
      ></div>

      {/* High-end hardware processor micro-dot matrix pattern - Stacked safely on top (z-12) */}
      <div 
        className="absolute inset-0 z-12 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(241, 245, 249, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="container relative px-6 mx-auto z-20 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-left">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-slate-900/90 px-3 py-1 rounded border border-slate-800">
              Ecosystem Gear V1.0
            </span>
            
            <h2
              id="shop-heading"
              className="mb-6 text-4xl md:text-5xl lg:text-6xl text-slate-100 font-bold tracking-tight scroll-animate"
            >
              Majestik Magik <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
                Apparel Line
              </span>
            </h2>

            <p
              className="max-w-xl mb-8 text-base md:text-lg text-slate-400 font-sans leading-relaxed scroll-animate"
              style={{ transitionDelay: "0.1s" }}
            >
              Express your creativity and ambition through Majestik Magik’s official apparel line. Each piece represents innovation, empowerment, and hustle — precision engineered for creators, visionaries, and builders shaping the future of digital architecture.
            </p>

            <div className="mb-6 scroll-animate" style={{ transitionDelay: "0.3s" }}>
              <a
                href="https://majestikmagik.printful.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold uppercase tracking-wider text-xs py-3.5 px-8 rounded-lg transition-all duration-200 shadow-[0_4px_20px_rgba(26,81,244,0.3)] group"
              >
                Visit the Shop
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="hero-screenshot-frame group scroll-animate w-full max-w-xl" style={{ transitionDelay: "0.5s" }}>
              <div className="hero-screenshot-inner border border-slate-800/80 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-900/50 p-2 backdrop-blur-sm">
                <Image
                  src="/img/majestikmagik_apparel_showcase.webp"
                  alt="Majestik Magik Apparel Showcase"
                  className="w-full h-auto rounded-xl border border-slate-950 opacity-90 transition-opacity duration-300 group-hover:opacity-100 object-cover"
                  width={1200}
                  height={794}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;