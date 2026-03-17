import { memo } from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';

const TermsConditionsPage = memo(() => {
  return (
    <Layout>
      <HeroSection />
      <ContentSection />
    </Layout>
  );
});

TermsConditionsPage.displayName = 'TermsConditionsPage';

export default TermsConditionsPage;
