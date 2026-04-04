import SectionHeading, {
  sectionMainHeadingClassName,
} from "../../../components/common/SectionHeading";
import FadeInUp from "../../../components/common/FadeInUp";

export function OutputsSection() {
  const outputs = [
    {
      value: "1",
      unit: "TPD",
      label: "Bio-CNG",
    },
    {
      value: "2",
      unit: "TPD",
      label: "Fermented Organic Manure",
    },
    {
      value: "60",
      unit: "KL",
      label: "Liquid Fermented Organic Manure (LFOM) per day",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <FadeInUp
          delay={0}
          className="text-center mb-12 flex flex-col items-center"
        >
          <SectionHeading
            badgeText="THE PROCESS"
            text="YIELDS"
            className="justify-center"
            watermarkAlign="center"
          />
          <h2
            className={`${sectionMainHeadingClassName} mt-3 text-gray-900`}
          >
            The process yields multiple high-value outputs, including
          </h2>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {outputs.map((output, index) => (
            <FadeInUp key={index} delay={0.1 * index}>
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <div className="text-6xl font-bold text-gray-200 mb-4">
                    {output.value} {output.unit}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-4xl font-bold text-green-600">
                      {output.value}{" "}
                      <span className="text-3xl">{output.unit}</span>
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 mt-6 font-medium">{output.label}</p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.4}>
          <p className="text-center text-gray-700 mt-12 max-w-4xl mx-auto leading-relaxed">
            This acquisition reinforces RRIL's commitment to sustainable waste
            management, renewable energy generation and the promotion of a
            circular economy, further strengthening its role in building a
            cleaner and greener future.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
