/**
 * SHAHEEL — Premium Photography Portfolio
 * Stories, Framed in Light.
 */

import { useState } from 'react';
import { Navbar } from './components/layout/Navbar.tsx';
import { HeroSection } from './components/sections/HeroSection.tsx';
import { PortfolioSection } from './components/sections/PortfolioSection.tsx';
import { FeaturedStory } from './components/sections/FeaturedStory.tsx';
import { AboutSection } from './components/sections/AboutSection.tsx';
import { ServicesSection } from './components/sections/ServicesSection.tsx';
import { VisualInterlude } from './components/sections/VisualInterlude.tsx';
import { ContactSection } from './components/sections/ContactSection.tsx';
import { SocialGallery } from './components/sections/SocialGallery.tsx';
import { Footer } from './components/layout/Footer.tsx';

export default function App() {
  const [inquiryService, setInquiryService] = useState<string>('Portraits');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setInquiryService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F2EC] selection:bg-[#B49A72] selection:text-[#101010]">
      {/* 1. Navigation */}
      <Navbar onContactClick={scrollToContact} />

      <main>
        {/* 2. Cinematic Hero */}
        <HeroSection
          onExploreClick={scrollToPortfolio}
          onWorkWithMeClick={scrollToContact}
        />

        {/* 3. Selected Photography Portfolio */}
        <PortfolioSection />

        {/* 4. Featured Photographic Story */}
        <FeaturedStory />

        {/* 5. About Shaheel */}
        <AboutSection
          onExploreWork={scrollToPortfolio}
          onContactClick={scrollToContact}
        />

        {/* 6. Photography Categories & Services */}
        <ServicesSection
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* 7. Cinematic Visual Interlude */}
        <VisualInterlude />

        {/* 8 & 9. Contact & Booking Inquiry */}
        <ContactSection initialService={inquiryService} />

        {/* 10. Social Photography Gallery */}
        <SocialGallery />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
