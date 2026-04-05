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
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">
            Our Capabilities
          </h2>
        </div>
        <div
          className={
            capabilities.length === 1
              ? "mx-auto grid max-w-xl grid-cols-1 gap-6 sm:gap-8"
              : "mx-auto grid max-w-6xl gap-6 sm:gap-8 md:grid-cols-2"
          }
        >
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:p-8"
            >
              <div className="mb-4 flex justify-center sm:mb-6">
                <img
                  src={capability.iconSrc}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                  decoding="async"
                />
              </div>
              <h5 className="mb-3 w-full text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">
                {capability.title}
              </h5>
              <p className="w-full text-justify text-xs leading-relaxed text-gray-600 sm:text-sm">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
