const GLOBAL_GOALS_LOGO =
  "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/global-goals.png";

type SdgGoal = {
  title: string;
  headline: string;
  icon: string;
  coverImage: string;
  description: string;
};

const sdgGoals: SdgGoal[] = [
  {
    title: "Quality Education",
    headline: "QUALITY EDUCATION",
    icon: "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-04.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    description:
      "Empowering young minds! We collaborate with local government schools to provide computer literacy programs for high school students, preparing them for a brighter future. #EducationForAll #Empowerment",
  },
  {
    title: "Affordable & Clean Energy",
    headline: "AFFORDABLE & CLEAN ENERGY",
    icon: "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-07.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    description:
      "At RRIL, our renewable energy business is revolutionizing the industry with affordable solar power solutions for private and government agencies. We're proud to be a trusted partner of the Indian Railways in their energy transition mission and even have our solar footprint at the highest peak of the Himalayas. #ClimateAction #CleanEnergy",
  },
  {
    title: "Climate Action",
    headline: "CLIMATE ACTION",
    icon: "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-13.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80",
    description:
      "RRIL's focus on renewable energy and waste-to-energy solutions directly aligns with UN Sustainable Development Goal 13: Climate Action by accelerating the shift to clean energy and reducing reliance on fossil fuels. Through large-scale solar installations and CBG production from MSW, RRIL contributes significantly to avoided emissions and plays a vital role in the mitigation of climate change.",
  },
  {
    title: "Life on Land",
    headline: "LIFE ON LAND",
    icon: "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-15.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
    description:
      'Refex\'s initiatives create a better life on land! "Plant for Future" will see 1,00,000 trees planted, while our coal and ash handling business rehabilitates abandoned mines. And we are supporting sustainable agriculture by offering land to local farmers for free. Let\'s make a better world together!',
  },
];

export function SDGSection() {
  const topStripImages = [
    {
      src: GLOBAL_GOALS_LOGO,
      alt: "Sustainable Development Goals",
      objectFit: "contain" as const,
    },
    ...sdgGoals.map((g) => ({
      src: g.icon,
      alt: g.title,
      objectFit: "cover" as const,
    })),
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Top icon row — equal tiles, even gap, centered */}
        <div className="border-y border-gray-200 py-8">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 sm:gap-8">
            {topStripImages.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className="flex size-[104px] shrink-0 items-center justify-center sm:size-[118px]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`h-full w-full rounded-lg shadow-md ring-1 ring-gray-100 ${
                    item.objectFit === "contain"
                      ? "object-contain"
                      : "object-cover"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Title + intro */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Sustainable Development Goals
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              We&apos;re dedicated to making the world a better place! By working
              with India and the UN to advance the Sustainable Development Goals,
              we believe that together, we can create meaningful change. Our
              focus goes beyond shareholder value—we aim to generate positive
              impact for people, communities, and the planet.
            </p>
            <p>
              As proud members of the UN Global Compact, we collaborate with
              partners worldwide, champion ethical business practices, and
              tackle some of today&apos;s biggest challenges. Let&apos;s build a
              better world, together!
            </p>
          </div>
        </div>

        {/* Large photo cards — flip to full description */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {sdgGoals.map((goal) => (
            <div
              key={`large-${goal.title}`}
              className="group [perspective:1200px]"
            >
              <div className="relative h-[260px] cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] sm:h-[280px] md:h-[300px]">
                {/* Front — photo + overlay + SDG tile + headline */}
                <div className="absolute inset-0 overflow-hidden rounded-xl shadow-xl [backface-visibility:hidden]">
                  <img
                    src={goal.coverImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 pb-6 pt-8">
                    <img
                      src={goal.icon}
                      alt=""
                      className="mb-4 h-20 w-20 rounded-md object-cover shadow-lg sm:h-24 sm:w-24"
                    />
                    <h3 className="text-center text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
                      {goal.headline}
                    </h3>
                  </div>
                </div>

                {/* Back — content */}
                <div className="absolute inset-0 overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex h-full flex-col justify-center overflow-y-auto p-5 text-white sm:p-6">
                    <h3 className="mb-3 text-center text-xl font-bold sm:text-2xl">
                      {goal.title}
                    </h3>
                    <p className="text-center text-sm leading-relaxed text-white/90 sm:text-base">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
