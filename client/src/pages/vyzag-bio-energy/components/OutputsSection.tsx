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
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <FadeInUp
          delay={0}
          className="mb-8 flex flex-col items-center text-center sm:mb-10 lg:mb-12"
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

        <div className="mx-auto grid max-w-5xl gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
          {outputs.map((output, index) => (
            <FadeInUp key={index} delay={0.1 * index}>
              <div className="rounded-lg bg-white p-5 text-center shadow-md transition-shadow duration-300 hover:shadow-xl sm:p-6 lg:p-8">
                <div className="relative">
                  <div className="mb-3 text-5xl font-bold text-gray-200 sm:mb-4 sm:text-6xl">
                    {output.value} {output.unit}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-green-600 sm:text-4xl">
                      {output.value}{" "}
                      <span className="text-2xl sm:text-3xl">{output.unit}</span>
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-sm font-medium text-gray-700 sm:mt-6 sm:text-base">
                  {output.label}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.4}>
          <p className="mx-auto mt-8 max-w-4xl px-1 text-center text-sm leading-relaxed text-gray-700 sm:mt-10 sm:text-base lg:mt-12">
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
