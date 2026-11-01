import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container } from '../ui/Container.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { photographyServices } from '../../data/services.ts';
import { ArrowUpRight, Check, ChevronDown, Camera, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    photographyServices[0]?.id ?? ''
  );
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const activeService =
    photographyServices.find((s) => s.id === selectedServiceId) ??
    photographyServices[0];

  // ── Scroll reveal ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Image crossfade ──
  useEffect(() => {
    setImageLoaded(false);
    const t = setTimeout(() => setImageLoaded(true), 50);
    return () => clearTimeout(t);
  }, [selectedServiceId]);

  const handleInquireService = useCallback(
    (serviceName: string) => {
      onSelectServiceForInquiry?.(serviceName);
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    },
    [onSelectServiceForInquiry]
  );

  const handleSelectService = useCallback((id: string) => {
    setSelectedServiceId((prev) => (prev === id ? id : id));
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-[#F5F2EC] text-[#101010] border-t border-[#DCD8D0]/50 overflow-hidden"
      aria-label="Photography Services"
    >
      {/* ── Background Textures ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #101010 0.8px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Warm radial glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#B49A72]/[0.04] blur-[120px]" />
      </div>

      {/* ── Decorative Section Number ── */}
      <div
        className={`absolute top-12 sm:top-16 md:top-20 right-4 sm:right-8 lg:right-16 text-[7rem] sm:text-[9rem] md:text-[13rem] lg:text-[17rem] font-serif font-light text-[#101010]/[0.025] leading-none select-none pointer-events-none transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        aria-hidden="true"
      >
        03
      </div>

      <Container size="wide">
        {/* ═══════════ SECTION HEADER ═══════════ */}
        <div
          className={`relative mb-12 sm:mb-14 md:mb-16 lg:mb-20 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-end lg:justify-between">
            {/* Left: Heading */}
            <div className="max-w-2xl lg:max-w-3xl">
              <SectionHeading
                eyebrow="WHAT I CAPTURE"
                heading="Different Perspectives. One Creative Vision."
                subheading="Tailored photographic commissions guided by natural light, thoughtful composition, and emotional honesty."
                theme="light"
                className="mb-0"
              />
            </div>

            {/* Right: CTA + Stats */}
            <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
              <button
                type="button"
                onClick={() => handleInquireService('General Inquiry')}
                className="group hidden sm:inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#F5F2EC] bg-[#101010] hover:bg-[#B49A72] transition-all duration-500 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-[#B49A72]/15 active:scale-[0.98] cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
              </button>

              <div className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#898781]">
                <Camera className="w-3.5 h-3.5 text-[#B49A72]" strokeWidth={1.5} />
                <span>{photographyServices.length} Services</span>
                <span className="text-[#D4D0C8]">·</span>
                <span>Tailored Approach</span>
              </div>
            </div>
          </div>

          {/* Animated Divider */}
          <div className="mt-8 sm:mt-10 md:mt-12 h-px bg-[#101010]/8 relative overflow-hidden">
            <div
              className={`absolute inset-y-0 left-0 bg-[#B49A72]/50 transition-all duration-[1400ms] ease-out delay-500 ${
                isVisible ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        </div>

        {/* ═══════════ EDITORIAL SPLIT LAYOUT ═══════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-start">
          {/* ── LEFT: Service Accordion Navigation ── */}
          <div
            className={`lg:col-span-7 xl:col-span-7 flex flex-col transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Column Header (desktop) */}
            <div className="hidden lg:flex items-center justify-between mb-6 pb-4 border-b border-[#101010]/8">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#898781] font-medium">
                Select a Service
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#B49A72] font-medium">
                {activeService?.number ?? '01'} / {String(photographyServices.length).padStart(2, '0')}
              </span>
            </div>

            {/* Service Items */}
            <div className="flex flex-col">
              {photographyServices.map((service, index) => {
                const isSelected = service.id === selectedServiceId;

                return (
                  <div
                    key={service.id}
                    className={`group relative transition-all duration-500 ${
                      index !== photographyServices.length - 1
                        ? 'border-b border-[#DCD8D0]/70'
                        : ''
                    }`}
                  >
                    {/* Main Clickable Row */}
                    <button
                      type="button"
                      onClick={() => handleSelectService(service.id)}
                      className={`w-full text-left py-5 sm:py-6 lg:py-7 px-3 sm:px-4 lg:px-5 transition-all duration-400 cursor-pointer ${
                        isSelected
                          ? 'bg-white/50 lg:bg-white/60'
                          : 'hover:bg-white/25'
                      }`}
                      aria-expanded={isSelected}
                      aria-controls={`service-detail-${service.id}`}
                    >
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="flex items-start gap-3 sm:gap-4 lg:gap-5 min-w-0">
                          {/* Number */}
                          <span
                            className={`text-[11px] sm:text-xs font-mono tabular-nums tracking-widest pt-1 shrink-0 transition-colors duration-300 ${
                              isSelected
                                ? 'text-[#B49A72]'
                                : 'text-[#C4C0B8] group-hover:text-[#898781]'
                            }`}
                          >
                            {service.number}
                          </span>

                          {/* Gold accent bar */}
                          <div
                            className={`hidden sm:block w-[2px] self-stretch rounded-full transition-all duration-500 shrink-0 ${
                              isSelected
                                ? 'bg-[#B49A72] opacity-100'
                                : 'bg-[#DCD8D0] opacity-0 group-hover:opacity-50'
                            }`}
                          />

                          {/* Title + Tagline */}
                          <div className="min-w-0">
                            <h3
                              className={`font-serif text-xl sm:text-2xl lg:text-3xl font-light leading-tight transition-colors duration-300 ${
                                isSelected
                                  ? 'text-[#101010]'
                                  : 'text-[#504E49] group-hover:text-[#101010]'
                              }`}
                            >
                              {service.title}
                            </h3>
                            <p
                              className={`text-[11px] sm:text-xs lg:text-sm text-[#898781] font-light mt-1 sm:mt-1.5 max-w-lg leading-relaxed transition-all duration-300 ${
                                isSelected ? 'opacity-100' : 'opacity-60 group-hover:opacity-90'
                              }`}
                            >
                              {service.tagline}
                            </p>
                          </div>
                        </div>

                        {/* Right Controls */}
                        <div className="flex items-center gap-2 shrink-0 pt-1">
                          {/* Inquire Arrow (desktop) */}
                          <span
                            className={`hidden sm:inline-flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-full border transition-all duration-300 ${
                              isSelected
                                ? 'border-[#B49A72] text-[#B49A72] group-hover:bg-[#B49A72] group-hover:text-white'
                                : 'border-[#DCD8D0] text-[#898781] group-hover:border-[#101010] group-hover:text-[#101010]'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleInquireService(service.formValue);
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label={`Inquire about ${service.title}`}
                          >
                            <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                          </span>

                          {/* Chevron (mobile accordion) */}
                          <ChevronDown
                            className={`w-4 h-4 lg:hidden transition-transform duration-300 ${
                              isSelected
                                ? 'rotate-180 text-[#B49A72]'
                                : 'text-[#898781]'
                            }`}
                          />
                        </div>
                      </div>
                    </button>

                    {/* ── Mobile Expanded Content ── */}
                    <div
                      id={`service-detail-${service.id}`}
                      className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                        isSelected ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-3 sm:px-4 pb-6 sm:pb-8 space-y-4 sm:space-y-5">
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#101010] rounded-sm">
                          <img
                            src={service.image}
                            alt={service.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/40 to-transparent" />
                          <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-[#101010]/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-sm">
                            <Sparkles className="w-3 h-3 text-[#B49A72]" />
                            <span className="text-[10px] tracking-widest uppercase">
                              Service {service.number}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#504E49] leading-relaxed font-light">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2">
                          <p className="text-[10px] tracking-[0.2em] uppercase text-[#898781] font-medium">
                            What's Included
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-[11px] sm:text-xs text-[#3E3C37]"
                              >
                                <Check className="w-3.5 h-3.5 text-[#B49A72] shrink-0" strokeWidth={2} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Mobile CTA */}
                        <button
                          type="button"
                          onClick={() => handleInquireService(service.formValue)}
                          className="group w-full inline-flex items-center justify-center gap-2.5 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#F5F2EC] bg-[#101010] hover:bg-[#B49A72] transition-all duration-400 active:scale-[0.98] cursor-pointer"
                        >
                          <span>Inquire for {service.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile General CTA */}
            <div
              className={`sm:hidden mt-6 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                type="button"
                onClick={() => handleInquireService('General Inquiry')}
                className="group w-full inline-flex items-center justify-center gap-2.5 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#101010] border border-[#101010]/20 hover:border-[#B49A72] hover:text-[#B49A72] transition-all duration-300 cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>
          </div>

          {/* ── RIGHT: Sticky Preview Panel (Desktop Only) ── */}
          <div
            ref={previewRef}
            className={`hidden lg:block lg:col-span-5 xl:col-span-5 sticky top-24 xl:top-28 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white border border-[#E8E4DC] shadow-xl shadow-black/[0.04] overflow-hidden">
              {/* Dynamic Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1A1A1A]">
                <img
                  key={activeService?.id}
                  src={activeService?.image}
                  alt={activeService?.alt}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    imageLoaded
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/50 via-transparent to-transparent" />

                {/* Service Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#101010]/75 backdrop-blur-md text-white px-3.5 py-1.5 rounded-sm">
                  <Sparkles className="w-3 h-3 text-[#B49A72]" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
                    Service {activeService?.number}
                  </span>
                </div>

                {/* Image counter */}
                <div className="absolute bottom-4 right-4 text-[10px] tracking-widest text-white/70 font-mono">
                  {activeService?.number} / {String(photographyServices.length).padStart(2, '0')}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 xl:p-8 space-y-5 xl:space-y-6">
                {/* Title */}
                <div>
                  <h4 className="font-serif text-2xl xl:text-3xl font-light text-[#101010] leading-tight">
                    {activeService?.title}
                  </h4>
                  <div className="mt-2 h-px w-12 bg-[#B49A72]/60" />
                </div>

                {/* Description */}
                <p className="text-sm text-[#504E49] leading-relaxed font-light">
                  {activeService?.description}
                </p>

                {/* Features */}
                <div className="pt-5 border-t border-[#E8E4DC]">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#898781] font-medium mb-3">
                    What's Included
                  </p>
                  <ul className="space-y-2.5">
                    {activeService?.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E3C37]"
                      >
                        <Check
                          className="w-4 h-4 text-[#B49A72] shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleInquireService(activeService?.formValue ?? '')
                    }
                    className="group w-full inline-flex items-center justify-center gap-3 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0A0A0A] bg-[#B49A72] hover:bg-[#101010] hover:text-[#F5F2EC] transition-all duration-500 shadow-md shadow-black/10 hover:shadow-lg active:scale-[0.98] cursor-pointer"
                  >
                    <span>Inquire for {activeService?.title}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Note */}
            <p className="mt-4 text-center text-[10px] tracking-[0.15em] uppercase text-[#898781] font-light">
              Every project is custom-tailored to your vision
            </p>
          </div>
        </div>

        {/* ═══════════ BOTTOM PROCESS STRIP ═══════════ */}
        <div
          className={`mt-16 sm:mt-20 md:mt-24 lg:mt-28 pt-8 sm:pt-10 border-t border-[#101010]/8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {[
              { step: '01', label: 'Consultation', desc: 'Share your vision' },
              { step: '02', label: 'Planning', desc: 'Tailored approach' },
              { step: '03', label: 'The Shoot', desc: 'Natural & authentic' },
              { step: '04', label: 'Delivery', desc: 'Curated gallery' },
            ].map((item, i) => (
              <div key={i} className="group text-center md:text-left">
                <span className="text-[10px] font-mono tracking-widest text-[#B49A72]">
                  {item.step}
                </span>
                <h5 className="font-serif text-base sm:text-lg text-[#101010] mt-1 font-light">
                  {item.label}
                </h5>
                <p className="text-[11px] sm:text-xs text-[#898781] mt-0.5 font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};