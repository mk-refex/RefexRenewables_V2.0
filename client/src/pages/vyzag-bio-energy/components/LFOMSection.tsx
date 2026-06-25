import FadeInUp from "@/components/common/FadeInUp";

const FADE_THRESHOLD = 0.98;

export function LFOMSection() {
  return (
    <section className="bg-[#F9F9F9] py-12 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <FadeInUp
          delay={0}
          threshold={FADE_THRESHOLD}
          translateHidden="20px"
          duration={0.5}
        >
          <div className="mb-8 text-center sm:mb-10 lg:mb-12">
            <h2 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-[28px] lg:leading-snug">
              Liquid Fermented Organic manure (LFOM)
            </h2>
            {/* <div
              className="mx-auto mt-5 h-0.5 w-14 rounded-full bg-brand md:mt-6"
              aria-hidden
            /> */}
          </div>
        </FadeInUp>

        <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-10 lg:gap-12">
          <FadeInUp
            delay={0.08}
            threshold={FADE_THRESHOLD}
            translateHidden="20px"
            duration={0.5}
          >
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-1 shadow-md sm:p-1.5">
              <img
                src="/wp-content/uploads/2025/10/Vjzag-gallery03.jpg"
                alt="Liquid Fermented Organic manure (LFOM)"
                className="h-[220px] w-full rounded-xl object-cover sm:h-[260px] md:h-[300px] lg:h-[340px]"
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
              Under the CBG-CGD Synchronization Scheme, the company has also
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
