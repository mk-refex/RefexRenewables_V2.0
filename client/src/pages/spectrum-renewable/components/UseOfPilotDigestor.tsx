import SectionHeading from "../../../components/common/SectionHeading";
import FadeInUp from "../../../components/common/FadeInUp";

const uses = [
  "Testing different feedstocks",
  "Process optimisation",
  "Organic farming applications",
];

export default function UseOfPilotDigestor() {
  return (
    <section>
      <div className="container mx-auto">
        <FadeInUp
          delay={0}
          className="mb-12 "
        >
          <SectionHeading
            badgeText="WHAT IS THE USE OF"
            text="Pilot Digestor?"
            showWatermark={false}
          />
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <ul className="mx-auto space-y-4 text-lg text-gray-700 list-none mb-6">
            {uses.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeInUp>
      </div>
    </section>
  );
}
