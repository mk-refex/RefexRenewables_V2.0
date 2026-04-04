export default function CapabilitiesSection() {
  const capabilities = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/battery.svg",
      title: "Battery Energy Storage Systems (BESS)",
      description:
        "Our Energy Storage Solutions (ESS) portfolio includes Battery Energy Storage Systems (BESS) and whether you're a large industrial client, a commercial user, or managing micro-grids in remote regions, our modular, space-efficient storage solutions are engineered to meet your unique operational and energy goals",
    },
    // {
    //   iconSrc: "/wp-content/uploads/svg_icons/end-to-end.svg",
    //   title: "End-to-End Services",
    //   description:
    //     "We provide end-to-end services from system design and engineering to procurement, construction, and commissioning, ensuring flexibility for every business.",
    // },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Capabilities
          </h2>
        </div>
        <div
          className={
            capabilities.length === 1
              ? 'mx-auto grid max-w-xl grid-cols-1 gap-8'
              : 'mx-auto grid max-w-6xl gap-8 md:grid-cols-2'
          }
        >
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={capability.iconSrc}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                  decoding="async"
                />
              </div>
              <h5 className="mb-4 w-full text-xl font-bold text-gray-900">
                {capability.title}
              </h5>
              <p className="w-full text-justify text-sm leading-relaxed text-gray-600">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
