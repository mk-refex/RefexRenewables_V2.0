import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import ContactInfoSection from './components/ContactInfoSection';
import ContactFormSection from './components/ContactFormSection';
import MapSection from './components/MapSection';

export default function ContactPage() {
  return (
    <Layout>
      <HeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <MapSection />
    </Layout>
  );
}
