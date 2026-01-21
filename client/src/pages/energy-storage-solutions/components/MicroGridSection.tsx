export default function MicroGridSection() {
  const microGridFeatures = [
    {
      icon: 'ri-time-line',
      title: '24/7 hybrid micro-grids',
      description: 'Integrate with solar, wind, and DGs for 24/7 hybrid micro-grids'
    },
    {
      icon: 'ri-arrow-down-line',
      title: 'Reduce dependency',
      description: 'Reduce dependency on diesel, cut emissions, and lower energy costs'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Rural Electrification',
      description: 'Ideal for rural electrification, island communities, mining operations, etc.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Energy Access, Sustainability, and Resilience',
      description: 'Promotes energy access, sustainability, and resilience in off-grid areas'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Micro-Grid Storage for Remote & Island Systems
            </h2>
            <div className="space-y-6">
              {microGridFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                    <i className={`${feature.icon} text-xl text-green-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div 
            className="h-[600px] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: 'url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/11/energy-solutions-img.png)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
