import FadeInUp from "@/components/common/FadeInUp";
import SectionHeading, {
  sectionMainHeadingClassName,
} from "@/components/common/SectionHeading";

export default function ServicesSection() {
  const services = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/tcb9zv145e8lkpd26yz-1.svg",
      title: "Clean Energy Solutions",
      description:
        "Design solar systems customized to your energy needs, space, and goals to ensure optimal savings, reliability, and compliance.",
      image:
        "/wp-content/uploads/2025/08/about-483x500.png",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/gn3kcvh52vlkp8lg3b.svg",
      title: "Significant Cost Savings & ROI",
      description:
        "Enable commercial and industrial (C&I) clients to lower electricity costs through solar and open access models, offering quick payback periods and sustained long-term financial benefits.",
      image:
        "/wp-content/uploads/2025/09/cost-saving-roi.jpg",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/b259e3m4nvnlkp9o2qp.svg",
      title: "Sustainability & Energy Independence",
      description:
        "Help businesses meet ESG and net-zero goals while reducing grid dependence, supporting a cleaner and more resilient energy future.",
      image:
        "/wp-content/uploads/2025/09/sustainablity-eco.jpg",
    },
  ];

  return (
    <section className="bg-[#1B1B1B] py-20">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="text-center mb-16">
          <FadeInUp delay={0.2}>
            <SectionHeading
              badgeText="OUR"
              text="SOLAR SERVICES"
              showWatermark={false}
              className="justify-center"
            />
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <h2 className={`${sectionMainHeadingClassName} mt-3 text-white`}>
              Why choose RRIL solar?
            </h2>
          </FadeInUp>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="overflow-hidden rounded-t-lg">
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="relative border-t border-gray-100 px-6 pb-6 pt-12">
                <div className="absolute -top-8 left-6 z-10 flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-md ring-1 ring-gray-200">
                  <img
                    src={service.iconSrc}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                    decoding="async"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
