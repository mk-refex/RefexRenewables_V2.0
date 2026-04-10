import SectionHeading, {
  sectionMainHeadingClassName,
} from "../../../components/common/SectionHeading";
import PageFadeInUp from "./PageFadeInUp";

const ICON_BIOGAS_PRODUCTION =
  "/wp-content/uploads/svg_icons/b259e3m4nvnlkp9o2qp%20-%20Copy%20-%20Copy.svg";
const ICON_SATAT_ESG =
  "/wp-content/uploads/svg_icons/gn3kcvh52vlkp8lg3b%20-%20Copy%20-%20Copy.svg";

export default function ServicesSection() {
  const services = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/soil-fertility.svg",
      text: "Multi-feedstock capability (Press Mud, Municipal Solid Waste (MSW), Agricultural Waste, Cattle Dung)",
      image:
        "/uploads/images/MSW waste Feeding area.png",
    },
    {
      iconSrc: ICON_BIOGAS_PRODUCTION,
      text: "Efficient biogas production systems",
      image:
        "/uploads/images/Upgradation unit vizag.png",
    },
    {
      iconSrc: ICON_SATAT_ESG,
      text: "Scalable and Compliant with SATAT and ESG frameworks",
      image:
        "/wp-content/uploads/2025/09/sustainablity-eco01.jpg",
    },
  ];

  return (
    <section className="bg-[#1B1B1B] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <PageFadeInUp
          delay={0}
          className="mb-10 flex flex-col items-center text-center sm:mb-12 lg:mb-16"
        >
          <SectionHeading
            badgeText="OUR"
            text="SERVICES"
            className="justify-center"
            watermarkAlign="center"
          />
          <h2
            className={`${sectionMainHeadingClassName} mt-3 text-white`}
          >
            Why choose RRIL?
          </h2>
        </PageFadeInUp>
        <div className="grid auto-rows-fr gap-6 md:grid-cols-3 md:gap-8">
          {services.map((service, index) => (
            <PageFadeInUp
              key={index}
              delay={0.04 * index}
              className="h-full min-h-0"
            >
              <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="shrink-0 overflow-hidden rounded-t-lg">
                  <div className="relative h-48 w-full sm:h-52 md:h-56 lg:h-64">
                    <img
                      src={service.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="relative flex min-h-0 flex-1 flex-col border-t border-gray-100 px-3 pb-5 pt-9 sm:px-6 sm:pb-7 sm:pt-12">
                  <div className="absolute left-1/2 top-0 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-white shadow-md ring-1 ring-gray-200 sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                    <img
                      src={service.iconSrc}
                      alt=""
                      width={40}
                      height={40}
                      className="h-8 w-8 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10"
                      decoding="async"
                    />
                  </div>
                  <p className="text-left text-sm font-bold leading-snug text-gray-900 sm:text-base lg:text-lg">
                    {service.text}
                  </p>
                </div>
              </div>
            </PageFadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
