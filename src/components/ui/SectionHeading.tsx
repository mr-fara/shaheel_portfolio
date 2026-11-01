import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  heading,
  subheading,
  align = 'left',
  theme = 'dark',
  className = ''
}) => {
  const isLight = theme === 'light';

  return (
    <div
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-3 ${
            isLight ? 'text-[#898781]' : 'text-[#B49A72]'
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] mb-4 text-balance ${
          isLight ? 'text-[#101010]' : 'text-[#F5F2EC]'
        }`}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={`text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl text-balance ${
            align === 'center' ? 'mx-auto' : ''
          } ${isLight ? 'text-[#504e49]' : 'text-[#898781]'}`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
};
