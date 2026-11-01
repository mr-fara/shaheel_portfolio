import React from 'react';
import { Container } from '../ui/Container.tsx';
import { socialFrames } from '../../data/socialGallery.ts';
import { siteConfig } from '../../data/siteConfig.ts';
import { ArrowUpRight, Instagram } from 'lucide-react';

export const SocialGallery: React.FC = () => {
  return (
    <section
      className="py-20 md:py-28 bg-[#101010] text-[#F5F2EC] border-t border-[#242424]"
      aria-label="Social Photography Stills"
    >
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#B49A72] mb-3">
              VISUAL CHRONICLES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F5F2EC] tracking-tight">
              A Little More Through My Lens.
            </h2>
          </div>

          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#F5F2EC] hover:text-[#B49A72] transition-colors py-2 border-b border-[#2A2A2A] hover:border-[#B49A72] self-start md:self-auto"
            aria-label="Follow the Journey on Instagram (opens in new tab)"
          >
            <Instagram className="w-4 h-4 text-[#B49A72]" />
            <span>FOLLOW THE JOURNEY</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6-Photo Compact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {socialFrames.map((frame) => (
            <div
              key={frame.id}
              className="group relative aspect-square overflow-hidden bg-[#191919] cursor-pointer"
            >
              <img
                src={frame.image}
                alt={frame.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#101010]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                <p className="text-[11px] leading-tight font-serif italic text-[#F5F2EC]">
                  “{frame.caption}”
                </p>
                <span className="text-[9px] uppercase tracking-wider text-[#B49A72] mt-1 font-mono">
                  {frame.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
