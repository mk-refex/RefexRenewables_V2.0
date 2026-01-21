export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-leaf-line',
      title: 'Clean Energy Solutions',
      description: 'Design solar systems customized to your energy needs, space, and goals to ensure optimal savings, reliability, and compliance.',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/clean-energy-solutions.jpg'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Significant Cost Savings & ROI',
      description: 'Enable commercial and industrial (C&I) clients to lower electricity costs through solar and open access models, offering quick payback periods and sustained long-term financial benefits.',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/cost-saving-roi.jpg'
    },
    {
      icon: 'ri-plant-line',
      title: 'Sustainability & Energy Independence',
      description: 'Help businesses meet ESG and net-zero goals while reducing grid dependence, supporting a cleaner and more resilient energy future.',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/sustainablity-eco.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
            OUR SOLAR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Why choose RRIL solar?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}