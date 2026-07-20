'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onLearnMore: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = () => {

  return (
    <section id="home" aria-labelledby="home-heading" className="relative z-0 pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-[#07080e]">

      {/* Apple-style centered cinematic ambient radial core glow */}
      <div
        className="absolute inset-0 z-10 opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(99, 102, 241, 0.18) 0%, rgba(7, 8, 14, 0) 65%)',
        }}
      ></div>

      {/* High-end hardware processor micro-dot matrix pattern */}
      <div
        className="absolute inset-0 z-[11] pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(247, 248, 248, 0.3) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="container relative px-6 mx-auto z-20 max-w-7xl text-center">

        {/* Product Tag Badge */}
        <div className="mb-6 scroll-animate">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-[#0d0f1a]/90 px-4 py-1.5 rounded-full border border-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            Pivot Quest V1.0
          </span>
        </div>

        {/* Massive Apple-Inspired Header Stack */}
        <h1 className="mb-8 text-5xl md:text-7xl lg:text-8xl text-slate-100 font-bold tracking-tight leading-none scroll-animate opacity-90 ease-in-out duration-500">
          Introducing <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 via-indigo-400 to-white scroll-animate opacity-90 ease-in-out duration-1000">
            Pivot Quest
          </span>
        </h1>

        {/* Elegant Centered Description */}
        <p
          className="max-w-2xl mx-auto mb-10 text-base md:text-xl text-slate-400 font-sans leading-relaxed scroll-animate opacity-90 ease-in-out duration-500"        >
          From chaos to clarity, Pivot Quest is a gamified AI engine that keeps your business decisions sharp, your team aligned, and your execution on track.
        </p>

        {/* Clean Call To Action Layer */}
        <div className="mb-20 md:mb-28 scroll-animate opacity-90 ease-in-out duration-500">
          <a
            href="https://app.majestikmagik.dev/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-400 text-white font-mono font-bold uppercase tracking-wider text-xs py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:shadow-[0_0_45px_rgba(99,102,241,0.8)] border border-indigo-400/20"
          >Start Your Quest
          </a>
        </div>

        {/* Centerpiece Hardware Device / Interface Frame */}
        <div className="w-full xl:max-w-7xl mx-auto relative z-10">

          {/* Dynamic Aurora Ambient Glow Wrapper (Fades in/out behind the mockup) */}
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 via-purple-600/20 to-indigo-500/30 rounded-3xl blur-3xl opacity-75 animate-[pulse_6s_ease-in-out_infinite] pointer-events-none z-0" />
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl opacity-50 animate-[pulse_4s_ease-in-out_infinite] pointer-events-none z-0" />

          {/* Actual Frame markup - Render immediately for instant LCP */}
          <div className="group relative z-10 border border-indigo-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.15)] bg-indigo-950/20 p-2.5 backdrop-blur-md transition-all duration-300 hover:border-indigo-400/60 hover:shadow-[0_0_60px_rgba(99,102,241,0.35)]">

            {/* Top glass reflection highlight with an indigo-tinted gradient across the hardware frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-300/10 to-white/5 pointer-events-none z-30" />

            <Image
              src="/img/screenshot_mm_ai.webp"
              alt="Pivot Quest Screenshot"
              width={1400}
              height={875}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
              quality={75}
              className="w-full h-auto rounded-xl border border-indigo-950/50 transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        <p className="sr-only">
          From chaos to clarity, Pivot Quest is a gamified AI engine that keeps your business decisions sharp, your team aligned, and your execution on track.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;