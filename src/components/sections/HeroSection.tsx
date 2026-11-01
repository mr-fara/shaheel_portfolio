import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Camera, Award } from 'lucide-react';
import { Container } from '../ui/Container.tsx';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onWorkWithMeClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onWorkWithMeClick
}) => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 md:pb-12 overflow-hidden bg-[#0A0A0A] isolate"
      aria-label="Shaheel Photography Hero"
    >
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 w-full h-[110%]"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img
            src="/src/assets/images/hero_cinematic_light_1793288280398.jpg"
            alt="Cinematic coastal landscape in golden mist by Shaheel"
            className={`w-full h-full object-cover object-center transition-all duration-[2000ms] ease-out ${
              mounted ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            }`}
            fetchPriority="high"
            loading="eager"
          />
        </div>

        {/* Sophisticated multi-layer scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(10,10,10,0.9)_0%,_transparent_60%)]" />

        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Corner Lines */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-6 lg:left-10 z-10 pointer-events-none hidden sm:block">
        <div className="w-8 h-px bg-[#B49A72]/60 mb-2" />
        <div className="w-px h-8 bg-[#B49A72]/60" />
      </div>
      <div className="absolute top-20 sm:top-24 right-4 sm:right-6 lg:right-10 z-10 pointer-events-none hidden sm:block">
        <div className="w-8 h-px bg-[#B49A72]/60 mb-2 ml-auto" />
        <div className="w-px h-8 bg-[#B49A72]/60 ml-auto" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <Container size="wide">
          <div className="max-w-5xl">
            {/* Eyebrow with animated line */}
            <div
              className={`flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="h-px w-8 sm:w-12 bg-[#B49A72]" />
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.25em] text-[#B49A72] uppercase">
                <span>Independent Photographer</span>
                <span className="text-[#B49A72]/40">●</span>
                <span>Visual Storyteller</span>
              </div>
            </div>

            {/* Display Headline */}
            <h1
              className={`font-serif text-[2.75rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] 2xl:text-[10rem] font-light tracking-[-0.02em] text-[#F5F2EC] leading-[0.95] mb-6 sm:mb-8 text-balance transition-all duration-1000 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Stories,
              <br />
              <span className="italic font-normal bg-gradient-to-r from-[#FFFFFF] via-[#F5F2EC] to-[#B49A72] bg-clip-text text-transparent">
                Framed in Light.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl text-[#F5F2EC]/80 font-light leading-relaxed max-w-xl lg:max-w-2xl mb-8 sm:mb-10 md:mb-12 text-balance transition-all duration-1000 delay-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Capturing the beauty of real moments through thoughtful composition,
              natural light, and a deeply personal perspective.
            </p>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-5 transition-all duration-1000 delay-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <button
                type="button"
                onClick={onExploreClick ? onExploreClick : () => handleScrollTo('portfolio')}
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#0A0A0A] bg-[#B49A72] overflow-hidden transition-all duration-500 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-[#B49A72]/20 active:scale-[0.98] cursor-pointer"
              >
                <span className="absolute inset-0 bg-[#F5F2EC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">Explore Portfolio</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
              </button>

              <button
                type="button"
                onClick={onWorkWithMeClick ? onWorkWithMeClick : () => handleScrollTo('contact')}
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F2EC] border border-[#F5F2EC]/25 hover:border-[#B49A72] transition-all duration-500 active:scale-[0.98] cursor-pointer backdrop-blur-sm"
              >
                <span className="absolute inset-0 bg-[#B49A72]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Work With Me</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Stats / Trust Indicators */}
            <div
              className={`hidden md:flex items-center gap-8 lg:gap-12 mt-12 lg:mt-16 pt-8 border-t border-[#F5F2EC]/10 max-w-2xl transition-all duration-1000 delay-900 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-[#B49A72]" strokeWidth={1.5} />
                <div>
                  <div className="text-xl lg:text-2xl font-serif text-[#F5F2EC] font-light">250+</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#898781]">Projects</div>
                </div>
              </div>
              <div className="w-px h-10 bg-[#F5F2EC]/10" />
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#B49A72]" strokeWidth={1.5} />
                <div>
                  <div className="text-xl lg:text-2xl font-serif text-[#F5F2EC] font-light">15+</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#898781]">Awards</div>
                </div>
              </div>
              <div className="w-px h-10 bg-[#F5F2EC]/10" />
              <div>
                <div className="text-xl lg:text-2xl font-serif text-[#F5F2EC] font-light">8 Yrs</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#898781]">Experience</div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar: Metadata & Scroll Indicator */}
      <div
        className={`relative z-10 w-full pt-6 sm:pt-8 mt-8 sm:mt-10 md:mt-12 transition-all duration-1000 delay-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-[#F5F2EC]/10 text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#898781]">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B49A72] animate-pulse" />
              <span className="text-[#B49A72] font-medium">Shaheel</span>
              <span className="text-[#898781]/50">/</span>
              <span>Photographer</span>
              <span className="hidden md:inline text-[#898781]/50">/</span>
              <span className="hidden md:inline">Est. 2016</span>
            </div>

            <button
              type="button"
              onClick={() => handleScrollTo('portfolio')}
              className="group inline-flex items-center gap-2.5 sm:gap-3 text-[#F5F2EC]/70 hover:text-[#B49A72] transition-colors duration-300 cursor-pointer"
              aria-label="Scroll down to portfolio section"
            >
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em]">Scroll to Discover</span>
              <span className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#F5F2EC]/20 group-hover:border-[#B49A72] transition-colors duration-300">
                <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-bounce" />
              </span>
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
};