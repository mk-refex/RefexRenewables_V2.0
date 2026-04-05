import FadeInUp from "@/components/common/FadeInUp";
import { sectionMainHeadingClassName } from "@/components/common/SectionHeading";

export default function AboutSection() {
  return (
    <section className="bg-[#F6F7F9] py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="mx-auto w-full max-w-md md:mx-0 md:max-w-none">
            <div className="overflow-hidden rounded-lg shadow-sm  md:max-w-lg">
              <div className="aspect-[4/3] w-full sm:aspect-[5/4]">
                <img
                  src="/wp-content/uploads/2025/10/solar-image-new.png"
                  alt="Solar Energy Installation"
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
                  India's leading solar power energy company
                </h2>
              </FadeInUp>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6 lg:p-7">
              <p className="text-sm leading-relaxed text-[#74787C] sm:text-base">
                As a leading solar power company, we empower commercial and
                industrial (C&I) enterprises to reduce their carbon footprint
                through customized commercial solar system solutions. With
                expert solar panel installation and a proven track record of
                delivering high-performance solar projects, we help businesses
                seamlessly integrate clean, reliable solar power into their
                operations. Recognized among the best solar companies in India,
                we enable our clients to advance toward their net-zero goals
                while driving cost savings, boosting sustainability, and
                ensuring long-term environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
