import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FacilitySection from './components/FacilitySection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

export default function SpectrumRenewablePage() {
  return (
    <Layout>
      <div className="spectrum-renewable-page">
        <HeroSection />
        <AboutSection />
        <FacilitySection />
        <GallerySection />
        <ContactSection />
      </div>
    </Layout>
  );
}
