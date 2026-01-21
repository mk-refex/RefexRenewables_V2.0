
export default function BenefitsSection() {
  const benefits = [
    {
      icon: 'ri-plant-line',
      title: 'Promotes Stronger Plant Growth',
      description: 'Enriched with essential macro and micronutrients'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Chemical-Free & Eco-Friendly',
      description: '100% organic and reduces dependence on synthetic fertilizers'
    },
    {
      icon: 'ri-water-percent-line',
      title: 'Improves Soil Structure',
      description: 'Boosts water retention and aeration for long-term soil health'
    },
    {
      icon: 'ri-flask-line',
      title: 'Fermented for Fertility',
      description: 'Natural fermentation enhances nutrient bioavailability and soil microbial activity'
    },
    {
      icon: 'ri-recycle-line',
      title: 'Sustainable Manufacturing',
      description: 'Derived from our CBG production process, ensuring complete utilization of agricultural waste'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What makes BioDhanic unique?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
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
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.slice(3).map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
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
          ))}
        </div>
      </div>
    </section>
  );
}
