import SectionHeading, {
  sectionMainHeadingClassName,
} from "../../../components/common/SectionHeading";
import PageFadeInUp from "./PageFadeInUp";

export default function OfferingsSection() {
  const offerings = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/biogas-services-icon01.svg",
      title: "Compressed Biogas (CBG)",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/biogas-services-icon02.svg",
      title: "Fermented Organic Manure (FOM)",
    },
  ];

  return (
    <section className="bg-gray-900 py-12 text-white sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <PageFadeInUp delay={0.1}>
            <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-96">
              <img
                src="/wp-content/uploads/2025/09/biogas-services-image.png"
                alt="Biogas Storage"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </PageFadeInUp>
          <div>
            <PageFadeInUp delay={0}>
              <SectionHeading
                badgeText="WHAT DO"
                text="WE OFFER"
                showWatermark={false}
              />
              <h2 className={`${sectionMainHeadingClassName} mt-3 text-white`}>
                Turning waste into clean energy with sustainable Compressed
                Biogas solutions.
              </h2>
            </PageFadeInUp>
            <PageFadeInUp delay={0.2}>
              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
                {offerings.map((offering, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={offering.iconSrc}
                      alt=""
                      width={40}
                      height={40}
                      className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10 md:h-11 md:w-11"
                      decoding="async"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold sm:text-xl">
                        {offering.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </PageFadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
