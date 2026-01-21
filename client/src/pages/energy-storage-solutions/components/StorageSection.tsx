export default function StorageSection() {
  const storageFeatures = [
    {
      icon: 'ri-database-2-line',
      title: 'Store Excess',
      description: 'Store excess solar energy and release during peak hours'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Ancillary services',
      description: 'Frequency regulation, voltage support'
    },
    {
      icon: 'ri-plant-line',
      title: 'Peaker Plant Replacement',
      description: 'BESS + RE as a cleaner dispatchable power source'
    },
    {
      icon: 'ri-grid-line',
      title: 'Grid stability',
      description: 'Grid stability through capacity firming and RE integration'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Virtual Power Plants',
      description: 'Virtual Power Plants using aggregated distributed ESS'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="h-[600px] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: 'url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/11/energy-solutions-img.png)'
            }}
          />
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Utility-Scale Storage</h2>
            <div className="space-y-6">
              {storageFeatures.map((feature, index) => (
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
        </div>
      </div>
    </section>
  );
}
