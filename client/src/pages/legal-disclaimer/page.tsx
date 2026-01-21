import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function LegalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ContentSection />
      <Footer />
    </div>
  );
}
