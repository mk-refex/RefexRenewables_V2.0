import FadeInUp from "@/components/common/FadeInUp";
import { sectionMainHeadingClassName } from "@/components/common/SectionHeading";

const FADE_THRESHOLD = 0.98;

export default function WhyUseSection() {
  const reasons = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/soil-fertility.svg",
      title: "Enhances Soil Fertility",
      description: "Replenishes organic carbon and nutrients",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/crop-yield.svg",
      title: "Boosts Crop Yield",
      description: "Supports healthy plant growth and root development",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/soil-health.svg",
      title: "Improves Soil Health",
      description: "Encourages microbial balance and moisture retention",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/reduce-chemical-dependence.svg",
      title: "Reduces Chemical Dependence",
      description: "Lowers fertilizer usage, saving costs for farmers",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/energy.svg",
      title: "Supports Circular Economy",
      description: "Utilizes organic waste from CBG plants efficiently",
    },
  ];

  return (
    <section className="bg-[#1a4d2e] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <FadeInUp delay={0.1} threshold={FADE_THRESHOLD}>
            <div
              className="h-64 w-full rounded-lg bg-cover bg-center sm:h-80 md:h-[28rem] lg:h-[600px]"
              style={{
                backgroundImage:
                  "url(/images/indian-farmer-farm-field_621325-2958.avif)",
              }}
            />
          </FadeInUp>

          <div>
            <FadeInUp delay={0} threshold={FADE_THRESHOLD}>
              <h2
                className={`${sectionMainHeadingClassName} text-balance text-white`}
              >
                Why use BioDhanic?
              </h2>
            </FadeInUp>
            <FadeInUp
              delay={0.15}
              threshold={FADE_THRESHOLD}
              className="mt-6 sm:mt-10"
            >
              <div className="space-y-4 sm:space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 sm:items-center sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm sm:h-12 sm:w-12">
                      <img
                        src={reason.iconSrc}
                        alt=""
                        width={28}
                        height={28}
                        className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                        decoding="async"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="mb-1 text-lg font-bold text-white sm:mb-2 sm:text-xl">
                        {reason.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
