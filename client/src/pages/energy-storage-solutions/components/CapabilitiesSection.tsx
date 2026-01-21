export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: 'ri-battery-charging-line',
      title: 'Battery Energy Storage Systems (BESS)',
      description: 'Our ESS portfolio includes Battery Energy Storage Systems (BESS) and whether you\'re a large industrial client, a commercial user, or managing micro-grids in remote regions, our modular, space-efficient storage solutions are engineered to meet your unique operational and energy goals'
    },
    {
      icon: 'ri-service-line',
      title: 'End-to-End Services',
      description: 'We provide end-to-end services—from system design and engineering to procurement, construction, and commissioning, ensuring flexibility for every business.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-6">
                <i className={`${capability.icon} text-3xl text-green-600`}></i>
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
