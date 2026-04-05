import FadeInUp from "@/components/common/FadeInUp";

function CoreValueIcon({ src, label }: { src: string; label: string }) {
  return (
    <div
      className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white p-2.5 shadow-md sm:h-[4.5rem] sm:w-[4.5rem] sm:p-3"
      role="img"
      aria-label={label}
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

const CoreValuesSection = () => {
  const values = [
    {
      iconSrc: "/wp-content/uploads/svg_icons/value-01.svg",
      title: "Principled Excellence",
      description:
        "Doing what’s right, with integrity and intention.",
      letter: "P",
      bgColor: "#582a2a",
      accentColor: "#582a2a",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/value-02.svg",
      title: "Authenticity",
      description:
        "Bringing your true self to work, and honouring that in others.",
      letter: "A",
      bgColor: "#f4831d",
      accentColor: "#f4831d",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/value-03.svg",
      title: "Customer Value",
      description:
        "Keeping our customers at the heart of everything we do.",
      letter: "C",
      bgColor: "#193164",
      accentColor: "#193164",
    },
    {
      iconSrc: "/wp-content/uploads/svg_icons/value-04.svg",
      title: "Esteem Culture",
      description:
        "Fostering a workplace where respect, dignity, and belonging are everyday experiences.",
      letter: "E",
      bgColor: "#ec2327",
      accentColor: "#ec2327",
    },
  ];

  return (
    <>
      <style>{`
        @media (min-width: 1025px) {
          .core-values-bg-overlay {
            background-attachment: fixed !important;
          }
        }
      `}</style>
      <section
        id="core-values"
        className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-24"
      >
        {/* Background Image Overlay - Fixed on Desktop */}
        <div
          className="core-values-bg-overlay absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/08/green-bg.png)",
            backgroundAttachment: "scroll",
            opacity: 0.1,
          }}
        ></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-[110px]">
          <FadeInUp delay={0.2}>
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                Our Values
              </h2>
              <p className="mx-auto max-w-2xl px-1 text-sm text-gray-600 sm:text-base">
                The PACE values that guide how we work every day.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-xl p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                style={{ backgroundColor: value.bgColor }}
              >
                <div className="relative z-10">
                  <div className="mb-6">
                    <CoreValueIcon src={value.iconSrc} label={value.title} />
                  </div>
                  <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-center mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed mb-6 text-center">
                    {value.description}
                  </p>
                  <div className="flex justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span
                        className="text-xl font-bold"
                        style={{ color: value.accentColor }}
                      >
                        {value.letter}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreValuesSection;
