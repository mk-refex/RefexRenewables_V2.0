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
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <FadeInUp delay={0.1} threshold={FADE_THRESHOLD}>
            <div
              className="h-[500px] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery02.jpg)",
              }}
            />
          </FadeInUp>

          <div>
            <FadeInUp delay={0} threshold={FADE_THRESHOLD}>
              <h2
                className={`${sectionMainHeadingClassName} mb-8 text-gray-900 md:mt-0`}
              >
                Key Highlight
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.15} threshold={FADE_THRESHOLD}>
              <div className="space-y-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 md:gap-6"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center md:h-[72px] md:w-[72px]">
                      <img
                        src={item.iconSrc}
                        alt=""
                        width={72}
                        height={72}
                        className="h-full w-full object-contain"
                        decoding="async"
                      />
                    </div>
                    <p className="min-w-0 text-lg leading-relaxed text-gray-900">
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
