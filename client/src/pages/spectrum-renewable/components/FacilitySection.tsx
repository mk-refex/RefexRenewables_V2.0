import FadeInUp from "@/components/common/FadeInUp";
import { sectionMainHeadingClassName } from "@/components/common/SectionHeading";

const FADE_THRESHOLD = 0.98;

export default function FacilitySection() {
  const features = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/spectrum-renewable-icon01.svg",
      title:
        "India's first large-scale Compressed Biogas (CBG) plant, approved by MNRE and operational since 2012",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/spectrum-renewable-icon02.svg",
      title:
        "Processes 100 MT of press mud per day through advanced anaerobic digestion technology",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/spectrum-renewable-icon03.svg",
      title:
        "Produces 4 tons of Bio-CNG daily, used as vehicle fuel under the SATAT and CBG–CGD Synchronization schemes",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/spectrum-renewable-icon04.svg",
      title:
        "Supplies Bio-CNG to leading Oil Marketing Companies (IOCL and HPOIL)",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/spectrum-renewable-icon05.svg",
      title:
        "Generates 15-20 MT of solid Fermented Organic Manure (FOM) and 200 KL of Liquid FOM (LFOM) per day",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/spectrum-renewable-icon06.svg",
      title:
        "Supports sustainable agriculture by providing nutrient-rich organic fertilizers that enhance soil health and fertility",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/green-house.svg",
      title:
        "Partners with RCF and regional dealers to supply high-quality organic manure products, for large-scale distribution",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <FadeInUp
          delay={0}
          threshold={FADE_THRESHOLD}
          className="mb-8 flex flex-col items-center text-center sm:mb-10 lg:mb-12"
        >
          <h2
            className={`${sectionMainHeadingClassName} mx-auto max-w-4xl text-balance text-gray-900`}
          >
            India&apos;s first large-scale Compressed
            Biogas (CBG) plant, MNRE-approved and operational since 2012.
          </h2>
        </FadeInUp>

        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <FadeInUp delay={0.1} threshold={FADE_THRESHOLD}>
            <div
              className="h-64 w-full rounded-lg bg-cover bg-center sm:h-80 md:h-[28rem] lg:h-[600px]"
              style={{
                backgroundImage:
                  "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/spectrum-img.jpg)",
              }}
            />
          </FadeInUp>

          <FadeInUp delay={0.15} threshold={FADE_THRESHOLD}>
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 sm:items-center sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12">
                    <img
                      src={feature.iconSrc}
                      alt=""
                      width={40}
                      height={40}
                      className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                      decoding="async"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold leading-snug text-gray-900 sm:text-base lg:text-lg">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
