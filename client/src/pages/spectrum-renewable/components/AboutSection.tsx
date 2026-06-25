import FadeInUp from "@/components/common/FadeInUp";

const FADE_THRESHOLD = 0.98;

export default function AboutSection() {
  return (
    <section className="bg-[#F6F7F9] py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="mx-auto w-full max-w-md md:mx-0 md:max-w-none">
            <div className="overflow-hidden rounded-lg shadow-sm md:max-w-lg">
              <div className="aspect-[4/3] w-full sm:aspect-[5/4]">
                <img
                  src="/wp-content/uploads/2025/10/SREPL-img.png"
                  alt="Spectrum Renewable Energy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 lg:mb-5">
              {/* <FadeInUp delay={0.2} threshold={FADE_THRESHOLD}>
                <h2
                  className={`${sectionMainHeadingClassName} text-gray-900 md:mt-0`}
                >
                  Spectrum Renewable Energy Private Limited
                </h2>
              </FadeInUp> */}
            </div>
            <FadeInUp delay={0.15} threshold={FADE_THRESHOLD}>
              <div className="space-y-4 rounded-lg bg-white p-4 text-sm leading-relaxed text-[#74787C] shadow-sm sm:p-6 sm:text-base lg:p-7">
                <p>
                  <b>Refex CBG Kolhapur Private Limited</b>, located at
                  Warananagar, Kolhapur, is engaged in the generation of
                  Compressed Biogas (CBG) and organic manure from press mud and
                  other biodegradable wastes.
                </p>
                <p>
                  Refex CBG Kolhapur Private Limited, a subsidiary of Refex
                  Sustainability Solutions Limited (RSSL) and a step-down
                  subsidiary of Refex Renewables & Infrastructure Limited
                  (RRIL), is a leading bio-energy company committed to providing
                  innovative renewable energy solutions for organic waste
                  management and sustainable agriculture.
                </p>
                {/* <p>
                  The company operates an integrated, end-to-end value chain
                  encompassing project development, plant design, construction,
                  operations and maintenance, and technology deployment. These
                  internal capabilities enable RSREPL to efficiently convert
                  organic waste into Bio-CNG and high-quality organic
                  manure/soil conditioners, supporting agricultural productivity
                  and environmental sustainability.
                </p> */}
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
