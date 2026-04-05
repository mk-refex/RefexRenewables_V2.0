import FadeInUp from "@/components/common/FadeInUp";
import { sectionMainHeadingClassName } from "@/components/common/SectionHeading";

const FADE_THRESHOLD = 0.98;

const uses = [
  "Testing different feedstocks",
  "Process optimisation",
  "Organic farming applications",
];

export default function UseOfPilotDigestor() {
  return (
    <section className="px-4 sm:px-6 lg:px-[110px]">
      <FadeInUp
        delay={0}
        threshold={FADE_THRESHOLD}
        className="mb-8 sm:mb-12"
      >
        <h2 className={`${sectionMainHeadingClassName} text-gray-900`}>
          What is the use of Pilot Digestor?
        </h2>
      </FadeInUp>
      <FadeInUp delay={0.15} threshold={FADE_THRESHOLD}>
        <ul className="mx-auto mb-6 list-none space-y-3 text-base text-gray-700 sm:space-y-4 sm:text-lg">
          {uses.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </FadeInUp>
    </section>
  );
}
