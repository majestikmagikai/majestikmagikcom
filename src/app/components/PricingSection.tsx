import React from 'react';

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
  { service: 'Shopify Notification or Email Template Fix', price: '$125', url: 'https://book.stripe.com/bJefZh2tU7SK2lw6lxdEs03' },
  { service: 'DNS or Email Setup / Fix', price: '$100', url: 'https://book.stripe.com/14AaEX1pQeh82lw39ldEs04' },
  { service: 'Website Speed Optimization', price: '$99', url: 'https://book.stripe.com/28E5kDfgGflcd0abFRdEs05' },
  { service: 'Landing Page Redesign', price: '$149', url: 'https://book.stripe.com/7sY9AT6Ka6OG9NYdNZdEs06' },
  { service: 'SEO Keyword Audit', price: '$75', url: 'https://book.stripe.com/eVq00j5G66OGaS2bFRdEs07' },
  { service: 'Contact Form Integration / Fix', price: '$60', url: 'https://book.stripe.com/8x228r8Si0qi2lw8tFdEs08' },
];

const PricingSection: React.FC<PricingSectionProps> = ({
  microServices = DEFAULT_MICRO_SERVICES,
}) => {
  return (
    <section
      id="pricing"
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-slate-900/90 px-3 py-1 rounded border border-slate-800">
              On-Demand Core Execution V1.0
            </span>
            
            <h2
              id="micro-services-heading"
              className="mb-6 text-4xl md:text-5xl lg:text-6xl text-slate-100 font-bold tracking-tight scroll-animate"
            >
              Quick Fix <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
                Micro-Services
              </span>
            </h2>
            
            <p className="mt-4 text-base md:text-lg text-slate-400 font-sans leading-relaxed scroll-animate">
              High-impact engineering tasks delivered remotely — prioritized inside a 24-72 hour turnaround timeline.
            </p>
          </div>

          {/* Core Hardware Cards Matrix */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {microServices.map((m) => (
              <div
                key={m.service}
                className="services-card-hover-animate flex flex-col justify-between rounded-xl bg-slate-900/40 border border-slate-900/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm hover:border-slate-700/80 transition duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-slate-200 font-mono text-sm font-semibold tracking-wide leading-snug">{m.service}</h3>
                    <span className="text-indigo-400 font-mono font-bold text-lg whitespace-nowrap bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-900/50">{m.price}</span>
                  </div>
                  {m.blurb ? (
                    <p className="mt-3 text-xs font-sans text-slate-400 leading-relaxed">{m.blurb}</p>
                  ) : null}
                </div>
                
                <div className="mt-6">
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-200"
                  >
                    Request Service
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Network Link */}
          <p className="mt-12 text-center font-mono text-xs text-slate-500 tracking-wide">
            Need an operational script not listed? <a href="#contact" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 font-bold transition-colors">Request a custom micro-service matrix</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;