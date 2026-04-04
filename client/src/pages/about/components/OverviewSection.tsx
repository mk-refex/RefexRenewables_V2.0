import FadeInUp from "@/components/common/FadeInUp";
import SectionHeading, {
  sectionMainHeadingClassName,
} from "@/components/common/SectionHeading";

const aboutStatsIcon = (name: "sites" | "projects" | "location") =>
  `${import.meta.env.BASE_URL}about-stats-icons/${name}.svg`;

const OverviewSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F6F6F6]">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="mb-2">
              <FadeInUp delay={0.1}>
                <SectionHeading
                  badgeText="ABOUT"
                  text="US"
                  showWatermark={false}
                />
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <h2
                  className={`${sectionMainHeadingClassName} text-gray-900`}
                >
                  Refex Renewables & Infrastructure Limited (RRIL)
                </h2>
              </FadeInUp>
            </div>

            <div className="space-y-2">
              <p className="text-[#6E777D] text-[18px] leading-relaxed text-base">
                is a leading name in solar energy, recognized for pioneering projects and
                delivering innovative, first-of-their-kind renewable energy
                systems across India. Operating at nearly 89 sites in 11 states,
                RRIL offers end-to-end solutions in solar installation and clean
                energy deployment.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-4">
            <p className="text-[#6E777D] text-[18px] leading-relaxed text-base">
              Since its inception in 2017 as an Independent Power Producer
              (IPP), RRIL has been at the forefront of promoting solar, wind,
              and battery energy storage systems (BESS) as sustainable
              alternatives. We excel in the development of rooftop solar
              projects for industrial and commercial sectors, as well as
              large-scale solar power plants through greenfield ground-mounted
              solar installations. With a strong portfolio and a trusted
              clientele that includes key government bodies and reputed private
              enterprises, RRIL continues to shape India’s renewable energy
              landscape.
            </p>
          </div>
        </div>

        {/* Stats — centered block in each card; icons fill white tile */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 sm:items-stretch">
          <div className="flex min-h-[10rem] items-center justify-center rounded-lg bg-[#1a5d3a] px-5 py-7 text-white sm:min-h-[11rem] lg:min-h-[12rem] lg:px-8 lg:py-8">
            <div className="flex max-w-full items-center gap-4 sm:gap-5">
              <div className="grid h-20 w-20 shrink-0 place-items-stretch rounded-xl bg-white p-2.5 shadow-md ring-1 ring-black/10 sm:h-[5.25rem] sm:w-[5.25rem]">
                <img
                  src={aboutStatsIcon("sites")}
                  alt=""
                  width={47}
                  height={47}
                  className="h-full w-full min-h-0 min-w-0 object-contain"
                  decoding="async"
                />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-3xl font-bold leading-none tracking-tight lg:text-4xl">
                  89
                </p>
                <p className="mt-1.5 text-xs font-medium uppercase leading-snug tracking-wide text-white/90 sm:text-sm">
                  Sites
                </p>
              </div>
            </div>
          </div>
          <div className="flex min-h-[10rem] items-center justify-center rounded-lg bg-[#1a5d3a] px-5 py-7 text-white sm:min-h-[11rem] lg:min-h-[12rem] lg:px-8 lg:py-8">
            <div className="flex max-w-full items-center gap-4 sm:gap-5">
              <div className="grid h-20 w-20 shrink-0 place-items-stretch rounded-xl bg-white p-2.5 shadow-md ring-1 ring-black/10 sm:h-[5.25rem] sm:w-[5.25rem]">
                <img
                  src={aboutStatsIcon("projects")}
                  alt=""
                  width={51}
                  height={55}
                  className="h-full w-full min-h-0 min-w-0 object-contain"
                  decoding="async"
                />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-3xl font-bold leading-none tracking-tight lg:text-4xl">
                  125 MW
                </p>
                <p className="mt-1.5 text-xs font-medium uppercase leading-snug tracking-wide text-white/90 sm:text-sm">
                  Projects Across India
                </p>
              </div>
            </div>
          </div>
          <div className="flex min-h-[10rem] items-center justify-center rounded-lg bg-[#1a5d3a] px-5 py-7 text-white sm:min-h-[11rem] lg:min-h-[12rem] lg:px-8 lg:py-8">
            <div className="flex max-w-full items-center gap-4 sm:gap-5">
              <div className="grid h-20 w-20 shrink-0 place-items-stretch rounded-xl bg-white p-2.5 shadow-md ring-1 ring-black/10 sm:h-[5.25rem] sm:w-[5.25rem]">
                <img
                  src={aboutStatsIcon("location")}
                  alt=""
                  width={48}
                  height={48}
                  className="h-full w-full min-h-0 min-w-0 object-contain"
                  decoding="async"
                />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-3xl font-bold leading-none tracking-tight lg:text-4xl">
                  11
                </p>
                <p className="mt-1.5 text-xs font-medium uppercase leading-snug tracking-wide text-white/90 sm:text-sm">
                  States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
