import SectionHeading, {
  sectionMainHeadingClassName,
} from "../../../components/common/SectionHeading";
import PageFadeInUp from "./PageFadeInUp";

export default function AboutSection() {
  return (
    <section className="bg-[#F6F7F9] py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="mx-auto w-full max-w-md md:mx-0 md:max-w-none">
            <div className="overflow-hidden rounded-lg shadow-sm md:max-w-lg">
              <div className="aspect-[4/3] w-full sm:aspect-[5/4]">
                <img
                  src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/biogas-image.png"
                  alt="Compressed Biogas"
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 lg:mb-5">
              <PageFadeInUp delay={0.2}>
                <SectionHeading
                  badgeText="ABOUT"
                  text="Compressed BioGas"
                  showWatermark={false}
                />
                <h2
                  className={`${sectionMainHeadingClassName} mt-3 text-gray-900`}
                >
                  Pioneering Sustainable Solutions with Compressed Biogas
                </h2>
              </PageFadeInUp>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6 lg:p-7">
              <div className="space-y-4 text-sm leading-relaxed text-[#74787C] sm:text-base">
                <p>
                  Under our CBG business unit, we are driving the transition to
                  a circular economy through advanced waste-to-biogas solutions.
                  By converting multiple organic waste streams—including press
                  mud and municipal solid waste (MSW)—we produce Compressed
                  Biogas (CBG), a clean and renewable biofuel, along with
                  fermented organic manure that supports sustainable agriculture.
                </p>
                <p>
                  Our biogas plants not only reduce landfill pressure and
                  greenhouse gas emissions but also transform unutilized waste
                  into dual-value outputs: green energy and organic soil
                  enhancers. These organic waste-to-energy solutions enable
                  cleaner cities, greener farms, and a more sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
