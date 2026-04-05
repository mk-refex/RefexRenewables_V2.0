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
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div
            className="h-64 rounded-lg bg-cover bg-center sm:h-80 md:h-[28rem] lg:h-[600px]"
            style={{
              backgroundImage:
                "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/11/power-storage-img01.jpg)",
            }}
          />
          <div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">
              Utility-Scale Storage
            </h2>
            <h5 className="mb-5 text-lg font-bold text-gray-900 sm:mb-8 sm:text-xl">
              Applications :
            </h5>
            <div className="space-y-4 sm:space-y-6">
              {storageFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <img
                    src={feature.iconSrc}
                    alt=""
                    width={48}
                    height={48}
                    className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                    decoding="async"
                  />
                  <div className="min-w-0">
                    <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 sm:text-sm">
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
