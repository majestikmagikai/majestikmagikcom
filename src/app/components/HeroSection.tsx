"use client";

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onLearnMore: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = () => {

  const partners = [
    {
      id: 'parrisgainer', href: "https://www.parrisgainer.com",
      content: <Image src="/img/parrisgainer.webp" alt="Parris Gainer Consulting Services" className="lazy-logo h-8 sm:h-8 opacity-50 hover:opacity-100 transition-opacity" loading="lazy" width={120} height={40} />
    },
    {
      id: 'cearco', href: "https://cearcochemicals.com",
      content: <Image src="/img/cearco.webp" alt="Cearco Chemicals" className="lazy-logo h-8 sm:h-10 opacity-50 hover:opacity-100 transition-opacity" loading="lazy" width={90} height={40} />
    },
    {
      id: 'noelcustoms', href: "https://noelcustoms.shop",
      content: <Image src="/img/noel_customs.webp" alt="Noel Customs Shop" className="lazy-logo h-8 sm:h-10 opacity-50 hover:opacity-100 transition-opacity" loading="lazy" width={90} height={40} />
    },
    {
      id: 'orbitt', href: "https://orbitt.pro/mm",
      content: (
        <svg width="113" height="18" viewBox="0 0 113 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="lazy-logo h-8 sm:h-10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
          <g clipPath="url(#clip0_7133_3109)">
            <path d="M16.8426 8.70299C16.8426 13.4079 13.6842 17.2155 8.42132 17.2155C3.15844 17.2155 0 13.4079 0 8.70299C0 3.99812 3.15844 0.19043 8.42132 0.19043C13.6842 0.19043 16.8426 3.99812 16.8426 8.70299ZM13.5877 8.70299C13.5877 5.55581 11.6512 3.02677 8.42132 3.02677C5.19142 3.02677 3.25491 5.55581 3.25491 8.70299C3.25491 11.8502 5.19142 14.3792 8.42132 14.3792C11.6512 14.3792 13.5877 11.8502 13.5877 8.70299Z" fill="white" />
            <path d="M21.6515 6.97597C22.4161 5.24874 23.1093 4.35156 26.1963 4.35156V7.42456C22.6305 7.1879 21.6015 8.44183 21.6015 11.6102V17.025H18.5396V4.5423H21.6015V5.22754C21.6015 5.7715 21.4586 6.24481 21.2442 6.66867C21.1478 6.8806 21.0763 7.16671 21.3621 7.21263C21.5051 7.23736 21.6265 7.04662 21.648 6.97597H21.6515Z" fill="white" />
            <path d="M30.4197 5.01217C30.4197 5.5102 30.3018 5.88815 30.0839 6.31201C29.9874 6.54866 29.8195 6.83124 30.0589 6.95133C30.2982 7.06789 30.4412 6.76059 30.4912 6.66876C31.2558 5.34419 32.5242 4.35165 34.4857 4.35165C37.762 4.35165 39.9879 7.18799 39.9879 10.7837C39.9879 14.3795 37.762 17.2159 34.4857 17.2159C32.5706 17.2159 31.2558 16.2445 30.4912 14.874C30.4447 14.8034 30.3483 14.5667 30.1339 14.6374C29.8695 14.7327 29.966 14.9694 30.0874 15.206C30.3018 15.6334 30.4233 16.0114 30.4233 16.4847V17.0286H27.3613V0H30.4233V5.01217H30.4197ZM36.9295 10.7837C36.9295 8.79866 35.9256 7.09615 33.7711 7.09615C31.7631 7.09615 30.4233 8.79866 30.4233 10.7837C30.4233 12.7688 31.7631 14.4749 33.7711 14.4749C35.9256 14.4749 36.9295 12.7724 36.9295 10.7837Z" fill="white" />
            <path d="M41.585 0H44.6469V3.02708H41.585V0ZM41.585 4.54239H44.6469V17.0286H41.585V4.54239Z" fill="white" />
            <path d="M51.028 7.18795V12.8889C51.028 14.2594 51.053 14.3795 52.3428 14.3795H54.4722V17.0286H51.6961C49.1593 17.0286 47.9624 16.2021 47.9624 13.1962V7.18795H45.665V4.53881H47.9624V1.13379H51.0244V4.53881H54.4687V7.18795H51.0244H51.028Z" fill="white" />
            <path d="M60.6466 7.18795V12.8889C60.6466 14.2594 60.6716 14.3795 61.9614 14.3795H64.0909V17.0286H61.3147C58.778 17.0286 57.5811 16.2021 57.5811 13.1962V7.18795H55.2837V4.53881H57.5811V1.13379H60.643V4.53881H64.0873V7.18795H60.643H60.6466Z" fill="white" />
            <path d="M111.449 11.4515L111.342 11.5999C109.842 13.6662 108.291 15.5948 107.09 15.7149C106.772 15.7431 106.494 15.6478 106.24 15.4147C104.968 14.2526 104.954 10.0599 105.475 6.65837L105.497 6.51002L103.05 5.74354L98.7585 12.8079L99.8375 4.17878L97.5008 3.49707L91.459 12.9633L92.9525 6.0685L90.5015 5.66936L89.5547 11.5999C88.0541 13.6662 86.5034 15.5948 85.3065 15.7149C84.9885 15.7431 84.7098 15.6478 84.4561 15.4147C83.1842 14.2526 83.1699 10.0599 83.6915 6.65837L83.713 6.51002L81.2655 5.74354L76.9745 12.8079L78.0535 4.17878L75.7168 3.49707L69.6751 12.9633L71.1685 6.0685L68.7175 5.66936L66.9775 16.552L69.1106 17.7424L75.4524 7.62972L74.2198 16.9088L76.4207 17.8342L81.1619 9.76316C81.0262 12.1015 81.1727 15.5418 82.9412 17.1136C83.6094 17.7106 84.2882 18.0037 85.0064 18.0037C85.1171 18.0037 85.2279 17.9967 85.3387 17.9825C86.4212 17.8519 87.586 17.0818 88.9116 15.6125L88.7615 16.552L90.8945 17.7424L97.2364 7.62972L96.0038 16.9088L98.2046 17.8342L102.946 9.76316C102.81 12.1015 102.957 15.5418 104.725 17.1136C105.393 17.7106 106.072 18.0037 106.79 18.0037C106.901 18.0037 107.012 17.9967 107.123 17.9825C108.77 17.7847 110.606 16.1176 112.9 12.7408L112.993 12.603L111.442 11.4551L111.449 11.4515Z" fill="#1A51F4" />
          </g>
          <defs>
            <clipPath id="clip0_7133_3109">
              <rect width="113" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    }
  ];


  return (
    <section id="home" aria-labelledby="home-heading" className="relative py-20 md:py-32 overflow-hidden">

      {/* Deep blue to slate-950 circular gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.8) 0%, rgba(15, 23, 42, 0.95) 70%)', 
        }}
      ></div>
      <div className="container relative px-6 mx-auto z-20">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            {/* SEO-optimized H1 */}
            <h1 className="mb-6 md:mb-8 text-5xl md:text-6xl lg:text-7xl text-white font-semibold scroll-animate text-left">
              <span className="text-transparent bg-clip-text animate-gradient-x">
                Introducing Majestik Magik <br/>AI-BOS
              </span>
            </h1>

            {/* Keyword-rich supporting paragraph */}
            <p
              className="max-w-xl mb-4 md:mb-6 text-lg md:text-xl text-slate-200 scroll-animate text-left"
              style={{ transitionDelay: "0.1s" }}
            >
              The First AI Business Operating System to integrate XP leveling, a token economy, and multi-model AI orchestration—designed specifically for entrepreneurial execution and business growth.
            </p>
            <p
              className="max-w-xl mb-4 md:mb-6 text-lg md:text-xl text-slate-200 scroll-animate text-left"
              style={{ transitionDelay: "0.5s" }}
            >
              Embark on your business journey with state-of-the-art technology, real-time guidance, and a supportive community — all designed to help you launch faster, grow smarter, and stay consistent.
            </p>

            {/* Accessibility helper to reinforce long-tail terms without cluttering UI */}
            <p className="sr-only">
              The First Gamified AI Business Operating System to integrate XP leveling, a token economy, and multi-model AI orchestration—designed specifically for entrepreneurial execution and business growth.
            </p>

            
          </div>
          {/* Majestik Majestik AI Screenshot */}
          <div className="w-full md:w-1/2 px-4 flex items-center justify-center">
            <div className="hero-screenshot-frame group scroll-animate" style={{ transitionDelay: "1s" }}>
              <div className="hero-screenshot-inner">
                <Image
                  src="/img/screenshot_mm_ai.png"
                  alt="Majestik Magik AI Screenshot"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl"                  
                />
              </div>
              <p className="mb-3 inline-flex items-center mt-4 gap-2 rounded-full bg-slate-900/60 px-4 py-1 text-xs font-medium text-slate-200 border border-slate-700/70">
                <span className="h-4 w-4 rounded-full bg-emerald-400 animate-pulse" />
                New • Launching December 9, 2025
              </p>
            </div>
          </div>


          {/* Companies Partner Banner */}
          <p className="text-sm text-slate-500 mt-30 mb-4 scroll-animate text-center">
            Trusted by businesses in Richmond, VA and beyond
          </p>
          <div className="scrolling-logos-wrapper scroll-animate">
            <div className="scrolling-logos-container">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <a
                  key={`${partner.id}-${index}`}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${partner.id}`}
                  className="flex items-center justify-center flex-shrink-0 mr-8 sm:mr-12 last:mr-0"
                >
                  {partner.content}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
