import FadeInUp from "@/components/common/FadeInUp";
import { sectionMainHeadingClassName } from "@/components/common/SectionHeading";

const FADE_THRESHOLD = 0.98;

export default function BenefitsSection() {
  const benefits = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/nature.svg",
      title: "Promotes Stronger Plant Growth",
      description: "Enriched with essential macro and micronutrients",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/chemical-free.svg",
      title: "Chemical-Free & Eco-Friendly",
      description:
        "100% organic and reduces dependence on synthetic fertilizers",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/improve-soil.svg",
      title: "Improves Soil Structure",
      description:
        "Boosts water retention and aeration for long-term soil health",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/jar.svg",
      title: "Fermented for Enhanced Fertility",
      description:
        "Natural fermentation enhances nutrient bioavailability and soil microbial activity",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/eco-factory.svg",
      title: "Sustainable Manufacturing",
      description:
        "Derived from our CBG production process, ensuring complete utilization of agricultural waste",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/green-house.svg",
      title: "Boosts plant immunity against fungal stress",
      description:
        "Contains bioactive compounds that enhance plant resilience to fungal diseases",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/nmz32yjkelolkp8lz9e.svg",
      title: "Enhances NPK availability",
      description:
        "Improves the uptake and utilization of nitrogen, phosphorus, and potassium by plants",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/soil-fertility.svg",
      title: "Improves soil moisture retention",
      description:
        "Increases the soil's ability to retain water, reducing irrigation needs and promoting drought resistance",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/soil-health.svg",
      title: "Manufactured through a sustainable process",
      description:
        "Produced using a sustainable process that minimizes waste and energy consumption, contributing to a lower carbon footprint",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <FadeInUp
          delay={0}
          threshold={FADE_THRESHOLD}
          className="mb-10 flex flex-col items-center text-center sm:mb-12 lg:mb-16"
        >
          <h2
            className={`${sectionMainHeadingClassName} max-w-4xl text-balance text-gray-900`}
          >
            What makes Bio-Dhanic unique?
          </h2>
        </FadeInUp>

        <div className="mb-8 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <FadeInUp
              key={index}
              delay={0.05 * index}
              threshold={FADE_THRESHOLD}
              className="h-full"
            >
              <div className="flex h-full flex-col items-center gap-3 rounded-lg bg-white p-5 text-center shadow-md transition-shadow duration-300 hover:shadow-xl sm:flex-row sm:items-center sm:gap-5 sm:p-6 sm:text-left lg:p-8">
                <div className="flex w-14 shrink-0 justify-center sm:w-16">
                  <img
                    src={benefit.iconSrc}
                    alt=""
                    width={56}
                    height={56}
                    className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                    decoding="async"
                  />
                </div>
                <div className="min-w-0 w-full flex-1">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 sm:mb-3 sm:text-left sm:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="text-justify text-sm leading-relaxed text-gray-600 sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
