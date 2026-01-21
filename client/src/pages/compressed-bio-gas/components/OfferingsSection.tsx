export default function OfferingsSection() {
  const offerings = [
    {
      icon: "ri-gas-station-line",
      title: "Compressed Biogas (CBG)",
    },
    {
      icon: "ri-plant-line",
      title: "Fermented Organic Manure (FOM)",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 w-full">
            <img
              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/biogas-services-image.png"
              alt="Biogas Storage"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="mb-8">
              <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wide">
                WHAT DO <span className="text-white">WE OFFER</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
                Turning waste into clean energy with sustainable Compressed
                Biogas solutions.
              </h2>
            </div>
            <div className="space-y-6">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <i
                      className={`${offering.icon} text-3xl text-emerald-500`}
                    ></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{offering.title}</h3>
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
