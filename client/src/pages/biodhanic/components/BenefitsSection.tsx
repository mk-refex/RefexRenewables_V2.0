import SectionHeading from "../../../components/common/SectionHeading";
import FadeInUp from "../../../components/common/FadeInUp";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "ri-plant-line",
      title: "Promotes Stronger Plant Growth",
      description: "Enriched with essential macro and micronutrients",
    },
    {
      icon: "ri-leaf-line",
      title: "Chemical-Free & Eco-Friendly",
      description:
        "100% organic and reduces dependence on synthetic fertilizers",
    },
    {
      icon: "ri-water-percent-line",
      title: "Improves Soil Structure",
      description:
        "Boosts water retention and aeration for long-term soil health",
    },
    {
      icon: "ri-flask-line",
      title: "Fermented for Enhanced Fertility",
      description:
        "Natural fermentation enhances nutrient bioavailability and soil microbial activity",
    },
    {
      icon: "ri-recycle-line",
      title: "Slow and Sustainable nutrient release",
      description:
        "Derived from our CBG production process, ensuring complete utilization of agricultural waste",
    },
    {
      icon: "ri-recycle-line",
      title: "Boosts plant immunity against fungal stress",
      description:
        " Contains bioactive compounds that enhance plant resilience to fungal diseases",
    },
    {
      icon: "ri-recycle-line",
      title: "Enhances NPK availability",
      description:
        "Improves the uptake and utilization of nitrogen, phosphorus, and potassium by plants",
    },
    {
      icon: "ri-recycle-line",
      title: "Improves soil moisture retention",
      description:
        "Increases the soil's ability to retain water, reducing irrigation needs and promoting drought resistance",
    },
    {
      icon: "ri-recycle-line",
      title: "Manufactured through a sustainable process",
      description:
        "Produced using a sustainable process that minimizes waste and energy consumption, contributing to a lower carbon footprint",
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
            badgeText="WHAT MAKES"
            text="BioDhanic unique?"
            className="justify-center"
            showWatermark={false}
          />
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {benefits.map((benefit, index) => (
            <FadeInUp key={index} delay={0.1 * index}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-[#22c55e]/10 rounded-full mb-6">
                  <i className={`${benefit.icon} text-3xl text-[#22c55e]`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.slice(7).map((benefit, index) => (
            <FadeInUp key={index} delay={0.1 * (index + 3)}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-[#22c55e]/10 rounded-full mb-6">
                  <i className={`${benefit.icon} text-3xl text-[#22c55e]`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div> */}
      </div>
    </section>
  );
}
