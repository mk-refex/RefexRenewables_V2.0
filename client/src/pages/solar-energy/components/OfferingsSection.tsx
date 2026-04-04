import FadeInUp from "@/components/common/FadeInUp";
import SectionHeading, {
  sectionMainHeadingClassName,
} from "@/components/common/SectionHeading";

export default function OfferingsSection() {
  const offerings = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/solar-services-icon01.svg",
      title: "Ground-mounted Solar",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/solar-services-icon02.svg",
      title: "Battery Energy Storage System (BESS)",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/solar-services-icon03.svg",
      title: "Solar & Wind Open Access",
    },
    // {
    //   iconSrc: "/wp-content/uploads/svg_icons/solar-services-icon04.svg",
    //   title: "ISTS-connected (Inter-State Transmission System) Supply",
    // },
  ];

  return (
    <section className="py-20 bg-[#F6F7F9]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[866px] rounded-lg overflow-hidden">
            <img
              src="/wp-content/uploads/2025/10/solar-services-image-new.jpg"
              alt="Solar Installation Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="mb-8">
              <FadeInUp delay={0.2}>
                <SectionHeading
                  badgeText="WHAT DO"
                  text="WE OFFER"
                  showWatermark={false}
                />
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <h2 className={`${sectionMainHeadingClassName} text-gray-900`}>
                  We offer end-to-end project support from concept to
                  commissioning ensuring efficiency, reliability, and optimal
                  ROI.
                </h2>
              </FadeInUp>
            </div>

            <div className="space-y-6">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img
                    src={offering.iconSrc}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 flex-shrink-0 object-contain md:h-11 md:w-11"
                    decoding="async"
                  />
                  <div className="min-w-0">
                    <h3 className="font-bold leading-snug text-[#1f1f25] text-base md:text-lg lg:text-xl">
                      {offering.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
