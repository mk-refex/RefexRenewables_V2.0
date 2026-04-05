export default function MicroGridSection() {
  const microGridFeatures = [
    {
      icon: "ri-time-line",
      title: "24/7 hybrid micro-grids",
      description:
        "Integrate with solar, wind, and DGs for 24/7 hybrid micro-grids",
    },
    {
      icon: "ri-arrow-down-line",
      title: "Reduce dependency",
      description:
        "Reduce dependency on diesel, cut emissions, and lower energy costs",
    },
    {
      icon: "ri-lightbulb-line",
      title: "Rural Electrification",
      description:
        "Ideal for rural electrification, island communities, mining operations, etc.",
    },
    {
      icon: "ri-leaf-line",
      title: "Energy Access, Sustainability, and Resilience",
      description:
        "Promotes energy access, sustainability, and resilience in off-grid areas",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div>
            <h2 className="mb-5 text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl lg:text-4xl">
              Micro-Grid Storage for Remote & Island Systems
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {microGridFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 sm:h-12 sm:w-12">
                    <i
                      className={`${feature.icon} text-lg text-green-600 sm:text-xl`}
                    ></i>
                  </div>
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
          <div
            className="h-64 rounded-lg bg-cover bg-center sm:h-80 md:h-[28rem] lg:h-[600px]"
            style={{
              backgroundImage:
                "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/11/energy-solutions-img02.png-1.jpg)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
