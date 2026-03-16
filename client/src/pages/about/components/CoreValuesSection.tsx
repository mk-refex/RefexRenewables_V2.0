import FadeInUp from "@/components/common/FadeInUp";

const CoreValuesSection = () => {
  const values = [
    {
      icon: "ri-shield-check-line",
      title: "Principled Excellence",
      description:
        "Doing what’s right, with integrity and intention.",
      letter: "P",
      bgColor: "#582a2a",
      accentColor: "#582a2a",
    },
    {
      icon: "ri-lightbulb-line",
      title: "Authenticity",
      description:
        "Bringing your true self to work, and honouring that in others.",
      letter: "A",
      bgColor: "#f4831d",
      accentColor: "#f4831d",
    },
    {
      icon: "ri-customer-service-2-line",
      title: "Customer Value",
      description:
        "Keeping our customers at the heart of everything we do.",
      letter: "C",
      bgColor: "#193164",
      accentColor: "#193164",
    },
    {
      icon: "ri-team-line",
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
        className="py-16 lg:py-24 bg-white relative overflow-hidden"
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

        <div className="container mx-auto px-4 lg:px-[110px] relative z-10">
          <FadeInUp delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Our Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The PACE values that guide how we work every day.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-white p-8 rounded-xl relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: value.bgColor }}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-white/40 bg-transparent mx-auto">
                    <i className={`${value.icon} text-3xl text-white`}></i>
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
