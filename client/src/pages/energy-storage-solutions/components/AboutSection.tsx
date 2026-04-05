import FadeInUp from "@/components/common/FadeInUp";
import { sectionMainHeadingClassName } from "@/components/common/SectionHeading";

export default function AboutSection() {
  return (
    <section className="bg-[#F6F7F9] py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="mx-auto w-full max-w-md md:mx-0 md:max-w-none">
            <div className="overflow-hidden rounded-lg shadow-sm md:max-w-lg">
              <div className="aspect-[4/3] w-full sm:aspect-[5/4]">
                <img
                  src="/wp-content/uploads/2025/11/energy-solutions-img.png"
                  alt="Energy Storage Solutions"
                  className="h-full w-full object-contain object-center"
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
                  At Refex Renewables & Infrastructure Limited
                </h2>
              </FadeInUp>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6 lg:p-7">
              <p className="text-sm leading-relaxed text-[#74787C] sm:text-base">
                We recognize that the future of clean energy goes beyond
                generation; it demands <strong>reliable storage</strong> to
                ensure consistent, peak saving power. As part of our commitment
                to supporting India&apos;s clean energy transition, we offer{" "}
                <strong>advanced Energy Storage Solutions (ESS)</strong>{" "}
                designed for diverse applications across utility, commercial,
                and remote environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
