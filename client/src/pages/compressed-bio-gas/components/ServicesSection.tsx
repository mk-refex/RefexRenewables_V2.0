import SectionHeading, {
  sectionMainHeadingClassName,
} from "../../../components/common/SectionHeading";
import FadeInUp from "../../../components/common/FadeInUp";

export default function ServicesSection() {
  const services = [
    {
      image:
        "https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/Multi-feedstock.png",
      title: "Multi-feedstock capability",
      bullets: [
        "Press mud",
        "Municipal solid waste (MSW)",
        "Agricultural waste",
        "Cattle dung",
      ],
    },
    {
      image:
        "https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/biogas-production-systems01.png",
      title: "Efficient biogas production systems",
    },
    {
      image:
        "https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/sustainablity-eco01.jpg",
      title: "Scalable and Compliant with SATAT and ESG frameworks",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <FadeInUp
          delay={0}
          className="text-center mb-16 flex flex-col items-center"
        >
          <SectionHeading
            badgeText="OUR"
            text="SERVICES"
            className="justify-center"
            watermarkAlign="center"
          />
          <h2
            className={`${sectionMainHeadingClassName} mt-3 text-gray-900`}
          >
            Why choose RRIL?
          </h2>
        </FadeInUp>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInUp key={index} delay={0.1 * index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  {"bullets" in service && service.bullets && (
                    <ul className="mt-3 space-y-1 text-gray-700 list-disc list-inside">
                      {service.bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
