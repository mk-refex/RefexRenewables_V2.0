import FadeInUp from "@/components/common/FadeInUp";
import SectionHeading, {
  sectionMainHeadingClassName,
} from "@/components/common/SectionHeading";

const AwardsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="mb-4">
            <SectionHeading
              badgeText="AWARDS"
              text="& ACCOLADES"
              className="justify-center"
              watermarkColor="white"
              watermarkAlign="center"
            />
          </div>
          <FadeInUp delay={0.2}>
            <h2
              className={`${sectionMainHeadingClassName} mx-auto max-w-5xl text-white`}
            >
              Excellence celebrated through awards and accolades for quality and
              innovation
            </h2>
          </FadeInUp>
        </div>

        {/* Awards - Centered Content */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-5xl">
            {/* Award 1 */}
            <div className="text-center flex-1">
              <div className="mb-6">
                <img
                  src="/wp-content/uploads/2025/08/Solar-award-768x578-1.png"
                  alt="Solar Energy Award"
                  className="mx-auto h-44 w-full object-contain sm:h-52 md:h-64"
                />
              </div>
              <p className="text-white text-base leading-relaxed">
                Solar Energy Company of the Year 2023 by MSMECCII
              </p>
            </div>

            {/* Award 2 */}
            <div className="text-center flex-1">
              <div className="mb-6">
                <img
                  src="https://refex.group/uploads/images/general/general/general-general-refex-group-in-english-2026-certification-badge-1779775736541-609938.svg"
                  alt="Great Place to Work"
                  className="mx-auto h-44 w-full object-contain sm:h-52 md:h-64"
                />
              </div>
              <p className="text-white text-base leading-relaxed">
                Great Place to Work Certified India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
