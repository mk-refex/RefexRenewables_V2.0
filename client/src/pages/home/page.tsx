import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BusinessSection from './components/BusinessSection';
import StrengthsSection from './components/StrengthsSection';
import PresenceSection from './components/PresenceSection';
import AwardsSection from './components/AwardsSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <BusinessSection />
      <StrengthsSection />
      <PresenceSection />
      <AwardsSection />
    </Layout>
  );
};

export default Home;
