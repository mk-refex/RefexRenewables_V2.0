import SectionHeading from "../../../components/common/SectionHeading";
import FadeInUp from "../../../components/common/FadeInUp";

export default function WhyUseSection() {
  const reasons = [
    {
      icon: "ri-seedling-line",
      title: "Enhances Soil Fertility",
      description: "Replenishes organic carbon and nutrients",
    },
    {
      icon: "ri-line-chart-line",
      title: "Boosts Crop Yield",
      description: "Supports healthy plant growth and root development",
    },
    {
      icon: "ri-heart-pulse-line",
      title: "Improves Soil Health",
      description: "Encourages microbial balance and moisture retention",
    },
    {
      icon: "ri-test-tube-line",
      title: "Reduces Chemical Dependence",
      description: "Lowers fertilizer usage, saving costs for farmers",
    },
    {
      icon: "ri-earth-line",
      title: "Supports Circular Economy",
      description: "Utilizes organic waste from CBG plants efficiently",
    },
  ];

  return (
    <section className="py-20 bg-[#1a4d2e]">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInUp delay={0.1}>
            <div
              className="w-full h-[600px] bg-cover bg-center rounded-lg"
              style={{
                backgroundImage:
                  "url(/images/indian-farmer-farm-field_621325-2958.avif)",
              }}
            ></div>
          </FadeInUp>

          <div>
            <FadeInUp delay={0}>
              <SectionHeading
                badgeText="WHY USE"
                text="BioDhanic"
                showWatermark={false}
              />
            </FadeInUp>
            <FadeInUp delay={0.2} className="mt-10">
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0 border-2 border-white/20">
                      <i className={`${reason.icon} text-xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {reason.description}
                      </p>
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
