import Layout from "../../components/layout/Layout";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import OfferingsSection from "./components/OfferingsSection";
import FeaturedProjects from "./components/FeaturedProjects";

export default function SolarEnergyPage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OfferingsSection />
      <FeaturedProjects />
    </Layout>
  );
}
