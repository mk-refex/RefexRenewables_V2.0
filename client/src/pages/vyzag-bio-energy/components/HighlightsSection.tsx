import FadeInUp from "@/components/common/FadeInUp";
import { sectionMainHeadingClassName } from "@/components/common/SectionHeading";

const FADE_THRESHOLD = 0.98;

type Segment = { text: string; accent?: boolean };

export function HighlightsSection() {
  const highlights: { iconSrc: string; segments: Segment[] }[] = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/biogas.svg",
      segments: [
        { text: "The " },
        { text: "First Biogas Plant", accent: true },
        {
          text: " in Andhra Pradesh, leading the conversion of municipal waste into CBG/Bio-CNG.",
        },
      ],
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/gas-station.svg",
      segments: [
        { text: "The " },
        { text: "First in the North Coastal Districts", accent: true },
        {
          text: " of Andhra Pradesh to partner with an Oil Marketing Company (OMC) for CBG supply.",
        },
      ],
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <FadeInUp delay={0.1} threshold={FADE_THRESHOLD}>
            <div
              className="h-64 rounded-lg bg-cover bg-center sm:h-80 md:h-[28rem] lg:h-[500px]"
              style={{
                backgroundImage:
                  "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery02.jpg)",
              }}
            />
          </FadeInUp>

          <div>
            <FadeInUp delay={0} threshold={FADE_THRESHOLD}>
              <h2
                className={`${sectionMainHeadingClassName} mb-6 text-gray-900 sm:mb-8 md:mt-0`}
              >
                Key Highlight
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.15} threshold={FADE_THRESHOLD}>
              <div className="space-y-6 sm:space-y-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 sm:items-center sm:gap-5 md:gap-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14 md:h-[72px] md:w-[72px]">
                      <img
                        src={item.iconSrc}
                        alt=""
                        width={72}
                        height={72}
                        className="h-full w-full object-contain"
                        decoding="async"
                      />
                    </div>
                    <p className="min-w-0 text-base leading-relaxed text-gray-900 sm:text-lg">
                      {item.segments.map((seg, i) =>
                        seg.accent ? (
                          <span key={i} className="font-bold text-brand">
                            {seg.text}
                          </span>
                        ) : (
                          <span key={i}>{seg.text}</span>
                        ),
                      )}
                    </p>
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
