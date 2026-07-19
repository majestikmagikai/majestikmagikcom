'use client';

import React, { useState, useEffect, useRef } from 'react';

interface PricingPlan {
  name: string;
  tagline?: string;
  description: string;
  bestFor: string;
  features: string[];
  price?: string;
  buttonText: string;
  highlight: boolean;
  url: string;
  coreBenefits?: string[];
  subscription?: string[];
  whatYouGet?: string[];
  timeline?: string;
  investment?: {
    setupFee: string;
    monthlyPlan: {
      name: string;
      price: string;
      includes: string[];
    };
  };
  optionalAddOns?: {
    name: string;
    description: string;
    price?: string;
  }[];
}

type MicroService = {
  service: string;
  price: string;
  blurb?: string;
  url: string;
};

interface PricingSectionProps {
  pricingPlans: PricingPlan[];
  handleNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, item: string) => void;
  microServices?: MicroService[];
}

const DEFAULT_MICRO_SERVICES: MicroService[] = [
  { 
    service: 'Shopify Notification / Email Template', 
    blurb: 'Fix broken layout logic, patch dynamic variables, and optimize transaction notifications or marketing email templates.', 
    price: '$125', 
    url: 'https://book.stripe.com/bJefZh2tU7SK2lw6lxdEs03' 
  },
  { 
    service: 'DNS or Email Setup', 
    blurb: 'Resolve MX, TXT, SPF, and DKIM configuration issues to eliminate email spam flagging and repair domain mapping failures.', 
    price: '$100', 
    url: 'https://book.stripe.com/14AaEX1pQeh82lw39ldEs04' 
  },
  { 
    service: 'Website Speed Optimization', 
    blurb: 'Maximize Core Web Vitals (LCP, INP, CLS) and crush mobile latency by purging rendering bloat and optimizing script hydration.', 
    price: '$99', 
    url: 'https://book.stripe.com/28E5kDfgGflcd0abFRdEs05' 
  },
  { 
    service: 'Landing Page Redesign', 
    blurb: 'Transform existing static pages into high-fidelity, high-converting interfaces packed with modern responsive UI and seamless web animations.', 
    price: '$149', 
    url: 'https://book.stripe.com/7sY9AT6Ka6OG9NYdNZdEs06' 
  },
  { 
    service: 'Technical GEO & AI Visibility Audit', 
    blurb: 'Audit platform performance and inject optimized graph schema to ensure real-time AI engines like ChatGPT Search and Perplexity crawl, cite, and recommend your site.', 
    price: '$149', 
    url: 'https://book.stripe.com/eVq00j5G66OGaS2bFRdEs07' 
  },
  { 
    service: 'Contact Form Integration', 
    blurb: 'Debug client-side input validation, fix broken Webhook routing pipelines, and restore secure lead-capture form deliveries.', 
    price: '$60', 
    url: 'https://book.stripe.com/8x228r8Si0qi2lw8tFdEs08' 
  },
];

const PricingSection: React.FC<PricingSectionProps> = ({
  microServices = DEFAULT_MICRO_SERVICES,
}) => {
  const [isIntersected, setIsIntersected] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.unobserve(entry.target); // Trigger reveal only once
        }
      },
      { threshold: 0.1 } // Fires when 10% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="micro-services-heading"
      className="relative z-0 py-24 md:py-36 overflow-hidden bg-slate-950"
    >
      {/* Dynamic ambient radial core glow - Base layer (z-10) */}
      <div
        className="absolute inset-0 z-10 opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(26, 81, 244, 0.18) 0%, rgba(2, 6, 23, 0) 70%)',
        }}
      ></div>

      {/* High-end hardware processor micro-dot matrix pattern - Stacked safely on top (z-11) */}
      <div 
        className="absolute inset-0 z-11 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(241, 245, 249, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="container relative px-6 mx-auto z-20 max-w-7xl">
        {/* Micro Services */}
        <div
          id="micro-services"
          aria-labelledby="micro-services-heading"
          className="mt-auto md:mt-auto"
        >
          {/* Header block with progressive fade-in */}
          <div 
            className="text-center max-w-3xl mx-auto mb-16"
            style={{
              opacity: isIntersected ? 1 : 0,
              transform: isIntersected ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 2s ease-in, transform 2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-slate-900/90 px-3 py-1 rounded border border-slate-800">
              On-Demand Core Execution V1.0
            </span>
            
            <h2
              id="micro-services-heading"
              className="mb-6 text-4xl md:text-5xl lg:text-6xl text-slate-100 font-bold tracking-tight"
            >
              On-Demand <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
                Performance Tuning
              </span>
            </h2>
            
            <p className="mt-4 text-base md:text-lg text-slate-400 font-sans leading-relaxed">
              High-impact performance upgrades and critical codebase patches—prioritized and shipped within a 24-72 hour window.
            </p>
          </div>

          {/* Core Hardware Cards Matrix with Staggered Transition */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {microServices.map((m, idx) => (
              <div
                key={m.service}
                className="services-card-hover-animate flex flex-col justify-between rounded-xl bg-slate-900/40 border border-slate-900/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm hover:border-slate-700/80 transition duration-300"
                style={{
                  opacity: isIntersected ? 1 : 0,
                  transform: isIntersected ? 'translateY(0)' : 'translateY(40px)',
                  transition: `
                    opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 150}ms, 
                    transform 2.2s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 150}ms,
                    border-color 0.3s ease,
                    box-shadow 0.3s ease
                  `
                }}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-slate-200 font-mono text-lg font-semibold tracking-wide leading-snug">{m.service}</h3>
                    <span className="text-indigo-400 font-mono font-bold text-lg whitespace-nowrap bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-900/50">{m.price}</span>
                  </div>
                  {m.blurb ? (
                    <p className="mt-3 text-md font-sans text-slate-400 leading-relaxed">{m.blurb}</p>
                  ) : null}
                </div>
                
                <div className="mt-6">
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-200"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Network Link */}
          <p 
            className="mt-12 text-center font-mono text-xs text-slate-500 tracking-wide"
            style={{
              opacity: isIntersected ? 1 : 0,
              transition: 'opacity 2s ease-in'
            }}
          >
            Need an operational script not listed? <a href="#contact" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 font-bold transition-colors">Request a custom micro-service</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;