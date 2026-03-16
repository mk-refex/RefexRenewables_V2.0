import SectionHeading from "../../../components/common/SectionHeading";
import FadeInUp from "../../../components/common/FadeInUp";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInUp delay={0.1}>
            <div className="relative">
              <img
                src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/bio-dhanic-img.png"
                alt="BioDhanic Product"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
                <img
                  src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/bio-dhanic-img-small.png"
                  alt="BioDhanic 40kg"
                  className="w-24 h-24 object-contain mb-3"
                />
                <p className="text-sm font-semibold text-gray-800">
                  40 kg of nature's goodness for healthier harvests!
                </p>
              </div>
            </div>
          </FadeInUp>

          <div>
            <FadeInUp delay={0}>
              <SectionHeading
                badgeText="REFEX"
                text="BioDhanic"
                showWatermark={false}
              />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-3">
                The Wealth behind every Bountiful Harvest
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Refex BioDhanic is a premium fermented organic manure
                  developed under Refex Renewables, reflecting our commitment to
                  clean energy and sustainable agriculture.
                </p>
                <p>
                  Crafted from the by-products of our Compressed Biogas (CBG)
                  plants, BioDhanic is a soil enhancer derived from agricultural
                  and organic waste, designed to boost soil productivity, enrich
                  fertility, and support environmental sustainability.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
