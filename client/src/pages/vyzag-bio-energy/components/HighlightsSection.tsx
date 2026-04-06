import FadeInUp from "@/components/common/FadeInUp";
import { sectionMainHeadingClassName } from "@/components/common/SectionHeading";

const FADE_THRESHOLD = 0.98;

type HighlightCard = {
  iconSrc: string;
  title: string;
  description: string;
};

export function HighlightsSection() {
  const highlights: HighlightCard[] = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/biogas.svg",
      title: "First Biogas Plant in Andhra Pradesh",
      description:
        "Leading the conversion of municipal waste into CBG/Bio-CNG.",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/gas-station.svg",
      title: "First in North Coastal Districts",
      description:
        "First in Andhra Pradesh to partner with an Oil Marketing Company (OMC) for CBG supply.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <FadeInUp delay={0} threshold={FADE_THRESHOLD}>
          <h2
            className={`${sectionMainHeadingClassName} mb-6 text-center text-gray-900 sm:mb-8`}
          >
            Key Highlights
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.12} threshold={FADE_THRESHOLD}>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-[#f3f3f3] p-5 shadow-sm sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
                  <img
                    src={item.iconSrc}
                    alt=""
                    width={56}
                    height={56}
                    className="h-full w-full object-contain"
                    decoding="async"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#666666] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
