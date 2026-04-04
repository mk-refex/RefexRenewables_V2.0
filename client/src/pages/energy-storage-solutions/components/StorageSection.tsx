export default function StorageSection() {
  const storageFeatures = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/store-excess.svg",
      title: "Store Excess",
      description: "Store excess solar energy and release during peak hours",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/energy-support.svg",
      title: "Ancillary services",
      description: "Frequency regulation, voltage support",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/energy.svg",
      title: "Peaker Plant Replacement",
      description: "BESS + RE as a cleaner dispatchable power source",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/solar-panel.svg",
      title: "Grid stability",
      description: "Grid stability through capacity firming and RE integration",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/eco.svg",
      title: "Virtual Power Plants",
      description: "Virtual Power Plants using aggregated distributed ESS",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="h-[600px] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:
                "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/11/power-storage-img01.jpg)",
            }}
          />
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Utility-Scale Storage
            </h2>
            <h5 className="text-xl font-bold text-gray-900 mb-8">
              Applications :
            </h5>
            <div className="space-y-6">
              {storageFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img
                    src={feature.iconSrc}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 flex-shrink-0 object-contain"
                    decoding="async"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
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
