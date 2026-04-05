const BRAND_GREEN = "#4aab3d";

function ValueIcon({ src, label }: { src: string; label: string }) {
  return (
    <div
      className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
      style={{
        backgroundColor: BRAND_GREEN,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
      role="img"
      aria-label={label}
    />
  );
}

export function ValuesSection() {
  const values = [
    {
      letter: "P",
      iconSrc: "/wp-content/uploads/svg_icons/value-01.svg",
      title: "Principled Excellence",
      description:
        "Doing what's right, with integrity and intention",
    },
    {
      letter: "A",
      iconSrc: "/wp-content/uploads/svg_icons/value-02.svg",
      title: "Authenticity",
      description:
        "Bringing your true self to work, and honouring that in others.",
    },
    {
      letter: "C",
      iconSrc: "/wp-content/uploads/svg_icons/value-03.svg",
      title: "Customer Value",
      description: "Keeping our customers at the heart of everything we do.",
    },
    {
      letter: "E",
      iconSrc: "/wp-content/uploads/svg_icons/value-04.svg",
      title: "Esteem Culture",
      description:
        "Fostering a workplace where respect, dignity, and belonging are everyday experiences.",
    },
  ];

  return (
    <section className="bg-brand py-12 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <h2 className="mb-8 text-center text-3xl font-bold text-white sm:mb-10 sm:text-4xl md:mb-12 lg:mb-16 lg:text-5xl">
          Our Values
        </h2>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex min-h-full flex-col rounded-xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6 lg:p-8"
            >
              <div className="flex flex-1 flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-gray-50/90 sm:mb-5 sm:h-[4.5rem] sm:w-[4.5rem] lg:mb-6 lg:h-20 lg:w-20">
                  <ValueIcon src={value.iconSrc} label={value.title} />
                </div>

                <h3 className="mb-2 text-xs font-bold uppercase leading-snug tracking-wide text-gray-900 sm:mb-3 sm:text-sm lg:text-base">
                  {value.title}
                </h3>

                <p className="mb-6 flex-1 text-xs leading-relaxed text-gray-600 sm:mb-8 sm:text-[15px]">
                  {value.description}
                </p>

                <div
                  className="mt-auto flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white sm:h-12 sm:w-12 sm:text-xl lg:h-14 lg:w-14 lg:text-2xl"
                  style={{ backgroundColor: BRAND_GREEN }}
                >
                  {value.letter}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
