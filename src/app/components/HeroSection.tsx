"use client";

import React from 'react';
import Image from 'next/image';


interface HeroSectionProps {
  onLearnMore: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = () => {

  return (
    <section id="home" aria-labelledby="home-heading" className="relative z-0 py-24 md:py-36 overflow-hidden bg-slate-950">

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
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 text-left">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-4 bg-slate-900/90 px-3 py-1 rounded border border-slate-800">
              Pivot Quest V1.0
            </span>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-slate-100 font-bold tracking-tight scroll-animate">
              Introducing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">
                Pivot Quest
              </span>
            </h1>

            <p
              className="max-w-xl mb-8 text-base md:text-lg text-slate-400 font-sans leading-relaxed scroll-animate"
              style={{ transitionDelay: "0.1s" }}
            >
              We engineer high-performance, context-aware workspaces built for rapid execution. No generic prompts. No lost context. Just our very own guardrailed strategic engine to keep your business on the main trail. Experience our architecture in action with Pivot Quest, the ultimate gamified workspace built to accelerate your business operations.
            </p>

            <div className="mb-14 scroll-animate" style={{ transitionDelay: "0.3s" }}>
              <a
                href="https://app.majestikmagik.dev/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold uppercase tracking-wider text-xs py-3.5 px-8 rounded-lg transition-all duration-200 shadow-[0_4px_20px_rgba(26,81,244,0.3)]"
              >
                Sign Up Today!
              </a>
            </div>

            <p className="sr-only">
              We engineer high-performance, context-aware workspaces built for rapid execution. No generic prompts. No lost context. Just guardrailed strategic engines with permanent memory to keep your business on the main trail[cite: 13].
            </p>
          </div>

          <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
            <div className="hero-screenshot-frame group scroll-animate w-full max-w-xl" style={{ transitionDelay: "0.5s" }}>
              <div className="hero-screenshot-inner border border-slate-800/80 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-900/50 p-2 backdrop-blur-sm">
                <Image
                  src="/img/screenshot_mm_ai.png"
                  alt="Majestik Magik AI Screenshot"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl border border-slate-950 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;