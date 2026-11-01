import React, { useState } from 'react';
import { Container } from '../ui/Container.tsx';
import { siteConfig } from '../../data/siteConfig.ts';
import { ArrowUp, Instagram, Globe, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Story', href: '#story' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[#0B0B0B] text-[#F5F2EC] border-t border-[#1F1F1F] pt-20 pb-12">
      <Container size="wide">
        {/* Top Tier: Wordmark & Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#1F1F1F]">
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] uppercase text-[#F5F2EC]">
              {siteConfig.name}
            </span>
            <p className="text-xs uppercase tracking-[0.25em] text-[#B49A72]">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-[#898781] font-light max-w-sm pt-2">
              Independent photography and visual storytelling exploring light, silence, and authentic emotion.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#898781]">Quick Navigation</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] text-[#DCD8D0]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#B49A72] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#898781] mb-1">Direct Inquiries</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-xs text-[#F5F2EC] hover:text-[#B49A72] transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#898781] md:text-right">Connect</p>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#191919] border border-[#2A2A2A] flex items-center justify-center text-[#F5F2EC] hover:text-[#B49A72] hover:border-[#B49A72] transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                {siteConfig.social.behance && (
                  <a
                    href={siteConfig.social.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#191919] border border-[#2A2A2A] flex items-center justify-center text-[#F5F2EC] hover:text-[#B49A72] hover:border-[#B49A72] transition-all"
                    aria-label="Behance Portfolio"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <button
              onClick={handleScrollToTop}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#898781] hover:text-[#F5F2EC] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Closing Statement, Copyright, Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#898781]">
          <p className="font-serif italic text-sm text-[#B49A72]">
            “Created with intention. Captured through light.”
          </p>

          <div className="flex items-center gap-4 text-[11px] tracking-wider">
            <span>© {currentYear} SHAHEEL. All Rights Reserved.</span>
            <span>·</span>
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-[#F5F2EC] transition-colors underline cursor-pointer"
            >
              Privacy & Usage
            </button>
          </div>
        </div>
      </Container>

      {/* Privacy & Usage Modal */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#191919] border border-[#2A2A2A] max-w-lg w-full p-6 sm:p-8 space-y-4 text-left relative shadow-2xl">
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-5 right-5 text-[#898781] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-2xl font-light text-white">Privacy & Copyright Policy</h3>
            <div className="text-xs text-[#A5A39D] space-y-3 leading-relaxed">
              <p>
                All photographs, creative works, and visual assets showcased on this portfolio website are the intellectual property of <strong>SHAHEEL</strong> unless explicitly licensed otherwise.
              </p>
              <p>
                Unauthorized reproduction, commercial re-use, digital distribution, or artificial intelligence model training without written contractual permission is strictly prohibited.
              </p>
              <p>
                Client inquiries submitted via the booking form are treated with strict confidentiality. Contact information is never sold, leased, or transmitted to third-party marketing services.
              </p>
            </div>
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="w-full py-2.5 text-xs uppercase tracking-widest bg-[#B49A72] text-[#101010] font-semibold mt-4"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
