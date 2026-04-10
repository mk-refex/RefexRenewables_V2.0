import FadeInUp from "@/components/common/FadeInUp";
import { sectionMainHeadingClassName } from "@/components/common/SectionHeading";

const FADE_THRESHOLD = 0.98;

export function AboutSection() {
  return (
    <section className="bg-[#F6F7F9] py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="mx-auto w-full max-w-md md:mx-0 md:max-w-none">
            <div className="overflow-hidden rounded-lg shadow-sm md:max-w-lg">
              <div className="aspect-[4/3] w-full sm:aspect-[5/4]">
                <img
                  src="/uploads/images/Upgradation unit vizag.png"
                  alt="Vyzag Bio-Energy Facility"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 lg:mb-5">
              <FadeInUp delay={0.2} threshold={FADE_THRESHOLD}>
                <h2
                  className={`${sectionMainHeadingClassName} text-gray-900 md:mt-0`}
                >
                  Vyzag Bio-Energy Fuel Private Limited
                </h2>
              </FadeInUp>
            </div>
            <FadeInUp delay={0.15} threshold={FADE_THRESHOLD}>
              <div className="space-y-4 rounded-lg bg-white p-4 text-sm leading-relaxed text-[#74787C] shadow-sm sm:p-6 sm:text-base lg:p-7">
                <p>
                  In 2024, RRIL successfully acquired Vyzag Bio-Energy Fuel
                  Private Limited (&quot;Vyzag Bio&quot;), marking a strategic
                  step towards its expansion into the Compressed Biogas (CBG)
                  sector. Vyzag Bio operates a state-of-the-art CBG facility
                  that converts segregated municipal organic waste into biogas,
                  aligning with RRIL&apos;s vision of advancing sustainable and
                  renewable energy solutions.
                </p>
                <p>
                  Located strategically at the Kapuluppada Dump Yard in
                  Visakhapatnam, the facility employs the Anaerobic Methanation
                  Process to convert organic wet waste into CBG. The plant has
                  an input processing capacity of 30 TPD, utilizing Organic
                  Fractions of Municipal Solid Waste (OF-MSW) and Press Mud as
                  primary feedstock materials.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
