/**
 * MAHAKTECH HOMEPAGE
 * The complete cinematic narrative experience
 * 8 sections: Hero, Services, Portfolio, Products, Statistics, Founder, Timeline, Contact
 * Section 10 from PDR
 */

import HeroSection from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/Services';
import PortfolioSection from '@/components/sections/Portfolio';
import ProductMarketplaceSection from '@/components/sections/ProductMarketplace';
import StatisticsSection from '@/components/sections/Statistics';
import FounderVisionSection from '@/components/sections/FounderVision';
import TimelineSection from '@/components/sections/Timeline';
import ContactSection from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero Experience */}
      <HeroSection />

      {/* Section 2: Services Showcase */}
      <ServicesSection />

      {/* Section 3: Portfolio Showcase */}
      <PortfolioSection />

      {/* Section 4: Product Marketplace */}
      <ProductMarketplaceSection />

      {/* Section 5: Company Statistics */}
      <StatisticsSection />

      {/* Section 6: Founder Vision */}
      <FounderVisionSection />

      {/* Section 7: Company Timeline */}
      <TimelineSection />

      {/* Section 8: Contact Experience */}
      <ContactSection />
    </>
  );
}
