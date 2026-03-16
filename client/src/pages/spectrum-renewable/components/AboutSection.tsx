import SectionHeading from "../../../components/common/SectionHeading";
import FadeInUp from "../../../components/common/FadeInUp";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInUp delay={0.1}>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/SREPL-img.png"
                alt="Spectrum Renewable Energy"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </FadeInUp>
          <div>
            <FadeInUp delay={0}>
              {/* <SectionHeading
                badgeText="Spectrum Renewable Energy Private Limited"
                // text="SPECTRUM RENEWABLE"
                showWatermark={false}
              /> */}
              <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-3">
                Spectrum Renewable Energy Private Limited
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Spectrum Renewable Energy Pvt. Ltd. (SREPL), located at
                  Warananagar, Kolhapur, is engaged in the generation of
                  Compressed Biogas (CBG) and organic manure from press mud and
                  other biodegradable wastes.
                </p>
                <p>
                  A subsidiary of Refex Sustainability Solutions Private Limited
                  (SREPL) is a leading bio-energy company committed to providing
                  innovative renewable energy solutions for organic waste
                  management and sustainable agriculture.
                </p>
                <p>
                  The company operates an integrated, end-to-end value chain
                  encompassing project development, plant design, construction,
                  operations and maintenance, and technology deployment. These
                  internal capabilities enable SREPL to efficiently convert
                  organic waste into Bio-CNG and high-quality organic
                  manure/soil conditioners, supporting agricultural productivity
                  and environmental sustainability.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
