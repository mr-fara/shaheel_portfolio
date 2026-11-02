import React from 'react';
import { Container } from '../ui/Container.tsx';

export const VisualInterlude: React.FC = () => {
  return (
    <section
      className="relative w-full py-32 sm:py-44 md:py-52 overflow-hidden bg-[#101010] flex items-center justify-center text-center"
      aria-label="Visual Interlude"
    >
      {/* Background Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/interlude_visual_light_1793288283082.jpg"
          alt="Highland morning mist and dawn light"
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-75 contrast-105"
        />
        {/* Cinematic dark scrim for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/40 to-[#101010]" />
      </div>

      {/* Overlay Typography */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-[#B49A72] mb-4">
          AN ARTISTIC PERSPECTIVE
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FFFFFF] tracking-tight leading-[1.1] mb-6 text-balance">
          Light. Emotion. Perspective.
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-[#F5F2EC]/85 font-light tracking-wide max-w-xl mx-auto text-balance">
          “Finding meaning in the moments between moments.”
        </p>
      </div>
    </section>
  );
};
