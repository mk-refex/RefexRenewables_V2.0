export default function FacilitySection() {
  const features = [
    {
      icon: "1",
      title:
        "India's first large-scale Compressed Biogas (CBG) plant, approved by MNRE and operational since 2012",
    },
    {
      icon: "2",
      title:
        "Processes 100 MT of organic waste per day through advanced anaerobic digestion technology",
    },
    {
      icon: "3",
      title:
        "Produces 3.5–4.0 tons of Bio-CNG daily, used as vehicle fuel under the SATAT and CBG–CGD Synchronization schemes",
    },
    {
      icon: "4",
      title:
        "Supplies Bio-CNG to leading Oil Marketing Companies (IOCL and HPOIL)",
    },
    {
      icon: "5",
      title:
        "Generates 15 MT of solid Fermented Organic Manure (FOM) and 150–180 KL of Liquid FOM (LFOM) per day",
    },
    {
      icon: "6",
      title:
        "Supports sustainable agriculture by providing nutrient-rich organic fertilizers that enhance soil health and fertility",
    },
    {
      icon: "7",
      title:
        "Partners with RCF and regional dealers to supply high-quality organic manure products, for large-scale distribution",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Kolhapur facility is India's first large-scale Compressed Biogas
            (CBG) plant, MNRE-approved and operational since 2012.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            className="w-full h-[600px] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:
                "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/spectrum-img.jpg)",
            }}
          ></div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
