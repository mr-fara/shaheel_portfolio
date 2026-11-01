import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar } from 'lucide-react';
import { PortfolioItem } from '../../data/portfolio.ts';

interface PortfolioLightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#101010]/98 backdrop-blur-md p-4 sm:p-6 md:p-10 select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`Photograph: ${currentItem.title}`}
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 bg-gradient-to-b from-[#101010] to-transparent">
        <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#898781]">
          <span className="text-[#B49A72] font-semibold">{currentItem.category}</span>
          <span>·</span>
          <span className="font-mono tabular-nums">
            {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-[#F5F2EC] hover:text-[#B49A72] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B49A72]"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Display with Navigation Chevrons */}
      <div className="relative w-full max-w-6xl max-h-[82vh] flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
        {/* Previous Button */}
        {items.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 md:-left-12 z-30 p-3 text-white/70 hover:text-white bg-[#191919]/60 hover:bg-[#191919] border border-[#2A2A2A] rounded-full transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B49A72]"
            aria-label="Previous photograph (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Center Photograph Container */}
        <div className="relative max-h-[70vh] flex items-center justify-center overflow-hidden">
          <img
            src={currentItem.image}
            alt={currentItem.alt}
            className="max-h-[68vh] max-w-full object-contain shadow-2xl transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Next Button */}
        {items.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 md:-right-12 z-30 p-3 text-white/70 hover:text-white bg-[#191919]/60 hover:bg-[#191919] border border-[#2A2A2A] rounded-full transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B49A72]"
            aria-label="Next photograph (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Photographic Metadata Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 py-5 bg-gradient-to-t from-[#101010] to-transparent border-t border-[#242424]/60">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-light text-[#F5F2EC]">
              {currentItem.title}
            </h3>
            {currentItem.description && (
              <p className="text-xs sm:text-sm text-[#898781] font-light max-w-xl mt-1">
                {currentItem.description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#898781]">
            {currentItem.location && (
              <div className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B49A72]" />
                <span>{currentItem.location}</span>
              </div>
            )}

            {currentItem.year && (
              <div className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#B49A72]" />
                <span className="font-mono tabular-nums">{currentItem.year}</span>
              </div>
            )}

            {currentItem.exif && (
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono tabular-nums bg-[#191919] px-2.5 py-1 border border-[#2A2A2A] text-[#B49A72]">
                <Camera className="w-3 h-3 text-[#B49A72]" />
                <span>
                  {currentItem.exif.camera ? `${currentItem.exif.camera} · ` : ''}
                  {currentItem.exif.lens ? `${currentItem.exif.lens} · ` : ''}
                  {currentItem.exif.aperture} · {currentItem.exif.shutter} · ISO {currentItem.exif.iso}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
