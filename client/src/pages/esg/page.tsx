import Layout from '../../components/layout/Layout';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { PoliciesSection } from './components/PoliciesSection';
import { AccordionSection } from './components/AccordionSection';
import { ReportsSection } from './components/ReportsSection';
import { SDGSection } from './components/SDGSection';
import { ValuesSection } from './components/ValuesSection';

export default function ESGPage() {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <PoliciesSection />
      <AccordionSection />
      <ReportsSection />
      <SDGSection />
      <ValuesSection />
    </Layout>
  );
}
