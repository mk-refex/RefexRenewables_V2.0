import SectionHeading, {
  sectionMainHeadingClassName,
} from "@/components/common/SectionHeading";
import FadeInUp from "@/components/common/FadeInUp";

const businessAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const BusinessSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://static.readdy.ai/image/d0ead66ce635a168f1e83b108be94826/33b8d94f94adb3857885e3267a1b144d.png)",
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-[110px]">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center">
            <SectionHeading
              badgeText="OUR"
              text="BUSINESS"
              className="justify-center"
              showWatermark={false}
            />
          </div>
          <FadeInUp delay={0.2}>
            <h2 className={`${sectionMainHeadingClassName} text-white`}>
              Empowering Tomorrow with Sustainable Renewable Infrastructure for
              All
            </h2>
          </FadeInUp>
        </div>

        {/* Business Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Solar Energy Card */}
          <div className="group rounded-lg bg-white shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden rounded-t-lg">
              <div className="relative h-64 lg:h-80">
                <img
                  src="/wp-content/uploads/2025/10/bhilai-home.jpg"
                  alt="Solar Energy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="relative rounded-b-lg border-t border-gray-200 px-6 pb-8 pt-12 lg:px-8">
              <div className="absolute -top-8 left-6 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-200 lg:left-8">
                <img
                  src={businessAsset("about-stats-icons/sites.svg")}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                  decoding="async"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                Solar Energy
              </h3>
              <p className="mb-6 text-base leading-relaxed text-gray-600">
                As a leading solar power company, we empower commercial and
                industrial (C&I) enterprises to reduce their carbon footprint
                through customized commercial solar system solutions.
              </p>
              <a
                href="/solar-energy"
                className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover transition-colors cursor-pointer whitespace-nowrap"
              >
                Read More
                <i className="ri-arrow-right-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Compressed Bio-Gas Card */}
          <div className="group rounded-lg bg-white shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden rounded-t-lg">
              <div className="relative h-64 lg:h-80">
                <img
                  src="/wp-content/uploads/2025/08/bio-gas-bg.jpg"
                  alt="Compressed Bio-Gas"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="relative rounded-b-lg border-t border-gray-200 px-6 pb-8 pt-12 lg:px-8">
              <div className="absolute -top-8 left-6 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-200 lg:left-8">
                <img
                  src={businessAsset(
                    "business-icons/spectrum-renewable-icon01.svg",
                  )}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                  decoding="async"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                Compressed Bio-Gas
              </h3>
              <p className="mb-6 text-base leading-relaxed text-gray-600">
                Under our CBG business unit, we are driving the transition to a
                circular economy through advanced waste to biogas solutions.
              </p>
              <a
                href="/compressed-bio-gas"
                className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover transition-colors cursor-pointer whitespace-nowrap"
              >
                Read More
                <i className="ri-arrow-right-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
