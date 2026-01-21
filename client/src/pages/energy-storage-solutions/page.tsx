import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import StorageSection from './components/StorageSection';
import MicroGridSection from './components/MicroGridSection';
import ProjectsSection from './components/ProjectsSection';

export default function EnergyStorageSolutionsPage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <StorageSection />
      <MicroGridSection />
      <ProjectsSection />
    </Layout>
  );
}
