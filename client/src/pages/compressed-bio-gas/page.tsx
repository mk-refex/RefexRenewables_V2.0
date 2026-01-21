import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import InitiativesSection from './components/InitiativesSection';
import OfferingsSection from './components/OfferingsSection';
import ProjectsSection from './components/ProjectsSection';

export default function CompressedBioGasPage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InitiativesSection />
      <OfferingsSection />
      <ProjectsSection />
    </Layout>
  );
}
