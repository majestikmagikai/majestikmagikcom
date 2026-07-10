'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from './Icons';

interface HeaderProps {
  navItems: { name: string; url: string; external?: boolean }[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; url: string; external?: boolean }) => void;
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  handleNavClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-xl'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <button
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center space-x-3 text-lg font-bold font-mono uppercase tracking-wider text-slate-100 cursor-pointer"
          aria-label="Majestik Magik Home"
          type="button"
        >
          <Image
            src="/img/majestikmagik_logo_indigo-64x64.png"
            className="w-8 h-8 opacity-90 rounded-md"
            alt="Majestik Magik icon"
            loading="lazy"
            width={32}
            height={32}
          />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-300">
            Majestik Magik
          </span>
        </button>

        <nav className="hidden xl:flex items-center space-x-8">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-mono font-bold uppercase tracking-wider text-xs py-2 px-4 rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(26,81,244,0.2)]"
              >
                {item.name}
              </a>
            ) : (
              <a
                key={item.name}
                href={item.url}
                className="text-slate-400 hover:text-indigo-400 transition-colors font-mono uppercase text-xs tracking-wider duration-200"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.name}
              </a>
            )
          ))}
        </nav>

        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="mobile-menu"
            className="text-slate-400 hover:text-indigo-400 focus:outline-none p-1 rounded-md cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
            {isMobileMenuOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-900 shadow-2xl z-40" id="mobile-menu">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={`mobile-${item.name}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-3 py-2.5 text-xs font-mono font-bold uppercase tracking-widest bg-indigo-600 text-white text-center shadow-lg"
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={`mobile-${item.name}`}
                  href={item.url}
                  className="block rounded-lg px-3 py-2 text-sm font-mono uppercase tracking-wider text-slate-300 hover:bg-slate-900 hover:text-indigo-400 transition-colors"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;