import SectionHeading from "../../../components/common/SectionHeading";
import FadeInUp from "../../../components/common/FadeInUp";

export default function InitiativesSection() {
  const initiatives = [
    {
      image:
        "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/bio-dhanic-cover.png",
      title: "Refex BioDhanic",
      number: "01",
      link: "/biodhanic",
    },
    {
      image:
        "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/spectrum-cover.png",
      title: "Refex Spectrum Renewable",
      number: "02",
      link: "/spectrum-renewable",
    },
    {
      image:
        "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/vizag-cover.png",
      title: "Refex Vyzag Bio-Energy",
      number: "03",
      link: "/vyzag-bio-energy",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <FadeInUp
          delay={0}
          className="text-center mb-16 flex flex-col items-center"
        >
          <SectionHeading
            badgeText="Refex"
            text="BIO-ENERGY INITIATIVES"
            className="justify-center"
            showWatermark={false}
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Driving a Sustainable Future through Renewable Innovation
          </h2>
        </FadeInUp>
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <FadeInUp key={index} delay={0.1 * index}>
              <a
                href={initiative.link}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 block"
              >
                <div className="relative h-80 w-full">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {initiative.title}
                  </h3>
                </div>
              </a>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
