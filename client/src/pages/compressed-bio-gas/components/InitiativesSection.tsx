import SectionHeading, {
  sectionMainHeadingClassName,
} from "../../../components/common/SectionHeading";
import PageFadeInUp from "./PageFadeInUp";

export default function InitiativesSection() {
  const initiatives = [
    {
      image:"/uploads/images/BioDhanic Launch_page.jpg",
      title: "Refex BioDhanic",
      number: "01",
      link: "/biodhanic",
    },
    {
      image:
        "/wp-content/uploads/2025/10/spectrum-cover.png",
      title: "Refex Spectrum Renewable",
      number: "02",
      link: "/spectrum-renewable",
    },
    {
      image:
        "/wp-content/uploads/2025/10/vizag-cover.png",
      title: "Refex Vyzag Bio-Energy",
      number: "03",
      link: "/vyzag-bio-energy",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <PageFadeInUp
          delay={0}
          className="mb-10 flex flex-col items-center text-center sm:mb-12 lg:mb-16"
        >
          <SectionHeading
            badgeText="Refex"
            text="BIO-ENERGY INITIATIVES"
            className="justify-center"
            showWatermark={false}
          />
          <h2
            className={`${sectionMainHeadingClassName} mt-3 text-gray-900`}
          >
            Driving a Sustainable Future through Renewable Innovation
          </h2>
        </PageFadeInUp>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
          {initiatives.map((initiative, index) => (
            <PageFadeInUp key={index} delay={0.04 * index}>
              <a
                href={initiative.link}
                className="group relative block overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-64 w-full sm:h-72 lg:h-80">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {initiative.title}
                  </h3>
                </div>
              </a>
            </PageFadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
