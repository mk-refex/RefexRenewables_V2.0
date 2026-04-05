import FadeInUp from "@/components/common/FadeInUp";

const FADE_THRESHOLD = 0.98;

export function LFOMSection() {
  return (
    <section className="bg-[#F9F9F9] py-12 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-14 lg:gap-16">
          <FadeInUp
            delay={0}
            threshold={FADE_THRESHOLD}
            translateHidden="20px"
            duration={0.5}
          >
            <div>
              <h2 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl md:text-3xl lg:max-w-md lg:text-[28px] lg:leading-snug">
                Liquid Fermented Organic manure (LFOM)
              </h2>
              <div
                className="mt-5 h-0.5 w-14 rounded-full bg-brand md:mt-6"
                aria-hidden
              />
            </div>
          </FadeInUp>
          <FadeInUp
            delay={0.12}
            threshold={FADE_THRESHOLD}
            translateHidden="20px"
            duration={0.5}
          >
            <p className="text-sm leading-relaxed text-[#666666] sm:text-base md:text-lg">
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
