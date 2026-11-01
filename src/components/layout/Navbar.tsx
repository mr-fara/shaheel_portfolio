import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['hero', 'portfolio', 'story', 'about', 'services', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Story', href: '#story' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onContactClick) {
      onContactClick();
    } else {
      const target = document.querySelector('#contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#101010]/90 backdrop-blur-md border-b border-[#2A2A2A]/80 py-4 shadow-lg shadow-black/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex flex-col tracking-tight text-white focus-visible:outline-none"
            aria-label="Shaheel - Back to top"
          >
            <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.2em] uppercase transition-colors group-hover:text-[#B49A72]">
              SHAHEEL
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav
            className="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.14em] uppercase text-[#F5F2EC]/80"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1 transition-colors duration-200 whitespace-nowrap shrink-0 hover:text-white ${
                    isActive ? 'text-[#B49A72]' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#B49A72] transition-all" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={handleCtaClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#101010] bg-[#B49A72] hover:bg-[#C9B28D] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#B49A72]"
            >
              <span>Let's Create</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F5F2EC] hover:text-[#B49A72] transition-colors focus-visible:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Navigation Panel */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#101010]/98 backdrop-blur-xl md:hidden flex flex-col justify-between pt-28 pb-10 px-8 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col space-y-6">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#898781]">Navigation</p>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-serif text-3xl font-light text-[#F5F2EC] hover:text-[#B49A72] transition-colors py-1 flex items-center justify-between border-b border-[#242424]"
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans tracking-widest text-[#898781]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#242424] flex flex-col gap-4">
            <button
              onClick={handleCtaClick}
              className="w-full py-4 text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#101010] bg-[#B49A72] hover:bg-[#C9B28D] transition-colors"
            >
              Let's Create — Inquire
            </button>
            <p className="text-[11px] text-[#898781] text-center tracking-wider">
              Stories, Framed in Light.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
