export default function ServicesSection() {
  const services = [
    {
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/Multi-feedstock.png',
      title: 'Multi-feedstock capability (press mud, MSW & Agro-Watse, cattle dung)'
    },
    {
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/biogas-production-systems01.png',
      title: 'Efficient biogas production systems'
    },
    {
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/sustainablity-eco01.jpg',
      title: 'Scalable and Compliant with SATAT and ESG frameworks'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
            OUR <span className="text-gray-800">SERVICES</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Why choose RRIL?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
