import React from 'react';
import { Container } from '../ui/Container.tsx';
import { siteConfig } from '../../data/siteConfig.ts';
import { Compass, Sparkles, Eye, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onExploreWork?: () => void;
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onExploreWork,
  onContactClick
}) => {
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#FBFAF7] text-[#101010] relative"
      aria-label="About Shaheel"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photographer Behind-The-Scenes Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden bg-[#E8E4DC] shadow-lg">
              <img
                src="/src/assets/images/about_shaheel_photographer_1793288282959.jpg"
                alt="Shaheel in studio reviewing medium format camera frames"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#101010]/80 to-transparent text-white">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#B49A72]">
                  IN THE ATELIER
                </p>
                <p className="text-xs text-[#F5F2EC]/80 mt-0.5">
                  Shaheel examining film negatives and archival contact sheets.
                </p>
              </div>
            </div>

            {/* Subtle floating quote box */}
            <div className="mt-6 p-6 bg-white border border-[#DCD8D0] shadow-sm">
              <p className="font-serif italic text-lg text-[#101010] leading-snug">
                “{siteConfig.philosophy.quote}”
              </p>
              <p className="text-xs tracking-widest uppercase text-[#898781] mt-3">
                Shaheel · Creative Philosophy
              </p>
            </div>
          </div>

          {/* Biography & Approach Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-[#898781] mb-3">
              {siteConfig.aboutEyebrow}
            </p>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#101010] tracking-tight leading-[1.12] mb-8 text-balance">
              {siteConfig.aboutHeading}
            </h2>

            {/* Biography Copy */}
            <div className="space-y-5 text-sm sm:text-base text-[#3A3834] font-light leading-relaxed mb-10">
              {siteConfig.aboutBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Creative Philosophy Pillars (Authentic, No Invented Reviews) */}
            <div className="pt-8 border-t border-[#DCD8D0] grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {siteConfig.philosophy.pillars.map((pillar, idx) => {
                const icons = [
                  <Sparkles key="1" className="w-4 h-4 text-[#B49A72]" />,
                  <Eye key="2" className="w-4 h-4 text-[#B49A72]" />,
                  <Compass key="3" className="w-4 h-4 text-[#B49A72]" />
                ];

                return (
                  <div key={pillar.title} className="space-y-2">
                    <div className="flex items-center gap-2">
                      {icons[idx]}
                      <h3 className="font-serif text-base font-normal text-[#101010]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#6B6963] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Signature & CTA */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-[#DCD8D0]/60">
              <div>
                <span className="font-serif text-2xl tracking-[0.2em] font-light uppercase text-[#101010]">
                  SHAHEEL
                </span>
                <span className="block text-[11px] tracking-wider uppercase text-[#898781]">
                  {siteConfig.contact.location}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={onExploreWork ? onExploreWork : () => handleScrollTo('portfolio')}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#101010] hover:text-[#B49A72] transition-colors cursor-pointer"
                >
                  <span>GET TO KNOW MY WORK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
