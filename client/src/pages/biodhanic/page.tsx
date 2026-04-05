import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import WhyUseSection from './components/WhyUseSection';
import LaunchSection from './components/LaunchSection';
import CTASection from './components/CTASection';
import BioDhanicDistributorModal from './components/BioDhanicDistributorModal';

export default function BioDhanicPage() {
  const [distributorOpen, setDistributorOpen] = useState(false);

  return (
    <Layout>
      <HeroSection onOpenDistributor={() => setDistributorOpen(true)} />
      <AboutSection />
      <BenefitsSection />
      <WhyUseSection />
      <LaunchSection />
      <CTASection onOpenDistributor={() => setDistributorOpen(true)} />
      <BioDhanicDistributorModal
        open={distributorOpen}
        onClose={() => setDistributorOpen(false)}
      />
    </Layout>
  );
}
