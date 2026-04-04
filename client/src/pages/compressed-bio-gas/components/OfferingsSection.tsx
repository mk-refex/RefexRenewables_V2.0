import SectionHeading, {
  sectionMainHeadingClassName,
} from "../../../components/common/SectionHeading";
import FadeInUp from "../../../components/common/FadeInUp";

export default function OfferingsSection() {
  const offerings = [
    {
      icon: "ri-gas-station-line",
      title: "Compressed Biogas (CBG)",
    },
    {
      icon: "ri-plant-line",
      title: "Fermented Organic Manure (FOM)",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInUp delay={0.1}>
            <div className="relative h-96 w-full">
              <img
                src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/biogas-services-image.png"
                alt="Biogas Storage"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </FadeInUp>
          <div>
            <FadeInUp delay={0}>
              <SectionHeading
                badgeText="WHAT DO"
                text="WE OFFER"
                showWatermark={false}
              />
              <h2 className={`${sectionMainHeadingClassName} mt-3 text-white`}>
                Turning waste into clean energy with sustainable Compressed
                Biogas solutions.
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="space-y-6 mt-8">
                {offerings.map((offering, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <i
                        className={`${offering.icon} text-3xl text-emerald-500`}
                      ></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">
                        {offering.title}
                      </h3>
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
