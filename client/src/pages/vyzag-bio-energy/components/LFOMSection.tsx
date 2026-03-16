import SectionHeading from "../../../components/common/SectionHeading";
import FadeInUp from "../../../components/common/FadeInUp";

export function LFOMSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid md:grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <SectionHeading
              badgeText="CBG–CGD"
              text="Synchronization & TPA"
              className="justify-center"
              showWatermark={false}
            />
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <p className="text-gray-700 leading-relaxed text-center">
              Under the CBG–CGD Synchronization Scheme, the company has also
              entered a Tripartite Agreement (TPA) with Indian Oil Corporation
              Ltd. (IOCL) and GAIL India Ltd., enabling the supply of CBG to
              their recognized retail outlets for vehicle fuel applications. The
              first batch of CBG sales commenced on 5th July 2025.
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
