export default function OfferingsSection() {
  const offerings = [
    {
      icon: "ri-sun-line",
      title: "Ground-mounted Solar & Rooftop Solar Installation",
    },
    {
      icon: "ri-battery-charge-line",
      title: "Energy Storage",
    },
    {
      icon: "ri-flashlight-line",
      title: "Solar & Wind Open Access",
    },
    {
      icon: "ri-plug-line",
      title: "ISTS-connected (Inter-State Transmission System) Supply",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/solar-services-image-new.jpg"
              alt="Solar Installation Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-white">
            <div className="mb-8">
              <span className="text-green-500 font-semibold text-sm uppercase tracking-wide">
                WHAT DO WE OFFER
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
                We offer end-to-end project support from concept to
                commissioning ensuring efficiency, reliability, and optimal ROI.
              </h2>
            </div>

            <div className="space-y-6">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${offering.icon} text-xl text-white`}></i>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold">{offering.title}</h3>
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
