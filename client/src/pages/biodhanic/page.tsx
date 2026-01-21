
import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import WhyUseSection from './components/WhyUseSection';
import LaunchSection from './components/LaunchSection';
import CTASection from './components/CTASection';

export default function BioDhanicPage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <WhyUseSection />
      <LaunchSection />
      <CTASection />
    </Layout>
  );
}
