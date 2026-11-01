import React from 'react';
import { PortfolioCategory, portfolioItems } from '../../data/portfolio.ts';

interface PortfolioFiltersProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  // Available base categories
  const allCategories: Array<'All Work' | PortfolioCategory> = [
    'All Work',
    'Portraits',
    'Weddings',
    'Fashion',
    'Events',
    'Lifestyle',
    'Travel',
    'Commercial'
  ];

  // Calculate project counts and filter out empty categories
  const categoryCounts = allCategories.reduce<Record<string, number>>((acc, cat) => {
    if (cat === 'All Work') {
      acc[cat] = portfolioItems.length;
    } else {
      acc[cat] = portfolioItems.filter((item) => item.category === cat).length;
    }
    return acc;
  }, {});

  // Only display categories that actually contain projects
  const activeFilterOptions = allCategories.filter((cat) => (categoryCounts[cat] || 0) > 0);

  return (
    <div
      className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 mb-12 scrollbar-none no-scrollbar"
      role="tablist"
      aria-label="Portfolio Category Filters"
    >
      {activeFilterOptions.map((cat) => {
        const isSelected = activeCategory === cat;
        const count = categoryCounts[cat];

        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 text-xs font-medium tracking-[0.12em] uppercase transition-all duration-200 whitespace-nowrap shrink-0 border cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#101010] ${
              isSelected
                ? 'bg-[#101010] text-[#F5F2EC] border-[#101010] shadow-sm'
                : 'bg-transparent text-[#65635D] border-transparent hover:text-[#101010] hover:border-[#DCD8D0]'
            }`}
          >
            <span>{cat}</span>
            <span
              className={`ml-2 text-[10px] tabular-nums font-mono ${
                isSelected ? 'text-[#B49A72]' : 'text-[#898781]'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
