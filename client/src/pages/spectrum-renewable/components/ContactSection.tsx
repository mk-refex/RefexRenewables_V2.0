import { Link } from "react-router-dom";
import SectionHeading from "../../../components/common/SectionHeading";
import FadeInUp from "../../../components/common/FadeInUp";

export default function ContactSection() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/spectrum-bg-scaled.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 container mx-auto px-4 lg:px-[110px]">
        <FadeInUp delay={0} className="max-w-3xl">
          <SectionHeading
            badgeText="CONTACT"
            text="Information"
            showWatermark={false}
          />
          {/* <h2 className="text-4xl font-bold text-white mb-6 mt-3">
            Contact Information
          </h2> */}
          <div className="text-white text-lg space-y-2 mb-8">
            <p className="font-semibold">
              Spectrum Renewable Energy Private Limited
            </p>
            <p>Gat.No.1165, Warananagar, AP-Kodoli</p>
            <p>Panhala -Taluka, Kolhapur Dist</p>
            <p>PIN – 416113, Maharashtra.</p>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Contact Us
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
