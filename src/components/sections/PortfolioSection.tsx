import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ArrowUpRight, Grid3X3, LayoutGrid } from 'lucide-react';
import { Container } from '../ui/Container.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { PortfolioFilters } from '../portfolio/PortfolioFilters.tsx';
import { PortfolioGrid } from '../portfolio/PortfolioGrid.tsx';
import { PortfolioLightbox } from '../portfolio/PortfolioLightbox.tsx';
import { portfolioItems } from '../../data/portfolio.ts';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Work');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-triggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Filter items with transition feedback
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All Work') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsFiltering(true);
    setActiveCategory(category);
    setTimeout(() => setIsFiltering(false), 400);
  };

  const handleOpenLightbox = (index: number) => setLightboxIndex(index);
  const handleCloseLightbox = () => setLightboxIndex(null);
  const handleNavigateLightbox = (newIndex: number) => setLightboxIndex(newIndex);

  // Unique category count for stats
  const categoryCount = useMemo(() => {
    const cats = new Set(portfolioItems.map((i) => i.category));
    return cats.size;
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-[#FBFAF7] text-[#101010] overflow-hidden"
      aria-label="Selected Photography Works"
    >
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #101010 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Decorative Section Number */}
      <div
        className={`absolute top-16 sm:top-20 md:top-24 right-4 sm:right-8 lg:right-16 text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-serif font-light text-[#101010]/[0.03] leading-none select-none pointer-events-none transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        aria-hidden="true"
      >
        02
      </div>

      <Container size="wide">
        {/* ─── Section Header ─── */}
        <div
          className={`relative mb-12 sm:mb-14 md:mb-16 lg:mb-20 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-end lg:justify-between">
            {/* Left: Heading Block */}
            <div className="max-w-2xl lg:max-w-3xl">
              <SectionHeading
                eyebrow="A COLLECTION OF MOMENTS"
                heading="Selected Frames."
                subheading="A visual collection of people, places, celebrations, and moments worth remembering."
                theme="light"
                className="mb-0"
              />
            </div>

            {/* Right: Meta Info */}
            <div className="flex flex-col items-start lg:items-end gap-3 lg:gap-4 shrink-0">
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#898781] font-medium">
                Curated Works · 2024–2025
              </span>
              <div className="flex items-center gap-4 text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#898781]">
                <div className="flex items-center gap-1.5">
                  <LayoutGrid className="w-3.5 h-3.5 text-[#B49A72]" strokeWidth={1.5} />
                  <span>{categoryCount} Categories</span>
                </div>
                <span className="text-[#D4D0C8]">|</span>
                <span>{portfolioItems.length} Works</span>
              </div>
            </div>
          </div>

          {/* Animated Divider */}
          <div className="mt-8 sm:mt-10 md:mt-12 h-px bg-[#101010]/10 relative overflow-hidden">
            <div
              className={`absolute inset-y-0 left-0 bg-[#B49A72]/60 transition-all duration-[1400ms] ease-out delay-500 ${
                isVisible ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        </div>

        {/* ─── Filters + Count Bar ─── */}
        <div
          className={`relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <PortfolioFilters
            activeCategory={activeCategory}
            onSelectCategory={handleCategoryChange}
          />

          {/* Live Item Count */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span
              className={`inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-300 ${
                isFiltering
                  ? 'bg-[#B49A72] text-white scale-110'
                  : 'bg-[#101010]/5 text-[#898781] scale-100'
              }`}
            >
              {filteredItems.length}
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#898781] hidden sm:inline">
              {filteredItems.length === 1 ? 'Project' : 'Projects'}
            </span>
          </div>
        </div>

        {/* ─── Gallery Grid ─── */}
        <div
          className={`relative transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isFiltering ? 'opacity-60 scale-[0.995]' : 'opacity-100 scale-100'}`}
        >
          {filteredItems.length > 0 ? (
            <PortfolioGrid
              items={filteredItems}
              onOpenLightbox={handleOpenLightbox}
            />
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 sm:py-28 md:py-36 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#101010]/5 flex items-center justify-center mb-5 sm:mb-6">
                <Grid3X3 className="w-6 h-6 sm:w-8 sm:h-8 text-[#898781]" strokeWidth={1} />
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-[#101010] mb-2">
                No works in this category yet
              </h3>
              <p className="text-sm text-[#898781] max-w-sm mb-6">
                New projects are added regularly. Check back soon or explore all works.
              </p>
              <button
                type="button"
                onClick={() => handleCategoryChange('All Work')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-[#101010] border border-[#101010]/20 hover:border-[#B49A72] hover:text-[#B49A72] transition-all duration-300 cursor-pointer"
              >
                View All Work
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* ─── Bottom CTA ─── */}
        {filteredItems.length > 0 && (
          <div
            className={`mt-14 sm:mt-16 md:mt-20 lg:mt-24 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-[#101010]/8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-sm sm:text-base text-[#898781] font-light text-center sm:text-left max-w-md">
              Every frame tells a story. These are just a few of the moments I've had the privilege to capture.
            </p>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#FBFAF7] bg-[#101010] hover:bg-[#B49A72] transition-all duration-500 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-[#B49A72]/20 active:scale-[0.98] cursor-pointer shrink-0"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
            </button>
          </div>
        )}
      </Container>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <PortfolioLightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={handleCloseLightbox}
          onNavigate={handleNavigateLightbox}
        />
      )}
    </section>
  );
};