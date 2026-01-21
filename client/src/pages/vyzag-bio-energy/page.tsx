import Layout from '../../components/layout/Layout';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { OutputsSection } from './components/OutputsSection';
import { HighlightsSection } from './components/HighlightsSection';
import { LFOMSection } from './components/LFOMSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';

export default function VyzagBioEnergyPage() {
  return (
    <Layout>
      <div className="vyzag-bio-energy-page">
        <HeroSection />
        <AboutSection />
        <OutputsSection />
        <HighlightsSection />
        <LFOMSection />
        <GallerySection />
        <ContactSection />
      </div>
    </Layout>
  );
}
