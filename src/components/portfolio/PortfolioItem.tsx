import React from 'react';
import { Expand, MapPin } from 'lucide-react';
import { PortfolioItem as PortfolioItemType } from '../../data/portfolio.ts';

interface PortfolioItemProps {
  item: PortfolioItemType;
  onClick: () => void;
  className?: string;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  item,
  onClick,
  className = ''
}) => {
  // Determine aspect ratio class
  const aspectClass = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
    cinematic: 'aspect-[16/9]'
  }[item.aspect] || 'aspect-[4/3]';

  return (
    <article
      onClick={onClick}
      className={`group relative overflow-hidden bg-[#E8E4DC] cursor-pointer focus-within:ring-2 focus-within:ring-[#B49A72] ${className}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View photo: ${item.title}`}
    >
      <div className={`w-full ${aspectClass} overflow-hidden relative`}>
        {/* Photograph */}
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/90 via-[#101010]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6" />

        {/* Top Right Expand Icon on Hover */}
        <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#101010]/70 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          <Expand className="w-4 h-4 text-[#B49A72]" />
        </div>

        {/* Bottom Details Revealed on Hover */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#B49A72] mb-1">
            <span>{item.category}</span>
            {item.year && (
              <>
                <span className="text-white/40">·</span>
                <span className="text-white/70 font-mono tabular-nums">{item.year}</span>
              </>
            )}
          </div>

          <h3 className="font-serif text-2xl font-light leading-snug text-[#F5F2EC]">
            {item.title}
          </h3>

          {item.location && (
            <div className="flex items-center gap-1.5 text-xs text-[#898781] mt-1">
              <MapPin className="w-3 h-3 text-[#B49A72]" />
              <span>{item.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Subtle Caption bar underneath for mobile / always-visible clarity */}
      <div className="p-4 sm:p-5 bg-white border-t border-[#DCD8D0]/60 flex items-center justify-between sm:hidden">
        <div>
          <span className="text-[10px] tracking-widest uppercase text-[#898781] block">
            {item.category}
          </span>
          <h4 className="font-serif text-lg text-[#101010]">{item.title}</h4>
        </div>
        <span className="text-xs text-[#B49A72] uppercase tracking-wider font-medium">View</span>
      </div>
    </article>
  );
};
