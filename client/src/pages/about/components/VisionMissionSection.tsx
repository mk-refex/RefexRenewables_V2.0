import FadeInUp from "@/components/common/FadeInUp";

const VisionMissionSection = () => {
  return (
    <section id="vision-mission" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        {/* Vision */}
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:mb-20 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/mission-img01.jpg"
                alt="Vision - Forest from above"
                className="h-[240px] w-full rounded-lg object-cover shadow-lg sm:h-[300px] md:h-[360px] lg:h-[400px]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <FadeInUp delay={0.2}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl lg:text-4xl">
                Vision
              </h2>
            </FadeInUp>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                Refex aims to be a globally admired conglomerate, driving
                long-term sustainable growth through innovation, purposeful
                collaborations and partnerships, and an unwavering commitment to
                excellence, while contributing meaningfully to societal progress.
              </p>
              {/* <p>
                To lead India's clean energy revolution, making sustainable
                power accessible to all while fostering economic growth and
                environmental stewardship.
              </p>
              <p>
                We envision a future where renewable energy is the backbone of
                India's energy infrastructure, empowering communities and
                driving progress towards a carbon-neutral society.
              </p> */}
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeInUp delay={0.2}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl lg:text-4xl">
                Mission
              </h2>
            </FadeInUp>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                Refex shall create enduring value across industries through
                innovation, operational excellence, and sustainable practices,
                thereby empowering our customers, enriching our communities, and
                delivering responsible growth for all stakeholders.
              </p>
              {/* <p>
                We are committed to quality, innovation, and excellence in
                execution. We continuously invest in cutting-edge technology and
                sustainable business models to optimize our operations.
              </p>
              <p>
                Our mission extends beyond energy generation – we aim to be
                catalysts for positive change, contributing to India's economic
                development and environmental goals while maintaining the
                highest standards of corporate governance.
              </p> */}
            </div>
          </div>

          <div>
            <div className="relative">
              <img
                src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/vision-img.jpg"
                alt="Mission - Business professional with renewable energy vision"
                className="h-[240px] w-full rounded-lg object-cover shadow-lg sm:h-[300px] md:h-[360px] lg:h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
