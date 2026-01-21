
import { memo } from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';

const PrivacyPolicyPage = memo(() => {
  return (
    <Layout>
      <HeroSection />
      <ContentSection />
    </Layout>
  );
});

PrivacyPolicyPage.displayName = 'PrivacyPolicyPage';

export default PrivacyPolicyPage;
