import FadeInUp from "@/components/common/FadeInUp";
import { sectionMainHeadingClassName } from "@/components/common/SectionHeading";

export default function AboutSection() {
  return (
    <section className="bg-[#F6F7F9] py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="mx-auto w-full max-w-md md:mx-0 md:max-w-none">
            <div className="overflow-hidden rounded-lg shadow-sm md:max-w-lg">
              <div className="aspect-[4/3] w-full sm:aspect-[5/4]">
                <img
                  src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/bio-dhanic-img.png"
                  alt="BioDhanic Product"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 lg:mb-5">
              <FadeInUp delay={0.2}>
                <h2
                  className={`${sectionMainHeadingClassName} text-gray-900 md:mt-0`}
                >
                  The Wealth behind every Bountiful Harvest
                </h2>
              </FadeInUp>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-sm sm:p-6 lg:p-7">
              <div className="space-y-4 text-base leading-relaxed text-[#74787C]">
                <p>
                  Refex Bio-Dhanic is a premium fermented organic manure
                  developed under Refex Renewables, reflecting our commitment to
                  clean energy and sustainable agriculture.
                </p>
                <p>
                  Crafted from the by-products of our Compressed Biogas (CBG)
                  plants, Bio-Dhanic is a soil enhancer derived from agricultural
                  and organic waste, designed to boost soil productivity, enrich
                  fertility, and support environmental sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
