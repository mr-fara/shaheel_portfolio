import React, { useState } from 'react';
import { Container } from '../ui/Container.tsx';
import { featuredStory } from '../../data/portfolio.ts';
import { Camera, MapPin, Calendar, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export const FeaturedStory: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="story"
      className="py-24 md:py-32 bg-[#F5F2EC] text-[#101010] border-t border-[#DCD8D0]/60 relative overflow-hidden"
      aria-label="Featured Story"
    >
      <Container size="wide">
        {/* Editorial Eyebrow & Lead */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-[#898781] mb-3">
            {featuredStory.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#101010] tracking-tight leading-[1.15] mb-4 text-balance">
            {featuredStory.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#504e49] font-light leading-relaxed text-balance">
            “{featuredStory.subheading}”
          </p>
        </div>

        {/* Editorial Split: Visual Showcase & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Visual Frame */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden bg-[#101010] shadow-xl group">
              <img
                src={featuredStory.image}
                alt={featuredStory.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] object-cover object-center transition-transform duration-700 group-hover:scale-102"
              />
              {/* Subtle caption stripe */}
              <div className="p-4 bg-[#101010] text-[#F5F2EC] flex flex-wrap items-center justify-between gap-3 text-xs tracking-wider">
                <div className="flex items-center gap-2 text-[#B49A72]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{featuredStory.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[#898781] font-mono tabular-nums">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{featuredStory.date}</span>
                </div>
              </div>
            </div>

            {/* Technical EXIF lead-in */}
            <div className="flex items-center gap-2 text-xs text-[#898781] font-mono tabular-nums mt-3 px-1">
              <Camera className="w-3.5 h-3.5 text-[#B49A72]" />
              <span>{featuredStory.cameraNotes}</span>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Lead Narrative */}
            <div className="space-y-4 text-sm sm:text-base text-[#2E2C28] font-light leading-relaxed">
              <p>{featuredStory.storyNarrative[0]}</p>
              <p>{featuredStory.storyNarrative[1]}</p>

              {isExpanded && (
                <div className="space-y-4 pt-2 border-t border-[#DCD8D0]/80 animate-fadeIn">
                  <p>{featuredStory.storyNarrative[2]}</p>
                  <blockquote className="my-6 pl-4 border-l-2 border-[#B49A72] italic text-[#101010] font-serif text-lg leading-snug">
                    {featuredStory.quote}
                  </blockquote>
                  <p className="text-xs uppercase tracking-widest text-[#898781]">
                    Excerpt from Shaheel’s Field Journal · Iceland Expedition
                  </p>
                </div>
              )}
            </div>

            {/* CTA to toggle narrative */}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#101010] hover:text-[#B49A72] transition-colors py-2 border-b border-[#101010] hover:border-[#B49A72] cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#B49A72]" />
                <span>{isExpanded ? 'CLOSE STORY' : 'EXPLORE THE STORY'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
