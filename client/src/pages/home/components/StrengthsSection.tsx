import FadeInUp from "@/components/common/FadeInUp";
import SectionHeading, {
  sectionMainHeadingClassName,
} from "@/components/common/SectionHeading";

/** Renders a remote SVG in #4aab3d via mask (works for single-color artwork). */
function StrengthIcon({
  src,
  className = "h-8 w-8",
}: {
  src: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block shrink-0 ${className}`}
      style={{
        backgroundColor: "#4aab3d",
        WebkitMaskImage: `url("${src}")`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskImage: `url("${src}")`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
      aria-hidden
    />
  );
}

const StrengthsSection = () => {
  const strengths = [
    {
      iconSrc: `/wp-content/uploads/svg_icons/end-to-end.svg`,
      title: "End-to-End Project Expertise",
      description:
        "From feasibility to commissioning and lifecycle management, we bring full-stack capability in renewable energy projects.",
      image:
        "/wp-content/uploads/2025/09/strength02-new.jpg",
    },
    {
      iconSrc: `/wp-content/uploads/svg_icons/scale.svg`,
      title: "Engineering Excellence at Scale",
      description:
        "Our team of solar engineers and energy experts deliver high-performance systems with precision and scalability across commercial, industrial, and utility-scale projects.",
      image:
        "/wp-content/uploads/2025/09/strength04-new.jpg",
    },
    {
      iconSrc: `/wp-content/uploads/svg_icons/comm.svg`,
      title: "Robust O&M and Lifecycle Support",
      description:
        "Our solar responsibility doesn’t end at commissioning. With predictive maintenance, uptime guarantees, and regular audits, we ensure long-term asset performance.",
      image:
        "/wp-content/uploads/2025/09/strength03-new01.jpg",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F6F6F6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <SectionHeading
            badgeText="OUR"
            text="STRENGTHS"
            className="justify-center"
            watermarkAlign="center"
          />
          <FadeInUp delay={0.2}>
            <h2
              className={`${sectionMainHeadingClassName} mx-auto max-w-5xl text-gray-900`}
            >
              Strong Foundations built on Innovation, Sustainability and
              Reliability
            </h2>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="relative h-80 overflow-hidden rounded-lg shadow-lg sm:h-96"
            >
              <img
                src={strength.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/25" />

              <div className="absolute left-6 top-6 z-10 grid h-20 w-20 place-items-stretch rounded-lg bg-white p-1.5 shadow-lg">
                <StrengthIcon
                  src={strength.iconSrc}
                  className="block h-full w-full min-h-0 min-w-0"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col p-6">
                <h3 className="mb-3 text-2xl font-bold leading-tight text-white drop-shadow-sm">
                  {strength.title}
                </h3>
                <p className="min-h-[7rem] text-sm leading-relaxed text-white/90 md:min-h-[7.5rem]">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
