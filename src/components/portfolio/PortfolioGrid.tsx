import React from 'react';
import { PortfolioItem as PortfolioItemType } from '../../data/portfolio.ts';
import { PortfolioItem } from './PortfolioItem.tsx';

interface PortfolioGridProps {
  items: PortfolioItemType[];
  onOpenLightbox: (index: number) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  items,
  onOpenLightbox
}) => {
  if (items.length === 0) {
    return (
      <div className="py-20 text-center text-[#898781]">
        <p className="font-serif text-2xl font-light text-[#101010]">No photographs in this collection.</p>
        <p className="text-xs uppercase tracking-widest mt-2">Check back soon for new work</p>
      </div>
    );
  }

  // When filtered to fewer items (e.g. 1-2 items), use a balanced 2-column or 3-column layout
  if (items.length <= 3) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, idx) => (
          <PortfolioItem
            key={item.id}
            item={item}
            onClick={() => onOpenLightbox(idx)}
            className="shadow-sm"
          />
        ))}
      </div>
    );
  }

  // Asymmetric Art-Directed Editorial Grid
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
      {items.map((item, idx) => {
        // Art-directed responsive span distribution
        let spanClasses = 'md:col-span-6';

        if (idx === 0) {
          // Large vertical portrait or feature
          spanClasses = 'md:col-span-5 md:row-span-2';
        } else if (idx === 1) {
          // Landscape companion
          spanClasses = 'md:col-span-7';
        } else if (idx === 2) {
          // Editorial fashion or square
          spanClasses = 'md:col-span-7';
        } else if (idx === 3) {
          // Wide cinematic frame
          spanClasses = 'md:col-span-12';
        } else if (idx === 4) {
          // Offset left
          spanClasses = 'md:col-span-4';
        } else if (idx === 5) {
          // Offset center
          spanClasses = 'md:col-span-4';
        } else if (idx === 6) {
          // Offset right
          spanClasses = 'md:col-span-4';
        } else if (idx === 7) {
          // Full width landscape
          spanClasses = 'md:col-span-12';
        }

        return (
          <div key={item.id} className={`${spanClasses}`}>
            <PortfolioItem
              item={item}
              onClick={() => onOpenLightbox(idx)}
              className="shadow-sm hover:shadow-md transition-shadow"
            />
          </div>
        );
      })}
    </div>
  );
};
