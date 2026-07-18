'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-slate-500">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-slate-500">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

interface FooterProps {
  isAlwaysVisible?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isAlwaysVisible }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer id="contact" aria-labelledby="contact-heading" className="relative z-0 bg-slate-950 text-slate-400 border-t border-slate-900 font-sans overflow-hidden">

      {/* Dynamic ambient radial core glow - Base layer (z-10) */}
      <div
        className="absolute inset-0 z-10 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 80%, rgba(26, 81, 244, 0.15) 0%, rgba(2, 6, 23, 0) 65%)',
        }}
      ></div>

      {/* High-end hardware processor micro-dot matrix pattern - Stacked safely on top (z-11) */}
      <div
        className="absolute inset-0 z-11 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(241, 245, 249, 0.4) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="container relative px-6 py-16 mx-auto w-full max-w-7xl z-20">

        {/* Top Contact Bar styled like node routing configurations */}
        <div className={`mx-auto grid grid-cols-1 gap-8 mb-14 md:grid-cols-2 justify-items-stretch ${isAlwaysVisible ? 'is-visible' : ''}`}>

          <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/40 border border-slate-900/60 backdrop-blur-sm">
            <div className="mt-1"><PhoneIcon /></div>
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Voice Telemetry</p>
              <p className="text-sm mt-1"><a href="tel:8043627561" className="text-slate-300 transition-colors hover:text-indigo-400 font-mono">(804) 362-7561</a></p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/40 border border-slate-900/60 backdrop-blur-sm">
            <div className="mt-1"><EmailIcon /></div>
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Direct Signal Packet</p>
              <p className="text-sm mt-1">
                <a href="mailto:contact@majestikmagik.dev" className="text-slate-300 transition-colors hover:text-indigo-400 font-mono">
                  contact@majestikmagik.dev
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 mb-12"></div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 justify-items-stretch">
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">System Core Links</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm w-full">
              <li><a href="/privacy-policy" className="hover:text-indigo-400 transition-colors py-1 block">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-indigo-400 transition-colors py-1 block">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="hover:text-indigo-400 transition-colors py-1 block">Cookie Policy</a></li>
              <li><a href="/refund-policy" className="hover:text-indigo-400 transition-colors py-1 block">Refund Policy</a></li>
              <li><a href="/intellectual-property" className="hover:text-indigo-400 transition-colors py-1 block">Intellectual Property</a></li>
              <li><a href="/cyber-security-policy" className="hover:text-indigo-400 transition-colors py-1 block">Cyber Security</a></li>
              <li><a href="/sitemap.xml" className="hover:text-indigo-400 transition-colors py-1 block font-mono text-xs">Sitemap</a></li>
              <li><a href="/faq" className="hover:text-indigo-400 transition-colors py-1 block">FAQ Matrix</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-start space-y-6">
            <div>
              <h3 className="mb-3 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">Ecosystem Protocols</h3>
              <ul className="space-x-5 flex items-center text-lg text-slate-500">
                <li><a href="https://www.facebook.com/majestikmagik/" target="_blank" rel="noopener noreferrer" aria-label="Visit Majestik Magik on Facebook" className="hover:text-indigo-400 transition-colors"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="https://www.instagram.com/majestikmagik/" target="_blank" rel="noopener noreferrer" aria-label="Visit Majestik Magik on Instagram" className="hover:text-indigo-400 transition-colors"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://github.com/majestikmagik" target="_blank" rel="noopener noreferrer" aria-label="Visit Majestik Magik on Github" className="hover:text-indigo-400 transition-colors"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.linkedin.com/company/majestikmagik/" target="_blank" rel="noopener noreferrer" aria-label="Visit Majestik Magik on LinkedIn" className="hover:text-indigo-400 transition-colors"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              </ul>
            </div>

            <div className="w-full border-t border-slate-900 pt-6">
              <h3 className="mb-4 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">Hardware & Platform Partners</h3>
              <ul className="flex flex-wrap items-center gap-10 opacity-40 hover:opacity-75 transition-opacity duration-300">
                <li>
                  <Image
                    src="/img/partners/wpengine_member-badge.webp"
                    alt="WP Engine Partner"
                    width={160}
                    height={80}
                    loading="lazy"
                    className="h-20 w-auto grayscale object-contain"
                  />
                </li>
                <li>
                  <Image
                    src="/img/partners/gcp-logo.webp"
                    alt="Google Cloud Startup"
                    width={220}
                    height={160}
                    loading="lazy"
                    className="h-24 w-auto grayscale object-contain"
                  />
                </li>
                <li>
                  <Image
                    src="/img/partners/aws-activate-logo_white.webp"
                    alt="AWS Activate Partner"
                    width={240}
                    height={100}
                    loading="lazy"
                    className="h-12 w-auto grayscale object-contain"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar built inside full deep canvas layout */}
      <div className="relative bg-slate-950/80 backdrop-blur-md border-t border-slate-900/60 py-6 z-20">
        <div className="container px-6 mx-auto max-w-7xl flex flex-col items-center justify-between text-xs font-mono text-slate-500 md:flex-row">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Majestik Magik, Inc. All nodes protected.
          </p>

          {isClient && (
            <div className="text-center md:text-right max-w-md">
              <div className="trustpilot-widget text-slate-400 hover:text-indigo-400 transition-colors" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="66c36745eb620c5977db34ef">
                <a href="https://www.trustpilot.com/review/majestikmagik.com" target="_blank" rel="noopener noreferrer" className="underline">
                  Verified Trustpilot Portal
                </a>
              </div>
              <div className="mt-2 text-[11px] leading-relaxed text-slate-600 italic">
                “Majestik Magik didn’t just build a website — they built a platform that empowers my voice and mission.” <span className="text-slate-500 not-italic font-sans block mt-0.5">– Parris Gainer</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;