"use client";

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onLearnMore: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = () => {

  return (
    <section id="home" aria-labelledby="home-heading" className="relative z-0 pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-slate-950">

      {/* Apple-style centered cinematic ambient radial core glow */}
      <div
        className="absolute inset-0 z-10 opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(26, 81, 244, 0.22) 0%, rgba(2, 6, 23, 0) 60%)',
        }}
      ></div>

      {/* High-end hardware processor micro-dot matrix pattern */}
      <div
        className="absolute inset-0 z-11 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(241, 245, 249, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="container relative px-6 mx-auto z-20 max-w-5xl text-center">
        
        {/* Product Tag Badge */}
        <div className="mb-6 scroll-animate">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-slate-900/90 px-4 py-1.5 rounded-full border border-slate-800 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            Pivot Quest V1.0
          </span>
        </div>

        {/* Massive Apple-Inspired Header Stack */}
        <h1 className="mb-8 text-5xl md:text-7xl lg:text-8xl text-slate-100 font-bold tracking-tight leading-none scroll-animate">
          Introducing <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 via-indigo-400 to-white">
            Pivot Quest
          </span>
        </h1>

        {/* Elegant Centered Description */}
        <p
          className="max-w-3xl mx-auto mb-10 text-base md:text-xl text-slate-400 font-sans leading-relaxed scroll-animate opacity-90"
          style={{ transitionDelay: "0.1s" }}
        >
          High-performance, context-aware workspaces built for rapid execution. Stop wrestling with generic prompts and lost context. Pivot Quest deploys a guardrailed strategic engine fine-tuned to keep your business scaling on the main trail.
        </p>

        {/* Clean Call To Action Layer */}
        <div className="mb-20 md:mb-28 scroll-animate" style={{ transitionDelay: "0.2s" }}>
          <a
            href="https://app.majestikmagik.dev/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold uppercase tracking-wider text-xs py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_4px_30px_rgba(26,81,244,0.4)] hover:shadow-[0_4px_40px_rgba(26,81,244,0.6)]"
          >
            Start Today!
          </a>
        </div>

        {/* Centerpiece Hardware Device / Interface Frame */}
        <div 
          className="w-full max-w-4xl mx-auto scroll-animate" 
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="group relative border border-slate-800/60 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] bg-slate-900/30 p-2.5 backdrop-blur-md transition-all duration-500 hover:border-slate-700/60 hover:shadow-indigo-500/10">
            
            {/* Top glass reflection highlight across the hardware frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-30" />
            
            <Image
              src="/img/screenshot_mm_ai.png"
              alt="Majestik Magik AI Screenshot"
              width={1200}
              height={800}
              priority
              className="w-full h-auto rounded-xl border border-slate-950/80 opacity-95 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.015]"
            />
          </div>
        </div>

        <p className="sr-only">
          We engineer high-performance, context-aware workspaces built for rapid execution. No generic prompts. No lost context. Just guardrailed strategic engines with permanent memory to keep your business on the main trail.
        </p>
        
      </div>
    </section>
  );
};

export default HeroSection;