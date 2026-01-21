
import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import VisionMissionSection from './components/VisionMissionSection';
import CoreValuesSection from './components/CoreValuesSection';
import JourneySection from './components/JourneySection';
import BoardSection from './components/BoardSection';
import SeniorManagementSection from './components/SeniorManagementSection';
import CommitteesSection from './components/CommitteesSection';

const AboutPage = () => {
  return (
    <Layout>
      <HeroSection />
      <OverviewSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <JourneySection />
      <BoardSection />
      <SeniorManagementSection />
      <CommitteesSection />
    </Layout>
  );
};

export default AboutPage;
