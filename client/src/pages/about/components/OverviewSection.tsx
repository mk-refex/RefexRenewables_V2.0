import FadeInUp from "@/components/common/FadeInUp";
import SectionHeading from "@/components/common/SectionHeading";

const OverviewSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F6F6F6]">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <FadeInUp delay={0.1}>
                <SectionHeading
                  badgeText="ABOUT"
                  text="US"
                  showWatermark={false}
                />
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Refex Renewables &<br />
                  Infrastructure Limited
                </h2>
              </FadeInUp>
            </div>

            <div className="space-y-4">
              <p className="text-[#6E777D] text-[18px] leading-relaxed text-base">
                Refex Renewables & Infrastructure Limited (RRIL) is a leading
                name in solar energy, recognized for pioneering projects and
                delivering innovative, first-of-their-kind renewable energy
                systems across India. Operating at nearly 89 sites in 12 states,
                RRIL offers end-to-end solutions in solar installation and clean
                energy deployment.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-4">
            <p className="text-[#6E777D] text-[18px] leading-relaxed text-base">
              Since its inception in 2017 as an Independent Power Producer
              (IPP), RRIL has been at the forefront of promoting solar, wind,
              and battery energy storage systems (BESS) as sustainable
              alternatives. We excel in the development of rooftop solar
              projects for industrial and commercial sectors, as well as
              large-scale solar power plants through greenfield ground-mounted
              solar installations. With a strong portfolio and a trusted
              clientele that includes key government bodies and reputed private
              enterprises, RRIL continues to shape India’s renewable energy
              landscape.
            </p>
          </div>
        </div>

        {/* Stats Cards - Full Width Below */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="bg-[#1a5d3a] text-white p-6 lg:p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-building-line text-4xl lg:text-5xl"></i>
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-center mb-2">
              89
            </div>
            <div className="text-sm font-medium text-center uppercase tracking-wide">
              Sites
            </div>
          </div>
          <div className="bg-[#1a5d3a] text-white p-6 lg:p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-sun-line text-4xl lg:text-5xl"></i>
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-center mb-2">
              1 GW
            </div>
            <div className="text-sm font-medium text-center uppercase tracking-wide">
              Solar
            </div>
          </div>
          <div className="bg-[#1a5d3a] text-white p-6 lg:p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-map-pin-line text-4xl lg:text-5xl"></i>
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-center mb-2">
              12
            </div>
            <div className="text-sm font-medium text-center uppercase tracking-wide">
              States
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
