export function IntroSection() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-[110px]">
        <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-[3.3fr_1.7fr] md:gap-10 lg:gap-14">
          <div className="w-full">
            <div className="overflow-hidden rounded-lg shadow-sm">
              <img
                src="/images/ESG-Email-Teaser.jpg"
                alt="Refex Renewables ESG commitment"
                className="h-auto w-full min-h-[280px] object-contain object-center sm:min-h-[360px] lg:min-h-[420px]"
              />
            </div>
          </div>
          <div className="min-w-0 space-y-4 sm:space-y-6">
            <p className="text-justify text-base leading-relaxed text-gray-700 sm:text-lg lg:text-lg">
              At Refex Renewables, we are committed to building a better world through sustainable energy solutions. We place equal importance on People, Planet, and Profit, striving to lead as an ESG champion while working toward a carbon-neutral future.
            </p>
            <p className="text-justify text-base leading-relaxed text-gray-700 sm:text-lg lg:text-lg">
              By aligning with the United Nations Sustainable Development Goals, Refex Renewables is actively working towards a brighter, sustainable future. Join us in our mission to create positive impact and drive meaningful change for the planet!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
