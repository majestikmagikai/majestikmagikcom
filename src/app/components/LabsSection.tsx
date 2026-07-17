'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArrowRightIcon : React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

export const LabsSection = () => {
    return (
         <section id="labs" aria-labelledby="labs-heading" className="relative py-20 md:py-28 overflow-hidden bg-slate-950 border-t border-slate-900">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20 filter grayscale contrast-125"
            >
                <source src="/videos/majestikmagik_labs_mritest.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 z-10"></div>
            
            <div className="container relative px-6 mx-auto z-20 max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 items-center scroll-animate">
                    <div className="order-2 md:order-1">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/40 px-3 py-1 rounded border border-indigo-900/40">
                            Deep Compute R&D Matrix
                        </span>
                        <h2 id="labs-heading" className="text-3xl mt-4 md:text-4xl font-bold text-slate-100 tracking-tight mb-4">
                            Project: Insight MD
                        </h2>
                        <p className="text-slate-400 mb-6 text-sm leading-relaxed font-sans">
                            Beyond our consumer interfaces, Majestik Magik engineers technology targeted at vital real-world problems. Our core deep-tech initiative, Insight MD, serves as a high-throughput machine vision copilot for radiologists, architecture designed to accelerate standard diagnostic mapping.
                        </p>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed font-sans">
                            This deployment path maps to highly custom algorithmic models, designed from foundational principles to ensure reliable system utilization in extreme-priority workflows.
                        </p>
                        
                        <Link href="/labs" className="inline-flex items-center justify-center px-6 py-3 border border-slate-800 text-xs font-mono font-bold uppercase tracking-wider rounded-lg text-slate-200 bg-slate-900 hover:bg-slate-850 hover:text-white transition-all group shadow-md">
                            Inspect Research Architecture
                            <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform text-indigo-400" />
                        </Link>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="p-1 rounded-2xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-sm shadow-2xl">
                            <Image 
                                src="/img/insightmd_03.webp"
                                alt="Insight MD Viewer Prototype"
                                className="rounded-xl w-full h-auto object-cover opacity-85 border border-slate-950"
                                width={1200}
                                height={794}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LabsSection;